import { Card, CardContent, CardHeader, CardTitle } from '@captsone/ui/card';
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { useSensorData } from '../hooks/use-sensor-data';
import { Skeleton } from '@captsone/ui/skeleton';

const data = [
  { name: '00:00', value: 23 },
  { name: '04:00', value: 24 },
  { name: '08:00', value: 25 },
  { name: '12:00', value: 26 },
  { name: '16:00', value: 25 },
  { name: '20:00', value: 24 },
];

interface ChartProps {
  title: string;
  color: string;
  isLoading: boolean;
}

function TrendChart({ title, color, isLoading }: ChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <Skeleton className="h-[200px] w-full" />
        ) : (
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={data}>
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                fontSize={12}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                fontSize={12}
                width={35}
              />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="value"
                stroke={color}
                fill={color}
                fillOpacity={0.2}
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
}

export function BentoGrid() {
  const { isLoading } = useSensorData();

  const charts = [
    { title: 'Temperature Trend', color: '#8884d8' },
    { title: 'Humidity Trend', color: '#82ca9d' },
    { title: 'Sound Level Trend', color: '#ffc658' },
    { title: 'Signal Strength Trend', color: '#ff7300' },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
      {charts.map((chart) => (
        <TrendChart
          key={chart.title}
          title={chart.title}
          color={chart.color}
          isLoading={isLoading}
        />
      ))}
    </div>
  );
}