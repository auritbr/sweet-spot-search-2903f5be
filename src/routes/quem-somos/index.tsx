import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, SectionTitle } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { FinalCampaignCTA } from "@/components/FinalCampaignCTA";
import { ArcThick, BrushStroke, DiamondsCluster, HatchedCircle, QuarterCircle, Triangle } from "@/components/Shapes";

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
  { year: "1999", title: "O início da trajetória", text: "Nasce a Companhia de Teatro Cortina, dando início a uma trajetória de criação, formação artística e mobilização cultural." },
  { year: "2001", title: "A relação com o território se fortalece", text: "A Paixão de Cristo amplia a participação de artistas e moradores e fortalece a presença cultural no Benedito Bentes." },
  { year: "2025", title: "A Associação é formalizada", text: "A trajetória construída ao longo dos anos ganha uma nova estrutura institucional com a formalização da Associação Sócio Cultural Maggu." },
  { year: "2025", title: "Reconhecimento como Ponto de Cultura", text: "O Teatro Escola Maggu é certificado como Ponto de Cultura." },
  { year: "2026", title: "Consolidação do Ecossistema Maggu", text: "A Associação fortalece sua governança e organiza suas diferentes iniciativas como parte do Ecossistema Maggu." },
];

const process = [
  { number: "01", title: "Escutar", text: "Compreender pessoas, contextos, histórias e possibilidades presentes no território." },
  { number: "02", title: "Formar", text: "Criar oportunidades de aprendizagem, experimentação e desenvolvimento por meio da cultura." },
  { number: "03", title: "Criar", text: "Transformar experiências, ideias e repertórios em processos, ações e formas de expressão." },
  { number: "04", title: "Circular", text: "Compartilhar produções, conhecimentos e experiências com diferentes públicos e espaços." },
  { number: "05", title: "Registrar", text: "Preservar processos e memórias para reconhecer trajetórias e fortalecer a continuidade." },
];

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
      />

      <Section className="bg-white overflow-hidden">
        <div className="container-x grid gap-12 md:grid-cols-[1.05fr_.95fr] items-center">
          <div className="max-w-2xl">
            <SectionTitle eyebrow="Associação Maggu" title="Uma trajetória cultural que ganhou forma institucional." />
            <div className="space-y-5 text-brand-gray leading-relaxed">
              <p>A Associação Sócio Cultural Maggu é uma organização da sociedade civil sediada no Benedito Bentes, em Maceió. Formalizada em 2025, organiza e amplia uma trajetória cultural construída ao longo de décadas por meio do teatro, da formação artística e da mobilização comunitária.</p>
              <p>Hoje, a Associação articula iniciativas de cultura, educação, audiovisual, leitura, memória, comunicação, infância, esporte, sustentabilidade e desenvolvimento comunitário.</p>
              <p>Cada frente possui identidade própria, mas todas compartilham o compromisso de ampliar o acesso à cultura, fortalecer vínculos, formar pessoas, preservar memórias e criar oportunidades.</p>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-lg">
            <div className="aspect-[4/5] overflow-hidden rounded-t-[48%] rounded-b-md">
              <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80" alt="Pessoas reunidas em atividade cultural" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <ArcThick color="#ED1C24" className="absolute -left-8 -top-7 w-32" from={100} to={260} />
            <HatchedCircle size={116} color="#08B9E6" className="absolute -bottom-8 -right-5 opacity-60" />
            <Triangle color="#FFB400" size={46} className="absolute right-2 top-14" rotate={18} />
          </div>
        </div>
      </Section>

      <section id="nossa-historia" className="scroll-mt-24 overflow-hidden bg-brand-soft py-12 md:py-16 lg:py-20">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] items-start">
            <div className="lg:sticky lg:top-28">
              <SectionTitle eyebrow="Nossa história" title="Nossa história começou antes da Associação." />
            </div>
            <div className="space-y-5 text-brand-gray leading-relaxed">
              <p>A Maggu nasce de uma trajetória cultural construída muito antes da atual estrutura institucional. Teatro, formação artística e mobilização comunitária foram criando relações com artistas, moradores e diferentes gerações do Benedito Bentes.</p>
              <p>Ao longo dos anos, essa experiência ampliou linguagens, iniciativas e formas de participação. Em 2025, esse percurso ganhou uma estrutura jurídica própria com a formalização da Associação Sócio Cultural Maggu, fortalecendo as condições para organizar, conectar e dar continuidade ao trabalho desenvolvido.</p>
              <p>Hoje, essa trajetória segue em movimento por meio das diferentes iniciativas que compõem o Ecossistema Maggu.</p>
            </div>
          </div>

          <div className="mt-12 hidden lg:block" aria-label="Linha do tempo da Associação Maggu">
            <ol className="relative grid min-h-[450px] grid-cols-5 gap-6">
              <span className="absolute left-[9%] right-[9%] top-1/2 -z-0 h-0.5 bg-brand-red/30" aria-hidden="true" />
              {milestones.map((item, index) => {
                const above = index % 2 === 0;
                return (
                  <li key={`${item.year}-${item.title}`} className="relative min-w-0">
                    <span className="absolute left-1/2 top-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-red ring-4 ring-brand-soft" />
                    <span className={`absolute left-1/2 h-10 w-px -translate-x-1/2 bg-brand-red/40 ${above ? "bottom-1/2 mb-2" : "top-1/2 mt-2"}`} aria-hidden="true" />
                    <div className={`absolute inset-x-0 px-1 text-center ${above ? "bottom-[calc(50%+3.5rem)]" : "top-[calc(50%+3.5rem)]"}`}>
                      <p className="text-xl font-bold text-brand-red">{item.year}</p>
                      <h3 className="mt-2 text-base leading-snug text-brand-ink">{item.title}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-brand-gray">{item.text}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          <ol className="relative ml-2 mt-12 space-y-8 border-l-2 border-brand-red/30 pl-7 lg:hidden">
            {milestones.map((item) => (
              <li key={`${item.year}-${item.title}`} className="relative">
                <span className="absolute -left-[2.18rem] top-1 h-4 w-4 rounded-full bg-brand-red ring-4 ring-brand-soft" />
                <p className="text-xl font-bold text-brand-red">{item.year}</p>
                <h3 className="mt-1 text-base text-brand-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-gray">{item.text}</p>
              </li>
            ))}
          </ol>

          <aside className="relative mt-14 overflow-hidden bg-brand-petrol px-7 py-9 md:grid md:grid-cols-[1.15fr_.85fr] md:items-center md:gap-12 md:px-11 md:py-11" aria-labelledby="ponto-cultura-title">
            <QuarterCircle corner="br" color="#ED1C24" className="absolute -bottom-2 -right-2 w-28 opacity-90 md:w-36" />
            <div className="relative max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-red">Ponto de Cultura</p>
              <h2 id="ponto-cultura-title" className="mt-3 text-2xl text-primary-foreground">Um reconhecimento que integra essa trajetória.</h2>
              <p className="mt-4 leading-relaxed text-primary-foreground/85">Em 2025, o Teatro Escola Maggu foi certificado como Ponto de Cultura, fortalecendo institucionalmente uma atuação cultural construída no território.</p>
            </div>
            <div className="relative mt-9 flex min-h-40 items-center justify-center md:mt-0" aria-hidden="true">
              <HatchedCircle size={176} color="#08B9E6" className="absolute opacity-35" />
              <ArcThick color="#FFB400" className="absolute -left-2 top-1/2 w-24 -translate-y-1/2" from={210} to={340} />
              <div className="relative bg-brand-gold px-7 py-5 text-4xl font-bold text-brand-petrol md:text-5xl">2025</div>
            </div>
          </aside>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-petrol py-12 md:py-16 lg:py-20">
        <HatchedCircle size={210} color="#08B9E6" className="absolute -bottom-20 -right-12 opacity-20" />
        <ArcThick color="#FFB400" className="absolute -left-6 top-8 w-32" from={210} to={340} />
        <div className="container-x grid gap-10 lg:grid-cols-[1.08fr_.92fr] items-center">
          <div className="relative overflow-hidden rounded-md aspect-[16/10]">
            <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=80" alt="Pessoas compartilhando uma atividade comunitária" className="h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-brand-petrol/20" />
          </div>
          <div className="relative text-white">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-gold">Território</p>
            <h2 className="mt-3 text-white text-2xl md:text-3xl leading-tight">Benedito Bentes: território de onde partimos e com quem construímos.</h2>
            <p className="mt-5 leading-relaxed text-white/90">O Benedito Bentes não é apenas o endereço da Associação. É território de relações, memórias, desafios, saberes e potências que ajudam a explicar por que e para quem o Ecossistema Maggu existe.</p>
            <p className="mt-4 leading-relaxed text-white/90">É parte da identidade da Maggu e do modo como a organização pensa cultura, acesso, memória, formação e participação.</p>
          </div>
        </div>
      </section>

      <Section className="overflow-hidden bg-white">
        <div className="container-x">
          <SectionTitle align="center" eyebrow="O que nos orienta" title="Missão e filosofia" text="Duas referências que orientam a atuação da Associação e conectam suas diferentes iniciativas." />
          <div className="grid gap-7 lg:grid-cols-[1.18fr_.82fr] lg:items-end">
            <article className="relative flex min-h-[380px] flex-col justify-between overflow-hidden bg-brand-petrol p-8 md:p-11">
              <QuarterCircle corner="tr" color="#ED1C24" className="absolute -right-2 -top-2 w-36 opacity-90" />
              <HatchedCircle size={160} color="#08B9E6" className="absolute -left-12 top-8 opacity-25" />
              <p className="relative text-xs font-bold uppercase tracking-[0.22em] text-brand-gold">Missão</p>
              <div className="relative max-w-3xl text-center md:text-left">
                <BrushStroke color="#FFB400" className="mx-auto mb-7 w-24 md:mx-0" />
                <h2 className="text-2xl leading-snug text-primary-foreground md:text-3xl">Transformar a exclusão cultural em obra-prima, antes que a criatividade seja uma relíquia do passado. Incluir, inspirar, criar.</h2>
              </div>
            </article>
            <article className="relative flex min-h-[330px] flex-col justify-between overflow-hidden bg-brand-gold p-8 md:p-10">
              <ArcThick color="#ED1C24" className="absolute -right-8 -top-8 w-32" from={120} to={280} />
              <DiamondsCluster color="#00384C" className="absolute left-8 top-8 opacity-35" size={52} />
              <p className="relative text-right text-xs font-bold uppercase tracking-[0.22em] text-brand-red">Filosofia</p>
              <div className="relative text-center">
                <h2 className="text-2xl leading-snug text-brand-petrol md:text-3xl">A arte como instrumento de transformação social.</h2>
                <p className="mt-4 leading-relaxed text-brand-petrol">É a partir dessa compreensão que a Associação desenvolve experiências de formação, criação, convivência, memória e participação cultural.</p>
              </div>
            </article>
          </div>
        </div>
      </Section>

      <Section className="overflow-hidden bg-brand-soft">
        <div className="container-x">
          <SectionTitle align="center" eyebrow="Nossa forma de atuar" title="Da escuta ao registro" text="A atuação da Maggu conecta cinco movimentos que ajudam a orientar seus processos culturais." />
          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((item, index) => (
              <li key={item.title} className={`relative flex min-h-64 flex-col overflow-hidden p-6 ${["bg-brand-red text-primary-foreground", "bg-brand-gold text-brand-petrol", "bg-brand-cyan text-brand-petrol", "bg-brand-petrol text-primary-foreground", "bg-brand-lime text-brand-petrol"][index]}`}>
                <span className="absolute right-4 top-1 text-7xl font-bold opacity-15" aria-hidden="true">{item.number}</span>
                <div className="relative flex h-11 w-11 items-center justify-center border-2 border-current text-sm font-bold">{item.number}</div>
                <div className="relative mt-auto pt-12">
                  <h3 className="text-xl text-inherit">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed opacity-90">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section className="overflow-hidden bg-white">
        <div className="container-x mx-auto max-w-5xl text-center">
          <SectionTitle align="center" eyebrow="Organização institucional" title="Uma estrutura para dar continuidade ao que construímos." text="A formalização da Associação fortalece a definição de responsabilidades, a organização institucional e a continuidade das iniciativas desenvolvidas." />
          <h3 className="mt-2 text-xs font-bold uppercase tracking-[0.22em] text-brand-red">Diretoria</h3>
          <div className="mx-auto mt-7 grid max-w-4xl gap-5 md:grid-cols-2">
            <article className="flex min-h-44 flex-col items-center justify-center bg-brand-petrol p-7 text-center">
              <h4 className="text-xl text-primary-foreground">Cristiano Alcides da Silva Paes</h4>
              <p className="mt-3 text-sm text-primary-foreground/80">Diretor Geral</p>
            </article>
            <article className="flex min-h-44 flex-col items-center justify-center bg-brand-gold p-7 text-center">
              <h4 className="text-xl text-brand-petrol">Rafaela da Silva Leite</h4>
              <p className="mt-3 text-sm text-brand-petrol/80">Diretora Administrativo-Financeira</p>
            </article>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/equipe" className="inline-flex rounded-full bg-brand-petrol px-6 py-2.5 text-sm font-bold text-primary-foreground transition hover:bg-brand-red">Conheça nossa equipe</Link>
            <Link to="/transparencia" className="inline-flex rounded-full border-2 border-brand-petrol px-6 py-2.5 text-sm font-bold text-brand-petrol transition hover:bg-brand-soft">Acesse a Transparência</Link>
          </div>
        </div>
      </Section>

      <FinalCampaignCTA eyebrow="Trajetória em movimento" title="Conheça como essa trajetória continua se desdobrando." text="A história da Maggu se organiza em diferentes frentes de atuação, iniciativas e experiências conectadas ao território." primary={{ label: "Conheça o Ecossistema", to: "/ecossistema" }} secondary={{ label: "Ver Transparência", to: "/transparencia" }} image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1920&q=80" variant="right" />
    </>
  );
}