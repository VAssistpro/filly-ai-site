import { useEffect, useRef, useState } from "react";
import { ArrowRight, FileText, Image, Mail, Sparkles, Wand2, Zap } from "lucide-react";
import logo from "@/assets/filly-logo.png";

const SLIDES = [
  {
    icon: Sparkles,
    kicker: "Hi, I'm Filly",
    lead: "Paste the mess.",
    accent: "I'll do the rest.",
    body: "Drop an email, a PDF, even a blurry screenshot. I read it and fill every field for you.",
    tint: "oklch(0.72 0.17 48)",
    rows: ["Marcus Webb", "JFK → The Carlyle", "Fri 7:40 PM · 2 pax"],
  },
  {
    icon: Wand2,
    kicker: "Any source",
    lead: "Messy in.",
    accent: "Spotless out.",
    body: "Confirmations, itineraries, forwarded threads — I find the details wherever they hide.",
    tint: "oklch(0.68 0.16 30)",
    rows: ["Sedan · Black", "Flight DL 218", "Meet & greet: yes"],
  },
  {
    icon: Zap,
    kicker: "Fast, promise",
    lead: "Fifteen seconds.",
    accent: "Give or take.",
    body: "Skim what I found, nudge anything you like, send it through. Then go do something better.",
    tint: "oklch(0.7 0.15 65)",
    rows: ["Rate: $214.00", "Confirmed ✓", "Sent to dispatch"],
  },
];

const STICKERS = [
  { icon: Mail, label: "email", top: "4%", left: "68%", delay: "0s" },
  { icon: FileText, label: "pdf", top: "22%", left: "84%", delay: "1.1s" },
  { icon: Image, label: "shot", top: "40%", left: "80%", delay: "2.2s" },
];

function FillDemo({ rows, tint }: { rows: string[]; tint: string }) {
  return (
    <div className="filly-demo mt-6" style={{ ["--tint" as string]: tint }}>
      <div className="filly-demo-bar">
        <span />
        <span />
        <span />
        <em>reservation.new</em>
      </div>
      {rows.map((row, i) => (
        <div
          key={row}
          className="filly-demo-row"
          style={{ animationDelay: `${0.35 + i * 0.28}s` }}
        >
          <span className="filly-demo-key" />
          <span className="filly-demo-val">{row}</span>
          <span className="filly-demo-tick">✓</span>
        </div>
      ))}
    </div>
  );
}

export function WelcomeCarousel({ onContinue }: { onContinue: () => void }) {
  const [index, setIndex] = useState(0);
  const [burst, setBurst] = useState(0);
  const timer = useRef<number | null>(null);
  const slide = SLIDES[index] ?? SLIDES[0]!;
  const Icon = slide.icon;

  useEffect(() => {
    timer.current = window.setInterval(
      () => setIndex((i) => (i + 1) % SLIDES.length),
      7000,
    );
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, []);

  const next = () => {
    setBurst((b) => b + 1);
    if (index < SLIDES.length - 1) setIndex(index + 1);
    else window.setTimeout(onContinue, 260);
  };

  return (
    <div className="flex h-full flex-col">
      <div className="filly-hero relative overflow-hidden px-7 pb-8 pt-8 text-on-hero">
        {/* drifting source stickers */}
        <div className="filly-stickers" aria-hidden="true">
          {STICKERS.map((s) => (
            <span
              key={s.label}
              className="filly-sticker"
              style={{ top: s.top, left: s.left, animationDelay: s.delay }}
            >
              <s.icon className="h-3 w-3" />
              {s.label}
            </span>
          ))}
        </div>

        <div className="filly-rise filly-d1 relative flex items-center gap-3.5">
          <span className="filly-logo-pop grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-on-hero/95 p-2 shadow-lg ring-1 ring-on-hero/40">
            <img src={logo} alt="Filly logo" className="h-full w-full object-contain" />
          </span>
          <span>
            <span className="block font-mono text-2xl font-semibold tracking-[0.22em]">
              FILLY
            </span>
            <span className="block font-mono text-[0.6rem] uppercase tracking-[0.28em] text-on-hero/75">
              Reservation Copilot
            </span>
          </span>
        </div>

        <div key={index} className="filly-slide relative mt-8">
          <span className="filly-chip inline-flex items-center gap-2 rounded-full bg-on-hero/15 px-3 py-1 font-mono text-[0.6rem] uppercase tracking-[0.22em] backdrop-blur-sm">
            <Icon className="h-3 w-3" />
            {slide.kicker}
          </span>

          <h2 className="mt-4 font-mono text-[1.85rem] font-semibold leading-[1.12] tracking-tight">
            {slide.lead}
            <br />
            <span className="filly-squiggle">{slide.accent}</span>
          </h2>
          <p className="mt-4 max-w-[32ch] text-sm leading-relaxed text-on-hero/85">
            {slide.body}
          </p>

          <FillDemo rows={slide.rows} tint={slide.tint} />
        </div>

        <div className="relative mt-7 flex items-center gap-4">
          <div className="flex gap-2">
            {SLIDES.map((s, i) => (
              <button
                key={s.kicker}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`filly-bead h-2 rounded-full ${
                  i === index ? "is-active w-7 bg-on-hero" : "w-2 bg-on-hero/45"
                }`}
              />
            ))}
          </div>
          <span className="ml-auto font-mono text-[0.6rem] tracking-[0.2em] text-on-hero/80">
            0{index + 1} / 0{SLIDES.length}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-end gap-5 bg-card px-7 pb-8 pt-8">
        <div className="filly-rise filly-d4">
          <h3 className="font-mono text-base font-semibold text-foreground">
            Let's fill your next one together
          </h3>
          <p className="mt-1.5 text-xs text-muted-foreground">
            Free account · 15 fills / month · No card, no nonsense
          </p>
        </div>

        <button
          type="button"
          onClick={next}
          className="filly-cta filly-rise filly-d5 group relative flex w-full items-center justify-between overflow-visible rounded-2xl bg-primary px-6 py-4 font-mono text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-[var(--filly-glow)] transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0"
        >
          {index < SLIDES.length - 1 ? "Show me more" : "Let's go"}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          {burst > 0 && (
            <span key={burst} className="filly-confetti" aria-hidden="true">
              {Array.from({ length: 8 }).map((_, i) => (
                <i key={i} style={{ ["--i" as string]: i }} />
              ))}
            </span>
          )}
        </button>

        <button
          type="button"
          onClick={onContinue}
          className="filly-rise filly-d6 text-center font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
        >
          Skip the tour
        </button>
      </div>
    </div>
  );
}


