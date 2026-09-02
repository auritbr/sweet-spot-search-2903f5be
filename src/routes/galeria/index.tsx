import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { PageHero, Section } from "@/components/PageHero";
import { BrushStroke, HatchedCircle, Triangle } from "@/components/Shapes";
import { albums } from "@/data/site";

export const Route = createFileRoute("/galeria/")({
  head: () => ({
    meta: [
      { title: "Galeria — Cena Viva" },
      { name: "description", content: "Fotografias das oficinas, apresentações e encontros do Ponto de Cultura Cena Viva." },
      { property: "og:title", content: "Galeria — Cena Viva" },
      { property: "og:description", content: "Registros das nossas atividades." },
      { property: "og:url", content: "/galeria" },
    ],
    links: [{ rel: "canonical", href: "/galeria" }],
  }),
  component: Galeria,
});

type Album = (typeof albums)[number];
type OpenPhoto = { record: Album; index: number };

function Galeria() {
  const years = useMemo(() => Array.from(new Set(albums.map((a) => a.year))).sort((a, b) => b - a), []);
  const [year, setYear] = useState<number>(years[0]);
  const [openPhoto, setOpenPhoto] = useState<OpenPhoto | null>(null);

  const list = albums.filter((a) => a.year === year);

  useEffect(() => {
    if (!openPhoto) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenPhoto(null);
      if (e.key === "ArrowRight") setOpenPhoto((current) => current ? { ...current, index: (current.index + 1) % current.record.photos.length } : null);
      if (e.key === "ArrowLeft") setOpenPhoto((current) => current ? { ...current, index: (current.index - 1 + current.record.photos.length) % current.record.photos.length } : null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openPhoto]);

  const [touchX, setTouchX] = useState<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => setTouchX(e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX == null || !openPhoto) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) {
      setOpenPhoto((current) => current ? {
        ...current,
        index: (current.index + (dx < 0 ? 1 : -1) + current.record.photos.length) % current.record.photos.length,
      } : null);
    }
    setTouchX(null);
  };

  return (
    <>
      <PageHero
        title="Galeria"
        image="https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1920&q=80"
        breadcrumb={[{ label: "Início", to: "/" }, { label: "Galeria" }]}
        accent="cyan"
        brush="#FFB400"
      />

      <Section className="bg-white relative overflow-hidden">
        <HatchedCircle size={120} color="#08B9E6" className="absolute -top-8 -right-8 opacity-40" />
        <Triangle color="#FFB400" size={60} className="absolute -top-4 -left-4 opacity-80" rotate={20} />

        <div className="container-x">
          {/* Year selector */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <p className="uppercase tracking-[0.22em] text-brand-red text-xs" style={{ fontWeight: 600 }}>Registros</p>
              <BrushStroke color="#FFB400" className="mt-3 w-24" />
            </div>
            {/* Desktop tabs */}
            <div role="tablist" aria-label="Selecionar ano" className="hidden md:flex gap-2 flex-wrap">
              {years.map((y) => {
                const active = y === year;
                return (
                  <button key={y} role="tab" aria-selected={active} onClick={() => { setYear(y); setOpenPhoto(null); }}
                    className={`px-4 py-2 rounded-full text-sm transition ${active ? "bg-brand-red text-white shadow" : "bg-brand-soft text-brand-ink hover:bg-brand-gold/30"}`}
                    style={{ fontWeight: 600 }}>{y}</button>
                );
              })}
            </div>
            {/* Mobile: horizontal scroll of chips */}
            <div className="md:hidden w-full -mx-1 overflow-x-auto">
              <div role="tablist" aria-label="Selecionar ano" className="flex gap-2 px-1 pb-1 min-w-max">
                <span className="sr-only">Ano</span>
                {years.map((y) => {
                  const active = y === year;
                  return (
                    <button key={y} id={y === years[0] ? "year-select" : undefined} role="tab" aria-selected={active} onClick={() => { setYear(y); setOpenPhoto(null); }}
                      className={`shrink-0 px-4 py-2 rounded-full text-sm transition ${active ? "bg-brand-red text-white" : "bg-brand-soft text-brand-ink"}`}
                      style={{ fontWeight: 600 }}>{y}</button>
                  );
                })}
              </div>
            </div>
          </div>


          <div className="space-y-14 md:space-y-20">
            {list.map((record) => (
              <section key={record.slug} aria-labelledby={`record-${record.slug}`}>
                <div className="mb-6 md:mb-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">Registro</p>
                  <div className="mt-2">
                    <div>
                      <h2 id={`record-${record.slug}`} className="max-w-3xl text-brand-ink" style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)", lineHeight: 1.12, fontWeight: 700 }}>
                        {record.title}
                      </h2>
                      <span className="mt-4 flex items-center gap-2" aria-hidden="true">
                        <span className="size-2 rotate-45 border border-brand-cyan" />
                        <span className="h-px w-12 bg-brand-red/70" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
                  {record.photos.map((src, index) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setOpenPhoto({ record, index })}
                      className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-brand-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
                      aria-label={`Ampliar foto ${index + 1} de ${record.title}`}
                    >
                      <img src={src} alt={`Foto ${index + 1} — ${record.title}`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                    </button>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </Section>

      {/* Lightbox */}
      {openPhoto && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <button aria-label="Fechar" onClick={() => setOpenPhoto(null)} className="absolute top-4 right-4 text-white text-3xl">✕</button>
          {openPhoto.record.photos.length > 1 && (
            <>
              <button aria-label="Anterior" onClick={() => setOpenPhoto((current) => current ? { ...current, index: (current.index - 1 + current.record.photos.length) % current.record.photos.length } : null)} className="absolute left-4 md:left-8 text-white text-4xl">‹</button>
              <button aria-label="Próxima" onClick={() => setOpenPhoto((current) => current ? { ...current, index: (current.index + 1) % current.record.photos.length } : null)} className="absolute right-4 md:right-8 text-white text-4xl">›</button>
            </>
          )}
          <figure className="max-w-6xl w-full">
            <img src={openPhoto.record.photos[openPhoto.index]} alt={`Foto ${openPhoto.index + 1} — ${openPhoto.record.title}`} className="w-full max-h-[80vh] object-contain rounded-2xl" />
            <figcaption className="mt-3 text-center text-white/80 text-sm">{openPhoto.record.title} — {openPhoto.index + 1} de {openPhoto.record.photos.length}</figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
