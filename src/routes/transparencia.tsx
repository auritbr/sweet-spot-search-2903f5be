import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArcThick, HatchedCircle, BrushStroke } from "@/components/Shapes";
import { documents } from "@/data/site";

export const Route = createFileRoute("/transparencia")({
  head: () => ({
    meta: [
      { title: "Transparência — Cena Viva" },
      { name: "description", content: "Documentos institucionais, prestação de contas, atas, políticas e certidões do Ponto de Cultura Cena Viva." },
      { property: "og:title", content: "Transparência — Cena Viva" },
      { property: "og:description", content: "Documentos institucionais e prestação de contas." },
      { property: "og:url", content: "/transparencia" },
    ],
    links: [{ rel: "canonical", href: "/transparencia" }],
  }),
  component: Transparencia,
});

const catColor: Record<string, string> = {
  "Relatórios": "#ED1C24",
  "Prestação de contas": "#08B9E6",
  "Institucional": "#00384C",
  "Atas": "#FFB400",
  "Certidões": "#FF7A00",
  "Planos de trabalho": "#B8DC4B",
  "Convênios": "#ED1C24",
  "Editais": "#08B9E6",
  "Políticas": "#00384C",
};

function Transparencia() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("Todas");
  const categories = useMemo(() => ["Todas", ...Array.from(new Set(documents.map((d) => d.category)))], []);
  const filtered = documents.filter((d) => (cat === "Todas" || d.category === cat) && d.name.toLowerCase().includes(q.toLowerCase()));

  return (
    <>
      <section className="relative bg-white pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <ArcThick color="#00384C" className="absolute -left-8 top-32 w-56 md:w-72" from={200} to={340} />
        <HatchedCircle size={200} color="#08B9E6" className="absolute -right-16 -top-16 opacity-60" />
        <div className="container-x text-center relative">
          <p className="uppercase tracking-[0.3em] text-brand-red font-bold text-xs mb-4">Institucional</p>
          <h1 className="font-display uppercase leading-[0.95] text-brand-red" style={{ fontSize: "clamp(2.4rem, 7vw, 5.5rem)" }}>
            Transparência
          </h1>
          <BrushStroke color="#FFB400" className="mx-auto mt-6 w-48" />
          <p className="mt-6 text-lg text-brand-gray max-w-2xl mx-auto">
            Acesse relatórios, atas, prestações de contas, certidões, políticas e demais documentos institucionais do Ponto de Cultura.
          </p>
        </div>
      </section>

      <section className="bg-brand-soft py-8">
        <div className="container-x flex flex-col md:flex-row md:items-center gap-4">
          <input
            type="search"
            placeholder="Buscar documento..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="flex-1 rounded-full border border-black/10 px-5 py-3 bg-white outline-none"
          />
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider ${cat === c ? "bg-brand-red text-white" : "bg-white text-brand-ink hover:bg-brand-soft border border-black/10"}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-x">
          <ul className="divide-y divide-black/10">
            {filtered.map((d) => (
              <li key={d.name} className="py-5 flex flex-wrap md:flex-nowrap items-center gap-4">
                <span className="w-1.5 h-10 rounded-full shrink-0" style={{ backgroundColor: catColor[d.category] ?? "#00384C" }} />
                <div className="min-w-0 flex-1">
                  <p className="font-display uppercase text-brand-ink text-lg leading-tight">{d.name}</p>
                  <p className="text-sm text-brand-gray mt-1">{d.category} · {d.year} · {d.format} · {d.size}</p>
                </div>
                <a href={d.url} className="shrink-0 inline-flex px-5 py-2.5 rounded-full bg-brand-ink text-white text-sm font-semibold uppercase tracking-wider hover:bg-brand-red">Baixar</a>
              </li>
            ))}
            {filtered.length === 0 && <li className="py-10 text-center text-brand-gray">Nenhum documento encontrado.</li>}
          </ul>
        </div>
      </section>
    </>
  );
}
