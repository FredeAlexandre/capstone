import { createFileRoute } from '@tanstack/react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@captsone/ui/card";
import { Button } from "@captsone/ui/button";
import { Input } from "@captsone/ui/input";
import { Badge } from "@captsone/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@captsone/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@captsone/ui/tabs";
import { Separator } from "@captsone/ui/separator";
import { ScrollArea } from "@captsone/ui/scroll-area";
import { Avatar } from "@captsone/ui/avatar";
import {
  UserPlus,
  Settings2,
  Mail,
  AlertTriangle,
  Bell,
  Clock,
  CheckCircle2,
  XCircle,
  ChevronRight,
  UserCircle,
  Calendar,
  MessageSquare
} from "lucide-react";
import { format } from "date-fns";

export const Route = createFileRoute('/_authed/team')({
  component: RouteComponent,
});

interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'beekeeper' | 'observer';
  status: 'active' | 'invited' | 'inactive';
  lastActive: Date;
  assignedHives: string[];
}

interface Activity {
  id: string;
  userId: string;
  userName: string;
  type: 'hive_inspection' | 'alert_response' | 'maintenance' | 'system_update';
  description: string;
  timestamp: Date;
  status: 'completed' | 'pending' | 'cancelled';
}

// Simulated team data
const teamMembers: TeamMember[] = [
  {
    id: "user-001",
    name: "Alex Smith",
    email: "alex.smith@example.com",
    role: "admin",
    status: "active",
    lastActive: new Date(),
    assignedHives: ["hive-001", "hive-002", "hive-003"]
  },
  {
    id: "user-002",
    name: "Maria Garcia",
    email: "maria.garcia@example.com",
    role: "beekeeper",
    status: "active",
    lastActive: new Date(Date.now() - 2 * 60 * 60000),
    assignedHives: ["hive-002", "hive-004"]
  },
  {
    id: "user-003",
    name: "John Davis",
    email: "john.davis@example.com",
    role: "observer",
    status: "invited",
    lastActive: new Date(Date.now() - 24 * 60 * 60000),
    assignedHives: []
  }
];

const recentActivity: Activity[] = [
  {
    id: "act-001",
    userId: "user-002",
    userName: "Maria Garcia",
    type: "hive_inspection",
    description: "Completed routine inspection of Hive #004",
    timestamp: new Date(Date.now() - 30 * 60000),
    status: "completed"
  },
  {
    id: "act-002",
    userId: "user-001",
    userName: "Alex Smith",
    type: "alert_response",
    description: "Addressed high temperature alert in Hive #002",
    timestamp: new Date(Date.now() - 2 * 60 * 60000),
    status: "completed"
  },
  {
    id: "act-003",
    userId: "user-002",
    userName: "Maria Garcia",
    type: "maintenance",
    description: "Scheduled maintenance for Hive #004",
    timestamp: new Date(Date.now() - 4 * 60 * 60000),
    status: "pending"
  }
];

function getRoleBadgeColor(role: TeamMember['role']) {
  switch (role) {
    case 'admin':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
    case 'manager':
      return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
    case 'beekeeper':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    case 'observer':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
  }
}

function getStatusColor(status: TeamMember['status'] | Activity['status']) {
  switch (status) {
    case 'active':
    case 'completed':
      return 'text-green-600';
    case 'invited':
    case 'pending':
      return 'text-yellow-600';
    case 'inactive':
    case 'cancelled':
      return 'text-red-600';
  }
}

function RouteComponent() {
  return (
    <div className="min-h-screen bg-background w-full">
      <div className="container mx-auto space-y-8 px-4 py-8">
        <div className="flex justify-between items-center w-full">
          <div>
            <h1 className="text-4xl font-bold">Team Management</h1>
            <p className="mt-2 text-muted-foreground">
              Manage your team members and monitor activity
            </p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <UserPlus className="mr-2 h-4 w-4" />
                Invite Member
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Invite Team Member</DialogTitle>
                <DialogDescription>
                  Send an invitation to join your team. They'll receive an email with instructions.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <label htmlFor="email">Email</label>
                  <Input id="email" placeholder="colleague@example.com" type="email" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="role">Role</label>
                  <select
                    id="role"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                  >
                    <option value="beekeeper">Beekeeper</option>
                    <option value="manager">Manager</option>
                    <option value="observer">Observer</option>
                  </select>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button>Send Invitation</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <Tabs defaultValue="members" className="space-y-6">
          <TabsList>
            <TabsTrigger value="members">Team Members</TabsTrigger>
            <TabsTrigger value="activity">Recent Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="members">
            <Card>
              <CardHeader>
                <CardTitle>Team Members</CardTitle>
                <CardDescription>
                  View and manage your team members and their roles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px] pr-4">
                  <div className="space-y-4">
                    {teamMembers.map((member) => (
                      <div
                        key={member.id}
                        className="flex items-center justify-between p-4 rounded-lg border"
                      >
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <UserCircle className="h-10 w-10" />
                          </Avatar>
                          <div>
                            <h3 className="font-medium">{member.name}</h3>
                            <p className="text-sm text-muted-foreground">{member.email}</p>
                            <div className="flex items-center space-x-2 mt-1">
                              <Badge variant="secondary" className={getRoleBadgeColor(member.role)}>
                                {member.role}
                              </Badge>
                              <span className={`text-sm ${getStatusColor(member.status)}`}>
                                {member.status}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-muted-foreground">
                            {format(member.lastActive, "MMM d, h:mm a")}
                          </span>
                          <Button variant="ghost" size="icon">
                            <Settings2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activity">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>
                  Monitor your team's recent actions and tasks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px] pr-4">
                  <div className="space-y-4">
                    {recentActivity.map((activity) => (
                      <div
                        key={activity.id}
                        className="flex items-start space-x-4 p-4 rounded-lg border"
                      >
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">{activity.userName}</span>
                            <span className={`text-sm ${getStatusColor(activity.status)}`}>
                              • {activity.status}
                            </span>
                          </div>
                          <p className="mt-1">{activity.description}</p>
                          <div className="flex items-center space-x-2 mt-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>{format(activity.timestamp, "MMM d, h:mm a")}</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
