import { useEffect, useState } from "react";
import { X, ArrowRight, Sparkles } from "lucide-react";

const STORAGE_KEY = "filly.exitIntent.dismissed";

export function ExitIntentModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.localStorage.getItem(STORAGE_KEY)) return;

    let shownOnce = false;
    const dwellTimer = window.setTimeout(() => {
      if (!shownOnce) {
        shownOnce = true;
        setOpen(true);
      }
    }, 45000);

    const onLeave = (e: MouseEvent) => {
      if (shownOnce) return;
      if (e.clientY <= 0 && window.scrollY > 200) {
        shownOnce = true;
        setOpen(true);
      }
    };

    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.clearTimeout(dwellTimer);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  function dismiss() {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, "1");
    }
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-title"
      className="fixed inset-0 z-[60] flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm"
      onClick={dismiss}
    >
      <div
        className="card-premium relative w-full max-w-md rounded-2xl p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={dismiss}
          className="absolute right-4 top-4 rounded-full p-1 text-muted-foreground hover:bg-surface hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
          <Sparkles className="h-3 w-3" /> See Filly on your workflow
        </div>

        <h2
          id="exit-title"
          className="mt-4 font-display text-2xl font-semibold text-gradient"
        >
          Have a real booking request?
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Bring a representative email or supported PDF. We will show you how Filly
          organizes it for review and helps fill the Limo Anywhere reservation.
        </p>

        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <a
            href="mailto:support@getfillyai.com?subject=Test%20Filly%20on%20a%20booking"
            className="btn-glow inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            onClick={dismiss}
          >
            Book a Live Demo
            <ArrowRight className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={dismiss}
            className="rounded-full border border-border-strong bg-transparent px-5 py-2.5 text-sm text-muted-foreground hover:bg-surface"
          >
            No thanks
          </button>
        </div>
      </div>
    </div>
  );
}
