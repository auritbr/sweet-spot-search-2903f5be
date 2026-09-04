import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

type CtaLink = {
  label: string;
  to?: "/" | "/ecossistema" | "/transparencia" | "/projetos" | "/contato" | "/agenda" | "/quem-somos" | "/equipe" | "/privacidade" | "/imprensa" | "/ods-maggu-2030";
  href?: string;
};

type Variant = "home" | "continuity" | "agenda" | "projects" | "ecosystem" | "transparency" | "team" | "privacy" | "terms" | "press" | "ods";


type CompactFinalCTAProps = {
  title: string;
  text: string;
  primary: CtaLink;
  secondary: CtaLink;
  variant: Variant;
};

const buttonStyles: Record<Variant, readonly [string, string]> = {
  home: [
    "border-brand-petrol/15 bg-brand-gold/90 text-brand-petrol hover:bg-brand-gold",
    "border-brand-cyan/35 bg-brand-cyan/15 text-primary-foreground hover:bg-brand-cyan/25",
  ],
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
  privacy: [
    "border-brand-petrol/15 bg-brand-cyan/85 text-brand-petrol hover:bg-brand-cyan",
    "border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20",
  ],
  terms: [
    "border-brand-petrol/15 bg-brand-gold/90 text-brand-petrol hover:bg-brand-gold",
    "border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20",
  ],
};

function GraphicComposition({ variant }: { variant: Variant }) {
  if (variant === "privacy") {
    return <><span className="absolute -left-16 bottom-0 size-56 rounded-full border-[28px] border-brand-cyan/15 md:size-72" /><span className="absolute -right-10 top-10 h-40 w-44 rotate-6 rounded-md border border-primary-foreground/15 md:h-52 md:w-60" /><span className="absolute right-20 top-20 hidden h-px w-28 bg-brand-cyan/50 md:block" /></>;
  }
  if (variant === "terms") {
    return <><span className="absolute -left-12 -top-16 size-56 rotate-12 border-[22px] border-brand-gold/15 md:size-72" /><span className="absolute -bottom-20 -right-16 size-60 rounded-full bg-brand-red/15 md:size-72" /><span className="absolute right-20 top-14 hidden size-14 rotate-45 border border-brand-gold/40 md:block" /></>;
  }
  if (variant === "ecosystem") {
    return <><span className="absolute -left-14 top-12 size-48 rounded-full border-[28px] border-brand-gold/15 md:size-64" /><span className="absolute -right-16 bottom-0 size-44 rounded-full bg-brand-red/15 md:size-60" /><span className="absolute bottom-16 right-20 hidden h-px w-36 bg-brand-cyan/35 md:block" /><span className="absolute bottom-[3.8rem] right-[13.2rem] hidden size-3 rounded-full bg-brand-cyan md:block" /><span className="absolute bottom-[3.8rem] right-[8rem] hidden size-3 rounded-full bg-brand-gold md:block" /></>;
  }
  if (variant === "agenda") {
    return <><span className="absolute -left-16 bottom-0 size-52 rounded-full border-[30px] border-brand-cyan/15 md:size-64" /><span className="absolute -right-10 top-10 h-40 w-44 rotate-6 rounded-md border border-primary-foreground/15 bg-primary-foreground/[0.04] md:h-52 md:w-60" /><span className="absolute right-16 top-20 hidden grid-cols-3 gap-3 md:grid">{Array.from({ length: 6 }, (_, index) => <i key={index} className="size-3 rounded-sm bg-brand-gold/65" />)}</span><span className="absolute bottom-10 left-1/3 hidden h-px w-24 bg-brand-red/50 md:block" /></>;
  }
  if (variant === "projects") {
    return <><span className="absolute -left-16 -top-20 size-64 rounded-full border-[38px] border-brand-red/15 md:size-80" /><span className="absolute -bottom-24 -right-20 size-64 rounded-full bg-brand-gold/15 md:size-80" /><span className="absolute right-12 top-12 hidden size-16 rotate-45 border border-brand-cyan/40 md:block" /><span className="absolute bottom-12 left-20 hidden h-10 w-20 diamond-grid text-brand-cyan/15 md:block" /></>;
  }
  if (variant === "transparency") {
    return <><span className="absolute -left-6 top-12 h-48 w-44 -rotate-6 rounded-md border border-primary-foreground/15 bg-primary-foreground/[0.04] md:h-64 md:w-56" /><span className="absolute -right-10 bottom-0 h-52 w-44 rotate-6 rounded-md border border-brand-gold/25 bg-brand-gold/[0.07] md:h-64 md:w-56" /><span className="absolute left-12 top-24 hidden h-px w-28 bg-brand-cyan/50 md:block" /><span className="absolute right-12 bottom-20 hidden h-px w-24 bg-brand-red/50 md:block" /></>;
  }
  if (variant === "team") {
    return <><span className="absolute -left-20 bottom-0 size-64 rounded-full bg-brand-cyan/15 md:size-80" /><span className="absolute -right-24 -top-20 size-64 rounded-full border-[34px] border-brand-gold/15 md:size-80" /><span className="absolute left-20 bottom-16 hidden h-px w-36 bg-primary-foreground/25 md:block" /><span className="absolute bottom-[3.7rem] left-[13.5rem] hidden size-4 rounded-full bg-brand-red md:block" /></>;
  }
  if (variant === "home") {
    return <><span className="absolute -left-20 -top-24 size-72 rounded-full border-[38px] border-brand-cyan/15 md:size-96" /><span className="absolute -right-20 bottom-0 size-60 rounded-full bg-brand-red/15 md:size-80" /><span className="absolute right-20 top-14 hidden size-20 rotate-45 border border-brand-gold/40 md:block" /><span className="absolute bottom-12 left-24 hidden h-px w-32 bg-brand-gold/45 md:block" /></>;
  }
  return <><span className="absolute -left-20 bottom-0 size-64 rounded-full border-[34px] border-brand-cyan/15 md:size-80" /><span className="absolute -right-16 -top-20 size-64 rounded-full bg-brand-gold/15 md:size-80" /><span className="absolute right-20 top-16 hidden size-16 rotate-45 border border-brand-red/45 md:block" /><span className="absolute bottom-12 left-24 hidden w-28 border-t border-dashed border-primary-foreground/35 md:block" /></>;
}

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
  const isLegal = variant === "privacy" || variant === "terms";

  return (
    <section data-final-cta className="relative isolate mt-4 overflow-hidden bg-brand-petrol px-4 pt-5 md:mt-6 md:px-6 md:pt-7">
      <div className="container-x px-0">
        <div className="relative mx-auto flex min-h-[250px] w-full items-center justify-center overflow-hidden rounded-t-[2rem] border-x border-t border-primary-foreground/10 bg-brand-petrol px-6 py-9 text-center md:min-h-[280px] md:px-14 md:py-11 lg:min-h-[295px]">
          <div className="pointer-events-none absolute inset-0 scale-90" aria-hidden="true"><GraphicComposition variant={variant} /></div>
          <span className="pointer-events-none absolute inset-x-[12%] top-0 h-px bg-primary-foreground/20" aria-hidden="true" />
          <span className="pointer-events-none absolute bottom-0 left-1/2 h-12 w-[68%] -translate-x-1/2 rounded-t-full bg-primary-foreground/[0.025]" aria-hidden="true" />
          <div className="relative z-10 mx-auto max-w-2xl">
            <span className="mx-auto mb-4 block size-3 rotate-45 border border-brand-gold/75 bg-brand-gold/15" aria-hidden="true" />
            <h2 className={`mx-auto text-[1.45rem] font-bold leading-tight text-primary-foreground md:text-[1.9rem] ${isLegal ? "max-w-[17rem] sm:max-w-2xl" : ""}`}>{title}</h2>
            <p className="mx-auto mt-3 max-w-xl text-[0.85rem] leading-relaxed text-primary-foreground/80 md:text-[0.95rem]">{text}</p>
            <div className="mt-6 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
              <CtaButton item={primary} className={styles[0]} />
              <CtaButton item={secondary} className={styles[1]} />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
