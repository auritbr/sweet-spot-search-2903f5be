// Conteúdo institucional sujeito à validação final da Associação Maggu.
//
// PENDÊNCIAS INSTITUCIONAIS (não implementadas e não anunciadas ao público):
// responsáveis pelo recebimento; triagem; critérios de encaminhamento; conflitos de
// interesse; confidencialidade; guarda e descarte de dados; regras de acesso; prazos
// internos; possibilidade ou não de anonimato; eventual proteção contra retaliação;
// integração com Código de Ética e com a política de Privacidade.
// Enquanto o fluxo não for aprovado, o formulário permanece desativado (canalDenunciasAtivo = false),
// sem endpoint e sem envio de dados.
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArcThick, HatchedCircle, Triangle, QuarterCircle } from "@/components/Shapes";
import { Breadcrumbs } from "@/components/Legal";
import { useState } from "react";

export const Route = createFileRoute("/canal-de-denuncias")({
  head: () => ({
    meta: [
      { title: "Canal de Denúncias e Relato Ético | Associação Maggu" },
      { name: "description", content: "Conheça o Canal de Denúncias e Relato Ético da Associação Maggu e as orientações para encaminhamento responsável de situações relacionadas à integridade institucional." },
      { property: "og:title", content: "Canal de Denúncias e Relato Ético | Associação Maggu" },
      { property: "og:description", content: "Orientações para encaminhamento responsável de situações relacionadas à integridade institucional." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/canal-de-denuncias" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/canal-de-denuncias" }],
  }),
  component: CanalDenuncias,
});

/** Flag de configuração: só ativar após aprovação formal do fluxo operacional. */
const canalDenunciasAtivo = false;

const categorias = [
  "discriminação",
  "preconceito",
  "violência",
  "assédio",
  "intolerância",
  "violação de direitos",
  "condutas incompatíveis com normas institucionais",
  "situações relacionadas à proteção de participantes",
  "outras questões de ética e integridade",
];

const faq = [
  {
    q: "Qual é a diferença entre denúncia e contato geral?",
    a: "O contato geral é destinado a dúvidas sobre atividades, projetos, inscrições, parcerias, apoio ou atendimento institucional. O Canal de Denúncias é destinado a situações relacionadas a condutas, direitos, normas de proteção, políticas institucionais ou princípios de integridade.",
  },
  {
    q: "Que tipo de situação deve ser encaminhada por este canal?",
    a: "Situações que possam contrariar o Estatuto, o Código de Ética e Conduta, políticas institucionais, direitos, normas de proteção ou a legislação aplicável.",
  },
  {
    q: "O canal já está disponível para envio?",
    a: "O formulário eletrônico será disponibilizado após a conclusão do fluxo operacional.",
  },
  {
    q: "Quem poderá acessar os relatos?",
    a: "O acesso deverá ser restrito às pessoas formalmente designadas para o tratamento dos relatos, conforme procedimento institucional aprovado.",
  },
  {
    q: "É possível enviar um relato de forma anônima?",
    a: "O procedimento definitivo ainda está em estruturação. A Associação não deve prometer anonimato antes da definição e implementação técnica das regras correspondentes.",
  },
  {
    q: "Como meus dados serão tratados?",
    a: "Relatos de integridade devem utilizar fluxo próprio, com acesso restrito e regras específicas de tratamento, em coerência com as orientações da página de Privacidade e Proteção de Dados.",
  },
];

/**
 * Estrutura futura do formulário. Permanece oculta enquanto canalDenunciasAtivo = false.
 * Campos previstos: categoria do relato; descrição; relação com a Associação; local ou
 * atividade relacionada; período aproximado; anexos (se futuramente aprovados);
 * identificação opcional (somente se o fluxo aprovado permitir); canal para retorno
 * (somente se aplicável); ciência sobre tratamento dos dados.
 */
function FormularioRelato() {
  if (!canalDenunciasAtivo) return null;
  return (
    <form className="rounded-2xl border border-black/10 p-6 space-y-4" aria-label="Formulário de relato">
      {/* Renderizar o fluxo aprovado quando o canal for ativado. */}
    </form>
  );
}

function CanalDenuncias() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <main id="main">
      <section className="relative pt-28 pb-14 md:pt-32 md:pb-16 overflow-hidden text-white" style={{ backgroundColor: "#00384C" }}>
        <QuarterCircle corner="tr" color="#FFB400" className="absolute top-0 right-0 w-20 md:w-32 opacity-90" />
        <ArcThick color="#FFB400" className="absolute -left-12 bottom-4 w-32 md:w-44 opacity-50" from={20} to={160} />
        <HatchedCircle size={140} color="#08B9E6" className="absolute right-16 -bottom-10 opacity-20 hidden md:block" />
        <div className="container-x relative max-w-3xl">
          <nav aria-label="Você está aqui" className="text-xs text-white/70">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li><Link to="/" className="underline underline-offset-2 hover:text-brand-gold">Início</Link></li>
              <li aria-hidden="true">›</li>
              <li><Link to="/quem-somos" className="underline underline-offset-2 hover:text-brand-gold">Quem Somos</Link></li>
              <li aria-hidden="true">›</li>
              <li><Link to="/transparencia" className="underline underline-offset-2 hover:text-brand-gold">Transparência</Link></li>
              <li aria-hidden="true">›</li>
              <li aria-current="page" className="text-white" style={{ fontWeight: 600 }}>Canal de Denúncias</li>
            </ol>
          </nav>

          <div className="mt-6 flex items-start gap-4">
            <span className="hidden sm:inline-flex w-12 h-12 rounded-full items-center justify-center shrink-0" style={{ backgroundColor: "rgba(255,255,255,0.1)" }} aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFB400" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12a8 8 0 1 0-3.2 6.4L21 20z" />
                <path d="M9 11h6" /><path d="M9 8h6" />
              </svg>
            </span>
            <div>
              <p className="uppercase tracking-[0.22em] text-xs" style={{ color: "#FFB400", fontWeight: 600 }}>Integridade</p>
              <h1 className="mt-3" style={{ fontSize: "clamp(1.8rem, 2.9vw, 2.9rem)", lineHeight: 1.12, fontWeight: 700 }}>
                Canal de Denúncias e Relato Ético
              </h1>
              <p className="mt-5 text-white/85" style={{ fontSize: "clamp(1rem, 1.2vw, 1.1rem)", lineHeight: 1.65 }}>
                Um espaço destinado ao encaminhamento responsável de situações que possam contrariar normas, direitos ou princípios institucionais.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 md:py-14" aria-labelledby="apresentacao-canal">
        <div className="container-x max-w-3xl">
          <h2 id="apresentacao-canal" className="text-brand-ink" style={{ fontSize: "clamp(1.3rem, 1.9vw, 1.7rem)", lineHeight: 1.25, fontWeight: 700 }}>
            Sobre o canal
          </h2>
          <div className="mt-4 space-y-4 text-brand-gray" style={{ lineHeight: 1.7 }}>
            <p>
              Este canal é destinado ao relato de situações que possam contrariar o Estatuto, o Código de Ética e Conduta, políticas institucionais, direitos, normas de proteção ou a legislação aplicável.
            </p>
            <p>
              A Associação Maggu repudia práticas de discriminação, preconceito, violência, intolerância religiosa, racismo, machismo, sexismo, LGBTQIA+fobia e outras condutas incompatíveis com seus princípios.
            </p>
            <p>
              Os relatos devem ser tratados com responsabilidade, confidencialidade e acesso restrito às pessoas designadas para recebimento e encaminhamento, conforme o procedimento institucional aprovado.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-soft/60 py-10 md:py-14" aria-labelledby="onde-encaminhar">
        <div className="container-x max-w-4xl">
          <h2 id="onde-encaminhar" className="text-brand-ink" style={{ fontSize: "clamp(1.3rem, 1.9vw, 1.7rem)", lineHeight: 1.25, fontWeight: 700 }}>
            Onde encaminhar cada assunto
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-white border border-black/10 p-6 md:p-7">
              <span className="inline-block w-10 h-1.5 rounded-full" style={{ backgroundColor: "#08B9E6" }} aria-hidden="true" />
              <h3 className="mt-4 text-brand-ink" style={{ fontSize: "1.15rem", fontWeight: 700 }}>Precisa falar com a Associação?</h3>
              <p className="mt-3 text-brand-gray text-sm" style={{ lineHeight: 1.7 }}>
                Dúvidas sobre atividades, projetos, inscrições, parcerias, apoio ou atendimento institucional devem ser encaminhadas pelo contato geral.
              </p>
              <Link to="/contato" className="mt-5 inline-flex items-center px-5 py-2.5 rounded-full text-white text-sm hover:opacity-90" style={{ backgroundColor: "#ED1C24", fontWeight: 600 }}>
                Ir para Contato
              </Link>
            </div>
            <div className="rounded-2xl bg-white border border-black/10 p-6 md:p-7">
              <span className="inline-block w-10 h-1.5 rounded-full" style={{ backgroundColor: "#FFB400" }} aria-hidden="true" />
              <h3 className="mt-4 text-brand-ink" style={{ fontSize: "1.15rem", fontWeight: 700 }}>Precisa relatar uma situação de integridade?</h3>
              <p className="mt-3 text-brand-gray text-sm" style={{ lineHeight: 1.7 }}>
                O Canal de Denúncias é destinado a situações relacionadas a condutas, direitos, normas de proteção, políticas institucionais ou princípios de integridade.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 md:py-14" aria-labelledby="o-que-relatar">
        <div className="container-x max-w-3xl">
          <h2 id="o-que-relatar" className="text-brand-ink" style={{ fontSize: "clamp(1.3rem, 1.9vw, 1.7rem)", lineHeight: 1.25, fontWeight: 700 }}>
            O que pode ser relatado
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {categorias.map((c) => (
              <li key={c} className="flex items-start gap-3 rounded-xl border border-black/10 px-4 py-3 text-sm text-brand-ink">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00384C" strokeWidth="2.5" className="mt-0.5 shrink-0" aria-hidden="true"><path d="M20 6L9 17l-5-5" /></svg>
                <span className="capitalize">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-brand-soft/60 py-10 md:py-14" aria-labelledby="como-funciona">
        <div className="container-x max-w-3xl">
          <h2 id="como-funciona" className="text-brand-ink" style={{ fontSize: "clamp(1.3rem, 1.9vw, 1.7rem)", lineHeight: 1.25, fontWeight: 700 }}>
            Como o canal funciona
          </h2>
          <p className="mt-4 text-brand-gray" style={{ lineHeight: 1.7 }}>
            A Associação está estruturando os procedimentos necessários para recebimento, análise, proteção das informações e encaminhamento adequado dos relatos.
          </p>

          {!canalDenunciasAtivo && (
            <div role="note" className="mt-6 rounded-2xl bg-white border-l-4 p-5 md:p-6" style={{ borderColor: "#FFB400" }}>
              <p className="text-brand-ink" style={{ fontWeight: 700 }}>Canal em estruturação</p>
              <p className="mt-2 text-sm text-brand-gray" style={{ lineHeight: 1.7 }}>
                O formulário eletrônico será disponibilizado após a definição e aprovação do fluxo operacional, das responsabilidades, das regras de confidencialidade e das medidas de proteção de dados.
              </p>
            </div>
          )}

          <FormularioRelato />
        </div>
      </section>

      <section className="bg-white py-10 md:py-14" aria-labelledby="privacidade-canal">
        <div className="container-x max-w-3xl">
          <h2 id="privacidade-canal" className="text-brand-ink" style={{ fontSize: "clamp(1.3rem, 1.9vw, 1.7rem)", lineHeight: 1.25, fontWeight: 700 }}>
            Privacidade e proteção das informações
          </h2>
          <p className="mt-4 text-brand-gray" style={{ lineHeight: 1.7 }}>
            Relatos relacionados à integridade podem envolver informações sensíveis. Por isso, o Canal de Denúncias deve utilizar fluxo próprio, com acesso restrito e regras específicas de tratamento.
          </p>
          <Link to="/privacidade" className="mt-5 inline-flex items-center px-5 py-2.5 rounded-full border border-brand-ink/20 text-brand-ink text-sm hover:bg-brand-soft" style={{ fontWeight: 600 }}>
            Consulte Privacidade e Proteção de Dados
          </Link>
        </div>
      </section>

      <section className="bg-brand-soft/60 py-10 md:py-14" aria-labelledby="faq-canal">
        <div className="container-x max-w-3xl">
          <h2 id="faq-canal" className="text-brand-ink" style={{ fontSize: "clamp(1.3rem, 1.9vw, 1.7rem)", lineHeight: 1.25, fontWeight: 700 }}>
            Perguntas frequentes
          </h2>
          <div className="mt-6 space-y-3">
            {faq.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="rounded-2xl bg-white border border-black/10 overflow-hidden">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-btn-${i}`}
                      className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-brand-soft/60 transition"
                    >
                      <span className="flex-1 text-brand-ink text-sm md:text-base" style={{ fontWeight: 600 }}>{f.q}</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-brand-ink shrink-0 motion-safe:transition-transform" style={{ transform: isOpen ? "rotate(180deg)" : "none" }} aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
                    </button>
                  </h3>
                  <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} hidden={!isOpen} className="px-5 pb-5 text-sm text-brand-gray" style={{ lineHeight: 1.7 }}>
                    {f.a}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16" aria-labelledby="cta-canal">
        <div className="container-x max-w-3xl relative">
          <Triangle color="#08B9E6" size={30} className="absolute right-0 -top-2 hidden md:block" rotate={18} />
          <h2 id="cta-canal" className="text-brand-ink" style={{ fontSize: "clamp(1.25rem, 1.8vw, 1.6rem)", lineHeight: 1.3, fontWeight: 700 }}>
            Para outros assuntos, utilize nossos canais institucionais.
          </h2>
          <p className="mt-3 text-brand-gray" style={{ lineHeight: 1.7 }}>
            Informações sobre atividades, projetos, parcerias, apoio ou atendimento geral devem ser encaminhadas pela página de Contato.
          </p>
          <Link to="/contato" className="mt-5 inline-flex items-center px-6 py-3 rounded-full text-white text-sm hover:opacity-90" style={{ backgroundColor: "#00384C", fontWeight: 600 }}>
            Fale com a Associação
          </Link>
        </div>
      </section>
    </main>
  );
}
