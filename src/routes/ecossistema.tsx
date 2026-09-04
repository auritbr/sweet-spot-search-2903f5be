import { createFileRoute } from "@tanstack/react-router";
import { HeroButton, PageHero, Section, SectionTitle } from "@/components/PageHero";
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

      <Section className="relative overflow-hidden bg-background pb-14 pt-14 md:pb-18 md:pt-18">
        <span className="pointer-events-none absolute left-0 top-0 h-px w-full bg-brand-petrol/8" aria-hidden="true" />
        <div className="container-x grid items-center gap-9 lg:grid-cols-[minmax(0,1fr)_minmax(360px,.82fr)] lg:gap-16">
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

      <section id="eixos" className="relative scroll-mt-24 overflow-hidden bg-brand-soft/45 py-14 md:py-20">
        <HatchedCircle size={190} color="#08B9E6" className="pointer-events-none absolute -right-20 top-8 opacity-10" />
        <span className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-brand-petrol/8" aria-hidden="true" />
        <div className="container-x relative">
          <SectionTitle eyebrow="Seis eixos" title="Seis eixos para compreender uma atuação integrada." text="Cada eixo reúne iniciativas com características próprias e ajuda a compreender diferentes dimensões da atuação da Associação." align="center" />
          <div className="relative mx-auto mt-10 max-w-6xl space-y-5 md:mt-12 md:space-y-7">
            <span className="pointer-events-none absolute bottom-8 left-1/2 top-8 hidden w-px -translate-x-1/2 bg-brand-petrol/10 md:block" aria-hidden="true" />
            {axes.map((axis, index) => (
              <div key={axis.title} className={`relative flex ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
                <span className={`pointer-events-none absolute left-1/2 top-1/2 z-10 hidden size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brand-soft ${axis.band} md:block`} aria-hidden="true" />
                <article className="group relative grid w-full grid-cols-[5.5rem_minmax(0,1fr)] overflow-hidden rounded-2xl border border-brand-petrol/10 bg-background/85 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-brand-petrol/20 hover:shadow-md sm:grid-cols-[7.5rem_minmax(0,1fr)] md:w-[62%]">
                <div className={`relative flex min-h-full items-end overflow-hidden px-3 pb-4 sm:px-4 ${axis.band}`}>
                  {axis.layout === "arc" ? (
                    <ArcThick color={axis.accent} className="pointer-events-none absolute -right-8 -top-8 w-28 opacity-55" from={120} to={280} />
                  ) : axis.layout === "split" ? (
                    <HatchedCircle size={150} color={axis.accent} className="pointer-events-none absolute -right-16 -top-8 max-w-none opacity-25" />
                  ) : (
                    <>
                      <QuarterCircle corner="tr" color={axis.accent} className="pointer-events-none absolute -right-3 -top-3 w-20 opacity-55" />
                      <Triangle color={axis.accent} size={28} className="pointer-events-none absolute left-5 top-5 opacity-75" rotate={index * 12} />
                    </>
                  )}
                  <p className={`relative text-[10px] font-bold uppercase tracking-[0.18em] ${axis.bandText}`}>Eixo {String(index + 1).padStart(2, "0")}</p>
                </div>
                <div className="flex min-w-0 flex-col justify-center px-4 py-5 sm:px-6 md:px-7">
                  <div className="flex min-w-0 items-start gap-3">
                    <span className={`mt-2 size-2 shrink-0 rotate-45 ${axis.band}`} aria-hidden="true" />
                    <h2 className="text-[1.05rem] leading-tight text-brand-ink sm:text-[1.25rem] md:text-[1.4rem]">{axis.title}</h2>
                  </div>
                  <p className={`mt-2.5 text-sm font-semibold ${axis.phraseText}`}>{axis.phrase}</p>
                  <p className="mt-3 text-[14px] leading-[1.65] text-brand-gray">{axis.text}</p>
                </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-soft py-12 md:py-16">
        <ArcThick color="#FFB400" className="pointer-events-none absolute -left-10 top-10 w-20 opacity-25 md:w-24" from={210} to={340} />
        <span className="pointer-events-none absolute right-8 top-14 hidden size-2 rotate-45 bg-brand-red md:block" aria-hidden="true" />
        <div className="container-x relative">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">Conceitos transversais</p>
            <h2 className="mt-3 text-[1.75rem] leading-tight text-brand-ink md:text-[2.15rem]">Os eixos se conectam na prática.</h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-brand-gray">Uma mesma iniciativa pode reunir diferentes dimensões da atuação da Maggu.</p>
          </div>
          <div className="relative mx-auto mt-8 max-w-4xl rounded-xl border border-brand-petrol/8 bg-background/65 p-3 shadow-sm backdrop-blur-sm sm:p-4 md:p-5">
            <svg className="pointer-events-none absolute inset-0 hidden h-full w-full md:block" viewBox="0 0 100 60" preserveAspectRatio="none" aria-hidden="true">
              <path d="M17 18 H50 H83 M17 42 H50 H83 M17 18 L50 42 M50 18 V42 M83 18 L50 42" stroke="#00384C" strokeOpacity="0.14" strokeWidth="0.3" fill="none" />
              <circle cx="50" cy="30" r="1" fill="#FFB400" fillOpacity="0.8" />
            </svg>
            <ul className="relative grid grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-3 md:gap-4">
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
                  className="group relative flex min-h-[60px] items-center justify-center overflow-hidden rounded-lg border border-brand-petrol/10 bg-background/85 px-3 py-3.5 text-center shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-brand-petrol/20 hover:shadow-md"
                >
                  <span className="absolute right-4 top-4 size-2.5 rotate-45 opacity-80" style={{ backgroundColor: color }} aria-hidden="true" />
                   <span className="absolute -right-6 -top-6 size-14 rounded-full border opacity-20" style={{ borderColor: color }} aria-hidden="true" />
                  <p className="relative text-sm font-semibold text-brand-ink md:text-base">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>


      <Section className="relative overflow-hidden border-b border-brand-petrol/8 bg-background pb-14 pt-14 md:pb-18 md:pt-18">
        <Triangle color="#FFB400" size={34} className="pointer-events-none absolute left-[8%] top-14 hidden opacity-45 md:block" rotate={18} />
        <HatchedCircle size={92} color="#08B9E6" className="pointer-events-none absolute -right-8 bottom-8 opacity-15" />
        <div className="container-x">
          <div className="relative mx-auto max-w-3xl text-center">
            <span className="mx-auto mb-5 block h-px w-12 bg-brand-red" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">Uma atuação integrada</p>
            <h2 className="mt-3 text-brand-ink" style={{ fontSize: "clamp(1.7rem, 2.5vw, 2.35rem)", lineHeight: 1.16, fontWeight: 700 }}>Organizar não significa separar.</h2>
            <div className="mx-auto mt-6 grid max-w-2xl gap-4 text-left text-sm leading-relaxed text-brand-gray md:grid-cols-2 md:gap-8 md:text-[15px]">
              <p>Os eixos tornam mais fácil compreender a diversidade da Maggu, enquanto as conexões entre eles preservam aquilo que caracteriza sua atuação: diferentes linguagens, públicos e experiências compartilhando um mesmo território.</p>
              <p>É assim que teatro pode dialogar com memória, audiovisual pode se tornar formação, esporte pode fortalecer convivência e sustentabilidade pode se transformar em processo criativo.</p>
            </div>
            <p className="mx-auto mt-7 max-w-xl border-t border-brand-petrol/10 pt-5 text-base font-semibold leading-relaxed text-brand-ink">O território é o ponto de encontro entre essas diferentes formas de atuar.</p>
          </div>
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
  { label: "Arte & Formação", color: "#ED1C24" },
  { label: "Audiovisual", color: "#08B9E6" },
  { label: "Livro & Memória", color: "#FFB400" },
  { label: "Infância & Território", color: "#FF7A00" },
  { label: "Esporte & Inclusão", color: "#00384C" },
  { label: "Sustentabilidade", color: "#B8DC4B" },
] as const;

function EcosystemDiagram() {
  return (
    <div className="relative mx-auto w-full max-w-[440px] px-2 py-2" role="img" aria-label="Seis áreas do Ecossistema Maggu como partes de uma mesma atuação">
      <span className="pointer-events-none absolute bottom-7 left-1/2 top-7 w-px -translate-x-1/2 bg-brand-petrol/10" aria-hidden="true" />
      <div className="relative grid gap-3.5">
        {diagramNodes.map((node, index) => (
          <span
            key={node.label}
            className={`relative inline-flex w-[72%] items-center gap-3 rounded-xl border border-brand-petrol/10 bg-background/90 px-4 py-3 text-[12px] font-semibold leading-tight text-brand-ink shadow-sm ${index % 2 === 0 ? "justify-self-start" : "justify-self-end"} sm:text-[13px]`}
          >
            <span className="size-2 rounded-full" style={{ backgroundColor: node.color }} aria-hidden="true" />
            {node.label}
          </span>
        ))}
      </div>
    </div>
  );
}