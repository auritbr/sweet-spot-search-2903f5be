import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArcThick, HatchedCircle, QuarterCircle, Triangle } from "@/components/Shapes";
import { documents } from "@/data/site";
import { CompactFinalCTA } from "@/components/CompactFinalCTA";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/transparencia/")({
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
      <PageHero title="Transparência" eyebrow="Acervo institucional" subtitle="Acesse relatórios, atas, prestações de contas, certidões, políticas e demais documentos institucionais do Ponto de Cultura." image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1920&q=80" accent="gold" brush="#08B9E6" compact decoration="curve" />

      <section className="relative overflow-hidden bg-white py-14 md:py-20">
        <QuarterCircle corner="br" color="#ED1C24" className="pointer-events-none absolute -left-2 top-12 w-12 opacity-75 md:left-6 md:top-16 md:w-16" />
        <span className="pointer-events-none absolute left-12 top-24 hidden size-3 rotate-45 bg-brand-gold md:block" aria-hidden="true" />
        <HatchedCircle size={104} color="#08B9E6" className="pointer-events-none absolute -right-12 bottom-8 opacity-25 md:-right-7 md:bottom-10" />
        <div className="container-x">
          <div className="relative mx-auto max-w-[860px] text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">Compromisso institucional</p>
            <h2 className="mt-3 text-[1.75rem] leading-tight text-brand-ink md:text-[2.25rem]">Nosso jeito de fazer</h2>
            <div className="mt-7 space-y-5 text-[15px] leading-[1.75] text-brand-gray md:text-base md:leading-[1.8]">
              <p>A Associação Maggu acredita que uma atuação comunitária forte também se constrói com <strong className="font-semibold text-brand-petrol">responsabilidade, organização e transparência</strong>.</p>
              <p>Nesta página, reunimos documentos institucionais, certificados, reconhecimentos, portfólios, registros de apresentações e oficinas, materiais gráficos, fotos e recortes de imprensa que ajudam a contar a trajetória da instituição e tornam públicas partes importantes do nosso trabalho.</p>
              <p>Esses materiais permitem que a comunidade, parceiros, apoiadores e interessados conheçam melhor as ações desenvolvidas pela Associação Maggu ao longo dos anos.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="acervo" className="relative overflow-hidden bg-white pb-2 pt-10 md:pb-3 md:pt-14">
        <ArcThick color="#00384C" className="pointer-events-none absolute -left-10 top-6 w-20 opacity-35 md:left-4 md:top-8 md:w-24" from={210} to={330} />
        <div className="pointer-events-none absolute right-5 top-7 hidden h-12 w-14 md:block" aria-hidden="true">
          <Triangle color="#FFB400" size={30} className="absolute left-0 top-0 opacity-85" rotate={12} />
          <Triangle color="#08B9E6" size={25} className="absolute bottom-0 right-0 opacity-70" rotate={48} />
        </div>
        <span className="pointer-events-none absolute bottom-8 right-6 size-3 rotate-45 bg-brand-red/80 md:bottom-10 md:right-12" aria-hidden="true" />
        <div className="container-x">
          <div className="relative mx-auto max-w-[800px] text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">Acervo</p>
            <h2 className="mt-3 text-[1.75rem] leading-tight text-brand-ink md:text-[2.25rem]">Acervo institucional</h2>
            <p className="mx-auto mt-5 max-w-[760px] text-[15px] leading-[1.75] text-brand-gray md:text-base md:leading-[1.8]">Acesse documentos, certificados, reconhecimentos, portfólios e registros da Associação Maggu, organizados por categoria para facilitar a consulta pública.</p>
          </div>
        </div>
      </section>

      <section className="bg-white pb-12 pt-6 md:pb-16 md:pt-8">
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

          <div className="relative mx-auto mt-16 max-w-[46rem] text-center md:mt-20">
            <span className="pointer-events-none absolute left-1/2 top-[-2.75rem] h-9 w-px -translate-x-1/2 bg-brand-petrol/20" aria-hidden="true" />
            <span className="pointer-events-none absolute -left-2 top-2 hidden size-2.5 rotate-45 bg-brand-gold md:block" aria-hidden="true" />
            <span className="pointer-events-none absolute -right-2 top-6 hidden size-2.5 rounded-full bg-brand-cyan md:block" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">Canais institucionais</p>
            <h2 className="mt-3 text-[1.6rem] leading-tight text-brand-ink md:text-[2.05rem]">Privacidade, proteção e integridade</h2>
            <p className="mx-auto mt-4 max-w-[42rem] text-[15px] leading-[1.75] text-brand-gray md:text-base">Além do acervo institucional, a Associação Maggu também disponibiliza orientações e canais voltados à privacidade, à proteção de dados e ao encaminhamento responsável de situações relacionadas à integridade institucional.</p>
          </div>

          <div className="mx-auto mt-9 grid max-w-[56rem] gap-5 md:mt-11 md:grid-cols-2 md:gap-6">
            {/* Card 1 — Privacidade */}
            <article className="group relative flex min-h-[240px] flex-col justify-between overflow-hidden rounded-2xl border border-brand-petrol/10 bg-brand-soft/45 p-6 shadow-[0_16px_36px_-32px_rgba(0,56,76,0.55)] ring-1 ring-inset ring-white/60 backdrop-blur-sm md:p-7">
              <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-brand-cyan/45" aria-hidden="true" />
              <div className="pointer-events-none absolute right-5 top-5 h-16 w-20" aria-hidden="true">
                <span className="absolute right-0 top-0 size-11 rounded-full border border-brand-cyan/35" />
                <span className="absolute right-5 top-5 size-8 rounded-full border border-brand-petrol/20" />
                <span className="absolute bottom-0 left-0 h-px w-12 bg-brand-cyan/55" />
                <span className="absolute bottom-[-0.2rem] left-11 size-2 rotate-45 bg-brand-petrol/65" />
              </div>
              <div className="relative z-10 max-w-[19rem] pr-8">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-cyan">Privacidade</p>
                <h2 className="mt-2.5 text-[1.35rem] font-bold leading-[1.18] text-brand-ink md:text-[1.55rem]">Privacidade e Proteção de Dados</h2>
                <p className="mt-3 text-sm leading-[1.65] text-brand-gray">Orientações sobre o tratamento de dados pessoais nos canais digitais da Associação.</p>
              </div>
              <Link to="/privacidade" className="relative z-10 mt-6 inline-flex w-fit items-center gap-2 border-b border-brand-cyan/35 pb-1 text-sm font-semibold text-brand-petrol transition-colors hover:text-brand-cyan">
                Acessar página <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </article>

            {/* Card 2 — Integridade */}
            <article className="group relative flex min-h-[240px] flex-col justify-between overflow-hidden rounded-2xl border border-brand-petrol/10 bg-brand-soft/45 p-6 shadow-[0_16px_36px_-32px_rgba(0,56,76,0.55)] ring-1 ring-inset ring-white/60 backdrop-blur-sm md:p-7">
              <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-brand-red/35" aria-hidden="true" />
              <div className="pointer-events-none absolute right-5 top-5 h-16 w-20" aria-hidden="true">
                <span className="absolute right-1 top-1 size-9 rotate-45 border border-brand-red/30" />
                <span className="absolute right-8 top-7 h-px w-11 bg-brand-gold/75" />
                <span className="absolute bottom-0 right-0 size-3 rounded-full bg-brand-red/70" />
                <span className="absolute bottom-2 left-1 size-2 rotate-45 border border-brand-petrol/35" />
              </div>
              <div className="relative z-10 max-w-[20rem] pr-8">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">Integridade</p>
                <h2 className="mt-2.5 text-[1.35rem] font-bold leading-[1.18] text-brand-ink md:text-[1.55rem]">Canal de Denúncias e Relato Ético</h2>
                <p className="mt-3 text-sm leading-[1.65] text-brand-gray">Orientações para o encaminhamento responsável de situações relacionadas à integridade institucional.</p>
              </div>
              <Link to="/canal-de-denuncias" className="relative z-10 mt-6 inline-flex w-fit items-center gap-2 border-b border-brand-red/30 pb-1 text-sm font-semibold text-brand-petrol transition-colors hover:text-brand-red">
                Acessar página <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </article>
          </div>

          <div className="mx-auto mt-6 flex max-w-4xl flex-col items-center gap-3 rounded-2xl border border-brand-petrol/10 bg-white/70 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-cyan">Sustentabilidade</p>
              <h2 className="mt-2 text-[1.2rem] font-bold leading-snug text-brand-ink">ODS / Maggu 2030</h2>
              <p className="mt-2 text-sm leading-[1.65] text-brand-gray">Compromissos institucionais, governança, indicadores e evidências ligados aos Objetivos de Desenvolvimento Sustentável.</p>
            </div>
            <Link to="/ods-maggu-2030" className="inline-flex shrink-0 rounded-full bg-brand-petrol px-6 py-2.5 text-sm font-bold text-primary-foreground transition hover:bg-brand-red">Acessar subárea</Link>
          </div>
          <div className="mx-auto mt-4 flex max-w-4xl flex-col items-center gap-3 rounded-2xl border border-brand-petrol/10 bg-brand-soft/60 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">Governança</p>
              <h2 className="mt-2 text-[1.2rem] font-bold leading-snug text-brand-ink">Governança e Integridade</h2>
              <p className="mt-2 text-sm leading-[1.65] text-brand-gray">Conheça a estrutura, os princípios e os mecanismos que orientam a gestão responsável da Associação.</p>
            </div>
            <Link to="/transparencia/governanca-integridade" className="inline-flex shrink-0 rounded-full bg-brand-petrol px-6 py-2.5 text-sm font-bold text-primary-foreground transition hover:bg-brand-red">Conhecer governança</Link>
          </div>
        </div>
      </section>


      <CompactFinalCTA
        title="Transparência também se constrói com acesso."
        text="Consulte documentos, conheça nossas políticas institucionais e acompanhe informações que ajudam a tornar pública a atuação da Associação Maggu."
        primary={{ label: "Acessar o Acervo", href: "#acervo" }}
        secondary={{ label: "Entre em Contato", to: "/contato" }}
        variant="transparency"
      />

    </>

  );
}
