// ---------------------------------------------------------------------------
// Agenda — fonte única de dados das atividades do Ecossistema Maggu.
// Estrutura pronta para ser alimentada por um CMS.
// Nenhum evento demonstrativo é cadastrado aqui: só devem entrar atividades
// reais, com informações validadas pela Associação.
// ---------------------------------------------------------------------------

export type AgendaStatus =
  | "inscricoes-abertas"
  | "ultimas-vagas"
  | "inscricoes-encerradas"
  | "em-breve";

export type AgendaCategory =
  | "Teatro"
  | "Cinema"
  | "Formação"
  | "Literatura"
  | "Esporte"
  | "Comunidade"
  | "Sustentabilidade";

export type AgendaEvent = {
  slug: string;
  title: string;
  /** Data no formato ISO: 2026-09-14 */
  date: string;
  /** Horário livre: "19h" ou "19h às 21h" */
  time?: string;
  location?: string;
  category: AgendaCategory;
  /** true = gratuito. Quando pago, preencher `price`. */
  free?: boolean;
  price?: string;
  ageRange?: string;
  accessibility?: string;
  status?: AgendaStatus;
  image?: string;
  /** Nome da iniciativa relacionada, quando houver. */
  relatedProject?: string;
  summary?: string;
  description?: string;
  guidelines?: string[];
  registrationUrl?: string;
  contact?: string;
};

export const agendaCategories: AgendaCategory[] = [
  "Teatro",
  "Cinema",
  "Formação",
  "Literatura",
  "Esporte",
  "Comunidade",
  "Sustentabilidade",
];

export const agendaStatusLabels: Record<AgendaStatus, string> = {
  "inscricoes-abertas": "Inscrições abertas",
  "ultimas-vagas": "Últimas vagas",
  "inscricoes-encerradas": "Inscrições encerradas",
  "em-breve": "Em breve",
};

/** Cadastre aqui as atividades reais. Vazio = estado vazio na Agenda e na Home. */
export const agendaEvents: AgendaEvent[] = [];

const startOfToday = () => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
};

export function parseEventDate(value: string) {
  const [y, m, d] = value.split("-").map(Number);
  return new Date(y, (m ?? 1) - 1, d ?? 1);
}

export function sortByDate(events: AgendaEvent[]) {
  return [...events].sort(
    (a, b) => parseEventDate(a.date).getTime() - parseEventDate(b.date).getTime(),
  );
}

/** Próximas atividades (a partir de hoje), em ordem cronológica. */
export function upcomingEvents(limit?: number) {
  const today = startOfToday().getTime();
  const list = sortByDate(agendaEvents).filter(
    (e) => parseEventDate(e.date).getTime() >= today,
  );
  return typeof limit === "number" ? list.slice(0, limit) : list;
}

export function getEventBySlug(slug: string) {
  return agendaEvents.find((e) => e.slug === slug);
}

export function formatEventDate(value: string) {
  return parseEventDate(value).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function eventDayMonth(value: string) {
  const d = parseEventDate(value);
  return {
    day: String(d.getDate()).padStart(2, "0"),
    month: d.toLocaleDateString("pt-BR", { month: "short" }).replace(".", ""),
    weekday: d.toLocaleDateString("pt-BR", { weekday: "short" }).replace(".", ""),
  };
}

export type AgendaPeriod = "proximos" | "semana" | "mes";

export function isWithinPeriod(event: AgendaEvent, period: AgendaPeriod) {
  const date = parseEventDate(event.date);
  const today = startOfToday();
  if (date < today) return false;
  if (period === "proximos") return true;
  const limit = new Date(today);
  if (period === "semana") limit.setDate(limit.getDate() + 7);
  else limit.setMonth(limit.getMonth() + 1);
  return date <= limit;
}
