import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { HatchedCircle, ArcThick, BrushStroke, DiamondsCluster, DottedCurve, QuarterCircle, Triangle } from "./Shapes";

type Accent = "cyan" | "gold" | "red" | "petrol" | "orange" | "lime" | "brand-cyan" | "brand-gold" | "brand-red" | "brand-petrol" | "brand-orange" | "brand-lime";
const accentHex: Record<string, string> = {
  cyan: "#08B9E6", gold: "#FFB400", red: "#ED1C24", petrol: "#00384C", orange: "#FF7A00", lime: "#B8DC4B",
  "brand-cyan": "#08B9E6", "brand-gold": "#FFB400", "brand-red": "#ED1C24", "brand-petrol": "#00384C", "brand-orange": "#FF7A00", "brand-lime": "#B8DC4B",
};

export function PageHero({
  title, subtitle, image, breadcrumb, accent = "cyan", brush = "#FFB400", split,
  eyebrow, variant = "internal", compact = false, decoration = "arc", children, imagePosition = "center",
}: {
  title: string; subtitle?: string; image: string;
  breadcrumb?: { label: string; to?: string }[];
  accent?: Accent; brush?: string;
  split?: { first: string; second: string; secondColor?: string };
  eyebrow?: string;
  variant?: "internal" | "detail";
  compact?: boolean;
  decoration?: "arc" | "orbit" | "diamonds" | "triangle" | "hatch" | "curve" | "quarters" | "ribbon" | "constellation" | "frame" | "crescent";
  children?: ReactNode;
  imagePosition?: string;
}) {
  const height = compact
    ? "min-h-[405px] md:min-h-[450px] lg:min-h-[480px]"
    : variant === "detail"
      ? "min-h-[430px] md:min-h-[460px] lg:min-h-[480px]"
      : "min-h-[460px] md:min-h-[510px] lg:min-h-[540px]";

  const decorations = {
    arc: <><QuarterCircle corner="tr" color={accentHex.petrol} className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 opacity-80 md:h-36 md:w-36" /><ArcThick color={accentHex[accent]} className="pointer-events-none absolute -right-10 bottom-5 w-24 opacity-90 md:right-8 md:w-32" from={210} to={340} /></>,
    orbit: <><HatchedCircle size={210} color={accentHex.cyan} className="pointer-events-none absolute -bottom-20 right-[5%] opacity-25" /><Triangle color={accentHex.gold} size={42} className="pointer-events-none absolute right-[11%] top-28 hidden opacity-90 md:block" rotate={18} /><DottedCurve className="pointer-events-none absolute bottom-16 right-[22%] hidden w-40 text-brand-red opacity-80 lg:block" /></>,
    diamonds: <><DiamondsCluster color={accentHex.gold} className="pointer-events-none absolute right-[8%] top-28 hidden opacity-90 md:block" size={58} /><QuarterCircle corner="br" color={accentHex.red} className="pointer-events-none absolute -bottom-5 -right-5 w-28 opacity-85 md:w-40" /></>,
    triangle: <><Triangle color={accentHex.red} size={92} className="pointer-events-none absolute -right-4 top-24 opacity-85 md:right-[7%]" rotate={12} /><ArcThick color={accentHex.gold} className="pointer-events-none absolute -bottom-14 right-[14%] w-32 opacity-90" from={120} to={270} /></>,
    hatch: <><HatchedCircle size={190} color={accentHex[accent]} className="pointer-events-none absolute -right-12 top-24 opacity-30 md:right-[7%]" /><DiamondsCluster color={accentHex.red} className="pointer-events-none absolute bottom-12 right-[4%] hidden opacity-85 lg:block" size={42} /></>,
    curve: <><DottedCurve className="pointer-events-none absolute right-[4%] top-28 hidden w-52 text-brand-gold opacity-90 md:block" /><QuarterCircle corner="br" color={accentHex.cyan} className="pointer-events-none absolute -bottom-5 -right-5 w-32 opacity-75" /></>,
    quarters: <><QuarterCircle corner="tr" color={accentHex.red} className="pointer-events-none absolute -right-3 -top-3 w-28 opacity-85 md:w-40" /><QuarterCircle corner="br" color={accentHex.gold} className="pointer-events-none absolute -bottom-3 right-[9%] w-20 opacity-90 md:w-28" /></>,
    ribbon: <><BrushStroke color={accentHex.cyan} className="pointer-events-none absolute right-[5%] top-32 hidden w-44 rotate-[-12deg] opacity-85 md:block" /><Triangle color={accentHex.gold} size={54} className="pointer-events-none absolute bottom-10 right-[14%] opacity-90" rotate={45} /></>,
    constellation: <><DiamondsCluster color={accentHex.cyan} className="pointer-events-none absolute right-[7%] top-28 opacity-85" size={50} /><DottedCurve className="pointer-events-none absolute bottom-14 right-[11%] hidden w-44 text-brand-gold md:block" /></>,
    frame: <><QuarterCircle corner="tr" color={accentHex.gold} className="pointer-events-none absolute -right-3 -top-3 w-32 opacity-85" /><HatchedCircle size={145} color={accentHex.red} className="pointer-events-none absolute -bottom-14 right-[12%] opacity-30" /></>,
    crescent: <><ArcThick color={accentHex.cyan} className="pointer-events-none absolute right-[5%] top-20 w-36 opacity-85" from={70} to={260} /><Triangle color={accentHex.red} size={38} className="pointer-events-none absolute bottom-10 right-[19%] hidden md:block" rotate={28} /></>,
  };

  return (
    <section className={`relative isolate flex w-full items-center overflow-hidden ${height}`}>
      <div className="absolute inset-0 -z-10">
        <img src={image} alt="" loading="eager" className="h-full w-full object-cover" style={{ objectPosition: imagePosition }} />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/90 via-brand-petrol/70 to-brand-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-ink/45 via-transparent to-brand-ink/45" />
      </div>

      {decorations[decoration]}

      <div className="container-x relative w-full pb-10 pt-24 md:pb-12 md:pt-28">
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
