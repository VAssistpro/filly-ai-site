import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, type FormEvent } from "react";
import { ArrowRight, Check, Eye, EyeOff, LockKeyhole } from "lucide-react";

export const Route = createFileRoute("/reset-password")({
  head: () => ({
    meta: [
      { title: "Reset your password | Filly AI" },
      { name: "robots", content: "noindex,nofollow" },
      { name: "description", content: "Choose a new password for your Filly AI account." },
    ],
  }),
  component: ResetPasswordPage,
});

const SUPABASE_URL = "https://ujljfqeslvafblgksutw.supabase.co";
const SUPABASE_ANON =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYXNlIiwicmVmIjoidWpsamZxZXNsdmFmYmxna3N1dHciLCJyb2xlIjoiYW5vbiIsImlhdCI6MTc3NDIxNDYyMiwiZXhwIjoyMDg5NzkyNjIyfQ.jPx5C0Q-_S-s681UwGF25cFJhNevhEdy0qRqRpXk3Pw";

function readRecoveryLink() {
  if (typeof window === "undefined") return { token: "", error: "" };
  const hash = new URLSearchParams(window.location.hash.slice(1));
  const query = new URLSearchParams(window.location.search);
  return {
    token: hash.get("access_token") || "",
    error: (hash.get("error_description") || query.get("error_description") || "").replace(
      /\+/g,
      " ",
    ),
  };
}

function ResetPasswordPage() {
  const recovery = useMemo(readRecoveryLink, []);
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(recovery.error);
  const [complete, setComplete] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    if (password.length < 8) {
      setError("Use at least eight characters for your new password.");
      return;
    }
    if (password !== confirmation) {
      setError("The two passwords do not match.");
      return;
    }
    if (!recovery.token) {
      setError(
        "This reset link is invalid or has expired. Return to Filly and request a new link.",
      );
      return;
    }

    setBusy(true);
    try {
      const response = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
        method: "PUT",
        headers: {
          apikey: SUPABASE_ANON,
          Authorization: `Bearer ${recovery.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });
      if (!response.ok) {
        const result = (await response.json().catch(() => ({}))) as {
          msg?: string;
          message?: string;
        };
        throw new Error(result.msg || result.message || "The password could not be updated.");
      }
      window.history.replaceState({}, "", "/reset-password");
      setComplete(true);
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "The password could not be updated. Request a new reset link and try again.",
      );
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="relative flex min-h-[calc(100dvh-4.25rem)] items-center overflow-hidden bg-noise px-5 py-16 md:px-8">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
      <div className="relative mx-auto w-full max-w-lg">
        <div className="mb-5 flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center border border-primary/50 bg-primary/10 text-primary">
            <LockKeyhole className="h-5 w-5" />
          </div>
          <div>
            <p className="font-display text-lg font-semibold text-foreground">Filly AI</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Account security
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden border border-border-strong bg-surface shadow-elev">
          <div className="absolute inset-y-0 left-0 w-1 bg-primary" />
          <div className="p-7 sm:p-10">
            {complete ? (
              <div role="status">
                <div className="grid h-14 w-14 place-items-center border border-emerald-400/50 bg-emerald-400/10 text-emerald-400">
                  <Check className="h-6 w-6" />
                </div>
                <p className="mt-7 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                  Password updated
                </p>
                <h1 className="mt-3 font-display text-4xl font-semibold text-foreground">
                  You’re all set.
                </h1>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Close this page, return to the Filly extension, and sign in with your new
                  password.
                </p>
              </div>
            ) : (
              <>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Secure password reset
                </p>
                <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
                  Choose a new password.
                </h1>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Use a unique password with at least eight characters. This page only updates your
                  Filly account password.
                </p>

                {error && (
                  <div
                    className="mt-6 border-l-2 border-red-400 bg-red-400/10 px-4 py-3 text-sm leading-relaxed text-red-200"
                    role="alert"
                  >
                    {error}
                  </div>
                )}

                <form className="mt-7 space-y-5" onSubmit={submit}>
                  <label className="block">
                    <span className="mb-2 block font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      New password
                    </span>
                    <span className="relative block">
                      <input
                        type={showPassword ? "text" : "password"}
                        minLength={8}
                        autoComplete="new-password"
                        required
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className="h-13 w-full border border-border-strong bg-surface-2 px-4 pr-12 text-base text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((value) => !value)}
                        className="absolute inset-y-0 right-0 grid w-12 place-items-center text-muted-foreground hover:text-foreground"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </span>
                  </label>

                  <label className="block">
                    <span className="mb-2 block font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Confirm new password
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      minLength={8}
                      autoComplete="new-password"
                      required
                      value={confirmation}
                      onChange={(event) => setConfirmation(event.target.value)}
                      className="h-13 w-full border border-border-strong bg-surface-2 px-4 text-base text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                    />
                  </label>

                  <p className="text-xs leading-relaxed text-muted-foreground">
                    At least 8 characters. A longer, unique password is safer.
                  </p>

                  <button
                    type="submit"
                    disabled={busy}
                    className="flex h-14 w-full items-center justify-between bg-primary px-5 font-mono text-xs font-bold uppercase tracking-[0.15em] text-primary-foreground transition hover:bg-primary-glow disabled:cursor-wait disabled:opacity-60"
                  >
                    <span>{busy ? "Updating…" : "Update password"}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2 border-x border-b border-border bg-background/70 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground sm:flex-row">
          <span>Filly AI · Secure account access</span>
          <a href="mailto:support@getfillyai.com" className="hover:text-foreground">
            Need help?
          </a>
        </div>
      </div>
    </section>
  );
}
