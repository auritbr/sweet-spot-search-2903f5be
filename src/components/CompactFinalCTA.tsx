import { Link } from "@tanstack/react-router";
import { ArcThick, HatchedCircle, QuarterCircle, Triangle } from "@/components/Shapes";
import { Button } from "@/components/ui/button";

type CtaLink = {
  label: string;
  to: "/ecossistema" | "/transparencia" | "/projetos" | "/contato" | "/agenda";
};

type CompactFinalCTAProps = {
  title: string;
  text: string;
  primary: CtaLink;
  secondary: CtaLink;
  variant: "continuity" | "agenda" | "projects" | "ecosystem";
};

const buttonStyles = {
  continuity: [
    "border-brand-petrol/15 bg-brand-cyan/85 text-brand-petrol hover:bg-brand-cyan",
    "border-primary-foreground/20 bg-brand-red/85 text-primary-foreground hover:bg-brand-red",
  ],
  agenda: [
    "border-brand-petrol/15 bg-brand-gold/90 text-brand-petrol hover:bg-brand-gold",
    "border-primary-foreground/20 bg-brand-red/85 text-primary-foreground hover:bg-brand-red",
  ],
  projects: [
    "border-brand-petrol/15 bg-brand-cyan/85 text-brand-petrol hover:bg-brand-cyan",
    "border-primary-foreground/20 bg-brand-gold/90 text-brand-petrol hover:bg-brand-gold",
  ],
  ecosystem: [
    "border-brand-petrol/15 bg-brand-gold/90 text-brand-petrol hover:bg-brand-gold",
    "border-primary-foreground/20 bg-brand-cyan/85 text-brand-petrol hover:bg-brand-cyan",
  ],
} as const;

function Decorations({ variant }: { variant: CompactFinalCTAProps["variant"] }) {
  if (variant === "continuity") {
    return (
      <>
        <ArcThick color="#08B9E6" className="pointer-events-none absolute -left-10 -top-12 w-28 opacity-25 md:left-5 md:w-36" from={195} to={325} />
        <span className="pointer-events-none absolute right-9 top-8 size-3 rotate-45 bg-brand-gold md:right-14" aria-hidden="true" />
        <span className="pointer-events-none absolute bottom-8 right-12 hidden h-1.5 w-12 rounded-full bg-brand-red/85 md:block" aria-hidden="true" />
      </>
    );
  }

  if (variant === "agenda") {
    return (
      <>
        <QuarterCircle corner="tl" color="#ED1C24" className="pointer-events-none absolute left-0 top-0 w-16 opacity-75 md:w-24" />
        <div className="pointer-events-none absolute bottom-8 right-9 hidden items-center gap-2 md:flex" aria-hidden="true">
          <span className="size-2 rounded-full bg-brand-cyan" />
          <span className="size-2 rounded-full bg-brand-gold" />
          <span className="size-2 rounded-full bg-brand-red" />
        </div>
      </>
    );
  }

  if (variant === "projects") {
    return (
      <>
        <Triangle color="#FFB400" size={40} className="pointer-events-none absolute left-7 top-7 opacity-85 md:left-12" rotate={16} />
        <HatchedCircle size={92} color="#08B9E6" className="pointer-events-none absolute -bottom-10 -right-8 opacity-20 md:right-5" />
        <span className="pointer-events-none absolute right-10 top-9 hidden h-px w-14 bg-brand-red/80 md:block" aria-hidden="true" />
      </>
    );
  }

  return (
    <>
      <ArcThick color="#FFB400" className="pointer-events-none absolute -right-9 -top-12 w-28 opacity-35 md:right-5 md:w-36" from={190} to={320} />
      <span className="pointer-events-none absolute bottom-8 left-8 size-3 rotate-45 border-2 border-brand-cyan md:left-12" aria-hidden="true" />
      <span className="pointer-events-none absolute left-14 top-9 hidden size-3 rounded-full bg-brand-red md:block" aria-hidden="true" />
    </>
  );
}

export function CompactFinalCTA({ title, text, primary, secondary, variant }: CompactFinalCTAProps) {
  const centered = variant === "agenda" || variant === "projects";
  const styles = buttonStyles[variant];

  return (
    <section className="bg-white px-4 pb-4 pt-2 md:pb-6 md:pt-4">
      <div className="container-x">
        <div className={`relative mx-auto flex min-h-[300px] max-w-5xl items-center overflow-hidden rounded-2xl bg-brand-petrol px-6 py-10 md:px-12 ${centered ? "justify-center text-center" : ""}`}>
          <Decorations variant={variant} />
          <div className={`relative max-w-3xl ${centered ? "mx-auto" : ""}`}>
            <h2 className="text-[1.65rem] font-bold leading-tight text-primary-foreground md:text-[2.15rem]">{title}</h2>
            <p className={`mt-4 max-w-2xl text-sm leading-relaxed text-primary-foreground/80 md:text-base ${centered ? "mx-auto" : ""}`}>{text}</p>
            <div className={`mt-6 flex flex-col gap-3 sm:flex-row ${centered ? "items-center justify-center" : "items-start"}`}>
              {[primary, secondary].map((item, index) => (
                <Button key={item.label} asChild size="sm" className={`rounded-full border px-5 font-semibold shadow-sm backdrop-blur-md ${styles[index]}`}>
                  <Link to={item.to}>{item.label}</Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}