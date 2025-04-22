import { createFileRoute } from '@tanstack/react-router'

import { TemperatureChart } from "~/features/dashboard/components/temperature-chart"

export const Route = createFileRoute('/_authed/analytics')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="min-h-screen bg-background w-full">
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
