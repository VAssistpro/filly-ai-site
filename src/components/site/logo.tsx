export function FillyLogo({ className = "h-7" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img src="/filly-launcher.svg" alt="" aria-hidden="true" className="h-full w-auto" />
      <span
        className="font-display text-[1.05rem] font-bold tracking-[0.12em] text-foreground"
        style={{ fontFamily: "var(--font-display)" }}
      >
        FILLY
      </span>
    </div>
  );
}
