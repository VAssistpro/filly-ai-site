import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export function MobileStickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-border-strong bg-background/95 p-3 backdrop-blur-xl transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <a
        href="mailto:support@getfillyai.com?subject=Filly%20demo%20request"
        className="btn-glow flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
      >
        Book a Live Demo
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}
