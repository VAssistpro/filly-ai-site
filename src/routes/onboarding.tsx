import { createFileRoute } from "@tanstack/react-router";
import { FillyOnboarding } from "@/components/filly/FillyOnboarding";

export const Route = createFileRoute("/onboarding")({
  head: () => ({
    meta: [
      { title: "Filly — Reservation Copilot Onboarding" },
      {
        name: "description",
        content:
          "Filly turns emails, PDFs, and screenshots into perfectly filled Limo Anywhere reservations in seconds. Get started in light or dark mode.",
      },
      { property: "og:title", content: "Filly — Reservation Copilot Onboarding" },
      {
        property: "og:description",
        content:
          "From email to a perfect reservation, in seconds. Sign in and start filling reservations with Filly.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <h1 className="sr-only">Filly reservation copilot onboarding</h1>
      <FillyOnboarding />
    </>
  );
}


