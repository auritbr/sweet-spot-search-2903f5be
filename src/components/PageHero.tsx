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
  eyebrow, variant = "internal", children, imagePosition = "center",
}: {
  title: string; subtitle?: string; image: string;
  breadcrumb?: { label: string; to?: string }[];
  accent?: Accent; brush?: string;
  split?: { first: string; second: string; secondColor?: string };
  eyebrow?: string;
  variant?: "internal" | "detail";
  children?: ReactNode;
  imagePosition?: string;
}) {
  const height = variant === "detail"
    ? "min-h-[430px] md:min-h-[460px] lg:min-h-[480px]"
    : "min-h-[460px] md:min-h-[510px] lg:min-h-[540px]";

  return (
    <section className={`relative isolate flex w-full items-center overflow-hidden ${height}`}>
      <div className="absolute inset-0 -z-10">
        <img src={image} alt="" loading="eager" className="h-full w-full object-cover" style={{ objectPosition: imagePosition }} />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/90 via-brand-petrol/70 to-brand-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-ink/45 via-transparent to-brand-ink/45" />
      </div>

      <QuarterCircle corner="tr" color={accentHex.petrol} className="pointer-events-none absolute -right-4 -top-4 h-28 w-28 opacity-80 md:h-40 md:w-40" />
      <ArcThick color={accentHex[accent]} className="pointer-events-none absolute -right-10 bottom-10 w-28 opacity-90 md:right-8 md:w-36" from={210} to={340} />
      <DiamondsCluster color={accentHex.gold} className="pointer-events-none absolute bottom-10 left-[72%] hidden opacity-85 lg:block" size={42} />
      <HatchedCircle size={variant === "detail" ? 190 : 240} color={accentHex[accent]} className="pointer-events-none absolute -bottom-20 -right-16 max-w-[40vw] opacity-25 md:right-[8%]" />

      <div className="container-x relative w-full pb-14 pt-28 md:pb-16 md:pt-32">
        <div className="max-w-[760px]">
          {breadcrumb && (
            <nav aria-label="Breadcrumb" className="mb-5 text-xs font-medium text-primary-foreground/65">
              <ol className="flex flex-wrap items-center gap-2">
                {breadcrumb.map((b, i) => (
                  <li key={b.label} className="flex items-center gap-2">
                    {b.to ? <Link to={b.to} className="transition hover:text-brand-gold">{b.label}</Link> : <span aria-current="page">{b.label}</span>}
                    {i < breadcrumb.length - 1 && <span className="text-primary-foreground/35">/</span>}
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <p className="mb-5 inline-flex rounded-full border border-primary-foreground/20 bg-background/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-foreground backdrop-blur-md">
            {eyebrow ?? title}
          </p>

          <h1 className={`relative max-w-3xl font-bold leading-[1.06] text-primary-foreground [text-shadow:0_4px_22px_rgb(0_0_0_/_0.32)] ${variant === "detail" ? "text-[clamp(2.15rem,4.4vw,3rem)]" : "text-[clamp(2.5rem,5vw,3.75rem)]"}`}>
            {split ? <><span className="block">{split.first}</span><span className="block" style={{ color: split.secondColor ?? accentHex[accent] }}>{split.second}</span></> : title}
          </h1>

          <BrushStroke color={brush} className="relative mt-5 w-28 md:w-32" />

          {subtitle && <p className="relative mt-5 max-w-2xl text-[clamp(1rem,1.5vw,1.2rem)] leading-relaxed text-primary-foreground/90">{subtitle}</p>}

          {children && <div className="relative mt-6">{children}</div>}
        </div>
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
