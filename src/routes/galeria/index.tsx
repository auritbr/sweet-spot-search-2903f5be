import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero, Section } from "@/components/PageHero";
import { albums } from "@/data/site";

export const Route = createFileRoute("/galeria/")({
  head: () => ({
    meta: [
      { title: "Galeria — Cena Viva" },
      { name: "description", content: "Registros das oficinas, apresentações e encontros do Ponto de Cultura." },
      { property: "og:title", content: "Galeria — Cena Viva" },
      { property: "og:description", content: "Fotos e memórias da nossa trajetória." },
      { property: "og:url", content: "/galeria" },
    ],
    links: [{ rel: "canonical", href: "/galeria" }],
  }),
  component: Gallery,
});

function Gallery() {
  const years = useMemo(() => Array.from(new Set(albums.map((a) => a.year))).sort((a, b) => b - a), []);
  const [year, setYear] = useState<number | "all">("all");
  const visibleYears = year === "all" ? years : [year];

  return (
    <>
      <PageHero
        title="Galeria"
        subtitle="Registros que preservam encontros, processos, apresentações e histórias construídas ao longo da nossa trajetória."
        image="https://images.unsplash.com/photo-1519683384663-1de1a1e3f6a7?auto=format&fit=crop&w=1920&q=80"
        breadcrumb={[{ label: "Início", to: "/" }, { label: "Galeria" }]}
        accent="brand-gold"
      />

      <Section className="bg-white">
        <div className="container-x">
          <div className="flex flex-wrap gap-2 mb-10">
            <button onClick={() => setYear("all")} className={`px-4 py-2 rounded-full text-sm font-semibold ${year === "all" ? "bg-brand-red text-white" : "bg-brand-soft"}`}>Todos os anos</button>
            {years.map((y) => (
              <button key={y} onClick={() => setYear(y)} className={`px-4 py-2 rounded-full text-sm font-semibold ${year === y ? "bg-brand-red text-white" : "bg-brand-soft"}`}>{y}</button>
            ))}
          </div>

          {visibleYears.map((y) => {
            const list = albums.filter((a) => a.year === y);
            if (!list.length) return null;
            return (
              <div key={y} className="mb-14">
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="font-display font-black text-4xl text-brand-ink">{y}</h2>
                  <span className="h-1 flex-1 bg-brand-red/20 rounded-full" />
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {list.map((a) => (
                    <Link key={a.slug} to="/galeria/$slug" params={{ slug: a.slug }} className="group block rounded-2xl overflow-hidden bg-brand-soft hover:shadow-lg transition">
                      <div className="aspect-video overflow-hidden">
                        <img src={a.cover} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
                      </div>
                      <div className="p-5">
                        <p className="text-xs font-bold uppercase text-brand-red">{a.year} · {a.count} fotos</p>
                        <h3 className="mt-2 font-display font-black text-xl text-brand-ink">{a.title}</h3>
                        <p className="mt-1 text-sm text-brand-gray">{a.description}</p>
                        <span className="mt-3 inline-block font-semibold text-brand-red">Ver álbum →</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </>
  );
}
