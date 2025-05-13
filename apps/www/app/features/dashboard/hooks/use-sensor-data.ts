import { useQuery } from '@tanstack/react-query';
import { SensorData } from '@/types/sensor';

// Simulated API call - replace with actual API endpoint
const fetchSensorData = async (): Promise<SensorData> => {
  // Simulate API latency
  await new Promise((resolve) => setTimeout(resolve, 500));
  
  return {
    temperature: 23.5 + Math.random() * 2,
    humidity: 45 + Math.random() * 10,
    sound: 35 + Math.random() * 15,
    signal: 85 + Math.random() * 10,
    timestamp: new Date().toISOString(),
  };
};

export const useSensorData = () => {
  return useQuery({
    queryKey: ['sensorData'],
    queryFn: fetchSensorData,
    refetchInterval: 5000,
    staleTime: 60000,
    retry: 3,
  });
};