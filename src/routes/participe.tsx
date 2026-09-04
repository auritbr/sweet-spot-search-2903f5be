import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Building2, CalendarDays, CircleDollarSign, GraduationCap, HandHeart, Handshake, Megaphone, Package, Sparkles, Wrench } from "lucide-react";
import { CompactFinalCTA } from "@/components/CompactFinalCTA";
import { HeroButton, PageHero, Section, SectionTitle } from "@/components/PageHero";
import { ArcThick, HatchedCircle, QuarterCircle } from "@/components/Shapes";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/participe")({
  head: () => ({ meta: [
    { title: "Participe | Associação Maggu" },
    { name: "description", content: "Conheça formas de participar, colaborar, apoiar ou construir uma parceria com a Associação Maggu." },
    { property: "og:title", content: "Participe | Associação Maggu" },
    { property: "og:description", content: "Há muitas formas de fazer parte do Ecossistema Maggu." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Participe,
});

const paths = [
  { title: "Atividades", text: "Veja o que está acontecendo e encontre uma ação para participar.", cta: "Ver Agenda", to: "/agenda", icon: CalendarDays, accent: "bg-brand-red", soft: "bg-brand-red/8" },
  { title: "Formação", text: "Conheça cursos, oficinas e percursos formativos.", cta: "Ver formações", to: "/projetos", icon: GraduationCap, accent: "bg-brand-gold", soft: "bg-brand-gold/12" },
  { title: "Colaboração", text: "Artistas, educadores, voluntários e outros colaboradores podem somar conhecimentos e experiências.", cta: "Quero colaborar", href: "#colaboracao", icon: Sparkles, accent: "bg-brand-cyan", soft: "bg-brand-cyan/10" },
  { title: "Parcerias", text: "Instituições, empresas e organizações podem construir ações, projetos e cooperações com a Associação.", cta: "Propor parceria", href: "#parcerias", icon: Handshake, accent: "bg-brand-orange", soft: "bg-brand-orange/10" },
  { title: "Apoio", text: "Contribuições, materiais, livros, equipamentos, serviços e outras formas de apoio ajudam a manter iniciativas em movimento.", cta: "Quero apoiar", href: "#apoie", icon: HandHeart, accent: "bg-brand-lime", soft: "bg-brand-lime/10" },
] as const;

const support = [
  { label: "Contribuição financeira", icon: CircleDollarSign, accent: "bg-brand-red/10", iconColor: "text-brand-red" },
  { label: "Materiais e equipamentos", icon: Package, accent: "bg-brand-cyan/10", iconColor: "text-brand-petrol" },
  { label: "Livros", icon: BookOpen, accent: "bg-brand-gold/15", iconColor: "text-brand-petrol" },
  { label: "Serviços", icon: Wrench, accent: "bg-brand-orange/10", iconColor: "text-brand-orange" },
  { label: "Parceria institucional", icon: Building2, accent: "bg-brand-lime/12", iconColor: "text-brand-petrol" },
  { label: "Patrocínio", icon: Megaphone, accent: "bg-brand-red/10", iconColor: "text-brand-red" },
];

const partnerships = ["Ações", "Formações", "Projetos", "Cooperações"];

function Participe() {
  return <>
    <PageHero eyebrow="Participe" title="Há muitas formas de fazer parte." subtitle="O Ecossistema Maggu é feito de encontros. Você pode participar de uma atividade, iniciar uma formação, colaborar com uma ação, compartilhar conhecimento, apoiar uma iniciativa ou construir uma parceria." image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1920&q=80" accent="gold" brush="#ED1C24" decoration="constellation">
      <HeroButton to="/agenda" tone="gold">Ver Agenda</HeroButton>
      <HeroButton to="#caminhos" tone="cyan">Conheça os caminhos</HeroButton>
    </PageHero>

    <Section id="caminhos" className="relative overflow-hidden bg-background">
      <HatchedCircle size={150} color="#08B9E6" className="pointer-events-none absolute -right-16 top-12 opacity-[0.09]" />
      <ArcThick color="#FFB400" className="pointer-events-none absolute -left-14 bottom-16 w-24 opacity-[0.13]" from={210} to={335} />
      <div className="container-x">
        <SectionTitle align="center" eyebrow="Escolha como participar" title="Encontre a forma que combina com você." />
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-6">
          {paths.map((item, i) => {
            const Icon = item.icon;
            const linkClasses = "mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-petrol transition group-hover:gap-3";
            return <article key={item.title} className={`group relative flex min-h-60 flex-col overflow-hidden rounded-[16px] border border-brand-petrol/10 bg-brand-soft/35 p-5 shadow-[0_16px_34px_-32px_rgba(0,56,76,0.65)] transition duration-300 hover:-translate-y-1 hover:bg-background ${i < 3 ? "lg:col-span-2" : i === 3 ? "lg:col-span-3 lg:ml-12" : "lg:col-span-3 lg:mr-12"}`}>
              {i % 3 === 0 && <span className={`absolute left-0 top-5 h-14 w-1 rounded-r-full ${item.accent}`} aria-hidden="true" />}
              {i % 3 === 1 && <span className={`absolute right-0 top-0 size-14 rounded-bl-full ${item.soft}`} aria-hidden="true" />}
              {i % 3 === 2 && <span className={`absolute right-5 top-5 size-3 rotate-45 ${item.accent}`} aria-hidden="true" />}
              <span className={`inline-flex size-11 items-center justify-center rounded-full ${item.soft} text-brand-petrol`}><Icon className="size-5" aria-hidden="true" /></span>
              <h2 className="mt-5 text-xl font-bold text-brand-ink">{item.title}</h2>
              <p className="mt-2.5 flex-1 text-sm leading-[1.65] text-brand-gray">{item.text}</p>
              {"href" in item
                ? <a href={item.href} className={linkClasses}>{item.cta}<ArrowRight className="size-4" aria-hidden="true" /></a>
                : <Link to={item.to} className={linkClasses}>{item.cta}<ArrowRight className="size-4" aria-hidden="true" /></Link>}
            </article>;
          })}
        </div>
      </div>
    </Section>

    <Section id="apoie" className="overflow-hidden bg-brand-soft">
      <QuarterCircle corner="br" color="#ED1C24" className="pointer-events-none absolute -left-4 top-12 w-12 opacity-20" />
      <span className="pointer-events-none absolute right-9 top-12 hidden tracking-[0.45em] text-brand-cyan/25 md:block" aria-hidden="true">•••••</span>
      <div className="container-x grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
        <div>
          <SectionTitle eyebrow="Apoie" title="Ajude a manter ideias em movimento." />
          <div className="space-y-4 leading-relaxed text-brand-gray">
            <p>Manter atividades culturais e comunitárias exige espaço, pessoas, materiais, equipamentos e continuidade.</p>
            <p>Apoiar a Associação Maggu é contribuir para que ações de cultura, educação, leitura, cinema, esporte, memória e sustentabilidade continuem alcançando pessoas e território.</p>
            <p>O apoio pode acontecer por meio de contribuição financeira, doação de materiais ou equipamentos, livros, prestação de serviços, parceria institucional ou patrocínio, conforme cada iniciativa.</p>
          </div>
        </div>
        <ul className="grid grid-cols-2 gap-3">
          {support.map(({ label, icon: Icon, accent, iconColor }, i) => <li key={label} className={`group relative flex min-h-28 flex-col justify-between overflow-hidden rounded-[14px] border border-brand-petrol/10 bg-background/80 p-4 shadow-[0_12px_26px_-26px_rgba(0,56,76,0.6)] transition hover:-translate-y-0.5 ${i === 0 || i === 5 ? "sm:translate-y-3" : ""}`}>
            {i % 2 === 0 ? <span className={`absolute -right-4 -top-4 size-12 rounded-full ${accent}`} aria-hidden="true" /> : <span className={`absolute right-4 top-4 size-2 rotate-45 ${accent}`} aria-hidden="true" />}
            <span className={`inline-flex size-9 items-center justify-center rounded-full ${accent} ${iconColor}`}><Icon className="size-4" aria-hidden="true" /></span>
            <p className="relative mt-4 max-w-[13rem] text-sm font-semibold leading-snug text-brand-ink">{label}</p>
          </li>)}
        </ul>
      </div>
    </Section>

    <Section id="parcerias" className="relative overflow-hidden bg-background">
      <ArcThick color="#FFB400" className="pointer-events-none absolute -left-12 top-12 w-24 opacity-[0.16]" from={210} to={340} />
      <HatchedCircle size={82} color="#00384C" className="pointer-events-none absolute -right-8 bottom-9 opacity-[0.09]" />
      <div className="container-x grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
        <div>
          <SectionTitle eyebrow="Parcerias" title="Vamos construir juntos?" />
          <p className="max-w-2xl leading-relaxed text-brand-gray">A Associação Maggu acredita em redes. Instituições públicas e privadas, organizações sociais, coletivos, empresas, artistas, educadores e profissionais podem construir conosco ações, formações, projetos, eventos, campanhas e outras formas de cooperação.</p>
          <Button asChild className="mt-6 rounded-full bg-brand-petrol px-6 text-primary-foreground hover:bg-brand-red"><Link to="/contato">Propor parceria</Link></Button>
        </div>
        <div className="relative grid grid-cols-2 gap-3">
          <span className="pointer-events-none absolute -left-3 top-1/2 hidden h-px w-6 bg-brand-cyan/45 lg:block" aria-hidden="true" />
          {partnerships.map((item, i) => <div key={item} className={`group relative flex min-h-32 flex-col justify-end overflow-hidden rounded-[15px] border border-brand-petrol/10 p-4 transition hover:-translate-y-0.5 ${i === 0 ? "bg-brand-petrol text-primary-foreground" : "bg-brand-soft/55 text-brand-ink"} ${i === 1 || i === 2 ? "translate-y-3" : ""}`}>
            {i === 0 && <span className="absolute -right-5 -top-5 size-16 rounded-full border-[8px] border-brand-cyan/20" aria-hidden="true" />}
            {i === 1 && <span className="absolute right-4 top-4 size-3 rotate-45 bg-brand-gold" aria-hidden="true" />}
            {i === 2 && <span className="absolute right-0 top-0 size-10 rounded-bl-full bg-brand-cyan/12" aria-hidden="true" />}
            {i === 3 && <span className="absolute right-4 top-4 h-px w-8 bg-brand-red/60" aria-hidden="true" />}
            <span className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${i === 0 ? "text-brand-gold" : "text-brand-gray/60"}`}>0{i + 1}</span>
            <p className="mt-2 text-base font-bold">{item}</p>
          </div>)}
        </div>
      </div>
    </Section>

    <Section id="colaboracao" className="overflow-hidden bg-brand-petrol text-primary-foreground">
      <QuarterCircle corner="tr" color="#08B9E6" className="pointer-events-none absolute -right-7 top-0 w-20 opacity-20" />
      <ArcThick color="#FFB400" className="pointer-events-none absolute -left-12 bottom-0 w-24 opacity-20" from={205} to={325} />
      <div className="container-x">
        <div className="relative grid items-center gap-7 border-b border-primary-foreground/15 pb-8 md:grid-cols-[1fr_auto]">
          <span className="pointer-events-none absolute right-0 top-0 hidden size-3 rotate-45 bg-brand-red md:block" aria-hidden="true" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.22em] text-brand-gold">Colaboração</p>
            <h2 className="mt-3 text-2xl text-primary-foreground md:text-3xl">Conhecimento também pode ser compartilhado.</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-primary-foreground/80">Artistas, educadores, voluntários e outros profissionais podem colaborar com experiências, saberes e práticas em diferentes iniciativas da Associação.</p>
          </div>
          <Button asChild className="rounded-full bg-brand-cyan px-6 text-brand-petrol hover:bg-brand-gold"><Link to="/contato">Quero colaborar</Link></Button>
        </div>
        <div className="relative mt-6 grid items-center gap-5 rounded-[14px] bg-primary-foreground/7 px-5 py-5 backdrop-blur-sm md:grid-cols-[1fr_auto] md:px-6">
          <span className="pointer-events-none absolute left-0 top-4 h-8 w-1 rounded-r-full bg-brand-gold" aria-hidden="true" />
          <div className="pl-2"><h2 className="text-xl text-primary-foreground">Ainda não sabe qual caminho escolher?</h2><p className="mt-1.5 text-sm text-primary-foreground/70">Fale com a Associação Maggu e conte como gostaria de participar.</p></div>
          <Button asChild className="rounded-full bg-brand-red px-6 text-primary-foreground hover:bg-brand-gold hover:text-brand-petrol"><Link to="/contato">Entre em contato</Link></Button>
        </div>
      </div>
    </Section>

    <CompactFinalCTA title="Toda participação começa por um primeiro encontro." text="Conheça as atividades em andamento, formas de colaboração, apoio e parceria." primary={{ label: "Ver Agenda", to: "/agenda" }} secondary={{ label: "Entre em contato", to: "/contato" }} variant="home" />
  </>;
}