#include <SPI.h>
#include <WiFiNINA.h>
#include <PubSubClient.h>
#include <OneWire.h>
#include <DallasTemperature.h>

// --- Paramètres WiFi ---
char ssid[] = "NETGEAR19";
char pass[] = "dynamicearth975";

// --- Paramètres MQTT ---
const char* mqtt_server = "77.37.125.11";
const int mqtt_port = 1883;
const char* mqtt_topic = "hive/temperature";

// --- Configuration sonde DS18B20 ---
#define ONE_WIRE_BUS 2
OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature sensors(&oneWire);

// --- Clients WiFi & MQTT ---
WiFiClient wifiClient;
PubSubClient client(wifiClient);

// --- Timers ---
unsigned long lastSendTime = 0;
const unsigned long interval = 5000; // 5 secondes

// --- Connexion au WiFi ---
void connectToWiFi() {
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print("Connexion au WiFi...");
    WiFi.begin(ssid, pass);
    delay(5000);
  }
  Serial.println("WiFi connecté !");
}

// --- Connexion au broker MQTT ---
void connectToMQTT() {
  while (!client.connected()) {
    Serial.print("Connexion au broker MQTT...");
    if (client.connect("arduinoClient")) {
      Serial.println("Connecté au broker MQTT !");
    } else {
      Serial.print("Échec, code retour : ");
      Serial.println(client.state());
      delay(5000);
    }
  }
}

void setup() {
  Serial.begin(9600);
  sensors.begin();

  if (WiFi.status() == WL_NO_MODULE) {
    Serial.println("Module WiFi non détecté !");
    while (true); // Stoppe le programme
  }

  connectToWiFi();
  client.setServer(mqtt_server, mqtt_port);
  connectToMQTT();
}

void loop() {
  if (WiFi.status() != WL_CONNECTED) {
    connectToWiFi();
  }

  if (!client.connected()) {
    connectToMQTT();
  }

  client.loop();

  unsigned long currentTime = millis();
  if (currentTime - lastSendTime >= interval) {
    lastSendTime = currentTime;

    // --- Lecture de la température ---
    sensors.requestTemperatures();
    float temperature = sensors.getTempCByIndex(0);



    if (temperature == -127.00) {
      Serial.println("Erreur : capteur non détecté !");
      return;
    }

    // --- Création du JSON ---
    char tempString[10];
    dtostrf(temperature, 4, 2, tempString);  // Convertit float en string

    char payload[50];
    snprintf(payload, sizeof(payload), "%s", tempString);

    // --- Envoi au broker MQTT ---
    if (client.publish(mqtt_topic, payload)) {
      Serial.print("Données envoyées en c°: ");
      Serial.println(payload);
    } else {
      Serial.println("Erreur : échec de l'envoi au broker MQTT.");
    }
  }
}
