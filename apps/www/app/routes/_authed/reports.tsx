import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authed/reports')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authed/reports"!</div>
}
