import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Section } from "@/components/PageHero";
import { AgendaCard, AgendaEmptyState } from "@/components/AgendaCard";
import { ArcThick, BrushStroke, DiamondsCluster, HatchedCircle, QuarterCircle } from "@/components/Shapes";
import { agendaCategories, isWithinPeriod, sortByDate, agendaEvents, type AgendaPeriod } from "@/data/agenda";

export const Route = createFileRoute("/agenda/")({
  head: () => ({
    meta: [
      { title: "Agenda | Associação Maggu" },
      { name: "description", content: "Confira cursos, oficinas, sessões, apresentações, encontros e atividades do Ecossistema Maggu." },
      { property: "og:title", content: "Agenda | Associação Maggu" },
      { property: "og:description", content: "Confira cursos, oficinas, sessões, apresentações, encontros e atividades do Ecossistema Maggu." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/agenda" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/agenda" }],
  }),
  component: Agenda,
});

const periods: { value: AgendaPeriod; label: string }[] = [
  { value: "proximos", label: "Próximos" },
  { value: "semana", label: "Esta semana" },
  { value: "mes", label: "Este mês" },
];

function Agenda() {
  const [category, setCategory] = useState<string>("Todos");
  const [period, setPeriod] = useState<AgendaPeriod>("proximos");

  const events = useMemo(() => {
    return sortByDate(agendaEvents).filter(
      (e) => isWithinPeriod(e, period) && (category === "Todos" || e.category === category),
    );
  }, [category, period]);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-soft">
        <QuarterCircle corner="tr" color="#ED1C24" className="absolute -right-3 -top-3 w-28 md:w-44" />
        <ArcThick color="#FFB400" className="absolute left-4 bottom-6 w-24 md:w-36 opacity-90" from={210} to={340} />
        <HatchedCircle size={180} color="#08B9E6" className="absolute -bottom-10 right-1/4 opacity-30 hidden md:block" />
        <DiamondsCluster color="#08B9E6" className="absolute right-16 top-28 hidden lg:block" size={48} />
        <div className="container-x relative grid gap-10 pb-14 pt-28 md:grid-cols-[1.1fr_.9fr] md:items-center md:pb-16 md:pt-32">
          <div>
            <nav aria-label="Breadcrumb" className="text-sm text-brand-gray">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link to="/" className="underline underline-offset-4 hover:text-brand-red">Início</Link></li>
                <li aria-hidden="true">/</li>
                <li className="font-semibold text-brand-ink">Agenda</li>
              </ol>
            </nav>
            <h1 className="mt-4 text-brand-ink" style={{ fontSize: "clamp(2rem, 3.4vw, 3.2rem)", lineHeight: 1.08, fontWeight: 700 }}>
              O que está acontecendo agora.
            </h1>
            <BrushStroke color="#ED1C24" className="mt-5 w-32" />
            <p className="mt-5 max-w-2xl leading-relaxed text-brand-gray">
              Encontre cursos, sessões de cinema, oficinas, apresentações, encontros, atividades esportivas e outras ações do Ecossistema Maggu.
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="aspect-[4/3] overflow-hidden rounded-md">
              <img
                src="https://images.unsplash.com/photo-1523207911345-32501502db22?auto=format&fit=crop&w=1200&q=80"
                alt="Encontro cultural com participantes reunidos"
                className="h-full w-full object-cover"
              />
            </div>
            <ArcThick color="#00384C" className="absolute -left-6 -top-5 w-24" from={100} to={260} />
          </div>
        </div>
      </section>

      <Section className="bg-white">
        <div className="container-x">
          <div className="flex flex-col gap-5 border-b border-brand-petrol/10 pb-6">
            <div>
              <h2 className="sr-only">Filtros da agenda</h2>
              <div role="group" aria-label="Filtrar por categoria" className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
                {["Todos", ...agendaCategories].map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCategory(c)}
                    aria-pressed={category === c}
                    className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                      category === c ? "bg-brand-red text-white" : "bg-brand-soft text-brand-petrol hover:bg-brand-gold/40"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div role="group" aria-label="Filtrar por período" className="flex flex-wrap gap-2">
              {periods.map((p) => (
                <button
                  key={p.value}
                  type="button"
                  onClick={() => setPeriod(p.value)}
                  aria-pressed={period === p.value}
                  className={`rounded-full border-2 px-5 py-2 text-sm font-semibold transition ${
                    period === p.value
                      ? "border-brand-petrol bg-brand-petrol text-white"
                      : "border-brand-petrol/25 text-brand-petrol hover:bg-brand-soft"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 space-y-4" aria-live="polite">
            {events.length ? (
              events.map((e) => <AgendaCard key={e.slug} event={e} />)
            ) : (
              <AgendaEmptyState />
            )}
          </div>
        </div>
      </Section>

      <section className="relative overflow-hidden bg-brand-petrol py-14 md:py-18">
        <QuarterCircle corner="br" color="#ED1C24" className="absolute -bottom-2 -right-2 w-32 opacity-90" />
        <HatchedCircle size={160} color="#08B9E6" className="absolute -left-12 top-0 opacity-20" />
        <div className="container-x relative mx-auto max-w-3xl text-center text-white">
          <h2 className="text-2xl md:text-3xl text-white">Quer saber mais sobre uma atividade?</h2>
          <p className="mt-4 leading-relaxed text-white/90">
            Fale com a Associação ou conheça as iniciativas que originam a programação do Ecossistema Maggu.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/projetos" className="rounded-full bg-brand-gold px-6 py-3 text-sm font-bold text-brand-petrol transition hover:bg-white">Conheça os projetos</Link>
            <Link to="/contato" className="rounded-full border-2 border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Entre em contato</Link>
          </div>
        </div>
      </section>
    </>
  );
}
