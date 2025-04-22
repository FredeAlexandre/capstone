import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";

import { useState } from 'react'
import Header from '~/features/dashboard/components/header'
import Sidebar from '~/features/dashboard/components/sidebar'

export const Route = createFileRoute("/_authed")({
  component: RouteComponent,
  beforeLoad: ({ context, location }) => {
    return;
    if (!context.user) {
      throw redirect({
        to: "/signin",
        search: { redirect: encodeURIComponent(location.href) },
      });
    }
  },
});

function RouteComponent() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar open={sidebarOpen} />
        <Outlet />
      </div>
    </div>
  )
}
