import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  CirclePause,
  FileSpreadsheet,
  Inbox,
  MapPin,
  Plane,
  Send,
  ShieldCheck,
  Sparkles,
  UserCheck,
} from "lucide-react";
import type { CSSProperties } from "react";
import { FillyLogo } from "@/components/site/logo";

export const Route = createFileRoute("/concept-editorial")({
  head: () => ({
    meta: [
      { title: "Filly — Editorial homepage concept" },
      {
        name: "description",
        content: "An alternate editorial homepage concept for Filly AI.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: EditorialConcept,
});

const palette = {
  "--background": "#f6f2e9",
  "--foreground": "#26211d",
  "--surface": "#efe8dc",
  "--surface-2": "#e7ddcf",
  "--surface-3": "#d9cbb8",
  "--muted-foreground": "#6f675e",
  "--border": "rgb(38 33 29 / 14%)",
  "--border-strong": "rgb(38 33 29 / 28%)",
  "--primary": "#cf6d4f",
  "--primary-foreground": "#fffaf3",
  "--font-display": '"Newsreader", Georgia, serif',
} as CSSProperties;

const workflow = [
  {
    n: "01",
    title: "Pick the booking",
    text: "Open the message, attach the file, paste the text, or select the Gmail rows you want to process.",
  },
  {
    n: "02",
    title: "See what Filly found",
    text: "Review the passenger, account, route, flight, service, vehicle, notes, and recognized trips before entry.",
  },
  {
    n: "03",
    title: "Watch the reservation take shape",
    text: "Filly enters supported fields with visible checkpoints. If a decision needs you, it pauses and asks.",
  },
];

const capabilities = [
  [Inbox, "Where bookings arrive", "Gmail, Outlook Web, Front, Helpwise, PDFs, spreadsheets, images, and pasted text."],
  [MapPin, "Routing that knows the difference", "Airports, FBOs, POIs, street addresses, and stored Home or Office locations follow their supported workflows."],
  [UserCheck, "Accounts with context", "Filly uses billing and passenger details to suggest an existing account, then leaves uncertain choices to the operator."],
  [CirclePause, "A pause you can act on", "A missing route or ambiguous match becomes a clear question, not a screen that looks frozen."],
  [FileSpreadsheet, "Batches stay visible", "Each recognized reservation keeps its own preview, progress, and review state."],
  [Send, "Confirmations stay deliberate", "Review the recipient, Standard Confirmation PDF, and Hide Rates choice before supported delivery."],
] as const;

function EditorialConcept() {
  return (
    <div
      style={palette}
      className="min-h-dvh overflow-hidden bg-background font-sans text-foreground"
    >
      <header className="relative z-30 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-[1380px] items-center justify-between px-5 md:px-9">
          <Link to="/" aria-label="Filly home" className="flex items-center">
            <FillyLogo className="h-8" />
          </Link>
          <nav aria-label="Concept navigation" className="hidden items-center gap-8 text-sm md:flex">
            <a href="#how" className="hover:text-primary">How it works</a>
            <a href="#batch" className="hover:text-primary">Batch filling</a>
            <a href="#capabilities" className="hover:text-primary">Capabilities</a>
            <Link to="/guide" className="hover:text-primary">User guide</Link>
          </nav>
          <a
            href="mailto:support@getfillyai.com?subject=Filly%20pilot%20access"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition hover:-translate-y-px"
          >
            Request pilot access
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <section className="relative">
        <div className="pointer-events-none absolute -right-36 top-8 h-[520px] w-[520px] rounded-full border border-primary/20" />
        <div className="pointer-events-none absolute -right-16 top-28 h-[360px] w-[360px] rounded-full border border-primary/25" />
        <div className="mx-auto grid max-w-[1380px] gap-14 px-5 pb-20 pt-20 md:px-9 md:pb-28 md:pt-28 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="relative z-10">
            <p className="text-sm font-medium text-primary">Reservation entry, with the operator still in the room.</p>
            <h1 className="mt-8 max-w-4xl font-display text-[4.35rem] font-medium leading-[0.91] tracking-[-0.045em] sm:text-[5.8rem] lg:text-[7rem]">
              Review,
              <br />
              don&apos;t re-type.
            </h1>
            <p className="mt-8 max-w-xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
              You pick the booking. Filly shows you what it found, then fills the reservation in
              front of you, checkpoint by checkpoint.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:support@getfillyai.com?subject=Filly%20pilot%20access"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:-translate-y-px"
              >
                Try Filly
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#how"
                className="inline-flex items-center justify-center rounded-full border border-border-strong px-6 py-3.5 text-sm font-semibold hover:bg-surface"
              >
                Explore the workflow
              </a>
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              Built for Limo Anywhere workflows. Independent and operator controlled.
            </p>
          </div>

          <ReservationCanvas />
        </div>
      </section>

      <section className="border-y border-border bg-surface/55">
        <div className="mx-auto flex max-w-[1380px] flex-wrap items-center justify-between gap-x-10 gap-y-5 px-5 py-6 text-sm text-muted-foreground md:px-9">
          <span className="font-medium text-foreground">Works where bookings arrive</span>
          {['Gmail', 'Outlook Web', 'Front', 'Helpwise', 'PDF', 'XLSX · XLS · CSV', 'Images'].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section id="how" className="scroll-mt-20 border-b border-border">
        <div className="mx-auto max-w-[1380px] px-5 py-24 md:px-9 md:py-36">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="text-sm font-medium text-primary">A familiar rhythm</p>
              <h2 className="mt-5 max-w-xl font-display text-5xl font-medium leading-[0.98] tracking-[-0.035em] md:text-7xl">
                Filly reads the booking. You review the reservation.
              </h2>
            </div>
            <div className="divide-y divide-border border-y border-border">
              {workflow.map((item) => (
                <article key={item.n} className="grid gap-5 py-8 sm:grid-cols-[64px_1fr] sm:py-10">
                  <span className="font-display text-3xl text-primary">{item.n}</span>
                  <div>
                    <h3 className="font-display text-3xl font-medium">{item.title}</h3>
                    <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted-foreground">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="batch" className="scroll-mt-20 border-b border-border bg-[#2c2823] text-[#fbf7ef]">
        <div className="mx-auto grid max-w-[1380px] gap-14 px-5 py-24 md:px-9 md:py-36 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="text-sm font-medium text-[#e69272]">Batch filling</p>
            <h2 className="mt-5 font-display text-5xl font-medium leading-[0.98] tracking-[-0.035em] md:text-7xl">
              A batch should still be visible one reservation at a time.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-[#cfc6ba]">
              Preview the recognized trips first. Then follow each reservation through its own
              ready, filling, review, or completed state.
            </p>
          </div>
          <BatchCanvas />
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1380px] gap-12 px-5 py-24 md:px-9 md:py-36 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <RouteCanvas />
          <div className="lg:pl-10">
            <p className="text-sm font-medium text-primary">Transportation-aware routing</p>
            <h2 className="mt-5 font-display text-5xl font-medium leading-[0.98] tracking-[-0.035em] md:text-7xl">
              Transportation details belong in transportation workflows.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Airports should not become street addresses. “Home” should select the customer&apos;s
              stored Home address. A received Farm-Out Confirmation is generally your farm-in.
              The small distinctions are the workflow.
            </p>
          </div>
        </div>
      </section>

      <section id="capabilities" className="scroll-mt-20 border-b border-border bg-surface/45">
        <div className="mx-auto max-w-[1380px] px-5 py-24 md:px-9 md:py-36">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary">One assistant, the whole entry flow</p>
            <h2 className="mt-5 font-display text-5xl font-medium leading-[0.98] tracking-[-0.035em] md:text-7xl">
              The repetitive work is connected. Filly treats it that way.
            </h2>
          </div>
          <div className="mt-14 grid gap-x-10 gap-y-0 border-y border-border md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(([RawIcon, title, text]) => {
              const Icon = RawIcon;
              return (
                <article key={title} className="border-b border-border py-9 md:px-5 lg:min-h-[260px]">
                  <Icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-8 font-display text-3xl font-medium">{title}</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1380px] gap-10 px-5 py-24 md:px-9 md:py-32 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-sm font-medium text-primary">Current operator testing</p>
            <h2 className="mt-5 max-w-4xl font-display text-5xl font-medium leading-[0.98] tracking-[-0.035em] md:text-7xl">
              About 6 minutes 55 seconds of entry time returned on an average supported reservation.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              About 35 seconds with Filly compared with about 7.5 minutes manually. Results vary
              with reservation complexity, source quality, system response time, and review needs.
            </p>
          </div>
          <div className="grid min-w-[300px] grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border">
            <div className="bg-surface p-6">
              <p className="font-display text-5xl text-primary">35s</p>
              <p className="mt-2 text-sm text-muted-foreground">With Filly</p>
            </div>
            <div className="bg-surface p-6">
              <p className="font-display text-5xl">7.5m</p>
              <p className="mt-2 text-sm text-muted-foreground">Manual</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="pointer-events-none absolute -bottom-52 -right-28 h-[520px] w-[520px] rounded-full border border-white/20" />
        <div className="mx-auto grid max-w-[1380px] gap-10 px-5 py-24 md:px-9 md:py-32 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-medium opacity-75">See it run a reservation</p>
            <h2 className="mt-5 max-w-4xl font-display text-5xl font-medium leading-[0.98] tracking-[-0.035em] md:text-7xl">
              Give the typing to Filly. Keep the judgment with your team.
            </h2>
          </div>
          <a
            href="mailto:support@getfillyai.com?subject=Filly%20pilot%20access"
            className="relative inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-semibold text-background"
          >
            Request pilot access
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <footer className="bg-[#2c2823] text-[#fbf7ef]">
        <div className="mx-auto grid max-w-[1380px] gap-10 px-5 py-12 md:grid-cols-[1fr_auto] md:px-9 md:items-end">
          <div>
            <div style={{ "--primary": "#e69272", "--foreground": "#fbf7ef" } as CSSProperties}>
              <FillyLogo className="h-8" />
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#cfc6ba]">
              Selected booking requests become review-ready Limo Anywhere reservations with visible checkpoints and operator control.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-[#cfc6ba]">
            <Link to="/guide" className="hover:text-white">User guide</Link>
            <Link to="/privacy" className="hover:text-white">Privacy</Link>
            <Link to="/terms" className="hover:text-white">Terms</Link>
            <a href="mailto:support@getfillyai.com" className="hover:text-white">Support</a>
          </div>
        </div>
        <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-[#9f978d]">
          © 2026 V Assist Pro Inc., d/b/a GetFillyAI. Filly AI is not affiliated with Limo Anywhere or Addison Lee Ltd.
        </div>
      </footer>
    </div>
  );
}

function ReservationCanvas() {
  return (
    <div className="relative z-10 mx-auto w-full max-w-[620px] rounded-[2rem] border border-border-strong bg-[#ece3d6] p-4 shadow-[0_35px_90px_-45px_rgba(50,40,30,0.5)] md:p-6">
      <div className="rounded-[1.4rem] border border-border bg-[#fbf8f2] p-5 md:p-7">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Selected request</p>
            <p className="mt-2 font-display text-2xl font-medium">Airport transfer</p>
          </div>
          <span className="rounded-full bg-[#e7f2e5] px-3 py-1.5 text-xs font-semibold text-[#3f7045]">Ready</span>
        </div>
        <div className="mt-6 rounded-2xl border border-border bg-white p-5">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Please arrange a sedan from the customer&apos;s home to EWR for flight UA 214 on Friday morning. Send the confirmation without rates.
          </p>
        </div>
        <div className="my-5 flex items-center gap-3 text-xs text-muted-foreground">
          <span className="h-px flex-1 bg-border" />
          FILLY PREVIEW
          <span className="h-px flex-1 bg-border" />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ['Passenger', 'Test Passenger'],
            ['Service', 'To Airport'],
            ['Pickup', 'Stored Home'],
            ['Drop-off', 'EWR · Airport'],
            ['Flight', 'UA 214'],
            ['Confirmation', 'Hide rates'],
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl bg-surface px-4 py-3">
              <p className="text-xs text-muted-foreground">{label}</p>
              <p className="mt-1 text-sm font-semibold">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between rounded-full bg-foreground px-5 py-3 text-background">
          <span className="text-sm font-semibold">Review complete</span>
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}

function BatchCanvas() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-[#35302a] p-4 shadow-2xl md:p-6">
      <div className="rounded-[1.35rem] border border-white/10 bg-[#25221e]">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-[#e69272]">Batch preview</p>
            <p className="mt-2 font-display text-2xl">8 reservations recognized</p>
          </div>
          <Sparkles className="h-5 w-5 text-[#e69272]" />
        </div>
        <div className="divide-y divide-white/10 px-5">
          {[
            ['01', 'JFK → Manhattan', 'Ready'],
            ['02', 'Office → EWR', 'Ready'],
            ['03', 'FBO → Hotel', 'Review'],
            ['04–08', 'Five reservations', 'Queued'],
          ].map(([n, route, status]) => (
            <div key={n} className="grid grid-cols-[54px_1fr_auto] items-center gap-3 py-5">
              <span className="font-display text-xl text-[#e69272]">{n}</span>
              <span className="text-sm">{route}</span>
              <span className={status === 'Review' ? 'text-xs text-[#e69272]' : 'text-xs text-[#9fc7a2]'}>{status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RouteCanvas() {
  return (
    <div className="rounded-[2rem] border border-border-strong bg-surface p-5 md:p-8">
      <div className="rounded-[1.35rem] border border-border bg-[#fbf8f2] p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Routing classification</p>
        <div className="mt-6 space-y-3">
          {[
            [Plane, 'EWR', 'Airport workflow'],
            [MapPin, 'Home', 'Stored address'],
            [ShieldCheck, 'Signature Aviation', 'FBO workflow'],
          ].map(([RawIcon, name, type]) => {
            const Icon = RawIcon;
            return (
              <div key={String(name)} className="grid grid-cols-[42px_1fr_auto] items-center gap-4 rounded-2xl border border-border bg-white p-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-surface">
                  <Icon className="h-5 w-5 text-primary" />
                </span>
                <span className="font-semibold">{String(name)}</span>
                <span className="text-xs text-muted-foreground">{String(type)}</span>
              </div>
            );
          })}
        </div>
        <div className="mt-5 flex items-center gap-3 rounded-2xl bg-[#e7f2e5] px-4 py-3 text-sm text-[#3f7045]">
          <Check className="h-4 w-4" />
          Each location uses its supported tab.
        </div>
      </div>
    </div>
  );
}
