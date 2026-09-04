import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroButton, PageHero, Section, SectionTitle } from "@/components/PageHero";
import { CompactFinalCTA } from "@/components/CompactFinalCTA";
import { ArcThick, DiamondsCluster, HatchedCircle, QuarterCircle, Triangle } from "@/components/Shapes";
import culturePointSeal from "@/assets/logo-selo-ponto-de-cultura.png.asset.json";

export const Route = createFileRoute("/quem-somos/")({
  head: () => ({
    meta: [
      { title: "Quem Somos | Associação Maggu" },
      { name: "description", content: "Conheça a trajetória da Associação Maggu, sua relação com o Benedito Bentes, sua missão e a história cultural que deu origem ao Ecossistema Maggu." },
      { property: "og:title", content: "Quem Somos | Associação Maggu" },
      { property: "og:description", content: "Conheça a trajetória da Associação Maggu, sua relação com o Benedito Bentes, sua missão e a história cultural que deu origem ao Ecossistema Maggu." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/quem-somos" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/quem-somos" }],
  }),
  component: QuemSomos,
});

const milestones = [
  { year: "1999", title: "O início da trajetória", text: "Nasce a Companhia de Teatro Cortina, iniciando uma trajetória de criação, formação artística e mobilização cultural." },
  { year: "2001", title: "A presença cultural se amplia", text: "A Paixão de Cristo fortalece a relação com artistas, moradores e comunidade do Benedito Bentes." },
  { year: "2025", title: "A Associação é formalizada", text: "A trajetória construída ao longo dos anos ganha uma nova estrutura institucional com a formalização da Associação Sócio Cultural Maggu." },
  { year: "2025", title: "Ponto de Cultura", text: "O Teatro Escola Maggu é certificado como Ponto de Cultura." },
  { year: "2026", title: "Ecossistema Maggu", text: "A Associação fortalece sua governança e organiza suas diferentes iniciativas como parte do Ecossistema Maggu." },
];

const process = [
  { number: "01", title: "Escutar", text: "Compreender pessoas, contextos, histórias e possibilidades presentes no território." },
  { number: "02", title: "Formar", text: "Criar oportunidades de aprendizagem, experimentação e desenvolvimento por meio da cultura." },
  { number: "03", title: "Criar", text: "Transformar experiências, ideias e repertórios em processos, ações e formas de expressão." },
  { number: "04", title: "Circular", text: "Compartilhar produções, conhecimentos e experiências com diferentes públicos e espaços." },
  { number: "05", title: "Registrar", text: "Preservar processos e memórias para reconhecer trajetórias e fortalecer a continuidade." },
];

const processDetails = [
  { accent: "border-brand-red/30 text-brand-red", shape: "bg-brand-red" },
  { accent: "border-brand-gold/40 text-brand-gold", shape: "bg-brand-gold" },
  { accent: "border-brand-cyan/35 text-brand-cyan", shape: "bg-brand-cyan" },
  { accent: "border-brand-petrol/25 text-brand-petrol", shape: "bg-brand-petrol" },
  { accent: "border-brand-red/30 text-brand-red", shape: "bg-brand-red" },
] as const;

const directors = [
  { name: "Cristiano Alcides da Silva Paes", role: "Diretor Geral", tone: "bg-brand-petrol text-primary-foreground", accent: "bg-brand-cyan", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80" },
  { name: "Rafaela da Silva Leite", role: "Diretora Administrativo-Financeira", tone: "bg-brand-gold text-brand-petrol", accent: "bg-brand-red", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80" },
] as const;


function QuemSomos() {
  return (
    <>
      <PageHero
        title="Quem Somos"
        eyebrow="Quem Somos"
        subtitle="A Associação Maggu reúne uma trajetória cultural construída no Benedito Bentes e hoje conecta diferentes iniciativas de formação, criação e participação comunitária."
        image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1920&q=80"
        accent="cyan"
        brush="#FFB400"
        compact
        decoration="orbit"
      >
        <div className="flex flex-wrap gap-3">
          <HeroButton to="/ecossistema" tone="petrol">Conheça o Ecossistema</HeroButton>
          <HeroButton to="/transparencia" tone="red">Ver Transparência</HeroButton>
        </div>
      </PageHero>

      <Section className="relative overflow-hidden bg-white">
        <QuarterCircle corner="tl" color="#FFB400" className="pointer-events-none absolute -left-2 -top-2 w-20 opacity-75 md:w-32" />
        <HatchedCircle size={142} color="#ED1C24" className="pointer-events-none absolute -bottom-12 -right-12 opacity-25 md:-right-6" />
        <Triangle color="#08B9E6" size={34} className="pointer-events-none absolute right-[8%] top-10 hidden opacity-80 md:block" rotate={24} />
        <span className="pointer-events-none absolute bottom-12 left-[8%] hidden size-3 rotate-45 bg-brand-petrol md:block" aria-hidden="true" />
        <div className="container-x">
          <div className="relative mx-auto max-w-4xl text-center">
            <SectionTitle align="center" eyebrow="Associação Maggu" title="Uma trajetória cultural que ganhou forma institucional." />
            <div className="mx-auto max-w-3xl space-y-5 leading-relaxed text-brand-gray">
              <p>A Associação Sócio Cultural Maggu é uma organização da sociedade civil sediada no Benedito Bentes, em Maceió. Formalizada em 2025, organiza e amplia uma trajetória cultural construída ao longo de décadas por meio do teatro, da formação artística e da mobilização comunitária.</p>
              <p>Hoje, a Associação articula iniciativas de cultura, educação, audiovisual, leitura, memória, comunicação, infância, esporte, sustentabilidade e desenvolvimento comunitário.</p>
              <p className="font-medium text-brand-petrol">Cada frente possui identidade própria, mas todas compartilham o compromisso de ampliar o acesso à cultura, fortalecer vínculos, formar pessoas, preservar memórias e criar oportunidades.</p>
            </div>
            <div className="relative mx-auto mt-9 w-full max-w-md">
              <div className="aspect-[16/9] overflow-hidden rounded-[45%_45%_0.5rem_0.5rem]">
                <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=80" alt="Pessoas reunidas em atividade cultural" className="h-full w-full object-cover" loading="lazy" />
              </div>
              <span className="absolute -bottom-3 -left-4 h-1.5 w-20 rounded-full bg-brand-gold" aria-hidden="true" />
              <span className="absolute -right-3 top-7 size-5 rotate-45 border-2 border-brand-cyan" aria-hidden="true" />
            </div>
          </div>
        </div>
      </Section>

      <section id="nossa-historia" className="scroll-mt-24 overflow-hidden bg-brand-soft py-12 md:py-16 lg:py-20">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <SectionTitle align="center" eyebrow="Nossa história" title="Nossa história começou antes da Associação." />
            <p className="mx-auto -mt-3 max-w-2xl leading-relaxed text-brand-gray">A história da Maggu começa antes da atual estrutura institucional.</p>
          </div>

          <ol className="relative mt-12 grid gap-5 md:grid-cols-5 md:gap-0" aria-label="Linha do tempo da Associação Maggu">
            <span className="absolute left-[10%] right-[10%] top-5 hidden h-px bg-brand-petrol/20 md:block" aria-hidden="true" />
            {milestones.map((item, index) => (
              <li key={`${item.year}-${item.title}`} className="relative grid grid-cols-[auto_1fr] gap-4 md:block md:px-3 md:pt-12">
                <span className={`relative z-10 mt-1 size-3 rounded-full ring-4 ring-brand-soft md:absolute md:left-1/2 md:top-3 md:-translate-x-1/2 ${index % 3 === 0 ? "bg-brand-red" : index % 3 === 1 ? "bg-brand-gold" : "bg-brand-cyan"}`} aria-hidden="true" />
                <div className="border-t border-brand-petrol/15 pt-4 md:border-t-0 md:pt-0 md:text-center">
                  <p className="text-xl font-bold text-brand-red">{item.year}</p>
                  <h3 className="mt-2 text-base leading-snug text-brand-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-gray">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <span className="mx-auto mt-12 block h-px w-24 bg-brand-petrol/20" aria-hidden="true" />
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-12 md:py-16" aria-labelledby="ponto-cultura-title">
        <div className="container-x">
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[1.75rem] border border-brand-petrol/12 bg-white/70 px-6 py-7 shadow-[0_20px_44px_-32px_rgba(0,56,76,0.55)] ring-1 ring-inset ring-white/50 backdrop-blur-md md:px-9 md:py-8">
            <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-brand-petrol/15" aria-hidden="true" />
            <Triangle color="#08B9E6" size={22} className="pointer-events-none absolute -right-1 top-6 opacity-50" rotate={18} />
            <QuarterCircle corner="bl" color="#FFB400" className="pointer-events-none absolute -bottom-3 -left-3 w-14 opacity-40" />
            <div className="relative grid items-center gap-7 md:grid-cols-[minmax(0,1fr)_11rem] md:gap-9">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-red">Ponto de Cultura</p>
                <h2 id="ponto-cultura-title" className="mt-2 text-xl leading-snug text-brand-ink md:text-2xl">Um reconhecimento que integra essa trajetória.</h2>
                <p className="mt-3 text-sm leading-relaxed text-brand-gray">Em 2025, o Teatro Escola Maggu foi certificado como Ponto de Cultura, fortalecendo institucionalmente uma atuação cultural construída no território.</p>
              </div>
              <div className="relative mx-auto w-full max-w-40 text-center md:border-l md:border-brand-petrol/15 md:pl-7">
                <div className="mx-auto aspect-square w-full rounded-full bg-brand-soft/70 p-1.5 shadow-[0_14px_32px_-22px_rgba(0,56,76,0.55)] ring-1 ring-brand-petrol/10">
                  <img src={culturePointSeal.url} alt="Selo oficial Ponto de Cultura, certificado pelo Ministério da Cultura" className="h-full w-full object-contain" loading="lazy" />
                </div>
                <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-petrol">Certificação conquistada em 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-soft py-10 md:py-14">
        <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-brand-petrol/8" aria-hidden="true" />
        <span className="pointer-events-none absolute -right-20 top-10 hidden size-40 rounded-full border border-brand-gold/20 md:block" aria-hidden="true" />
        <div className="container-x relative grid items-center gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
          <div className="relative max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-red">Território</p>
            <h2 className="mt-3 text-2xl leading-tight text-brand-ink md:text-3xl">Benedito Bentes: território de onde partimos e com quem construímos.</h2>
            <span className="mt-5 block h-px w-16 bg-brand-petrol/25" aria-hidden="true" />
            <p className="mt-5 leading-relaxed text-brand-gray">O Benedito Bentes não é apenas o endereço da Associação. É território de relações, memórias, desafios, saberes e potências que ajudam a explicar por que e para quem o Ecossistema Maggu existe.</p>
            <p className="mt-4 leading-relaxed text-brand-gray">É parte da identidade da Maggu e do modo como a organização pensa cultura, acesso, memória, formação e participação.</p>
          </div>
          <div className="relative w-full">
            <div className="relative h-[220px] overflow-hidden rounded-tl-[2.5rem] rounded-br-[2.5rem] border border-brand-petrol/10 md:h-[280px] lg:h-[320px]">
              <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80" alt="Pessoas compartilhando uma atividade comunitária" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <span className="pointer-events-none absolute -bottom-2 left-8 size-4 rotate-45 bg-brand-red" aria-hidden="true" />
            <span className="pointer-events-none absolute -top-3 right-6 hidden h-8 w-16 border-t-2 border-brand-cyan/50 md:block" aria-hidden="true" />
          </div>
        </div>
      </section>



      <Section className="relative overflow-hidden bg-white">
        <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-brand-petrol/10" aria-hidden="true" />
        <div className="container-x">
          <SectionTitle align="center" eyebrow="O que nos orienta" title="Missão, visão e valores" text="Referências que orientam a atuação da Associação e conectam suas diferentes iniciativas." />
          <div className="grid gap-5 lg:grid-cols-3">
            <article className="relative flex min-h-[330px] flex-col justify-between overflow-hidden rounded-[1.75rem] border border-primary-foreground/25 bg-brand-petrol/95 p-7 shadow-[0_18px_40px_-28px_rgba(0,56,76,0.65)] ring-1 ring-inset ring-primary-foreground/10 backdrop-blur-sm md:p-8">
              <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-primary-foreground/25" aria-hidden="true" />
              <ArcThick color="#08B9E6" className="pointer-events-none absolute -right-10 -top-12 w-36 opacity-35" from={190} to={330} />
              <Triangle color="#FFB400" size={42} className="pointer-events-none absolute right-8 top-10 opacity-90" rotate={18} />
              <p className="relative text-xs font-bold uppercase tracking-[0.22em] text-brand-gold">Missão</p>
              <div className="relative">
                <span className="mb-6 block h-1.5 w-16 bg-brand-red" aria-hidden="true" />
                <h3 className="text-xl leading-snug text-primary-foreground md:text-2xl">Transformar a exclusão cultural em obra-prima, antes que a criatividade seja uma relíquia do passado. Incluir, inspirar, criar.</h3>
              </div>
            </article>

            <article className="relative flex min-h-[330px] flex-col justify-between overflow-hidden rounded-[1.75rem] border border-brand-petrol/15 bg-brand-cyan/90 p-7 shadow-[0_18px_40px_-28px_rgba(0,56,76,0.5)] ring-1 ring-inset ring-white/25 backdrop-blur-sm md:p-8">
              <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/45" aria-hidden="true" />
              <span className="pointer-events-none absolute -right-10 top-10 h-24 w-24 rounded-full border-[14px] border-brand-petrol/15" aria-hidden="true" />
              <span className="pointer-events-none absolute right-7 top-[5.3rem] h-px w-28 bg-brand-petrol/35" aria-hidden="true" />
              <p className="relative text-xs font-bold uppercase tracking-[0.22em] text-brand-petrol">Visão</p>
              <div className="relative">
                <HatchedCircle size={68} color="#00384C" className="mb-5 opacity-25" />
                <h3 className="text-2xl leading-snug text-brand-petrol">A arte como instrumento de transformação social.</h3>
              </div>
            </article>

            <article className="relative flex min-h-[330px] flex-col justify-between overflow-hidden rounded-[1.75rem] border border-brand-petrol/15 bg-brand-gold/90 p-7 shadow-[0_18px_40px_-28px_rgba(0,56,76,0.5)] ring-1 ring-inset ring-white/25 backdrop-blur-sm md:p-8">
              <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/50" aria-hidden="true" />
              <DiamondsCluster color="#ED1C24" className="pointer-events-none absolute right-7 top-7 opacity-60" size={50} />
              <QuarterCircle corner="bl" color="#00384C" className="pointer-events-none absolute bottom-0 left-0 w-20 opacity-15" />
              <p className="relative text-xs font-bold uppercase tracking-[0.22em] text-brand-red">Valores</p>
              <div className="relative">
                <div className="mb-6 flex items-center gap-2" aria-hidden="true">
                  <span className="size-5 rounded-full bg-brand-red" />
                  <span className="size-5 rounded-full bg-brand-cyan" />
                  <span className="size-5 rounded-full bg-brand-petrol" />
                </div>
                <h3 className="text-xl leading-snug text-brand-petrol md:text-2xl">É a partir dessa compreensão que a Associação desenvolve experiências de formação, criação, convivência, memória e participação cultural.</h3>
              </div>
            </article>
          </div>
        </div>
      </Section>


      <Section className="overflow-hidden bg-brand-soft">
        <div className="container-x">
          <SectionTitle align="center" eyebrow="Nossa forma de atuar" title="Da escuta ao registro" text="A atuação da Maggu conecta cinco movimentos que ajudam a orientar seus processos culturais." />
          <ol className="mx-auto grid max-w-6xl grid-cols-1 gap-x-3 gap-y-4 sm:grid-cols-2 lg:grid-cols-6">
            {process.map((item, index) => (
              <li
                key={item.title}
                className={`relative flex items-start gap-3 rounded-xl border border-brand-petrol/10 bg-white/55 px-4 py-4 shadow-[0_10px_26px_-24px_rgba(0,56,76,0.6)] ring-1 ring-inset ring-white/50 backdrop-blur-sm ${index < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}
              >
                <span className={`mt-0.5 text-xs font-bold tracking-[0.16em] ${processDetails[index].accent.split(" ")[1]}`}>{item.number}</span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base text-brand-ink md:text-lg">{item.title}</h3>
                    <span className={`size-1.5 rotate-45 ${processDetails[index].shape}`} aria-hidden="true" />
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-brand-gray">{item.text}</p>
                </div>
                {index !== process.length - 1 && (
                  <span className="pointer-events-none absolute -right-3 top-1/2 hidden h-px w-4 -translate-y-1/2 bg-brand-petrol/25 lg:block" aria-hidden="true" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </Section>


      <Section className="overflow-hidden bg-white">
        <div className="container-x mx-auto max-w-5xl text-center">
          <SectionTitle align="center" eyebrow="Organização institucional" title="Uma estrutura para dar continuidade ao que construímos." text="A formalização da Associação fortalece a definição de responsabilidades, a organização institucional e a continuidade das iniciativas desenvolvidas." />
          <h3 className="mt-2 text-xs font-bold uppercase tracking-[0.22em] text-brand-red">Diretoria</h3>
          <div className="mx-auto mt-7 grid max-w-3xl gap-5 sm:grid-cols-2">
            {directors.map((director, index) => (
              <article key={director.name} className={`relative flex min-h-0 flex-col overflow-hidden rounded-2xl text-left shadow-sm ring-1 ring-brand-petrol/10 ${director.tone}`}>
                <div className="relative aspect-[4/3] overflow-hidden bg-background/10">
                  <img src={director.photo} alt={`Retrato de ${director.name}`} className="h-full w-full object-cover" loading="lazy" />
                  {index === 0 ? <ArcThick color="#08B9E6" className="pointer-events-none absolute -right-8 -top-9 w-24 opacity-60" from={190} to={330} /> : <HatchedCircle size={86} color="#ED1C24" className="pointer-events-none absolute -right-5 -top-5 opacity-25" />}
                </div>
                <div className="relative p-5 md:p-6">
                  <span className={`absolute left-5 top-0 h-1 w-14 -translate-y-1/2 ${director.accent}`} aria-hidden="true" />
                  <h4 className="text-xl leading-tight text-inherit">{director.name}</h4>
                  <p className="mt-2 text-sm opacity-80">{director.role}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/equipe" className="inline-flex rounded-full bg-brand-petrol px-6 py-2.5 text-sm font-bold text-primary-foreground transition hover:bg-brand-red">Conheça nossa equipe</Link>
            <Link to="/transparencia" className="inline-flex rounded-full border-2 border-brand-petrol px-6 py-2.5 text-sm font-bold text-brand-petrol transition hover:bg-brand-soft">Acesse a Transparência</Link>
          </div>
        </div>
      </Section>

      <CompactFinalCTA
        title="Conheça como essa trajetória continua se desdobrando."
        text="A história da Maggu se conecta a diferentes frentes de atuação, projetos e experiências construídas junto ao território."
        primary={{ label: "Conheça o Ecossistema", to: "/ecossistema" }}
        secondary={{ label: "Ver Transparência", to: "/transparencia" }}
        variant="continuity"
      />
    </>
  );
}