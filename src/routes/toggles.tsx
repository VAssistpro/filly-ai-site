import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { NeuToggle } from "@/components/NeuToggle";
import { NeuThemeTogglePremium } from "@/components/NeuThemeTogglePremium";

export const Route = createFileRoute("/toggles")({
  head: () => ({
    meta: [
      { title: "Tactile Neumorphic Toggle — Light & Dark" },
      {
        name: "description",
        content:
          "A soft-UI toggle switch with a recessed track and raised knob, rendered in both light and dark themes.",
      },
      { property: "og:title", content: "Tactile Neumorphic Toggle — Light & Dark" },
      {
        property: "og:description",
        content:
          "A soft-UI toggle switch with a recessed track and raised knob, rendered in both light and dark themes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Toggles,
});

function Panel({
  theme,
  className,
}: {
  theme: "Light" | "Dark";
  className?: string;
}) {
  const [poi, setPoi] = useState(true);
  const [tips, setTips] = useState(false);

  return (
    <section
      className={`${className ?? ""} neu-surface flex flex-col items-center gap-12 px-8 py-20`}
    >
      <p className="text-xs font-mono uppercase tracking-[0.4em] text-muted-foreground">
        {theme}
      </p>

      <div className="flex flex-col items-center gap-5">
        <NeuToggle checked={poi} onCheckedChange={setPoi} label="Prefer POI for venues" />
        <span className="font-mono text-sm tracking-[0.25em] text-muted-foreground">
          BUTTON. {poi ? "ON" : "OFF"}
        </span>
      </div>

      <div className="w-full max-w-sm space-y-4">
        <Row
          eyebrow="Routing preference"
          title="Prefer POI for Venues"
          body="Automatically route hotels and landmarks to the POI tab."
          checked={poi}
          onChange={setPoi}
        />
        <Row
          eyebrow="Help preference"
          title="Show Help Tips"
          body="Show feature and workflow tips at the top of the main screen."
          checked={tips}
          onChange={setTips}
        />
      </div>
    </section>
  );
}

function Row({
  eyebrow,
  title,
  body,
  checked,
  onChange,
}: {
  eyebrow: string;
  title: string;
  body: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-6 rounded-2xl border border-border/60 px-5 py-4">
      <div className="min-w-0">
        <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-accent-foreground/70">
          {eyebrow}
        </p>
        <h2 className="mt-1 font-mono text-base font-bold text-foreground">{title}</h2>
        <p className="mt-1 font-mono text-xs leading-relaxed text-muted-foreground">{body}</p>
      </div>
      <NeuToggle
        className="neu-switch-sm shrink-0"
        checked={checked}
        onCheckedChange={onChange}
        label={title}
      />
    </div>
  );
}

function Toggles() {
  return (
    <div className="filly-toggle-page neu-surface min-h-screen">
      <header className="neu-surface flex items-center justify-between gap-4 px-6 py-4">
        <span className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Neumorphic UI
        </span>
        <NeuThemeTogglePremium />
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2">
        <h1 className="sr-only">Tactile neumorphic toggle switch</h1>
        <Panel theme="Light" />
        <Panel theme="Dark" className="dark text-foreground" />
      </main>
    </div>
  );
}

