import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero, Section } from "@/components/PageHero";
import { news } from "@/data/site";

export const Route = createFileRoute("/noticias/")({
  head: () => ({
    meta: [
      { title: "Notícias — Cena Viva" },
      { name: "description", content: "Fique por dentro das ações culturais, oficinas e apresentações." },
      { property: "og:title", content: "Notícias — Cena Viva" },
      { property: "og:description", content: "Acompanhe as nossas novidades." },
      { property: "og:url", content: "/noticias" },
    ],
    links: [{ rel: "canonical", href: "/noticias" }],
  }),
  component: NewsList,
});

const cats = ["Todos", "Institucional", "Oficinas", "Apresentações", "Projetos", "Formação", "Comunidade", "Parcerias"];

function NewsList() {
  const [q, setQ] = useState("");
  const [c, setC] = useState("Todos");
  const [year, setYear] = useState<number | "all">("all");
  const years = useMemo(() => Array.from(new Set(news.map((n) => new Date(n.date).getFullYear()))), []);

  const filtered = news.filter((n) => {
    if (c !== "Todos" && n.category !== c) return false;
    if (year !== "all" && new Date(n.date).getFullYear() !== year) return false;
    if (q && !(n.title + n.excerpt).toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  });

  const main = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      <PageHero
        title="Notícias"
        subtitle="Ações, apresentações, parcerias e histórias construídas ao longo da nossa trajetória."
        image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1920&q=80"
        breadcrumb={[{ label: "Início", to: "/" }, { label: "Notícias" }]}
        accent="brand-orange"
      />

      <Section className="bg-white">
        <div className="container-x">
          <div className="flex flex-wrap gap-3 mb-8">
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar notícias..." className="flex-1 min-w-64 px-4 py-2 rounded-full border border-brand-ink/20" />
            <select value={c} onChange={(e) => setC(e.target.value)} className="px-4 py-2 rounded-full border border-brand-ink/20">
              {cats.map((x) => <option key={x}>{x}</option>)}
            </select>
            <select value={year} onChange={(e) => setYear(e.target.value === "all" ? "all" : Number(e.target.value))} className="px-4 py-2 rounded-full border border-brand-ink/20">
              <option value="all">Todos os anos</option>
              {years.map((y) => <option key={y}>{y}</option>)}
            </select>
          </div>

          {main && (
            <Link to="/noticias/$slug" params={{ slug: main.slug }} className="grid md:grid-cols-2 gap-6 rounded-3xl overflow-hidden bg-brand-soft mb-10 hover:shadow-lg transition">
              <img src={main.image} alt="" className="aspect-video md:aspect-auto md:h-full w-full object-cover" />
              <div className="p-8 flex flex-col justify-center">
                <p className="text-brand-red font-bold uppercase text-xs">{main.category} · {new Date(main.date).toLocaleDateString("pt-BR")}</p>
                <h2 className="mt-3 font-display font-black text-3xl text-brand-ink">{main.title}</h2>
                <p className="mt-3 text-brand-gray">{main.excerpt}</p>
                <span className="mt-4 font-semibold text-brand-red">Leia mais →</span>
              </div>
            </Link>
          )}

          <div className="grid md:grid-cols-3 gap-6">
            {rest.map((n) => (
              <article key={n.slug} className="rounded-2xl overflow-hidden bg-white border border-brand-ink/10 hover:shadow-lg transition">
                <img src={n.image} alt="" className="aspect-video w-full object-cover" loading="lazy" />
                <div className="p-5">
                  <p className="text-brand-red font-bold uppercase text-xs">{n.category} · {new Date(n.date).toLocaleDateString("pt-BR")}</p>
                  <h3 className="mt-2 font-display font-black text-lg text-brand-ink">{n.title}</h3>
                  <p className="mt-2 text-sm text-brand-gray">{n.excerpt}</p>
                  <Link to="/noticias/$slug" params={{ slug: n.slug }} className="mt-3 inline-block font-semibold text-brand-red">Leia mais →</Link>
                </div>
              </article>
            ))}
          </div>
          {filtered.length === 0 && <p className="text-brand-gray text-center py-10">Nenhuma notícia encontrada.</p>}
        </div>
      </Section>
    </>
  );
}
