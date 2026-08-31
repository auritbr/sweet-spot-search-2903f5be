import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

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
export function LegalToc({ items, accent = "#00384C" }: { items: TocItem[]; accent?: string }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

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
    <ol className="space-y-1">
      {items.map((i, n) => {
        const isActive = active === i.id;
        return (
          <li key={i.id}>
            <a
              href={`#${i.id}`}
              onClick={() => setOpen(false)}
              aria-current={isActive ? "true" : undefined}
              className={`flex gap-2 rounded-lg px-3 py-2 text-sm hover:bg-brand-soft focus-visible:outline-2 focus-visible:outline-offset-2 ${isActive ? "bg-brand-soft text-brand-ink" : "text-brand-gray"}`}
              style={isActive ? { fontWeight: 600, boxShadow: `inset 3px 0 0 ${accent}` } : undefined}
            >
              <span className="tabular-nums opacity-60">{String(n + 1).padStart(2, "0")}</span>
              <span>{i.label}</span>
            </a>
          </li>
        );
      })}
    </ol>
  );

  return (
    <nav aria-label="Sumário desta página" className="lg:sticky lg:top-24">
      <div className="lg:hidden rounded-2xl border border-black/10 bg-white">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="legal-toc-mobile"
          className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left"
        >
          <span className="text-sm text-brand-ink" style={{ fontWeight: 600 }}>Sumário desta página</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-brand-ink shrink-0 motion-safe:transition-transform" style={{ transform: open ? "rotate(180deg)" : "none" }}><path d="M6 9l6 6 6-6" /></svg>
        </button>
        <div id="legal-toc-mobile" hidden={!open} className="px-2 pb-3">{list}</div>
      </div>

      <div className="hidden lg:block rounded-2xl border border-black/10 bg-white p-4">
        <p className="px-3 pb-2 text-xs uppercase tracking-[0.18em] text-brand-gray" style={{ fontWeight: 600 }}>Nesta página</p>
        {list}
      </div>
    </nav>
  );
}

export function LegalSection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 py-8 border-t border-black/5 first:border-t-0 first:pt-0">
      <h2 className="text-brand-ink" style={{ fontSize: "clamp(1.25rem, 1.8vw, 1.6rem)", lineHeight: 1.25, fontWeight: 700 }}>{title}</h2>
      <div className="mt-4 space-y-4 text-brand-gray" style={{ fontSize: "1rem", lineHeight: 1.7 }}>{children}</div>
    </section>
  );
}
