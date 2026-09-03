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

export const agendaCategoryStyles: Record<AgendaCategory, {
  surface: string;
  text: string;
  accentText: string;
  accentColor: string;
}> = {
  Teatro: { surface: "bg-brand-red/8", text: "text-brand-red", accentText: "text-brand-red", accentColor: "var(--brand-red)" },
  Cinema: { surface: "bg-brand-cyan/10", text: "text-brand-petrol", accentText: "text-brand-cyan", accentColor: "var(--brand-cyan)" },
  Formação: { surface: "bg-brand-gold/12", text: "text-brand-petrol", accentText: "text-brand-gold", accentColor: "var(--brand-gold)" },
  Literatura: { surface: "bg-brand-lime/15", text: "text-brand-petrol", accentText: "text-brand-lime", accentColor: "var(--brand-lime)" },
  Esporte: { surface: "bg-brand-orange/10", text: "text-brand-petrol", accentText: "text-brand-orange", accentColor: "var(--brand-orange)" },
  Comunidade: { surface: "bg-brand-petrol/8", text: "text-brand-petrol", accentText: "text-brand-petrol", accentColor: "var(--brand-petrol)" },
  Sustentabilidade: { surface: "bg-brand-lime/15", text: "text-brand-petrol", accentText: "text-brand-lime", accentColor: "var(--brand-lime)" },
};

export const agendaStatusLabels: Record<AgendaStatus, string> = {
  "inscricoes-abertas": "Inscrições abertas",
  "ultimas-vagas": "Últimas vagas",
  "inscricoes-encerradas": "Inscrições encerradas",
  "em-breve": "Em breve",
};

/**
 * mock events for visual preview — replace with real client data later.
 *
 * Eventos fictícios de demonstração para visualizar a agenda funcionando.
 * Não são conteúdo definitivo da Associação Maggu: substituí-los por dados
 * reais validados. As datas foram posicionadas no período atual apenas para
 * que apareçam no calendário semanal por padrão.
 */
const mockEvents: AgendaEvent[] = [
  {
    slug: "oficina-teatro-iniciantes",
    title: "Oficina de Teatro para Iniciantes",
    date: "2026-09-01",
    time: "14h às 16h",
    location: "Teatro Escola Maggu",
    category: "Teatro",
    free: true,
    status: "inscricoes-abertas",
    summary: "Encontro introdutório com exercícios de corpo, voz e improvisação.",
    description:
      "Encontro introdutório com exercícios de corpo, voz e improvisação voltado a quem está começando no teatro.",
    accessibility: "Acesso livre, local com rampa e banheiro adaptado.",
  },
  {
    slug: "cineclube-maggu",
    title: "Sessão do Cineclube Maggu",
    date: "2026-09-02",
    time: "19h às 21h",
    location: "Teatro Escola Maggu",
    category: "Cinema",
    free: true,
    status: "inscricoes-abertas",
    summary: "Exibição comentada de filme com roda de conversa ao final.",
    description:
      "Exibição comentada de filme com roda de conversa ao final, promovendo o diálogo sobre audiovisual e território.",
  },
  {
    slug: "jardim-literario",
    title: "Encontro do Jardim Literário",
    date: "2026-09-03",
    time: "15h às 17h",
    location: "Espaço de Leitura Maggu",
    category: "Literatura",
    free: true,
    status: "ultimas-vagas",
    summary: "Mediação de leitura e circulação de livros com participantes da comunidade.",
    description:
      "Mediação de leitura e circulação de livros com participantes da comunidade, no espaço dedicado à literatura.",
  },
  {
    slug: "aula-aberta-formacao-cultural",
    title: "Aula Aberta de Formação Cultural",
    date: "2026-09-04",
    time: "09h às 11h",
    location: "Associação Maggu",
    category: "Formação",
    free: true,
    status: "inscricoes-abertas",
    summary: "Atividade formativa voltada a jovens e participantes das ações culturais.",
    description:
      "Atividade formativa voltada a jovens e participantes das ações culturais do Ecossistema Maggu.",
  },
  {
    slug: "vivencia-esportiva-comunidade",
    title: "Vivência Esportiva na Comunidade",
    date: "2026-09-04",
    time: "16h às 18h",
    location: "Quadra Comunitária",
    category: "Esporte",
    free: true,
    status: "inscricoes-abertas",
    summary: "Atividade coletiva com práticas esportivas e integração comunitária.",
    description:
      "Atividade coletiva com práticas esportivas e integração comunitária, aberta a todas as idades.",
  },
  {
    slug: "roda-conversa-familias",
    title: "Roda de Conversa com Famílias",
    date: "2026-09-05",
    time: "18h às 19h30",
    location: "Associação Maggu",
    category: "Comunidade",
    free: true,
    status: "inscricoes-abertas",
    summary: "Conversa sobre participação, território e acompanhamento das iniciativas.",
    description:
      "Conversa sobre participação, território e acompanhamento das iniciativas com as famílias envolvidas.",
  },
  {
    slug: "laboratorio-arte-sustentavel",
    title: "Laboratório de Arte Sustentável",
    date: "2026-09-06",
    time: "14h às 17h",
    location: "Espaço Multiuso Maggu",
    category: "Sustentabilidade",
    free: true,
    status: "inscricoes-abertas",
    summary: "Criação artística com materiais reaproveitáveis e reflexão ambiental.",
    description:
      "Criação artística com materiais reaproveitáveis e reflexão ambiental, articulando arte e sustentabilidade.",
  },
  {
    slug: "apresentacao-encerramento",
    title: "Apresentação de Encerramento",
    date: "2026-09-07",
    time: "19h30 às 21h",
    location: "Teatro Escola Maggu",
    category: "Teatro",
    free: true,
    status: "em-breve",
    summary: "Mostra pública de encerramento das atividades do ciclo formativo.",
    description:
      "Mostra pública de encerramento das atividades do ciclo formativo, aberta à comunidade e convidados.",
  },
];

/** Cadastre aqui as atividades reais. Vazio = estado vazio na Agenda e na Home.
 *  Por enquanto exibe os eventos mock acima para visualização. */
export const agendaEvents: AgendaEvent[] = mockEvents;

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
