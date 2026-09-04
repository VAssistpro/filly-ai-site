import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Premium day/night theme toggle.
 * Deep-inset track that morphs from warm daylight to a night sky (with stars),
 * plus a raised bevelled knob carrying the active icon.
 */
export function NeuThemeTogglePremium({ className }: { className?: string }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    setDark(
      stored === "dark" ||
        (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches),
    );
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label="Toggle dark theme"
      onClick={() => setDark((d) => !d)}
      className={cn("neu-switch-p", dark && "is-on", className)}
    >
      <span className="neu-switch-p-track" aria-hidden="true">
        <span className="neu-switch-p-sky" />
        {/* stars are two composited gradient layers — no per-star DOM nodes */}
        <span className="neu-switch-p-stars" />

        <span className="neu-switch-p-glow" />
        <span className="neu-switch-p-knob">
          <Sun className="neu-switch-p-icon neu-switch-p-icon-sun" strokeWidth={2.4} />
          <Moon className="neu-switch-p-icon neu-switch-p-icon-moon" strokeWidth={2.4} />
        </span>
      </span>
    </button>
  );
}


