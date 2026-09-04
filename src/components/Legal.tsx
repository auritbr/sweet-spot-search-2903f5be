import { Link } from "@tanstack/react-router";
import { useEffect, useId, useState, type ReactNode } from "react";
import { ChevronDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export type Crumb = { label: string; to?: string; params?: Record<string, string> };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Você está aqui" className="text-xs text-brand-gray">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((c, i) => (
          <li key={c.label} className="flex items-center gap-1.5">
            {c.to ? (
              <Link to={c.to} className="underline underline-offset-2 hover:text-brand-red">
                {c.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-brand-ink" style={{ fontWeight: 600 }}>{c.label}</span>
            )}
            {i < items.length - 1 && <span aria-hidden="true">›</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export type TocItem = { id: string; label: string };

/** Sumário interno acessível: lista no desktop, accordion compacto no mobile. */
type LegalTone = "privacy" | "terms";

const toneStyles: Record<LegalTone, { active: string; number: string; divider: string }> = {
  privacy: {
    active: "border-brand-cyan bg-brand-cyan/5 text-brand-ink",
    number: "text-brand-cyan",
    divider: "bg-brand-cyan",
  },
  terms: {
    active: "border-brand-gold bg-brand-gold/5 text-brand-ink",
    number: "text-brand-red",
    divider: "bg-brand-gold",
  },
};

export function LegalToc({ items, tone }: { items: TocItem[]; tone: LegalTone }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const mobileId = useId();
  const styles = toneStyles[tone];

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 },
    );
    items.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [items]);

  const list = (
    <ol className="space-y-0.5">
      {items.map((i, n) => {
        const isActive = active === i.id;
        return (
          <li key={i.id}>
            <a
              href={`#${i.id}`}
              onClick={() => setOpen(false)}
              aria-current={isActive ? "true" : undefined}
              className={`grid grid-cols-[1.75rem_minmax(0,1fr)] border-l-2 px-3 py-2 text-[13px] leading-snug transition-colors hover:bg-brand-soft/70 hover:text-brand-ink ${isActive ? styles.active : "border-transparent text-brand-gray"}`}
            >
              <span className={`tabular-nums ${isActive ? styles.number : "text-brand-gray/60"}`}>{String(n + 1).padStart(2, "0")}</span>
              <span>{i.label}</span>
            </a>
          </li>
        );
      })}
    </ol>
  );

  return (
    <nav aria-label="Sumário desta página" className="lg:sticky lg:top-24">
      <div className="rounded-lg border border-brand-petrol/10 bg-brand-soft/60 lg:hidden">
        <Button
          variant="ghost"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={mobileId}
          className="h-12 w-full justify-between rounded-lg px-4 text-left hover:bg-brand-soft"
        >
          <span className="text-sm font-semibold text-brand-ink">Nesta página</span>
          <ChevronDown className={`size-4 shrink-0 text-brand-ink transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
        </Button>
        <div id={mobileId} hidden={!open} className="border-t border-brand-petrol/10 px-2 py-3">{list}</div>
      </div>

      <div className="hidden border-l border-brand-petrol/10 py-2 lg:block lg:max-h-[calc(100vh-9rem)] lg:overflow-y-auto">
        <p className="mb-3 px-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-gray">Nesta página</p>
        {list}
      </div>

    </nav>
  );
}

export function LegalSection({ id, title, number, tone, children }: { id: string; title: string; number: number; tone: LegalTone; children: ReactNode }) {
  const styles = toneStyles[tone];
  return (
    <section id={id} className="scroll-mt-28 py-9 first:pt-0 md:py-12">
      {number > 1 && <div className="mb-9 flex items-center gap-3" aria-hidden="true"><span className={`size-1.5 rotate-45 ${styles.divider}`} /><span className="h-px w-16 bg-brand-petrol/12" /></div>}
      <p className={`mb-2 text-[11px] font-semibold tabular-nums tracking-[0.14em] ${styles.number}`}>{String(number).padStart(2, "0")}</p>
      <h2 className="max-w-2xl text-[1.45rem] font-bold leading-[1.25] text-brand-ink md:text-[1.7rem]">{title}</h2>
      <div className="mt-5 space-y-5 text-[0.98rem] leading-[1.85] text-brand-gray md:text-base [&_a:not([class])]:font-semibold [&_a:not([class])]:text-brand-ink [&_a:not([class])]:underline [&_a:not([class])]:decoration-brand-cyan [&_a:not([class])]:underline-offset-4 [&_h3]:pt-2 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-brand-ink [&_li]:pl-1 [&_strong]:font-semibold [&_strong]:text-brand-ink [&_ul]:list-disc [&_ul]:space-y-2.5 [&_ul]:pl-6">{children}</div>
    </section>
  );
}

export function LegalIntro({ eyebrow, title, text, updated, tone }: { eyebrow: string; title: string; text: string; updated: string | null; tone: LegalTone }) {
  const privacy = tone === "privacy";
  return (
    <section className="relative overflow-hidden border-b border-brand-petrol/8 bg-background py-12 md:py-16">
      <div className="container-x relative">
        <div className="max-w-3xl">
          <p className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${privacy ? "text-brand-cyan" : "text-brand-red"}`}>{eyebrow}</p>
          <h2 className="mt-3 max-w-2xl text-[1.65rem] font-bold leading-[1.2] text-brand-ink md:text-[2.15rem]">{title}</h2>
          <p className="mt-5 max-w-2xl text-[0.98rem] leading-[1.8] text-brand-gray md:text-base">{text}</p>
          <p className="mt-6 text-xs text-brand-gray"><span className="font-semibold text-brand-ink">Última atualização:</span> {updated ?? "a definir pela Associação."}</p>
        </div>
        <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 md:block" aria-hidden="true">
          {privacy ? <><span className="block h-20 w-20 rounded-full border-[10px] border-brand-cyan/15" /><span className="absolute -bottom-2 -left-8 size-4 rotate-45 border border-brand-petrol/30" /></> : <><span className="block size-20 rotate-12 border border-brand-gold/45" /><span className="absolute -bottom-3 -left-7 h-px w-16 bg-brand-red/50" /></>}
        </div>
      </div>
    </section>
  );
}

export function LegalContact({ tone }: { tone: LegalTone }) {
  return (
    <aside className={`mb-8 mt-4 border-l-2 px-5 py-5 md:px-6 ${tone === "privacy" ? "border-brand-cyan bg-brand-cyan/5" : "border-brand-gold bg-brand-gold/5"}`} aria-labelledby={`${tone}-contact-title`}>
      <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
        <div className="min-w-0">
          <p id={`${tone}-contact-title`} className="font-display text-lg font-semibold text-brand-ink">Ficou com alguma dúvida?</p>
          <p className="mt-1 text-sm leading-relaxed text-brand-gray">Entre em contato com a Associação Maggu para esclarecimentos relacionados a esta página.</p>
          <a href="mailto:comunicacaomktmaggu@gmail.com" className="mt-2 block break-all text-sm font-semibold text-brand-ink underline decoration-brand-cyan underline-offset-4">comunicacaomktmaggu@gmail.com</a>
        </div>
        <Button asChild size="sm" className="w-fit rounded-full bg-brand-petrol px-4 text-primary-foreground hover:bg-brand-petrol/90">
          <Link to="/contato"><Mail aria-hidden="true" />Entre em contato</Link>
        </Button>
      </div>
    </aside>
  );
}
