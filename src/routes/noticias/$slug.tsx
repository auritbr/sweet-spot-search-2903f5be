import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageHero, Section } from "@/components/PageHero";
import { news } from "@/data/site";

export const Route = createFileRoute("/noticias/$slug")({
  loader: ({ params }) => {
    const n = news.find((x) => x.slug === params.slug);
    if (!n) throw notFound();
    return { n };
  },
  head: ({ loaderData }) => {
    const n = loaderData?.n;
    return {
      meta: [
        { title: n ? `${n.title} — Cena Viva` : "Notícia" },
        { name: "description", content: n?.excerpt ?? "" },
        { property: "og:title", content: n?.title ?? "Notícia" },
        { property: "og:description", content: n?.excerpt ?? "" },
        ...(n ? [{ property: "og:image" as const, content: n.image }] : []),
      ],
      links: n ? [{ rel: "canonical", href: `/noticias/${n.slug}` }] : [],
    };
  },
  component: NewsDetail,
  notFoundComponent: () => (
    <div className="container-x py-32 text-center">
      <h1 className="font-display font-black text-3xl">Notícia não encontrada</h1>
      <Link to="/noticias" className="mt-6 inline-flex px-5 py-3 rounded-full bg-brand-red text-white font-semibold">Ver notícias</Link>
    </div>
  ),
});

// Demo gallery images per news item — a real backend would populate n.gallery
const demoGallery: Record<string, string[]> = {
  "mostra-de-encerramento-reune-comunidade": [
    "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1533158307587-828f0a76ef46?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1523207911345-32501502db22?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=1600&q=80",
  ],
  "novas-turmas-de-oficinas-abrem-inscricoes": [
    "https://images.unsplash.com/photo-1523207911345-32501502db22?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80",
  ],
  "parceria-com-universidades-amplia-formacao": [
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80",
  ],
  "circulacao-cultural-chega-a-novos-bairros": [
    "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1600&q=80",
  ],
};

function NewsDetail() {
  const { n } = Route.useLoaderData();
  const related = news.filter((x) => x.slug !== n.slug).slice(0, 3);
  const gallery = demoGallery[n.slug] ?? [];
  const [lb, setLb] = useState<number | null>(null);

  useEffect(() => {
    if (lb === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLb(null);
      if (e.key === "ArrowRight") setLb((v) => v === null ? v : (v + 1) % gallery.length);
      if (e.key === "ArrowLeft") setLb((v) => v === null ? v : (v - 1 + gallery.length) % gallery.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lb, gallery.length]);

  const [touchX, setTouchX] = useState<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => setTouchX(e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX == null || lb === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) setLb((v) => v === null ? v : (v + (dx < 0 ? 1 : -1) + gallery.length) % gallery.length);
    setTouchX(null);
  };

  return (
    <>
      <PageHero
        title={n.title}
        image={n.image}
        breadcrumb={[{ label: "Início", to: "/" }, { label: "Notícias", to: "/noticias" }, { label: n.category }]}
        accent="brand-orange"
      />
      <Section className="bg-white">
        <div className="container-x max-w-3xl">
          <div className="flex items-center gap-3 text-sm">
            <span className="px-3 py-1 rounded-full bg-brand-red text-white font-bold text-xs">{n.category}</span>
            <time className="text-brand-gray">{new Date(n.date).toLocaleDateString("pt-BR")}</time>
          </div>
          <p className="mt-6 text-xl text-brand-ink leading-relaxed">{n.excerpt}</p>
          <div className="mt-6 space-y-4 text-brand-gray text-lg leading-relaxed">
            <p>{n.body}</p>
            <p>A programação seguiu com momentos de fala aberta, apresentações artísticas e trocas entre educadores e público. As atividades reforçam o compromisso do Ponto de Cultura com a formação contínua e o diálogo com o território.</p>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="text-sm text-brand-gray">Compartilhar:</span>
            <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(n.title)}`} className="px-4 py-2 rounded-full border border-brand-ink/20 text-sm font-semibold">Twitter</a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=`} className="px-4 py-2 rounded-full border border-brand-ink/20 text-sm font-semibold">Facebook</a>
            <a href={`https://wa.me/?text=${encodeURIComponent(n.title)}`} className="px-4 py-2 rounded-full border border-brand-ink/20 text-sm font-semibold">WhatsApp</a>
          </div>
          <Link to="/noticias" className="mt-10 inline-flex px-5 py-3 rounded-full bg-brand-ink text-white font-semibold">← Voltar às notícias</Link>
        </div>
      </Section>

      {gallery.length > 0 && (
        <Section className="bg-white">
          <div className="container-x">
            <p className="uppercase tracking-[0.22em] text-brand-red text-xs mb-2" style={{ fontWeight: 600 }}>Galeria</p>
            <h2 className="text-brand-ink" style={{ fontSize: "clamp(1.5rem, 2.2vw, 2rem)", lineHeight: 1.15, fontWeight: 700 }}>Registros desta notícia</h2>
            <p className="mt-2 text-brand-gray text-sm">Imagens que acompanham a cobertura.</p>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
              {gallery.map((src, i) => (
                <button key={i} onClick={() => setLb(i)} className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-brand-soft">
                  <img src={src} alt={`Foto ${i + 1} — ${n.title}`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </button>
              ))}
            </div>
          </div>
        </Section>
      )}

      <Section className="bg-brand-soft">
        <div className="container-x">
          <h2 className="font-display font-black text-2xl text-brand-ink mb-6">Notícias relacionadas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link key={r.slug} to="/noticias/$slug" params={{ slug: r.slug }} className="block rounded-2xl overflow-hidden bg-white hover:shadow-lg transition">
                <img src={r.image} alt="" className="aspect-video w-full object-cover" loading="lazy" />
                <div className="p-5">
                  <p className="text-xs font-bold uppercase text-brand-red">{r.category}</p>
                  <h3 className="mt-2 font-display font-black text-brand-ink">{r.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {lb !== null && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <button aria-label="Fechar" onClick={() => setLb(null)} className="absolute top-4 right-4 text-white text-3xl">✕</button>
          <button aria-label="Anterior" onClick={() => setLb((v) => v === null ? v : (v - 1 + gallery.length) % gallery.length)} className="absolute left-4 md:left-8 text-white text-4xl">‹</button>
          <button aria-label="Próxima" onClick={() => setLb((v) => v === null ? v : (v + 1) % gallery.length)} className="absolute right-4 md:right-8 text-white text-4xl">›</button>
          <figure className="max-w-6xl w-full">
            <img src={gallery[lb]} alt="" className="w-full max-h-[80vh] object-contain rounded-2xl" />
            <figcaption className="mt-3 text-center text-white/80 text-sm">{n.title} — {lb + 1} de {gallery.length}</figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
