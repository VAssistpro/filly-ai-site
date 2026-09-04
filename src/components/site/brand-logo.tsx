// Renders a real brand favicon from Google's public favicon service.
// No API key required, works for every real domain.

const DOMAINS: Record<string, string> = {
  gmail: "gmail.com",
  outlook: "outlook.com",
  front: "front.com",
  helpwise: "helpwise.io",
  "limo anywhere": "limoanywhere.com",
  limoanywhere: "limoanywhere.com",
  google: "google.com",
  microsoft: "microsoft.com",
};

export type BrandName = keyof typeof DOMAINS | string;

interface BrandLogoProps {
  name: BrandName;
  size?: number;
  className?: string;
  alt?: string;
}

export function brandDomain(name: string): string | undefined {
  return DOMAINS[name.toLowerCase().trim()];
}

export function BrandLogo({ name, size = 24, className, alt }: BrandLogoProps) {
  const domain = brandDomain(name);
  if (!domain) return null;
  // Request 2x for retina sharpness.
  const px = Math.max(16, size * 2);
  const src = `https://www.google.com/s2/favicons?domain=${domain}&sz=${px}`;
  return (
    <img
      src={src}
      alt={alt ?? `${name} logo`}
      width={size}
      height={size}
      loading="lazy"
      decoding="async"
      className={className}
      style={{ width: size, height: size }}
    />
  );
}
