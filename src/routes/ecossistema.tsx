import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroButton, PageHero, Section, SectionTitle } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { FinalCampaignCTA } from "@/components/FinalCampaignCTA";
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
    classes: "bg-brand-red text-primary-foreground lg:col-span-7",
    accent: "#FFB400",
    layout: "shape",
  },
  {
    title: "Audiovisual & Comunicação",
    phrase: "Ver, ouvir, conversar e comunicar.",
    text: "Cinema, cineclubismo, rádio, audiovisual e meios digitais como espaços de repertório, expressão e participação.",
    classes: "bg-brand-cyan text-brand-petrol lg:col-span-5",
    accent: "#00384C",
    layout: "arc",
  },
  {
    title: "Livro, Leitura & Memória",
    phrase: "Ler, lembrar e pertencer.",
    text: "Livros, histórias, acervos e narrativas que fortalecem leitura, memória e vínculo com o território.",
    classes: "bg-brand-gold text-brand-petrol lg:col-span-5",
    accent: "#ED1C24",
    layout: "split",
  },
  {
    title: "Infância, Cidadania & Território",
    phrase: "Brincar, conviver e participar.",
    text: "Ações que reconhecem infância, convivência, cultura e participação comunitária como dimensões de direitos.",
    classes: "bg-brand-orange text-brand-petrol lg:col-span-7",
    accent: "#00384C",
    layout: "shape",
  },
  {
    title: "Esporte, Bem-estar & Inclusão",
    phrase: "Mover, aprender e conviver.",
    text: "O esporte e o lazer como caminhos de formação, saúde, disciplina, inclusão e desenvolvimento humano.",
    classes: "bg-brand-petrol text-primary-foreground lg:col-span-7",
    accent: "#08B9E6",
    layout: "split",
  },
  {
    title: "Sustentabilidade & Desenvolvimento",
    phrase: "Criar também é cuidar.",
    text: "Arte sustentável, ODS, reaproveitamento, colaboração, economia solidária e desenvolvimento local responsável.",
    classes: "bg-brand-lime text-brand-petrol lg:col-span-5",
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
          <a href="#eixos" className="rounded-full bg-brand-gold px-6 py-3 text-sm font-bold text-brand-petrol transition hover:bg-background">Conheça os eixos</a>
          <Link to="/projetos" className="rounded-full border-2 border-primary-foreground px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-background/10">Explorar projetos</Link>
        </div>
      </PageHero>

      <Section className="overflow-hidden bg-background">
        <div className="container-x grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-14">
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
          <div className="grid gap-5 lg:grid-cols-12">
            {axes.map((axis, index) => (
              <article key={axis.title} className={`relative flex min-h-[270px] flex-col justify-end overflow-hidden rounded-md p-7 md:min-h-[290px] md:p-9 ${axis.classes}`}>
                {axis.layout === "arc" ? (
                  <ArcThick color={axis.accent} className="absolute -right-6 -top-8 w-36 opacity-60" from={120} to={280} />
                ) : axis.layout === "split" ? (
                  <div className="absolute right-0 top-0 h-full w-2/5 opacity-25" aria-hidden="true">
                    <HatchedCircle size={220} color={axis.accent} className="absolute -right-14 top-2 max-w-none" />
                  </div>
                ) : (
                  <>
                    <QuarterCircle corner={index === 0 ? "tr" : "br"} color={axis.accent} className="absolute -right-2 -top-2 w-32 opacity-65" />
                    <Triangle color={axis.accent} size={42} className="absolute left-8 top-8 opacity-80" rotate={index * 9} />
                  </>
                )}
                <p className="relative text-xs font-bold uppercase tracking-[0.2em] opacity-80">Eixo {String(index + 1).padStart(2, "0")}</p>
                <h2 className="relative mt-3 text-2xl leading-tight text-inherit md:text-3xl">{axis.title}</h2>
                <p className="relative mt-3 font-bold">{axis.phrase}</p>
                <p className="relative mt-3 max-w-2xl leading-relaxed opacity-90">{axis.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-petrol py-14 md:py-20">
        <ArcThick color="#FFB400" className="absolute -left-8 -top-8 w-28 opacity-70" from={210} to={340} />
        <HatchedCircle size={130} color="#08B9E6" className="absolute -bottom-10 -right-7 opacity-15" />
        <div className="container-x relative">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl text-primary-foreground md:text-3xl">Os eixos se conectam na prática.</h2>
            <p className="mx-auto mt-3 max-w-xl leading-relaxed text-primary-foreground/85">Uma mesma iniciativa pode reunir diferentes dimensões da atuação da Maggu.</p>
          </div>
          <div className="mx-auto mt-10 max-w-6xl rounded-md border border-primary-foreground/15 bg-background/5 px-5 py-7 backdrop-blur-sm md:px-8 md:py-8">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/65">Conceitos transversais</p>
            <ol className="relative mx-auto mt-7 grid max-w-sm gap-0 pl-2 md:max-w-none md:grid-cols-6 md:pl-0" aria-label="Conceitos transversais conectados">
              <span className="absolute bottom-6 left-[1.9rem] top-6 w-px bg-brand-cyan/70 md:bottom-auto md:left-[8.33%] md:right-[8.33%] md:top-6 md:h-px md:w-auto" aria-hidden="true" />
              {[
                ["Formação", "bg-brand-red text-primary-foreground"],
                ["Criação", "bg-brand-gold text-brand-petrol"],
                ["Território", "bg-brand-cyan text-brand-petrol"],
                ["Memória", "bg-brand-red text-primary-foreground"],
                ["Comunicação", "bg-brand-gold text-brand-petrol"],
                ["Redes", "bg-brand-cyan text-brand-petrol"],
              ].map(([item, accent], index) => (
                <li key={item} className="group relative z-10 flex min-h-20 items-center gap-4 md:min-h-0 md:flex-col md:gap-3 md:text-center">
                  <span className={`flex size-11 shrink-0 items-center justify-center rounded-full border border-primary-foreground/35 text-[10px] font-bold shadow-sm ring-4 ring-brand-petrol transition-transform duration-300 group-hover:scale-105 ${accent}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-full border border-primary-foreground/15 bg-background/10 px-3 py-1.5 text-sm font-semibold text-primary-foreground backdrop-blur-sm">{item}</span>
                </li>
              ))}
            </ol>
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

      <FinalCampaignCTA eyebrow="Do conceito à prática" title="O Ecossistema ganha forma nas iniciativas e no que acontece no território." text="Explore os projetos da Associação e acompanhe a agenda para conhecer ações, atividades e experiências em movimento." primary={{ label: "Conheça os Projetos", to: "/projetos" }} secondary={{ label: "Ver Agenda", to: "/agenda" }} image="https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1920&q=80" variant="center" />
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