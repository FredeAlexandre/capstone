import { createFileRoute } from '@tanstack/react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@captsone/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@captsone/ui/select";
import { Button } from "@captsone/ui/button";
import { CalendarIcon, Download } from "lucide-react";
import { format } from "date-fns";
import { hives } from "~/data/hives";

export const Route = createFileRoute('/_authed/reports')({
  component: RouteComponent,
});

interface Report {
  id: string;
  title: string;
  description: string;
  type: 'temperature' | 'humidity' | 'population' | 'comprehensive';
  generatedAt: Date;
  downloadUrl: string;
}

// Simulated reports data
const recentReports: Report[] = [
  {
    id: "report-001",
    title: "Temperature Analysis - Lavender Grove",
    description: "24-hour temperature variation analysis",
    type: "temperature",
    generatedAt: new Date(Date.now() - 2 * 60 * 60000), // 2 hours ago
    downloadUrl: "#"
  },
  {
    id: "report-002",
    title: "Monthly Health Report - All Hives",
    description: "Comprehensive health analysis for April 2025",
    type: "comprehensive",
    generatedAt: new Date(Date.now() - 24 * 60 * 60000), // 24 hours ago
    downloadUrl: "#"
  },
  {
    id: "report-003",
    title: "Population Trends - Clover Field",
    description: "Weekly population monitoring report",
    type: "population",
    generatedAt: new Date(Date.now() - 72 * 60 * 60000), // 3 days ago
    downloadUrl: "#"
  }
];

function RouteComponent() {
  return (
    <div className="min-h-screen bg-background w-full">
      <div className="container mx-auto space-y-8 px-4 py-8">
        <div>
          <h1 className="text-4xl font-bold">Reports</h1>
          <p className="mt-2 text-muted-foreground">
            Generate and view hive monitoring reports
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Generate New Report</CardTitle>
            <CardDescription>Select parameters for your report</CardDescription>
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
                    <SelectItem value="all">All Hives</SelectItem>
                    {hives.map(hive => (
                      <SelectItem key={hive.id} value={hive.id}>
                        {hive.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Report Type</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select report type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="temperature">Temperature Analysis</SelectItem>
                    <SelectItem value="humidity">Humidity Analysis</SelectItem>
                    <SelectItem value="population">Population Trends</SelectItem>
                    <SelectItem value="comprehensive">Comprehensive Report</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Date Range</label>
                <div className="grid gap-2">
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    Select dates
                  </Button>
                </div>
              </div>

              <div className="flex items-end">
                <Button className="w-full">
                  Generate Report
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Reports</CardTitle>
            <CardDescription>Previously generated reports</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentReports.map(report => (
              <div
                key={report.id}
                className="flex items-center justify-between p-4 rounded-lg border"
              >
                <div className="space-y-1">
                  <h3 className="font-medium">{report.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {report.description}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Generated {format(report.generatedAt, "MMM d, yyyy 'at' HH:mm")}
                  </p>
                </div>
                <Button variant="ghost" size="icon" asChild>
                  <a href={report.downloadUrl} download>
                    <Download className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
