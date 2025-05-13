import { createFileRoute } from '@tanstack/react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@captsone/ui/card";
import { Badge } from "@captsone/ui/badge";
import { Bell, Thermometer, Droplets, Bug, AlertTriangle } from "lucide-react";
import { format } from "date-fns";

export const Route = createFileRoute('/_authed/alerts')({
  component: RouteComponent,
});

interface Alert {
  id: string;
  hiveId: string;
  hiveName: string;
  type: 'temperature' | 'humidity' | 'pest' | 'maintenance';
  severity: 'low' | 'medium' | 'high';
  message: string;
  timestamp: Date;
  acknowledged: boolean;
}

// Simulated alerts data
const alerts: Alert[] = [
  {
    id: "alert-001",
    hiveId: "hive-002",
    hiveName: "Lavender Grove",
    type: "temperature",
    severity: "high",
    message: "Temperature exceeds optimal range (37.8°C)",
    timestamp: new Date(),
    acknowledged: false
  },
  {
    id: "alert-002",
    hiveId: "hive-004",
    hiveName: "Clover Field",
    type: "humidity",
    severity: "medium",
    message: "Humidity below recommended level (45%)",
    timestamp: new Date(Date.now() - 30 * 60000), // 30 minutes ago
    acknowledged: false
  },
  {
    id: "alert-003",
    hiveId: "hive-004",
    hiveName: "Clover Field",
    type: "pest",
    severity: "high",
    message: "Possible Varroa mite infestation detected",
    timestamp: new Date(Date.now() - 2 * 60 * 60000), // 2 hours ago
    acknowledged: true
  },
  {
    id: "alert-004",
    hiveId: "hive-001",
    hiveName: "Sunflower Meadow",
    type: "maintenance",
    severity: "low",
    message: "Routine inspection due in 2 days",
    timestamp: new Date(Date.now() - 4 * 60 * 60000), // 4 hours ago
    acknowledged: false
  }
];

function AlertIcon({ type }: { type: Alert['type'] }) {
  switch (type) {
    case 'temperature':
      return <Thermometer className="h-4 w-4" />;
    case 'humidity':
      return <Droplets className="h-4 w-4" />;
    case 'pest':
      return <Bug className="h-4 w-4" />;
    case 'maintenance':
      return <Bell className="h-4 w-4" />;
  }
}

function getSeverityColor(severity: Alert['severity']) {
  switch (severity) {
    case 'low':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100';
    case 'medium':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100';
    case 'high':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100';
  }
}

function RouteComponent() {
  const activeAlerts = alerts.filter(alert => !alert.acknowledged);
  const acknowledgedAlerts = alerts.filter(alert => alert.acknowledged);

  return (
    <div className="min-h-screen bg-background w-full">
      <div className="container mx-auto space-y-8 px-4 py-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">Alerts</h1>
            <p className="mt-2 text-muted-foreground">
              Monitor and manage hive alerts
            </p>
          </div>
          {activeAlerts.length > 0 && (
            <Badge variant="destructive" className="text-base px-3 py-1">
              <AlertTriangle className="h-4 w-4 mr-2" />
              {activeAlerts.length} Active Alert{activeAlerts.length !== 1 && 's'}
            </Badge>
          )}
        </div>

        <div className="space-y-6">
          {activeAlerts.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Active Alerts</CardTitle>
                <CardDescription>Alerts that require your attention</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {activeAlerts.map(alert => (
                  <div
                    key={alert.id}
                    className="flex items-start justify-between p-4 rounded-lg border bg-card text-card-foreground"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <AlertIcon type={alert.type} />
                        <span className="font-medium">{alert.hiveName}</span>
                        <Badge className={getSeverityColor(alert.severity)}>
                          {alert.severity}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {alert.message}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {format(alert.timestamp, "MMM d, yyyy 'at' HH:mm")}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {acknowledgedAlerts.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Alert History</CardTitle>
                <CardDescription>Previously acknowledged alerts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {acknowledgedAlerts.map(alert => (
                  <div
                    key={alert.id}
                    className="flex items-start justify-between p-4 rounded-lg border bg-muted/40"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <AlertIcon type={alert.type} />
                        <span className="font-medium">{alert.hiveName}</span>
                        <Badge className={getSeverityColor(alert.severity)}>
                          {alert.severity}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {alert.message}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {format(alert.timestamp, "MMM d, yyyy 'at' HH:mm")}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
