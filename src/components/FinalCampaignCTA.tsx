import { Link } from "@tanstack/react-router";
import { ArcThick, HatchedCircle, QuarterCircle, Triangle } from "@/components/Shapes";
import { Button } from "@/components/ui/button";

type FinalCampaignCTAProps = {
  eyebrow: string;
  title: string;
  text: string;
  primary: { label: string; to: string };
  secondary: { label: string; to: string };
  image: string;
  variant?: "left" | "center" | "right";
};

export function FinalCampaignCTA({ eyebrow, title, text, primary, secondary, image, variant = "left" }: FinalCampaignCTAProps) {
  const panelPosition = variant === "right" ? "md:ml-auto" : variant === "center" ? "md:mx-auto" : "md:mr-auto";

  return (
    <section className="relative isolate overflow-hidden py-12 md:py-20">
      <img src={image} alt="" loading="lazy" className="absolute inset-0 -z-30 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-20 bg-brand-petrol/70" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-petrol/65 via-brand-petrol/20 to-brand-petrol/55" />
      <div className="container-x relative">
        <div className={`relative max-w-4xl overflow-hidden bg-brand-petrol px-6 py-9 shadow-2xl sm:px-10 md:px-14 md:py-12 ${panelPosition}`}>
          <QuarterCircle corner={variant === "right" ? "tl" : "tr"} color="#08B9E6" className="pointer-events-none absolute top-0 w-24 opacity-25 md:w-32" />
          <HatchedCircle size={110} color="#FFB400" className="pointer-events-none absolute -bottom-10 right-8 opacity-15" />
          <Triangle color="#ED1C24" size={36} className="pointer-events-none absolute bottom-6 right-8 hidden opacity-80 sm:block" rotate={18} />
          <ArcThick color="#FFB400" className="pointer-events-none absolute -left-8 -top-9 w-24 opacity-45" from={200} to={340} />
          <div className="relative max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">{eyebrow}</p>
            <h2 className="mt-3 text-primary-foreground" style={{ fontSize: "clamp(1.75rem, 3.2vw, 3rem)", lineHeight: 1.1, fontWeight: 700 }}>{title}</h2>
            <p className="mt-5 max-w-xl leading-relaxed text-primary-foreground/80">{text}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild className="rounded-full bg-brand-gold px-6 font-bold text-brand-petrol shadow-none hover:bg-primary-foreground hover:text-brand-petrol"><Link to={primary.to}>{primary.label}</Link></Button>
              <Button asChild variant="outline" className="rounded-full border-primary-foreground/30 bg-background/10 px-6 font-semibold text-primary-foreground shadow-none backdrop-blur-sm hover:bg-background/20 hover:text-primary-foreground"><Link to={secondary.to}>{secondary.label}</Link></Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}