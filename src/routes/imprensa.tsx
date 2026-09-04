import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Download, FileArchive, FileText, Mail, Phone } from "lucide-react";
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
const factColors = ["#08B9E6", "#FFB400", "#00689D", "#00384C", "#3F7E44", "#08B9E6"];
const docColors = ["#00384C", "#08B9E6", "#A47819"];


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
        <ArcThick color="#00384C" className="pointer-events-none absolute -left-12 top-10 w-20 opacity-[0.16] md:left-5 md:w-24" from={210} to={330} />
        <span className="pointer-events-none absolute right-10 bottom-12 hidden size-14 rounded-full border border-brand-cyan/20 md:block" aria-hidden="true" />
        <div className="container-x">
          <SectionTitle align="center" eyebrow="Ficha rápida" title="Maggu em resumo" text="Dados institucionais para consulta e citação." />
          <div className="mx-auto grid max-w-5xl gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            {pressFacts.map((fact, i) => {
              const color = factColors[i % factColors.length];
              return (
                <div
                  key={fact.label}
                  className={`group relative overflow-hidden rounded-[14px] border border-brand-petrol/10 bg-white/80 px-5 py-4.5 shadow-[0_10px_24px_-24px_rgba(0,56,76,0.6)] transition duration-300 hover:-translate-y-0.5 hover:border-brand-petrol/20 ${i > 3 ? "lg:col-span-2" : ""}`}
                >
                  {i % 4 === 0 && <span className="absolute right-4 top-4 size-4 rounded-full border" style={{ borderColor: color }} aria-hidden="true" />}
                  {i % 4 === 1 && <span className="absolute right-5 top-5 size-2 rotate-45" style={{ backgroundColor: color }} aria-hidden="true" />}
                  {i % 4 === 2 && <span className="absolute right-4 top-5 h-px w-8" style={{ backgroundColor: color }} aria-hidden="true" />}
                  {i % 4 === 3 && <span className="absolute -right-3 -top-3 size-8 rounded-bl-full" style={{ backgroundColor: color, opacity: 0.16 }} aria-hidden="true" />}
                  <p className="relative pr-10 text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color }}>{fact.label}</p>
                  <p className={`relative mt-2 max-w-2xl leading-snug text-brand-ink ${i < 2 ? "text-base font-semibold" : "text-sm"}`}>{fact.value}</p>
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
        <ArcThick color="#08B9E6" className="pointer-events-none absolute -left-14 top-14 w-24 opacity-[0.12]" from={205} to={330} />
        <HatchedCircle size={76} color="#FFB400" className="pointer-events-none absolute -right-8 bottom-8 opacity-[0.12]" />
        <div className="container-x">
          <SectionTitle align="center" eyebrow="Marca" title="Identidade institucional" />
          <div className="mx-auto grid max-w-[860px] overflow-hidden rounded-[16px] border border-brand-petrol/10 bg-brand-soft/30 shadow-[0_18px_42px_-36px_rgba(0,56,76,0.65)] md:grid-cols-[300px_1fr]">
            <div className="relative flex min-h-48 items-center justify-center overflow-hidden bg-brand-petrol px-7 py-7 md:min-h-56">
              <span className="pointer-events-none absolute -left-8 -top-9 size-24 rounded-full border-[10px] border-brand-cyan/20" aria-hidden="true" />
              <span className="pointer-events-none absolute -bottom-8 right-7 size-20 rounded-t-full border-x-[8px] border-t-[8px] border-brand-gold/20" aria-hidden="true" />
              <span className="pointer-events-none absolute right-7 top-7 size-2.5 rotate-45 bg-brand-gold" aria-hidden="true" />
              <span className="pointer-events-none absolute bottom-7 left-7 h-px w-11 bg-primary-foreground/35" aria-hidden="true" />
              <img src={logoAsset} alt="Associação Maggu" className="relative h-36 w-auto max-w-[90%] object-contain md:h-40" />
            </div>
            <div className="relative flex flex-col justify-center p-5 md:p-6">
              <span className="pointer-events-none absolute right-5 top-4 tracking-[0.32em] text-brand-cyan/35" aria-hidden="true">••••</span>
              <p className="max-w-xl pr-8 text-sm leading-[1.7] text-brand-gray">
                Utilize sempre os arquivos oficiais disponibilizados pela Associação. Não recriar, distorcer ou alterar a identidade institucional.
              </p>
              <ul className="mt-4 grid gap-2 border-t border-brand-petrol/10 pt-4 text-xs leading-relaxed text-brand-ink sm:grid-cols-3 md:grid-cols-1">
                {[
                  "Preserve as proporções originais e a área de respiro da marca.",
                  "Não aplique efeitos, sombras ou alterações de cor.",
                  "Utilize apenas versões oficiais fornecidas no Kit de Imprensa.",
                ].map((rule) => (
                  <li key={rule} className="relative grid grid-cols-[20px_1fr] items-start gap-2 overflow-hidden rounded-[8px] border border-brand-petrol/8 bg-white/80 px-3 py-2.5">
                    <span className="absolute right-0 top-0 size-5 rounded-bl-full bg-brand-gold/10" aria-hidden="true" />
                    <span className="mt-0.5 inline-flex size-5 items-center justify-center rounded-full bg-brand-cyan/10 text-[10px] font-bold text-brand-petrol" aria-hidden="true">✓</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Reconhecimentos */}
      <Section className="overflow-hidden bg-brand-soft">
        <QuarterCircle corner="tl" color="#FFB400" className="pointer-events-none absolute -right-5 bottom-10 hidden w-12 opacity-25 md:block" />
        <div className="container-x">
          <SectionTitle align="center" eyebrow="Credenciais" title="Um reconhecimento que integra essa trajetória" text="Reconhecimentos públicos que podem ser citados em matérias e materiais editoriais." />
          <div className="relative mx-auto grid max-w-4xl overflow-hidden rounded-[16px] border border-brand-petrol/10 bg-white/85 shadow-[0_14px_34px_-30px_rgba(0,56,76,0.55)] md:grid-cols-[1.45fr_0.55fr]">
            <span className="pointer-events-none absolute left-6 top-0 h-[3px] w-12 rounded-b-full bg-brand-gold" aria-hidden="true" />
            <div className="p-6 md:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-gold">Certificação</p>
              <h3 className="mt-1.5 text-lg font-bold text-brand-ink">Ponto de Cultura</h3>
              <p className="mt-2 max-w-2xl text-sm leading-[1.7] text-brand-gray">
                A Associação Maggu é reconhecida como Ponto de Cultura, credencial que reafirma sua atuação continuada no acesso à cultura, na formação e na articulação comunitária no Benedito Bentes. Demais certificados e comprovações institucionais estão reunidos na área de Transparência.
              </p>
              <Link to="/transparencia" className="mt-4 inline-flex items-center gap-2 border-b border-brand-cyan/40 pb-1 text-sm font-semibold text-brand-petrol transition hover:text-brand-cyan">
                Ver Transparência <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="relative flex min-h-44 flex-col items-center justify-center border-t border-brand-petrol/10 bg-brand-soft/40 px-6 py-5 md:border-l md:border-t-0">
              <span className="pointer-events-none absolute right-5 top-5 size-2 rotate-45 bg-brand-cyan/55" aria-hidden="true" />
              <span className="pointer-events-none absolute bottom-5 left-5 h-6 w-6 rounded-tl-full border-l border-t border-brand-gold/45" aria-hidden="true" />
              <img src={pontoCulturaAsset} alt="Ponto de Cultura" className="h-24 w-24 object-contain md:h-28 md:w-28" loading="lazy" />
              <p className="mt-2 text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-petrol/65">Certificação cultural</p>
            </div>
          </div>
        </div>
      </Section>


      {/* Releases */}
      <Section className="overflow-hidden bg-white">
        <span className="pointer-events-none absolute right-8 top-10 hidden size-16 rounded-full border border-brand-cyan/20 md:block" aria-hidden="true" />
        <span className="pointer-events-none absolute left-10 bottom-12 hidden size-2.5 rotate-45 bg-brand-gold/55 md:block" aria-hidden="true" />
        <div className="container-x">
          <SectionTitle align="center" eyebrow="Conteúdo" title="Releases" text="Materiais sobre projetos, eventos, resultados e pautas institucionais." />
          <ul className="mx-auto max-w-3xl divide-y divide-brand-petrol/10 overflow-hidden rounded-[20px] border border-brand-petrol/8 bg-brand-soft/35">
            {releases.map((item) => (
              <li key={item.title} className="group px-5 py-5 transition hover:bg-white/60 md:px-7 md:py-6">
                <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em]">
                  <span className="inline-flex items-center gap-1.5 text-brand-cyan">
                    <span className="size-1.5 rotate-45 bg-brand-cyan" aria-hidden="true" />
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
              <li key={item.title} className="relative flex flex-wrap items-center gap-4 px-5 py-5 transition hover:bg-brand-soft/40 md:px-7">
                <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-brand-cyan/25" aria-hidden="true"><span className="size-1.5 rotate-45 bg-brand-cyan/70" /></span>
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
        <QuarterCircle corner="tr" color="#08B9E6" className="pointer-events-none absolute -right-5 top-9 w-12 opacity-25" />
        <HatchedCircle size={72} color="#00384C" className="pointer-events-none absolute -left-7 bottom-10 opacity-[0.1]" />
        <div className="container-x">
          <SectionTitle align="center" eyebrow="Download" title="Kit de Imprensa" text="Conjunto de materiais oficiais reunidos para uso editorial e institucional." />
          <div className="mx-auto max-w-[900px] overflow-hidden rounded-[18px] border border-brand-petrol/10 bg-white/85 shadow-[0_18px_42px_-36px_rgba(0,56,76,0.65)]">
            <div className="grid md:grid-cols-[0.48fr_1.52fr]">
              <div className="relative flex min-h-44 flex-col justify-end overflow-hidden bg-brand-petrol p-6 text-primary-foreground md:min-h-full">
                <span className="absolute -right-7 -top-7 size-24 rounded-full border-[11px] border-brand-cyan/20" aria-hidden="true" />
                <span className="absolute left-7 top-8 h-20 w-14 rotate-[-7deg] rounded-[5px] border border-primary-foreground/25 bg-primary-foreground/8" aria-hidden="true" />
                <span className="absolute left-12 top-11 h-20 w-14 rotate-[7deg] rounded-[5px] border border-brand-gold/45 bg-brand-gold/10" aria-hidden="true" />
                <FileArchive className="relative size-8 text-brand-cyan" aria-hidden="true" />
                <p className="relative mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-gold">O que o kit contém</p>
              </div>
              <div className="p-5 md:p-6">
                <ul className="grid gap-2 sm:grid-cols-2">
                  {pressKitIncludes.map((item, i) => (
                    <li key={item} className="group flex min-h-12 items-center gap-3 rounded-[10px] border border-brand-petrol/8 bg-brand-soft/40 px-3.5 py-2.5 text-[13px] leading-snug text-brand-gray transition hover:border-brand-cyan/25 hover:bg-brand-soft/65">
                      <span className={`inline-flex size-7 shrink-0 items-center justify-center rounded-full ${i % 3 === 0 ? "bg-brand-cyan/12 text-brand-petrol" : i % 3 === 1 ? "bg-brand-gold/15 text-brand-petrol" : "bg-brand-red/10 text-brand-red"}`}><FileText className="size-3.5" aria-hidden="true" /></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/contato" className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-brand-petrol px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-[0_12px_24px_-20px_rgba(0,56,76,0.9)] transition hover:-translate-y-0.5 hover:bg-brand-red">
                  <Download className="size-4" aria-hidden="true" /> Baixar Kit de Imprensa
                </Link>
              </div>
            </div>
            <div className="grid gap-2.5 border-t border-brand-petrol/10 bg-brand-soft/35 px-5 py-4 md:grid-cols-[170px_1fr] md:items-start md:px-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-gray/75">O que não entra no kit</p>
              <ul className="flex flex-wrap gap-2 text-xs leading-relaxed text-brand-gray">
                {pressKitExcludes.map((item) => (
                  <li key={item} className="rounded-full border border-brand-petrol/10 bg-white/70 px-3 py-1.5">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Contato de imprensa */}
      <Section className="overflow-hidden bg-white">
        <ArcThick color="#FFB400" className="pointer-events-none absolute -right-14 bottom-6 w-24 opacity-[0.13]" from={205} to={325} />
        <span className="pointer-events-none absolute left-7 top-11 hidden size-10 border-l border-t border-brand-cyan/30 md:block" aria-hidden="true" />
        <div className="container-x">
          <SectionTitle align="center" eyebrow="Fale conosco" title="Contato de imprensa" />
          <div className="mx-auto grid max-w-[900px] overflow-hidden rounded-[18px] border border-brand-petrol/10 bg-brand-soft/30 shadow-[0_18px_42px_-36px_rgba(0,56,76,0.65)] md:grid-cols-[0.85fr_1.15fr]">
            <div className="relative flex min-h-48 flex-col justify-end overflow-hidden bg-brand-petrol p-6 text-primary-foreground md:p-7">
              <span className="absolute -left-7 -top-7 size-24 rounded-full border-[11px] border-brand-cyan/20" aria-hidden="true" />
              <span className="absolute right-7 top-8 size-3 rotate-45 bg-brand-gold" aria-hidden="true" />
              <span className="absolute bottom-7 right-7 h-px w-12 bg-primary-foreground/30" aria-hidden="true" />
              <p className="relative text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-gold">Assessoria e relacionamento</p>
              <div className="relative mt-5 flex flex-wrap gap-2">
                <Link to="/contato" className="inline-flex min-h-10 items-center rounded-full bg-brand-red px-4 py-2 text-xs font-bold text-primary-foreground transition hover:bg-brand-gold hover:text-brand-petrol">Solicitar entrevista</Link>
                <Link to="/contato" className="inline-flex min-h-10 items-center rounded-full border border-primary-foreground/40 px-4 py-2 text-xs font-bold text-primary-foreground transition hover:bg-primary-foreground/10">Entrar em contato</Link>
              </div>
            </div>
            <div className="grid gap-3 p-5 sm:grid-cols-2 md:p-6">
              <a href="mailto:comunicacaomktmaggu@gmail.com" className="group relative flex min-h-32 flex-col justify-between overflow-hidden rounded-[12px] border border-brand-petrol/10 bg-white/85 p-4 transition hover:-translate-y-0.5 hover:border-brand-cyan/35">
                <span className="pointer-events-none absolute right-0 top-0 size-8 rounded-bl-full bg-brand-cyan/10" aria-hidden="true" />
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-brand-cyan/10 text-brand-petrol"><Mail className="size-4" aria-hidden="true" /></span>
                <span className="mt-4 min-w-0"><span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-cyan">E-mail</span><span className="mt-1 block whitespace-nowrap text-[clamp(10px,2.65vw,12px)] leading-snug text-brand-ink group-hover:text-brand-petrol sm:text-[11px] lg:text-xs">comunicacaomktmaggu@gmail.com</span></span>
              </a>
              <a href="tel:+5582998067374" className="group relative flex min-h-32 flex-col justify-between overflow-hidden rounded-[12px] border border-brand-petrol/10 bg-white/85 p-4 transition hover:-translate-y-0.5 hover:border-brand-gold/45">
                <span className="pointer-events-none absolute right-4 top-4 size-2 rotate-45 bg-brand-gold" aria-hidden="true" />
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-brand-gold/15 text-brand-petrol"><Phone className="size-4" aria-hidden="true" /></span>
                <span className="mt-4"><span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-gold">Telefone / WhatsApp</span><span className="mt-1 block text-[13px] text-brand-ink group-hover:text-brand-petrol">(82) 99806-7374</span></span>
              </a>
            </div>
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
