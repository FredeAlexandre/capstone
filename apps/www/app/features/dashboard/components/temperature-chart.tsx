import { Card, CardContent, CardHeader, CardTitle } from '@captsone/ui/card';
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Skeleton } from '@captsone/ui/skeleton';
import { useQuery } from '@tanstack/react-query';
import { createServerFn } from '@tanstack/start';

import { format } from "date-fns"

import { asc, desc, eq } from "@captsone/db"
import { db } from "@captsone/db/client"
import { sensorData } from "@captsone/db/schema"

let fake_data: { value: number, time: Date }[] = []

const fetchTemperature = createServerFn({method: "GET"}).handler(async () => {
  const data = await db.select({ value: sensorData.value, time: sensorData.createdAt }).from(sensorData).where(eq(sensorData.topic, "hive/temperature")).orderBy(desc(sensorData.createdAt)).limit(40)
  return data.map((entry) => ({...entry, value: Number(entry.value)})).reverse()

  const newEntry = {
    value: Number((Math.random() * 10 + 20).toFixed(2)), // Random temp between 20°C - 30°C
    time: new Date(), // Current timestamp
  };

  fake_data.push(newEntry)

  return fake_data
})

function Chart({ data }: { data?: { value: number; time: Date }[] }) {
  return (
    <ResponsiveContainer width="100%" height={600}>
      <AreaChart data={data}>
        <XAxis
          dataKey="time"
          axisLine={false}
          tickLine={false}
          fontSize={12}
          tickFormatter={(time) => format(new Date(time), "MMM dd, HH:mm")} // Format the date
        />
        <YAxis axisLine={false} tickLine={false} fontSize={12} width={35} />
        <Tooltip
          labelFormatter={(label) => format(new Date(label), "PPpp")} // Tooltip date format
        />
        <Area
          type="monotone"
          dataKey="value"
          stroke={"#8884d8"}
          fill={"#8884d8"}
          fillOpacity={0.2}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function TemperatureChart() {
  const { isLoading, data } = useQuery({
    queryKey: ["temperature"],
    queryFn: () => fetchTemperature(),
    refetchInterval: 1000
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>Temperature</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <Skeleton className="w-full" />
        ) : (
          <Chart data={data} />
        )}
      </CardContent>
    </Card>
  );
}