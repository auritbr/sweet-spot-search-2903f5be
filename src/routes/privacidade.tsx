// Conteúdo jurídico fornecido integralmente pela Associação Maggu — não alterar.
import { createFileRoute } from "@tanstack/react-router";
import { DocIndex, DocSection } from "@/components/Legal";
import { CompactFinalCTA } from "@/components/CompactFinalCTA";


export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Associação Maggu" },
      { name: "description", content: "Entenda como a Associação Maggu trata, protege e utiliza dados pessoais em suas atividades, projetos e canais institucionais." },
      { property: "og:title", content: "Política de Privacidade | Associação Maggu" },
      { property: "og:description", content: "Política de Privacidade e Proteção de Dados Pessoais da Associação Sócio Cultural Maggu, conforme a LGPD." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacidade" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/privacidade" }],
  }),
  component: Privacidade,
});

const ultimaAtualizacao = "4 de setembro de 2026";

const toc = [
  { id: "sec-1", label: "Apresentação" },
  { id: "sec-2", label: "A quem esta Política se aplica" },
  { id: "sec-3", label: "Quem é responsável pelo tratamento dos dados" },
  { id: "sec-4", label: "Princípios adotados pela Associação Maggu" },
  { id: "sec-5", label: "Quais dados pessoais poderão ser coletados" },
  { id: "sec-6", label: "Dados pessoais sensíveis" },
  { id: "sec-7", label: "Como os dados podem ser coletados" },
  { id: "sec-8", label: "Para quais finalidades os dados pessoais poderão ser utilizados" },
  { id: "sec-9", label: "Bases legais utilizadas para o tratamento" },
  { id: "sec-10", label: "Crianças e adolescentes" },
  { id: "sec-11", label: "Fotografias, vídeos, voz e divulgação institucional" },
  { id: "sec-12", label: "Compartilhamento de dados pessoais" },
  { id: "sec-13", label: "Prestadores de serviços e plataformas de terceiros" },
  { id: "sec-14", label: "Transferência internacional de dados" },
  { id: "sec-15", label: "Cookies e tecnologias semelhantes" },
  { id: "sec-16", label: "Links e serviços de terceiros" },
  { id: "sec-17", label: "Redes sociais" },
  { id: "sec-18", label: "Por quanto tempo os dados são armazenados" },
  { id: "sec-19", label: "Segurança dos dados pessoais" },
  { id: "sec-20", label: "Incidentes de segurança" },
  { id: "sec-21", label: "Direitos dos titulares de dados pessoais" },
  { id: "sec-22", label: "Como exercer seus direitos" },
  { id: "sec-23", label: "Comunicações institucionais" },
  { id: "sec-24", label: "Atualização e correção dos dados" },
  { id: "sec-25", label: "Responsabilidades dos usuários e titulares" },
  { id: "sec-26", label: "Dados disponibilizados publicamente pelo próprio titular" },
  { id: "sec-27", label: "Prestação de contas, editais e projetos financiados" },
  { id: "sec-28", label: "Compromisso com a privacidade" },
  { id: "sec-29", label: "Alterações desta Política de Privacidade" },
  { id: "sec-30", label: "Legislação e autoridade competente" },
  { id: "sec-31", label: "Canal de Privacidade" },
];

function List({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

function Privacidade() {
  return (
    <main id="main" className="bg-brand-soft/60">
      <section className="relative overflow-hidden border-b border-brand-petrol/10 bg-background py-10 md:py-12">
        <div className="container-x relative">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-cyan">Privacidade</p>
          <h1 className="mt-3 text-[1.7rem] font-bold leading-[1.15] text-brand-ink md:text-[2.2rem]">Política de Privacidade</h1>
          <p className="mt-3 max-w-2xl text-[0.98rem] leading-relaxed text-brand-gray">Proteção de dados pessoais e transparência institucional.</p>
        </div>
        <span className="pointer-events-none absolute -right-10 top-1/2 hidden size-28 -translate-y-1/2 rounded-full border-[10px] border-brand-cyan/10 md:block" aria-hidden="true" />
      </section>

      <div className="px-4 py-8 md:px-6 md:py-12">
        <article className="mx-auto max-w-[1000px] rounded-md bg-background px-5 py-8 shadow-[0_1px_3px_rgba(0,56,76,0.06),0_10px_30px_-18px_rgba(0,56,76,0.25)] md:px-14 md:py-14">
          <header className="border-b border-brand-petrol/12 pb-7 text-center">
            <h2 className="text-[1.35rem] font-bold uppercase leading-[1.25] tracking-[0.01em] text-brand-ink md:text-[1.85rem]">
              Política de Privacidade e Proteção de Dados Pessoais
            </h2>
            <div className="mt-4 space-y-1 text-sm leading-relaxed text-brand-gray">
              <p className="font-semibold text-brand-ink">Associação Sócio Cultural Maggu – Associação Maggu</p>
              <p>CNPJ nº 61.841.454/0001-80</p>
              <p className="pt-2">Última atualização: {ultimaAtualizacao}</p>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 rounded-md border border-brand-petrol/15 bg-brand-soft/60 px-3 py-1.5 text-[13px] font-medium text-brand-ink backdrop-blur transition-colors hover:bg-brand-soft"
              >
                Baixar em PDF
              </button>
            </div>
            <DocIndex items={toc} />
          </header>


            <DocSection id="sec-1" number={1} tone="privacy" title="Apresentação">
              <p>
                A <strong>Associação Sócio Cultural Maggu</strong>, nome público <strong>Associação Maggu</strong>, pessoa jurídica de direito privado, sem fins lucrativos, inscrita no CNPJ sob o nº <strong>61.841.454/0001-80</strong>, com sede na <strong>Rua Em Projeto A, 33 — Benedito Bentes — Maceió/AL — CEP 57084-411</strong>, reconhece a importância da privacidade e da proteção dos dados pessoais das pessoas que se relacionam com suas atividades, projetos, ações, serviços, canais digitais e iniciativas institucionais.
              </p>
              <p>
                Esta Política de Privacidade e Proteção de Dados Pessoais explica, de forma transparente, como a Associação Maggu poderá coletar, utilizar, armazenar, compartilhar, proteger e eliminar dados pessoais no desenvolvimento de suas atividades.
              </p>
              <p>O tratamento de dados pessoais é realizado em conformidade com a legislação brasileira aplicável, especialmente:</p>
              <List items={[
                "a Constituição Federal;",
                "a Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais (LGPD);",
                "a Lei nº 12.965/2014 — Marco Civil da Internet;",
                "a Lei nº 8.069/1990 — Estatuto da Criança e do Adolescente (ECA), quando aplicável;",
                "a Lei nº 15.211/2025 — Estatuto Digital da Criança e do Adolescente, quando aplicável;",
                "demais normas e regulamentações expedidas pela Autoridade Nacional de Proteção de Dados — ANPD e por autoridades competentes.",
              ]} />
              <p>
                A proteção de dados pessoais integra o compromisso institucional da Associação Maggu com a ética, a transparência, o respeito às pessoas e a condução responsável de suas atividades culturais, sociais, formativas e comunitárias.
              </p>
            </DocSection>

            <DocSection id="sec-2" number={2} tone="privacy" title="A quem esta Política se aplica">
              <p>
                Esta Política se aplica às pessoas físicas cujos dados pessoais sejam tratados pela Associação Maggu em razão de relacionamento institucional ou utilização de seus canais e atividades.
              </p>
              <p>Isso pode incluir, conforme cada situação:</p>
              <List items={[
                "visitantes e usuários do site;",
                "pessoas que entrem em contato com a Associação;",
                "participantes de projetos, programas, oficinas, eventos e demais atividades;",
                "inscritos e interessados em ações promovidas pela Associação;",
                "crianças e adolescentes participantes de atividades, observadas as proteções específicas previstas em lei;",
                "pais, mães e responsáveis legais;",
                "associados;",
                "dirigentes;",
                "integrantes;",
                "colaboradores;",
                "voluntários;",
                "prestadores de serviços;",
                "artistas, educadores, oficineiros e profissionais envolvidos em projetos;",
                "parceiros institucionais;",
                "representantes de organizações públicas e privadas;",
                "fornecedores;",
                "doadores e apoiadores;",
                "candidatos a oportunidades divulgadas pela Associação;",
                "demais pessoas que mantenham algum tipo de relacionamento com a Associação Maggu.",
              ]} />
            </DocSection>

            <DocSection id="sec-3" number={3} tone="privacy" title="Quem é responsável pelo tratamento dos dados">
              <p>
                Para os tratamentos de dados pessoais em que define as respectivas finalidades e os meios utilizados, a controladora dos dados é:
              </p>
              <dl className="grid gap-3 rounded border border-brand-petrol/12 bg-brand-soft/40 px-5 py-5 text-[0.95rem] sm:grid-cols-[minmax(0,190px)_minmax(0,1fr)] sm:gap-x-6 sm:gap-y-2.5">
                <dt className="font-semibold text-brand-ink">Razão social:</dt>
                <dd className="break-words">Associação Sócio Cultural Maggu</dd>
                <dt className="font-semibold text-brand-ink">Nome público:</dt>
                <dd className="break-words">Associação Maggu</dd>
                <dt className="font-semibold text-brand-ink">CNPJ:</dt>
                <dd className="break-words">61.841.454/0001-80</dd>
                <dt className="font-semibold text-brand-ink">Natureza jurídica:</dt>
                <dd className="break-words">Associação Privada</dd>
                <dt className="font-semibold text-brand-ink">Endereço:</dt>
                <dd className="break-words">Rua Em Projeto A, 33 — Benedito Bentes — Maceió/AL — CEP 57084-411</dd>
                <dt className="font-semibold text-brand-ink">Telefone institucional:</dt>
                <dd className="break-words">(82) 99806-7374</dd>
                <dt className="font-semibold text-brand-ink">E-mail para contato:</dt>
                <dd className="break-all">comunicacaomktmaggu@gmail.com</dd>
              </dl>
              <p>Solicitações relacionadas à privacidade e à proteção de dados pessoais poderão ser encaminhadas para os canais indicados nesta Política.</p>
            </DocSection>

            <DocSection id="sec-4" number={4} tone="privacy" title="Princípios adotados pela Associação Maggu">
              <p>
                A Associação Maggu busca realizar o tratamento de dados pessoais de acordo com os princípios estabelecidos pela LGPD, incluindo:
              </p>
              <p><strong>Finalidade:</strong> os dados são tratados para propósitos legítimos, específicos e informados ao titular.</p>
              <p><strong>Adequação:</strong> o tratamento deve ser compatível com as finalidades informadas.</p>
              <p><strong>Necessidade:</strong> são tratados apenas os dados necessários para a realização de cada finalidade.</p>
              <p><strong>Livre acesso:</strong> os titulares podem obter informações sobre o tratamento realizado, nos termos da legislação.</p>
              <p><strong>Qualidade dos dados:</strong> são adotadas medidas para manter os dados adequados, corretos e atualizados quando necessário.</p>
              <p><strong>Transparência:</strong> são disponibilizadas informações claras e acessíveis sobre as práticas de tratamento.</p>
              <p><strong>Segurança:</strong> são adotadas medidas destinadas a proteger os dados pessoais contra acessos não autorizados e situações acidentais ou ilícitas.</p>
              <p><strong>Prevenção:</strong> são adotadas medidas para prevenir danos decorrentes do tratamento de dados pessoais.</p>
              <p><strong>Não discriminação:</strong> os dados pessoais não serão utilizados para fins discriminatórios ilícitos ou abusivos.</p>
              <p><strong>Responsabilização e prestação de contas:</strong> a Associação busca adotar procedimentos capazes de demonstrar o cumprimento das normas de proteção de dados pessoais.</p>
            </DocSection>

            <DocSection id="sec-5" number={5} tone="privacy" title="Quais dados pessoais poderão ser coletados">
              <p>Os dados tratados variam conforme a relação mantida pelo titular com a Associação Maggu e a atividade realizada.</p>

              <h3>5.1. Dados de identificação</h3>
              <p>Poderão incluir:</p>
              <List items={[
                "nome completo;",
                "nome social, quando informado;",
                "data de nascimento;",
                "idade;",
                "nacionalidade;",
                "documentos de identificação, quando necessários;",
                "CPF, quando necessário;",
                "fotografia;",
                "assinatura;",
                "informações de representação legal;",
                "outras informações necessárias à identificação do titular.",
              ]} />
              <p>A Associação evitará solicitar documentos ou informações de identificação quando não forem necessários para a finalidade pretendida.</p>

              <h3>5.2. Dados de contato</h3>
              <p>Poderão incluir:</p>
              <List items={[
                "telefone;",
                "número de WhatsApp;",
                "endereço de e-mail;",
                "endereço residencial ou profissional;",
                "cidade;",
                "estado;",
                "CEP.",
              ]} />

              <h3>5.3. Dados relacionados a projetos, atividades e ações culturais</h3>
              <p>Quando necessários à participação ou execução das atividades da Associação, poderão ser tratados dados como:</p>
              <List items={[
                "projeto ou atividade da qual a pessoa participa;",
                "turma, oficina, evento ou ação;",
                "registros de inscrição;",
                "frequência e participação;",
                "informações necessárias para organização das atividades;",
                "função ou vínculo com determinado projeto;",
                "registros relacionados à execução de ações culturais, sociais, educativas e comunitárias.",
              ]} />

              <h3>5.4. Dados de responsáveis legais</h3>
              <p>
                Quando houver participação de crianças, adolescentes ou pessoas que necessitem de representação ou assistência, poderão ser coletados dados de pais, mães ou responsáveis legais, incluindo:
              </p>
              <List items={[
                "nome;",
                "vínculo com o participante;",
                "telefone;",
                "e-mail;",
                "documentos necessários à comprovação da responsabilidade, quando aplicável;",
                "autorizações relacionadas à participação em atividades.",
              ]} />

              <h3>5.5. Imagem, voz e registros audiovisuais</h3>
              <p>
                Atividades culturais, educativas, sociais, comunitárias e institucionais poderão envolver fotografias, gravações de áudio e registros audiovisuais.
              </p>
              <p>
                A utilização desses dados será realizada de acordo com a finalidade da atividade, a legislação aplicável e, quando juridicamente necessário, mediante autorização do titular ou de seu responsável legal.
              </p>
              <p>A Associação buscará informar de maneira adequada quando determinada atividade estiver sendo fotografada, filmada ou registrada.</p>

              <h3>5.6. Dados profissionais e institucionais</h3>
              <p>
                Em relações com dirigentes, integrantes, colaboradores, prestadores, voluntários, artistas, parceiros e fornecedores, poderão ser tratados:
              </p>
              <List items={[
                "profissão;",
                "cargo;",
                "função;",
                "currículo;",
                "experiência profissional ou cultural;",
                "organização representada;",
                "dados relacionados à prestação de serviços;",
                "informações necessárias à formalização e execução de contratos, termos, parcerias e demais instrumentos.",
              ]} />

              <h3>5.7. Dados financeiros e bancários</h3>
              <p>
                Quando necessários para pagamentos, recebimentos, contratações, reembolsos, doações, execução de projetos ou prestação de contas, poderão ser tratados dados como:
              </p>
              <List items={[
                "instituição financeira;",
                "agência;",
                "conta;",
                "chave Pix;",
                "informações relacionadas a pagamentos e recebimentos;",
                "comprovantes;",
                "documentos fiscais e financeiros.",
              ]} />
              <p>A Associação não solicita informações bancárias que não sejam necessárias para a operação ou obrigação correspondente.</p>

              <h3>5.8. Dados provenientes do site e de meios digitais</h3>
              <p>
                Durante a utilização do site ou de outros ambientes digitais da Associação, determinadas informações técnicas poderão ser coletadas automaticamente, tais como:
              </p>
              <List items={[
                "endereço IP;",
                "data e horário de acesso;",
                "páginas acessadas;",
                "tipo de navegador;",
                "sistema operacional;",
                "dispositivo utilizado;",
                "registros técnicos de acesso;",
                "informações obtidas por meio de cookies e tecnologias semelhantes, quando utilizadas.",
              ]} />
              <p>Esses dados podem ser necessários para funcionamento, segurança, prevenção de fraudes, diagnóstico de falhas e aprimoramento dos ambientes digitais.</p>
            </DocSection>

            <DocSection id="sec-6" number={6} tone="privacy" title="Dados pessoais sensíveis">
              <div className="space-y-5 border-l-2 border-brand-petrol/20 pl-5">
                <p>
                  Em determinadas atividades, especialmente aquelas relacionadas a projetos sociais, culturais, educativos, ações afirmativas, acessibilidade ou cumprimento de requisitos de editais e políticas públicas, poderá ser necessário tratar informações consideradas <strong>dados pessoais sensíveis</strong> pela LGPD.
                </p>
                <p>Dependendo da atividade, poderão estar envolvidos dados relacionados, por exemplo, a:</p>
                <List items={[
                  "origem racial ou étnica;",
                  "deficiência;",
                  "informações de saúde necessárias à segurança, acessibilidade ou inclusão do participante;",
                  "religião, quando estritamente necessária a uma finalidade legítima;",
                  "outros dados classificados legalmente como sensíveis.",
                ]} />
                <p>
                  O tratamento desses dados será realizado somente quando houver finalidade determinada e fundamento jurídico aplicável, com observância de medidas de proteção compatíveis com sua natureza.
                </p>
                <p>A Associação não utilizará dados pessoais sensíveis para promover discriminação ilícita ou abusiva.</p>
              </div>
            </DocSection>

            <DocSection id="sec-7" number={7} tone="privacy" title="Como os dados podem ser coletados">
              <p>Os dados pessoais poderão chegar à Associação Maggu de diferentes formas, incluindo:</p>
              <List items={[
                "preenchimento de formulários físicos ou digitais;",
                "inscrições em projetos, oficinas, eventos ou atividades;",
                "contato por telefone, e-mail ou WhatsApp;",
                "envio voluntário de informações pelo próprio titular;",
                "contratos, termos, autorizações e documentos institucionais;",
                "cadastros realizados em plataformas utilizadas pela Associação;",
                "participação em editais, projetos e parcerias;",
                "registros realizados durante atividades institucionais;",
                "navegação pelo site;",
                "parceiros ou instituições, quando o compartilhamento for legalmente permitido;",
                "órgãos públicos, quando necessário à execução de projetos, parcerias ou obrigações legais;",
                "fontes públicas legitimamente acessíveis, observada a legislação.",
              ]} />
            </DocSection>

            <DocSection id="sec-8" number={8} tone="privacy" title="Para quais finalidades os dados pessoais poderão ser utilizados">
              <p>A Associação Maggu poderá utilizar dados pessoais, conforme cada situação, para:</p>
              <List items={[
                "responder solicitações e contatos;",
                "realizar inscrições e cadastros;",
                "organizar projetos, programas, oficinas, eventos e atividades;",
                "administrar a participação de beneficiários e participantes;",
                "manter contato com participantes e responsáveis;",
                "executar projetos culturais, sociais, educativos e comunitários;",
                "emitir certificados ou declarações;",
                "controlar presença e participação em atividades;",
                "organizar equipes e colaboradores;",
                "celebrar contratos, termos de parceria, termos de participação e outros instrumentos;",
                "realizar pagamentos, reembolsos e demais operações financeiras necessárias;",
                "cumprir obrigações contábeis, fiscais, administrativas e legais;",
                "elaborar relatórios;",
                "realizar monitoramento e avaliação de projetos;",
                "comprovar a execução de ações e projetos;",
                "realizar prestação de contas;",
                "atender exigências previstas em editais, termos de fomento, colaboração, convênios, contratos ou instrumentos semelhantes;",
                "encaminhar informações a parceiros, financiadores ou órgãos competentes quando necessário e juridicamente permitido;",
                "administrar doações, apoios e parcerias;",
                "divulgar atividades e resultados institucionais nos limites autorizados pela legislação;",
                "produzir registros históricos e de memória institucional, observados os direitos dos titulares;",
                "proteger os direitos e interesses legítimos da Associação;",
                "prevenir fraudes e incidentes de segurança;",
                "garantir o funcionamento e a segurança do site;",
                "cumprir determinações legais, regulatórias, administrativas ou judiciais;",
                "exercer direitos em processos judiciais, administrativos ou arbitrais;",
                "realizar outras finalidades compatíveis com o relacionamento estabelecido e permitidas pela legislação.",
              ]} />
            </DocSection>

            <DocSection id="sec-9" number={9} tone="privacy" title="Bases legais utilizadas para o tratamento">
              <p>A Associação Maggu não depende exclusivamente do consentimento para tratar dados pessoais.</p>
              <p>Conforme a natureza de cada atividade, o tratamento poderá ocorrer com fundamento em uma ou mais hipóteses previstas na LGPD, incluindo:</p>
              <List items={[
                "consentimento do titular, quando aplicável;",
                "cumprimento de obrigação legal ou regulatória;",
                "execução de contrato ou de procedimentos preliminares relacionados a contrato;",
                "exercício regular de direitos em processo judicial, administrativo ou arbitral;",
                "proteção da vida ou da integridade física do titular ou de terceiro;",
                "legítimo interesse da Associação ou de terceiros, quando juridicamente aplicável e respeitados os direitos e liberdades fundamentais do titular;",
                "proteção do crédito, quando aplicável;",
                "demais bases legais previstas na legislação.",
              ]} />
              <p>Para dados pessoais sensíveis, serão observadas especificamente as hipóteses legais autorizadoras aplicáveis a essa categoria de dados.</p>
              <p>
                Quando o consentimento for utilizado como fundamento jurídico, ele deverá estar relacionado a finalidades determinadas e poderá ser revogado pelo titular nos termos da legislação, sem prejuízo da validade dos tratamentos realizados anteriormente à revogação.
              </p>
            </DocSection>

            <DocSection id="sec-10" number={10} tone="privacy" title="Crianças e adolescentes">
              <div className="space-y-5 border-l-2 border-brand-petrol/20 pl-5">
                <p>A Associação Maggu reconhece que crianças e adolescentes merecem proteção especial no tratamento de seus dados pessoais.</p>
                <p>
                  Sempre que houver tratamento de dados de crianças ou adolescentes, a Associação observará o <strong>melhor interesse da criança e do adolescente</strong>, bem como as disposições da LGPD, do Estatuto da Criança e do Adolescente e demais normas aplicáveis.
                </p>
                <p>Dependendo da atividade e do fundamento jurídico aplicável, poderão ser adotados procedimentos para:</p>
                <List items={[
                  "identificação do responsável legal;",
                  "obtenção das autorizações necessárias;",
                  "limitação da coleta aos dados estritamente necessários;",
                  "proteção reforçada das informações;",
                  "controle de acesso aos dados;",
                  "utilização responsável de imagens e registros audiovisuais;",
                  "atendimento de solicitações apresentadas pelos responsáveis legais, quando cabível.",
                ]} />
                <p>Informações de crianças e adolescentes não serão utilizadas de forma incompatível com seu melhor interesse.</p>
                <p>
                  A Associação também buscará apresentar informações relacionadas ao tratamento desses dados de maneira adequada, clara e acessível aos participantes e seus responsáveis.
                </p>
              </div>
            </DocSection>

            <DocSection id="sec-11" number={11} tone="privacy" title="Fotografias, vídeos, voz e divulgação institucional">
              <p>
                Em razão da natureza cultural, artística, educativa, social e comunitária das atividades desenvolvidas pela Associação Maggu, poderão ser realizados registros fotográficos, audiovisuais ou sonoros de projetos, apresentações, oficinas, eventos e outras ações.
              </p>
              <p>
                Quando a utilização de imagem, voz ou outros dados pessoais depender de autorização ou consentimento, a Associação buscará obtê-lo de forma adequada antes da utilização correspondente.
              </p>
              <p>Os registros poderão, quando permitido, ser utilizados para finalidades como:</p>
              <List items={[
                "divulgação das atividades;",
                "memória institucional;",
                "relatórios;",
                "comprovação da execução de projetos;",
                "prestação de contas;",
                "comunicação institucional;",
                "publicações no site;",
                "redes sociais;",
                "materiais gráficos;",
                "apresentações institucionais;",
                "atendimento às exigências de parceiros ou financiadores.",
              ]} />
              <p>A utilização deverá respeitar a dignidade, a imagem, a honra, a privacidade e os demais direitos dos titulares.</p>
              <p>No caso de crianças e adolescentes, serão observadas as proteções específicas previstas na legislação.</p>
            </DocSection>

            <DocSection id="sec-12" number={12} tone="privacy" title="Compartilhamento de dados pessoais">
              <p>A Associação Maggu poderá compartilhar dados pessoais quando isso for necessário para a realização de suas atividades ou para cumprimento de obrigações.</p>
              <p>O compartilhamento poderá ocorrer, conforme a finalidade, com:</p>
              <List items={[
                "órgãos e entidades da administração pública;",
                "financiadores e instituições responsáveis por projetos e editais;",
                "parceiros institucionais;",
                "organizações contratantes;",
                "instituições financeiras;",
                "instituições contábeis;",
                "assessorias jurídicas;",
                "prestadores de serviços;",
                "fornecedores de tecnologia;",
                "serviços de hospedagem e armazenamento;",
                "plataformas de comunicação;",
                "ferramentas de formulários, inscrição ou gestão;",
                "prestadores responsáveis por eventos ou projetos;",
                "autoridades administrativas e judiciais;",
                "outros destinatários quando houver obrigação ou autorização legal.",
              ]} />
              <p>A Associação buscará limitar o compartilhamento às informações necessárias para a finalidade correspondente.</p>
              <p>Dados pessoais não serão vendidos ou comercializados pela Associação Maggu.</p>
            </DocSection>

            <DocSection id="sec-13" number={13} tone="privacy" title="Prestadores de serviços e plataformas de terceiros">
              <p>Para realizar suas atividades, a Associação poderá utilizar serviços disponibilizados por terceiros, incluindo plataformas de:</p>
              <List items={[
                "hospedagem de sites;",
                "armazenamento em nuvem;",
                "e-mail;",
                "comunicação;",
                "formulários;",
                "videoconferência;",
                "redes sociais;",
                "sistemas administrativos;",
                "meios de pagamento;",
                "serviços financeiros;",
                "produção e armazenamento de documentos.",
              ]} />
              <p>Esses fornecedores poderão tratar determinados dados pessoais na medida necessária à prestação dos respectivos serviços.</p>
              <p>A utilização de plataformas de terceiros também poderá estar sujeita às políticas de privacidade e aos termos próprios desses fornecedores.</p>
              <p>
                A Associação buscará contratar fornecedores que apresentem níveis adequados de segurança e proteção de dados, considerando a natureza do serviço prestado.
              </p>
            </DocSection>

            <DocSection id="sec-14" number={14} tone="privacy" title="Transferência internacional de dados">
              <p>Alguns fornecedores de tecnologia eventualmente utilizados pela Associação poderão manter infraestrutura, servidores ou operações fora do Brasil.</p>
              <p>
                Quando houver transferência internacional de dados pessoais, ela deverá ocorrer de acordo com as hipóteses e mecanismos permitidos pela legislação brasileira e pelas regulamentações aplicáveis.
              </p>
              <p>A Associação buscará adotar as salvaguardas necessárias para assegurar nível adequado de proteção aos dados pessoais envolvidos.</p>
            </DocSection>

            <DocSection id="sec-15" number={15} tone="privacy" title="Cookies e tecnologias semelhantes">
              <p>Cookies são pequenos arquivos ou identificadores armazenados no dispositivo do usuário durante a navegação em determinados sites.</p>
              <p>O site da Associação Maggu poderá utilizar cookies e tecnologias semelhantes para finalidades como:</p>
              <List items={[
                "viabilizar funcionalidades essenciais;",
                "manter a segurança do ambiente;",
                "lembrar determinadas preferências;",
                "compreender o funcionamento das páginas;",
                "identificar falhas técnicas;",
                "melhorar a experiência de navegação;",
                "produzir estatísticas de utilização, quando ferramentas dessa natureza estiverem implementadas.",
              ]} />
              <h3>Cookies essenciais</h3>
              <p>São utilizados quando necessários ao funcionamento, à segurança ou à disponibilização das funcionalidades do site.</p>
              <h3>Cookies opcionais</h3>
              <p>
                Caso o site utilize cookies que não sejam estritamente necessários, poderão ser disponibilizados mecanismos para que o usuário manifeste suas preferências, de acordo com a legislação aplicável.
              </p>
              <p>
                O usuário também poderá controlar ou excluir cookies por meio das configurações de seu navegador, observando que a desativação de determinados cookies poderá afetar algumas funcionalidades.
              </p>
            </DocSection>

            <DocSection id="sec-16" number={16} tone="privacy" title="Links e serviços de terceiros">
              <p>O site da Associação Maggu poderá conter links para sites, redes sociais, plataformas ou serviços administrados por terceiros.</p>
              <p>Ao acessar esses ambientes, o usuário estará sujeito às respectivas políticas, termos e práticas de privacidade.</p>
              <p>A Associação Maggu não controla as práticas independentes de tratamento realizadas por terceiros em seus próprios ambientes digitais.</p>
              <p>Recomenda-se que o usuário consulte as políticas de privacidade dos respectivos serviços antes de fornecer dados pessoais.</p>
            </DocSection>

            <DocSection id="sec-17" number={17} tone="privacy" title="Redes sociais">
              <p>
                A Associação Maggu poderá manter perfis institucionais em redes sociais e utilizar essas plataformas para divulgação de projetos, atividades, eventos e informações.
              </p>
              <p>Interações realizadas diretamente nesses ambientes também podem resultar em tratamento de dados pelas empresas responsáveis pelas próprias plataformas.</p>
              <p>Cada plataforma possui regras, termos e políticas de privacidade próprios, que devem ser consultados pelo usuário.</p>
            </DocSection>

            <DocSection id="sec-18" number={18} tone="privacy" title="Por quanto tempo os dados são armazenados">
              <p>Os dados pessoais serão mantidos pelo período necessário ao cumprimento das finalidades que justificaram sua coleta e tratamento.</p>
              <p>Os prazos poderão variar de acordo com:</p>
              <List items={[
                "natureza do dado;",
                "finalidade do tratamento;",
                "duração do projeto ou atividade;",
                "vigência de contratos e parcerias;",
                "exigências previstas em editais;",
                "obrigações relacionadas à prestação de contas;",
                "prazos prescricionais;",
                "obrigações legais ou regulatórias;",
                "necessidade de exercício regular de direitos;",
                "requisitos de órgãos públicos, financiadores ou parceiros;",
                "outras hipóteses de conservação autorizadas pela legislação.",
              ]} />
              <p>Após o encerramento da finalidade, os dados serão eliminados, anonimizados ou mantidos apenas nas hipóteses permitidas pela legislação.</p>
            </DocSection>

            <DocSection id="sec-19" number={19} tone="privacy" title="Segurança dos dados pessoais">
              <p>
                A Associação Maggu busca adotar medidas técnicas, administrativas e organizacionais adequadas à natureza dos dados tratados e à realidade de suas atividades, visando proteger as informações pessoais contra:
              </p>
              <List items={[
                "acesso não autorizado;",
                "perda;",
                "alteração;",
                "destruição;",
                "divulgação indevida;",
                "uso irregular;",
                "tratamento acidental ou ilícito.",
              ]} />
              <p>Essas medidas poderão incluir, conforme aplicável:</p>
              <List items={[
                "controle de acesso;",
                "restrição de permissões;",
                "utilização de senhas e mecanismos de autenticação;",
                "proteção de equipamentos e contas institucionais;",
                "armazenamento em ambientes adequados;",
                "cópias de segurança quando necessárias;",
                "orientação de integrantes e colaboradores;",
                "seleção criteriosa de fornecedores;",
                "procedimentos para prevenção e resposta a incidentes.",
              ]} />
              <p>
                Nenhum sistema é absolutamente imune a riscos. Por essa razão, as medidas de segurança são avaliadas e aprimoradas conforme a necessidade, os riscos identificados e a evolução tecnológica.
              </p>
            </DocSection>

            <DocSection id="sec-20" number={20} tone="privacy" title="Incidentes de segurança">
              <p>
                Caso ocorra incidente de segurança envolvendo dados pessoais, a Associação Maggu adotará medidas para avaliar a natureza, a extensão e as possíveis consequências do ocorrido.
              </p>
              <p>
                Quando exigido pela legislação e pelas regulamentações aplicáveis, serão realizadas as comunicações pertinentes à Autoridade Nacional de Proteção de Dados e aos titulares afetados.
              </p>
              <p>Também poderão ser adotadas medidas destinadas a conter o incidente, reduzir possíveis impactos e evitar recorrências.</p>
            </DocSection>

            <DocSection id="sec-21" number={21} tone="privacy" title="Direitos dos titulares de dados pessoais">
              <p>Nos termos da LGPD e observados os requisitos aplicáveis a cada situação, o titular poderá solicitar:</p>
              <List items={[
                "confirmação da existência de tratamento;",
                "acesso aos seus dados;",
                "correção de dados incompletos, inexatos ou desatualizados;",
                "anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a legislação;",
                "portabilidade dos dados, quando aplicável e regulamentada;",
                "eliminação dos dados tratados com fundamento no consentimento, ressalvadas as hipóteses legais de conservação;",
                "informação sobre entidades públicas e privadas com as quais houve uso compartilhado de dados, quando aplicável;",
                "informação sobre a possibilidade de não fornecer consentimento e sobre as consequências dessa negativa;",
                "revogação do consentimento;",
                "oposição a determinados tratamentos realizados sem consentimento quando houver descumprimento da LGPD;",
                "revisão de decisões tomadas unicamente com base em tratamento automatizado de dados pessoais, quando aplicável;",
                "demais direitos previstos na legislação.",
              ]} />
              <p>O exercício de determinado direito poderá estar sujeito às limitações e exceções previstas em lei.</p>
              <p>
                Por exemplo, uma solicitação de exclusão poderá não resultar na eliminação imediata de determinada informação quando sua conservação for necessária para cumprimento de obrigação legal, prestação de contas ou exercício regular de direitos.
              </p>
            </DocSection>

            <DocSection id="sec-22" number={22} tone="privacy" title="Como exercer seus direitos">
              <p>O titular ou seu representante legal poderá apresentar solicitações relacionadas aos seus dados pessoais por meio dos seguintes canais:</p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded border border-brand-petrol/12 bg-brand-soft/40 px-4 py-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-gray">E-mail</p>
                  <a href="mailto:comunicacaomktmaggu@gmail.com" className="mt-1 block break-all text-sm font-semibold text-brand-ink underline underline-offset-4">
                    comunicacaomktmaggu@gmail.com
                  </a>
                </div>
                <div className="rounded border border-brand-petrol/12 bg-brand-soft/40 px-4 py-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-gray">Telefone</p>
                  <a href="tel:+5582998067374" className="mt-1 block text-sm font-semibold text-brand-ink underline underline-offset-4">
                    (82) 99806-7374
                  </a>
                </div>
              </div>
              <p>
                Para proteger os próprios titulares e impedir acesso indevido a informações pessoais, a Associação poderá solicitar informações adicionais estritamente necessárias para confirmar a identidade da pessoa que realizou a solicitação ou seus poderes de representação.
              </p>
              <p>As solicitações serão analisadas e respondidas nos termos e prazos previstos na legislação aplicável.</p>
            </DocSection>

            <DocSection id="sec-23" number={23} tone="privacy" title="Comunicações institucionais">
              <p>Quando houver fundamento jurídico adequado, a Associação Maggu poderá utilizar informações de contato para enviar comunicações relacionadas a:</p>
              <List items={[
                "projetos;",
                "atividades;",
                "eventos;",
                "inscrições;",
                "avisos importantes;",
                "informações institucionais;",
                "oportunidades;",
                "ações promovidas pela Associação.",
              ]} />
              <p>Quando determinada comunicação depender de consentimento, será assegurada ao titular a possibilidade de revogá-lo.</p>
              <p>
                Comunicações indispensáveis à execução de uma atividade, projeto, inscrição, contrato ou obrigação legal poderão permanecer necessárias enquanto existir a relação correspondente.
              </p>
            </DocSection>

            <DocSection id="sec-24" number={24} tone="privacy" title="Atualização e correção dos dados">
              <p>A qualidade dos dados pessoais é importante para que os registros institucionais permaneçam adequados e corretos.</p>
              <p>O titular poderá solicitar a atualização ou correção de suas informações utilizando os canais indicados nesta Política.</p>
              <p>
                A Associação também poderá solicitar periodicamente a atualização de determinados dados quando isso for necessário para continuidade de projetos, cumprimento de obrigações ou manutenção de registros.
              </p>
            </DocSection>

            <DocSection id="sec-25" number={25} tone="privacy" title="Responsabilidades dos usuários e titulares">
              <p>Ao fornecer seus dados pessoais à Associação Maggu, espera-se que o titular:</p>
              <List items={[
                "forneça informações verdadeiras e atualizadas;",
                "não forneça dados de terceiros sem possuir autorização ou fundamento adequado;",
                "comunique alterações relevantes quando necessário;",
                "utilize os canais digitais da Associação de forma lícita e responsável.",
              ]} />
              <p>
                Quando uma pessoa fornecer dados de terceiros na qualidade de responsável legal, representante, contratante ou outra condição legítima, deverá observar as obrigações aplicáveis a esse compartilhamento.
              </p>
            </DocSection>

            <DocSection id="sec-26" number={26} tone="privacy" title="Dados disponibilizados publicamente pelo próprio titular">
              <p>
                Informações publicadas espontaneamente por usuários em comentários, redes sociais, páginas públicas ou outros ambientes acessíveis ao público poderão tornar-se visíveis para terceiros.
              </p>
              <p>Recomenda-se cautela na divulgação de informações pessoais em espaços públicos da internet.</p>
              <p>
                A existência de dados publicamente acessíveis não elimina a necessidade de observância da legislação para eventual tratamento posterior dessas informações pela Associação.
              </p>
            </DocSection>

            <DocSection id="sec-27" number={27} tone="privacy" title="Prestação de contas, editais e projetos financiados">
              <p>
                A execução de projetos culturais, sociais, educativos ou comunitários poderá exigir que determinados dados sejam registrados e posteriormente apresentados a órgãos públicos, financiadores, parceiros ou instituições responsáveis pelo acompanhamento da iniciativa.
              </p>
              <p>Nessas situações, o tratamento poderá ser necessário, por exemplo, para:</p>
              <List items={[
                "comprovar execução;",
                "demonstrar participação;",
                "verificar cumprimento de metas;",
                "apresentar equipe envolvida;",
                "realizar pagamentos;",
                "elaborar relatórios;",
                "atender auditorias;",
                "realizar prestação de contas.",
              ]} />
              <p>
                Sempre que possível, a Associação buscará limitar o compartilhamento ao conjunto de informações necessário ao atendimento da obrigação correspondente.
              </p>
            </DocSection>

            <DocSection id="sec-28" number={28} tone="privacy" title="Compromisso com a privacidade">
              <p>A Associação Maggu compreende que a proteção de dados pessoais não se limita ao atendimento de uma obrigação legal.</p>
              <p>
                Privacidade, transparência e segurança fazem parte do compromisso da Associação com as pessoas e comunidades que participam, constroem e tornam possíveis suas ações.
              </p>
              <p>
                Por isso, os dados pessoais devem ser utilizados de maneira responsável, proporcional às finalidades pretendidas e compatível com a confiança estabelecida entre a Associação e seus diferentes públicos.
              </p>
            </DocSection>

            <DocSection id="sec-29" number={29} tone="privacy" title="Alterações desta Política de Privacidade">
              <p>Esta Política poderá ser atualizada periodicamente para refletir:</p>
              <List items={[
                "alterações legislativas ou regulatórias;",
                "orientações de autoridades competentes;",
                "mudanças nos processos internos;",
                "adoção de novas tecnologias;",
                "criação de novos canais ou serviços;",
                "alterações nas formas de tratamento de dados pessoais;",
                "aperfeiçoamento das práticas de governança e segurança.",
              ]} />
              <p>A versão vigente será disponibilizada nos canais institucionais da Associação, com indicação da data de sua última atualização.</p>
              <p>Quando uma alteração exigir nova manifestação de consentimento ou comunicação específica ao titular, a Associação adotará as providências cabíveis.</p>
            </DocSection>

            <DocSection id="sec-30" number={30} tone="privacy" title="Legislação e autoridade competente">
              <p>
                Esta Política será interpretada de acordo com a legislação da República Federativa do Brasil, especialmente a Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais.
              </p>
              <p>
                O titular também poderá recorrer à <strong>Autoridade Nacional de Proteção de Dados — ANPD</strong>, observadas as condições e procedimentos previstos na legislação e na regulamentação aplicável.
              </p>
            </DocSection>

            <DocSection id="sec-31" number={31} tone="privacy" title="Canal de Privacidade">
              <p>Dúvidas, solicitações ou pedidos relacionados ao tratamento de dados pessoais poderão ser encaminhados à Associação Maggu pelos seguintes canais:</p>
              <dl className="grid gap-3 rounded border border-brand-petrol/12 bg-brand-soft/40 px-5 py-5 text-[0.95rem] sm:grid-cols-[minmax(0,150px)_minmax(0,1fr)] sm:gap-x-6 sm:gap-y-2.5">
                <dt className="font-semibold text-brand-ink sm:col-span-2">ASSOCIAÇÃO SÓCIO CULTURAL MAGGU</dt>
                <dt className="font-semibold text-brand-ink">CNPJ:</dt>
                <dd className="break-words">61.841.454/0001-80</dd>
                <dt className="font-semibold text-brand-ink">Nome público:</dt>
                <dd className="break-words">Associação Maggu</dd>
                <dt className="font-semibold text-brand-ink">Endereço:</dt>
                <dd className="break-words">Rua Em Projeto A, 33 — Benedito Bentes — Maceió/AL — CEP 57084-411</dd>
                <dt className="font-semibold text-brand-ink">Telefone:</dt>
                <dd className="break-words">(82) 99806-7374</dd>
                <dt className="font-semibold text-brand-ink">E-mail:</dt>
                <dd className="break-all">comunicacaomktmaggu@gmail.com</dd>
              </dl>
            </DocSection>

            <footer className="mt-10 border-t border-brand-petrol/12 pt-8">
                            <div className="space-y-1 text-sm leading-relaxed text-brand-gray">
                <p className="font-semibold text-brand-ink">Associação Sócio Cultural Maggu</p>
                <p className="font-semibold text-brand-ink">Associação Maggu</p>
                <p className="font-semibold text-brand-ink">CNPJ nº 61.841.454/0001-80</p>
                <p className="pt-3 font-semibold text-brand-ink">Última atualização: {ultimaAtualizacao}.</p>
              </div>
            </footer>
        </article>
      </div>


      <CompactFinalCTA
        variant="privacy"
        title="Transparência também se constrói com informação clara."
        text="Conheça outros documentos institucionais da Associação Maggu ou fale conosco caso tenha alguma dúvida sobre o tratamento de dados pessoais."
        primary={{ label: "Ver Transparência", to: "/transparencia" }}
        secondary={{ label: "Entre em contato", to: "/contato" }}
      />
    </main>
  );
}
