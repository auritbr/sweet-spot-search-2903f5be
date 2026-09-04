import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BarChart3, Camera, FileCheck2, Quote } from "lucide-react";
import { CompactFinalCTA } from "@/components/CompactFinalCTA";
import { HeroButton, PageHero, Section, SectionTitle } from "@/components/PageHero";
import { ArcThick, HatchedCircle, QuarterCircle, Triangle } from "@/components/Shapes";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/impacto-memoria")({ head:()=>({meta:[
 {title:"Impacto & Memória | Associação Maggu"},{name:"description",content:"Conheça marcos, memórias e evidências da trajetória da Associação Maggu."},{property:"og:title",content:"Impacto & Memória | Associação Maggu"},{property:"og:description",content:"Resultados e histórias da Associação Maggu caminham juntos."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},
]}),component:ImpactoMemoria });

const indicators=[
 {label:"Anos de trajetória",status:"Referência cultural desde 1999",note:"Distinta da formalização jurídica em 2025."},
 {label:"Pessoas alcançadas",status:"Em consolidação",note:"Publicação após validação interna."},
 {label:"Atividades realizadas",status:"Em consolidação",note:"Organização por período e categoria."},
 {label:"Projetos ativos",status:"Estrutura preparada",note:"Atualização futura pela gestão de conteúdo."},
 {label:"Territórios e parcerias",status:"Em consolidação",note:"Somente dados documentados serão publicados."},
];

const timeline=[
 ["1999","Início da trajetória artística com a Companhia de Teatro Cortina."],
 ["2001","A Paixão de Cristo amplia a presença cultural no território."],
 ["2025","Formalização da Associação Sócio Cultural Maggu."],
 ["2025","Teatro Escola Maggu certificado como Ponto de Cultura."],
 ["2026","Fortalecimento da governança, Comissão ODS e consolidação do Ecossistema Maggu."],
] as const;

function ImpactoMemoria(){return <>
 <PageHero eyebrow="Impacto & Memória" title="Impacto que pode ser visto, contado e lembrado." subtitle="Cada oficina, sessão, livro, encontro, apresentação ou formação só ganha sentido quando produz experiência, acesso, memória e possibilidade. Por isso, registramos resultados sem reduzir pessoas a números." image="https://images.unsplash.com/photo-1519683384663-1de1a1e3f6a7?auto=format&fit=crop&w=1920&q=80" accent="gold" brush="#08B9E6" decoration="frame"><HeroButton to="#memoria" tone="gold">Explorar memória</HeroButton><HeroButton to="#evidencias" tone="cyan">Ver evidências</HeroButton></PageHero>

 <Section className="relative overflow-hidden bg-background">
  <QuarterCircle corner="tr" color="#FFB400" className="pointer-events-none absolute -right-3 -top-3 w-24 opacity-15" />
  <ArcThick color="#08B9E6" className="pointer-events-none absolute -left-12 bottom-4 w-24 opacity-10" from={205} to={330} />
  <div className="container-x">
   <div className="relative mx-auto grid max-w-5xl overflow-hidden rounded-[16px] border border-brand-petrol/10 bg-brand-soft/45 shadow-sm lg:grid-cols-[0.62fr_1.38fr]">
    <div className="relative flex min-h-36 items-end overflow-hidden bg-brand-petrol p-6 text-primary-foreground lg:min-h-64 lg:p-8">
     <span className="absolute -right-8 -top-8 size-28 rounded-full border-[14px] border-brand-cyan/15" aria-hidden="true" />
     <span className="absolute left-7 top-7 size-3 rotate-45 bg-brand-gold" aria-hidden="true" />
     <p className="relative max-w-xs text-sm font-semibold leading-relaxed text-primary-foreground/85">Memória, evidência e experiência reunidas em uma mesma narrativa.</p>
    </div>
    <div className="relative px-6 py-7 sm:px-8 lg:px-10 lg:py-9">
     <span className="absolute right-7 top-0 h-1 w-12 bg-brand-red" aria-hidden="true" />
     <SectionTitle title="Resultados e histórias precisam caminhar juntos." />
     <p className="max-w-2xl leading-relaxed text-brand-gray">Nesta página, indicadores quantitativos convivem com histórias, fotografias, documentos e evidências. Todo número publicado deverá indicar seu período de referência e origem.</p>
    </div>
   </div>
  </div>
 </Section>

 <Section className="overflow-hidden bg-brand-soft"><div className="container-x"><div className="mx-auto max-w-3xl text-center"><SectionTitle align="center" eyebrow="Indicadores" title="O que podemos acompanhar" /></div><div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-5">{indicators.map((item,i)=><article key={item.label} className="relative overflow-hidden rounded-[14px] border border-brand-petrol/10 bg-background/80 p-5 shadow-sm"><span className={`absolute inset-x-0 top-0 h-0.5 ${i%3===0?"bg-brand-red":i%3===1?"bg-brand-gold":"bg-brand-cyan"}`} /><BarChart3 className={`size-5 ${i===0?"text-brand-red":"text-brand-cyan"}`}/><h3 className="mt-5 text-base leading-snug">{item.label}</h3><p className="mt-3 text-sm font-semibold text-brand-petrol">{item.status}</p><p className="mt-1.5 text-xs leading-relaxed text-brand-gray">{item.note}</p></article>)}</div></div></Section>

 <Section id="memoria" className="relative overflow-hidden bg-background">
  <HatchedCircle size={130} color="#ED1C24" className="pointer-events-none absolute -left-14 bottom-5 opacity-[0.08]" />
  <div className="container-x"><div className="relative mx-auto grid max-w-5xl items-center gap-7 overflow-hidden rounded-[16px] border border-brand-petrol/10 bg-brand-soft/35 p-6 shadow-sm md:grid-cols-[1fr_auto] md:p-8">
   <span className="pointer-events-none absolute right-0 top-0 size-16 rounded-bl-full bg-brand-cyan/10" aria-hidden="true" />
   <div><SectionTitle eyebrow="Memória Maggu" title="Registrar também é cuidar do que construímos."/><div className="max-w-3xl space-y-3 text-sm leading-relaxed text-brand-gray sm:text-base"><p>A Memória Maggu reúne fotografias, cartazes, vídeos, programas, publicações, produções e documentos que ajudam a contar uma trajetória construída por muitas pessoas.</p><p>Mais do que uma galeria, é um acervo vivo: preserva processos, reconhece participações e transforma documentação em patrimônio institucional e comunitário.</p></div></div>
   <div className="relative flex min-w-48 flex-col items-center rounded-[12px] bg-brand-petrol px-6 py-7 text-center text-primary-foreground"><Camera className="size-7 text-brand-gold" aria-hidden="true"/><p className="mt-3 text-sm font-semibold text-primary-foreground">Memória visual e acervo</p><Button asChild size="sm" className="mt-4 rounded-full bg-brand-gold px-5 text-brand-petrol hover:bg-brand-cyan"><Link to="/galeria">Acessar Galeria <ArrowRight className="size-4" /></Link></Button></div>
  </div></div>
 </Section>

 <Section className="relative overflow-hidden bg-brand-soft">
  <span className="pointer-events-none absolute right-[7%] top-10 size-3 rotate-45 bg-brand-red/60" aria-hidden="true" />
  <div className="container-x"><SectionTitle align="center" title="Uma trajetória construída ao longo do tempo."/>
   <ol className="relative mx-auto mt-10 grid max-w-6xl gap-4 md:grid-cols-5 md:gap-3">
    <span className="absolute left-[9%] right-[9%] top-6 hidden h-px bg-brand-petrol/15 md:block" aria-hidden="true" />
    {timeline.map(([year,text],i)=><li key={`${year}-${text}`} className="relative pt-0 md:pt-12"><span className={`absolute left-1/2 top-[19px] z-10 hidden size-3 -translate-x-1/2 rounded-full ring-[7px] ring-brand-soft md:block ${i%3===0?"bg-brand-red":i%3===1?"bg-brand-gold":"bg-brand-cyan"}`} aria-hidden="true"/><article className="relative h-full overflow-hidden rounded-[13px] border border-brand-petrol/10 bg-background/80 p-5 shadow-sm"><span className={`absolute left-0 top-0 h-full w-1 md:h-1 md:w-full ${i%3===0?"bg-brand-red":i%3===1?"bg-brand-gold":"bg-brand-cyan"}`} aria-hidden="true"/><span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-gray/60">Marco {String(i+1).padStart(2,"0")}</span><p className="mt-2 text-2xl font-bold text-brand-petrol">{year}</p><p className="mt-3 text-sm leading-relaxed text-brand-gray">{text}</p></article></li>)}
   </ol>
  </div>
 </Section>

 <Section className="relative overflow-hidden bg-background">
  <ArcThick color="#FFB400" className="pointer-events-none absolute -right-10 top-10 w-24 opacity-[0.12]" from={25} to={150} />
  <div className="container-x"><div className="mx-auto max-w-5xl"><SectionTitle eyebrow="Histórias" title="Nem todo impacto cabe em um número." text="Esta área está preparada para histórias e relatos relacionados às iniciativas, publicados somente após validação institucional."/>
   <article className="relative mt-6 grid overflow-hidden rounded-[16px] border border-brand-petrol/10 bg-brand-soft/45 shadow-sm md:grid-cols-[0.34fr_1fr]">
    <div className="relative flex min-h-40 items-center justify-center bg-brand-gold/20 p-6"><Quote className="size-12 text-brand-red/70" aria-hidden="true"/><span className="absolute bottom-5 left-5 size-3 rotate-45 bg-brand-cyan" aria-hidden="true"/></div>
    <div className="p-6 sm:p-8"><p className="inline-flex rounded-full border border-brand-red/20 bg-background px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-red">Conteúdo ilustrativo e fictício</p><blockquote className="mt-4 text-lg leading-relaxed text-brand-ink">Uma adolescente chegou à oficina de teatro observando tudo em silêncio. Aos poucos, encontrou nas cenas um jeito de falar, criar vínculos e dividir ideias com o grupo. A família percebeu que aquele encontro semanal também havia se tornado um espaço de convivência e confiança.</blockquote><p className="mt-4 text-sm leading-relaxed text-brand-gray">Relato fictício criado exclusivamente para demonstrar como futuras histórias poderão ser apresentadas nesta seção.</p></div>
   </article>
  </div></div>
 </Section>

 <Section id="evidencias" className="relative overflow-hidden bg-brand-soft">
  <Triangle color="#FFB400" size={30} className="pointer-events-none absolute right-[8%] top-10 opacity-35" rotate={22}/>
  <div className="container-x"><div className="relative mx-auto grid max-w-5xl items-center gap-7 overflow-hidden rounded-[16px] border border-brand-petrol/10 bg-background/75 p-6 shadow-sm md:grid-cols-[auto_1fr_auto] md:p-8">
   <span className="pointer-events-none absolute bottom-0 left-8 h-1 w-14 bg-brand-cyan" aria-hidden="true" />
   <span className="inline-flex size-12 items-center justify-center rounded-full bg-brand-cyan/10"><FileCheck2 className="size-6 text-brand-petrol" aria-hidden="true"/></span>
   <div><SectionTitle eyebrow="Evidências" title="Documentos que ajudam a comprovar trajetórias e resultados." text="O Banco de Evidências reúne certificados, declarações, registros, matérias, relatórios, programas, publicações e outros documentos comprobatórios."/></div>
   <Button asChild className="rounded-full bg-brand-petrol px-6 text-primary-foreground hover:bg-brand-red"><Link to="/transparencia">Acessar Transparência <ArrowRight className="size-4" /></Link></Button>
  </div></div>
 </Section>

 <Section className="bg-background"><div className="container-x"><nav aria-label="Conexões" className="flex flex-wrap justify-center gap-3"><Link to="/ecossistema" className="rounded-full border border-brand-petrol/20 px-5 py-2 text-sm font-semibold">Ecossistema</Link><Link to="/quem-somos/territorio" className="rounded-full border border-brand-petrol/20 px-5 py-2 text-sm font-semibold">Território</Link><Link to="/transparencia" className="rounded-full border border-brand-petrol/20 px-5 py-2 text-sm font-semibold">Transparência</Link></nav></div></Section>
 <CompactFinalCTA title="Conheça o que permanece depois de cada ação." text="Explore projetos, memórias, documentos e evidências da trajetória da Associação Maggu." primary={{label:"Explorar memória",href:"#memoria"}} secondary={{label:"Ver Transparência",to:"/transparencia"}} variant="continuity"/>
 </>}