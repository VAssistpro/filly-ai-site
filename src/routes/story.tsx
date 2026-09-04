import { createFileRoute } from "@tanstack/react-router";
import { storyAboutPageSchema } from "../components/site/schemas";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "Our Story — Why Filly exists | Filly AI" },
      {
        name: "description",
        content:
          "Filly was built by a solo founder who spent months learning the Limo Anywhere platform from the inside — building the tool dispatchers actually deserve.",
      },
      { property: "og:title", content: "The story behind Filly AI" },
      {
        property: "og:description",
        content:
          "Why Filly exists — a founder's story about the limo industry, operational craft, and building an independent AI assistant for Limo Anywhere operators.",
      },
      { property: "og:url", content: "/story" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/story" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(storyAboutPageSchema) }],
  }),
  component: StoryPage,
});

const chapters = [
  {
    label: "Chapter 01",
    title: "It started with a dispatcher friend.",
    body: (
      <>
        <p>
          A friend runs dispatch for a small ground transportation company. One evening he
          showed me his screen: three inboxes open, a Limo Anywhere reservation half-filled,
          a PDF itinerary in another tab, a phone ringing, and the flight number for a JFK
          pickup he was trying to verify.
        </p>
        <p>
          He does this every day. Fifty times a day. He's brilliant at it. And it's slowly
          eating him alive.
        </p>
      </>
    ),
    quote:
      "I don't have a data-entry problem. I have a thinking problem. I can't think about the customer when I'm typing a flight number for the third time this hour.",
  },
  {
    label: "Chapter 02",
    title: "There was no tool. Not one.",
    body: (
      <>
        <p>
          I looked. I searched every corner of the ground transportation industry, every
          Limo Anywhere Facebook group, every trade publication. There were CRMs bolted on.
          There were quoting tools. There were dispatch dashboards. There was nothing that
          actually filled a reservation from an email.
        </p>
        <p>
          Limo Anywhere runs the industry, but Limo Anywhere is a platform, not a workflow.
          The gap between "email arrives" and "reservation saved" was the dispatcher's
          problem. Nobody was solving it.
        </p>
      </>
    ),
    quote:
      "I kept expecting to find the thing that already existed. It didn't. That's when I started building.",
  },
  {
    label: "Chapter 03",
    title: "Months in the details.",
    body: (
      <>
        <p>
          The first version filled a name and a pickup address. That's it. It took two
          weeks to make it not embarrassing. It took two more months to handle round-trips.
          Another month for FBOs. Another for farm-in dispatch. Another for the dozen airline
          dropdowns that look identical but aren't.
        </p>
        <p>
          Every dispatcher I showed it to found an edge case I hadn't considered. And every
          edge case became a rule Filly now understands. There is no shortcut to this. You
          have to sit with the product, in the tool, with the people, for a long time.
        </p>
      </>
    ),
    quote:
      "The details are the product. The details are also why nobody else has built this.",
  },
  {
    label: "Chapter 04",
    title: "Why this exists.",
    body: (
      <>
        <p>
          Filly exists because dispatchers deserve to think about service, not spreadsheets.
          Because a great operator's advantage should be their judgment, their relationships,
          their care — not how fast they can type. Because the tools an industry uses shape
          the kind of work people can do in it.
        </p>
        <p>
          If we can absorb the routine, dispatchers can spend that recovered energy on the
          things a computer can't do. The apology call when a flight is delayed. The
          personal note remembering a client's kid's name. The judgment call on which
          chauffeur to send to a VIP.
        </p>
        <p className="text-foreground/90">
          That's what Filly is for. That's why I built it.
        </p>
      </>
    ),
  },
];

function StoryPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60 bg-noise">
        <div className="mx-auto max-w-4xl px-5 py-24 text-center md:px-8 md:py-32">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Our Story
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.05] text-gradient md:text-6xl">
            A tool built the way dispatchers deserve.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Filly wasn't built in a boardroom. It was built next to a dispatcher's monitor,
            over months of watching, listening, and getting the details right.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <div className="space-y-24">
          {chapters.map((c) => (
            <section key={c.label}>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                {c.label}
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold text-gradient md:text-4xl">
                {c.title}
              </h2>
              <div className="mt-5 space-y-5 text-[16px] leading-[1.75] text-muted-foreground">
                {c.body}
              </div>
              {c.quote && (
                <blockquote className="mt-8 border-l-2 border-primary pl-5 font-display text-xl italic text-foreground/90 md:text-2xl">
                  "{c.quote}"
                </blockquote>
              )}
            </section>
          ))}
        </div>

        <div className="mt-24 rounded-2xl border border-border-strong bg-surface/60 p-8 text-center md:p-12">
          <p className="font-display text-2xl font-semibold text-gradient md:text-3xl">
            This is why I built Filly.
          </p>
          <p className="mt-3 text-muted-foreground">
            Bring a representative booking and judge Filly on the details that matter to
            your operation: speed, corrections, and dispatcher confidence.
          </p>
          <a
            href="mailto:support@getfillyai.com?subject=Filly%20founder%20demo"
            className="btn-glow mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            Book a Founder Demo
          </a>
        </div>
      </article>
    </>
  );
}
