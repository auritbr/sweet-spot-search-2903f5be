import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero, Section, SectionTitle } from "@/components/PageHero";
import { documents } from "@/data/site";

export const Route = createFileRoute("/transparencia")({
  head: () => ({
    meta: [
      { title: "Transparência — Cena Viva" },
      { name: "description", content: "Documentos institucionais, relatórios, prestação de contas e políticas." },
      { property: "og:title", content: "Transparência — Cena Viva" },
      { property: "og:description", content: "Documentos e prestação de contas." },
      { property: "og:url", content: "/transparencia" },
    ],
    links: [{ rel: "canonical", href: "/transparencia" }],
  }),
  component: Transparencia,
});

function Transparencia() {
  const years = useMemo(() => Array.from(new Set(documents.map((d) => d.year))).sort((a, b) => b - a), []);
  const cats = useMemo(() => Array.from(new Set(documents.map((d) => d.category))), []);
  const [year, setYear] = useState<number | "all">("all");
  const [cat, setCat] = useState<string | "all">("all");

  const filtered = documents.filter((d) => (year === "all" || d.year === year) && (cat === "all" || d.category === cat));

  return (
    <>
      <PageHero
        title="Transparência"
        subtitle="Compromisso público com prestação de contas, gestão ética e acesso à informação."
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80"
        breadcrumb={[{ label: "Início", to: "/" }, { label: "Quem Somos", to: "/quem-somos" }, { label: "Transparência" }]}
        accent="brand-petrol"
      />

      <Section className="bg-white">
        <div className="container-x">
          <SectionTitle eyebrow="Documentos" title="Consulte relatórios, políticas e prestações de contas" />

          <div className="flex flex-wrap gap-3 mb-6">
            <select value={year} onChange={(e) => setYear(e.target.value === "all" ? "all" : Number(e.target.value))} className="px-4 py-2 rounded-full border border-brand-ink/20">
              <option value="all">Todos os anos</option>
              {years.map((y) => <option key={y} value={y}>{y}</option>)}
            </select>
            <select value={cat} onChange={(e) => setCat(e.target.value)} className="px-4 py-2 rounded-full border border-brand-ink/20">
              <option value="all">Todas as categorias</option>
              {cats.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <ul className="grid md:grid-cols-2 gap-4">
            {filtered.map((d) => (
              <li key={d.name} className="p-5 rounded-2xl border border-brand-ink/10 hover:border-brand-red/40 transition flex flex-col gap-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-brand-red font-bold">{d.category} · {d.year}</p>
                    <h3 className="font-display font-black text-lg text-brand-ink">{d.name}</h3>
                    <p className="text-sm text-brand-gray">{d.format} · {d.size}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a href={d.url} className="px-4 py-2 rounded-full border border-brand-ink/20 text-brand-ink font-semibold text-sm">Visualizar</a>
                  <a href={d.url} className="px-4 py-2 rounded-full bg-brand-red text-white font-semibold text-sm">Baixar</a>
                </div>
              </li>
            ))}
            {filtered.length === 0 && <li className="text-brand-gray">Nenhum documento encontrado com os filtros selecionados.</li>}
          </ul>
        </div>
      </Section>

      <Section className="bg-brand-soft">
        <div className="container-x max-w-3xl">
          <SectionTitle eyebrow="FAQ" title="Perguntas frequentes" />
          <div className="space-y-3">
            {[
              { q: "Como acessar os relatórios anuais?", a: "Os relatórios anuais estão disponíveis para download nesta página, organizados por ano." },
              { q: "Como funciona a prestação de contas?", a: "Publicamos anualmente relatórios financeiros e narrativos, além das prestações de contas exigidas pelos convênios firmados." },
              { q: "Como firmar parcerias?", a: "Entre em contato pelo formulário para conhecermos sua proposta e avaliarmos possibilidades de cooperação." },
              { q: "Como proteger crianças e adolescentes?", a: "Adotamos uma política própria de proteção, disponível nesta página, alinhada às boas práticas do setor." },
            ].map((f) => (
              <details key={f.q} className="p-4 rounded-2xl bg-white border border-brand-ink/10">
                <summary className="font-semibold text-brand-ink cursor-pointer">{f.q}</summary>
                <p className="mt-2 text-brand-gray text-sm">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
