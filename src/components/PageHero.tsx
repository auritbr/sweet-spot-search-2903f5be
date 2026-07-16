import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function PageHero({
  title, subtitle, image, breadcrumb, accent = "brand-red",
}: { title: string; subtitle?: string; image: string; breadcrumb?: { label: string; to?: string }[]; accent?: string }) {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={image} alt="" loading="eager" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-ink/70 via-brand-ink/50 to-brand-ink/70" />
      </div>
      {/* geometric marks */}
      <div className={`absolute -left-16 top-24 w-56 h-56 rounded-full bg-${accent} opacity-30 blur-2xl -z-10`} />
      <div className="absolute right-10 top-32 w-32 h-32 rounded-full border-4 border-brand-gold/60 -z-10 animate-float-slow" />
      <div className="absolute right-24 bottom-10 w-24 h-24 hatched-circle text-brand-cyan opacity-70 -z-10" />

      <div className="container-x pt-40 pb-24 md:pt-48 md:pb-32 text-white">
        {breadcrumb && (
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/80">
            <ol className="flex flex-wrap gap-2 items-center">
              {breadcrumb.map((b, i) => (
                <li key={i} className="flex items-center gap-2">
                  {b.to ? <Link to={b.to} className="hover:text-brand-gold">{b.label}</Link> : <span>{b.label}</span>}
                  {i < breadcrumb.length - 1 && <span className="text-white/50">/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="font-display text-4xl md:text-6xl font-black text-white max-w-4xl leading-[1.05]">
          {title}
        </h1>
        {subtitle && <p className="mt-5 max-w-2xl text-lg text-white/90">{subtitle}</p>}
      </div>

      <svg className="absolute bottom-0 inset-x-0 w-full text-white" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true" style={{ height: 40 }}>
        <path fill="currentColor" d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60Z" />
      </svg>
    </section>
  );
}

export function Section({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return <section id={id} className={`py-16 md:py-24 ${className}`}>{children}</section>;
}

export function SectionTitle({ eyebrow, title, text, invert }: { eyebrow?: string; title: string; text?: string; invert?: boolean }) {
  return (
    <div className={`max-w-3xl mb-10 ${invert ? "text-white" : ""}`}>
      {eyebrow && <p className={`text-sm font-bold uppercase tracking-widest mb-3 ${invert ? "text-brand-gold" : "text-brand-red"}`}>{eyebrow}</p>}
      <h2 className={`font-display text-3xl md:text-5xl font-black ${invert ? "text-white" : "text-brand-ink"}`}>
        {title}
      </h2>
      {text && <p className={`mt-4 text-lg ${invert ? "text-white/90" : "text-brand-gray"}`}>{text}</p>}
    </div>
  );
}
