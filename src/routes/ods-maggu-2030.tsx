import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Compass,
  FileText,
  Handshake,
  Layers,
  RefreshCw,
  Sprout,
  Target,
  Users,
} from "lucide-react";

import { CompactFinalCTA } from "@/components/CompactFinalCTA";
import { PageHero, HeroButton, Section, SectionTitle } from "@/components/PageHero";
import { ArcThick, DottedCurve, HatchedCircle, QuarterCircle } from "@/components/Shapes";

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

const accentHex: Record<string, string> = {
  cyan: "#08B9E6",
  gold: "#FFB400",
  red: "#ED1C24",
  petrol: "#00384C",
};

const commissionIcons = [Compass, Layers, Target, RefreshCw];
const journeyColors = ["#08B9E6", "#00689D", "#FD9D24", "#C5192D", "#3F7E44", "#00384C"];
const indicatorIcons = [Sprout, Layers, Users, Handshake, FileText];
const indicatorColors = ["#3F7E44", "#08B9E6", "#FD9D24", "#00689D", "#C5192D"];
const evidenceColors = ["#00689D", "#FD9D24", "#C5192D", "#3F7E44", "#08B9E6", "#00384C"];


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
        <HeroButton to="/transparencia" tone="cyan">Transparência</HeroButton>
        <HeroButton to="/ecossistema" tone="petrol">Ecossistema</HeroButton>

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
        <span className="pointer-events-none absolute right-8 top-14 hidden size-24 rounded-full border border-brand-cyan/25 md:block" aria-hidden="true" />
        <div className="container-x">
          <SectionTitle align="center" eyebrow="Governança" title="Comissão ODS" text="Instância permanente que articula a agenda de desenvolvimento sustentável com a atuação institucional." />
          <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2">
            {odsCommission.map((item, i) => {
              const Icon = commissionIcons[i % commissionIcons.length];
              const hex = accentHex[item.accent];
              return (
                <article
                  key={item.title}
                  className="group relative overflow-hidden rounded-[18px] border border-brand-petrol/8 bg-white/70 p-6 shadow-[0_10px_28px_-26px_rgba(0,56,76,0.55)] ring-1 ring-inset ring-white/70 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-brand-petrol/15"
                >
                  <span className="absolute left-6 top-0 h-[3px] w-10 rounded-b-full" style={{ backgroundColor: hex }} aria-hidden="true" />
                  <span
                    className="pointer-events-none absolute -bottom-8 -right-8 size-24 rounded-full opacity-[0.09] transition-opacity duration-300 group-hover:opacity-[0.16]"
                    style={{ backgroundColor: hex }}
                    aria-hidden="true"
                  />
                  <span
                    className="inline-flex size-9 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${hex}1f`, color: hex }}
                    aria-hidden="true"
                  >
                    <Icon className="size-4" />
                  </span>
                  <h3 className="relative mt-4 text-[1.05rem] font-bold leading-snug text-brand-ink">{item.title}</h3>
                  <p className="relative mt-2 text-sm leading-[1.7] text-brand-gray">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Jornada */}
      <Section className="overflow-hidden bg-white">
        <DottedCurve className="pointer-events-none absolute -left-6 top-8 hidden w-40 text-brand-cyan/30 md:block" aria-hidden="true" />
        <span className="pointer-events-none absolute right-10 bottom-10 hidden size-3 rotate-45 bg-brand-gold/50 md:block" aria-hidden="true" />
        <div className="container-x">
          <SectionTitle align="center" eyebrow="Percurso" title="Jornada institucional" text="Etapas que organizam a construção dos compromissos e o acompanhamento dos resultados." />

          {/* Desktop: linha horizontal com marcos alternados */}
          <div className="relative mx-auto hidden max-w-6xl px-4 lg:block">
            <span className="pointer-events-none absolute left-8 right-8 top-[190px] h-px bg-brand-petrol/14" aria-hidden="true" />
            <ol className="relative grid grid-cols-6">
              {odsJourney.map((item, i) => {
                const color = journeyColors[i % journeyColors.length];
                const up = i % 2 === 0;
                return (
                  <li key={item.step} className="relative h-[380px] px-3">
                    <div className={`absolute left-3 right-3 ${up ? "bottom-[218px]" : "top-[218px]"}`}>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color }}>{item.step}</p>
                      <h3 className="mt-2 text-[0.95rem] font-bold leading-snug text-brand-ink">{item.title}</h3>
                      <p className="mt-2 text-[13px] leading-[1.65] text-brand-gray">{item.text}</p>
                    </div>
                    <span
                      className={`absolute left-1/2 h-5 w-px -translate-x-1/2 ${up ? "top-[170px]" : "top-[191px]"}`}
                      style={{ backgroundColor: `${color}55` }}
                      aria-hidden="true"
                    />
                    <span
                      className="absolute left-1/2 top-[185px] size-[11px] -translate-x-1/2 rounded-full border-2 border-white shadow-[0_0_0_1px_rgba(0,56,76,0.12)]"
                      style={{ backgroundColor: color }}
                      aria-hidden="true"
                    />
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Mobile / tablet: timeline vertical */}
          <ol className="relative mx-auto max-w-2xl space-y-8 pl-9 lg:hidden">
            <span className="pointer-events-none absolute left-[6px] top-2 h-[calc(100%-1rem)] w-px bg-brand-petrol/15" aria-hidden="true" />
            {odsJourney.map((item, i) => {
              const color = journeyColors[i % journeyColors.length];
              return (
                <li key={item.step} className="relative min-h-20">
                  <span className="absolute -left-9 top-1 size-[11px] rounded-full border-2 border-white shadow-[0_0_0_1px_rgba(0,56,76,0.12)]" style={{ backgroundColor: color }} aria-hidden="true" />
                  <p className="text-[11px] font-semibold tracking-[0.18em]" style={{ color }}>{item.step}</p>
                  <h3 className="mt-1 text-[1rem] font-bold leading-snug text-brand-ink">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-[1.7] text-brand-gray">{item.text}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </Section>

      {/* Compromissos */}
      <Section id="compromissos" className="overflow-hidden bg-brand-soft">
        <div className="container-x">
          <SectionTitle align="center" eyebrow="Assumidos publicamente" title="Compromissos" text="Direções institucionais que orientam projetos, processos e parcerias." />
          <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {odsCommitments.map((item) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-[18px] border border-brand-petrol/8 bg-white/75 p-6 shadow-[0_10px_28px_-26px_rgba(0,56,76,0.55)] ring-1 ring-inset ring-white/70 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_-28px_rgba(0,56,76,0.7)]"
              >
                <span className="absolute left-6 top-0 h-[3px] w-10 rounded-b-full" style={{ backgroundColor: item.color }} aria-hidden="true" />
                <span
                  className="pointer-events-none absolute -right-6 -top-6 size-20 rotate-45 opacity-[0.07] transition-opacity duration-300 group-hover:opacity-[0.14]"
                  style={{ backgroundColor: item.color }}
                  aria-hidden="true"
                />
                <span className="block size-2 rounded-full" style={{ backgroundColor: item.color }} aria-hidden="true" />
                <h3 className="relative mt-4 text-[1.05rem] font-bold leading-snug text-brand-ink">{item.title}</h3>
                <p className="relative mt-2 text-sm leading-[1.7] text-brand-gray">{item.text}</p>
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
            {odsIndicators.map((item, i) => {
              const Icon = indicatorIcons[i % indicatorIcons.length];
              const color = indicatorColors[i % indicatorColors.length];
              return (
                <article key={item.label} className="group relative overflow-hidden rounded-[16px] border border-brand-petrol/8 bg-white p-5 shadow-[0_12px_30px_-28px_rgba(0,56,76,0.65)] transition duration-300 hover:-translate-y-0.5 hover:border-brand-petrol/15">
                  <span className="pointer-events-none absolute right-5 top-5 size-2 rotate-45 opacity-45" style={{ backgroundColor: color }} aria-hidden="true" />
                  <div className="flex items-start gap-4">
                    <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-brand-petrol/8 bg-brand-soft/60" style={{ color }} aria-hidden="true">
                      <Icon className="size-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-gray/65">Em consolidação</p>
                      <p className="text-[15px] font-semibold leading-snug text-brand-ink">{item.label}</p>
                      <span className="mt-3 block h-px w-8" style={{ backgroundColor: `${color}66` }} aria-hidden="true" />
                      <p className="mt-3 text-sm leading-[1.7] text-brand-gray">{item.note}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Section>


      {/* Documentos e evidências */}
      <Section id="evidencias" className="overflow-hidden bg-brand-soft">
        <QuarterCircle corner="tl" color="#00689D" className="pointer-events-none absolute -right-8 bottom-6 hidden w-16 opacity-25 md:block" />
        <span className="pointer-events-none absolute left-6 top-12 hidden h-10 w-10 border-l border-t border-brand-gold/40 md:block" aria-hidden="true" />
        <div className="container-x">
          <SectionTitle align="center" eyebrow="Publicidade" title="Documentos e evidências" text="Materiais que sustentam os compromissos assumidos e permitem acompanhamento público." />
          <ul className="mx-auto max-w-3xl space-y-3">
            {odsEvidence.map((doc, i) => {
              const color = evidenceColors[i % evidenceColors.length];
              return (
                <li key={doc.name} className="group flex flex-wrap items-center gap-3 rounded-[16px] border border-brand-petrol/8 bg-white/80 px-5 py-4 transition hover:border-brand-petrol/18">
                  <span
                    className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${color}1f`, color }}
                  >
                    <FileText className="size-4" aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[15px] font-semibold text-brand-ink">{doc.name}</p>
                    <p className="text-xs" style={{ color }}>{doc.category}</p>
                  </div>
                  <a href={doc.url} className="inline-flex shrink-0 items-center gap-2 rounded-full border border-brand-petrol/20 px-4 py-2 text-xs font-semibold text-brand-petrol transition hover:bg-brand-soft">
                    Visualizar <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Section>

      {/* Projetos relacionados */}
      <Section className="overflow-hidden bg-white">
        <div className="container-x">
          <SectionTitle align="center" eyebrow="Ecossistema" title="Projetos relacionados" text="Frentes de atuação que dialogam diretamente com os compromissos assumidos." />
          <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {odsRelatedProjects.map((item) => (
              <Link
                key={item.title}
                to="/ecossistema"
                className="group relative overflow-hidden rounded-[18px] border border-brand-petrol/8 bg-brand-soft/40 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-brand-petrol/18"
              >
                <span
                  className="pointer-events-none absolute -right-7 -top-7 size-20 rounded-full opacity-[0.10] transition-opacity duration-300 group-hover:opacity-[0.18]"
                  style={{ backgroundColor: item.accent }}
                  aria-hidden="true"
                />
                <span className="relative inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: item.accent }}>
                  <span className="size-1.5 rotate-45" style={{ backgroundColor: item.accent }} aria-hidden="true" />
                  Eixo
                </span>
                <p className="relative mt-2.5 text-[1rem] font-bold leading-snug text-brand-ink">{item.title}</p>
                <p className="relative mt-1.5 text-sm leading-[1.7] text-brand-gray">{item.text}</p>
                <span className="relative mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-petrol">Ver no Ecossistema <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span></span>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* Conexões internas */}
      <Section className="overflow-hidden bg-brand-soft">
        <HatchedCircle size={110} color="#3F7E44" className="pointer-events-none absolute -left-12 bottom-2 opacity-[0.14]" />
        <span className="pointer-events-none absolute right-10 top-8 hidden size-2.5 rotate-45 bg-brand-cyan/50 md:block" aria-hidden="true" />
        <span className="pointer-events-none absolute right-16 top-14 hidden size-2.5 rotate-45 bg-brand-gold/50 md:block" aria-hidden="true" />
        <div className="container-x">
          <SectionTitle align="center" eyebrow="Conexões" title="Áreas relacionadas" text="Os compromissos institucionais dialogam com a transparência, a atuação em rede e a memória pública da Associação." />
          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3">
            {[
              { label: "Transparência", to: "/transparencia" as const, text: "Documentos, políticas e prestação de contas." },
              { label: "Ecossistema", to: "/ecossistema" as const, text: "Eixos e frentes de atuação integradas." },
              { label: "Impacto & Memória", to: "/galeria" as const, text: "Registros e memória das ações realizadas." },
            ].map((item) => (
              <Link key={item.label} to={item.to} className="group rounded-[18px] border border-brand-petrol/8 bg-white/75 p-5 transition hover:-translate-y-0.5 hover:border-brand-petrol/18">
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
