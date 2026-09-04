"use client";

import { Link } from "@tanstack/react-router";
import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import {
  ArrowRight,
  BrainCircuit,
  Check,
  CirclePause,
  FileCheck2,
  Files,
  Inbox,
  Layers3,
  ListChecks,
  MapPin,
  Send,
  ShieldCheck,
} from "lucide-react";

const workflow = [
  {
    number: "01",
    title: "Pick the source",
    body: "Open a booking in Gmail, Outlook, Front, or Helpwise—or attach a supported PDF, spreadsheet, image, or plain-text request.",
    icon: Inbox,
  },
  {
    number: "02",
    title: "Review the preview",
    body: "Check the passenger, account, route, flight, service, vehicle, notes, and recognized trip count before form entry begins.",
    icon: ListChecks,
  },
  {
    number: "03",
    title: "Watch it fill",
    body: "Filly enters supported fields with visible checkpoints. When operator input is needed, it pauses with a clear question.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Complete it your way",
    body: "Review and save manually, or enable optional Auto-Save for supported workflows. Required routing checks can block an incomplete save.",
    icon: FileCheck2,
  },
];

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.dataset.visible = "true";
          observer.disconnect();
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -8%" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} data-reveal="true" style={{ "--reveal-delay": `${delay}ms` } as CSSProperties} className={className}>
      {children}
    </div>
  );
}

const capabilities = [
  {
    icon: Files,
    title: "Email and document intake",
    body: "Work from selected Gmail, Outlook, Front, or Helpwise messages, plus supported PDF, spreadsheet, image, and pasted-text inputs.",
  },
  {
    icon: Layers3,
    title: "Batch reservation filling",
    body: "Preview all recognized trips first, then fill them sequentially with an individual status and checkpoint for every reservation.",
  },
  {
    icon: MapPin,
    title: "Reservation-aware routing",
    body: "Airport, address, FBO, POI, stored Home or Office addresses, stops, waits, and supported return legs go through the appropriate workflow.",
  },
  {
    icon: BrainCircuit,
    title: "Account and routing memory",
    body: "Operator-approved corrections become visible Learned Rules your team can review, edit, or remove in Settings.",
  },
  {
    icon: CirclePause,
    title: "Pause, fix, and resume",
    body: "A missing or ambiguous choice becomes a clear operator decision. Filly waits safely, then continues the same reservation instead of starting over.",
  },
  {
    icon: Send,
    title: "Confirmation delivery",
    body: "For supported requests, Filly can prepare the standard confirmation, use a verified recipient, attach the PDF, and respect the hide-rates choice.",
  },
];

function DemoLink({ className = "" }: { className?: string }) {
  return (
    <a href="mailto:support@getfillyai.com?subject=Filly%20pilot%20access" className={className}>
      Request pilot access
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-border bg-noise">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-16 md:px-8 md:pb-24 md:pt-24 lg:grid-cols-[1fr_0.78fr] lg:items-center">
        <Reveal className="relative z-10">
          <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            Review-first reservation entry
          </p>
          <h1 className="mt-5 max-w-4xl text-balance font-display text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-gradient sm:text-6xl lg:text-7xl">
            <span className="text-orange-gradient">Let Filly handle the retyping.</span>
          </h1>
          <p className="mt-6 max-w-2xl font-display text-2xl font-medium leading-tight text-foreground sm:text-3xl">
            From the first message to the final save, you stay in control.
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Choose the email or document. Filly extracts the trip, shows its work, and maps the supported fields into Limo Anywhere—one visible checkpoint at a time.
          </p>

          <div className="mt-8 grid max-w-2xl gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
            <div className="bg-surface px-5 py-5">
              <p className="font-display text-4xl font-semibold text-primary">35 sec</p>
              <p className="mt-1 text-sm text-muted-foreground">Average with Filly</p>
            </div>
            <div className="bg-surface px-5 py-5">
              <p className="font-display text-4xl font-semibold text-foreground">7.5 min</p>
              <p className="mt-1 text-sm text-muted-foreground">Average manual entry</p>
            </div>
            <div className="bg-surface px-5 py-5">
              <p className="font-display text-4xl font-semibold text-foreground">6m 55s</p>
              <p className="mt-1 text-sm text-muted-foreground">Average time returned</p>
            </div>
          </div>
          <p className="mt-3 max-w-2xl text-xs leading-relaxed text-muted-foreground">
            Current operator test averages. Reservation complexity and source quality affect actual
            completion time.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <DemoLink className="btn-glow inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:-translate-y-px" />
            <a
              href="#workflow"
              className="inline-flex items-center justify-center rounded-md border border-border-strong bg-surface/60 px-6 py-3.5 text-sm font-semibold text-foreground transition hover:bg-surface-2"
            >
              See how it works
            </a>
          </div>
          </div>
        </Reveal>

        <Reveal className="relative z-10 mx-auto w-full max-w-[430px]" delay={140}>
        <figure className="hero-depth relative overflow-hidden rounded-lg border border-border-strong bg-[#2b2622] p-2 shadow-elev sm:p-3">
          <div className="flex items-center justify-between border-b border-border px-3 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            <span>Current extension</span>
            <span className="inline-flex items-center gap-2 text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Working
            </span>
          </div>
          <div className="relative aspect-[0.49] overflow-hidden bg-[#171411]">
            <img
              src="/screenshots/current/filly-working-dark.png"
              alt="Filly actively filling a reservation with visible progress checkpoints and pause and stop controls."
              width={808}
              height={1610}
              loading="eager"
              decoding="async"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <figcaption className="border-t border-border px-3 py-3 text-sm leading-relaxed text-muted-foreground">
            See each stage as Filly works, with pause and stop controls always within reach.
          </figcaption>
        </figure>
        </Reveal>
      </div>
    </section>
  );
}

function TrustBand() {
  return (
    <section className="border-b border-border bg-[#100f0e]">
      <div className="mx-auto grid max-w-7xl gap-px border-x border-border bg-border md:grid-cols-3">
        {[
          ["Selected input", "Filly processes the message or document the operator chooses."],
          [
            "Preview first",
            "See the extracted trip—or every trip in a batch—before filling starts.",
          ],
          ["You decide when it saves", "Review and save manually, or use optional safeguarded Auto-Save."],
        ].map(([title, body]) => (
          <div key={title} className="bg-[#100f0e] px-7 py-8 md:px-9">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{title}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Workflow() {
  return (
    <section id="workflow" className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              How it works
            </p>
            <h2 className="mt-4 max-w-md font-display text-4xl leading-tight text-foreground md:text-5xl">
              Four steps. You&apos;re in every one.
            </h2>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {workflow.map(({ number, title, body, icon: Icon }, index) => (
              <Reveal key={number} delay={index * 80}>
              <article className="grid gap-4 py-7 sm:grid-cols-[48px_1fr] sm:gap-6">
                <div className="flex h-12 w-12 items-center justify-center border border-primary/40 bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-primary">{number}</span>
                    <h3 className="text-xl font-semibold text-foreground">{title}</h3>
                  </div>
                  <p className="mt-2 max-w-2xl leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BatchWorkflow() {
  const trips = [
    ["01", "JFK", "MANHATTAN", "READY"],
    ["02", "OFFICE", "EWR", "READY"],
    ["03", "FBO", "HOTEL", "REVIEW"],
  ];

  return (
    <section className="border-b border-border bg-surface/45">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            Batch filling
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-foreground md:text-5xl">
            A batch should still be visible one reservation at a time.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Select supported Gmail messages, import a multi-trip PDF, or load a spreadsheet. Filly
            previews the recognized reservations and processes supported items sequentially. When
            an item needs attention, your operator can see which trip paused and why.
          </p>
          <ul className="mt-7 space-y-3 text-sm text-muted-foreground">
            {[
              "Recognized trip count before filling",
              "Individual status for every reservation",
              "A visible review state when input is needed",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <Check className="h-4 w-4 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden border border-border-strong bg-[#171411] shadow-elev">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-4">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
                Batch preview
              </p>
              <p className="mt-1 font-display text-xl font-semibold text-foreground">
                3 reservations detected
              </p>
            </div>
            <span className="border border-border-strong bg-surface px-3 py-2 font-mono text-xs text-muted-foreground">
              corporate-trips.xlsx
            </span>
          </div>
          <div className="divide-y divide-border px-5">
            {trips.map(([number, pickup, dropoff, status]) => (
              <div key={number} className="grid grid-cols-[40px_1fr_auto] items-center gap-4 py-5">
                <span className="font-mono text-sm text-primary">{number}</span>
                <div>
                  <p className="font-mono text-sm font-semibold tracking-[0.08em] text-foreground">
                    {pickup} <span className="text-primary">→</span> {dropoff}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Passenger · route · service · vehicle
                  </p>
                </div>
                <span
                  className={`font-mono text-[11px] uppercase tracking-[0.16em] ${
                    status === "READY" ? "text-emerald-400" : "text-primary"
                  }`}
                >
                  {status}
                </span>
              </div>
            ))}
          </div>
          <div className="grid gap-px border-t border-border bg-border sm:grid-cols-3">
            {[
              ["3", "Trips"],
              ["2", "Ready"],
              ["1", "Review"],
            ].map(([value, label]) => (
              <div key={label} className="bg-surface px-5 py-4">
                <p className="font-display text-2xl font-semibold text-foreground">{value}</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CapabilityGrid() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              Built for reservation work
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-foreground md:text-5xl">
              Transportation details belong in transportation workflows.
            </h2>
          </div>
          <Link
            to="/features"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-glow"
          >
            Explore all supported workflows
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
{capabilities.map(({ icon: Icon, title, body }, index) => (
              <Reveal key={title} delay={index * 70}>
              <article className="bg-surface p-7 md:p-8">
              <Icon className="h-6 w-6 text-primary" />
              <h3 className="mt-6 text-xl font-semibold text-foreground">{title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{body}</p>
              </article>
              </Reveal>
            ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const questions = [
    {
      question: "Does Filly automatically save every reservation?",
      answer:
        "No. Manual review is available, and Auto-Save is an optional mode for supported workflows. Required pickup and drop-off routing checks can block Auto-Save when a route is incomplete.",
    },
    {
      question: "What happens when the request is unclear?",
      answer:
        "Filly shows a preview before entry. Supported checks can pause when an account, stored address, route, or return detail needs operator input, then continue the same fill after review.",
    },
    {
      question: "Does it handle affiliate confirmations?",
      answer:
        "Filly supports transportation-specific affiliate workflows. A Farm-Out Confirmation received from another operator is generally your farm-in, and Filly can use the supported direction and reference when the source provides enough information.",
    },
    {
      question: "Is Filly made by Limo Anywhere?",
      answer:
        "No. Filly is an independent product built to assist with Limo Anywhere workflows. It is not affiliated with, sponsored by, or endorsed by Limo Anywhere or Addison Lee Ltd.",
    },
  ];

  return (
    <section className="border-b border-border bg-surface/45">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-primary">
          Straight answers
        </p>
        <div className="mt-4 grid gap-10 lg:grid-cols-[0.68fr_1.32fr]">
          <div>
            <h2 className="max-w-md font-display text-4xl leading-tight text-foreground md:text-5xl">
              What operators ask before they try Filly.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
              Filly handles repetitive entry. Your team retains the decisions that affect the
              reservation and the customer.
            </p>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {questions.map(({ question, answer }) => (
              <article key={question} className="py-6">
                <h3 className="text-lg font-semibold text-foreground">{question}</h3>
                <p className="mt-2 max-w-3xl leading-relaxed text-muted-foreground">{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="pointer-events-none absolute -right-12 -top-28 h-80 w-80 rounded-full border border-black/10" />
      <div className="pointer-events-none absolute -right-2 -top-16 h-64 w-64 rounded-full border border-black/10" />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] opacity-70">
            See it run a reservation
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight md:text-5xl">
            Your reservation team already knows the job. Let them spend less time typing it twice.
          </h2>
        </div>
        <DemoLink className="inline-flex items-center justify-center gap-2 rounded-md bg-[#17110f] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-px" />
      </div>
    </section>
  );
}

export function HomeRedesign() {
  return (
    <>
      <Hero />
      <TrustBand />
      <Workflow />
      <BatchWorkflow />
      <CapabilityGrid />
      <Faq />
      <FinalCta />
    </>
  );
}
