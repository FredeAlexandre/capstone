import { subHours, addMinutes } from "date-fns";

interface TemperatureReading {
  value: number;
  time: Date;
}

interface Hive {
  id: string;
  name: string;
  location: string;
  status: 'healthy' | 'warning' | 'critical';
  lastInspection: string;
  temperature: number;
  humidity: number;
  population: 'low' | 'medium' | 'high';
  temperatureHistory: TemperatureReading[];
}

// Generate 24 hours of temperature data for each hive
function generateTemperatureHistory(baseTemp: number): TemperatureReading[] {
  const history: TemperatureReading[] = [];
  const startTime = subHours(new Date(), 24);
  
  for (let i = 0; i < 288; i++) { // 5-minute intervals for 24 hours
    const time = addMinutes(startTime, i * 5);
    const randomVariation = (Math.random() - 0.5) * 2; // ±1°C variation
    const value = Number((baseTemp + randomVariation).toFixed(2));
    history.push({ value, time });
  }
  
  return history;
}

export const hives: Hive[] = [
  {
    id: "hive-001",
    name: "Sunflower Meadow",
    location: "North Field",
    status: "healthy",
    lastInspection: "2025-04-15",
    temperature: 35.2,
    humidity: 65,
    population: "high",
    temperatureHistory: generateTemperatureHistory(35.2)
  },
  {
    id: "hive-002",
    name: "Lavender Grove",
    location: "East Garden",
    status: "warning",
    lastInspection: "2025-04-10",
    temperature: 37.8,
    humidity: 58,
    population: "medium",
    temperatureHistory: generateTemperatureHistory(37.8)
  },
  {
    id: "hive-003",
    name: "Wildflower Haven",
    location: "South Meadow",
    status: "healthy",
    lastInspection: "2025-04-20",
    temperature: 34.9,
    humidity: 62,
    population: "high",
    temperatureHistory: generateTemperatureHistory(34.9)
  },
  {
    id: "hive-004",
    name: "Clover Field",
    location: "West Pasture",
    status: "critical",
    lastInspection: "2025-04-05",
    temperature: 39.1,
    humidity: 45,
    population: "low",
    temperatureHistory: generateTemperatureHistory(39.1)
  }
];
