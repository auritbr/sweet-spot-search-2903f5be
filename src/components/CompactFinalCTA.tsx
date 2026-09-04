import { Link } from "@tanstack/react-router";
import { ArcThick, QuarterCircle } from "@/components/Shapes";
import { Button } from "@/components/ui/button";

type CtaLink = {
  label: string;
  to?: "/ecossistema" | "/transparencia" | "/projetos" | "/contato" | "/agenda" | "/quem-somos" | "/equipe";
  href?: string;
};

type Variant = "continuity" | "agenda" | "projects" | "ecosystem" | "transparency" | "team";

type CompactFinalCTAProps = {
  title: string;
  text: string;
  primary: CtaLink;
  secondary: CtaLink;
  variant: Variant;
};

const buttonStyles: Record<Variant, readonly [string, string]> = {
  continuity: [
    "border-brand-petrol/15 bg-brand-cyan/85 text-brand-petrol hover:bg-brand-cyan",
    "border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20",
  ],
  agenda: [
    "border-brand-petrol/15 bg-brand-gold/90 text-brand-petrol hover:bg-brand-gold",
    "border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20",
  ],
  projects: [
    "border-brand-petrol/15 bg-brand-cyan/85 text-brand-petrol hover:bg-brand-cyan",
    "border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20",
  ],
  ecosystem: [
    "border-brand-petrol/15 bg-brand-gold/90 text-brand-petrol hover:bg-brand-gold",
    "border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20",
  ],
  transparency: [
    "border-brand-petrol/15 bg-brand-gold/90 text-brand-petrol hover:bg-brand-gold",
    "border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20",
  ],
  team: [
    "border-brand-petrol/15 bg-brand-cyan/85 text-brand-petrol hover:bg-brand-cyan",
    "border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20",
  ],
};

const accents: Record<Variant, { corner: "tl" | "tr" | "bl" | "br"; cornerColor: string; arcColor: string; dots: string[] }> = {
  continuity: { corner: "bl", cornerColor: "#08B9E6", arcColor: "#FFB400", dots: ["#FFB400", "#ED1C24", "#08B9E6"] },
  agenda: { corner: "tl", cornerColor: "#ED1C24", arcColor: "#08B9E6", dots: ["#08B9E6", "#FFB400", "#ED1C24"] },
  projects: { corner: "br", cornerColor: "#FFB400", arcColor: "#08B9E6", dots: ["#ED1C24", "#08B9E6", "#FFB400"] },
  ecosystem: { corner: "tr", cornerColor: "#FFB400", arcColor: "#ED1C24", dots: ["#08B9E6", "#ED1C24", "#FFB400"] },
  transparency: { corner: "tl", cornerColor: "#FFB400", arcColor: "#08B9E6", dots: ["#ED1C24", "#FFB400", "#08B9E6"] },
  team: { corner: "bl", cornerColor: "#ED1C24", arcColor: "#FFB400", dots: ["#08B9E6", "#FFB400", "#ED1C24"] },
};

function CtaButton({ item, className }: { item: CtaLink; className: string }) {
  const classes = `w-full justify-center rounded-full border px-6 font-semibold shadow-sm backdrop-blur-md sm:w-auto ${className}`;
  return (
    <Button asChild size="sm" className={classes}>
      {item.to ? <Link to={item.to}>{item.label}</Link> : <a href={item.href}>{item.label}</a>}
    </Button>
  );
}

export function CompactFinalCTA({ title, text, primary, secondary, variant }: CompactFinalCTAProps) {
  const styles = buttonStyles[variant];
  const accent = accents[variant];
  const cornerPos =
    accent.corner === "tl" ? "left-0 top-0" : accent.corner === "tr" ? "right-0 top-0" : accent.corner === "bl" ? "bottom-0 left-0" : "bottom-0 right-0";

  return (
    <section className="bg-white px-4 pb-2 pt-4 md:pb-3 md:pt-6">
      <div className="container-x">
        <div className="relative mx-auto flex min-h-[280px] max-w-5xl items-center justify-center overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-brand-petrol via-brand-petrol to-[#00293a] px-6 py-12 text-center shadow-[0_30px_60px_-45px_rgba(0,56,76,0.85)] md:px-14 md:py-14">
          <QuarterCircle corner={accent.corner} color={accent.cornerColor} className={`pointer-events-none absolute ${cornerPos} w-24 opacity-30 md:w-36`} />
          <ArcThick color={accent.arcColor} className="pointer-events-none absolute -right-10 top-8 hidden w-24 opacity-25 md:block" from={195} to={325} />
          <span className="pointer-events-none absolute right-10 top-9 hidden size-3 rotate-45 border border-primary-foreground/40 md:block" aria-hidden="true" />
          <span className="pointer-events-none absolute bottom-9 left-10 hidden h-px w-14 bg-primary-foreground/30 md:block" aria-hidden="true" />
          <div className="pointer-events-none absolute bottom-8 right-10 hidden items-center gap-2 md:flex" aria-hidden="true">
            {accent.dots.map((color) => (
              <span key={color} className="size-2 rounded-full" style={{ backgroundColor: color }} />
            ))}
          </div>

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-[1.6rem] font-bold leading-tight text-primary-foreground md:text-[2.15rem]">{title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/80 md:text-base">{text}</p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CtaButton item={primary} className={styles[0]} />
              <CtaButton item={secondary} className={styles[1]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
