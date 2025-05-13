import { createFileRoute } from '@tanstack/react-router';
import { Card, CardContent, CardHeader, CardTitle } from "@captsone/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@captsone/ui/tabs";
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

export const Route = createFileRoute('/_authed/analytics')({
  component: RouteComponent,
});

function Chart({ data, color }: { data: { value: number; time: Date }[], color: string }) {
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
          domain={[20, 40]}
          tickFormatter={(value) => `${value}°C`}
        />
        <Tooltip
          labelFormatter={(label) => format(new Date(label), "MMM dd, HH:mm")}
          formatter={(value: number) => [`${value.toFixed(1)}°C`, "Temperature"]}
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
  const chartColors = {
    healthy: "#22c55e", // green
    warning: "#f59e0b", // amber
    critical: "#ef4444", // red
  };

  return (
    <div className="min-h-screen bg-background w-full">
      <div className="container mx-auto space-y-8 px-4 py-8">
        <div>
          <h1 className="text-4xl font-bold">Hive Monitoring Dashboard</h1>
          <p className="mt-2 text-muted-foreground">
            Real-time temperature data from all your hives
          </p>
        </div>

        <Tabs defaultValue="grid" className="space-y-4">
          <TabsList>
            <TabsTrigger value="grid">Grid View</TabsTrigger>
            <TabsTrigger value="stack">Stack View</TabsTrigger>
          </TabsList>

          <TabsContent value="grid" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              {hives.map((hive) => (
                <Card key={hive.id}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-base font-medium">
                      {hive.name}
                    </CardTitle>
                    <span
                      className={`text-sm px-2 py-1 rounded-full ${
                        hive.status === 'healthy'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100'
                          : hive.status === 'warning'
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100'
                          : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100'
                      }`}
                    >
                      {hive.temperature.toFixed(1)}°C
                    </span>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground mb-4">
                      Location: {hive.location}
                    </div>
                    <Chart 
                      data={hive.temperatureHistory} 
                      color={
                        hive.status === 'healthy'
                          ? chartColors.healthy
                          : hive.status === 'warning'
                          ? chartColors.warning
                          : chartColors.critical
                      }
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="stack" className="space-y-4">
            {hives.map((hive) => (
              <Card key={hive.id}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div>
                    <CardTitle className="text-base font-medium">
                      {hive.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Location: {hive.location}
                    </p>
                  </div>
                  <span
                    className={`text-sm px-2 py-1 rounded-full ${
                      hive.status === 'healthy'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100'
                        : hive.status === 'warning'
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100'
                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100'
                    }`}
                  >
                    {hive.temperature.toFixed(1)}°C
                  </span>
                </CardHeader>
                <CardContent>
                  <Chart 
                    data={hive.temperatureHistory}
                    color={
                      hive.status === 'healthy'
                        ? chartColors.healthy
                        : hive.status === 'warning'
                        ? chartColors.warning
                        : chartColors.critical
                    }
                  />
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
