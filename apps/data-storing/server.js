// import { db } from "@capstone/db";
// import { sensorData } from "@capstone/db/schema";
import mqtt from "mqtt";

const brokerUrl = "mqtt://77.37.125.11";
const client = mqtt.connect(brokerUrl);

client.on("connect", () => {
  console.log("✅ Connected to MQTT broker");
  client.subscribe(["hive/temperature", "hive/humidity"], (err) => {
    if (err) {
      console.error("❌ Subscription error :", err);
    } else {
      console.log("📡 Subscribed to topics : hive/temperature, hive/humidity");
    }
  });
});

client.on("message", async (topic, message) => {
  const value = message.toString();
  console.log(`📥 Received on [${topic}] : ${value}`);

  // try {
  //   await db.insert(sensorData).values({
  //     topic,
  //     value,
  //   });
  //   console.log("💾 Data saved in database.");
  // } catch (error) {
  //   console.error("❌ Error while saving data :", error);
  // }
});
