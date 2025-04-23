import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authed/add-new-hive')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authed/add-new-hive"!</div>
}
