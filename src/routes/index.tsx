import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { slides, albums } from "@/data/site";
import { Section, SectionTitle } from "@/components/PageHero";
import { AgendaCard } from "@/components/AgendaCard";
import { upcomingEvents } from "@/data/agenda";
import { HatchedCircle, ArcThick, BrushStroke, DiamondsCluster, QuarterCircle, Triangle } from "@/components/Shapes";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Associação Maggu | Cultura, Formação e Território" },
      { name: "description", content: "Conheça a Associação Maggu e suas iniciativas em cultura, formação, audiovisual, leitura, infância, esporte, sustentabilidade e desenvolvimento no Benedito Bentes, em Maceió." },
      { property: "og:title", content: "Associação Maggu | Cultura, Formação e Território" },
      { property: "og:description", content: "Conheça a Associação Maggu e suas iniciativas em cultura, formação, audiovisual, leitura, infância, esporte, sustentabilidade e desenvolvimento no Benedito Bentes, em Maceió." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <HeroCarousel />
      <IntroSection />
      <EcosystemSection />
      <ProjectHighlights />
      <AgendaSection />
      <MemorySection />
      <TransparencySection />
      <FinalCTA />
    </>
  );
}

function HeroCarousel() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [opened, setOpened] = useState(false);
  const [showCurtain, setShowCurtain] = useState(true);
  const reducedMotion = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    const openDelay = 200;
    const duration = reducedMotion ? 350 : 1600;
    const t1 = setTimeout(() => setOpened(true), openDelay);
    const t2 = setTimeout(() => setShowCurtain(false), openDelay + duration + 100);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [reducedMotion]);

  useEffect(() => {
    if (paused || showCurtain) return;
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, [paused, showCurtain]);

  const go = (n: number) => setI((n + slides.length) % slides.length);
  const s = slides[i];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "min(88vh, 780px)", minHeight: 520 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carrossel"
    >
      {slides.map((sl, idx) => (
        <div key={idx} className={`absolute inset-0 transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          <img src={sl.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-ink/55" />
        </div>
      ))}

      {showCurtain && (
        <>
          <div className={`pointer-events-none absolute inset-y-0 left-0 w-1/2 z-20 shadow-2xl ${opened ? "animate-curtain-left" : ""}`}
            style={{ backgroundImage: "repeating-linear-gradient(90deg, rgba(0,0,0,.45) 0 3px, transparent 3px 30px), linear-gradient(90deg,#5c0709,#a51218 40%,#c81e24 55%,#7a0d10 90%)" }}
            aria-hidden="true"
          />
          <div className={`pointer-events-none absolute inset-y-0 right-0 w-1/2 z-20 shadow-2xl ${opened ? "animate-curtain-right" : ""}`}
            style={{ backgroundImage: "repeating-linear-gradient(90deg, rgba(0,0,0,.45) 0 3px, transparent 3px 30px), linear-gradient(90deg,#7a0d10,#c81e24 45%,#a51218 60%,#5c0709)" }}
            aria-hidden="true"
          />
        </>
      )}

      <QuarterCircle corner="tr" color="#00384C" className="absolute -top-4 -right-4 w-40 md:w-64 z-10" />
      <ArcThick color="#FFB400" className="absolute left-6 top-24 w-32 md:w-52 z-10" from={200} to={340} />
      <div className="absolute bottom-24 right-16 z-10 hidden md:block"><DiamondsCluster color="#08B9E6" size={60} /></div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
        <HatchedCircle size={360} color="#ED1C24" className="opacity-40 max-w-[70vw]" />
      </div>

      <div className="relative z-10 h-full container-x flex flex-col justify-center items-center text-center pt-16">
        <div className="max-w-2xl text-white animate-fade-up" key={i}>
          <p className="uppercase tracking-[0.22em] text-brand-gold font-semibold text-xs mb-4">Associação Maggu</p>
          <h1 style={{ fontSize: "clamp(1.9rem, 3.4vw, 3.4rem)", lineHeight: 1.08, fontWeight: 700, textShadow: "0 4px 24px rgba(0,0,0,.4)" }} className="text-white">
            {s.title}
          </h1>
          <BrushStroke color="#FFB400" className="mx-auto mt-5 w-40" />
          <p className="mt-5 mx-auto text-white/95" style={{ fontSize: "clamp(0.98rem, 1.1vw, 1.1rem)", lineHeight: 1.65, maxWidth: "58ch" }}>{s.text}</p>
          <div className="mt-7 flex flex-wrap gap-3 justify-center">
            {s.buttons.map((b, k) => (
              <Link key={k} to={b.to} className={`px-6 py-3 rounded-full text-sm ${k === 0 ? "bg-brand-red text-white hover:bg-brand-red/90" : "bg-white text-brand-ink hover:bg-brand-gold"} transition`} style={{ fontWeight: 600 }}>
                {b.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <button aria-label="Slide anterior" onClick={() => go(i - 1)} className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-brand-petrol/60 backdrop-blur text-white items-center justify-center hover:bg-brand-petrol">‹</button>
      <button aria-label="Próximo slide" onClick={() => go(i + 1)} className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-brand-petrol/60 backdrop-blur text-white items-center justify-center hover:bg-brand-petrol">›</button>

      <div className="absolute bottom-6 inset-x-0 z-30 flex justify-center gap-2">
        {slides.map((_, idx) => (
          <button key={idx} onClick={() => go(idx)} aria-label={`Slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all ${idx === i ? "w-10 bg-brand-gold" : "w-2 bg-white/60"}`} />
        ))}
      </div>

      <div className="pointer-events-none absolute -bottom-1 inset-x-0 h-12 md:h-16 bg-white [clip-path:ellipse(90%_100%_at_50%_100%)] z-20" aria-hidden />
    </section>
  );
}

function IntroSection() {
  return (
    <Section className="bg-white overflow-hidden">
      <div className="container-x grid gap-12 md:grid-cols-[1.05fr_.95fr] items-center">
        <div className="relative">
          <p className="uppercase tracking-[0.22em] text-brand-red font-semibold text-xs mb-3">Associação Maggu</p>
          <h2 className="text-brand-ink" style={{ fontSize: "clamp(1.7rem, 2.6vw, 2.6rem)", lineHeight: 1.15, fontWeight: 700 }}>
            Muitas frentes. Um mesmo compromisso com o território.
          </h2>
          <BrushStroke color="#FFB400" className="mt-5 w-32" />
          <div className="mt-5 space-y-4 text-brand-gray" style={{ lineHeight: 1.7, maxWidth: "62ch" }}>
            <p>A Associação Maggu é uma organização da sociedade civil que transforma experiências culturais em formação, criação, memória, convivência e oportunidades.</p>
            <p>Sua atuação reúne iniciativas diferentes, mas conectadas por uma mesma compreensão: cultura é direito, expressão, pertencimento e possibilidade de futuro.</p>
          </div>
          <Link to="/quem-somos" hash="nossa-historia" className="mt-7 inline-flex rounded-full bg-brand-red px-6 py-3 text-sm text-white transition hover:bg-brand-petrol" style={{ fontWeight: 600 }}>
            Conheça nossa história
          </Link>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <div className="aspect-[4/5] overflow-hidden rounded-t-[46%] rounded-b-md">
            <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80" alt="Participantes reunidos em atividade cultural" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <ArcThick color="#00384C" className="absolute -top-6 -left-6 w-28" from={100} to={260} />
          <HatchedCircle size={96} color="#08B9E6" className="absolute -bottom-6 right-2 opacity-60" />
          <Triangle color="#FFB400" size={44} className="absolute top-10 -right-2" rotate={20} />
        </div>
      </div>
    </Section>
  );
}

const axesSummary = [
  { title: "Arte, Cultura & Formação", phrase: "Criar, experimentar, aprender e apresentar.", className: "bg-brand-red text-white", shape: "circle" },
  { title: "Audiovisual & Comunicação", phrase: "Ver, ouvir, conversar e comunicar.", className: "bg-brand-cyan text-brand-petrol", shape: "arc" },
  { title: "Livro, Leitura & Memória", phrase: "Ler, lembrar e pertencer.", className: "bg-brand-gold text-brand-petrol", shape: "diamond" },
  { title: "Infância, Cidadania & Território", phrase: "Brincar, conviver e participar.", className: "bg-brand-orange text-brand-petrol", shape: "arc" },
  { title: "Esporte, Bem-estar & Inclusão", phrase: "Mover, aprender e conviver.", className: "bg-brand-petrol text-white", shape: "circle" },
  { title: "Sustentabilidade & Desenvolvimento", phrase: "Criar também é cuidar.", className: "bg-brand-lime text-brand-petrol", shape: "diamond" },
];

function EcosystemSection() {
  return (
    <Section className="bg-brand-soft overflow-hidden">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <SectionTitle eyebrow="Ecossistema Maggu" title="Conheça o Ecossistema Maggu" />
          <div className="mb-8 space-y-4 text-brand-gray" style={{ lineHeight: 1.7 }}>
            <p>Teatro conversa com educação. Cinema também é formação. Livro é memória. Brincar é direito. Esporte cria convivência. Comunicação fortalece participação. Sustentabilidade também pode nascer da criação.</p>
            <p>Por isso, as iniciativas da Associação são organizadas em diferentes eixos que se conectam entre si.</p>
          </div>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {axesSummary.map((axis) => (
            <li key={axis.title} className={`relative overflow-hidden rounded-md p-6 ${axis.className}`}>
              <span className="absolute -right-6 -top-6 opacity-30" aria-hidden="true">
                {axis.shape === "circle" ? (
                  <HatchedCircle size={96} color="#FFFFFF" />
                ) : axis.shape === "arc" ? (
                  <ArcThick color="#FFFFFF" className="w-24" from={120} to={280} />
                ) : (
                  <DiamondsCluster color="#FFFFFF" size={44} />
                )}
              </span>
              <h3 className="relative text-lg leading-snug text-inherit">{axis.title}</h3>
              <p className="relative mt-2 text-sm opacity-90">{axis.phrase}</p>
            </li>
          ))}
        </ul>
        <div className="mt-9">
          <Link to="/ecossistema" className="inline-flex rounded-full bg-brand-petrol px-7 py-3 text-sm font-bold text-white transition hover:bg-brand-red">Explorar o Ecossistema</Link>
        </div>
      </div>
    </Section>
  );
}

// Fácil de trocar futuramente por conteúdo vindo de um CMS.
const featuredProjects = [
  {
    name: "Teatro Escola Maggu",
    text: "Um espaço de formação, criação e produção cultural no Benedito Bentes.",
    image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=1000&q=80",
    accent: "#ED1C24",
  },
  {
    name: "Cineclube Teatro Maggu",
    text: "Cinema como espaço de encontro, formação, repertório e participação.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1000&q=80",
    accent: "#08B9E6",
  },
  {
    name: "Jardim Literário Maggu",
    text: "Leitura, circulação de livros e construção de memória comunitária.",
    image: "https://images.unsplash.com/photo-1526243741027-444d633d7365?auto=format&fit=crop&w=1000&q=80",
    accent: "#FFB400",
  },
];

function ProjectHighlights() {
  return (
    <Section className="bg-white">
      <div className="container-x">
        <SectionTitle eyebrow="Projetos" title="Projetos e iniciativas em destaque" />
        <div className="grid gap-6 md:grid-cols-3">
          {featuredProjects.map((p) => (
            <article key={p.name} className="overflow-hidden rounded-md border border-brand-petrol/10 bg-white">
              <div className="aspect-[16/10] overflow-hidden bg-brand-soft">
                <img src={p.image} alt="" className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="border-t-4 p-6" style={{ borderColor: p.accent }}>
                <h3 className="text-xl leading-snug text-brand-ink">{p.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-gray">{p.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-9">
          <Link to="/projetos" className="inline-flex rounded-full bg-brand-red px-7 py-3 text-sm font-bold text-white transition hover:bg-brand-petrol">Conheça todos os projetos</Link>
        </div>
      </div>
    </Section>
  );
}

function AgendaSection() {
  const events = upcomingEvents(3);
  return (
    <Section className="bg-brand-soft overflow-hidden">
      <div className="container-x">
        <SectionTitle
          eyebrow="Agenda"
          title="Acontecendo agora"
          text="Cursos, sessões, oficinas, apresentações, encontros e outras atividades do Ecossistema Maggu."
        />
        {events.length ? (
          <div className="space-y-4">
            {events.map((e) => <AgendaCard key={e.slug} event={e} />)}
          </div>
        ) : (
          <p className="max-w-2xl border-l-4 border-brand-red bg-white p-6 leading-relaxed text-brand-gray">
            Novas atividades serão anunciadas em breve. Enquanto isso, conheça nossas iniciativas.
          </p>
        )}
        <div className="mt-9 flex flex-wrap gap-3">
          <Link to="/agenda" className="inline-flex rounded-full bg-brand-petrol px-7 py-3 text-sm font-bold text-white transition hover:bg-brand-red">Ver Agenda</Link>
          <Link to="/projetos" className="inline-flex rounded-full border-2 border-brand-petrol px-7 py-3 text-sm font-bold text-brand-petrol transition hover:bg-white">Conheça os projetos</Link>
        </div>
      </div>
    </Section>
  );
}

function MemorySection() {
  const items = albums.slice(0, 3);
  return (
    <Section className="bg-white overflow-hidden">
      <div className="container-x grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
        <div>
          <SectionTitle eyebrow="Memória" title="Memória em movimento" />
          <p className="text-brand-gray" style={{ lineHeight: 1.7, maxWidth: "56ch" }}>
            Nossa história também vive em fotografias, cartazes, vídeos, programas, documentos, bastidores e nas pessoas que fizeram parte de cada processo.
          </p>
          <Link to="/galeria" className="mt-7 inline-flex rounded-full border-2 border-brand-petrol px-6 py-3 text-sm font-bold text-brand-petrol transition hover:bg-brand-soft">Conheça nossa galeria</Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {items.map((a, idx) => (
            <div key={a.slug} className={`overflow-hidden rounded-md ${idx === 0 ? "col-span-2 sm:col-span-1 aspect-[4/3] sm:aspect-[3/4]" : "aspect-square"}`}>
              <img src={a.cover} alt={a.title} className="h-full w-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function TransparencySection() {
  return (
    <Section className="bg-brand-soft">
      <div className="container-x md:flex md:items-center md:justify-between md:gap-10">
        <div className="max-w-2xl border-l-4 border-brand-red pl-6">
          <h2 className="text-brand-ink" style={{ fontSize: "clamp(1.5rem, 2.2vw, 2.1rem)", lineHeight: 1.2, fontWeight: 700 }}>
            Transparência também faz parte da nossa cultura.
          </h2>
          <p className="mt-4 text-brand-gray" style={{ lineHeight: 1.7 }}>
            Governança, documentos, políticas e informações institucionais reunidos para fortalecer responsabilidade, confiança e acesso público.
          </p>
        </div>
        <Link to="/transparencia" className="mt-6 inline-flex shrink-0 rounded-full bg-brand-petrol px-7 py-3 text-sm font-bold text-white transition hover:bg-brand-red md:mt-0">Acessar Transparência</Link>
      </div>
    </Section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20" style={{ backgroundColor: "#00384C" }}>
      <QuarterCircle corner="tr" color="#ED1C24" className="absolute -top-2 -right-2 w-32 md:w-52 opacity-90" />
      <ArcThick color="#FFB400" className="absolute -left-6 top-10 w-40 opacity-90" from={200} to={340} />
      <HatchedCircle size={200} color="#08B9E6" className="absolute -left-16 bottom-0 opacity-20" />
      <DiamondsCluster color="#FFB400" className="absolute top-16 right-32 hidden md:block" size={54} />
      <div className="container-x relative mx-auto max-w-3xl text-center text-white">
        <h2 className="text-white" style={{ fontSize: "clamp(1.7rem, 2.6vw, 2.6rem)", lineHeight: 1.15, fontWeight: 700 }}>
          Há muitas formas de fazer parte.
        </h2>
        <BrushStroke color="#FFB400" className="mx-auto mt-5 w-32" />
        <p className="mt-5 leading-relaxed text-white/90">
          Conheça uma atividade, acompanhe os projetos ou entre em contato com a Associação Maggu.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link to="/agenda" className="rounded-full bg-brand-gold px-7 py-3 text-sm font-bold text-brand-petrol transition hover:bg-white">Ver Agenda</Link>
          <Link to="/contato" className="rounded-full border-2 border-white px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Entre em contato</Link>
        </div>
      </div>
    </section>
  );
}
