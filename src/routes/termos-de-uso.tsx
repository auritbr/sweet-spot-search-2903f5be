// Conteúdo jurídico fornecido integralmente pela Associação Maggu — não alterar.
import { createFileRoute, Link } from "@tanstack/react-router";
import { DocIndex, DocSection } from "@/components/Legal";
import { CompactFinalCTA } from "@/components/CompactFinalCTA";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: "Termos de Uso | Associação Maggu" },
      { name: "description", content: "Conheça as condições para acesso e utilização dos ambientes digitais da Associação Sócio Cultural Maggu." },
      { property: "og:title", content: "Termos de Uso | Associação Maggu" },
      { property: "og:description", content: "Condições de acesso e utilização dos ambientes digitais da Associação Sócio Cultural Maggu." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/termos-de-uso" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/termos-de-uso" }],
  }),
  component: TermosDeUso,
});

const ultimaAtualizacao = "4 de setembro de 2026";

const toc = [
  { id: "sec-1", label: "Apresentação" },
  { id: "sec-2", label: "Identificação da Associação" },
  { id: "sec-3", label: "Finalidade do site" },
  { id: "sec-4", label: "Aceitação dos Termos" },
  { id: "sec-5", label: "Condições de acesso" },
  { id: "sec-6", label: "Uso adequado do site" },
  { id: "sec-7", label: "Conteúdo institucional" },
  { id: "sec-8", label: "Inscrições em atividades, projetos e eventos" },
  { id: "sec-9", label: "Crianças e adolescentes" },
  { id: "sec-10", label: "Propriedade intelectual" },
  { id: "sec-11", label: "Uso permitido de conteúdos" },
  { id: "sec-12", label: "Conteúdo de terceiros" },
  { id: "sec-13", label: "Fotografias, vídeos e registros de atividades" },
  { id: "sec-14", label: "Formulários e informações enviadas pelo usuário" },
  { id: "sec-15", label: "Contato com a Associação" },
  { id: "sec-16", label: "Links externos" },
  { id: "sec-17", label: "Redes sociais" },
  { id: "sec-18", label: "Privacidade e proteção de dados" },
  { id: "sec-19", label: "Cookies" },
  { id: "sec-20", label: "Segurança" },
  { id: "sec-21", label: "Indisponibilidade dos serviços digitais" },
  { id: "sec-22", label: "Limitações de responsabilidade" },
  { id: "sec-23", label: "Ausência de garantia de resultados" },
  { id: "sec-24", label: "Integridade institucional" },
  { id: "sec-25", label: "Canal de denúncias" },
  { id: "sec-26", label: "Transparência institucional" },
  { id: "sec-27", label: "Alterações nos Termos de Uso" },
  { id: "sec-28", label: "Validade das disposições" },
  { id: "sec-29", label: "Legislação aplicável" },
  { id: "sec-30", label: "Solução de controvérsias" },
  { id: "sec-31", label: "Canais oficiais" },
  { id: "sec-32", label: "Disposições finais" },
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

function TermosDeUso() {
  return (
    <main id="main" className="bg-brand-soft/40">
      <PageHero
        title="Termos de Uso"
        eyebrow="Legal"
        subtitle="Conheça as condições para acesso e utilização dos ambientes digitais da Associação Sócio Cultural Maggu."
        image="https://images.unsplash.com/photo-1526243741027-444d633d7365?auto=format&fit=crop&w=1920&q=80"
        accent="cyan"
        brush="#FFB400"
        compact
        decoration="ribbon"
      />

      <div className="px-3 py-8 sm:px-4 md:py-12">
        <article className="relative mx-auto max-w-[1040px] overflow-hidden rounded-lg border border-brand-petrol/10 bg-background px-5 py-8 shadow-sm md:px-14 md:py-12 lg:px-20">
          <div className="absolute inset-x-0 top-0 flex h-1" aria-hidden="true">
            <span className="w-12 bg-brand-cyan" />
            <span className="w-7 bg-brand-gold" />
            <span className="w-4 bg-brand-red" />
          </div>
          <header className="border-b border-brand-petrol/12 pb-7 text-center md:pb-8">
            <h2 className="mx-auto max-w-3xl text-[24px] font-bold uppercase leading-[1.2] text-brand-ink md:text-[27px]">
              Termos de Uso
            </h2>
            <div className="mt-4 space-y-0.5 text-[12px] leading-[1.7] text-brand-gray">
              <p className="font-semibold text-brand-ink">Associação Sócio Cultural Maggu – Associação Maggu</p>
              <p>CNPJ nº 61.841.454/0001-80</p>
              <p className="pt-2">Última atualização: {ultimaAtualizacao}</p>
            </div>
            <DocIndex items={toc} />
          </header>

          <DocSection id="sec-1" number={1} tone="terms" title="Apresentação">
            <p>
              Estes Termos de Uso regulam o acesso e a utilização do site, dos conteúdos, formulários, páginas, funcionalidades e demais ambientes digitais disponibilizados pela <strong>Associação Sócio Cultural Maggu</strong>, nome público <strong>Associação Maggu</strong>, pessoa jurídica de direito privado, sem fins lucrativos, inscrita no CNPJ sob o nº <strong>61.841.454/0001-80</strong>.
            </p>
            <p>
              Ao acessar ou utilizar os ambientes digitais da Associação Maggu, o usuário declara estar ciente das condições estabelecidas neste documento.
            </p>
            <p>
              A utilização do site também está sujeita à <Link to="/privacidade"><strong>Política de Privacidade e Proteção de Dados Pessoais da Associação Maggu</strong></Link>, que deve ser lida em conjunto com estes Termos.
            </p>
          </DocSection>

          <DocSection id="sec-2" number={2} tone="terms" title="Identificação da Associação">
            <dl className="grid gap-x-6 gap-y-2 sm:grid-cols-[minmax(0,170px)_minmax(0,1fr)]">
              <dt className="font-semibold text-brand-ink">Razão social</dt>
              <dd className="break-words">Associação Sócio Cultural Maggu</dd>
              <dt className="font-semibold text-brand-ink">Nome público</dt>
              <dd className="break-words">Associação Maggu</dd>
              <dt className="font-semibold text-brand-ink">CNPJ</dt>
              <dd className="break-words">61.841.454/0001-80</dd>
              <dt className="font-semibold text-brand-ink">Natureza jurídica</dt>
              <dd className="break-words">Associação Privada</dd>
              <dt className="font-semibold text-brand-ink">CNAE principal</dt>
              <dd className="break-words">94.93-6-00 — Atividades de organizações associativas ligadas à cultura e à arte</dd>
              <dt className="font-semibold text-brand-ink">Endereço</dt>
              <dd className="break-words">Rua Em Projeto A, 33 — Benedito Bentes — Maceió/AL — CEP 57084-411</dd>
              <dt className="font-semibold text-brand-ink">Telefone institucional</dt>
              <dd className="break-words">(82) 99806-7374</dd>
              <dt className="font-semibold text-brand-ink">E-mail</dt>
              <dd className="break-all"><a href="mailto:comunicacaomktmaggu@gmail.com">comunicacaomktmaggu@gmail.com</a></dd>
            </dl>
          </DocSection>

          <DocSection id="sec-3" number={3} tone="terms" title="Finalidade do site">
            <p>O site da Associação Maggu possui finalidade institucional, informativa, cultural e de relacionamento com a comunidade.</p>
            <p>Por meio de seus ambientes digitais, a Associação poderá disponibilizar informações sobre:</p>
            <List items={[
              "sua atuação institucional;",
              "história, missão, princípios e objetivos;",
              "equipe e estrutura organizacional;",
              "projetos, programas e iniciativas;",
              "atividades culturais, sociais, educativas e comunitárias;",
              "eventos, oficinas, apresentações e ações;",
              "agenda institucional;",
              "notícias;",
              "registros de atividades;",
              "fotografias e conteúdos audiovisuais;",
              "transparência institucional;",
              "documentos;",
              "parcerias;",
              "oportunidades;",
              "formulários de contato;",
              "inscrições;",
              "canais institucionais;",
              "prestação de informações à sociedade.",
            ]} />
            <p>
              O conteúdo disponibilizado possui caráter predominantemente informativo e institucional, salvo quando determinada página ou funcionalidade indicar finalidade específica.
            </p>
          </DocSection>

          <DocSection id="sec-4" number={4} tone="terms" title="Aceitação dos Termos">
            <p>
              Ao utilizar o site da Associação Maggu, o usuário declara que leu, compreendeu e concorda com estes Termos de Uso naquilo que for aplicável à sua utilização.
            </p>
            <p>
              Caso o usuário não concorde com alguma condição deste documento, deverá interromper a utilização das funcionalidades correspondentes.
            </p>
            <p>
              A simples navegação em páginas públicas não implica contratação, associação, vínculo institucional ou participação automática em projetos da Associação.
            </p>
          </DocSection>

          <DocSection id="sec-5" number={5} tone="terms" title="Condições de acesso">
            <p>O acesso à maior parte do conteúdo institucional poderá ocorrer livremente, sem necessidade de cadastro.</p>
            <p>Algumas funcionalidades, atividades, inscrições, formulários ou serviços poderão exigir o fornecimento de determinadas informações.</p>
            <p>Nesses casos, o usuário deverá:</p>
            <List items={[
              "fornecer informações verdadeiras;",
              "manter os dados atualizados quando necessário;",
              "preencher corretamente os campos obrigatórios;",
              "não se passar por outra pessoa;",
              "não utilizar dados de terceiros sem autorização ou fundamento legítimo.",
            ]} />
            <p>
              A Associação poderá deixar de processar inscrições, solicitações ou cadastros que apresentem informações incompletas, inconsistentes, falsas ou manifestamente incompatíveis com a finalidade da atividade.
            </p>
          </DocSection>

          <DocSection id="sec-6" number={6} tone="terms" title="Uso adequado do site">
            <p>O usuário compromete-se a utilizar o site e seus conteúdos de forma lícita, ética e compatível com estes Termos.</p>
            <p>É proibido utilizar os ambientes digitais da Associação para:</p>
            <List items={[
              "praticar atos ilícitos;",
              "violar direitos de terceiros;",
              "realizar fraudes;",
              "disseminar conteúdos discriminatórios, ofensivos ou ilícitos;",
              "tentar acessar áreas restritas sem autorização;",
              "obter dados de outros usuários indevidamente;",
              "interferir no funcionamento do site;",
              "introduzir vírus, códigos maliciosos ou outros recursos prejudiciais;",
              "tentar comprometer sistemas, servidores ou mecanismos de segurança;",
              "utilizar ferramentas automatizadas de modo abusivo;",
              "reproduzir conteúdo protegido de forma incompatível com a legislação;",
              "utilizar o nome, identidade visual ou materiais da Associação de maneira que gere falsa aparência de vínculo, autorização ou representação;",
              "realizar qualquer prática que possa causar dano à Associação, aos seus integrantes, parceiros, participantes ou terceiros.",
            ]} />
          </DocSection>

          <DocSection id="sec-7" number={7} tone="terms" title="Conteúdo institucional">
            <p>A Associação Maggu procura manter as informações disponibilizadas em seus ambientes digitais corretas e atualizadas.</p>
            <p>Ainda assim, conteúdos institucionais poderão ser:</p>
            <List items={[
              "atualizados;",
              "corrigidos;",
              "substituídos;",
              "reorganizados;",
              "temporariamente indisponibilizados;",
              "removidos.",
            ]} />
            <p>
              Informações sobre datas, horários, locais, programação, projetos, inscrições, oportunidades ou eventos poderão sofrer alterações por razões operacionais, administrativas, técnicas ou de força maior.
            </p>
            <p>Sempre que possível, alterações relevantes serão comunicadas pelos canais institucionais adequados.</p>
          </DocSection>

          <DocSection id="sec-8" number={8} tone="terms" title="Inscrições em atividades, projetos e eventos">
            <p>Determinadas atividades da Associação Maggu poderão exigir inscrição prévia.</p>
            <p>
              A realização de uma inscrição não garante automaticamente vaga, participação, seleção, contratação, benefício ou qualquer outro direito, salvo quando houver confirmação expressa da Associação ou regra específica da atividade.
            </p>
            <p>Cada projeto, edital, evento, oficina ou iniciativa poderá estabelecer critérios próprios, incluindo:</p>
            <List items={[
              "público-alvo;",
              "faixa etária;",
              "quantidade de vagas;",
              "critérios de seleção;",
              "documentação;",
              "datas;",
              "horários;",
              "frequência mínima;",
              "regras de participação;",
              "condições de certificação.",
            ]} />
            <p>
              Quando houver regulamento, edital, chamada pública, formulário ou instrumento específico, suas disposições complementarão estes Termos de Uso.
            </p>
          </DocSection>

          <DocSection id="sec-9" number={9} tone="terms" title="Crianças e adolescentes">
            <p>A Associação Maggu desenvolve ou poderá desenvolver atividades destinadas a crianças e adolescentes.</p>
            <p>Nessas situações, serão observadas as normas legais aplicáveis e, quando necessário, poderão ser exigidas:</p>
            <List items={[
              "informações do responsável legal;",
              "autorizações específicas;",
              "documentos;",
              "termos de participação;",
              "autorizações para utilização de imagem ou voz;",
              "outras informações necessárias à segurança e adequada participação.",
            ]} />
            <p>
              A utilização de determinados formulários ou funcionalidades por crianças e adolescentes poderá depender da participação ou autorização de seus responsáveis legais, conforme a legislação e a natureza da atividade.
            </p>
            <p>A Associação priorizará o melhor interesse da criança e do adolescente em suas atividades e ambientes digitais.</p>
          </DocSection>

          <DocSection id="sec-10" number={10} tone="terms" title="Propriedade intelectual">
            <p>
              Salvo indicação expressa em sentido contrário, os conteúdos institucionais produzidos pela Associação Maggu e disponibilizados em seus ambientes digitais são protegidos pela legislação de propriedade intelectual.
            </p>
            <p>Isso pode incluir:</p>
            <List items={[
              "textos;",
              "identidade visual;",
              "logotipos;",
              "elementos gráficos;",
              "fotografias;",
              "vídeos;",
              "ilustrações;",
              "peças de comunicação;",
              "documentos;",
              "materiais educativos;",
              "projetos;",
              "publicações;",
              "conteúdos audiovisuais.",
            ]} />
            <p>
              A disponibilização desses materiais no site não implica cessão automática de direitos autorais ou autorização irrestrita de uso.
            </p>
          </DocSection>

          <DocSection id="sec-11" number={11} tone="terms" title="Uso permitido de conteúdos">
            <p>
              É permitido compartilhar links públicos do site e divulgar conteúdos institucionais da Associação para fins informativos, jornalísticos, acadêmicos, educativos ou de interesse público, desde que:
            </p>
            <List items={[
              "seja indicada a fonte;",
              "o conteúdo não seja alterado de forma enganosa;",
              "não exista finalidade ilícita;",
              "não seja sugerida parceria, apoio ou autorização inexistente;",
              "sejam respeitados direitos autorais, direitos de imagem e demais direitos de terceiros.",
            ]} />
            <p>
              Usos comerciais, reprodução integral de materiais protegidos, adaptação, exploração econômica ou utilização da identidade institucional poderão depender de autorização prévia da Associação ou do respectivo titular dos direitos.
            </p>
          </DocSection>

          <DocSection id="sec-12" number={12} tone="terms" title="Conteúdo de terceiros">
            <p>
              O site poderá apresentar conteúdos pertencentes a parceiros, artistas, fotógrafos, fornecedores, instituições, participantes ou outros terceiros.
            </p>
            <p>Os respectivos direitos permanecem pertencentes aos seus titulares.</p>
            <p>
              A presença desses conteúdos no site não autoriza sua reprodução ou utilização fora das hipóteses permitidas pela legislação ou pelas respectivas autorizações.
            </p>
          </DocSection>

          <DocSection id="sec-13" number={13} tone="terms" title="Fotografias, vídeos e registros de atividades">
            <p>
              Por atuar nas áreas cultural, artística, social, educativa e comunitária, a Associação Maggu poderá disponibilizar registros de suas atividades institucionais.
            </p>
            <p>Esses registros podem incluir:</p>
            <List items={[
              "fotografias;",
              "vídeos;",
              "áudios;",
              "depoimentos;",
              "registros de apresentações;",
              "registros de oficinas;",
              "registros de eventos.",
            ]} />
            <p>
              A utilização desses conteúdos deverá respeitar os direitos de imagem, voz, autoria, privacidade e dignidade das pessoas retratadas.
            </p>
            <p>
              A presença de uma fotografia ou vídeo em página pública não autoriza terceiros a utilizá-lo livremente para finalidades distintas daquelas legalmente permitidas.
            </p>
          </DocSection>

          <DocSection id="sec-14" number={14} tone="terms" title="Formulários e informações enviadas pelo usuário">
            <p>
              Quando o usuário encaminhar informações por meio de formulários ou canais digitais, deverá evitar o envio de dados desnecessários.
            </p>
            <p>
              As informações serão utilizadas de acordo com a finalidade informada e com a <Link to="/privacidade">Política de Privacidade</Link> da Associação Maggu.
            </p>
            <p>O envio de formulário não cria, por si só:</p>
            <List items={[
              "vínculo empregatício;",
              "contrato;",
              "parceria;",
              "vínculo associativo;",
              "direito à participação;",
              "promessa de contratação;",
              "direito a benefício;",
              "obrigação de resposta positiva.",
            ]} />
          </DocSection>

          <DocSection id="sec-15" number={15} tone="terms" title="Contato com a Associação">
            <p>
              Os formulários, endereços de e-mail, telefone, WhatsApp e demais canais disponibilizados possuem a finalidade de facilitar a comunicação institucional.
            </p>
            <p>
              A Associação buscará responder às solicitações dentro de prazo razoável, considerando sua natureza, disponibilidade administrativa e complexidade.
            </p>
            <p>O envio de mensagem não garante resposta imediata.</p>
          </DocSection>

          <DocSection id="sec-16" number={16} tone="terms" title="Links externos">
            <p>O site poderá conter links para páginas ou plataformas de terceiros, como:</p>
            <List items={[
              "redes sociais;",
              "plataformas públicas;",
              "serviços de mapas;",
              "plataformas de vídeo;",
              "ferramentas de inscrição;",
              "instituições parceiras;",
              "órgãos públicos;",
              "portais de editais;",
              "outros sites.",
            ]} />
            <p>
              A Associação Maggu não controla necessariamente o conteúdo, disponibilidade, segurança, política de privacidade ou práticas adotadas por esses ambientes.
            </p>
            <p>
              O acesso a páginas externas deverá ocorrer sob responsabilidade do usuário e estará sujeito aos termos e políticas do respectivo terceiro.
            </p>
          </DocSection>

          <DocSection id="sec-17" number={17} tone="terms" title="Redes sociais">
            <p>A Associação Maggu poderá utilizar redes sociais para comunicação institucional.</p>
            <p>
              A interação do usuário nesses ambientes também estará sujeita aos termos, políticas e regras das respectivas plataformas.
            </p>
            <p>
              Comentários, mensagens ou conteúdos publicados por usuários nas redes sociais não representam necessariamente a opinião institucional da Associação.
            </p>
            <p>A Associação poderá moderar, ocultar ou remover conteúdos de seus espaços institucionais quando houver:</p>
            <List items={[
              "discurso de ódio;",
              "discriminação;",
              "ameaça;",
              "violência;",
              "assédio;",
              "spam;",
              "fraude;",
              "conteúdo ilícito;",
              "exposição indevida de dados pessoais;",
              "violação de direitos;",
              "manifestação manifestamente incompatível com a finalidade institucional do canal.",
            ]} />
            <p>
              A moderação não será utilizada como mecanismo arbitrário de censura a críticas legítimas ou manifestações respeitosas.
            </p>
          </DocSection>

          <DocSection id="sec-18" number={18} tone="terms" title="Privacidade e proteção de dados">
            <p>
              O tratamento de dados pessoais relacionado ao uso do site observará a <Link to="/privacidade"><strong>Política de Privacidade e Proteção de Dados Pessoais da Associação Maggu</strong></Link>.
            </p>
            <p>Esse documento apresenta informações sobre:</p>
            <List items={[
              "quais dados podem ser tratados;",
              "finalidades;",
              "bases legais;",
              "compartilhamento;",
              "armazenamento;",
              "cookies;",
              "segurança;",
              "dados de crianças e adolescentes;",
              "direitos dos titulares;",
              "canais para exercício de direitos.",
            ]} />
          </DocSection>

          <DocSection id="sec-19" number={19} tone="terms" title="Cookies">
            <p>
              O site poderá utilizar cookies e tecnologias semelhantes para viabilizar funcionalidades, segurança, preferências e, quando aplicável, análises de utilização.
            </p>
            <p>
              O funcionamento desses recursos será detalhado na Política de Privacidade e, quando necessário, em mecanismo próprio de gerenciamento de preferências.
            </p>
          </DocSection>

          <DocSection id="sec-20" number={20} tone="terms" title="Segurança">
            <p>
              A Associação busca adotar medidas adequadas para proteger seus ambientes digitais contra acessos não autorizados, alterações, perdas, falhas e usos indevidos.
            </p>
            <p>Entretanto, nenhum ambiente digital é completamente imune a riscos.</p>
            <p>O usuário também deverá adotar cuidados razoáveis durante a navegação, como:</p>
            <List items={[
              "utilizar dispositivos confiáveis;",
              "manter programas e navegadores atualizados;",
              "evitar clicar em links suspeitos;",
              "confirmar os canais oficiais da Associação;",
              "não compartilhar informações confidenciais desnecessariamente.",
            ]} />
          </DocSection>

          <DocSection id="sec-21" number={21} tone="terms" title="Indisponibilidade dos serviços digitais">
            <p>A Associação não garante funcionamento ininterrupto do site.</p>
            <p>Os ambientes digitais poderão ficar temporariamente indisponíveis em decorrência de:</p>
            <List items={[
              "manutenção;",
              "atualização;",
              "problemas de infraestrutura;",
              "falhas de fornecedores;",
              "problemas de conexão;",
              "ataques cibernéticos;",
              "eventos de força maior;",
              "questões técnicas fora do controle razoável da Associação.",
            ]} />
            <p>A Associação buscará restabelecer os serviços quando tecnicamente possível.</p>
          </DocSection>

          <DocSection id="sec-22" number={22} tone="terms" title="Limitações de responsabilidade">
            <p>A Associação Maggu não poderá ser responsabilizada por danos decorrentes exclusivamente de:</p>
            <List items={[
              "uso inadequado do site pelo usuário;",
              "fornecimento de informações falsas;",
              "acesso a links externos fora de seu controle;",
              "falhas atribuíveis exclusivamente a terceiros;",
              "problemas no equipamento ou conexão do usuário;",
              "eventos inevitáveis ou de força maior;",
              "utilização não autorizada de conteúdos por terceiros.",
            ]} />
            <p>
              Estas limitações não afastam responsabilidades que sejam legalmente atribuídas à Associação em razão de seus próprios atos ou omissões.
            </p>
            <p>
              Nenhuma disposição destes Termos deverá ser interpretada como exclusão de direitos assegurados ao usuário pela legislação brasileira.
            </p>
          </DocSection>

          <DocSection id="sec-23" number={23} tone="terms" title="Ausência de garantia de resultados">
            <p>
              A participação em projetos, atividades, eventos, formações ou oportunidades da Associação Maggu não representa garantia automática de:
            </p>
            <List items={[
              "contratação;",
              "emprego;",
              "remuneração;",
              "premiação;",
              "aprovação em editais;",
              "geração de renda;",
              "certificação, salvo quando preenchidos os requisitos;",
              "seleção em oportunidades futuras;",
              "qualquer resultado econômico, artístico ou profissional específico.",
            ]} />
            <p>Os resultados dependem da natureza de cada iniciativa e das respectivas regras.</p>
          </DocSection>

          <DocSection id="sec-24" number={24} tone="terms" title="Integridade institucional">
            <p>É proibido utilizar o nome da Associação Maggu para:</p>
            <List items={[
              "solicitar valores sem autorização;",
              "captar recursos indevidamente;",
              "representar falsamente a instituição;",
              "oferecer serviços em seu nome sem autorização;",
              "criar perfis falsos;",
              "divulgar falsas parcerias;",
              "emitir documentos não autorizados;",
              "praticar qualquer ato que induza terceiros a erro.",
            ]} />
            <p>
              Suspeitas de utilização indevida da identidade institucional poderão ser comunicadas à Associação pelos canais oficiais.
            </p>
          </DocSection>

          <DocSection id="sec-25" number={25} tone="terms" title="Canal de denúncias">
            <p>
              Quando houver canal específico de denúncias disponibilizado pela Associação Maggu, ele deverá ser utilizado para relatos relacionados às matérias abrangidas por sua finalidade.
            </p>
            <p>O canal de denúncias não deve ser utilizado de má-fé para:</p>
            <List items={[
              "acusações deliberadamente falsas;",
              "ameaças;",
              "assédio;",
              "perseguição;",
              "envio de conteúdo ilícito;",
              "utilização abusiva contra terceiros.",
            ]} />
            <p>
              Relatos realizados de boa-fé serão tratados com seriedade e de acordo com os procedimentos institucionais aplicáveis.
            </p>
          </DocSection>

          <DocSection id="sec-26" number={26} tone="terms" title="Transparência institucional">
            <p>A Associação Maggu poderá disponibilizar informações relacionadas a:</p>
            <List items={[
              "documentos institucionais;",
              "projetos;",
              "parcerias;",
              "relatórios;",
              "prestação de contas;",
              "recursos recebidos;",
              "execução de iniciativas.",
            ]} />
            <p>
              A transparência será exercida em conformidade com as obrigações legais e contratuais aplicáveis, respeitando a proteção de dados pessoais, informações confidenciais e direitos de terceiros.
            </p>
            <p>Nem todo documento administrativo ou registro interno é necessariamente de divulgação pública.</p>
          </DocSection>

          <DocSection id="sec-27" number={27} tone="terms" title="Alterações nos Termos de Uso">
            <p>Estes Termos poderão ser modificados para refletir:</p>
            <List items={[
              "mudanças legislativas;",
              "alterações nas funcionalidades do site;",
              "novas atividades;",
              "alterações institucionais;",
              "atualização das práticas internas;",
              "aperfeiçoamento de medidas de segurança;",
              "mudanças tecnológicas.",
            ]} />
            <p>
              A versão atualizada será disponibilizada nos ambientes institucionais da Associação, acompanhada da respectiva data de atualização.
            </p>
          </DocSection>

          <DocSection id="sec-28" number={28} tone="terms" title="Validade das disposições">
            <p>
              Caso qualquer disposição destes Termos seja considerada inválida, ilegal ou inexequível, as demais disposições continuarão válidas na medida permitida pela legislação.
            </p>
            <p>
              A eventual tolerância da Associação quanto ao descumprimento de alguma disposição não implica renúncia definitiva de direito.
            </p>
          </DocSection>

          <DocSection id="sec-29" number={29} tone="terms" title="Legislação aplicável">
            <p>Estes Termos são regidos pelas leis da República Federativa do Brasil.</p>
            <p>Sua interpretação deverá observar, quando aplicável:</p>
            <List items={[
              "a Constituição Federal;",
              "o Código Civil;",
              "o Código de Defesa do Consumidor, nas relações em que sua incidência for juridicamente cabível;",
              "o Marco Civil da Internet;",
              "a Lei Geral de Proteção de Dados Pessoais;",
              "o Estatuto da Criança e do Adolescente;",
              "demais normas brasileiras pertinentes.",
            ]} />
          </DocSection>

          <DocSection id="sec-30" number={30} tone="terms" title="Solução de controvérsias">
            <p>
              Em caso de dúvida, divergência ou controvérsia relacionada à utilização do site ou a estes Termos, recomenda-se inicialmente o contato com a Associação Maggu para tentativa de solução administrativa.
            </p>
            <p>
              Nada nesta disposição impede o exercício do direito constitucional de acesso ao Poder Judiciário ou restringe direitos legalmente atribuídos ao usuário.
            </p>
            <p>
              Eventual definição de competência territorial deverá observar as normas processuais e de proteção aplicáveis ao caso concreto.
            </p>
          </DocSection>

          <DocSection id="sec-31" number={31} tone="terms" title="Canais oficiais">
            <p>
              Dúvidas sobre estes Termos ou sobre os ambientes digitais da Associação poderão ser encaminhadas por meio dos canais institucionais:
            </p>
            <dl className="grid gap-2 rounded-md border border-brand-petrol/12 bg-brand-soft/35 px-4 py-4 text-[12px] leading-[1.7] sm:grid-cols-[minmax(0,140px)_minmax(0,1fr)] sm:gap-x-6 md:px-5">
              <dt className="font-semibold text-brand-ink sm:col-span-2">ASSOCIAÇÃO SÓCIO CULTURAL MAGGU</dt>
              <dt className="font-semibold text-brand-ink">CNPJ:</dt>
              <dd className="break-words">61.841.454/0001-80</dd>
              <dt className="font-semibold text-brand-ink">Endereço:</dt>
              <dd className="break-words">Rua Em Projeto A, 33 — Benedito Bentes — Maceió/AL — CEP 57084-411</dd>
              <dt className="font-semibold text-brand-ink">Telefone:</dt>
              <dd className="break-words">(82) 99806-7374</dd>
              <dt className="font-semibold text-brand-ink">E-mail:</dt>
              <dd className="break-all"><a href="mailto:comunicacaomktmaggu@gmail.com">comunicacaomktmaggu@gmail.com</a></dd>
            </dl>
          </DocSection>

          <DocSection id="sec-32" number={32} tone="terms" title="Disposições finais">
            <p>
              Estes Termos de Uso têm como objetivo estabelecer regras claras para a utilização dos ambientes digitais da Associação Maggu e contribuir para uma relação transparente e responsável com seus diferentes públicos.
            </p>
            <p>
              A utilização dos canais institucionais deverá ocorrer com respeito às pessoas, aos direitos individuais e coletivos, à legislação e aos valores que orientam a atuação da Associação.
            </p>
          </DocSection>

          <footer className="mt-9 border-t border-brand-petrol/12 pt-6">
            <div className="space-y-0.5 text-[12px] leading-[1.7] text-brand-gray">
              <p className="font-semibold text-brand-ink">Associação Sócio Cultural Maggu</p>
              <p className="font-semibold text-brand-ink">Associação Maggu</p>
              <p className="font-semibold text-brand-ink">CNPJ nº 61.841.454/0001-80</p>
              <p className="pt-3 font-semibold text-brand-ink">Última atualização: {ultimaAtualizacao}.</p>
            </div>
          </footer>
        </article>
      </div>

      <CompactFinalCTA
        variant="terms"
        title="Conhecer as condições de uso também faz parte de uma navegação responsável."
        text="Consulte também a Política de Privacidade da Associação Maggu ou fale com a nossa equipe em caso de dúvida."
        primary={{ label: "Ver Política de Privacidade", to: "/privacidade" }}
        secondary={{ label: "Entre em contato", to: "/contato" }}
      />
    </main>
  );
}
