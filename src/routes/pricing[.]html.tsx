import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/pricing.html")({
  beforeLoad: () => {
    throw redirect({ to: "/pricing", replace: true });
  },
});
