
import { TemperatureChart } from "./components/temperature-chart"

function Dashboard() {
    return <div className="min-h-screen bg-background">
    <div className="container mx-auto space-y-8 px-4 py-8">
      <div>
        <h1 className="text-4xl font-bold">Hive Monitoring Dashboard</h1>
        <p className="mt-2 text-muted-foreground">
          Real-time sensor data from your hive
        </p>
      </div>
      <TemperatureChart />
    </div>
  </div>
}

export default Dashboard