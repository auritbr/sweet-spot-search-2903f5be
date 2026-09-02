import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, CalendarDays, Check, Facebook, Instagram, Link2, Linkedin, MessageCircle } from "lucide-react";
import { Section } from "@/components/PageHero";
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
        { property: "og:type", content: "article" },
        { property: "og:url", content: n ? `/noticias/${n.slug}` : "/noticias" },
        { name: "twitter:card", content: "summary_large_image" },
        ...(n ? [{ property: "og:image" as const, content: n.image }] : []),
        ...(n ? [{ name: "twitter:image" as const, content: n.image }] : []),
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
  const [copyFeedback, setCopyFeedback] = useState<"link" | "instagram" | null>(null);

  const formattedDate = new Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${n.date}T12:00:00`));

  const currentUrl = () => window.location.href;
  const openShare = (url: string) => window.open(url, "_blank", "noopener,noreferrer,width=720,height=640");
  const copyCurrentLink = async (target: "link" | "instagram") => {
    const url = currentUrl();
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(url);
    } else {
      const input = document.createElement("textarea");
      input.value = url;
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      input.remove();
    }
    setCopyFeedback(target);
    window.setTimeout(() => setCopyFeedback(null), 2600);
  };

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
      <section className="relative isolate flex min-h-[520px] items-end overflow-hidden md:min-h-[620px]">
        <img src={n.image} alt="" loading="eager" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-brand-ink/75" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-ink/90 via-brand-ink/35 to-brand-ink/50" />
        <div className="container-x w-full pb-14 pt-32 md:pb-20 md:pt-40">
          <Link to="/noticias" className="group inline-flex items-center gap-2 text-sm font-medium text-white/85 transition hover:text-brand-gold">
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
            Voltar para Notícias
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-brand-red px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white">{n.category}</span>
            <time dateTime={n.date} className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur-md">
              <CalendarDays className="size-3.5" aria-hidden="true" />
              {formattedDate}
            </time>
          </div>
          <h1 className="mt-5 max-w-5xl text-white" style={{ fontSize: "clamp(2.1rem, 5.4vw, 4.8rem)", lineHeight: 1.04, fontWeight: 700, textShadow: "0 3px 18px rgba(0,0,0,.28)" }}>
            {n.title}
          </h1>
          {n.excerpt && <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">{n.excerpt}</p>}
        </div>
      </section>

      <Section className="bg-white">
        <div className="container-x max-w-3xl">
          <div className="space-y-5 text-[15px] text-brand-gray md:text-base" style={{ lineHeight: 1.8 }}>
            <p>{n.body}</p>
            <p>A programação seguiu com momentos de fala aberta, apresentações artísticas e trocas entre educadores e público. As atividades reforçam o compromisso do Ponto de Cultura com a formação contínua e o diálogo com o território.</p>
          </div>
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

      <Section className="bg-white">
        <div className="container-x max-w-5xl border-t border-brand-ink/10 pt-10 md:pt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">Compartilhamento</p>
          <h2 className="mt-2 text-2xl font-bold text-brand-ink md:text-3xl">Compartilhe esta notícia</h2>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
            <button type="button" onClick={() => openShare(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl())}`)} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-brand-ink/15 bg-white/55 px-4 py-2.5 text-sm font-semibold text-brand-ink shadow-sm backdrop-blur-md transition hover:border-brand-red/40 hover:bg-brand-red/10 hover:text-brand-ink">
              <Facebook className="size-4" aria-hidden="true" /> Facebook
            </button>
            <button type="button" onClick={() => void copyCurrentLink("instagram")} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-brand-ink/15 bg-white/55 px-4 py-2.5 text-sm font-semibold text-brand-ink shadow-sm backdrop-blur-md transition hover:border-brand-red/40 hover:bg-brand-red/10 hover:text-brand-ink">
              <Instagram className="size-4" aria-hidden="true" /> Instagram
            </button>
            <button type="button" onClick={() => openShare(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl())}`)} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-brand-ink/15 bg-white/55 px-4 py-2.5 text-sm font-semibold text-brand-ink shadow-sm backdrop-blur-md transition hover:border-brand-red/40 hover:bg-brand-red/10 hover:text-brand-ink">
              <Linkedin className="size-4" aria-hidden="true" /> LinkedIn
            </button>
            <button type="button" onClick={() => openShare(`https://wa.me/?text=${encodeURIComponent(`${n.title} — ${currentUrl()}`)}`)} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-brand-ink/15 bg-white/55 px-4 py-2.5 text-sm font-semibold text-brand-ink shadow-sm backdrop-blur-md transition hover:border-brand-red/40 hover:bg-brand-red/10 hover:text-brand-ink">
              <MessageCircle className="size-4" aria-hidden="true" /> WhatsApp
            </button>
            <button type="button" onClick={() => void copyCurrentLink("link")} className="col-span-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-brand-ink/15 bg-white/55 px-4 py-2.5 text-sm font-semibold text-brand-ink shadow-sm backdrop-blur-md transition hover:border-brand-red/40 hover:bg-brand-red/10 hover:text-brand-ink sm:col-span-1">
              {copyFeedback === "link" ? <Check className="size-4" aria-hidden="true" /> : <Link2 className="size-4" aria-hidden="true" />}
              {copyFeedback === "link" ? "Link copiado" : "Copiar link"}
            </button>
          </div>
          <p className="mt-3 min-h-5 text-sm text-brand-gray" aria-live="polite">
            {copyFeedback === "instagram" ? "Link copiado para compartilhar no Instagram." : ""}
          </p>
        </div>
      </Section>

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
