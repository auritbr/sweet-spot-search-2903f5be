import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Clock3, MapPin } from "lucide-react";
import { useMemo, useState } from "react";
import { ArcThick, BrushStroke, DiamondsCluster, HatchedCircle, Triangle } from "@/components/Shapes";
import { Button } from "@/components/ui/button";
import { CompactFinalCTA } from "@/components/CompactFinalCTA";
import { PageHero } from "@/components/PageHero";
import {
  agendaCategories,
  agendaCategoryStyles,
  agendaEvents,
  agendaStatusLabels,
  parseEventDate,
  sortByDate,
  type AgendaCategory,
  type AgendaEvent,
} from "@/data/agenda";

export const Route = createFileRoute("/agenda/")({
  head: () => ({
    meta: [
      { title: "Agenda | Associação Maggu" },
      { name: "description", content: "Acompanhe cursos, oficinas, sessões, apresentações, encontros e outras atividades do Ecossistema Maggu." },
      { property: "og:title", content: "Agenda | Associação Maggu" },
      { property: "og:description", content: "Acompanhe a programação cultural, formativa e comunitária da Associação Maggu." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/agenda" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/agenda" }],
  }),
  component: Agenda,
});

type CalendarView = "semana" | "mes" | "proximos";

const views: { value: CalendarView; label: string }[] = [
  { value: "semana", label: "Semana" },
  { value: "mes", label: "Mês" },
  { value: "proximos", label: "Próximos eventos" },
];

const weekdays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

function atStartOfDay(date: Date) {
  const value = new Date(date);
  value.setHours(0, 0, 0, 0);
  return value;
}

function addDays(date: Date, amount: number) {
  const value = new Date(date);
  value.setDate(value.getDate() + amount);
  return value;
}

function startOfWeek(date: Date) {
  return addDays(atStartOfDay(date), -date.getDay());
}

function startOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function endOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

function sameDay(first: Date, second: Date) {
  return first.getFullYear() === second.getFullYear()
    && first.getMonth() === second.getMonth()
    && first.getDate() === second.getDate();
}

function dateKey(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function CalendarEvent({ event }: { event: AgendaEvent }) {
  const style = agendaCategoryStyles[event.category];
  return (
    <Link
      to="/agenda/$slug"
      params={{ slug: event.slug }}
      className={`group relative block overflow-hidden rounded-lg border border-background/90 ${style.surface} p-3 shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-brand-petrol/15 hover:shadow-md`}
    >
      <span className={`absolute inset-y-0 left-0 w-1 bg-current ${style.accentText}`} aria-hidden="true" />
      <p className={`pl-1 text-[9px] font-bold uppercase tracking-[0.08em] ${style.text}`}>{event.category}</p>
      <h3 className="mt-1.5 pl-1 text-sm leading-snug text-brand-ink transition-colors group-hover:text-brand-red">{event.title}</h3>
      {event.time && (
        <p className="mt-2 flex items-center gap-1.5 pl-1 text-[11px] font-semibold text-brand-gray">
          <Clock3 aria-hidden="true" className="size-3" /> {event.time}
        </p>
      )}
      {event.location && (
        <p className="mt-1 flex items-start gap-1.5 pl-1 text-[11px] leading-snug text-brand-gray">
          <MapPin aria-hidden="true" className="mt-0.5 size-3 shrink-0" /> {event.location}
        </p>
      )}
      {event.status && (
        <span className="ml-1 mt-2 inline-flex rounded-full border border-background/80 bg-background/75 px-2 py-1 text-[9px] font-bold uppercase text-brand-petrol backdrop-blur-sm">
          {agendaStatusLabels[event.status]}
        </span>
      )}
    </Link>
  );
}

function Agenda() {
  const [category, setCategory] = useState<"Todos" | AgendaCategory>("Todos");
  const [view, setView] = useState<CalendarView>("semana");
  const [cursor, setCursor] = useState(() => atStartOfDay(new Date()));

  const filteredEvents = useMemo(
    () => sortByDate(agendaEvents).filter((event) => category === "Todos" || event.category === category),
    [category],
  );

  const calendarDays = useMemo(() => {
    if (view === "mes") {
      const first = startOfWeek(startOfMonth(cursor));
      const last = addDays(startOfWeek(endOfMonth(cursor)), 6);
      const days: Date[] = [];
      for (let day = first; day <= last; day = addDays(day, 1)) days.push(day);
      return days;
    }

    if (view === "proximos") {
      const firstUpcoming = filteredEvents.find((event) => parseEventDate(event.date) >= cursor);
      const first = startOfWeek(firstUpcoming ? parseEventDate(firstUpcoming.date) : cursor);
      return Array.from({ length: 7 }, (_, index) => addDays(first, index));
    }

    const first = startOfWeek(cursor);
    return Array.from({ length: 7 }, (_, index) => addDays(first, index));
  }, [cursor, filteredEvents, view]);

  const eventsByDay = useMemo(() => {
    const grouped = new Map<string, AgendaEvent[]>();
    filteredEvents.forEach((event) => {
      const list = grouped.get(event.date) ?? [];
      list.push(event);
      grouped.set(event.date, list);
    });
    return grouped;
  }, [filteredEvents]);

  const visibleEvents = calendarDays.reduce((total, day) => total + (eventsByDay.get(dateKey(day))?.length ?? 0), 0);
  const title = view === "mes"
    ? cursor.toLocaleDateString("pt-BR", { month: "long", year: "numeric" })
    : calendarDays[0].getMonth() === calendarDays[calendarDays.length - 1].getMonth()
      ? calendarDays[0].toLocaleDateString("pt-BR", { month: "long", year: "numeric" })
      : `${calendarDays[0].toLocaleDateString("pt-BR", { month: "short" })} — ${calendarDays[calendarDays.length - 1].toLocaleDateString("pt-BR", { month: "short", year: "numeric" })}`;

  const movePeriod = (direction: -1 | 1) => {
    if (view === "mes") {
      setCursor((current) => new Date(current.getFullYear(), current.getMonth() + direction, 1));
      return;
    }
    setCursor((current) => addDays(current, direction * 7));
  };

  return (
    <>
      <PageHero title="Agenda" eyebrow="Programação" subtitle="Acompanhe cursos, oficinas, sessões, apresentações, encontros e outras atividades do Ecossistema Maggu." image="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1920&q=80" accent="gold" brush="#ED1C24" compact decoration="triangle" />

      <main id="programacao" className="relative overflow-hidden bg-brand-soft/20 py-12 md:py-16">
        <HatchedCircle size={150} color="#08B9E6" className="pointer-events-none absolute -right-20 top-56 opacity-10" />
        <div className="container-x">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">Agenda Maggu</p>
            <h2 className="mt-3 text-brand-ink" style={{ fontSize: "clamp(1.75rem, 2.7vw, 2.75rem)", lineHeight: 1.15, fontWeight: 700 }}>
              Acompanhe a programação
            </h2>
             <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-brand-gray">
              Veja as atividades da Associação Maggu por categoria e período, de forma simples, visual e organizada.
            </p>
            <p className="mt-2 text-sm text-brand-gray">A agenda reúne ações culturais, formativas e comunitárias do Ecossistema Maggu.</p>
          </header>

          <div className="mx-auto mt-7 max-w-6xl rounded-2xl border border-brand-petrol/10 bg-background/75 p-4 shadow-sm backdrop-blur-xl md:p-5">
            <div className="grid min-w-0 gap-5 lg:grid-cols-[minmax(0,1fr)_1px_minmax(280px,.48fr)] lg:items-center lg:gap-6">
              <fieldset className="min-w-0">
                <legend className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-gray">Categoria</legend>
                <div className="flex max-w-full flex-wrap justify-center gap-2 pb-1">
                  {(["Todos", ...agendaCategories] as const).map((item) => (
                    <Button
                      key={item}
                      type="button"
                      size="sm"
                      variant="ghost"
                      onClick={() => setCategory(item)}
                      aria-pressed={category === item}
                      className={`shrink-0 rounded-full border px-4 shadow-none backdrop-blur-md transition-colors ${category === item ? "border-brand-red bg-brand-red text-primary-foreground hover:bg-brand-red/90 hover:text-primary-foreground" : "border-brand-petrol/10 bg-background/70 text-brand-petrol hover:border-brand-petrol/20 hover:bg-brand-soft/80 hover:text-brand-petrol"}`}
                    >
                      {item}
                    </Button>
                  ))}
                </div>
              </fieldset>

              <div className="hidden h-full min-h-16 w-px bg-brand-petrol/10 lg:block" aria-hidden="true" />

              <fieldset className="min-w-0">
                <legend className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-gray">Período</legend>
                <div className="grid grid-cols-2 gap-2 rounded-xl bg-brand-soft/55 p-1.5">
                  {views.map((item, index) => (
                    <Button
                      key={item.value}
                      type="button"
                      size="sm"
                      variant="ghost"
                      onClick={() => setView(item.value)}
                      aria-pressed={view === item.value}
                      className={`min-w-0 rounded-lg border px-3 text-xs shadow-none backdrop-blur-md ${index === 2 ? "col-span-2" : ""} ${view === item.value ? "border-brand-petrol bg-brand-petrol text-primary-foreground hover:bg-brand-petrol/90 hover:text-primary-foreground" : "border-transparent bg-background/70 text-brand-petrol hover:bg-background hover:text-brand-petrol"}`}
                    >
                      {item.label}
                    </Button>
                  ))}
                </div>
              </fieldset>
            </div>
          </div>

          <section aria-labelledby="calendar-title" className="mx-auto mt-6 max-w-7xl overflow-hidden rounded-2xl border border-brand-petrol/10 bg-background/90 shadow-sm">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-brand-petrol/8 px-4 py-4 md:px-6 md:py-5">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-red">{view === "mes" ? "Calendário mensal" : "Calendário semanal"}</p>
                <h2 id="calendar-title" className="mt-1 capitalize text-brand-ink" style={{ fontSize: "clamp(1.35rem, 2vw, 1.8rem)", fontWeight: 700 }}>{title}</h2>
              </div>
              <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-brand-petrol/10 bg-brand-soft/45 p-1.5">
                <Button type="button" variant="outline" size="icon" aria-label="Período anterior" onClick={() => movePeriod(-1)} className="size-9 rounded-full border-transparent bg-background/80 shadow-none hover:bg-background">
                  <ChevronLeft aria-hidden="true" />
                </Button>
                <Button type="button" variant="outline" onClick={() => setCursor(atStartOfDay(new Date()))} className="h-9 rounded-full border-transparent bg-background/80 px-4 text-brand-petrol shadow-none hover:bg-background">
                  Hoje
                </Button>
                <Button type="button" variant="outline" size="icon" aria-label="Próximo período" onClick={() => movePeriod(1)} className="size-9 rounded-full border-transparent bg-background/80 shadow-none hover:bg-background">
                  <ChevronRight aria-hidden="true" />
                </Button>
              </div>
            </div>

            <div className="hidden grid-cols-7 border-b border-brand-petrol/8 bg-brand-soft/35 md:grid">
              {weekdays.map((day) => <div key={day} className="px-3 py-3.5 text-center text-[10px] font-bold uppercase tracking-[0.14em] text-brand-gray">{day}</div>)}
            </div>

            <div className="grid md:grid-cols-7">
              {calendarDays.map((day) => {
                const dayEvents = eventsByDay.get(dateKey(day)) ?? [];
                const isToday = sameDay(day, new Date());
                const outsideMonth = view === "mes" && day.getMonth() !== cursor.getMonth();
                return (
                  <article key={dateKey(day)} className={`min-h-36 border-b border-brand-petrol/8 p-3 transition-colors md:min-h-52 md:border-r ${outsideMonth ? "bg-brand-soft/25" : "bg-background hover:bg-brand-soft/15"}`}>
                    <div className="mb-3 flex items-center justify-between md:justify-end">
                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-gray md:hidden">{weekdays[day.getDay()]}</p>
                      <time dateTime={dateKey(day)} className={`flex size-8 items-center justify-center rounded-full text-sm font-bold ${isToday ? "bg-brand-red text-primary-foreground" : outsideMonth ? "text-brand-gray/50" : "text-brand-petrol"}`}>
                        {day.getDate()}
                      </time>
                    </div>
                    <div className="space-y-2">
                      {dayEvents.map((event) => <CalendarEvent key={event.slug} event={event} />)}
                    </div>
                  </article>
                );
              })}
            </div>

            {visibleEvents === 0 && (
              <div className="flex flex-col items-center border-t border-brand-petrol/10 bg-brand-soft/35 px-6 py-9 text-center">
                <span className="mb-4 h-1.5 w-14 rounded-full bg-brand-gold" aria-hidden="true" />
                <h3 className="text-lg text-brand-ink">Nenhuma atividade neste período</h3>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-brand-gray">A programação será atualizada conforme novas atividades forem confirmadas. Navegue pelos períodos ou escolha outra categoria.</p>
              </div>
            )}
          </section>
        </div>
      </main>

      <CompactFinalCTA
        title="Quer acompanhar mais de perto as atividades da Maggu?"
        text="Conheça os projetos, acompanhe a programação e descubra novas experiências, encontros e ações culturais."
        primary={{ label: "Conheça os Projetos", to: "/projetos" }}
        secondary={{ label: "Entre em Contato", to: "/contato" }}
        variant="agenda"
      />
    </>
  );
}