import { createFileRoute } from '@tanstack/react-router';
import { Card, CardContent, CardHeader, CardTitle } from "@captsone/ui/card";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { format } from "date-fns";
import { hives } from "~/data/hives";
import { TemperatureChart } from '~/features/dashboard/components/temperature-chart';

export const Route = createFileRoute('/_authed/hive')({
  component: RouteComponent,
});

function Chart({
  data,
  color,
  label,
  unit,
  yDomain,
}: {
  data: { value: number; time: Date }[];
  color: string;
  label: string;
  unit: string;
  yDomain?: [number, number];
}) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <XAxis
          dataKey="time"
          axisLine={false}
          tickLine={false}
          fontSize={12}
          tickFormatter={(time) => format(new Date(time), "HH:mm")}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          fontSize={12}
          width={35}
          domain={yDomain}
          tickFormatter={(value) => `${value}${unit}`}
        />
        <Tooltip
          labelFormatter={(label) => format(new Date(label), "MMM dd, HH:mm")}
          formatter={(value: number) => [`${value.toFixed(1)}${unit}`, label]}
        />
        <Area
          type="monotone"
          dataKey="value"
          stroke={color}
          fill={color}
          fillOpacity={0.2}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

function RouteComponent() {
  // For demo, just use the first hive. You can adapt to select by ID, etc.
  const hive = hives[0];

  if (!hive) return null;

  // Prepare data for charts
  // Assume hive.temperatureHistory and hive.humidityHistory are arrays like:
  // [{ value: number, time: Date }, ...]
  // If not, adapt accordingly.

  const chartColors = {
    temperature: "#f59e0b", // orange
    humidity: "#3b82f6", // blue
  };

  return (
    <div className="min-h-screen bg-background w-full">
      <div className="container mx-auto space-y-8 px-4 py-8">
        <div>
          <h1 className="text-4xl font-bold">{hive.name} - Hive Details</h1>
          <p className="mt-2 text-muted-foreground">
            Location: {hive.location}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Temperature Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Temperature Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <TemperatureChart />
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}
