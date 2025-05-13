export interface SensorData {
    temperature: number;
    humidity: number;
    sound: number;
    signal: number;
    timestamp: string;
  }
  
  export interface MetricCardProps {
    title: string;
    value: number;
    unit: string;
    trend: number;
    icon: React.ComponentType<{ className?: string }>;
    isLoading?: boolean;
    error?: Error | null;
  }
  
  export interface ChartData {
    name: string;
    value: number;
  }
  
  export interface TimeSeriesData {
    timestamp: string;
    temperature: number;
    humidity: number;
    sound: number;
    signal: number;
  }