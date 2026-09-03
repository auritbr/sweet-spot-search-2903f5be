import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroButton, PageHero, Section, SectionTitle } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { CompactFinalCTA } from "@/components/CompactFinalCTA";
import { ArcThick, HatchedCircle, QuarterCircle, Triangle } from "@/components/Shapes";

export const Route = createFileRoute("/ecossistema")({
  head: () => ({
    meta: [
      { title: "Ecossistema Maggu | Associação Maggu" },
      { name: "description", content: "Conheça os seis eixos que organizam a atuação integrada da Associação Maggu e algumas de suas iniciativas." },
      { property: "og:title", content: "Ecossistema Maggu | Associação Maggu" },
      { property: "og:description", content: "Conheça os seis eixos que organizam a atuação integrada da Associação Maggu e algumas de suas iniciativas." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/ecossistema" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/ecossistema" }],
  }),
  component: Ecossistema,
});

const axes = [
  {
    title: "Arte, Cultura & Formação",
    phrase: "Criar, experimentar, aprender e apresentar.",
    text: "Reúne teatro, formação artística, produções e experiências que aproximam pessoas da criação e da vida cultural.",
    band: "bg-brand-red",
    bandText: "text-primary-foreground",
    phraseText: "text-brand-red",
    accent: "#FFB400",
    layout: "shape",
  },
  {
    title: "Audiovisual & Comunicação",
    phrase: "Ver, ouvir, conversar e comunicar.",
    text: "Cinema, cineclubismo, rádio, audiovisual e meios digitais como espaços de repertório, expressão e participação.",
    band: "bg-brand-cyan",
    bandText: "text-brand-petrol",
    phraseText: "text-brand-petrol",
    accent: "#00384C",
    layout: "arc",
  },
  {
    title: "Livro, Leitura & Memória",
    phrase: "Ler, lembrar e pertencer.",
    text: "Livros, histórias, acervos e narrativas que fortalecem leitura, memória e vínculo com o território.",
    band: "bg-brand-gold",
    bandText: "text-brand-petrol",
    phraseText: "text-brand-petrol",
    accent: "#ED1C24",
    layout: "split",
  },
  {
    title: "Infância, Cidadania & Território",
    phrase: "Brincar, conviver e participar.",
    text: "Ações que reconhecem infância, convivência, cultura e participação comunitária como dimensões de direitos.",
    band: "bg-brand-orange",
    bandText: "text-brand-petrol",
    phraseText: "text-brand-petrol",
    accent: "#00384C",
    layout: "shape",
  },
  {
    title: "Esporte, Bem-estar & Inclusão",
    phrase: "Mover, aprender e conviver.",
    text: "O esporte e o lazer como caminhos de formação, saúde, disciplina, inclusão e desenvolvimento humano.",
    band: "bg-brand-petrol",
    bandText: "text-primary-foreground",
    phraseText: "text-brand-petrol",
    accent: "#08B9E6",
    layout: "split",
  },
  {
    title: "Sustentabilidade & Desenvolvimento",
    phrase: "Criar também é cuidar.",
    text: "Arte sustentável, ODS, reaproveitamento, colaboração, economia solidária e desenvolvimento local responsável.",
    band: "bg-brand-lime",
    bandText: "text-brand-petrol",
    phraseText: "text-brand-petrol",
    accent: "#FFB400",
    layout: "arc",
  },
] as const;

const allInitiatives = [
  {
    name: "Teatro Escola Maggu",
    axis: "Arte, Cultura & Formação",
    text: "Espaço de formação, criação e produção cultural no Benedito Bentes, com cursos, oficinas, ensaios, produções e outras experiências artísticas.",
    image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=1000&q=80",
    classes: "bg-brand-red text-primary-foreground",
    accent: "#FFB400",
    featured: true,
  },
  {
    name: "Bora Fazer Teatro?",
    axis: "Arte, Cultura & Formação",
    text: "Um percurso de formação teatral para quem quer começar, aprofundar experiências ou avançar para processos de montagem.",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1000&q=80",
    classes: "bg-brand-red text-primary-foreground",
    accent: "#FFB400",
    featured: false,
  },
  {
    name: "Cineclube Teatro Maggu",
    axis: "Audiovisual & Comunicação",
    text: "Sessões, mostras, debates e ações formativas que aproximam diferentes públicos do cinema.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1000&q=80",
    classes: "bg-brand-cyan text-brand-petrol",
    accent: "#00384C",
    featured: true,
  },
  {
    name: "Jardim Literário Maggu",
    axis: "Livro, Leitura & Memória",
    text: "Uma iniciativa dedicada à leitura, à circulação de livros e à construção de memória comunitária.",
    image: "https://images.unsplash.com/photo-1526243741027-444d633d7365?auto=format&fit=crop&w=1000&q=80",
    classes: "bg-brand-gold text-brand-petrol",
    accent: "#ED1C24",
    featured: true,
  },
  {
    name: "INFANCIAR — Quando a Rua Volta a Sonhar",
    axis: "Infância, Cidadania & Território",
    text: "Uma iniciativa que reconhece o brincar como direito e a rua como espaço de convivência, imaginação, cultura e pertencimento.",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1000&q=80",
    classes: "bg-brand-orange text-brand-petrol",
    accent: "#00384C",
    featured: true,
  },
  {
    name: "Esporte na Comunidade",
    axis: "Esporte, Bem-estar & Inclusão",
    text: "Práticas esportivas, formação cidadã e convivência como caminhos de desenvolvimento humano e participação comunitária.",
    image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1000&q=80",
    classes: "bg-brand-petrol text-primary-foreground",
    accent: "#08B9E6",
    featured: true,
  },
  {
    name: "Em Memória de Mim",
    axis: "Arte, Cultura & Formação",
    text: "Uma produção que reúne teatro, memória, fé, território e criação coletiva.",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1000&q=80",
    classes: "bg-brand-red text-primary-foreground",
    accent: "#FFB400",
    featured: false,
  },
  {
    name: "Educativa Rádio Web Maggu",
    axis: "Audiovisual & Comunicação",
    text: "Uma frente de comunicação comunitária e produção de conteúdo.",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1000&q=80",
    classes: "bg-brand-cyan text-brand-petrol",
    accent: "#00384C",
    featured: false,
  },
  {
    name: "Laboratório de Arte Sustentável",
    axis: "Sustentabilidade & Desenvolvimento",
    text: "Materiais reaproveitáveis transformados em experiências de criação, aprendizagem e consciência ambiental.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1000&q=80",
    classes: "bg-brand-lime text-brand-petrol",
    accent: "#FF7A00",
    featured: true,
  },
] as const;

const initiatives = allInitiatives.filter((initiative) => initiative.featured);

function Ecossistema() {
  return (
    <>
      <PageHero
        title="Ecossistema Maggu"
        eyebrow="Ecossistema"
        subtitle="A Associação Maggu atua por diferentes caminhos que se encontram. Seus eixos ajudam a compreender essa diversidade sem separar aquilo que, na prática, se conecta."
        image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1920&q=80"
        accent="cyan"
        brush="#FFB400"
        decoration="crescent"
      >
        <div className="flex flex-wrap gap-3">
          <HeroButton to="/projetos" tone="gold">Explorar Projetos</HeroButton>
          <HeroButton to="/agenda" tone="cyan">Ver Agenda</HeroButton>
        </div>
      </PageHero>

      <Section className="overflow-hidden bg-background">
        <div className="container-x grid items-center gap-10 lg:grid-cols-[1.02fr_.98fr] lg:gap-16">
          <div>
            <SectionTitle eyebrow="A lógica do Ecossistema" title="Muitas frentes. Um mesmo compromisso com o território." />
            <div className="max-w-2xl space-y-4 leading-relaxed text-brand-gray">
              <p>Teatro, cinema, leitura, comunicação, infância, esporte e sustentabilidade fazem parte de uma atuação que se constrói de forma integrada.</p>
              <p>Para tornar essa diversidade mais fácil de compreender, a Maggu organiza suas iniciativas em seis eixos. Eles identificam grandes áreas de atuação sem transformar cada uma delas em campos isolados.</p>
            </div>
          </div>
          <EcosystemDiagram />
        </div>
      </Section>

      <section id="eixos" className="scroll-mt-24 overflow-hidden bg-brand-soft py-12 md:py-20">
        <div className="container-x">
          <SectionTitle eyebrow="Seis eixos" title="Seis eixos para compreender uma atuação integrada." text="Cada eixo reúne iniciativas com características próprias e ajuda a compreender diferentes dimensões da atuação da Associação." align="center" />
          <div className="grid gap-6 md:grid-cols-2 lg:gap-7">
            {axes.map((axis, index) => (
              <article key={axis.title} className="group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-brand-petrol/10 bg-white/85 shadow-[0_10px_30px_-24px_rgba(0,56,76,0.55)] backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_18px_40px_-26px_rgba(0,56,76,0.6)]">
                <div className={`relative flex h-[104px] items-end overflow-hidden px-6 pb-4 md:h-[112px] md:px-7 ${axis.band} ${axis.bandText}`}>
                  {axis.layout === "arc" ? (
                    <ArcThick color={axis.accent} className="pointer-events-none absolute -right-6 -top-10 w-32 opacity-55" from={120} to={280} />
                  ) : axis.layout === "split" ? (
                    <HatchedCircle size={170} color={axis.accent} className="pointer-events-none absolute -right-12 -top-8 max-w-none opacity-25" />
                  ) : (
                    <>
                      <QuarterCircle corner="tr" color={axis.accent} className="pointer-events-none absolute -right-3 -top-3 w-24 opacity-60" />
                      <Triangle color={axis.accent} size={34} className="pointer-events-none absolute right-24 top-5 opacity-80" rotate={index * 12} />
                    </>
                  )}
                  <p className="relative text-[11px] font-bold uppercase tracking-[0.24em] opacity-85">Eixo {String(index + 1).padStart(2, "0")}</p>
                </div>
                <div className="flex flex-1 flex-col px-6 py-6 md:px-7 md:py-7">
                  <h2 className="text-[1.35rem] leading-tight text-brand-ink md:text-[1.55rem]">{axis.title}</h2>
                  <p className={`mt-2.5 text-sm font-semibold ${axis.phraseText}`}>{axis.phrase}</p>
                  <span className="mt-4 h-px w-12 rounded-full" style={{ backgroundColor: axis.accent }} aria-hidden="true" />
                  <p className="mt-4 text-[15px] leading-[1.75] text-brand-gray">{axis.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-background py-14 md:py-20">
        <ArcThick color="#FFB400" className="pointer-events-none absolute -left-10 top-10 w-24 opacity-30 md:w-28" from={210} to={340} />
        <span className="pointer-events-none absolute right-8 top-14 hidden size-2.5 rotate-45 bg-brand-red md:block" aria-hidden="true" />
        <HatchedCircle size={120} color="#08B9E6" className="pointer-events-none absolute -bottom-10 -right-8 opacity-15" />
        <div className="container-x relative">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">Conceitos transversais</p>
            <h2 className="mt-3 text-[1.75rem] leading-tight text-brand-ink md:text-[2.15rem]">Os eixos se conectam na prática.</h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-brand-gray">Uma mesma iniciativa pode reunir diferentes dimensões da atuação da Maggu.</p>
          </div>
          <div className="relative mx-auto mt-12 max-w-4xl">
            <svg className="pointer-events-none absolute inset-0 hidden h-full w-full md:block" viewBox="0 0 100 60" preserveAspectRatio="none" aria-hidden="true">
              <path d="M16 18 H50 H84 M16 42 H50 H84 M16 18 V42 M50 18 V42 M84 18 V42" stroke="#00384C" strokeOpacity="0.16" strokeWidth="0.4" fill="none" strokeDasharray="1.6 2.2" />
            </svg>
            <ul className="relative grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 md:gap-7">
              {[
                ["Formação", "#ED1C24"],
                ["Criação", "#FFB400"],
                ["Território", "#08B9E6"],
                ["Memória", "#FF7A00"],
                ["Comunicação", "#00384C"],
                ["Redes", "#B8DC4B"],
              ].map(([item, color]) => (
                <li
                  key={item}
                  className="group relative flex min-h-[112px] flex-col justify-between overflow-hidden rounded-2xl border border-brand-petrol/10 bg-white/70 p-5 shadow-[0_8px_24px_-22px_rgba(0,56,76,0.6)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <span className="absolute right-4 top-4 size-2.5 rounded-full opacity-80" style={{ backgroundColor: color }} aria-hidden="true" />
                  <span className="absolute -bottom-6 -left-6 size-16 rounded-full opacity-10" style={{ backgroundColor: color }} aria-hidden="true" />
                  <span className="relative h-px w-8 rounded-full" style={{ backgroundColor: color }} aria-hidden="true" />
                  <p className="relative text-base font-semibold text-brand-ink md:text-lg">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>


      <Section className="bg-background">
        <div className="container-x">
          <div className="mx-auto max-w-[800px] text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">Uma atuação integrada</p>
            <h2 className="mt-3 text-brand-ink" style={{ fontSize: "clamp(1.75rem, 2.7vw, 2.75rem)", lineHeight: 1.15, fontWeight: 700 }}>Organizar não significa separar.</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-brand-gray" style={{ fontSize: "clamp(1rem, 1.2vw, 1.15rem)", lineHeight: 1.7 }}>
              <p>Os eixos tornam mais fácil compreender a diversidade da Maggu, enquanto as conexões entre eles preservam aquilo que caracteriza sua atuação: diferentes linguagens, públicos e experiências compartilhando um mesmo território.</p>
              <p>É assim que teatro pode dialogar com memória, audiovisual pode se tornar formação, esporte pode fortalecer convivência e sustentabilidade pode se transformar em processo criativo.</p>
            </div>
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center font-bold text-brand-petrol" style={{ fontSize: "clamp(1.25rem, 2vw, 1.6rem)", lineHeight: 1.3 }}>
            “O território é o ponto de encontro entre essas diferentes formas de atuar.”
          </p>
        </div>
      </Section>

      <CompactFinalCTA
        title="O Ecossistema ganha forma no que a Maggu realiza."
        text="Conheça os projetos que dão vida aos diferentes eixos ou acompanhe a Agenda para descobrir o que está acontecendo agora."
        primary={{ label: "Conheça os Projetos", to: "/projetos" }}
        secondary={{ label: "Ver Agenda", to: "/agenda" }}
        variant="ecosystem"
      />
    </>
  );
}

const diagramNodes = [
  { label: "Arte & Formação", classes: "left-[3%] top-[12%] bg-brand-red text-primary-foreground" },
  { label: "Audiovisual", classes: "right-[3%] top-[12%] bg-brand-cyan text-brand-petrol" },
  { label: "Livro & Memória", classes: "left-0 bottom-[15%] bg-brand-gold text-brand-petrol" },
  { label: "Infância & Território", classes: "right-0 bottom-[15%] bg-brand-orange text-brand-petrol" },
  { label: "Esporte & Inclusão", classes: "left-[36%] top-0 bg-brand-petrol text-primary-foreground" },
  { label: "Sustentabilidade", classes: "left-[36%] bottom-0 bg-brand-lime text-brand-petrol" },
] as const;

function EcosystemDiagram() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]" role="img" aria-label="Seis áreas do Ecossistema Maggu conectadas entre si">
      <div className="absolute inset-[19%] rounded-full border-2 border-dashed border-brand-petrol/25" />
      {[0, 60, 120].map((rotation) => <div key={rotation} className="absolute left-1/2 top-1/2 h-px w-[70%] -translate-x-1/2 bg-brand-petrol/25" style={{ transform: `translateX(-50%) rotate(${rotation}deg)` }} />)}
      <div className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background px-3 text-center text-xs font-bold uppercase text-brand-petrol shadow-lg md:h-32 md:w-32 md:text-sm">Ecossistema<br />Maggu</div>
      {diagramNodes.map((node) => (
        <div key={node.label} className={`absolute z-20 flex h-[76px] w-[96px] items-center justify-center rounded-full border-[5px] border-background px-2 text-center text-[10px] font-bold leading-tight shadow-md sm:h-[88px] sm:w-[118px] sm:text-xs ${node.classes}`}>
          {node.label}
        </div>
      ))}
      <ArcThick color="#ED1C24" className="absolute -left-4 top-1/3 w-24 opacity-80" from={100} to={250} />
      <HatchedCircle size={88} color="#08B9E6" className="absolute -bottom-3 right-1/4 opacity-40" />
    </div>
  );
}