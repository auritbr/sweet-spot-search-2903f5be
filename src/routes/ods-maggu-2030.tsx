import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, FileText } from "lucide-react";
import { CompactFinalCTA } from "@/components/CompactFinalCTA";
import { PageHero, HeroButton, Section, SectionTitle } from "@/components/PageHero";
import { ArcThick, HatchedCircle, QuarterCircle } from "@/components/Shapes";
import {
  odsCommission,
  odsCommitments,
  odsEvidence,
  odsIndicators,
  odsJourney,
  odsRelatedProjects,
} from "@/data/ods";

const title = "ODS / Maggu 2030 — Associação Maggu";
const description =
  "Compromissos, governança, indicadores e evidências da Associação Maggu na agenda dos Objetivos de Desenvolvimento Sustentável.";

export const Route = createFileRoute("/ods-maggu-2030")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/ods-maggu-2030" }],
  }),
  component: OdsMaggu2030,
});

const accentDot: Record<string, string> = {
  cyan: "bg-brand-cyan",
  gold: "bg-brand-gold",
  red: "bg-brand-red",
  petrol: "bg-brand-petrol",
};

function OdsMaggu2030() {
  return (
    <>
      <PageHero
        eyebrow="ODS / Maggu 2030"
        title="Uma jornada de compromisso."
        subtitle="Para a Associação Maggu, os Objetivos de Desenvolvimento Sustentável não devem aparecer apenas como símbolos. Eles precisam se traduzir em práticas, metas, indicadores, governança e melhoria contínua."
        image="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1920&q=80"
        accent="lime"
        brush="#08B9E6"
        decoration="crescent"
      >
        <HeroButton to="/ods-maggu-2030" tone="cyan">Conheça nossos compromissos</HeroButton>
        <HeroButton to="/ods-maggu-2030" tone="petrol">Ver evidências</HeroButton>
      </PageHero>

      {/* Abertura */}
      <Section className="overflow-hidden bg-white">
        <QuarterCircle corner="br" color="#B8DC4B" className="pointer-events-none absolute -left-2 top-10 w-12 opacity-70 md:left-6 md:w-16" />
        <HatchedCircle size={130} color="#08B9E6" className="pointer-events-none absolute -right-14 bottom-4 opacity-20 md:-right-8" />
        <div className="container-x">
          <div className="mx-auto max-w-[820px] text-center">
            <SectionTitle align="center" eyebrow="A jornada" title="ODS como prática, não como vitrine." />
            <div className="space-y-5 text-left text-[15px] leading-[1.8] text-brand-gray md:text-base">
              <p>
                A Associação mantém uma <strong className="font-semibold text-brand-petrol">Comissão ODS permanente</strong>, de caráter consultivo e estratégico, voltada à integração dos ODS às práticas, projetos e processos institucionais. A organização também integra a jornada do Selo ODS Brasil 2026, conforme seu estágio documental.
              </p>
              <p>
                Os Objetivos de Desenvolvimento Sustentável são adotados como referência para aprimorar a governança institucional, fortalecer compromissos assumidos publicamente, organizar metas possíveis, acompanhar indicadores e orientar decisões em projetos e processos internos.
              </p>
              <p>
                A escolha é por um caminho gradual e verificável: assumir menos compromissos, porém acompanhá-los com seriedade, publicando evidências e revisando o que precisa melhorar.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Comissão ODS */}
      <Section className="overflow-hidden bg-brand-soft">
        <ArcThick color="#00384C" className="pointer-events-none absolute -left-10 top-8 w-20 opacity-25 md:left-4 md:w-24" from={210} to={330} />
        <div className="container-x">
          <SectionTitle align="center" eyebrow="Governança" title="Comissão ODS" text="Instância permanente que articula a agenda de desenvolvimento sustentável com a atuação institucional." />
          <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2">
            {odsCommission.map((item) => (
              <article key={item.title} className="relative overflow-hidden rounded-2xl border border-brand-petrol/10 bg-white/75 p-6 shadow-[0_14px_32px_-30px_rgba(0,56,76,0.6)]">
                <span className={`absolute left-0 top-0 h-full w-1 ${accentDot[item.accent]}/70`} aria-hidden="true" />
                <h3 className="text-[1.1rem] font-bold leading-snug text-brand-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-[1.7] text-brand-gray">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* Jornada */}
      <Section className="overflow-hidden bg-white">
        <div className="container-x">
          <SectionTitle align="center" eyebrow="Percurso" title="Jornada institucional" text="Etapas que organizam a construção dos compromissos e o acompanhamento dos resultados." />
          <ol className="relative mx-auto max-w-4xl space-y-4 md:space-y-0">
            <span className="pointer-events-none absolute left-[19px] top-2 hidden h-[calc(100%-1rem)] w-px bg-brand-petrol/15 md:block" aria-hidden="true" />
            {odsJourney.map((item) => (
              <li key={item.step} className="relative flex gap-4 rounded-2xl border border-brand-petrol/10 bg-brand-soft/45 p-5 md:mb-4 md:border-transparent md:bg-transparent md:p-0 md:pb-6 md:pl-14">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-petrol text-xs font-bold text-primary-foreground md:absolute md:left-0 md:top-0">{item.step}</span>
                <div className="min-w-0">
                  <h3 className="text-[1.05rem] font-bold leading-snug text-brand-ink">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-[1.7] text-brand-gray">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Compromissos */}
      <Section id="compromissos" className="overflow-hidden bg-brand-soft">
        <div className="container-x">
          <SectionTitle align="center" eyebrow="Assumidos publicamente" title="Compromissos" text="Direções institucionais que orientam projetos, processos e parcerias." />
          <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {odsCommitments.map((item) => (
              <article key={item.title} className="relative overflow-hidden rounded-2xl border border-brand-petrol/10 bg-white/80 p-6 shadow-[0_14px_32px_-30px_rgba(0,56,76,0.6)]">
                <span className="absolute inset-x-0 top-0 h-1" style={{ backgroundColor: item.color }} aria-hidden="true" />
                <span className="mb-4 mt-1 block size-2.5 rotate-45" style={{ backgroundColor: item.color }} aria-hidden="true" />
                <h3 className="text-[1.05rem] font-bold leading-snug text-brand-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-[1.7] text-brand-gray">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* Indicadores */}
      <Section className="overflow-hidden bg-white">
        <div className="container-x">
          <SectionTitle align="center" eyebrow="Acompanhamento" title="Indicadores" text="Indicadores institucionais exemplificativos, em construção conforme o avanço da jornada." />
          <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {odsIndicators.map((item) => (
              <div key={item.label} className="rounded-2xl border border-brand-petrol/10 bg-brand-soft/45 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-red">{item.label}</p>
                <p className="mt-2 text-sm leading-[1.7] text-brand-gray">{item.note}</p>
                <p className="mt-3 text-xs text-brand-gray/70">Dados em consolidação institucional.</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Documentos e evidências */}
      <Section id="evidencias" className="overflow-hidden bg-brand-soft">
        <div className="container-x">
          <SectionTitle align="center" eyebrow="Publicidade" title="Documentos e evidências" text="Materiais que sustentam os compromissos assumidos e permitem acompanhamento público." />
          <ul className="mx-auto max-w-3xl space-y-3">
            {odsEvidence.map((doc) => (
              <li key={doc.name} className="flex flex-wrap items-center gap-3 rounded-2xl border border-brand-petrol/10 bg-white/80 px-5 py-4">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-petrol text-primary-foreground">
                  <FileText className="size-4" aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[15px] font-semibold text-brand-ink">{doc.name}</p>
                  <p className="text-xs text-brand-gray">{doc.category}</p>
                </div>
                <a href={doc.url} className="inline-flex shrink-0 items-center gap-2 rounded-full border border-brand-petrol/20 px-4 py-2 text-xs font-semibold text-brand-petrol transition hover:bg-brand-soft">
                  Visualizar <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Projetos relacionados */}
      <Section className="overflow-hidden bg-white">
        <div className="container-x">
          <SectionTitle align="center" eyebrow="Ecossistema" title="Projetos relacionados" text="Frentes de atuação que dialogam diretamente com os compromissos assumidos." />
          <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {odsRelatedProjects.map((item) => (
              <Link key={item.title} to="/ecossistema" className="group relative overflow-hidden rounded-2xl border border-brand-petrol/10 bg-brand-soft/45 p-5 transition hover:border-brand-cyan/40">
                <span className="absolute inset-x-0 top-0 h-1" style={{ backgroundColor: item.accent }} aria-hidden="true" />
                <p className="mt-1 text-[1rem] font-bold leading-snug text-brand-ink">{item.title}</p>
                <p className="mt-1.5 text-sm text-brand-gray">{item.text}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-petrol">Ver no Ecossistema <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span></span>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* Conexões internas */}
      <Section className="overflow-hidden bg-brand-soft">
        <div className="container-x">
          <SectionTitle align="center" eyebrow="Conexões" title="Áreas relacionadas" text="Os compromissos institucionais dialogam com a transparência, a atuação em rede e a memória pública da Associação." />
          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3">
            {[
              { label: "Transparência", to: "/transparencia" as const, text: "Documentos, políticas e prestação de contas." },
              { label: "Ecossistema", to: "/ecossistema" as const, text: "Eixos e frentes de atuação integradas." },
              { label: "Impacto & Memória", to: "/galeria" as const, text: "Registros e memória das ações realizadas." },
            ].map((item) => (
              <Link key={item.label} to={item.to} className="group rounded-2xl border border-brand-petrol/10 bg-white/75 p-5 transition hover:border-brand-cyan/40">
                <p className="text-[1.05rem] font-bold text-brand-ink">{item.label}</p>
                <p className="mt-1.5 text-sm text-brand-gray">{item.text}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-petrol">Acessar <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span></span>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <CompactFinalCTA
        title="Quer acompanhar essa jornada mais de perto?"
        text="Conheça nossos compromissos, acompanhe evidências e veja como a atuação da Maggu se conecta a uma agenda de desenvolvimento com responsabilidade."
        primary={{ label: "Conheça nossos compromissos", href: "#compromissos" }}
        secondary={{ label: "Ver evidências", href: "#evidencias" }}
        variant="ods"
      />
    </>
  );
}
