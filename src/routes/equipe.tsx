import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { HeroButton, PageHero, Section } from "@/components/PageHero";
import { HatchedCircle, ArcThick, BrushStroke, QuarterCircle, Triangle } from "@/components/Shapes";
import { team } from "@/data/site";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/equipe")({
  head: () => ({
    meta: [
      { title: "Nossa Equipe — Cena Viva" },
      { name: "description", content: "Conheça as pessoas que constroem o Ponto de Cultura Cena Viva." },
      { property: "og:title", content: "Nossa Equipe — Cena Viva" },
      { property: "og:description", content: "As pessoas por trás do nosso trabalho." },
      { property: "og:url", content: "/equipe" },
    ],
    links: [{ rel: "canonical", href: "/equipe" }],
  }),
  component: Equipe,
});

const palette = ["#08B9E6", "#ED1C24", "#FFB400", "#FF7A00", "#B8DC4B", "#00384C", "#ED1C24", "#08B9E6"];

const teamGroups = [
  {
    title: "Direção e produção",
    description: "Condução artística, produção e construção visual das iniciativas.",
    roles: ["Direção artística", "Produção executiva", "Cenografia"],
  },
  {
    title: "Formação e mediação",
    description: "Processos pedagógicos, práticas cênicas e relação com os públicos.",
    roles: ["Coordenação pedagógica", "Preparação corporal", "Preparação vocal", "Mediação cultural"],
  },
  {
    title: "Comunicação",
    description: "Conteúdo e circulação das ações da Associação Maggu.",
    roles: ["Comunicação"],
  },
] as const;

function Equipe() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <>
      <PageHero title="Nossa Equipe" eyebrow="Time" subtitle="Um time multidisciplinar que sustenta a formação, a criação e a circulação cultural." image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1920&q=80" accent="cyan" brush="#FFB400" compact decoration="quarters">
        <div className="flex flex-wrap gap-3">
          <HeroButton to="/quem-somos" tone="petrol">Conheça a Associação</HeroButton>
          <HeroButton to="/transparencia" tone="red">Ver Transparência</HeroButton>
        </div>
      </PageHero>

      <section className="relative overflow-hidden bg-white py-14 md:py-20">
        <div className="container-x">
          <div className="relative mx-auto max-w-[860px] text-center">
            <span className="pointer-events-none absolute -left-10 top-10 hidden h-10 w-10 rounded-full border border-brand-red/35 md:block" aria-hidden="true" />
            <span className="pointer-events-none absolute -left-5 top-5 hidden h-10 w-10 rounded-full border border-brand-cyan/45 md:block" aria-hidden="true" />
            <span className="pointer-events-none absolute -right-8 bottom-8 hidden h-1.5 w-12 rounded-full bg-brand-gold/80 md:block" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">Equipe</p>
            <h2 className="mt-3 text-[1.75rem] leading-tight text-brand-ink md:text-[2.25rem]">Quem faz a Maggu acontecer</h2>
            <div className="mx-auto mt-5 flex w-fit items-end gap-1.5" aria-hidden="true">
              <span className="h-2 w-2 rounded-full bg-brand-cyan" />
              <span className="h-3 w-3 rounded-full bg-brand-red" />
              <span className="h-2 w-2 rounded-full bg-brand-gold" />
            </div>
            <div className="mt-7 space-y-5 text-[15px] leading-[1.75] text-brand-gray md:text-base md:leading-[1.8]">
              <p>Por trás de cada projeto, oficina, apresentação e ação comunitária existe uma equipe comprometida com a transformação social por meio da arte, da cultura, da educação e do cuidado.</p>
              <p>Nossa atuação reúne pessoas com diferentes experiências, conhecimentos e formas de contribuir, que trabalham de maneira integrada na criação, organização e realização das iniciativas da Associação. Da gestão institucional aos processos formativos, artísticos e comunitários, cada pessoa participa da construção de um trabalho coletivo conectado ao território e às pessoas que fazem parte dele.</p>
            </div>
          </div>
        </div>
      </section>

      <Section className="bg-white overflow-hidden">
        <div className="container-x">
          <div className="space-y-14 md:space-y-16">
            {teamGroups.map((group, groupIndex) => {
              const members = team
                .map((member, index) => ({ member, index }))
                .filter(({ member }) => (group.roles as readonly string[]).includes(member.role));

              if (members.length === 0) return null;

              return (
                <section key={group.title} aria-labelledby={`team-group-${groupIndex}`}>
                  <div className="mb-7 flex items-end justify-between gap-5 border-b border-brand-petrol/10 pb-5 md:mb-8">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-red">Equipe</p>
                      <h2 id={`team-group-${groupIndex}`} className="mt-1.5 text-[1.5rem] leading-tight text-brand-ink md:text-[1.8rem]">{group.title}</h2>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-brand-gray">{group.description}</p>
                    </div>
                    <div className="hidden shrink-0 items-center gap-2 sm:flex" aria-hidden="true">
                      <span className="h-px w-9 bg-brand-petrol/25" />
                      <span className="size-3 rounded-full border-2 border-brand-cyan" />
                      <span className="size-2 rotate-45 bg-brand-gold" />
                      <span className="h-4 w-2 rounded-r-full border-y-2 border-r-2 border-brand-red" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {members.map(({ member: m, index: i }) => {
              const color = palette[i % palette.length];
              const textColor = color === "#FFB400" || color === "#B8DC4B" ? "#00384C" : "#ffffff";
              const isOpen = openIdx === i;
              return (
                <article
                  key={m.name}
                  className="group relative overflow-hidden aspect-[4/5] cursor-pointer rounded-2xl"
                  style={{ backgroundColor: color, color: textColor }}
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                >
                  {i % 3 === 0 && <ArcThick color={i % 2 ? "#FFB400" : "#08B9E6"} className="absolute -top-4 -right-4 w-24 opacity-80 z-10" from={200} to={340} />}
                  {i % 3 === 1 && <HatchedCircle size={90} color={i % 2 ? "#FFB400" : "#FFFFFF"} className="absolute -bottom-6 -left-6 opacity-30 z-10" />}
                  {i % 3 === 2 && <Triangle color={i % 2 ? "#FFB400" : "#ED1C24"} size={54} className="absolute top-4 right-4 z-10" rotate={20} />}

                  <img
                    src={m.image}
                    alt={m.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                    style={{ filter: "brightness(1.05) saturate(1.02)" }}
                  />
                  {/* subtle color wash */}
                  <div className="absolute inset-0 pointer-events-none" style={{ backgroundColor: color, opacity: 0.18 }} />
                  {/* bottom gradient only */}
                  <div className="absolute inset-x-0 bottom-0 p-4 z-10" style={{ background: `linear-gradient(to top, ${color} 0%, ${color}D9 45%, transparent 100%)`, paddingTop: "3rem" }}>
                    <h3 style={{ fontSize: "clamp(1rem, 1.3vw, 1.15rem)", lineHeight: 1.2, fontWeight: 700, color: textColor }}>{m.name}</h3>
                    <p className="text-xs opacity-95 mt-1">{m.role}</p>
                    {isOpen && <p className="mt-2 text-xs opacity-95">{m.bio}</p>}
                    <button
                      className="mt-2 inline-block text-[11px] uppercase tracking-widest underline underline-offset-4 opacity-0 group-hover:opacity-100 transition"
                      style={{ fontWeight: 600 }}
                      aria-expanded={isOpen}
                    >
                      {isOpen ? "Fechar" : "Conheça"}
                    </button>
                  </div>
                </article>
              );
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </Section>

      <section className="bg-white px-4 pb-12 pt-2 md:pb-16 md:pt-4">
        <div className="container-x">
          <div className="relative mx-auto flex min-h-[300px] max-w-5xl items-center overflow-hidden rounded-2xl bg-brand-petrol px-6 py-10 md:px-12">
            <ArcThick color="#08B9E6" className="pointer-events-none absolute -right-10 -top-12 w-28 opacity-25 md:right-5 md:w-36" from={190} to={320} />
            <Triangle color="#FFB400" size={38} className="pointer-events-none absolute bottom-7 right-8 opacity-85 md:right-14" rotate={18} />
            <span className="pointer-events-none absolute left-7 top-7 size-3 rotate-45 bg-brand-red md:left-10" aria-hidden="true" />
            <div className="relative max-w-3xl">
              <h2 className="text-[1.65rem] font-bold leading-tight text-primary-foreground md:text-[2.15rem]">Um trabalho coletivo que continua em movimento.</h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-primary-foreground/80 md:text-base">Conheça melhor a Associação, acompanhe nossos projetos ou entre em contato para saber mais sobre a atuação da Maggu.</p>
              <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row">
                <Button asChild size="sm" className="rounded-full border border-brand-petrol/15 bg-brand-cyan/85 px-5 font-semibold text-brand-petrol shadow-sm backdrop-blur-md hover:bg-brand-cyan">
                  <Link to="/quem-somos">Conheça a Associação</Link>
                </Button>
                <Button asChild size="sm" className="rounded-full border border-primary-foreground/20 bg-brand-red/85 px-5 font-semibold text-primary-foreground shadow-sm backdrop-blur-md hover:bg-brand-red">
                  <Link to="/contato">Entre em Contato</Link>
                </Button>
              </div>
            </div>
            <QuarterCircle corner="br" color="#FFB400" className="pointer-events-none absolute bottom-0 right-0 hidden w-16 opacity-30 md:block" />
          </div>
        </div>
      </section>
    </>
  );
}
