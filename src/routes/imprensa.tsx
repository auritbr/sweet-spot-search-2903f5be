import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Download, FileText, Mail, Phone } from "lucide-react";
import { CompactFinalCTA } from "@/components/CompactFinalCTA";
import { PageHero, HeroButton, Section, SectionTitle } from "@/components/PageHero";
import { ArcThick, HatchedCircle, QuarterCircle, Triangle } from "@/components/Shapes";
import logoAsset from "@/assets/logo-maggu.png";
import pontoCulturaAsset from "@/assets/ponto-de-cultura.png";
import {
  clipping,
  officialPhotos,
  pressDocs,
  pressFacts,
  pressKitExcludes,
  pressKitIncludes,
  releases,
  spokespeople,
} from "@/data/imprensa";

const title = "Sala de Imprensa — Associação Maggu";
const description =
  "Conteúdos institucionais para imprensa, pesquisadores e parceiros: release, ficha rápida, porta-vozes, fotos oficiais, kit de imprensa e contato.";

export const Route = createFileRoute("/imprensa")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/imprensa" }],
  }),
  component: Imprensa,
});

const accentBar: Record<string, string> = { cyan: "bg-brand-cyan", gold: "bg-brand-gold", red: "bg-brand-red" };
const accentHex: Record<string, string> = { cyan: "#08B9E6", gold: "#FFB400", red: "#ED1C24" };
const factColors = ["#08B9E6", "#FFB400", "#ED1C24", "#00689D", "#3F7E44", "#00384C"];
const docColors = ["#00689D", "#FD9D24", "#C5192D", "#3F7E44", "#08B9E6", "#00384C"];


function Imprensa() {
  return (
    <>
      <PageHero
        eyebrow="Imprensa"
        title="Sala de Imprensa"
        subtitle="Esta área reúne conteúdos institucionais destinados à imprensa, pesquisadores, parceiros e organizações que precisam conhecer, divulgar ou fazer referência à Associação Maggu."
        image="https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1920&q=80"
        accent="cyan"
        brush="#FFB400"
        decoration="constellation"
      >
        <HeroButton to="/contato" tone="gold">Baixar Kit de Imprensa</HeroButton>
        <HeroButton to="/contato" tone="red">Solicitar entrevista</HeroButton>

      </PageHero>

      {/* Sobre a Maggu */}
      <Section className="overflow-hidden bg-white">
        <QuarterCircle corner="br" color="#ED1C24" className="pointer-events-none absolute -left-2 top-10 w-12 opacity-70 md:left-6 md:w-16" />
        <HatchedCircle size={130} color="#08B9E6" className="pointer-events-none absolute -right-14 bottom-4 opacity-20 md:-right-8" />
        <div className="container-x">
          <div className="mx-auto max-w-[860px] text-center">
            <SectionTitle align="center" eyebrow="Release" title="Sobre a Maggu" text="Release institucional pronto para uso." />
            <div className="space-y-5 text-left text-[15px] leading-[1.8] text-brand-gray md:text-base">
              <p>
                A <strong className="font-semibold text-brand-petrol">Associação Sócio Cultural Maggu</strong>, conhecida publicamente como Associação Maggu, é uma organização da sociedade civil sediada no bairro Benedito Bentes, em Maceió (AL). Formalizada em 2025, a instituição dá continuidade a uma trajetória de atuação cultural e comunitária construída junto a moradores, artistas, educadores e parceiros do território.
              </p>
              <p>
                Sua missão é promover o acesso à cultura, à formação e à convivência comunitária, utilizando a arte como instrumento de transformação social. A Associação entende o território não apenas como endereço, mas como ponto de partida das suas escolhas: as ações nascem da escuta da comunidade e retornam a ela em forma de oficinas, apresentações, registros e encontros.
              </p>
              <p>
                A atuação se organiza em frentes integradas — arte, cultura e formação; audiovisual e comunicação; livro e memória; infância e território; esporte e inclusão; sustentabilidade e desenvolvimento — reunidas no Ecossistema Maggu. Entre as iniciativas está o Teatro Escola Maggu, espaço de formação, criação e produção cultural que recebe cursos, oficinas, ensaios e ações abertas ao público.
              </p>
              <p>
                A Associação mantém área pública de transparência, com documentos institucionais, políticas e canais de integridade, e sustenta compromissos ligados à agenda de desenvolvimento sustentável por meio da subárea ODS / Maggu 2030.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Maggu em resumo */}
      <Section className="overflow-hidden bg-brand-soft">
        <ArcThick color="#00384C" className="pointer-events-none absolute -left-10 top-8 w-20 opacity-25 md:left-4 md:w-24" from={210} to={330} />
        <span className="pointer-events-none absolute right-8 bottom-10 hidden size-20 rounded-full border border-brand-cyan/25 md:block" aria-hidden="true" />
        <div className="container-x">
          <SectionTitle align="center" eyebrow="Ficha rápida" title="Maggu em resumo" text="Dados institucionais para consulta e citação." />
          <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pressFacts.map((fact, i) => {
              const color = factColors[i % factColors.length];
              return (
                <div
                  key={fact.label}
                  className="group relative overflow-hidden rounded-[18px] border border-brand-petrol/8 bg-white/70 p-5 pl-6 shadow-[0_10px_28px_-26px_rgba(0,56,76,0.55)] ring-1 ring-inset ring-white/70 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5"
                >
                  <span className="absolute left-0 top-5 bottom-5 w-[3px] rounded-r-full" style={{ backgroundColor: color }} aria-hidden="true" />
                  <span
                    className="pointer-events-none absolute -right-7 -top-7 size-20 rounded-full opacity-[0.08] transition-opacity duration-300 group-hover:opacity-[0.15]"
                    style={{ backgroundColor: color }}
                    aria-hidden="true"
                  />
                  <p className="relative text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color }}>{fact.label}</p>
                  <p className="relative mt-2 text-[15px] leading-snug text-brand-ink">{fact.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Porta-vozes */}
      <Section className="overflow-hidden bg-white">
        <Triangle color="#FFB400" size={28} className="pointer-events-none absolute right-6 top-10 hidden opacity-80 md:block" rotate={14} />
        <span className="pointer-events-none absolute left-6 bottom-12 hidden size-2.5 rotate-45 bg-brand-cyan/50 md:block" aria-hidden="true" />
        <div className="container-x">
          <SectionTitle align="center" eyebrow="Entrevistas" title="Porta-vozes" text="Representantes institucionais disponíveis para entrevistas, com temas autorizados." />
          <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
            {spokespeople.map((person) => {
              const color = accentHex[person.accent] ?? "#08B9E6";
              return (
                <article
                  key={person.name}
                  className="group relative flex flex-col overflow-hidden rounded-[20px] border border-brand-petrol/8 bg-brand-soft/40 p-6 shadow-[0_14px_34px_-30px_rgba(0,56,76,0.55)] ring-1 ring-inset ring-white/70 transition duration-300 hover:-translate-y-0.5 md:p-7"
                >
                  <span className={`absolute left-6 top-0 h-[3px] w-12 rounded-b-full ${accentBar[person.accent]}`} aria-hidden="true" />
                  <span
                    className="pointer-events-none absolute -bottom-10 -right-10 size-28 rounded-full opacity-[0.08] transition-opacity duration-300 group-hover:opacity-[0.14]"
                    style={{ backgroundColor: color }}
                    aria-hidden="true"
                  />
                  <span
                    className="relative inline-flex size-11 items-center justify-center rounded-full text-[15px] font-bold"
                    style={{ backgroundColor: `${color}1f`, color }}
                    aria-hidden="true"
                  >
                    {person.name.charAt(0)}
                  </span>
                  <h3 className="relative mt-4 text-[1.2rem] font-bold leading-tight text-brand-ink md:text-[1.35rem]">{person.name}</h3>
                  <p className="relative mt-1.5 text-sm font-semibold" style={{ color }}>{person.role}</p>
                  <p className="relative mt-3 text-sm leading-[1.7] text-brand-gray">{person.bio}</p>
                  <span className="relative mt-5 block h-px w-full bg-brand-petrol/10" aria-hidden="true" />
                  <p className="relative mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-petrol/70">Pode falar sobre</p>
                  <ul className="relative mt-2.5 flex flex-wrap gap-2">
                    {person.topics.map((topic) => (
                      <li key={topic} className="rounded-full border border-brand-petrol/10 bg-white/80 px-3 py-1 text-xs text-brand-gray">{topic}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </Section>


      {/* Fotos oficiais */}
      <Section className="overflow-hidden bg-brand-soft">
        <div className="container-x">
          <SectionTitle align="center" eyebrow="Imagens" title="Fotos oficiais" text="As imagens oficiais podem ser utilizadas para fins editoriais e institucionais, com indicação de crédito e sem alteração indevida de contexto." />
          <ul className="mx-auto max-w-4xl space-y-3">
            {officialPhotos.map((photo) => (
              <li key={photo.title} className="flex flex-col gap-4 rounded-2xl border border-brand-petrol/10 bg-white/75 p-4 shadow-[0_14px_32px_-30px_rgba(0,56,76,0.6)] sm:flex-row sm:items-center">
                <img src={photo.image} alt={photo.title} loading="lazy" className="h-24 w-full shrink-0 rounded-xl object-cover sm:w-36" />
                <div className="min-w-0 flex-1">
                  <p className="text-[15px] font-semibold leading-snug text-brand-ink">{photo.title}</p>
                  <p className="mt-1 text-sm text-brand-gray">{photo.description}</p>
                  <p className="mt-1 text-xs text-brand-gray/80">{photo.credit}</p>
                </div>
                <a href={photo.url} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-2 rounded-full border border-brand-petrol/20 px-4 py-2 text-xs font-semibold text-brand-petrol transition hover:bg-brand-soft">
                  <Download className="size-3.5" aria-hidden="true" /> Visualizar
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Identidade institucional */}
      <Section className="overflow-hidden bg-white">
        <HatchedCircle size={120} color="#FFB400" className="pointer-events-none absolute -left-12 bottom-6 opacity-20" />
        <div className="container-x">
          <SectionTitle align="center" eyebrow="Marca" title="Identidade institucional" />
          <div className="mx-auto grid max-w-4xl items-center gap-6 overflow-hidden rounded-[22px] border border-brand-petrol/8 bg-brand-soft/40 p-6 shadow-[0_14px_34px_-30px_rgba(0,56,76,0.5)] ring-1 ring-inset ring-white/70 md:grid-cols-[240px_1fr] md:p-8">
            <div className="relative flex items-center justify-center rounded-[18px] bg-white p-6 ring-1 ring-brand-petrol/8">
              <span className="pointer-events-none absolute left-3 top-3 size-5 border-l border-t border-brand-cyan/40" aria-hidden="true" />
              <span className="pointer-events-none absolute bottom-3 right-3 size-5 border-b border-r border-brand-gold/50" aria-hidden="true" />
              <img src={logoAsset} alt="Associação Maggu" className="h-24 w-auto max-w-full object-contain" />
            </div>
            <div>
              <p className="text-[15px] leading-[1.75] text-brand-gray">
                Utilize sempre os arquivos oficiais disponibilizados pela Associação. Não recriar, distorcer ou alterar a identidade institucional.
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-brand-gray">
                {[
                  "Preserve as proporções originais e a área de respiro da marca.",
                  "Não aplique efeitos, sombras ou alterações de cor.",
                  "Utilize apenas versões oficiais fornecidas no Kit de Imprensa.",
                ].map((rule) => (
                  <li key={rule} className="flex gap-2.5">
                    <span className="mt-[7px] size-1.5 shrink-0 rotate-45 bg-brand-cyan" aria-hidden="true" />
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Reconhecimentos */}
      <Section className="overflow-hidden bg-brand-soft">
        <QuarterCircle corner="tl" color="#FFB400" className="pointer-events-none absolute -right-6 bottom-8 hidden w-14 opacity-30 md:block" />
        <div className="container-x">
          <SectionTitle align="center" eyebrow="Credenciais" title="Um reconhecimento que integra essa trajetória" text="Reconhecimentos públicos que podem ser citados em matérias e materiais editoriais." />
          <div className="mx-auto grid max-w-4xl items-center gap-6 overflow-hidden rounded-[22px] border border-brand-petrol/8 bg-white/75 p-6 shadow-[0_14px_34px_-30px_rgba(0,56,76,0.5)] ring-1 ring-inset ring-white/70 md:grid-cols-[200px_1fr] md:p-8">
            <div className="flex justify-center">
              <div className="flex size-40 items-center justify-center rounded-full bg-brand-soft/70 ring-1 ring-brand-petrol/8">
                <img src={pontoCulturaAsset} alt="Ponto de Cultura" className="h-28 w-28 object-contain" loading="lazy" />
              </div>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-gold">Certificação</p>
              <h3 className="mt-1.5 text-[1.2rem] font-bold text-brand-ink">Ponto de Cultura</h3>
              <p className="mt-2 text-[15px] leading-[1.75] text-brand-gray">
                A Associação Maggu é reconhecida como Ponto de Cultura, credencial que reafirma sua atuação continuada no acesso à cultura, na formação e na articulação comunitária no Benedito Bentes. Demais certificados e comprovações institucionais estão reunidos na área de Transparência.
              </p>
              <Link to="/transparencia" className="mt-4 inline-flex items-center gap-2 border-b border-brand-cyan/40 pb-1 text-sm font-semibold text-brand-petrol transition hover:text-brand-cyan">
                Ver Transparência <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </Section>


      {/* Releases */}
      <Section className="overflow-hidden bg-white">
        <span className="pointer-events-none absolute right-8 top-10 hidden size-16 rounded-full border border-brand-red/20 md:block" aria-hidden="true" />
        <div className="container-x">
          <SectionTitle align="center" eyebrow="Conteúdo" title="Releases" text="Materiais sobre projetos, eventos, resultados e pautas institucionais." />
          <ul className="mx-auto max-w-3xl divide-y divide-brand-petrol/10 overflow-hidden rounded-[20px] border border-brand-petrol/8 bg-brand-soft/35">
            {releases.map((item) => (
              <li key={item.title} className="group px-5 py-5 transition hover:bg-white/60 md:px-7 md:py-6">
                <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em]">
                  <span className="inline-flex items-center gap-1.5 text-brand-red">
                    <span className="size-1.5 rotate-45 bg-brand-red" aria-hidden="true" />
                    {item.category}
                  </span>
                  <span className="text-brand-gray/70">{item.date}</span>
                </div>
                <h3 className="mt-2 text-[1.05rem] font-bold leading-snug text-brand-ink md:text-[1.15rem]">{item.title}</h3>
                <p className="mt-2 text-sm leading-[1.7] text-brand-gray">{item.summary}</p>
                <Link to="/contato" className="mt-3 inline-flex w-fit items-center gap-2 border-b border-brand-cyan/40 pb-1 text-sm font-semibold text-brand-petrol transition hover:text-brand-cyan">
                  Ler release <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Clipping */}
      <Section id="clipping" className="overflow-hidden bg-brand-soft">
        <HatchedCircle size={110} color="#08B9E6" className="pointer-events-none absolute -left-12 top-8 opacity-[0.14]" />
        <div className="container-x">
          <SectionTitle align="center" eyebrow="Na mídia" title="Clipping" text="Matérias, entrevistas e reportagens selecionadas sobre a Associação Maggu e suas iniciativas." />
          <ul className="mx-auto max-w-3xl divide-y divide-brand-petrol/10 overflow-hidden rounded-[20px] border border-brand-petrol/8 bg-white/75 shadow-[0_14px_34px_-32px_rgba(0,56,76,0.5)]">
            {clipping.map((item) => (
              <li key={item.title} className="flex flex-wrap items-center gap-3 px-5 py-4 transition hover:bg-brand-soft/40">
                <span className="hidden h-9 w-[3px] shrink-0 rounded-full bg-brand-cyan/50 sm:block" aria-hidden="true" />
                <div className="min-w-0 flex-1">
                  <p className="text-[15px] font-semibold leading-snug text-brand-ink">{item.title}</p>
                  <p className="mt-1 text-xs text-brand-gray">{item.outlet} · {item.date}</p>
                </div>
                <a href={item.url} className="inline-flex shrink-0 items-center gap-2 rounded-full border border-brand-petrol/20 px-4 py-2 text-xs font-semibold text-brand-petrol transition hover:bg-brand-soft">
                  Acessar <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Documentos de apoio */}
      <Section className="overflow-hidden bg-white">
        <div className="container-x">
          <SectionTitle align="center" eyebrow="Materiais" title="Documentos de apoio" text="Materiais públicos disponíveis para consulta e download." />
          <ul className="mx-auto max-w-3xl space-y-3">
            {pressDocs.map((doc, i) => {
              const color = docColors[i % docColors.length];
              return (
                <li key={doc.name} className="flex flex-wrap items-center gap-3 rounded-[16px] border border-brand-petrol/8 bg-brand-soft/40 px-5 py-4 transition hover:border-brand-petrol/18">
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: `${color}1f`, color }}>
                    <FileText className="size-4" aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[15px] font-semibold text-brand-ink">{doc.name}</p>
                    <p className="text-xs" style={{ color }}>{doc.format}</p>
                  </div>
                  <a href={doc.url} className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-petrol px-4 py-2 text-xs font-semibold text-primary-foreground transition hover:bg-brand-red">
                    <Download className="size-3.5" aria-hidden="true" /> Acessar
                  </a>
                </li>
              );
            })}

          </ul>
        </div>
      </Section>

      {/* Kit de imprensa */}
      <Section id="kit" className="overflow-hidden bg-brand-soft">
        <QuarterCircle corner="tr" color="#08B9E6" className="pointer-events-none absolute -right-6 top-8 w-16 opacity-40" />
        <Triangle color="#ED1C24" size={22} className="pointer-events-none absolute left-8 bottom-10 hidden opacity-60 md:block" rotate={-12} />
        <div className="container-x">
          <SectionTitle align="center" eyebrow="Download" title="Kit de Imprensa" text="Conjunto de materiais oficiais reunidos para uso editorial e institucional." />
          <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-[20px] border border-brand-petrol/8 bg-white/80 p-6 shadow-[0_14px_34px_-32px_rgba(0,56,76,0.5)] ring-1 ring-inset ring-white/70">
              <span className="absolute left-6 top-0 h-[3px] w-12 rounded-b-full bg-brand-cyan" aria-hidden="true" />
              <span className="pointer-events-none absolute -bottom-10 -right-10 size-28 rounded-full bg-brand-cyan/10" aria-hidden="true" />
              <p className="relative text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-cyan">O que o kit contém</p>
              <ul className="relative mt-3 space-y-2 text-sm leading-relaxed text-brand-gray">
                {pressKitIncludes.map((item) => (
                  <li key={item} className="flex gap-2.5"><span className="mt-[7px] size-1.5 shrink-0 rotate-45 bg-brand-cyan" aria-hidden="true" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-[20px] border border-brand-red/12 bg-white/80 p-6 shadow-[0_14px_34px_-32px_rgba(0,56,76,0.5)] ring-1 ring-inset ring-white/70">
              <span className="absolute left-6 top-0 h-[3px] w-12 rounded-b-full bg-brand-red" aria-hidden="true" />
              <span className="pointer-events-none absolute -bottom-10 -right-10 size-28 rounded-full bg-brand-red/8" aria-hidden="true" />
              <p className="relative text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-red">O que não entra no kit</p>
              <ul className="relative mt-3 space-y-2 text-sm leading-relaxed text-brand-gray">
                {pressKitExcludes.map((item) => (
                  <li key={item} className="flex gap-2.5"><span className="mt-[7px] size-1.5 shrink-0 rotate-45 bg-brand-red/70" aria-hidden="true" />{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-7 flex justify-center">
            <Link to="/contato" className="inline-flex items-center gap-2 rounded-full bg-brand-petrol px-7 py-3 text-sm font-bold text-primary-foreground shadow-[0_16px_30px_-22px_rgba(0,56,76,0.9)] transition hover:-translate-y-0.5 hover:bg-brand-red">
              <Download className="size-4" aria-hidden="true" /> Baixar Kit de Imprensa
            </Link>
          </div>
        </div>
      </Section>

      {/* Contato de imprensa */}
      <Section className="overflow-hidden bg-white">
        <span className="pointer-events-none absolute left-6 top-10 hidden size-10 border-l border-t border-brand-cyan/35 md:block" aria-hidden="true" />
        <div className="container-x">
          <SectionTitle align="center" eyebrow="Fale conosco" title="Contato de imprensa" />
          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
            <a href="mailto:comunicacaomktmaggu@gmail.com" className="group flex items-center gap-4 rounded-[18px] border border-brand-petrol/8 bg-brand-soft/40 p-5 transition hover:-translate-y-0.5 hover:border-brand-cyan/40">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-cyan/15 text-brand-petrol"><Mail className="size-5" aria-hidden="true" /></span>
              <span className="min-w-0">
                <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-cyan">E-mail</span>
                <span className="block break-all text-sm text-brand-ink">comunicacaomktmaggu@gmail.com</span>
              </span>
            </a>
            <a href="tel:+5582998067374" className="group flex items-center gap-4 rounded-[18px] border border-brand-petrol/8 bg-brand-soft/40 p-5 transition hover:-translate-y-0.5 hover:border-brand-gold/50">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-gold/20 text-brand-petrol"><Phone className="size-5" aria-hidden="true" /></span>
              <span className="min-w-0">
                <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-gold">Telefone / WhatsApp</span>
                <span className="block text-sm text-brand-ink">(82) 99806-7374</span>
              </span>
            </a>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/contato" className="inline-flex rounded-full bg-brand-red px-6 py-2.5 text-sm font-bold text-primary-foreground transition hover:bg-brand-petrol">Solicitar entrevista</Link>
            <Link to="/contato" className="inline-flex rounded-full border-2 border-brand-petrol px-6 py-2.5 text-sm font-bold text-brand-petrol transition hover:bg-brand-soft">Entrar em contato</Link>
          </div>
        </div>
      </Section>


      {/* Conexões internas */}
      <Section className="overflow-hidden bg-brand-soft">
        <div className="container-x">
          <SectionTitle align="center" eyebrow="Conexões" title="Outras áreas públicas" text="Para aprofundar informações institucionais, conheça também outras áreas públicas da Associação Maggu." />
          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3">
            {[
              { label: "Quem Somos", to: "/quem-somos" as const, text: "Trajetória, missão e forma de atuar." },
              { label: "Impacto & Memória", to: "/galeria" as const, text: "Registros, acervo e memória das ações." },
              { label: "Transparência", to: "/transparencia" as const, text: "Documentos, políticas e prestação de contas." },
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
        title="Precisa de informações oficiais sobre a Maggu?"
        text="Acesse materiais institucionais, solicite entrevista ou entre em contato com a Associação."
        primary={{ label: "Baixar Kit de Imprensa", href: "#kit" }}
        secondary={{ label: "Solicitar entrevista", to: "/contato" }}
        variant="press"
      />
    </>
  );
}
