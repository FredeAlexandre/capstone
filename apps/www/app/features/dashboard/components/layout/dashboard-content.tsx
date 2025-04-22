import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@captsone/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@captsone/ui/tabs";
import { 
  BarChart, 
  Thermometer, 
  Cloud, 
  Droplets, 
  Bug, 
  Scale, 
  BellPlus,
  Hexagon
} from "lucide-react";
import { HiveStatusCard } from '../hive-status-card';
import { WeatherWidget } from '../weather-widget';
import DashboardChart from '../dashboard-chart';
import { TasksList } from '../tasks-list';

const DashboardContent = () => {
  return (
    <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-muted/40">
      <div className="flex flex-col gap-2 md:gap-4">
        <div className="flex flex-wrap gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <HiveStatusCard 
            title="Active Hives"
            value="8"
            description="2 hives need attention"
            icon={Hexagon}
            trend="+1 from last month"
            trendUp={true}
          />
          <HiveStatusCard 
            title="Average Temperature"
            value="35°C"
            description="Across all hives"
            icon={Thermometer}
            trend="0.5°C higher than optimal"
            trendUp={true}
            trendType="warning"
          />
          <HiveStatusCard 
            title="Honey Production"
            value="127kg"
            description="Total this season"
            icon={Scale}
            trend="+18% from last season"
            trendUp={true}
            trendType="success"
          />
          <HiveStatusCard 
            title="Health Alerts"
            value="2"
            description="Across 2 hives"
            icon={BellPlus}
            trend="1 new alert today"
            trendUp={false}
            trendType="destructive"
          />
        </div>
        
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="lg:col-span-4">
                <CardHeader>
                  <CardTitle>Hive Productivity</CardTitle>
                  <CardDescription>
                    Honey production over the last 6 months
                  </CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <DashboardChart />
                </CardContent>
              </Card>
              
              <Card className="lg:col-span-3">
                <CardHeader>
                  <CardTitle>Local Weather Conditions</CardTitle>
                  <CardDescription>
                    Current conditions affecting your apiaries
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <WeatherWidget />
                </CardContent>
              </Card>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="lg:col-span-3">
                <CardHeader>
                  <CardTitle>Upcoming Tasks</CardTitle>
                  <CardDescription>
                    Scheduled activities and inspections
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <TasksList />
                </CardContent>
              </Card>
              
              <Card className="lg:col-span-4">
                <CardHeader>
                  <CardTitle>Hive Health Status</CardTitle>
                  <CardDescription>
                    Current health indicators across all hives
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Bug className="w-5 h-5 text-amber-500" />
                          <h3 className="font-medium">Pest Detection</h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">Last 30 days</p>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-semibold">Low</span>
                          <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                            Safe
                          </span>
                        </div>
                      </div>
                      
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Droplets className="w-5 h-5 text-blue-500" />
                          <h3 className="font-medium">Humidity Levels</h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">Avg across hives</p>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-semibold">62%</span>
                          <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                            Optimal
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Cloud className="w-5 h-5 text-slate-500" />
                          <h3 className="font-medium">Pollen Sources</h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">Current availability</p>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-semibold">High</span>
                          <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                            Abundant
                          </span>
                        </div>
                      </div>
                      
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <BarChart className="w-5 h-5 text-purple-500" />
                          <h3 className="font-medium">Queen Activity</h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">Egg-laying rate</p>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-semibold">Normal</span>
                          <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                            Healthy
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Analytics Coming Soon</CardTitle>
                <CardDescription>
                  Detailed analytics will be available in future updates.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center items-center p-8">
                  <div className="text-center">
                    <BarChart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-muted-foreground">
                      Advanced analytics and reporting capabilities will be available soon.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reports" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Reports Coming Soon</CardTitle>
                <CardDescription>
                  Detailed reports will be available in future updates.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center items-center p-8">
                  <div className="text-center">
                    <p className="text-muted-foreground">
                      Comprehensive reports and exports will be available soon.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default DashboardContent;