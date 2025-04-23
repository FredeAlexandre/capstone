interface Hive {
  id: string;
  name: string;
  location: string;
  status: 'healthy' | 'warning' | 'critical';
  lastInspection: string;
  temperature: number;
  humidity: number;
  population: 'low' | 'medium' | 'high';
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
    population: "high"
  },
  {
    id: "hive-002",
    name: "Lavender Grove",
    location: "East Garden",
    status: "warning",
    lastInspection: "2025-04-10",
    temperature: 37.8,
    humidity: 58,
    population: "medium"
  },
  {
    id: "hive-003",
    name: "Wildflower Haven",
    location: "South Meadow",
    status: "healthy",
    lastInspection: "2025-04-20",
    temperature: 34.9,
    humidity: 62,
    population: "high"
  },
  {
    id: "hive-004",
    name: "Clover Field",
    location: "West Pasture",
    status: "critical",
    lastInspection: "2025-04-05",
    temperature: 39.1,
    humidity: 45,
    population: "low"
  }
];
