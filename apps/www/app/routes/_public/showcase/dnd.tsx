import { createFileRoute } from "@tanstack/react-router";

import { MyContextProvider } from "~/components/drag-n-drop/context";
import { NoCodeExample } from "~/components/drag-n-drop/no-code-example";

export const Route = createFileRoute("/_public/showcase/dnd")({
  component: RouteComponent,
});

// !TODO Context name to change more explicit like "CodeContext", "BlocksContext", ...
function RouteComponent() {
  return (
    <MyContextProvider>
      <NoCodeExample />
    </MyContextProvider>
  );
}
