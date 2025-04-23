import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authed/alerts')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authed/alerts"!</div>
}
