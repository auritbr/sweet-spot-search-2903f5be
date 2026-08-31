import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionTitle } from "@/components/PageHero";
import { ArcThick, BrushStroke, DiamondsCluster, HatchedCircle, QuarterCircle, Triangle } from "@/components/Shapes";

export const Route = createFileRoute("/ecossistema")({
  head: () => ({
    meta: [
      { title: "Ecossistema Maggu | Associação Maggu" },
      { name: "description", content: "Conheça os seis eixos que organizam as iniciativas da Associação Maggu em cultura, audiovisual, leitura, infância, esporte, sustentabilidade e desenvolvimento." },
      { property: "og:title", content: "Ecossistema Maggu | Associação Maggu" },
      { property: "og:description", content: "Conheça os seis eixos que organizam as iniciativas da Associação Maggu em cultura, audiovisual, leitura, infância, esporte, sustentabilidade e desenvolvimento." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/ecossistema" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/ecossistema" }],
  }),
  component: Ecossistema,
});

const axes = [
  { title: "Arte, Cultura & Formação", phrase: "Criar, experimentar, aprender e apresentar.", text: "Reúne teatro, formação artística, produções e experiências que aproximam pessoas da criação e da vida cultural.", classes: "bg-brand-red text-white lg:col-span-7", accent: "gold" },
  { title: "Audiovisual & Comunicação", phrase: "Ver, ouvir, conversar e comunicar.", text: "Cinema, cineclubismo, rádio, audiovisual e meios digitais como espaços de repertório, expressão e participação.", classes: "bg-brand-cyan text-brand-petrol lg:col-span-5", accent: "petrol" },
  { title: "Livro, Leitura & Memória", phrase: "Ler, lembrar e pertencer.", text: "Livros, histórias, acervos e narrativas que fortalecem leitura, memória e vínculo com o território.", classes: "bg-brand-gold text-brand-petrol lg:col-span-5", accent: "red" },
  { title: "Infância, Cidadania & Território", phrase: "Brincar, conviver e participar.", text: "Ações que reconhecem infância, convivência, cultura e participação comunitária como dimensões de direitos.", classes: "bg-brand-orange text-brand-petrol lg:col-span-7", accent: "petrol" },
  { title: "Esporte, Bem-estar & Inclusão", phrase: "Mover, aprender e conviver.", text: "O esporte e o lazer como caminhos de formação, saúde, disciplina, inclusão e desenvolvimento humano.", classes: "bg-brand-petrol text-white lg:col-span-7", accent: "cyan" },
  { title: "Sustentabilidade & Desenvolvimento", phrase: "Criar também é cuidar.", text: "Arte sustentável, ODS, reaproveitamento, colaboração, economia solidária e desenvolvimento local responsável.", classes: "bg-brand-lime text-brand-petrol lg:col-span-5", accent: "gold" },
];

const initiatives = [
  { name: "Teatro Escola Maggu", axis: "Arte, Cultura & Formação", text: "O Teatro Escola Maggu é um espaço de formação, criação e produção cultural no Benedito Bentes. Recebe cursos, oficinas, ensaios, produções, encontros e ações que aproximam diferentes públicos da experiência artística.", image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=1000&q=80" },
  { name: "Bora Fazer Teatro?", axis: "Arte, Cultura & Formação", text: "Um percurso de formação teatral para quem quer começar, aprofundar experiências ou avançar para processos de montagem.", image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1000&q=80" },
  { name: "Cineclube Teatro Maggu", axis: "Audiovisual & Comunicação", text: "Uma iniciativa que aproxima o público do cinema por meio de sessões, mostras, debates e ações formativas.", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1000&q=80" },
  { name: "Jardim Literário Maggu", axis: "Livro, Leitura & Memória", text: "Uma iniciativa de incentivo à leitura, circulação de livros e construção de memória comunitária.", image: "https://images.unsplash.com/photo-1526243741027-444d633d7365?auto=format&fit=crop&w=1000&q=80" },
  { name: "INFANCIAR — Quando a Rua Volta a Sonhar", axis: "Infância, Cidadania & Território", text: "Uma iniciativa que reconhece o brincar como direito e a rua como espaço de convivência, imaginação, cultura e pertencimento.", image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1000&q=80" },
  { name: "Esporte na Comunidade", axis: "Esporte, Bem-estar & Inclusão", text: "Uma iniciativa que integra práticas esportivas, formação cidadã e convivência.", image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1000&q=80" },
  { name: "Em Memória de Mim", axis: "Livro, Leitura & Memória", text: "Uma produção que reúne teatro, memória, fé, território e criação coletiva e ajuda a contar a trajetória artística que antecede a atual Associação.", image: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1000&q=80" },
  { name: "Educativa Rádio Web Maggu", axis: "Audiovisual & Comunicação", text: "Uma frente de comunicação comunitária e produção de conteúdo que amplia vozes e cria novas formas de conexão entre iniciativas, artistas e comunidade.", image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1000&q=80" },
  { name: "Laboratório de Arte Sustentável", axis: "Sustentabilidade & Desenvolvimento", text: "Uma iniciativa que transforma materiais reaproveitáveis em experiências de criação, aprendizagem e consciência ambiental.", image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1000&q=80" },
];

function Ecossistema() {
  return (
    <>
      <section className="relative isolate min-h-[min(70vh,680px)] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1920&q=80" alt="Encontro de pessoas em uma atividade cultural" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-brand-petrol/70" />
        <QuarterCircle corner="tr" color="#ED1C24" className="absolute -right-4 -top-4 w-40 md:w-60" />
        <ArcThick color="#FFB400" className="absolute left-4 top-24 w-28 md:w-44" from={210} to={340} />
        <HatchedCircle size={310} color="#08B9E6" className="absolute left-1/2 top-1/2 -z-0 max-w-[70vw] -translate-x-1/2 -translate-y-1/2 opacity-35" />
        <DiamondsCluster color="#08B9E6" className="absolute bottom-24 right-10 hidden md:block" size={56} />
        <div className="container-x relative flex min-h-[min(70vh,680px)] flex-col items-center justify-center px-5 pb-16 pt-28 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-gold">Ecossistema Maggu</p>
          <h1 className="mt-4 max-w-4xl text-white text-4xl md:text-5xl leading-tight">Diferentes caminhos. Um mesmo ecossistema.</h1>
          <BrushStroke color="#FFB400" className="mt-5 w-40" />
          <p className="mt-5 max-w-2xl leading-relaxed text-white/95">A Associação Maggu atua por diferentes caminhos que se encontram. Organizamos nossas iniciativas em eixos para facilitar a descoberta sem separar aquilo que, na prática, se conecta.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href="#eixos" className="rounded-full bg-brand-gold px-6 py-3 text-sm font-bold text-brand-petrol transition hover:bg-white">Conheça os eixos</a>
            <Link to="/projetos" className="rounded-full border-2 border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Explorar projetos</Link>
          </div>
        </div>
        <div className="pointer-events-none absolute -bottom-1 inset-x-0 h-12 md:h-16 bg-white [clip-path:ellipse(90%_100%_at_50%_100%)]" aria-hidden="true" />
      </section>

      <Section className="bg-white overflow-hidden">
        <div className="container-x grid gap-12 lg:grid-cols-[1.05fr_.95fr] items-center">
          <div>
            <SectionTitle eyebrow="A lógica do Ecossistema" title="Muitas frentes. Um mesmo compromisso com o território." />
            <div className="space-y-5 text-brand-gray leading-relaxed">
              <p>Teatro conversa com educação. Cinema também é formação. Livro é memória. Brincar é direito. Esporte cria convivência. Comunicação fortalece participação. Sustentabilidade também pode nascer da criação.</p>
              <p>Por isso, organizamos as iniciativas da Associação como um ecossistema: áreas de atuação que mantêm suas próprias características, mas compartilham relações, públicos, aprendizados e objetivos.</p>
            </div>
          </div>
          <EcosystemDiagram />
        </div>
      </Section>

      <section id="eixos" className="scroll-mt-24 bg-brand-soft py-14 md:py-20 overflow-hidden">
        <div className="container-x">
          <SectionTitle eyebrow="Seis áreas conectadas" title="Conheça os eixos do Ecossistema Maggu" text="Cada eixo reúne iniciativas com características próprias e ajuda a compreender a amplitude da atuação da Associação." />
          <div className="grid gap-5 lg:grid-cols-12">
            {axes.map((axis, index) => (
              <article key={axis.title} className={`relative min-h-[300px] overflow-hidden rounded-md p-7 md:p-9 flex flex-col justify-end ${axis.classes}`}>
                {index % 2 === 0 ? <HatchedCircle size={145} color={axis.accent === "gold" ? "#FFB400" : "#ED1C24"} className="absolute -right-8 -top-8 opacity-30" /> : <ArcThick color={axis.accent === "petrol" ? "#00384C" : "#08B9E6"} className="absolute -right-5 -top-6 w-32 opacity-70" from={120} to={280} />}
                <p className="relative text-xs font-bold uppercase tracking-[0.2em] opacity-75">Eixo {String(index + 1).padStart(2, "0")}</p>
                <h2 className="relative mt-3 text-2xl md:text-3xl leading-tight text-inherit">{axis.title}</h2>
                <p className="relative mt-3 font-bold">{axis.phrase}</p>
                <p className="relative mt-3 max-w-2xl leading-relaxed opacity-90">{axis.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-petrol py-14 md:py-20">
        <ArcThick color="#FFB400" className="absolute -left-6 -top-5 w-36" from={210} to={340} />
        <HatchedCircle size={180} color="#08B9E6" className="absolute -bottom-14 -right-10 opacity-20" />
        <div className="container-x relative grid gap-8 lg:grid-cols-[.8fr_1.2fr] items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-gold">Conexões</p>
            <h2 className="mt-3 text-2xl md:text-3xl text-white">Os eixos se encontram.</h2>
            <p className="mt-4 leading-relaxed text-white/85">Uma mesma iniciativa pode envolver formação, criação, território, memória, comunicação e redes. Os eixos ajudam a organizar a descoberta, mas não separam aquilo que acontece de forma integrada na prática.</p>
          </div>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3" aria-label="Conceitos transversais">
            {["Formação", "Criação", "Território", "Memória", "Comunicação", "Redes"].map((item, index) => (
              <li key={item} className={`flex min-h-24 items-center justify-center rounded-full px-4 text-center text-sm font-bold ${index % 3 === 0 ? "bg-brand-red text-white" : index % 3 === 1 ? "bg-brand-gold text-brand-petrol" : "bg-brand-cyan text-brand-petrol"}`}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <Section className="bg-white">
        <div className="container-x">
          <SectionTitle eyebrow="Iniciativas" title="Algumas iniciativas do Ecossistema" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {initiatives.map((initiative) => (
              <article key={initiative.name} className="group overflow-hidden rounded-md border border-brand-petrol/10 bg-white">
                <div className="aspect-[16/10] overflow-hidden bg-brand-soft">
                  <img src={initiative.image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-6">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-red">{initiative.axis}</p>
                  <h3 className="mt-3 text-xl text-brand-ink">{initiative.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-gray">{initiative.text}</p>
                  <Link to="/projetos" className="mt-5 inline-flex rounded-full border-2 border-brand-petrol px-5 py-2 text-sm font-bold text-brand-petrol transition hover:bg-brand-soft">Conheça</Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 border-l-4 border-brand-red bg-brand-soft p-7 md:flex md:items-center md:justify-between md:gap-10">
            <div>
              <h2 className="text-2xl text-brand-ink">Quer conhecer todas as iniciativas?</h2>
              <p className="mt-3 max-w-3xl leading-relaxed text-brand-gray">A página de Projetos reúne projetos, programas, coletivos, produções e ações desenvolvidos pela Associação Maggu.</p>
            </div>
            <Link to="/projetos" className="mt-6 inline-flex shrink-0 rounded-full bg-brand-red px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-petrol md:mt-0">Explorar todos os projetos</Link>
          </div>
        </div>
      </Section>

      <section className="relative overflow-hidden bg-brand-red py-16 md:py-20">
        <QuarterCircle corner="tl" color="#00384C" className="absolute -left-2 -top-2 w-36" />
        <Triangle color="#FFB400" size={54} className="absolute right-16 top-8 hidden md:block" rotate={18} />
        <DiamondsCluster color="#08B9E6" className="absolute bottom-8 left-16 opacity-60" size={54} />
        <div className="container-x relative mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl text-white">A cultura acontece quando diferentes caminhos se encontram.</h2>
          <BrushStroke color="#FFB400" className="mx-auto mt-5 w-28" />
          <p className="mt-5 leading-relaxed text-white/90">Conheça as iniciativas da Associação, encontre uma atividade ou entre em contato para saber mais sobre o Ecossistema Maggu.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/projetos" className="rounded-full bg-brand-gold px-6 py-3 text-sm font-bold text-brand-petrol transition hover:bg-white">Conheça os projetos</Link>
            <Link to="/contato" className="rounded-full border-2 border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Entre em contato</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function EcosystemDiagram() {
  const nodes = [
    "left-[8%] top-[15%] bg-brand-red",
    "right-[8%] top-[10%] bg-brand-cyan",
    "left-[2%] bottom-[15%] bg-brand-gold",
    "right-[2%] bottom-[16%] bg-brand-orange",
    "left-[36%] top-[2%] bg-brand-petrol",
    "left-[39%] bottom-[2%] bg-brand-lime",
  ];
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md" aria-label="Representação visual dos seis eixos conectados">
      <div className="absolute inset-[18%] rounded-full border-2 border-dashed border-brand-petrol/25" />
      <div className="absolute left-1/2 top-1/2 h-[72%] w-px -translate-x-1/2 -translate-y-1/2 rotate-45 bg-brand-petrol/20" />
      <div className="absolute left-1/2 top-1/2 h-[72%] w-px -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-brand-petrol/20" />
      <div className="absolute left-1/2 top-1/2 h-px w-[72%] -translate-x-1/2 bg-brand-petrol/20" />
      <div className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-center text-sm font-bold text-brand-petrol shadow-lg">Ecossistema<br />Maggu</div>
      {nodes.map((classes, index) => <span key={classes} className={`absolute h-20 w-20 rounded-full border-8 border-white shadow-md ${classes}`} aria-hidden="true"><span className="sr-only">Eixo {index + 1}</span></span>)}
      <ArcThick color="#ED1C24" className="absolute -left-5 top-1/3 w-28" from={100} to={250} />
      <HatchedCircle size={96} color="#08B9E6" className="absolute -bottom-5 right-1/4 opacity-45" />
    </div>
  );
}