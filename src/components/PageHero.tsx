import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { HatchedCircle, ArcThick, BrushStroke, DiamondsCluster, QuarterCircle } from "./Shapes";

type Accent = "cyan" | "gold" | "red" | "petrol" | "orange" | "lime" | "brand-cyan" | "brand-gold" | "brand-red" | "brand-petrol" | "brand-orange" | "brand-lime";
const accentHex: Record<string, string> = {
  cyan: "#08B9E6", gold: "#FFB400", red: "#ED1C24", petrol: "#00384C", orange: "#FF7A00", lime: "#B8DC4B",
  "brand-cyan": "#08B9E6", "brand-gold": "#FFB400", "brand-red": "#ED1C24", "brand-petrol": "#00384C", "brand-orange": "#FF7A00", "brand-lime": "#B8DC4B",
};

export function PageHero({
  title, subtitle, image, breadcrumb, accent = "cyan", brush = "#FFB400", split,
}: {
  title: string; subtitle?: string; image: string;
  breadcrumb?: { label: string; to?: string }[];
  accent?: Accent; brush?: string;
  split?: { first: string; second: string; secondColor?: string };
}) {
  return (
    <section className="relative isolate w-full" style={{ minHeight: "min(58vh, 520px)" }}>
      <div className="absolute inset-0 -z-10">
        <img src={image} alt="" loading="eager" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-brand-ink/50" />
      </div>

      <QuarterCircle corner="tr" color={accentHex.petrol} className="absolute -top-4 -right-4 w-32 md:w-52 h-32 md:h-52 opacity-90" />
      <ArcThick color={accentHex[accent]} className="absolute left-4 top-24 w-24 md:w-40 opacity-90" from={210} to={340} />
      <DiamondsCluster color={accentHex.cyan} className="absolute right-10 bottom-24 hidden md:block" size={54} />
      <div className="pointer-events-none absolute -bottom-1 inset-x-0 h-12 md:h-16 bg-white [clip-path:ellipse(90%_100%_at_50%_100%)]" aria-hidden />

      <div className="container-x flex flex-col justify-center items-center text-center min-h-[min(58vh,520px)] pt-28 pb-16 relative">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <HatchedCircle size={280} color={accentHex[accent]} className="opacity-50 max-w-[60vw]" />
        </div>

        <h1
          className="relative text-white"
          style={{ fontSize: "clamp(2.2rem, 4vw, 4.2rem)", lineHeight: 1.02, fontWeight: 700, textShadow: "0 4px 20px rgba(0,0,0,.35)" }}
        >
          {split ? (
            <>
              <span className="block">{split.first}</span>
              <span className="block" style={{ color: split.secondColor ?? accentHex[accent] }}>{split.second}</span>
            </>
          ) : title}
        </h1>

        <BrushStroke color={brush} className="mt-5 w-40" />

        {subtitle && (
          <p className="relative mt-5 text-white/95 max-w-2xl" style={{ fontSize: "clamp(1rem, 1.2vw, 1.15rem)", lineHeight: 1.6 }}>
            {subtitle}
          </p>
        )}

        {breadcrumb && (
          <nav aria-label="Breadcrumb" className="relative mt-6 text-sm text-white/90">
            <ol className="flex flex-wrap gap-2 items-center justify-center">
              {breadcrumb.map((b, i) => (
                <li key={i} className="flex items-center gap-2">
                  {b.to ? <Link to={b.to} className="hover:text-brand-gold underline underline-offset-4">{b.label}</Link> : <span className="font-semibold">{b.label}</span>}
                  {i < breadcrumb.length - 1 && <span className="text-white/60">/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
      </div>
    </section>
  );
}

export function Section({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return <section id={id} className={`py-12 md:py-16 relative ${className}`}>{children}</section>;
}

export function SectionTitle({ eyebrow, title, text, invert, align = "left" }: { eyebrow?: string; title: string; text?: string; invert?: boolean; align?: "left" | "center" }) {
  return (
    <div className={`max-w-3xl mb-8 ${invert ? "text-white" : ""} ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className={`text-xs font-semibold uppercase tracking-[0.22em] mb-3 ${invert ? "text-brand-gold" : "text-brand-red"}`}>{eyebrow}</p>}
      <h2 className={`${invert ? "text-white" : "text-brand-ink"}`}
          style={{ fontSize: "clamp(1.75rem, 2.7vw, 2.75rem)", lineHeight: 1.15, fontWeight: 700 }}>
        {title}
      </h2>
      {text && <p className={`mt-4 ${invert ? "text-white/90" : "text-brand-gray"}`} style={{ fontSize: "clamp(1rem, 1.2vw, 1.15rem)", lineHeight: 1.7 }}>{text}</p>}
    </div>
  );
}
