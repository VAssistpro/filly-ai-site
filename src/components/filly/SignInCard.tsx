import { useState } from "react";
import { Check, Eye, EyeOff, Loader2 } from "lucide-react";
import logo from "@/assets/filly-logo.png";

function GoogleMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.5 12.3c0-.9-.1-1.5-.2-2.2H12v4h6.6c-.1 1.1-.9 2.8-2.5 3.9l-.02.15 3.6 2.8.25.02c2.3-2.1 3.6-5.2 3.6-8.7Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.2 0 6-1.1 8-2.9l-3.8-3c-1 .7-2.4 1.2-4.2 1.2-3.2 0-5.9-2.1-6.8-5l-.14.01L1.3 17.2l-.05.13C3.3 21.3 7.3 24 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.2 14.3c-.25-.7-.4-1.5-.4-2.3s.15-1.6.38-2.3l-.01-.15-3.8-3-.12.06A12 12 0 0 0 0 12c0 1.9.5 3.8 1.3 5.4l3.9-3.1Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.7c2.3 0 3.8 1 4.7 1.8l3.4-3.3C18 1.2 15.2 0 12 0 7.3 0 3.3 2.7 1.3 6.6l3.9 3.1c1-2.9 3.6-5 6.8-5Z"
      />
    </svg>
  );
}

export function SignInCard() {
  const [mode, setMode] = useState<"in" | "up">("in");
  const [showPass, setShowPass] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [busy, setBusy] = useState(false);

  const submit = () => {
    if (!agreed || busy) return;
    setBusy(true);
    window.setTimeout(() => setBusy(false), 1400);
  };

  return (
    <div className="flex h-full flex-col">
      <div className="filly-hero px-7 pb-14 pt-8 text-on-hero">
        <span className="filly-rise filly-d1 grid h-11 w-11 place-items-center rounded-xl bg-on-hero/95 p-2 shadow-lg ring-1 ring-on-hero/40">
          <img src={logo} alt="Filly logo" className="h-full w-full object-contain" />
        </span>
        <p className="filly-rise filly-d2 mt-5 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-on-hero/80">
          Welcome to Filly
        </p>
        <h2 className="filly-rise filly-d3 mt-2 font-mono text-2xl font-semibold leading-tight">
          Move faster.
          <br />
          Stay accurate.
        </h2>
        <p className="filly-rise filly-d4 mt-3 max-w-[32ch] text-sm text-on-hero/85">
          Your reservation workflow, quietly accelerated.
        </p>
      </div>

      <div className="-mt-8 flex-1 rounded-t-2xl bg-card px-6 pb-8 pt-9 shadow-[0_-1rem_2.5rem_-1.5rem_oklch(0_0_0/0.35)]">
        <h3 className="filly-rise filly-d3 font-mono text-xl font-semibold text-foreground">
          {mode === "in" ? "Sign in to Filly" : "Create your account"}
        </h3>
        <p className="filly-rise filly-d4 mt-1 text-xs text-muted-foreground">
          Use your account or create one in a few seconds.
        </p>

        <div className="filly-rise filly-d4 mt-5 grid grid-cols-2 gap-1 rounded-xl border border-border bg-muted/60 p-1">
          {(["in", "up"] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMode(m)}
              className={`rounded-lg py-2.5 font-mono text-xs font-semibold tracking-wide transition-all duration-300 ${
                mode === m
                  ? "bg-primary text-primary-foreground shadow-[var(--filly-glow)]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {m === "in" ? "Sign In" : "Sign Up"}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="filly-rise filly-d5 mt-3 flex w-full items-center justify-center gap-2.5 rounded-xl border border-border bg-background py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/50 hover:bg-accent/60 active:scale-[0.99]"
        >
          <GoogleMark />
          Continue with Google
        </button>

        <div className="filly-rise filly-d5 my-4 flex items-center gap-3">
          <span className="h-px flex-1 bg-border" />
          <span className="font-mono text-[0.65rem] text-muted-foreground">or</span>
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="filly-rise filly-d6 space-y-2.5">
          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground focus:border-primary/60 focus:ring-4 focus:ring-primary/12"
          />
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Password"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 pr-11 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground focus:border-primary/60 focus:ring-4 focus:ring-primary/12"
            />
            <button
              type="button"
              aria-label={showPass ? "Hide password" : "Show password"}
              onClick={() => setShowPass((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-primary"
            >
              {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <label className="filly-rise filly-d6 mt-4 flex cursor-pointer gap-3 rounded-xl border border-border bg-muted/40 p-3.5 transition-colors hover:border-primary/40">
          <span
            className={`mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded border transition-all duration-300 ${
              agreed
                ? "border-primary bg-primary text-primary-foreground"
                : "border-muted-foreground/50 bg-background"
            }`}
          >
            <Check
              className={`h-3 w-3 transition-transform duration-300 ${
                agreed ? "scale-100" : "scale-0"
              }`}
            />
          </span>
          <input
            type="checkbox"
            className="sr-only"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          <span className="text-[0.7rem] leading-relaxed text-muted-foreground">
            Filly reads only the messages and attachments you choose and securely sends
            them to Filly's servers and Google Gemini to extract reservation details. Filly
            never collects payment-card numbers or security codes. I agree to the{" "}
            <span className="font-medium text-primary underline-offset-2 hover:underline">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="font-medium text-primary underline-offset-2 hover:underline">
              Privacy Policy
            </span>
            .
          </span>
        </label>

        <button
          type="button"
          onClick={submit}
          disabled={!agreed || busy}
          className="filly-cta mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 font-mono text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-[var(--filly-glow)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none disabled:hover:translate-y-0"
        >
          {busy && <Loader2 className="h-4 w-4 animate-spin" />}
          {mode === "in" ? "Sign In" : "Create Account"}
        </button>
      </div>
    </div>
  );
}


