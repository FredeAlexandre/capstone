#include <OneWire.h>
#include <DallasTemperature.h>
#include <WiFi.h>
#include <PubSubClient.h>

// --- Config Sonde DS18B20 ---
#define ONE_WIRE_BUS 2 
OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature sensors(&oneWire);

// --- Config WiFi ---
const char* ssid = "NETGEAR19"; 
const char* password = "dynamicearth975";      

// --- Config MQTT ---
const char* mqtt_server = "mqtt://77.37.125.11";  
const int mqtt_port = 1883;                   
const char* mqtt_topic = "hive/temperature";  
WiFiClient espClient;
PubSubClient client(espClient); 

// --- Variables ---
float temperature = 0.0;
unsigned long lastSendTime = 0;
const unsigned long interval = 5000;

// Fonction de connexion au broker MQTT
void reconnectMQTT() {
  while (!client.connected()) {
    Serial.print("Connexion au broker MQTT...");
   
    if (client.connect("ESP32Client")) {
      Serial.println("Connecté !");
    } else {
      Serial.print("Échec, rc=");
      Serial.print(client.state());
      Serial.println(" Nouvelle tentative dans 1 secondes...");
      delay(2000);
    }
  }
}

void setup() {
  // Initialisation du moniteur série
  Serial.begin(9600);

  // Initialisation de la sonde
  sensors.begin();

  // Connexion au WiFi
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connexion WiFi...");
  }
  Serial.println("WiFi Connecté !");

  // Configuration du serveur MQTT
  client.setServer(mqtt_server, mqtt_port);
}

void loop() {
  // Assure-toi que la connexion au broker est active
  // if (!client.connected()) {
  //   reconnectMQTT();
  // }
  // client.loop();

  // Lecture de la température
  sensors.requestTemperatures();
  temperature = sensors.getTempCByIndex(0);

  // Affichage sur le port série
  Serial.print("Temp: ");
  Serial.print(temperature);
  Serial.println(" C");

  // Envoi au broker MQTT toutes les 5 secondes
  if (millis() - lastSendTime >= interval) {
    // Préparation des données à envoyer
    char payload[50];
    snprintf(payload, sizeof(payload), "{\"temperature\": %.2f}", temperature);

    // Publication des données sur le sujet MQTT
    if (client.publish(mqtt_topic, payload)) {
      Serial.println("Données envoyées avec succès au broker MQTT !");
    } else {
      // Serial.println("Échec de l'envoi des données.");
    }

    // Mise à jour du dernier envoi
    lastSendTime = millis();
  }

  delay(3000);
}