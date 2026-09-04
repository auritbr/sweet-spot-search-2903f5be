import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Clock3, MapPin } from "lucide-react";
import { slides, albums } from "@/data/site";
import { Section, SectionTitle } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { EventPreviewPanel } from "@/components/EventPreviewPanel";
import { CompactFinalCTA } from "@/components/CompactFinalCTA";
import { agendaCategoryStyles, eventDayMonth, upcomingEvents, type AgendaEvent } from "@/data/agenda";
import { HatchedCircle, ArcThick, BrushStroke, DiamondsCluster, QuarterCircle, Triangle, DottedCurve } from "@/components/Shapes";
import culturePointSeal from "@/assets/ponto-de-cultura.png";

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
      <ImpactoSection />
      <CulturePointSection />
      <AgendaSection />
      <MemorySection />
      <ParticipeSection />
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
      className="relative min-h-[620px] w-full overflow-hidden md:min-h-0 md:h-[570px] lg:h-[610px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carrossel"
    >
      {slides.map((sl, idx) => (
        <div key={idx} className={`absolute inset-0 transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          <img src={sl.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/90 via-brand-petrol/65 to-brand-ink/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-ink/45 via-transparent to-brand-ink/40" />
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
      <ArcThick color="#FFB400" className="absolute -right-8 bottom-20 z-10 w-28 md:right-8 md:w-40" from={200} to={340} />
      <div className="absolute bottom-24 right-16 z-10 hidden md:block"><DiamondsCluster color="#08B9E6" size={60} /></div>

      <div className="pointer-events-none absolute -bottom-24 right-[8%] z-0">
        <HatchedCircle size={300} color="#08B9E6" className="max-w-[55vw] opacity-25" />
      </div>

      <div className="container-x relative z-10 flex min-h-[620px] flex-col justify-center pb-[120px] pt-28 md:h-full md:min-h-0 md:pb-24 md:pt-28">
        <div className="w-full max-w-[36rem] animate-fade-up text-primary-foreground lg:max-w-[40rem]" key={i}>
          <p className="mb-3 inline-flex rounded-full border border-primary-foreground/20 bg-background/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-sm backdrop-blur-md">Associação Maggu</p>
          <h1 style={{ fontSize: "clamp(1.85rem, 7.6vw, 3rem)", lineHeight: 1.1, fontWeight: 700, textShadow: "0 4px 24px rgba(0,0,0,.4)" }} className="text-balance text-primary-foreground">
            {s.title}
          </h1>
          <BrushStroke color="#FFB400" className="mt-4 w-24 md:mt-3" />
          <p className="mt-6 max-w-[34rem] text-[15px] leading-[1.6] text-primary-foreground/90 md:mt-4 md:text-[15px]">{s.text}</p>
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:gap-y-3">
            {s.buttons.map((b, k) => (
              <Link
                key={k}
                to={b.to}
                style={{ fontWeight: 600, lineHeight: 1, fontSize: "15px" }}
                className={
                  k === 0
                    ? "inline-flex h-[48px] max-w-full items-center justify-center whitespace-nowrap rounded-full border border-white/25 bg-brand-red/80 px-6 text-white shadow-[0_8px_24px_-8px_rgba(0,0,0,0.5)] backdrop-blur-md transition duration-200 hover:-translate-y-0.5 hover:border-white/40 hover:bg-brand-red/95 hover:shadow-[0_12px_30px_-8px_rgba(0,0,0,0.55)]"
                    : "inline-flex h-[48px] max-w-full items-center justify-center whitespace-nowrap rounded-full border border-white/30 bg-white/10 px-6 text-white backdrop-blur-md transition duration-200 hover:-translate-y-0.5 hover:border-white/45 hover:bg-white/20"
                }
              >
                {b.label}
              </Link>
            ))}
          </div>
        </div>
      </div>


      <button aria-label="Slide anterior" onClick={() => go(i - 1)} className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-brand-petrol/60 backdrop-blur text-white items-center justify-center hover:bg-brand-petrol">‹</button>
      <button aria-label="Próximo slide" onClick={() => go(i + 1)} className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-brand-petrol/60 backdrop-blur text-white items-center justify-center hover:bg-brand-petrol">›</button>

      {/* Controles discretos em liquid glass para o mobile — par centralizado acima do indicador, sem cobrir título/descrição/botões e sem colidir com os botões flutuantes (VLibras/WhatsApp/acessibilidade) */}
      <div className="md:hidden absolute bottom-16 inset-x-0 z-30 flex justify-center gap-4">
        <button aria-label="Slide anterior" onClick={() => go(i - 1)} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-white/25 text-white shadow-md backdrop-blur-md transition active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        <button aria-label="Próximo slide" onClick={() => go(i + 1)} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-white/25 text-white shadow-md backdrop-blur-md transition active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
        </button>
      </div>




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
            Cultura construída com o território.
          </h2>
          <BrushStroke color="#FFB400" className="mt-5 w-32" />
          <div className="mt-5 space-y-4 text-brand-gray" style={{ lineHeight: 1.7, maxWidth: "62ch" }}>
            <p>A Associação Maggu é uma organização da sociedade civil que transforma experiências culturais em formação, criação, memória, convivência e oportunidades.</p>
            <p>Sua atuação reúne diferentes iniciativas conectadas pelo compromisso de ampliar o acesso à cultura, fortalecer vínculos e criar novas possibilidades.</p>
          </div>
          <Link to="/quem-somos" hash="nossa-historia" className="mt-7 inline-flex rounded-full bg-brand-red px-6 py-3 text-sm text-white transition hover:bg-brand-petrol" style={{ fontWeight: 600 }}>
            Conheça nossa história
          </Link>
        </div>
        <div className="relative mx-auto w-full max-w-[320px] lg:max-w-[340px]">
          <div className="aspect-[4/5] overflow-hidden rounded-t-[46%] rounded-b-md">
            <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80" alt="Participantes reunidos em atividade cultural" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <ArcThick color="#00384C" className="absolute -top-5 -left-5 w-20" from={100} to={260} />
          <HatchedCircle size={78} color="#08B9E6" className="absolute -bottom-5 right-1 opacity-60" />
          <Triangle color="#FFB400" size={36} className="absolute top-8 -right-2" rotate={20} />
        </div>

      </div>
    </Section>
  );
}

function EcosystemSection() {
  return (
    <Section className="overflow-hidden bg-brand-soft py-14 md:py-20">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">Ecossistema Maggu</p>
          <h2 className="mt-3 text-brand-ink" style={{ fontSize: "clamp(1.75rem, 2.7vw, 2.65rem)", lineHeight: 1.15, fontWeight: 700 }}>Diferentes formas de atuar. Um mesmo território.</h2>
          <div className="mt-5 space-y-3 leading-relaxed text-brand-gray">
            <p>A Maggu conecta cultura, formação, memória, comunicação, infância, esporte e sustentabilidade em uma atuação construída de forma integrada.</p>
            <p>Seis eixos ajudam a compreender essa diversidade sem separar aquilo que, na prática, se conecta.</p>
          </div>
          <Link to="/ecossistema" className="mt-7 inline-flex rounded-full bg-brand-petrol px-7 py-3 text-sm font-bold text-white transition hover:bg-brand-red">Conheça o Ecossistema</Link>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-[430px]" role="img" aria-label="Composição gráfica abstrata representando os seis eixos conectados do Ecossistema Maggu">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 430 430" fill="none" aria-hidden="true">
            <path d="M80 129C145 48 280 52 346 129M71 226C130 176 300 176 359 226M92 310C174 374 275 366 341 302M120 90L316 332M320 92L104 320" stroke="var(--brand-petrol)" strokeOpacity=".12" strokeWidth="2" />
            <circle cx="214" cy="214" r="70" stroke="var(--brand-petrol)" strokeOpacity=".1" />
          </svg>
          {[
            ["Arte", "bg-brand-red", "left-[7%] top-[15%]"], ["Audiovisual", "bg-brand-cyan", "right-[3%] top-[20%]"],
            ["Memória", "bg-brand-gold", "left-[1%] top-[52%]"], ["Infância", "bg-brand-orange", "right-[2%] top-[50%]"],
            ["Esporte", "bg-brand-petrol", "bottom-[4%] left-[18%]"], ["Sustentabilidade", "bg-brand-lime", "bottom-[8%] right-[9%]"],
          ].map(([label, color, position]) => <span key={label} className={`absolute inline-flex items-center gap-2 rounded-full border border-brand-petrol/10 bg-background/80 px-3 py-2 text-xs font-semibold text-brand-ink shadow-sm backdrop-blur-sm ${position}`}><span className={`size-2.5 rounded-full ${color}`} aria-hidden="true" />{label}</span>)}
          <HatchedCircle size={92} color="#08B9E6" className="pointer-events-none absolute left-[38%] top-[38%] opacity-25" />
          <span className="absolute left-1/2 top-1/2 grid size-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-brand-petrol text-center text-[11px] font-bold uppercase tracking-[0.1em] text-primary-foreground shadow-md">Território</span>
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
    text: "Sessões, mostras e experiências formativas que aproximam diferentes públicos do cinema.",
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
        <SectionTitle eyebrow="Projetos" title="Conheça algumas iniciativas da Maggu" />
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

function ImpactoSection() {
  return (
    <Section className="relative overflow-hidden bg-brand-soft py-14 md:py-20">
      <ArcThick color="#00384C" className="pointer-events-none absolute -left-10 top-14 hidden w-24 opacity-20 md:block" from={180} to={320} />
      <span className="pointer-events-none absolute right-[7%] top-12 hidden size-3 rotate-45 bg-brand-gold/70 md:block" aria-hidden="true" />
      <DottedCurve className="pointer-events-none absolute -right-6 bottom-10 hidden w-40 text-brand-cyan/30 md:block" />
      <div className="container-x relative grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">Impacto</p>
          <h2 className="mt-3 text-brand-ink" style={{ fontSize: "clamp(1.7rem, 2.6vw, 2.5rem)", lineHeight: 1.18, fontWeight: 700 }}>O que fazemos precisa deixar evidências.</h2>
          <p className="mt-5 leading-relaxed text-brand-gray" style={{ maxWidth: "52ch" }}>Registramos atividades, resultados, histórias e aprendizados para compreender o alcance de nossas ações e melhorar continuamente. Aqui, números não substituem pessoas: ajudam a contar parte da transformação construída com elas.</p>
          <Link to="/impacto-memoria" className="group mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-petrol underline-offset-4 transition hover:underline">
            Conheça nosso impacto
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
          </Link>
        </div>
        <div className="relative mx-auto w-full max-w-[340px]">
          <div className="relative flex flex-wrap items-center justify-center gap-2.5">
            {["Histórias", "Registros", "Evidências", "Memória"].map((label, i) => (
              <span key={label} className={`inline-flex items-center gap-2 rounded-full border border-brand-petrol/12 bg-background/85 px-3.5 py-2 text-xs font-semibold text-brand-petrol shadow-sm backdrop-blur-sm ${i % 2 === 0 ? "" : "bg-brand-petrol/5"}`}>
                <span className={`size-2 ${i % 3 === 0 ? "rounded-full bg-brand-red" : i % 3 === 1 ? "rotate-45 bg-brand-gold" : "rounded-full bg-brand-cyan"}`} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
          <HatchedCircle size={70} color="#ED1C24" className="pointer-events-none absolute -left-7 -bottom-6 opacity-30" />
          <span className="pointer-events-none absolute -right-3 top-0 hidden size-2.5 rounded-full bg-brand-cyan/60 md:block" aria-hidden="true" />
        </div>
      </div>
    </Section>
  );
}

function CulturePointSection() {
  return (
    <section aria-labelledby="culture-point-title" className="relative overflow-hidden bg-white py-12 md:py-16">
      <div className="container-x relative">
        <div className="mx-auto grid max-w-5xl overflow-hidden rounded-2xl border border-brand-petrol/10 bg-brand-soft/45 shadow-[0_18px_40px_-38px_rgba(0,56,76,0.6)] md:grid-cols-[1.35fr_.65fr]">
          <div className="p-7 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">Ponto de Cultura</p>
            <h2 id="culture-point-title" className="mt-3 max-w-xl text-brand-ink" style={{ fontSize: "clamp(1.55rem, 2.3vw, 2.15rem)", lineHeight: 1.2, fontWeight: 700 }}>Cultura reconhecida no território.</h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-brand-gray md:text-base">O Teatro Escola Maggu é certificado como Ponto de Cultura, fortalecendo uma trajetória de atuação cultural construída no Benedito Bentes.</p>
            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-petrol/15 bg-white/70 px-4 py-2 text-xs font-semibold text-brand-petrol">
              <span className="size-2 rounded-full bg-brand-gold" aria-hidden="true" />
              Certificação Ponto de Cultura
            </span>
          </div>
          <div className="relative grid min-h-56 place-items-center overflow-hidden bg-brand-petrol/95 px-7 py-8 md:min-h-full">
            <HatchedCircle size={150} color="#FFB400" className="pointer-events-none absolute -right-10 -top-8 opacity-20" />
            <ArcThick color="#08B9E6" className="pointer-events-none absolute -left-6 bottom-6 w-24 opacity-40" from={200} to={330} />
            <div className="relative grid aspect-square w-full max-w-44 place-items-center rounded-full bg-background p-2 shadow-[0_18px_38px_-20px_rgba(0,0,0,0.65)] ring-1 ring-primary-foreground/25 md:max-w-48">
              <img src={culturePointSeal} alt="Selo oficial Ponto de Cultura, certificado pelo Ministério da Cultura" className="h-full w-full object-contain" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function AgendaSection() {
  const events = upcomingEvents(3);
  const [selectedEvent, setSelectedEvent] = useState<AgendaEvent | null>(null);
  return (
    <Section className="overflow-hidden bg-background py-14 md:py-20">
      <div className="container-x">
        <div className="grid items-end gap-5 sm:grid-cols-[minmax(0,1fr)_auto]">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">Agenda</p>
            <h2 className="mt-3 text-brand-ink" style={{ fontSize: "clamp(1.75rem, 2.7vw, 2.65rem)", lineHeight: 1.15, fontWeight: 700 }}>O que está acontecendo</h2>
            <p className="mt-4 leading-relaxed text-brand-gray">Confira as próximas atividades, encontros e ações do Ecossistema Maggu.</p>
          </div>
          <Link to="/agenda" className="inline-flex w-fit rounded-full bg-brand-petrol px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-red">Ver agenda completa</Link>
        </div>
        {events.length ? (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => {
              const { day, month } = eventDayMonth(event.date);
              const style = agendaCategoryStyles[event.category];
              return (
                <Button key={event.slug} type="button" variant="ghost" onClick={() => setSelectedEvent(event)} aria-label={`Ver detalhes de ${event.title}`} className="group relative h-auto w-full flex-col items-stretch overflow-hidden rounded-2xl border border-brand-petrol/10 bg-white/90 p-4 text-left shadow-[0_12px_28px_-26px_rgba(0,56,76,0.5)] transition duration-300 hover:!-translate-y-0.5 hover:!border-brand-petrol/25 hover:!bg-brand-soft/35 hover:!text-brand-ink hover:!shadow-[0_18px_34px_-24px_rgba(0,56,76,0.5)]">
                  <span className={`pointer-events-none absolute -right-6 -top-6 size-16 rounded-full opacity-[0.08] ${style.accentText.replace("text-", "bg-")}`} aria-hidden="true" />
                  <span className="flex items-center gap-3">
                    <time dateTime={event.date} className={`flex size-11 shrink-0 flex-col items-center justify-center rounded-xl bg-brand-soft/70 ${style.accentText}`}>
                      <span className="block text-base font-bold leading-none">{day}</span>
                      <span className="mt-0.5 block text-[9px] font-bold uppercase tracking-[0.1em]">{month}</span>
                    </time>
                    <span className={`block text-[10px] font-bold uppercase tracking-[0.12em] ${style.text}`}>{event.category}</span>
                  </span>
                  <span className="mt-3 block text-[15px] font-bold leading-snug text-brand-ink">{event.title}</span>
                  <span className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-brand-gray">
                    {event.time && <span className="flex items-center gap-1.5"><Clock3 className="size-3" aria-hidden="true" />{event.time}</span>}
                    {event.location && <span className="flex min-w-0 items-center gap-1.5"><MapPin className="size-3 shrink-0" aria-hidden="true" /><span className="truncate">{event.location}</span></span>}
                  </span>
                  {event.status && <span className={`mt-3 inline-flex w-fit rounded-full bg-brand-soft/80 px-2 py-0.5 text-[10px] font-semibold ${style.accentText}`}>{event.status === "inscricoes-abertas" ? "Inscrições abertas" : event.status === "ultimas-vagas" ? "Últimas vagas" : event.status === "inscricoes-encerradas" ? "Inscrições encerradas" : "Em breve"}</span>}
                </Button>
              );
            })}
          </div>

        ) : (
          <div className="max-w-2xl border-t border-brand-petrol/15 pt-6">
            <h3 className="text-xl text-brand-ink">Novas atividades em breve</h3>
            <p className="mt-3 leading-relaxed text-brand-gray">Acompanhe a Agenda para conhecer as próximas oficinas, apresentações, sessões e encontros.</p>
          </div>
        )}
      </div>
      <EventPreviewPanel event={selectedEvent} onOpenChange={(open) => { if (!open) setSelectedEvent(null); }} />
    </Section>
  );
}

function MemorySection() {
  const items = albums.slice(0, 3);
  return (
    <Section className="relative bg-white overflow-hidden">
      <ArcThick color="#FFB400" className="pointer-events-none absolute -left-10 top-16 hidden w-24 opacity-25 md:block" from={200} to={330} />
      <span className="pointer-events-none absolute right-[6%] top-10 hidden size-3 rotate-45 bg-brand-red/60 md:block" aria-hidden="true" />
      <DiamondsCluster color="#08B9E6" size={40} className="pointer-events-none absolute bottom-10 left-[4%] hidden opacity-50 lg:block" />
      <span className="pointer-events-none absolute bottom-16 right-[3%] hidden h-px w-20 bg-brand-petrol/20 md:block" aria-hidden="true" />
      <div className="container-x relative grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
        <div className="relative">
          <SectionTitle eyebrow="Memória" title="Memória em movimento" />
          <p className="text-brand-gray" style={{ lineHeight: 1.7, maxWidth: "56ch" }}>
            Nossa história também vive em fotografias, cartazes, vídeos, programas, documentos, bastidores e nas pessoas que fizeram parte de cada processo.
          </p>
          <Link to="/galeria" className="mt-7 inline-flex rounded-full border-2 border-brand-petrol px-6 py-3 text-sm font-bold text-brand-petrol transition hover:bg-brand-soft">Conheça nossa galeria</Link>
        </div>
        <div className="relative grid grid-cols-2 gap-4 sm:grid-cols-3">
          <HatchedCircle size={96} color="#08B9E6" className="pointer-events-none absolute -right-8 -top-8 opacity-25" />
          {items.map((a, idx) => (
            <div key={a.slug} className={`relative overflow-hidden rounded-md ${idx === 0 ? "col-span-2 sm:col-span-1 aspect-[4/3] sm:aspect-[3/4]" : "aspect-square"}`}>
              <img src={a.cover} alt="Registro fotográfico da trajetória da Associação Maggu" className="h-full w-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ParticipeSection() {
  const paths = ["Atividades", "Formação", "Colaboração", "Apoio", "Parcerias"];
  return (
    <Section className="relative overflow-hidden bg-white py-14 md:py-20">
      <ArcThick color="#FFB400" className="pointer-events-none absolute -right-10 top-10 hidden w-24 opacity-25 md:block" from={20} to={150} />
      <span className="pointer-events-none absolute left-[6%] top-14 hidden size-3 rotate-45 bg-brand-red/60 md:block" aria-hidden="true" />
      <DottedCurve className="pointer-events-none absolute -left-6 bottom-8 hidden w-40 text-brand-cyan/30 md:block" />
      <span className="pointer-events-none absolute right-[10%] bottom-12 hidden tracking-[0.4em] text-brand-gold/40 md:block" aria-hidden="true">•••</span>
      <div className="container-x relative mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">Participe</p>
        <h2 className="mt-3 text-brand-ink" style={{ fontSize: "clamp(1.7rem, 2.6vw, 2.5rem)", lineHeight: 1.18, fontWeight: 700 }}>Há muitas formas de fazer parte.</h2>
        <p className="mx-auto mt-5 leading-relaxed text-brand-gray" style={{ maxWidth: "54ch" }}>Você pode aprender, participar de uma atividade, colaborar com conhecimento, apoiar uma iniciativa ou construir uma parceria conosco.</p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
          {paths.map((p, i) => (
            <span key={p} className="inline-flex items-center gap-2 rounded-full border border-brand-petrol/12 bg-brand-soft/50 px-3.5 py-2 text-xs font-semibold text-brand-petrol">
              <span className={`size-2 ${i % 2 === 0 ? "rounded-full bg-brand-cyan" : "rotate-45 bg-brand-gold"}`} aria-hidden="true" />
              {p}
            </span>
          ))}
        </div>
        <Link to="/participe" className="group mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-petrol underline-offset-4 transition hover:underline">
          Conheça as formas de participar
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
        </Link>
      </div>
    </Section>
  );
}

function TransparencySection() {
  return (
    <section className="relative overflow-hidden bg-background pb-20 pt-14 md:pb-24 md:pt-20">
      <div className="container-x">
        <div className="mx-auto grid max-w-5xl overflow-hidden rounded-2xl border border-brand-petrol/10 bg-brand-soft/45 shadow-sm md:grid-cols-[1.4fr_.6fr]">
          <div className="p-7 md:p-10 lg:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">Transparência</p>
            <h2 className="mt-3 max-w-2xl text-brand-ink" style={{ fontSize: "clamp(1.55rem, 2.3vw, 2.2rem)", lineHeight: 1.2, fontWeight: 700 }}>Responsabilidade também faz parte da nossa atuação.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-brand-gray md:text-base">Documentos, políticas, informações institucionais e canais de integridade reunidos para ampliar o acesso público e fortalecer a confiança.</p>
            <Link to="/transparencia" className="mt-6 inline-flex rounded-full bg-brand-gold px-6 py-3 text-sm font-bold text-brand-petrol transition hover:bg-brand-cyan">Acessar Transparência</Link>
          </div>
          <div className="relative min-h-52 overflow-hidden bg-brand-petrol/95 md:min-h-full" aria-hidden="true">
            <span className="absolute left-[18%] top-[18%] h-[62%] w-[48%] rotate-[-5deg] rounded-md border border-primary-foreground/30 bg-background/10 backdrop-blur-sm" />
            <span className="absolute left-[31%] top-[27%] h-[58%] w-[49%] rotate-[6deg] rounded-md border border-primary-foreground/30 bg-background/15 backdrop-blur-sm" />
            <span className="absolute left-[43%] top-[39%] h-px w-[24%] bg-brand-gold" />
            <span className="absolute left-[43%] top-[50%] h-px w-[31%] bg-primary-foreground/45" />
            <span className="absolute left-[43%] top-[61%] h-px w-[23%] bg-primary-foreground/45" />
            <span className="absolute bottom-[18%] right-[14%] grid size-11 place-items-center rounded-full border border-brand-cyan/50 bg-brand-cyan/15 text-xl font-bold text-brand-cyan">✓</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <CompactFinalCTA title="Há muitas formas de caminhar com a Associação Maggu." text="Conheça nossa trajetória, explore os projetos e acompanhe as atividades que fortalecem cultura, formação e território." primary={{ label: "Conheça a Associação", to: "/quem-somos" }} secondary={{ label: "Ver Agenda", to: "/agenda" }} variant="home" />
  );
}
