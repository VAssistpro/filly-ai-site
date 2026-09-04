import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/signin.html")({
  beforeLoad: ({ location }) => {
    throw redirect({ to: "/signin", search: location.search, hash: location.hash, replace: true });
  },
});
