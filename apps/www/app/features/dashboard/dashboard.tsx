import { BentoGrid } from "./components/bento-grid"
import { MetricsGrid } from "./components/metrics-grid"

function Dashboard() {
    return <div className="min-h-screen bg-background">
    <div className="container mx-auto space-y-8 px-4 py-8">
      <div>
        <h1 className="text-4xl font-bold">Hive Monitoring Dashboard</h1>
        <p className="mt-2 text-muted-foreground">
          Real-time sensor data from your hive
        </p>
      </div>

      <MetricsGrid />
      <BentoGrid />
    </div>
  </div>
}

export default Dashboard