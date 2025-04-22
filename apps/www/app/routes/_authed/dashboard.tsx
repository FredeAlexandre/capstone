import { createFileRoute } from "@tanstack/react-router";
import DashboardContent from "~/features/dashboard/components/layout/dashboard-content";

export const Route = createFileRoute("/_authed/dashboard")({
  component: DashboardContent,
});
