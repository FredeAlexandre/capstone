import { createFileRoute } from '@tanstack/react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@captsone/ui/card";
import { Thermometer, Droplets, Users } from "lucide-react";
import { hives } from '../../data/hives';

export const Route = createFileRoute('/_authed/all-hives')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-muted/40">
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          <h1 className="text-3xl font-bold tracking-tight">All Hives</h1>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {hives.map((hive) => (
            <Card key={hive.id} className="hover:bg-muted/60 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {hive.name}
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    hive.status === 'healthy' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' :
                    hive.status === 'warning' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100' :
                    'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100'
                  }`}>
                    {hive.status.charAt(0).toUpperCase() + hive.status.slice(1)}
                  </span>
                </CardTitle>
                <CardDescription>{hive.location}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 grid-cols-1">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Thermometer className="w-4 h-4 text-orange-500" />
                        <span className="text-sm text-muted-foreground">Temperature</span>
                      </div>
                      <span className="font-medium">{hive.temperature}°C</span>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Droplets className="w-4 h-4 text-blue-500" />
                        <span className="text-sm text-muted-foreground">Humidity</span>
                      </div>
                      <span className="font-medium">{hive.humidity}%</span>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-purple-500" />
                        <span className="text-sm text-muted-foreground">Population</span>
                      </div>
                      <span className="font-medium capitalize">{hive.population}</span>
                    </div>

                    <div className="text-sm text-muted-foreground pt-2 border-t">
                      Last inspection: {new Date(hive.lastInspection).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
