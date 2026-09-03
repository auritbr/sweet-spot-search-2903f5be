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

      <Section className="relative overflow-hidden bg-background pb-14 pt-16 md:pb-20 md:pt-20">
        <span className="pointer-events-none absolute left-0 top-0 h-px w-full bg-brand-petrol/8" aria-hidden="true" />
        <div className="container-x grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,.86fr)] lg:gap-20">
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

      <section id="eixos" className="relative scroll-mt-24 overflow-hidden bg-brand-soft/55 py-14 md:py-20">
        <HatchedCircle size={190} color="#08B9E6" className="pointer-events-none absolute -right-20 top-8 opacity-10" />
        <span className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-brand-petrol/8" aria-hidden="true" />
        <div className="container-x relative">
          <SectionTitle eyebrow="Seis eixos" title="Seis eixos para compreender uma atuação integrada." text="Cada eixo reúne iniciativas com características próprias e ajuda a compreender diferentes dimensões da atuação da Associação." align="center" />
          <div className="mt-10 grid gap-4 md:grid-cols-2 md:gap-5">
            {axes.map((axis, index) => (
              <article key={axis.title} className="group relative grid min-h-[230px] overflow-hidden rounded-2xl border border-brand-petrol/10 bg-background/90 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-brand-petrol/20 hover:shadow-md sm:grid-cols-[8.5rem_minmax(0,1fr)]">
                <div className={`relative flex min-h-28 items-end overflow-hidden px-5 pb-5 sm:min-h-full ${axis.band} ${axis.bandText}`}>
                  {axis.layout === "arc" ? (
                    <ArcThick color={axis.accent} className="pointer-events-none absolute -right-8 -top-8 w-32 opacity-55" from={120} to={280} />
                  ) : axis.layout === "split" ? (
                    <HatchedCircle size={150} color={axis.accent} className="pointer-events-none absolute -right-16 -top-8 max-w-none opacity-25" />
                  ) : (
                    <>
                      <QuarterCircle corner="tr" color={axis.accent} className="pointer-events-none absolute -right-3 -top-3 w-24 opacity-55" />
                      <Triangle color={axis.accent} size={28} className="pointer-events-none absolute left-5 top-5 opacity-75" rotate={index * 12} />
                    </>
                  )}
                  <p className="relative text-[11px] font-bold uppercase tracking-[0.2em] opacity-90">Eixo {String(index + 1).padStart(2, "0")}</p>
                </div>
                <div className="flex min-w-0 flex-col justify-center px-5 py-5 sm:px-6 md:px-7">
                  <div className="flex min-w-0 items-start gap-3">
                    <span className={`mt-2 size-2 shrink-0 rotate-45 ${axis.band}`} aria-hidden="true" />
                    <h2 className="text-[1.25rem] leading-tight text-brand-ink md:text-[1.4rem]">{axis.title}</h2>
                  </div>
                  <p className={`mt-2.5 text-sm font-semibold ${axis.phraseText}`}>{axis.phrase}</p>
                  <p className="mt-3 text-[14px] leading-[1.65] text-brand-gray">{axis.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-background py-14 md:py-20">
        <ArcThick color="#FFB400" className="pointer-events-none absolute -left-10 top-10 w-20 opacity-25 md:w-24" from={210} to={340} />
        <span className="pointer-events-none absolute right-8 top-14 hidden size-2 rotate-45 bg-brand-red md:block" aria-hidden="true" />
        <div className="container-x relative">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">Conceitos transversais</p>
            <h2 className="mt-3 text-[1.75rem] leading-tight text-brand-ink md:text-[2.15rem]">Os eixos se conectam na prática.</h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-brand-gray">Uma mesma iniciativa pode reunir diferentes dimensões da atuação da Maggu.</p>
          </div>
          <div className="relative mx-auto mt-10 max-w-5xl rounded-3xl border border-brand-petrol/8 bg-brand-soft/35 p-4 sm:p-6 md:p-8">
            <svg className="pointer-events-none absolute inset-0 hidden h-full w-full md:block" viewBox="0 0 100 60" preserveAspectRatio="none" aria-hidden="true">
              <path d="M18 18 C30 10, 38 10, 50 18 S72 26, 82 18 M18 42 C30 34, 38 34, 50 42 S72 50, 82 42 M18 18 C10 28, 10 34, 18 42 M50 18 V42 M82 18 C90 28, 90 34, 82 42" stroke="#00384C" strokeOpacity="0.12" strokeWidth="0.35" fill="none" strokeDasharray="1.4 2" />
            </svg>
            <ul className="relative grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-5">
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
                  className="group relative flex min-h-[96px] items-end overflow-hidden rounded-xl border border-brand-petrol/10 bg-background/80 p-4 shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-brand-petrol/20 hover:shadow-md sm:min-h-[108px] sm:p-5"
                >
                  <span className="absolute right-4 top-4 size-2.5 rotate-45 opacity-80" style={{ backgroundColor: color }} aria-hidden="true" />
                  <span className="absolute -right-8 -top-8 size-20 rounded-full border opacity-20" style={{ borderColor: color }} aria-hidden="true" />
                  <span className="absolute bottom-0 left-0 h-1 w-12" style={{ backgroundColor: color }} aria-hidden="true" />
                  <p className="relative text-base font-semibold text-brand-ink md:text-lg">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>


      <Section className="relative overflow-hidden bg-brand-soft/20 pb-16 pt-14 md:pb-20 md:pt-20">
        <span className="pointer-events-none absolute left-1/2 top-0 h-px w-32 -translate-x-1/2 bg-brand-petrol/15" aria-hidden="true" />
        <div className="container-x">
          <div className="relative mx-auto max-w-[860px] text-center">
            <span className="mx-auto mb-6 block size-2 rotate-45 bg-brand-gold" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">Uma atuação integrada</p>
            <h2 className="mt-3 text-brand-ink" style={{ fontSize: "clamp(1.75rem, 2.7vw, 2.75rem)", lineHeight: 1.15, fontWeight: 700 }}>Organizar não significa separar.</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-brand-gray" style={{ fontSize: "clamp(1rem, 1.2vw, 1.15rem)", lineHeight: 1.7 }}>
              <p>Os eixos tornam mais fácil compreender a diversidade da Maggu, enquanto as conexões entre eles preservam aquilo que caracteriza sua atuação: diferentes linguagens, públicos e experiências compartilhando um mesmo território.</p>
              <p>É assim que teatro pode dialogar com memória, audiovisual pode se tornar formação, esporte pode fortalecer convivência e sustentabilidade pode se transformar em processo criativo.</p>
            </div>
          </div>
          <p className="mx-auto mt-9 max-w-2xl border-y border-brand-petrol/10 py-6 text-center font-bold text-brand-petrol" style={{ fontSize: "clamp(1.25rem, 2vw, 1.6rem)", lineHeight: 1.3 }}>
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
  { label: "Arte & Formação", color: "#ED1C24", style: { left: "2%", top: "6%" } },
  { label: "Audiovisual", color: "#08B9E6", style: { right: "4%", top: "18%" } },
  { label: "Livro & Memória", color: "#FFB400", style: { left: "10%", top: "39%" } },
  { label: "Infância & Território", color: "#FF7A00", style: { right: "0%", top: "52%" } },
  { label: "Esporte & Inclusão", color: "#00384C", style: { left: "4%", top: "72%" } },
  { label: "Sustentabilidade", color: "#B8DC4B", style: { right: "8%", top: "86%" } },
] as const;

function EcosystemDiagram() {
  return (
    <div className="relative mx-auto w-full max-w-[470px] rounded-3xl border border-brand-petrol/8 bg-brand-soft/35 p-4 sm:p-6" role="img" aria-label="Seis áreas do Ecossistema Maggu conectadas entre si">
      <div className="relative h-[330px] sm:h-[360px]">
        <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M20 16 C 44 8, 58 18, 78 26 C 54 30, 40 36, 24 44 C 48 48, 64 50, 80 58 C 60 64, 42 68, 22 76 C 42 84, 60 86, 76 90"
            stroke="#00384C"
            strokeOpacity="0.16"
            strokeWidth="0.45"
            fill="none"
            strokeDasharray="1.3 2"
          />
        </svg>
        <ArcThick color="#ED1C24" className="pointer-events-none absolute -left-2 top-[31%] w-14 opacity-20" from={100} to={250} />
        <span className="pointer-events-none absolute left-1/2 top-1/2 size-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-petrol/10 bg-background/55 backdrop-blur-sm" aria-hidden="true" />
        <span className="pointer-events-none absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-brand-gold" aria-hidden="true" />
        {diagramNodes.map((node) => (
          <span
            key={node.label}
            className="absolute inline-flex max-w-[48%] items-center gap-2 rounded-full border border-brand-petrol/10 bg-background/90 px-3.5 py-2 text-[12px] font-semibold leading-tight text-brand-ink shadow-sm backdrop-blur-md sm:text-[13px]"
            style={node.style}
          >
            <span className="size-2 rounded-full" style={{ backgroundColor: node.color }} aria-hidden="true" />
            {node.label}
          </span>
        ))}
      </div>
    </div>
  );
}