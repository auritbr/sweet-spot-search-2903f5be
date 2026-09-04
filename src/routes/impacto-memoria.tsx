import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck2, FileCheck2, FolderKanban, History, MapPinned, Quote, Users } from "lucide-react";
import { CompactFinalCTA } from "@/components/CompactFinalCTA";
import { HeroButton, PageHero, Section, SectionTitle } from "@/components/PageHero";
import { ArcThick, HatchedCircle, Triangle } from "@/components/Shapes";

export const Route = createFileRoute("/impacto-memoria")({ head:()=>({meta:[
 {title:"Impacto & Memória | Associação Maggu"},{name:"description",content:"Conheça marcos, memórias e evidências da trajetória da Associação Maggu."},{property:"og:title",content:"Impacto & Memória | Associação Maggu"},{property:"og:description",content:"Resultados e histórias da Associação Maggu caminham juntos."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},
]}),component:ImpactoMemoria });

const indicators=[
 {label:"Anos de trajetória",status:"Referência cultural desde 1999",note:"Distinta da formalização jurídica em 2025.",icon:History,tone:"bg-brand-red/10 text-brand-red",shape:"bg-brand-red/20"},
 {label:"Pessoas alcançadas",status:"Em consolidação",note:"Publicação após validação interna.",icon:Users,tone:"bg-brand-cyan/10 text-brand-petrol",shape:"bg-brand-cyan/20"},
 {label:"Atividades realizadas",status:"Em consolidação",note:"Organização por período e categoria.",icon:CalendarCheck2,tone:"bg-brand-gold/15 text-brand-petrol",shape:"bg-brand-gold/25"},
 {label:"Projetos ativos",status:"Estrutura preparada",note:"Atualização futura pela gestão de conteúdo.",icon:FolderKanban,tone:"bg-brand-red/10 text-brand-red",shape:"bg-brand-red/20"},
 {label:"Territórios e parcerias",status:"Em consolidação",note:"Somente dados documentados serão publicados.",icon:MapPinned,tone:"bg-brand-cyan/10 text-brand-petrol",shape:"bg-brand-cyan/20"},
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
   <span className="pointer-events-none absolute -right-9 top-8 size-20 rounded-full border-[10px] border-brand-gold/15" aria-hidden="true" />
   <span className="pointer-events-none absolute left-[7%] top-16 hidden size-3 rotate-45 bg-brand-cyan/45 md:block" aria-hidden="true" />
   <div className="container-x">
    <div className="mx-auto max-w-4xl text-center">
     <SectionTitle align="center" eyebrow="Impacto & Memória" title="Resultados e histórias precisam caminhar juntos." />
     <p className="mx-auto max-w-3xl leading-relaxed text-brand-gray">Nesta página, indicadores quantitativos convivem com histórias, fotografias, documentos e evidências. Todo número publicado deverá indicar seu período de referência e origem.</p>
     <p className="mx-auto mt-5 max-w-xl border-l-2 border-brand-cyan pl-4 text-left text-sm font-semibold leading-relaxed text-brand-petrol sm:text-center sm:border-l-0 sm:pl-0">Memória, evidência e experiência reunidas em uma mesma narrativa.</p>
    </div>
   </div>
  </Section>

  <Section className="overflow-hidden bg-brand-soft"><div className="container-x"><div className="mx-auto max-w-3xl text-center"><SectionTitle align="center" eyebrow="Indicadores" title="O que podemos acompanhar" /></div><div className="mx-auto grid max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-5">{indicators.map((item,i)=>{const Icon=item.icon;return <article key={item.label} className="relative min-h-52 overflow-hidden rounded-[16px] border border-brand-petrol/8 bg-background/85 p-4 shadow-[0_14px_28px_-28px_rgba(0,56,76,0.55)]"><span className={`absolute -right-4 -top-4 size-11 ${i%2===0?"rounded-full":"rotate-45 rounded-sm"} ${item.shape}`} aria-hidden="true"/><span className={`inline-flex size-9 items-center justify-center rounded-full ${item.tone}`}><Icon className="size-4" aria-hidden="true"/></span><h3 className="mt-4 text-base leading-snug">{item.label}</h3><p className="mt-3 text-[13px] font-semibold text-brand-petrol">{item.status}</p><p className="mt-1.5 text-xs leading-relaxed text-brand-gray">{item.note}</p></article>})}</div></div></Section>

  <Section id="memoria" className="relative overflow-hidden bg-background">
   <HatchedCircle size={96} color="#ED1C24" className="pointer-events-none absolute -left-11 bottom-2 opacity-[0.07]" />
   <span className="pointer-events-none absolute right-[8%] top-10 hidden size-3 rotate-45 bg-brand-gold/70 md:block" aria-hidden="true" />
   <div className="container-x"><div className="mx-auto max-w-4xl text-center">
    <SectionTitle align="center" eyebrow="Memória Maggu" title="Registrar também é cuidar do que construímos."/>
    <div className="mx-auto max-w-3xl space-y-3 text-sm leading-relaxed text-brand-gray sm:text-base"><p>A Memória Maggu reúne fotografias, cartazes, vídeos, programas, publicações, produções e documentos que ajudam a contar uma trajetória construída por muitas pessoas.</p><p>Mais do que uma galeria, é um acervo vivo: preserva processos, reconhece participações e transforma documentação em patrimônio institucional e comunitário.</p></div>
    <Link to="/galeria" className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-petrol underline-offset-4 transition hover:underline">Acessar Galeria <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true"/></Link>
   </div></div>
  </Section>

  <Section className="relative overflow-hidden bg-brand-soft">
   <span className="pointer-events-none absolute -right-8 top-10 size-16 rounded-full border-[9px] border-brand-cyan/10" aria-hidden="true" />
   <span className="pointer-events-none absolute bottom-10 left-[6%] hidden tracking-[0.4em] text-brand-red/20 md:block" aria-hidden="true">••••</span>
   <div className="container-x"><SectionTitle align="center" title="Uma trajetória construída ao longo do tempo."/>
    <ol className="mx-auto grid max-w-6xl gap-3 lg:grid-cols-5">
     {timeline.map(([year,text],i)=><li key={`${year}-${text}`} className="relative min-h-48 overflow-hidden rounded-[15px] border border-brand-petrol/8 bg-background/80 p-5 shadow-[0_14px_28px_-28px_rgba(0,56,76,0.55)]"><span className={`absolute right-5 top-5 ${i%2===0?"size-2.5 rotate-45 rounded-sm":"size-3 rounded-full"} ${i%3===0?"bg-brand-red/65":i%3===1?"bg-brand-gold/75":"bg-brand-cyan/70"}`} aria-hidden="true"/><span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-gray/60">Marco {String(i+1).padStart(2,"0")}</span><p className="mt-3 text-3xl font-bold text-brand-petrol">{year}</p><p className="mt-3 text-sm leading-relaxed text-brand-gray">{text}</p></li>)}
    </ol>
   </div>
  </Section>

  <Section className="relative overflow-hidden bg-background">
   <ArcThick color="#FFB400" className="pointer-events-none absolute -right-10 top-8 w-20 opacity-[0.1]" from={25} to={150} />
   <div className="container-x"><div className="mx-auto max-w-4xl text-center"><SectionTitle align="center" eyebrow="Histórias" title="Nem todo impacto cabe em um número." text="Esta área está preparada para histórias e relatos relacionados às iniciativas, publicados somente após validação institucional."/>
    <article className="relative mx-auto mt-5 max-w-4xl overflow-hidden rounded-[16px] border border-brand-petrol/8 bg-brand-soft/55 px-5 py-6 text-left shadow-[0_16px_34px_-32px_rgba(0,56,76,0.65)] sm:px-7">
     <span className="absolute -bottom-5 -right-5 size-14 rounded-full bg-brand-cyan/10" aria-hidden="true"/><Quote className="size-6 text-brand-red/65" aria-hidden="true"/><p className="mt-3 inline-flex rounded-full border border-brand-red/15 bg-background/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-red">Conteúdo ilustrativo e fictício</p><blockquote className="mt-4 text-base leading-relaxed text-brand-ink sm:text-lg">Uma adolescente chegou à oficina de teatro observando tudo em silêncio. Aos poucos, encontrou nas cenas um jeito de falar, criar vínculos e dividir ideias com o grupo. A família percebeu que aquele encontro semanal também havia se tornado um espaço de convivência e confiança.</blockquote>
    </article>
   </div></div>
  </Section>

  <Section id="evidencias" className="relative overflow-hidden bg-brand-soft">
   <Triangle color="#FFB400" size={24} className="pointer-events-none absolute right-[8%] top-9 opacity-30" rotate={22}/>
   <div className="container-x"><div className="mx-auto grid max-w-4xl items-center gap-5 md:grid-cols-[auto_1fr_auto]">
    <span className="inline-flex size-10 items-center justify-center rounded-full bg-brand-cyan/10"><FileCheck2 className="size-5 text-brand-petrol" aria-hidden="true"/></span>
    <div><SectionTitle eyebrow="Evidências" title="Documentos que ajudam a comprovar trajetórias e resultados." text="O Banco de Evidências reúne certificados, declarações, registros, matérias, relatórios, programas, publicações e outros documentos comprobatórios."/></div>
    <Link to="/transparencia" className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-petrol underline-offset-4 transition hover:underline">Acessar Transparência <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true"/></Link>
   </div></div>
  </Section>

  <CompactFinalCTA title="Uma trajetória se fortalece quando pode ser conhecida, lembrada e compartilhada." text="Explore as iniciativas da Maggu, conheça o território onde essa história acontece e consulte os documentos que ajudam a registrar sua continuidade." primary={{label:"Ecossistema",to:"/ecossistema"}} secondary={{label:"Território",to:"/quem-somos/territorio"}} tertiary={{label:"Transparência",to:"/transparencia"}} variant="impact"/>
 </>}