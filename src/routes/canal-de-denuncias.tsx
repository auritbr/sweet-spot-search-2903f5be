// Conteúdo institucional sujeito à validação final da Associação Maggu.
//
// PENDÊNCIAS INSTITUCIONAIS (não implementadas e não anunciadas ao público):
// responsáveis pelo recebimento; triagem; critérios de encaminhamento; conflitos de
// interesse; confidencialidade; guarda e descarte de dados; regras de acesso; prazos
// internos; possibilidade ou não de anonimato; eventual proteção contra retaliação;
// integração com Código de Ética e com a política de Privacidade.
// Enquanto o fluxo não for aprovado, o formulário permanece desativado (canalDenunciasAtivo = false),
// sem endpoint e sem envio de dados.
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  Ban,
  Coins,
  Mail,
  MessageSquareWarning,
  Scale,
  ScrollText,
  Shield,
  ShieldCheck,
  Users,
  UserX,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CompactFinalCTA } from "@/components/CompactFinalCTA";

export const Route = createFileRoute("/canal-de-denuncias")({
  head: () => ({
    meta: [
      { title: "Canal de Denúncias e Relato Ético | Associação Maggu" },
      { name: "description", content: "Conheça o Canal de Denúncias e Relato Ético da Associação Maggu e as orientações para encaminhamento responsável de situações relacionadas à integridade institucional." },
      { property: "og:title", content: "Canal de Denúncias e Relato Ético | Associação Maggu" },
      { property: "og:description", content: "Orientações para encaminhamento responsável de situações relacionadas à integridade institucional." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/canal-de-denuncias" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/canal-de-denuncias" }],
  }),
  component: CanalDenuncias,
});

/** Flag de configuração: só ativar após aprovação formal do fluxo operacional. */
const canalDenunciasAtivo = false;

const EMAIL = "comunicacaomktmaggu@gmail.com";

const relatos = [
  { icon: MessageSquareWarning, accent: "#ED1C24", title: "Assédio e condutas inadequadas", text: "Situações de assédio, constrangimento, intimidação ou comportamento incompatível com um ambiente respeitoso." },
  { icon: UserX, accent: "#FFB400", title: "Discriminação", text: "Relatos envolvendo tratamento discriminatório ou desrespeito relacionado a características pessoais ou sociais." },
  { icon: Coins, accent: "#08B9E6", title: "Uso indevido de recursos", text: "Situações envolvendo possível uso inadequado de recursos, bens, materiais ou estruturas da Associação." },
  { icon: Users, accent: "#00384C", title: "Conflitos de interesse", text: "Situações em que interesses pessoais possam interferir de maneira inadequada em decisões institucionais." },
  { icon: ScrollText, accent: "#ED1C24", title: "Irregularidades", text: "Possíveis descumprimentos de regras, procedimentos, obrigações ou compromissos institucionais." },
  { icon: AlertTriangle, accent: "#FFB400", title: "Outras situações", text: "Outros fatos que possam comprometer a ética, a integridade ou a confiança nas atividades da Associação." },
];

const etapas = [
  { n: "01", title: "Relato", text: "A pessoa encaminha as informações disponíveis sobre a situação." },
  { n: "02", title: "Recebimento", text: "O relato é recebido e registrado para análise." },
  { n: "03", title: "Avaliação", text: "As informações são avaliadas com responsabilidade e respeito às pessoas envolvidas." },
  { n: "04", title: "Encaminhamento", text: "Quando necessário, são adotadas providências compatíveis com a situação relatada." },
];

const principios = [
  { icon: Shield, title: "Respeito", text: "As pessoas envolvidas devem ser tratadas com dignidade durante todo o processo." },
  { icon: ShieldCheck, title: "Confidencialidade", text: "As informações serão tratadas com cuidado e acesso limitado conforme a necessidade." },
  { icon: Scale, title: "Imparcialidade", text: "Os relatos serão analisados sem julgamentos antecipados." },
  { icon: Ban, title: "Responsabilidade", text: "O canal deve ser utilizado de boa-fé e com informações verdadeiras." },
];

function Eyebrow({ children, color = "#08B9E6" }: { children: string; color?: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color }}>
      <span className="inline-block h-px w-6" style={{ backgroundColor: color }} aria-hidden="true" />
      {children}
    </span>
  );
}

function CanalDenuncias() {
  return (
    <main id="main">
      <PageHero
        title="Canal de Denúncias e Relato Ético"
        eyebrow="Integridade"
        subtitle="Um espaço seguro para comunicar situações que possam contrariar os princípios, as normas ou a integridade institucional da Associação Maggu."
        image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1920&q=80"
        accent="cyan"
        brush="#ED1C24"
        compact
        decoration="constellation"
      />

      {/* Apresentação */}
      <section className="relative overflow-hidden bg-white py-12 md:py-16" aria-labelledby="apresentacao-canal">
        <span className="pointer-events-none absolute -left-16 top-8 hidden size-44 rounded-full border-[18px] border-brand-cyan/10 md:block" aria-hidden="true" />
        <span className="pointer-events-none absolute -right-10 bottom-6 hidden size-24 rotate-45 border border-brand-gold/35 md:block" aria-hidden="true" />
        <div className="container-x relative max-w-3xl text-center">
          <Eyebrow>Canal institucional</Eyebrow>
          <h2 id="apresentacao-canal" className="mt-3 text-brand-ink" style={{ fontSize: "clamp(1.4rem, 2.1vw, 1.9rem)", lineHeight: 1.25, fontWeight: 700 }}>
            Um espaço para escutar com responsabilidade.
          </h2>
          <div className="mx-auto mt-5 max-w-2xl space-y-4 text-brand-gray" style={{ lineHeight: 1.75 }}>
            <p>A Associação Maggu valoriza relações baseadas em respeito, ética, responsabilidade e transparência.</p>
            <p>Este canal existe para que situações relacionadas à integridade institucional possam ser comunicadas de forma responsável, permitindo análise adequada e adoção das providências cabíveis.</p>
          </div>
        </div>
      </section>

      {/* O que pode ser relatado */}
      <section className="relative overflow-hidden bg-brand-soft/55 py-12 md:py-16" aria-labelledby="o-que-relatar">
        <span className="pointer-events-none absolute -right-20 -top-16 hidden size-56 rounded-full bg-brand-cyan/10 md:block" aria-hidden="true" />
        <div className="container-x relative max-w-5xl">
          <div className="text-center">
            <Eyebrow color="#ED1C24">O que relatar</Eyebrow>
            <h2 id="o-que-relatar" className="mt-3 text-brand-ink" style={{ fontSize: "clamp(1.35rem, 2vw, 1.8rem)", lineHeight: 1.25, fontWeight: 700 }}>
              Situações que podem ser encaminhadas pelo canal
            </h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatos.map(({ icon: Icon, accent, title, text }) => (
              <article key={title} className="relative overflow-hidden rounded-[18px] border border-brand-petrol/8 bg-white/70 p-5 shadow-[0_1px_2px_rgba(0,56,76,0.05)] backdrop-blur-md">
                <span className="pointer-events-none absolute -right-6 -top-6 size-16 rounded-full" style={{ backgroundColor: `${accent}14` }} aria-hidden="true" />
                <span className="pointer-events-none absolute bottom-3 right-4 size-2.5 rotate-45" style={{ backgroundColor: `${accent}40` }} aria-hidden="true" />
                <span className="relative flex size-9 items-center justify-center rounded-full" style={{ backgroundColor: `${accent}14`, color: accent }} aria-hidden="true">
                  <Icon className="size-[18px]" strokeWidth={2} />
                </span>
                <h3 className="relative mt-3 text-brand-ink" style={{ fontSize: "1rem", fontWeight: 700, lineHeight: 1.3 }}>{title}</h3>
                <p className="relative mt-2 text-[13.5px] text-brand-gray" style={{ lineHeight: 1.65 }}>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="relative overflow-hidden bg-white py-12 md:py-16" aria-labelledby="como-funciona">
        <span className="pointer-events-none absolute -left-14 bottom-4 hidden size-40 rounded-full border border-brand-red/15 md:block" aria-hidden="true" />
        <div className="container-x relative max-w-5xl">
          <div className="text-center">
            <Eyebrow color="#FFB400">Como funciona</Eyebrow>
            <h2 id="como-funciona" className="mt-3 text-brand-ink" style={{ fontSize: "clamp(1.35rem, 2vw, 1.8rem)", lineHeight: 1.25, fontWeight: 700 }}>
              Do relato à análise
            </h2>
          </div>
          <ol className="relative mt-9 grid gap-6 md:grid-cols-4 md:gap-5">
            <span className="pointer-events-none absolute left-0 right-0 top-4 hidden h-px bg-brand-petrol/12 md:block" aria-hidden="true" />
            {etapas.map(({ n, title, text }) => (
              <li key={n} className="relative pl-10 md:pl-0">
                <span className="absolute left-0 top-0 flex size-8 items-center justify-center rounded-full border border-brand-cyan/35 bg-white text-[11px] font-semibold text-brand-petrol md:static md:mb-3 md:flex" aria-hidden="true">{n}</span>
                <h3 className="text-brand-ink md:mt-0" style={{ fontSize: "1rem", fontWeight: 700 }}>{title}</h3>
                <p className="mt-1.5 text-[13.5px] text-brand-gray" style={{ lineHeight: 1.65 }}>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Princípios */}
      <section className="relative overflow-hidden bg-brand-petrol/[0.04] py-12 md:py-16" aria-labelledby="principios-canal">
        <span className="pointer-events-none absolute -right-16 top-10 hidden size-40 rounded-full border-[16px] border-brand-gold/10 md:block" aria-hidden="true" />
        <div className="container-x relative max-w-5xl">
          <div className="text-center">
            <Eyebrow color="#00384C">Compromissos</Eyebrow>
            <h2 id="principios-canal" className="mt-3 text-brand-ink" style={{ fontSize: "clamp(1.35rem, 2vw, 1.8rem)", lineHeight: 1.25, fontWeight: 700 }}>
              Como os relatos devem ser tratados
            </h2>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {principios.map(({ icon: Icon, title, text }) => (
              <div key={title} className="border-l-2 border-brand-cyan/35 pl-4">
                <Icon className="size-[18px] text-brand-petrol" aria-hidden="true" />
                <h3 className="mt-2 text-brand-ink" style={{ fontSize: "0.98rem", fontWeight: 700 }}>{title}</h3>
                <p className="mt-1.5 text-[13.5px] text-brand-gray" style={{ lineHeight: 1.65 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Uso responsável */}
      <section className="relative overflow-hidden bg-brand-soft/55 py-12 md:py-16" aria-labelledby="uso-responsavel">
        <span className="pointer-events-none absolute -left-12 top-1/2 hidden size-32 -translate-y-1/2 rotate-12 border border-brand-red/20 md:block" aria-hidden="true" />
        <div className="container-x relative max-w-3xl">
          <Eyebrow color="#ED1C24">Uso responsável</Eyebrow>
          <h2 id="uso-responsavel" className="mt-3 text-brand-ink" style={{ fontSize: "clamp(1.25rem, 1.9vw, 1.65rem)", lineHeight: 1.3, fontWeight: 700 }}>
            O canal não deve ser utilizado para acusações deliberadamente falsas.
          </h2>
          <div className="mt-4 space-y-3 text-brand-gray" style={{ lineHeight: 1.75 }}>
            <p>Relatos de boa-fé são importantes para fortalecer a integridade institucional.</p>
            <p>O canal não deve ser utilizado para ameaças, perseguições, acusações sabidamente falsas, assédio ou qualquer outra forma de utilização abusiva contra terceiros.</p>
          </div>
        </div>
      </section>

      {/* Encaminhamento e canal de integridade */}
      <section className="relative overflow-hidden bg-white py-12 md:py-16" aria-labelledby="envie-relato">
        <div className="container-x relative max-w-3xl">
          <h2 id="envie-relato" className="text-brand-ink" style={{ fontSize: "clamp(1.25rem, 1.9vw, 1.65rem)", lineHeight: 1.3, fontWeight: 700 }}>
            Envie seu relato
          </h2>
          <p className="mt-3 text-brand-gray" style={{ lineHeight: 1.75 }}>
            Forneça as informações que considerar necessárias para que a situação possa ser compreendida e analisada.
          </p>

          {!canalDenunciasAtivo && (
            <p className="mt-3 text-[13.5px] text-brand-gray" style={{ lineHeight: 1.7 }}>
              O formulário eletrônico será disponibilizado após a definição e a aprovação do fluxo operacional, das responsabilidades, das regras de confidencialidade e das medidas de proteção de dados. Até lá, os relatos podem ser encaminhados pelo canal institucional abaixo.
            </p>
          )}

          <div className="mt-6 flex flex-col gap-4 rounded-[18px] border border-brand-petrol/10 bg-brand-soft/45 p-5 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-petrol">Canal de Integridade</p>
              <p className="mt-1 truncate text-brand-ink" style={{ fontWeight: 600 }}>{EMAIL}</p>
            </div>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-brand-petrol/15 bg-brand-petrol px-5 py-2.5 text-[14px] font-semibold text-white shadow-sm transition hover:bg-brand-petrol/90"
            >
              <Mail className="size-4" aria-hidden="true" />
              Enviar e-mail
            </a>
          </div>
        </div>
      </section>

      {/* Privacidade */}
      <section className="relative overflow-hidden bg-white pb-14 md:pb-20" aria-labelledby="privacidade-canal">
        <span className="pointer-events-none absolute right-6 top-0 hidden size-20 rounded-full bg-brand-cyan/10 md:block" aria-hidden="true" />
        <div className="container-x relative max-w-3xl">
          <Eyebrow>Privacidade</Eyebrow>
          <h2 id="privacidade-canal" className="mt-3 text-brand-ink" style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.55rem)", lineHeight: 1.3, fontWeight: 700 }}>
            Proteção das informações também faz parte do processo.
          </h2>
          <p className="mt-3 text-brand-gray" style={{ lineHeight: 1.75 }}>
            Os dados pessoais eventualmente tratados por meio deste canal seguem as regras e os princípios previstos na Política de Privacidade e Proteção de Dados Pessoais da Associação Maggu.
          </p>
          <Link to="/privacidade" className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-brand-petrol hover:text-brand-red">
            Conheça a Política de Privacidade
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <CompactFinalCTA
        title="Integridade também se constrói com diálogo e responsabilidade."
        text="Conheça nossos canais institucionais ou fale com a Associação Maggu."
        primary={{ label: "Ver Transparência", to: "/transparencia" }}
        secondary={{ label: "Entre em contato", to: "/contato" }}
        variant="privacy"
      />
    </main>
  );
}
