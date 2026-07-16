import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero, Section } from "@/components/PageHero";
import { projects } from "@/data/site";

export const Route = createFileRoute("/projetos/")({
  head: () => ({
    meta: [
      { title: "Projetos — Cena Viva" },
      { name: "description", content: "Projetos de formação, criação e circulação cultural." },
      { property: "og:title", content: "Projetos — Cena Viva" },
      { property: "og:description", content: "Formação, criação e circulação cultural." },
      { property: "og:url", content: "/projetos" },
    ],
    links: [{ rel: "canonical", href: "/projetos" }],
  }),
  component: ProjetosList,
});

const filters = ["Todos", "Em andamento", "Concluídos", "crianças", "jovens", "formação", "espetáculos", "comunidade"];

function ProjetosList() {
  const [f, setF] = useState<string>("Todos");
  const list = useMemo(() => {
    if (f === "Todos") return projects;
    if (f === "Em andamento" || f === "Concluídos") return projects.filter((p) => p.status === f);
    return projects.filter((p) => p.tags.includes(f) || p.category.toLowerCase().includes(f));
  }, [f]);

  return (
    <>
      <PageHero
        title="Nossos Projetos"
        subtitle="Iniciativas contínuas que unem formação, criação artística e presença no território."
        image="https://images.unsplash.com/photo-1533158307587-828f0a76ef46?auto=format&fit=crop&w=1920&q=80"
        breadcrumb={[{ label: "Início", to: "/" }, { label: "Projetos" }]}
      />

      <Section className="bg-white">
        <div className="container-x">
          <div className="flex flex-wrap gap-2 mb-8">
            {filters.map((x) => (
              <button
                key={x}
                onClick={() => setF(x)}
                className={`px-4 py-2 rounded-full text-sm font-semibold capitalize ${f === x ? "bg-brand-red text-white" : "bg-brand-soft text-brand-ink hover:bg-brand-ink/10"}`}
              >
                {x}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {list.map((p) => (
              <article key={p.slug} className="group grid grid-cols-1 sm:grid-cols-2 gap-0 rounded-3xl overflow-hidden bg-brand-soft">
                <div className="aspect-[4/3] sm:aspect-auto overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition" loading="lazy" />
                </div>
                <div className="p-6 flex flex-col">
                  <span className="inline-block self-start px-3 py-1 rounded-full text-xs font-bold text-white" style={{ backgroundColor: `var(--${p.color})` }}>{p.category}</span>
                  <h3 className="mt-3 font-display font-black text-2xl text-brand-ink">{p.name}</h3>
                  <p className="mt-2 text-sm text-brand-gray"><strong>Status:</strong> {p.status} · <strong>Local:</strong> {p.location}</p>
                  <p className="mt-2 text-sm text-brand-gray"><strong>Público:</strong> {p.audience}</p>
                  <p className="mt-3 text-brand-gray">{p.short}</p>
                  <Link to="/projetos/$slug" params={{ slug: p.slug }} className="mt-auto pt-4 inline-flex font-semibold" style={{ color: `var(--${p.color})` }}>Conheça →</Link>
                </div>
              </article>
            ))}
          </div>
          {list.length === 0 && <p className="text-brand-gray">Nenhum projeto encontrado.</p>}
        </div>
      </Section>
    </>
  );
}
