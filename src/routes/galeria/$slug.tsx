import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageHero, Section } from "@/components/PageHero";
import { albums } from "@/data/site";

export const Route = createFileRoute("/galeria/$slug")({
  loader: ({ params }) => {
    const a = albums.find((x) => x.slug === params.slug);
    if (!a) throw notFound();
    return { a };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.a;
    return {
      meta: [
        { title: a ? `${a.title} (${a.year}) — Cena Viva` : "Álbum" },
        { name: "description", content: a?.description ?? "" },
        { property: "og:title", content: a?.title ?? "Álbum" },
        ...(a ? [{ property: "og:image" as const, content: a.cover }] : []),
      ],
      links: a ? [{ rel: "canonical", href: `/galeria/${a.slug}` }] : [],
    };
  },
  component: AlbumDetail,
  notFoundComponent: () => (
    <div className="container-x py-32 text-center">
      <h1 className="font-display font-black text-3xl">Álbum não encontrado</h1>
      <Link to="/galeria" className="mt-6 inline-flex px-5 py-3 rounded-full bg-brand-red text-white font-semibold">Ver galeria</Link>
    </div>
  ),
});

function AlbumDetail() {
  const { a } = Route.useLoaderData();
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((v) => (v === null ? v : (v + 1) % a.photos.length));
      if (e.key === "ArrowLeft") setOpen((v) => (v === null ? v : (v - 1 + a.photos.length) % a.photos.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, a.photos.length]);

  return (
    <>
      <PageHero
        title={a.title}
        eyebrow={`Registro · ${a.year}`}
        subtitle={a.description}
        image={a.cover}
        breadcrumb={[{ label: "Início", to: "/" }, { label: "Galeria", to: "/galeria" }, { label: String(a.year) }, { label: a.title }]}
        accent="brand-gold"
        variant="detail"
      />
      <Section className="bg-white">
        <div className="container-x">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {a.photos.map((src: string, idx: number) => (
              <button key={idx} onClick={() => setOpen(idx)} className="group relative aspect-square overflow-hidden rounded-2xl">
                <img src={src} alt={`Foto ${idx + 1} de ${a.title}`} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
              </button>
            ))}
          </div>
          <Link to="/galeria" className="mt-10 inline-flex px-5 py-3 rounded-full bg-brand-ink text-white font-semibold">← Voltar à galeria</Link>
        </div>
      </Section>

      {open !== null && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button aria-label="Fechar" onClick={() => setOpen(null)} className="absolute top-4 right-4 text-white text-3xl">✕</button>
          <button aria-label="Anterior" onClick={() => setOpen((v) => v === null ? v : (v - 1 + a.photos.length) % a.photos.length)} className="absolute left-4 md:left-8 text-white text-4xl">‹</button>
          <button aria-label="Próxima" onClick={() => setOpen((v) => v === null ? v : (v + 1) % a.photos.length)} className="absolute right-4 md:right-8 text-white text-4xl">›</button>
          <figure className="max-w-6xl w-full">
            <img src={a.photos[open]} alt={`Foto ${open + 1} de ${a.title}`} className="w-full max-h-[80vh] object-contain rounded-2xl" />
            <figcaption className="mt-3 text-center text-white/80 text-sm">
              {a.title} — {open + 1} de {a.photos.length}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
