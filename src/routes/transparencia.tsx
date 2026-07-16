import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArcThick, HatchedCircle, BrushStroke, Triangle } from "@/components/Shapes";
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
  const grouped = useMemo(() => {
    const g: Record<string, typeof documents> = {};
    documents.forEach((d) => { (g[d.category] ||= []).push(d); });
    return g;
  }, []);
  const categories = Object.keys(grouped);
  const [open, setOpen] = useState<Record<string, boolean>>(() => Object.fromEntries(categories.map((c, i) => [c, i === 0])));
  const toggle = (c: string) => setOpen((v) => ({ ...v, [c]: !v[c] }));

  return (
    <>
      <section className="relative bg-brand-soft pt-28 pb-14 md:pt-32 md:pb-16 overflow-hidden">
        <ArcThick color="#00384C" className="absolute -left-8 top-24 w-40 md:w-52 opacity-80" from={200} to={340} />
        <HatchedCircle size={140} color="#08B9E6" className="absolute -right-12 -top-12 opacity-50" />
        <Triangle color="#FFB400" size={54} className="absolute bottom-8 right-16 hidden md:block" rotate={20} />
        <div className="container-x text-center relative">
          <p className="uppercase tracking-[0.22em] text-brand-red text-xs mb-3" style={{ fontWeight: 600 }}>Acervo institucional</p>
          <h1 className="text-brand-ink" style={{ fontSize: "clamp(2rem, 3.3vw, 3.5rem)", lineHeight: 1.1, fontWeight: 700 }}>Transparência</h1>
          <BrushStroke color="#FFB400" className="mx-auto mt-4 w-32" />
          <p className="mt-5 text-brand-gray max-w-2xl mx-auto" style={{ fontSize: "clamp(1rem, 1.2vw, 1.1rem)", lineHeight: 1.6 }}>
            Acesse relatórios, atas, prestações de contas, certidões, políticas e demais documentos institucionais do Ponto de Cultura.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="container-x max-w-4xl">
          <div className="space-y-3">
            {categories.map((c, i) => {
              const docs = grouped[c];
              const color = catColor[c] ?? "#00384C";
              const isOpen = open[c];
              return (
                <div key={c} className={`rounded-2xl border border-black/5 overflow-hidden ${i % 2 === 0 ? "bg-white" : "bg-brand-soft/50"}`}>
                  <button onClick={() => toggle(c)} className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-brand-soft/60 transition">
                    <span className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0" style={{ backgroundColor: color }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><path d="M14 3v6h6" /></svg>
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block text-brand-ink" style={{ fontSize: "clamp(1rem, 1.2vw, 1.15rem)", fontWeight: 600 }}>{c}</span>
                      <span className="block text-xs text-brand-gray mt-0.5">{docs.length} documento{docs.length > 1 ? "s" : ""}</span>
                    </span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-brand-ink shrink-0 transition-transform" style={{ transform: isOpen ? "rotate(180deg)" : "none" }}><path d="M6 9l6 6 6-6" /></svg>
                  </button>
                  <div className="grid transition-all" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
                    <div className="overflow-hidden">
                      <ul className="divide-y divide-black/5 px-5 pb-2">
                        {docs.map((d) => (
                          <li key={d.name} className="py-4 flex flex-wrap md:flex-nowrap items-center gap-3">
                            <span className="w-9 h-9 rounded-lg bg-brand-soft flex items-center justify-center text-brand-ink shrink-0 text-[10px]" style={{ fontWeight: 700 }}>{d.format}</span>
                            <div className="min-w-0 flex-1">
                              <p className="text-brand-ink text-sm" style={{ fontWeight: 600 }}>{d.name}</p>
                              <p className="text-xs text-brand-gray mt-0.5">{d.year} · {d.format} · {d.size}</p>
                            </div>
                            <div className="flex gap-2 shrink-0">
                              <a href={d.url} target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-full border border-brand-ink/20 text-brand-ink text-xs hover:bg-brand-soft" style={{ fontWeight: 600 }}>Visualizar</a>
                              <a href={d.url} download className="px-3 py-2 rounded-full text-white text-xs hover:opacity-90" style={{ backgroundColor: color, fontWeight: 600 }}>Baixar</a>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
