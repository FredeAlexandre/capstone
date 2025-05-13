import { createFileRoute } from '@tanstack/react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@captsone/ui/card";
import { Button } from "@captsone/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@captsone/ui/select";
import { CheckCircle2, Clock, CalendarClock } from "lucide-react";
import { format, addDays } from "date-fns";
import { hives } from "~/data/hives";

export const Route = createFileRoute('/_authed/schedule')({
  component: RouteComponent,
});

interface Task {
  id: string;
  hiveId: string;
  hiveName: string;
  type: 'inspection' | 'maintenance' | 'harvest';
  status: 'scheduled' | 'completed' | 'overdue';
  scheduledDate: Date;
  completedDate?: Date;
  notes?: string;
}

// Simulated tasks data
const tasks: Task[] = [
  {
    id: "task-001",
    hiveId: "hive-001",
    hiveName: "Sunflower Meadow",
    type: "inspection",
    status: "scheduled",
    scheduledDate: addDays(new Date(), 2),
    notes: "Regular health check and population assessment"
  },
  {
    id: "task-002",
    hiveId: "hive-002",
    hiveName: "Lavender Grove",
    type: "maintenance",
    status: "overdue",
    scheduledDate: addDays(new Date(), -1),
    notes: "Clean bottom board and check for mites"
  },
  {
    id: "task-003",
    hiveId: "hive-003",
    hiveName: "Wildflower Haven",
    type: "harvest",
    status: "completed",
    scheduledDate: addDays(new Date(), -5),
    completedDate: addDays(new Date(), -5),
    notes: "Spring honey harvest"
  }
];

function getStatusColor(status: Task['status']) {
  switch (status) {
    case 'scheduled':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100';
    case 'completed':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100';
    case 'overdue':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100';
  }
}

function RouteComponent() {
  return (
    <div className="min-h-screen bg-background w-full">
      <div className="container mx-auto space-y-8 px-4 py-8">
        <div>
          <h1 className="text-4xl font-bold">Schedule</h1>
          <p className="mt-2 text-muted-foreground">
            Plan and track hive maintenance tasks
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Schedule New Task</CardTitle>
            <CardDescription>Create a new maintenance task</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium">Hive</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a hive" />
                  </SelectTrigger>
                  <SelectContent>
                    {hives.map(hive => (
                      <SelectItem key={hive.id} value={hive.id}>
                        {hive.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Task Type</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select task type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="inspection">Inspection</SelectItem>
                    <SelectItem value="maintenance">Maintenance</SelectItem>
                    <SelectItem value="harvest">Harvest</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Date</label>
                <Button variant="outline" className="w-full justify-start text-left font-normal">
                  <CalendarClock className="mr-2 h-4 w-4" />
                  Select date
                </Button>
              </div>

              <div className="flex items-end">
                <Button className="w-full">
                  Schedule Task
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Tasks</CardTitle>
              <CardDescription>
                Scheduled and overdue tasks
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {tasks
                .filter(task => task.status !== 'completed')
                .map(task => (
                  <div
                    key={task.id}
                    className="flex items-start justify-between p-4 rounded-lg border"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span className="font-medium">{task.hiveName}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor(task.status)}`}>
                          {task.status}
                        </span>
                      </div>
                      <p className="text-sm">
                        {task.type.charAt(0).toUpperCase() + task.type.slice(1)}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {task.notes}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Scheduled for {format(task.scheduledDate, "MMM d, yyyy")}
                      </p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <CheckCircle2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Completed Tasks</CardTitle>
              <CardDescription>
                Recently completed tasks
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {tasks
                .filter(task => task.status === 'completed')
                .map(task => (
                  <div
                    key={task.id}
                    className="flex items-start justify-between p-4 rounded-lg border bg-muted/40"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span className="font-medium">{task.hiveName}</span>
                      </div>
                      <p className="text-sm">
                        {task.type.charAt(0).toUpperCase() + task.type.slice(1)}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {task.notes}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Completed on {format(task.completedDate!, "MMM d, yyyy")}
                      </p>
                    </div>
                  </div>
                ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
