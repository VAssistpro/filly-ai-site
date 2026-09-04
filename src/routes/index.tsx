import { createFileRoute } from "@tanstack/react-router";

import { homeWebPageSchema, softwareApplicationSchema } from "../components/site/schemas";
import { HomeRedesign } from "./-home-redesign";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Filly AI — Booking emails to review-ready Limo Anywhere reservations",
      },
      {
        name: "description",
        content:
          "Filly turns selected booking emails and documents into review-ready Limo Anywhere reservations in about 35 seconds on average, including supported batch workflows.",
      },
      {
        property: "og:title",
        content: "Filly AI — Review-ready reservations in about 35 seconds",
      },
      {
        property: "og:description",
        content:
          "Import a selected booking request, review every trip, and let Filly map supported fields into Limo Anywhere—including supported batches.",
      },
      { property: "og:url", content: "/" },
      {
        property: "og:image",
        content: "https://getfillyai.com/screenshots/current/filly-working-dark.png",
      },
      {
        name: "twitter:image",
        content: "https://getfillyai.com/screenshots/current/filly-working-dark.png",
      },
    ],
    links: [
      { rel: "canonical", href: "/" },
      {
        rel: "preload",
        as: "image",
        href: "/screenshots/current/filly-working-dark.png",
        fetchpriority: "high",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(softwareApplicationSchema),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(homeWebPageSchema),
      },
    ],
  }),
  component: HomeRedesign,
});
