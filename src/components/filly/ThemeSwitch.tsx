import { Moon, Sun } from "lucide-react";

export function ThemeSwitch({
  theme,
  onToggle,
}: {
  theme: "light" | "dark";
  onToggle: () => void;
}) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle dark mode"
      onClick={onToggle}
      className="group relative grid h-8 w-8 place-items-center rounded-full border border-border/70 bg-card/60 text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary active:scale-95"
    >
      <Sun
        className={`absolute h-4 w-4 transition-all duration-500 ${
          isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
        }`}
      />
      <Moon
        className={`absolute h-4 w-4 transition-all duration-500 ${
          isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
        }`}
      />
    </button>
  );
}


