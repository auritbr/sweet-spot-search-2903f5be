import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Section, SectionTitle } from "@/components/PageHero";
import { AgendaStatusBadge } from "@/components/AgendaCard";
import { ArcThick, BrushStroke, HatchedCircle, QuarterCircle, Triangle } from "@/components/Shapes";
import { agendaCategories, eventDayMonth, isWithinPeriod, sortByDate, agendaEvents, type AgendaPeriod } from "@/data/agenda";

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
      <section className="relative overflow-hidden bg-brand-soft py-20 md:py-24">
        <HatchedCircle size={100} color="#08B9E6" className="absolute left-10 top-10 opacity-50" />
        <ArcThick color="#ED1C24" className="absolute bottom-10 right-10 w-32 opacity-80" from={200} to={340} />
        <Triangle color="#FFB400" size={54} className="absolute right-24 top-20 hidden md:block" rotate={20} />
        <Triangle color="#08B9E6" size={40} className="absolute bottom-20 left-24 hidden md:block" rotate={-15} />
        <div className="container-x relative pt-12 text-center">
          <h1 className="text-brand-ink" style={{ fontSize: "clamp(2rem, 3.3vw, 3.5rem)", lineHeight: 1.1, fontWeight: 700 }}>Agenda</h1>
          <BrushStroke color="#FFB400" className="mx-auto mt-5 w-36" />
          <p className="mx-auto mt-5 max-w-2xl text-brand-gray" style={{ fontSize: "clamp(1rem, 1.2vw, 1.1rem)", lineHeight: 1.6 }}>
            Cursos, sessões de cinema, oficinas, apresentações, encontros, atividades esportivas e outras ações do Ecossistema Maggu.
          </p>
        </div>
      </section>

      <Section className="overflow-hidden bg-white">
        <div className="container-x grid items-center gap-10 lg:grid-cols-[1fr_.55fr] lg:gap-16">
          <div className="max-w-3xl">
            <SectionTitle eyebrow="Agenda Maggu" title="O que está acontecendo agora" text="A Agenda reúne atividades abertas, próximas programações e oportunidades de participação nas diferentes iniciativas da Associação." />
            <p className="leading-relaxed text-brand-gray">Encontre oficinas, cursos, sessões, apresentações, encontros e outras ações organizadas por data.</p>
          </div>
          <HatchedCircle size={150} color="#08B9E6" className="mx-auto hidden opacity-35 lg:block" />
        </div>
      </Section>

      <section className="bg-white pb-12 md:pb-16">
        <div className="container-x">
          <div className="flex flex-col gap-6 border-y border-brand-petrol/15 py-5">
            <div>
              <h2 className="sr-only">Filtros da agenda</h2>
              <div role="group" aria-label="Filtrar por categoria" className="flex gap-6 overflow-x-auto">
                {["Todos", ...agendaCategories].map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCategory(c)}
                    aria-pressed={category === c}
                    className={`shrink-0 border-b-2 px-0 py-2 text-sm font-semibold transition ${
                      category === c ? "border-brand-red text-brand-red" : "border-transparent text-brand-petrol hover:text-brand-red"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div role="group" aria-label="Filtrar por período" className="flex flex-wrap gap-6">
              {periods.map((p) => (
                <button
                  key={p.value}
                  type="button"
                  onClick={() => setPeriod(p.value)}
                  aria-pressed={period === p.value}
                  className={`border-b-2 px-0 py-2 text-sm font-semibold transition ${
                    period === p.value
                      ? "border-brand-petrol text-brand-petrol"
                      : "border-transparent text-brand-gray hover:text-brand-petrol"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8" aria-live="polite">
            {events.length ? (
              <div className="border-t border-brand-petrol/15">
                {events.map((event) => {
                  const { day, month, weekday } = eventDayMonth(event.date);
                  const closed = event.status === "inscricoes-encerradas";
                  return (
                    <article key={event.slug} className="grid gap-5 border-b border-brand-petrol/15 py-7 md:grid-cols-[6rem_1fr_auto] md:items-center md:gap-8">
                      <time dateTime={event.date} className="text-brand-red">
                        <span className="block text-3xl font-bold leading-none">{day}</span>
                        <span className="mt-1 block text-xs font-bold uppercase tracking-[0.18em]">{month}</span>
                        <span className="mt-2 block text-sm capitalize text-brand-gray">{weekday}{event.time ? ` · ${event.time}` : ""}</span>
                      </time>
                      <div className="min-w-0">
                        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-red">{event.category}</p>
                        <h3 className="mt-2 text-xl leading-snug text-brand-ink">{event.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-brand-gray">{[event.location, event.summary].filter(Boolean).join(" · ")}</p>
                      </div>
                      <div className="flex flex-col items-start gap-3 md:items-end">
                        <AgendaStatusBadge event={event} />
                        <div className="flex flex-wrap gap-2">
                          <Link to="/agenda/$slug" params={{ slug: event.slug }} className="rounded-full border-2 border-brand-petrol px-5 py-2 text-sm font-bold text-brand-petrol transition hover:bg-brand-soft">Saiba mais</Link>
                          {event.registrationUrl && !closed && <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-brand-red px-5 py-2 text-sm font-bold text-white transition hover:bg-brand-petrol">Inscreva-se</a>}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="max-w-3xl py-6">
                <h2 className="text-xl text-brand-ink">Novas atividades em breve</h2>
                <p className="mt-3 leading-relaxed text-brand-gray">A Agenda será atualizada conforme novas oficinas, apresentações, sessões, encontros e outras atividades forem confirmadas.</p>
                <p className="mt-3 leading-relaxed text-brand-gray">Enquanto isso, conheça as iniciativas que fazem parte do Ecossistema Maggu.</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link to="/projetos" className="rounded-full bg-brand-red px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-petrol">Conheça os projetos</Link>
                  <Link to="/ecossistema" className="rounded-full border-2 border-brand-petrol px-6 py-3 text-sm font-bold text-brand-petrol transition hover:bg-brand-soft">Explore o Ecossistema</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

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
