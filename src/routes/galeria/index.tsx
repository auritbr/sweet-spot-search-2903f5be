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

function Galeria() {
  const years = useMemo(() => Array.from(new Set(albums.map((a) => a.year))).sort((a, b) => b - a), []);
  const [year, setYear] = useState<number>(years[0]);
  const [activeAlbum, setActiveAlbum] = useState<Album | null>(null);
  const [photoIdx, setPhotoIdx] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const list = albums.filter((a) => a.year === year);

  const openAlbum = (a: Album) => { setActiveAlbum(a); setPhotoIdx(0); };
  const closeAlbum = () => { setActiveAlbum(null); setLightbox(false); };

  useEffect(() => {
    if (!activeAlbum) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { if (lightbox) setLightbox(false); else closeAlbum(); }
      if (e.key === "ArrowRight") setPhotoIdx((v) => (v + 1) % activeAlbum.photos.length);
      if (e.key === "ArrowLeft") setPhotoIdx((v) => (v - 1 + activeAlbum.photos.length) % activeAlbum.photos.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeAlbum, lightbox]);

  // touch swipe on lightbox / main image
  const [touchX, setTouchX] = useState<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => setTouchX(e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX == null || !activeAlbum) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) setPhotoIdx((v) => (v + (dx < 0 ? 1 : -1) + activeAlbum.photos.length) % activeAlbum.photos.length);
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
              <p className="uppercase tracking-[0.22em] text-brand-red text-xs" style={{ fontWeight: 600 }}>Álbuns</p>
              <BrushStroke color="#FFB400" className="mt-3 w-24" />
            </div>
            {/* Desktop tabs */}
            <div role="tablist" aria-label="Selecionar ano" className="hidden md:flex gap-2 flex-wrap">
              {years.map((y) => {
                const active = y === year;
                return (
                  <button key={y} role="tab" aria-selected={active} onClick={() => { setYear(y); closeAlbum(); }}
                    className={`px-4 py-2 rounded-full text-sm transition ${active ? "bg-brand-red text-white shadow" : "bg-brand-soft text-brand-ink hover:bg-brand-gold/30"}`}
                    style={{ fontWeight: 600 }}>{y}</button>
                );
              })}
            </div>
            {/* Mobile: horizontal scroll of chips */}
            <div className="md:hidden w-full -mx-1 overflow-x-auto">
              <div role="tablist" aria-label="Selecionar ano" className="flex gap-2 px-1 pb-1 min-w-max">
                <label htmlFor="year-select" className="sr-only">Selecione o ano</label>
                {years.map((y) => {
                  const active = y === year;
                  return (
                    <button key={y} id={y === years[0] ? "year-select" : undefined} role="tab" aria-selected={active} onClick={() => { setYear(y); closeAlbum(); }}
                      className={`shrink-0 px-4 py-2 rounded-full text-sm transition ${active ? "bg-brand-red text-white" : "bg-brand-soft text-brand-ink"}`}
                      style={{ fontWeight: 600 }}>{y}</button>
                  );
                })}
              </div>
            </div>
          </div>


          {/* Album area: transforms into gallery viewer */}
          {!activeAlbum ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {list.map((a) => (
                <button key={a.slug} onClick={() => openAlbum(a)} className="group text-left rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition border border-black/5">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={a.cover} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <p className="uppercase text-xs tracking-widest text-brand-red" style={{ fontWeight: 600 }}>{a.year} · {a.count} fotos</p>
                    <h3 className="mt-1 text-brand-ink" style={{ fontSize: "clamp(1.05rem, 1.4vw, 1.25rem)", lineHeight: 1.25, fontWeight: 600 }}>{a.title}</h3>
                    <p className="mt-2 text-sm text-brand-gray">{a.description}</p>
                    <span className="mt-4 inline-block text-brand-red text-xs uppercase tracking-widest" style={{ fontWeight: 600 }}>Abrir galeria →</span>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div>
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <p className="uppercase text-xs tracking-widest text-brand-red" style={{ fontWeight: 600 }}>{activeAlbum.year} · {activeAlbum.photos.length} fotos</p>
                  <h3 className="text-brand-ink mt-1" style={{ fontSize: "clamp(1.4rem, 2vw, 2rem)", fontWeight: 700 }}>{activeAlbum.title}</h3>
                  <p className="text-brand-gray text-sm max-w-xl mt-1">{activeAlbum.description}</p>
                </div>
                <button onClick={closeAlbum} className="px-5 py-2.5 rounded-full bg-brand-ink text-white text-sm" style={{ fontWeight: 600 }}>← Voltar aos álbuns</button>
              </div>

              <div className="relative rounded-3xl overflow-hidden bg-black" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
                <button onClick={() => setLightbox(true)} className="block w-full">
                  <img src={activeAlbum.photos[photoIdx]} alt={`Foto ${photoIdx + 1}`} className="w-full max-h-[70vh] object-contain bg-black" />
                </button>
                <button aria-label="Anterior" onClick={() => setPhotoIdx((v) => (v - 1 + activeAlbum.photos.length) % activeAlbum.photos.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/80 hover:bg-white text-brand-ink text-2xl flex items-center justify-center">‹</button>
                <button aria-label="Próxima" onClick={() => setPhotoIdx((v) => (v + 1) % activeAlbum.photos.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/80 hover:bg-white text-brand-ink text-2xl flex items-center justify-center">›</button>
                <span className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/60 text-white text-xs">{photoIdx + 1} / {activeAlbum.photos.length}</span>
              </div>

              <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
                {activeAlbum.photos.map((src, idx) => (
                  <button key={idx} onClick={() => setPhotoIdx(idx)}
                    className={`shrink-0 w-24 h-24 rounded-xl overflow-hidden border-2 transition ${idx === photoIdx ? "border-brand-red" : "border-transparent opacity-70 hover:opacity-100"}`}>
                    <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </Section>

      {/* Lightbox */}
      {activeAlbum && lightbox && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <button aria-label="Fechar" onClick={() => setLightbox(false)} className="absolute top-4 right-4 text-white text-3xl">✕</button>
          <button aria-label="Anterior" onClick={() => setPhotoIdx((v) => (v - 1 + activeAlbum.photos.length) % activeAlbum.photos.length)} className="absolute left-4 md:left-8 text-white text-4xl">‹</button>
          <button aria-label="Próxima" onClick={() => setPhotoIdx((v) => (v + 1) % activeAlbum.photos.length)} className="absolute right-4 md:right-8 text-white text-4xl">›</button>
          <figure className="max-w-6xl w-full">
            <img src={activeAlbum.photos[photoIdx]} alt="" className="w-full max-h-[80vh] object-contain rounded-2xl" />
            <figcaption className="mt-3 text-center text-white/80 text-sm">{activeAlbum.title} — {photoIdx + 1} de {activeAlbum.photos.length}</figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
