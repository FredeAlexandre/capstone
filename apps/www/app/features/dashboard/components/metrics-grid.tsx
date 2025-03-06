import { Droplets, Signal, Thermometer, Volume2 } from 'lucide-react';
import { MetricCard } from './metric-card';
import { useSensorData } from '../hooks/use-sensor-data';

export function MetricsGrid() {
  const { data, isLoading, error } = useSensorData();

  const metrics = [
    {
      title: 'Temperature',
      value: data?.temperature ?? 0,
      unit: '°C',
      trend: 2.5,
      icon: Thermometer,
    }
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <MetricCard
          key={metric.title}
          {...metric}
          isLoading={isLoading}
          error={error as Error}
        />
      ))}
    </div>
  );
}