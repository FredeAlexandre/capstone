import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authed/all-hives')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authed/all-hives"!</div>
}
