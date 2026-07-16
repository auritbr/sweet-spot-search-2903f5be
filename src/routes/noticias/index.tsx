import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { PageHero, Section } from "@/components/PageHero";
import { BrushStroke } from "@/components/Shapes";
import { news } from "@/data/site";

export const Route = createFileRoute("/noticias/")({
  head: () => ({
    meta: [
      { title: "Notícias — Cena Viva" },
      { name: "description", content: "Últimas notícias, oficinas, espetáculos e ações culturais do Ponto de Cultura Cena Viva." },
      { property: "og:title", content: "Notícias — Cena Viva" },
      { property: "og:description", content: "Últimas notícias do Ponto de Cultura." },
      { property: "og:url", content: "/noticias" },
    ],
    links: [{ rel: "canonical", href: "/noticias" }],
  }),
  component: Noticias,
});

const catColors: Record<string, string> = {
  "Apresentações": "#ED1C24",
  "Oficinas": "#08B9E6",
  "Parcerias": "#FFB400",
  "Comunidade": "#FF7A00",
  "Formação": "#B8DC4B",
  "Institucional": "#00384C",
};

const PAGE_SIZE = 9;

function Noticias() {
  const categories = useMemo(() => ["Todas", ...Array.from(new Set(news.map((n) => n.category)))], []);
  const years = useMemo(() => ["Todos", ...Array.from(new Set(news.map((n) => new Date(n.date).getFullYear()))).sort((a, b) => Number(b) - Number(a)).map(String)], []);
  const [cat, setCat] = useState("Todas");
  const [year, setYear] = useState("Todos");
  const [page, setPage] = useState(1);

  const filtered = news.filter((n) => (cat === "Todas" || n.category === cat) && (year === "Todos" || String(new Date(n.date).getFullYear()) === year));
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <>
      <PageHero
        title="Notícias"
        subtitle="Acompanhe as ações, encontros e novidades do Ponto de Cultura."
        image="https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1920&q=80"
        breadcrumb={[{ label: "Início", to: "/" }, { label: "Notícias" }]}
        accent="gold"
        brush="#08B9E6"
      />

      <Section className="bg-white">
        <div className="container-x">
          <div className="flex flex-wrap gap-4 items-center mb-8">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs uppercase tracking-widest text-brand-gray" style={{ fontWeight: 600 }}>Ano:</span>
              {years.map((y) => (
                <button key={y} onClick={() => { setYear(y); setPage(1); }} className={`px-3 py-1.5 rounded-full text-xs ${year === y ? "bg-brand-ink text-white" : "bg-brand-soft text-brand-ink hover:bg-brand-gold/30"}`} style={{ fontWeight: 600 }}>{y}</button>
              ))}
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs uppercase tracking-widest text-brand-gray" style={{ fontWeight: 600 }}>Categoria:</span>
              {categories.map((c) => (
                <button key={c} onClick={() => { setCat(c); setPage(1); }} className={`px-3 py-1.5 rounded-full text-xs ${cat === c ? "bg-brand-red text-white" : "bg-brand-soft text-brand-ink hover:bg-brand-gold/30"}`} style={{ fontWeight: 600 }}>{c}</button>
              ))}
            </div>
          </div>

          {paged.length === 0 ? (
            <p className="text-brand-gray py-10 text-center">Nenhuma notícia encontrada.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paged.map((n) => (
                <article key={n.slug} className="group bg-white rounded-2xl overflow-hidden border border-black/5 hover:shadow-lg transition flex flex-col">
                  <div className="aspect-video overflow-hidden">
                    <img src={n.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="uppercase tracking-widest" style={{ color: catColors[n.category] ?? "#ED1C24", fontWeight: 600 }}>{n.category}</span>
                      <span className="text-brand-gray">·</span>
                      <time className="text-brand-gray">{new Date(n.date).toLocaleDateString("pt-BR")}</time>
                    </div>
                    <h3 className="mt-2 text-brand-ink" style={{ fontSize: "clamp(1.05rem, 1.35vw, 1.2rem)", lineHeight: 1.25, fontWeight: 600, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{n.title}</h3>
                    <p className="mt-2 text-sm text-brand-gray flex-1" style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{n.excerpt}</p>
                    <Link to="/noticias/$slug" params={{ slug: n.slug }} className="mt-4 inline-flex items-center text-brand-red text-sm" style={{ fontWeight: 600 }}>Leia mais →</Link>
                  </div>
                </article>
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-10">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button key={i} onClick={() => setPage(i + 1)} className={`w-9 h-9 rounded-full text-sm ${page === i + 1 ? "bg-brand-red text-white" : "bg-brand-soft text-brand-ink hover:bg-brand-gold/30"}`} style={{ fontWeight: 600 }}>{i + 1}</button>
              ))}
            </div>
          )}

          <div className="mt-8">
            <BrushStroke color="#FFB400" className="w-32" />
          </div>
        </div>
      </Section>
    </>
  );
}
