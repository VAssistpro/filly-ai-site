import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard.html")({
  beforeLoad: ({ location }) => {
    throw redirect({ to: "/dashboard", hash: location.hash, replace: true });
  },
});
