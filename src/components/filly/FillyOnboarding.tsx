import { useEffect, useState } from "react";
import { ArrowLeft, Clock, HelpCircle, Home, Settings } from "lucide-react";
import { ThemeSwitch } from "@/components/filly/ThemeSwitch";
import { WelcomeCarousel } from "@/components/filly/WelcomeCarousel";
import { SignInCard } from "@/components/filly/SignInCard";

type Step = "welcome" | "signin";

export function FillyOnboarding() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [step, setStep] = useState<Step>("welcome");

  useEffect(() => {
    const stored = window.localStorage.getItem("filly-theme");
    if (stored === "dark" || stored === "light") setTheme(stored);
    else if (window.matchMedia("(prefers-color-scheme: dark)").matches) setTheme("dark");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("filly-theme", theme);
  }, [theme]);

  return (
    <div className="filly-onboarding-page flex min-h-screen items-center justify-center bg-background px-4 py-10">
      <div className="filly-frame w-full max-w-[26rem] overflow-hidden rounded-[1.75rem] border border-border bg-card">
        {/* header */}
        <header className="flex items-center justify-between gap-3 border-b border-border bg-sidebar px-4 py-3">
          {step === "welcome" ? (
            <span className="grid h-8 w-8 place-items-center rounded-full bg-primary/12 font-mono text-xs font-bold text-primary ring-1 ring-primary/30">
              F
            </span>
          ) : (
            <button
              type="button"
              aria-label="Back"
              onClick={() => setStep("welcome")}
              className="grid h-8 w-8 place-items-center rounded-full border border-border/70 text-muted-foreground transition-all duration-300 hover:-translate-x-0.5 hover:border-primary/50 hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
          )}

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-2 font-mono text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              <span className="filly-dot h-1.5 w-1.5 rounded-full bg-[oklch(0.72_0.18_150)]" />
              Ready
            </span>
            <span className="h-4 w-px bg-border" />
            <button
              type="button"
              aria-label="Help"
              className="relative text-muted-foreground transition-colors hover:text-primary"
            >
              <HelpCircle className="h-4 w-4" />
              <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-primary" />
            </button>
            <ThemeSwitch
              theme={theme}
              onToggle={() => setTheme(theme === "dark" ? "light" : "dark")}
            />
          </div>
        </header>

        {/* body */}
        <div key={step} className="filly-slide min-h-[36rem]">
          {step === "welcome" ? (
            <WelcomeCarousel onContinue={() => setStep("signin")} />
          ) : (
            <SignInCard />
          )}
        </div>

        {/* bottom nav */}
        <nav className="grid grid-cols-3 border-t border-border bg-sidebar">
          {[
            { icon: Home, label: "Home", active: true },
            { icon: Clock, label: "History", active: false },
            { icon: Settings, label: "Settings", active: false, badge: 6 },
          ].map((item) => (
            <button
              key={item.label}
              type="button"
              className={`relative flex flex-col items-center gap-1 py-3 font-mono text-[0.6rem] uppercase tracking-[0.16em] transition-colors duration-300 ${
                item.active
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.active && (
                <span className="absolute inset-x-6 top-0 h-0.5 rounded-full bg-primary" />
              )}
              <span className="relative">
                <item.icon className="h-4 w-4" />
                {item.badge ? (
                  <span className="absolute -right-2.5 -top-2 grid h-3.5 min-w-3.5 place-items-center rounded-full bg-primary px-1 text-[0.55rem] font-bold text-primary-foreground">
                    {item.badge}
                  </span>
                ) : null}
              </span>
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}

