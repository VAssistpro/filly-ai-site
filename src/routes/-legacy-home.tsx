import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import {
  Mail,
  FileText,
  Sheet,
  MousePointerClick,
  Plane,
  MapPin,
  Repeat,
  Users,
  Sparkles,
  Clock,
  ShieldCheck,
  Baby,
  History,
  Palette,
  Pause,
  Brain,
  Zap,
  ArrowRight,
  Check,
  X,
} from "lucide-react";

import {
  softwareApplicationSchema,
  homeWebPageSchema,
  installHowToSchema,
} from "../components/site/schemas";
import { MobileStickyCta } from "../components/site/mobile-cta";
import { ExitIntentModal } from "../components/site/exit-intent";
import { ScreenshotGallery } from "../components/site/screenshot-gallery";
import { BrandLogo } from "../components/site/brand-logo";
import { HomeRedesign } from "./-home-redesign";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Filly AI — Booking emails to review-ready Limo Anywhere reservations" },
      {
        name: "description",
        content:
          "Filly turns selected booking emails and documents into review-ready Limo Anywhere reservations, with visible checkpoints before anything is saved.",
      },
      { property: "og:title", content: "Filly AI — Less reservation entry. More control." },
      {
        property: "og:description",
        content:
          "Bring a selected booking request into Filly, review the trip, and let Filly map supported fields into Limo Anywhere.",
      },
      { property: "og:url", content: "/" },
      {
        property: "og:image",
        content: "https://getfillyai.com/screenshots/current/filly-reservation-ready-dark.png",
      },
      {
        name: "twitter:image",
        content: "https://getfillyai.com/screenshots/current/filly-reservation-ready-dark.png",
      },
    ],
    links: [
      { rel: "canonical", href: "/" },
      {
        rel: "preload",
        as: "image",
        href: "/screenshots/current/filly-reservation-ready-dark.png",
        fetchpriority: "high",
      },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(softwareApplicationSchema) },
      { type: "application/ld+json", children: JSON.stringify(homeWebPageSchema) },
      { type: "application/ld+json", children: JSON.stringify(installHowToSchema) },
    ],
  }),
  component: HomeRedesign,
});

/* ---------- Sections ---------- */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-noise">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" />
      <div className="pointer-events-none absolute -left-28 top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-16 md:px-8 md:pb-20 md:pt-24">
        <div className="reveal flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />
            Available through direct onboarding · Built exclusively for Limo Anywhere operators
          </span>

          <h1 className="mt-6 max-w-5xl text-balance font-display text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-gradient sm:text-6xl md:text-7xl">
            Your booking email. Your <span className="text-orange-gradient">Limo Anywhere</span>{" "}
            reservation. Ready to review in about 30 seconds.
          </h1>

          <p className="mt-6 max-w-2xl text-balance text-lg text-muted-foreground md:text-xl">
            More reservations. Less reservation entry.
          </p>

          <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-muted-foreground/90 md:text-base">
            Filly reads booking emails and supported PDF attachments from Gmail, Outlook, Front, and
            Helpwise, organizes the trip details for review, and fills more than 50 Limo Anywhere
            fields. Your team verifies the details and stays in control.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="mailto:support@getfillyai.com?subject=Filly%20live%20demo"
              className="btn-glow inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-px"
            >
              Book a Live Demo
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-transparent px-6 py-3 text-sm font-medium text-foreground hover:bg-surface"
            >
              See How It Works
            </a>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            Bring a representative booking request · No credit card required
          </p>
        </div>

        {/* Hero visual */}
        <div className="reveal mx-auto mt-12 max-w-6xl" style={{ animationDelay: "150ms" }}>
          <HeroDemo />
        </div>
      </div>
    </section>
  );
}

function HeroDemo() {
  return (
    <div className="relative rounded-2xl border border-border-strong bg-surface/50 p-3 shadow-elev backdrop-blur md:p-4">
      <div className="grid gap-4 md:grid-cols-[1fr_1fr] md:items-stretch">
        {/* Left: interactive bubble transformation story */}
        <FillyLauncherMockup />

        {/* Right: trip preview (result) */}
        <figure className="relative flex flex-col rounded-xl border border-border bg-background p-2">
          <span className="absolute left-4 top-4 z-10 rounded-full bg-primary/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground shadow-lg">
            <Zap className="mr-1 inline h-3 w-3" /> 3 · Filled with memory
          </span>
          <img
            src="/screenshots/preview-memory.png"
            alt="Filly AI trip preview: passenger Samuel Jaya, SFO to 757 Market Street on United UA 858, account BAY COACH LIMO recognized from Memory before filling Limo Anywhere."
            width={593}
            height={1280}
            loading="eager"
            decoding="async"
            className="h-full w-full rounded-lg object-contain"
          />
          <figcaption className="pt-3 text-center text-xs text-muted-foreground">
            Review the mapped details and make corrections before entry.
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

function FillyLauncherMockup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const stageRef = useRef<HTMLDivElement>(null);
  const launcherRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef<{
    pointerId: number;
    x: number;
    y: number;
    originX: number;
    originY: number;
  } | null>(null);
  const didDrag = useRef(false);

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;
    dragStart.current = {
      pointerId: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      originX: position.x,
      originY: position.y,
    };
    didDrag.current = false;
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const start = dragStart.current;
    const stage = stageRef.current;
    const launcher = launcherRef.current;
    if (!start || start.pointerId !== event.pointerId || !stage || !launcher) return;

    const deltaX = event.clientX - start.x;
    const deltaY = event.clientY - start.y;
    if (Math.hypot(deltaX, deltaY) > 4) didDrag.current = true;

    const stageRect = stage.getBoundingClientRect();
    const launcherRect = launcher.getBoundingClientRect();
    const maxX = Math.max(0, stageRect.width / 2 - launcherRect.width / 2 - 10);
    const maxY = Math.max(0, stageRect.height / 2 - launcherRect.height / 2 - 10);
    setPosition({
      x: Math.max(-maxX, Math.min(maxX, start.originX + deltaX)),
      y: Math.max(-maxY, Math.min(maxY, start.originY + deltaY)),
    });
  };

  const stopDragging = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (dragStart.current?.pointerId !== event.pointerId) return;
    const wasDrag = didDrag.current;
    dragStart.current = null;
    setIsDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    didDrag.current = false;
    if (!wasDrag) toggleLauncher();
  };

  const toggleLauncher = () => {
    const opening = !isOpen;
    if (opening && stageRef.current) {
      const stageWidth = stageRef.current.getBoundingClientRect().width;
      const expandedWidth = Math.min(340, stageWidth - 32);
      const maxX = Math.max(0, stageWidth / 2 - expandedWidth / 2 - 10);
      setPosition((current) => ({
        x: Math.max(-maxX, Math.min(maxX, current.x)),
        y: current.y,
      }));
    }
    setIsOpen(opening);
  };

  return (
    <figure className="relative flex min-h-[420px] flex-col items-center justify-center rounded-xl border border-border bg-background px-5 py-12 md:min-h-0">
      <span className="absolute left-3 top-3 rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
        {isOpen ? "2 · Ready" : "1 · Detected"}
      </span>

      <div
        ref={stageRef}
        className="relative flex h-52 w-full max-w-md items-center justify-center overflow-hidden rounded-2xl border border-border/70 bg-[radial-gradient(circle_at_50%_50%,rgba(244,126,78,0.10),transparent_42%)]"
      >
        <div className="absolute inset-x-8 top-10 space-y-3 opacity-25" aria-hidden="true">
          <div className="h-2 w-2/5 rounded-full bg-foreground/40" />
          <div className="h-2 w-4/5 rounded-full bg-foreground/20" />
          <div className="h-2 w-3/5 rounded-full bg-foreground/20" />
        </div>

        <div
          ref={launcherRef}
          className={`absolute left-1/2 top-1/2 z-10 touch-none select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
          style={{
            transform: `translate(-50%, -50%) translate3d(${position.x}px, ${position.y}px, 0)`,
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={stopDragging}
          onPointerCancel={stopDragging}
        >
          <button
            type="button"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Collapse the Filly launcher" : "Open the Filly launcher"}
            onClick={(event) => {
              if (event.detail === 0) toggleLauncher();
            }}
            className={`filly-launcher-mockup group relative flex h-16 max-w-[calc(100vw-4rem)] items-center overflow-hidden rounded-full border border-[#ff6d08]/80 bg-[#101010] shadow-[0_16px_38px_-14px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.08)] transition-[width,box-shadow] duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${isOpen ? "w-[340px] shadow-[0_18px_42px_-14px_rgba(255,109,8,0.28)]" : "w-16"}`}
          >
            <span
              className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#713817] bg-[radial-gradient(circle_at_35%_25%,#4b2c22_0%,#241512_48%,#0d0b0a_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_0_0_2px_rgba(0,0,0,0.75)]"
              aria-hidden="true"
            >
              <span className="filly-launcher-pulse absolute inset-1 rounded-full border border-[#ff6d08]/70" />
              <span className="filly-launcher-orbit absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#ff6d08] shadow-[0_0_10px_2px_rgba(255,109,8,0.75)]" />
              <img
                src="/favicon.svg"
                alt=""
                width={32}
                height={32}
                draggable={false}
                className="relative z-10 h-8 w-8 transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105"
              />
            </span>

            <span
              className={`flex min-w-0 flex-1 items-center justify-between gap-3 pr-5 transition-all duration-300 ${isOpen ? "translate-x-0 opacity-100 delay-150" : "-translate-x-3 opacity-0"}`}
            >
              <span className="min-w-0 text-left leading-tight">
                <strong className="block whitespace-nowrap font-display text-sm font-semibold text-white">
                  Hey, I’m Filly! <span aria-hidden="true">👋</span>
                </strong>
                <span className="mt-0.5 block whitespace-nowrap text-[11px] font-medium text-white/58">
                  Need a hand? I’m ready to help.
                </span>
              </span>
              <span className="text-2xl font-light leading-none text-[#ff7a30]" aria-hidden="true">
                ‹
              </span>
            </span>
          </button>
        </div>

        <span className="absolute bottom-3 right-4 rounded-full border border-border bg-background/80 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
          {isDragging
            ? "Positioning Filly…"
            : isOpen
              ? "Drag · Click to collapse"
              : "Drag · Click to open"}
        </span>
      </div>

      <figcaption className="mt-5 max-w-sm text-center text-xs leading-relaxed text-muted-foreground">
        {isOpen
          ? "Filly expands beside the booking email. Drag it to reposition it, or click to collapse it."
          : "Filly appears beside supported booking emails. Drag it anywhere in the email area, or click to open it."}
      </figcaption>

      <div className="mt-6 grid w-full max-w-md grid-cols-2 gap-2" aria-hidden="true">
        <div
          className={`rounded-lg border px-3 py-2 text-center text-[10px] font-semibold uppercase tracking-wider transition-colors ${!isOpen ? "border-primary/40 bg-primary/10 text-primary" : "border-border text-muted-foreground"}`}
        >
          1 · Email detected
        </div>
        <div
          className={`rounded-lg border px-3 py-2 text-center text-[10px] font-semibold uppercase tracking-wider transition-colors ${isOpen ? "border-primary/40 bg-primary/10 text-primary" : "border-border text-muted-foreground"}`}
        >
          2 · Filly ready
        </div>
      </div>
    </figure>
  );
}

function TrustBar() {
  const inboxes = ["Gmail", "Outlook", "Front", "Helpwise"];
  return (
    <section aria-label="Integrations" className="border-y border-border/60 bg-surface/30">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 text-sm text-muted-foreground md:grid-cols-3 md:px-8">
        <div>
          <div className="text-xs uppercase tracking-wider text-foreground/70">Works inside</div>
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 font-medium text-foreground/90">
            {inboxes.map((name) => (
              <span key={name} className="inline-flex items-center gap-1.5">
                <BrandLogo name={name} size={18} className="rounded-sm" />
                {name}
              </span>
            ))}
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-foreground/70">Fills into</div>
          <div className="mt-2 inline-flex items-center gap-2 font-medium text-foreground/90">
            <BrandLogo name="Limo Anywhere" size={18} className="rounded-sm" />
            Limo Anywhere — Classic & Web 2.0
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-foreground/70">Powered by</div>
          <div className="mt-2 font-medium text-foreground/90">Google Gemini AI</div>
        </div>
      </div>
    </section>
  );
}

function OutcomeStrip() {
  const outcomes = [
    { value: "50+", label: "reservation fields supported", icon: Sparkles },
    { value: "4", label: "inbox platforms supported", icon: Mail },
    { value: "Human", label: "review before entry", icon: ShieldCheck },
    { value: "~30 sec", label: "for many supported bookings", icon: Clock },
  ];

  return (
    <section
      aria-label="Filly at a glance"
      className="relative z-10 mx-auto -mt-px max-w-7xl px-5 md:px-8"
    >
      <div className="grid overflow-hidden rounded-2xl border border-border-strong bg-background/80 shadow-elev backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
        {outcomes.map((item, index) => (
          <div
            key={item.label}
            className={`group flex items-center gap-4 px-5 py-5 ${index > 0 ? "border-t border-border sm:border-t-0 sm:border-l" : ""}`}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-transform group-hover:scale-105">
              <item.icon className="h-4 w-4" />
            </span>
            <span>
              <strong className="block font-display text-xl text-foreground">{item.value}</strong>
              <span className="text-xs leading-snug text-muted-foreground">{item.label}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function HiddenTax() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            The dispatcher's hidden tax
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-gradient md:text-5xl">
            Manual entry quietly limits your capacity.
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground md:text-base">
            <p>
              A single booking request can contain passenger details, flight information, routing,
              stops, affiliate instructions, billing contacts, vehicle needs, and special requests.
              Moving it into Limo Anywhere field by field consumes the time your team could spend
              confirming service and helping customers.
            </p>
            <p className="text-foreground/90">
              Filly gives reservationists an AI-assisted first pass: structured data, visible
              warnings, and a review step before the reservation is filled.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="card-premium rounded-xl p-5">
            <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
              <X className="h-3.5 w-3.5 text-destructive" /> Manual
            </div>
            <div className="font-display text-3xl font-semibold text-foreground">Minutes</div>
            <p className="mt-1 text-sm text-muted-foreground">Spent on each manual reservation</p>
            <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
              {[
                "Interpret the request",
                "Switch between systems",
                "Enter dozens of fields",
                "Verify critical details",
                "Find the correct account",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-destructive/80" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-premium rounded-xl p-5">
            <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-wider text-primary">
              <Check className="h-3.5 w-3.5" /> With Filly
            </div>
            <div className="font-display text-3xl font-semibold text-orange-gradient">~30 sec</div>
            <p className="mt-1 text-sm text-muted-foreground">Ready for operator review</p>
            <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
              {[
                "Start from the inbox",
                "Email + PDF extraction",
                "Supported fields mapped",
                "Visible review step",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: 1,
      title: "The FILLY button appears in your inbox",
      body: "Gmail, Outlook, Front, or Helpwise. Right where you already work. No copy-pasting, no tab switching.",
      icon: MousePointerClick,
    },
    {
      n: 2,
      title: "Filly reads and understands the email",
      body: "Filly organizes passenger details, routing, flight numbers, FBO terminals, child seats, affiliate status, and return legs.",
      icon: Brain,
    },
    {
      n: 3,
      title: "Review before anything is touched",
      body: "Every extracted field is shown to you in the side panel. Edit anything. Then fill.",
      icon: ShieldCheck,
    },
    {
      n: 4,
      title: "Let Filly handle the repetitive entry",
      body: "After review, Filly fills supported fields in Limo Anywhere. Many supported bookings are ready to review in about 30 seconds.",
      icon: Zap,
    },
  ];
  return (
    <section id="how-it-works" className="border-y border-border/60 bg-surface/30">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            How it works
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-gradient md:text-5xl">
            One workflow. Your team remains in control.
          </h2>
        </div>

        <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="card-premium rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div className="rounded-lg bg-primary/10 p-2 text-primary">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="font-display text-sm font-semibold text-muted-foreground">
                  0{s.n}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const featureGroups = [
  {
    label: "Email Integrations",
    items: [
      {
        icon: Mail,
        name: "Gmail",
        desc: "FILLY button injected into email view. Captures body and PDF attachments with one click.",
      },
      { icon: Mail, name: "Outlook", desc: "Works on Outlook Live, Office, and Office 365." },
      { icon: Mail, name: "Front", desc: "Native FILLY button inside Front app shared inboxes." },
      { icon: Mail, name: "Helpwise", desc: "Supports Helpwise.io and Helpwise.com team inboxes." },
    ],
  },
  {
    label: "Input Formats",
    items: [
      { icon: FileText, name: "Email text", desc: "Paste or click to capture any booking email." },
      {
        icon: FileText,
        name: "PDF attachments",
        desc: "Reads and extracts data from PDF itineraries and booking confirmations automatically.",
      },
      {
        icon: Sheet,
        name: "Excel / Spreadsheet uploads",
        desc: "Upload a spreadsheet of reservations for batch processing. Filly reads rows and fills sequentially.",
      },
      {
        icon: MousePointerClick,
        name: "Drag & drop anywhere",
        desc: "Drop files directly into the Filly panel. No need to find the upload button.",
      },
    ],
  },
  {
    label: "Reservation Types",
    items: [
      {
        icon: Plane,
        name: "Airport Pickup & Drop-off",
        desc: "IATA code detection, airline, terminal, flight number, gate — all auto-filled.",
      },
      {
        icon: Plane,
        name: "FBO / Private Aviation",
        desc: "Detects Signature, Jet Aviation, and other FBO terminals. Fills FBO name, tail number, and street address automatically.",
      },
      {
        icon: MapPin,
        name: "Multi-Stop Routing",
        desc: "Address, POI (Point of Interest), and FBO tabs all supported with full field automation.",
      },
      {
        icon: Repeat,
        name: "Round-Trip Automation",
        desc: "Fills the LA round-trip dialog with return date, time, flight, and routing — no manual input.",
      },
      {
        icon: Users,
        name: "Farm-In / Farm-Out",
        desc: "Auto-detects broker farm-in emails, sets dispatch type radio, matches accounts by sender domain.",
      },
    ],
  },
  {
    label: "AI Intelligence",
    items: [
      {
        icon: Plane,
        name: "Live Flight Lookup",
        desc: "When pickup times are missing or unclear, Filly queries live flight data to find actual arrival times.",
      },
      {
        icon: Clock,
        name: "Date Safety Checks",
        desc: "Timezone anchors, relative-date resolution, and visible warnings help your team verify booking dates.",
      },
      {
        icon: Baby,
        name: "Child Seat Detection",
        desc: "Reads child seat type and count (infant, rear-facing, forward-facing, booster) and fills automatically.",
      },
      {
        icon: Users,
        name: "Account Lookup & Creation",
        desc: "Searches existing LA accounts; creates new ones with billing contact and passenger type if not found.",
      },
      {
        icon: Brain,
        name: "Account Memory & Learning",
        desc: "Save approved corrections as reusable account rules and share them across eligible team plans.",
      },
    ],
  },
  {
    label: "Team Features",
    items: [
      {
        icon: Users,
        name: "Team Memory Sharing",
        desc: "Corrections and learned rules are shared across all dispatcher seats in real time.",
      },
      {
        icon: History,
        name: "Fill History",
        desc: "Every fill is logged. Review what was filled, when, and for whom.",
      },
      {
        icon: Clock,
        name: "Time Saved Dashboard",
        desc: "See how many hours Filly has saved your team. In real numbers.",
      },
      {
        icon: Pause,
        name: "PAUSE + Learn",
        desc: "Pause mid-fill to correct any field. Filly updates its rules automatically.",
      },
    ],
  },
  {
    label: "Experience",
    items: [
      {
        icon: Sheet,
        name: "Batch Fill",
        desc: "Attach multiple PDFs or spreadsheet rows at once. Review all trips, then fill them all sequentially.",
      },
      {
        icon: Zap,
        name: "Auto-Save",
        desc: "Optional mode that fills and saves the reservation in one uninterrupted pass.",
      },
      {
        icon: Palette,
        name: "2 UI Themes",
        desc: "Choose Cyber Dark or Cyber Light in the Filly panel.",
      },
      {
        icon: Sparkles,
        name: "50+ Supported Fields",
        desc: "Passenger, booker, billing, routing, flight, and trip-note information organized for review and entry.",
      },
    ],
  },
];

function FeatureGrid() {
  const featured = featureGroups
    .flatMap((group) => group.items.map((item) => ({ ...item, group: group.label })))
    .filter((item) =>
      [
        "Gmail",
        "PDF attachments",
        "Airport Pickup & Drop-off",
        "FBO / Private Aviation",
        "Farm-In / Farm-Out",
        "Round-Trip Automation",
      ].includes(item.name),
    );

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          Purpose-built intelligence
        </p>
        <h2 className="mt-3 font-display text-3xl leading-tight text-gradient md:text-5xl">
          Transportation-specific, not generic email AI.
        </h2>
        <p className="mt-4 text-muted-foreground">
          Filly understands the workflows reservation teams encounter every day.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((f) => (
          <article key={f.name} className="card-premium rounded-xl p-5">
            <div className="flex items-start gap-3">
              <div className="rounded-lg bg-primary/10 p-2 text-primary">
                {f.group === "Email Integrations" ? (
                  <BrandLogo name={f.name} size={16} className="rounded-sm" />
                ) : (
                  <f.icon className="h-4 w-4" />
                )}
              </div>
              <div>
                <h3 className="font-display text-[15px] font-semibold text-foreground">{f.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/features"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          Explore every feature in detail <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function BatchSpotlight() {
  return (
    <section className="border-y border-border/60 bg-surface/30">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:items-center md:px-8 md:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Batch fill</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-gradient md:text-5xl">
            One upload. Every reservation filled.
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground md:text-base">
            <p>
              Have 10 airport pickups from a PDF manifest or a spreadsheet export? Drop the file
              into Filly. Preview all extracted trips. Click fill. Walk away.
            </p>
            <p>
              Batch fill works with both PDF itineraries and Excel/CSV spreadsheets — whatever
              format your clients send.
            </p>
          </div>
        </div>

        <div className="card-premium rounded-2xl p-5">
          <div className="mb-4 flex items-center justify-between text-xs text-muted-foreground">
            <span>Batch preview — 10 trips</span>
            <span className="rounded-full bg-primary/15 px-2 py-0.5 font-semibold text-primary">
              Ready
            </span>
          </div>
          <div className="space-y-2">
            {[
              ["Trip 1", "James W. — JFK ✈ NYC"],
              ["Trip 2", "Sarah L. — EWR ✈ Newark"],
              ["Trip 3", "Robert M. — LGA ✈ Midtown"],
              ["Trip 4", "Priya K. — HPN ✈ Greenwich"],
              ["Trip 5", "Michael B. — TEB (FBO) ✈ Manhattan"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="flex items-center justify-between rounded-md border border-border/60 bg-background/40 px-3 py-2 text-sm"
              >
                <span className="text-muted-foreground">{k}</span>
                <span className="font-medium text-foreground">{v}</span>
              </div>
            ))}
            <div className="pt-2 text-center text-xs text-muted-foreground">+ 5 more</div>
          </div>
          <button
            type="button"
            className="btn-glow mt-5 w-full rounded-lg bg-primary py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Fill All Sequentially
          </button>
        </div>
      </div>
    </section>
  );
}

function CognitiveLoad() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-70" />
      <div className="relative mx-auto max-w-4xl px-5 py-24 text-center md:py-32">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          The real cost of manual entry
        </p>
        <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.1] text-gradient md:text-6xl">
          Filly doesn't just save time.
          <br />
          <span className="text-orange-gradient">It saves mental energy.</span>
        </h2>
        <div className="mx-auto mt-8 max-w-2xl space-y-5 text-left text-[15px] leading-relaxed text-muted-foreground md:text-base">
          <p>
            A busy dispatcher isn't just entering data. They're decoding vague customer requests,
            cross-referencing flight information, remembering which corporate clients want which
            billing format, and mentally juggling 12 open reservations — while the phone is ringing.
          </p>
          <p>
            Every minute spent copy-pasting is a minute not spent thinking clearly about service
            quality, customer satisfaction, and the details that make your operation stand out.
          </p>
          <p className="text-foreground/90">
            Filly absorbs the routine so your team can apply judgment where it actually matters.
          </p>
        </div>
      </div>
    </section>
  );
}

const plans = [
  { name: "Starter", price: "$149", fills: "100/mo", seats: "1", note: "Small reservation desks" },
  {
    name: "Operations",
    price: "$349",
    fills: "500/mo",
    seats: "Up to 3",
    note: "Active reservation teams",
    popular: true,
  },
  {
    name: "Scale",
    price: "$699",
    fills: "1,500/mo",
    seats: "Up to 5",
    note: "High-volume operations",
  },
  {
    name: "Enterprise",
    price: "Custom",
    fills: "Custom",
    seats: "Custom",
    note: "Tailored deployment",
  },
];

function PricingPreview() {
  return (
    <section className="border-y border-border/60 bg-surface/30">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Pricing</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-gradient md:text-5xl">
            Pricing designed around operational value.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Start with a representative booking. Choose a plan after Filly proves the fit.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-4 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`card-premium relative rounded-2xl p-6 ${
                p.popular ? "border-primary/60 ring-1 ring-primary/40" : ""
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-[11px] font-semibold text-primary-foreground">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-lg text-foreground">{p.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-display text-4xl font-semibold text-foreground">
                  {p.price}
                </span>
                {p.price !== "Custom" && <span className="text-sm text-muted-foreground">/mo</span>}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{p.note}</p>
              <dl className="mt-5 space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Fills</dt>
                  <dd className="font-medium text-foreground">{p.fills}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Seats</dt>
                  <dd className="font-medium text-foreground">{p.seats}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            See full pricing <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

const topFaqs = [
  {
    q: "What is Filly?",
    a: "An independent AI reservation assistant built for Limo Anywhere operators. It turns supported booking emails and PDFs into review-ready reservation data, then helps fill 50+ fields.",
  },
  {
    q: "Which email clients does Filly work in?",
    a: "Gmail, Outlook (Live / Office / 365), Front, and Helpwise. The FILLY button appears natively inside each inbox.",
  },
  {
    q: "Does Filly handle farm-in and round-trip reservations?",
    a: "Filly supports farm-in and round-trip workflows, helps identify account matches, and maps supported trip details for operator review.",
  },
  {
    q: "Does Limo Anywhere already have an AI agent?",
    a: "Limo Anywhere documents a customer-facing AI Chatbot and a separate Email AI Agent. The Email AI Agent—the product most comparable to Filly—was still limited to pre-selected pilot customers in its April 2026 documentation. Filly is available through direct evaluation and onboarding.",
  },
  {
    q: "Is there a free tier?",
    a: "Yes — 15 fills per month with no credit card required, so you can test the core workflow on representative bookings.",
  },
];

function FaqPreview() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-20">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">FAQ</p>
        <h2 className="mt-3 font-display text-3xl leading-tight text-gradient md:text-5xl">
          Questions? Answered.
        </h2>
      </div>
      <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-surface/40">
        {topFaqs.map((f) => (
          <details key={f.q} className="group p-5 md:p-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <span className="font-display text-base font-semibold text-foreground md:text-lg">
                {f.q}
              </span>
              <span className="text-primary transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{f.a}</p>
          </details>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          to="/faq"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          View all questions <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-border/60">
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-80" />
      <div className="relative mx-auto max-w-4xl px-5 py-16 text-center md:py-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          Your next reservation can take seconds
        </p>
        <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.1] text-gradient md:text-6xl">
          Give your reservation team its time back.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          See how Filly turns a real booking request into organized, reviewable Limo Anywhere
          reservation data.
        </p>
        <div className="mt-8">
          <a
            href="mailto:support@getfillyai.com?subject=Filly%20live%20demo"
            className="btn-glow inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition-transform hover:-translate-y-px"
          >
            Book a Live Demo
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <OutcomeStrip />
      <HiddenTax />
      <ScreenshotGallery />
      <HowItWorks />
      <FeatureGrid />
      <BatchSpotlight />
      <PricingPreview />
      <FaqPreview />
      <FinalCta />
      <MobileStickyCta />
      <ExitIntentModal />
    </>
  );
}
