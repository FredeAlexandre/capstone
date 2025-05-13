import {
    Bar,
    BarChart,
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
  } from "recharts";
  import { Tabs, TabsContent, TabsList, TabsTrigger } from "@captsone/ui/tabs";

  const data = [
    {
      name: "Jan",
      honey: 12,
      wax: 4,
    },
    {
      name: "Feb",
      honey: 14,
      wax: 3,
    },
    {
      name: "Mar",
      honey: 18,
      wax: 5,
    },
    {
      name: "Apr",
      honey: 22,
      wax: 6,
    },
    {
      name: "May",
      honey: 24,
      wax: 8,
    },
    {
      name: "Jun",
      honey: 28,
      wax: 10,
    },
  ];
  
  export default function DashboardChart() {
    return (
      <Tabs defaultValue="bar" className="w-full">
        <div className="flex justify-between items-center mb-4">
          <TabsList>
            <TabsTrigger value="bar">Bar</TabsTrigger>
            <TabsTrigger value="line">Line</TabsTrigger>
          </TabsList>
          <div className="flex items-center text-xs text-muted-foreground gap-2">
            <div className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-amber-500"></span>
              <span>Honey (kg)</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-slate-500"></span>
              <span>Wax (kg)</span>
            </div>
          </div>
        </div>
        
        <TabsContent value="bar" className="w-full">
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{
                  top: 5,
                  right: 10,
                  left: 0,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis
                  dataKey="name"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  className="text-muted-foreground"
                />
                <YAxis
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  className="text-muted-foreground"
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--popover))',
                    borderColor: 'hsl(var(--border))',
                    color: 'hsl(var(--popover-foreground))',
                    borderRadius: '0.5rem',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                />
                <Bar
                  dataKey="honey"
                  fill="hsl(var(--chart-1))"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="wax"
                  fill="hsl(var(--chart-3))"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </TabsContent>
        
        <TabsContent value="line" className="w-full">
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{
                  top: 5,
                  right: 10,
                  left: 0,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis
                  dataKey="name"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  className="text-muted-foreground"
                />
                <YAxis
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  className="text-muted-foreground"
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--popover))',
                    borderColor: 'hsl(var(--border))',
                    color: 'hsl(var(--popover-foreground))',
                    borderRadius: '0.5rem',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                />
                <Line
                  type="monotone"
                  strokeWidth={2}
                  dataKey="honey"
                  stroke="hsl(var(--chart-1))"
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  strokeWidth={2}
                  dataKey="wax"
                  stroke="hsl(var(--chart-3))"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </TabsContent>
      </Tabs>
    );
  }