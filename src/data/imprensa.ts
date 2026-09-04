// Conteúdo da Sala de Imprensa. Estrutura preparada para atualização simples.

export const pressFacts = [
  { label: "Nome público", value: "Associação Maggu" },
  { label: "Razão social", value: "Associação Sócio Cultural Maggu" },
  { label: "CNPJ", value: "61.841.454/0001-80" },
  { label: "Território", value: "Benedito Bentes — Maceió/AL" },
  { label: "Formalização", value: "2025" },
  {
    label: "Frentes principais",
    value:
      "Arte, cultura e formação; audiovisual; livro e memória; infância e território; esporte e inclusão; sustentabilidade",
  },
] as const;

export const spokespeople = [
  {
    name: "Cristiano Alcides da Silva Paes",
    role: "Diretor Geral",
    bio: "Responsável pela direção institucional da Associação Maggu, acompanha a articulação com o território do Benedito Bentes, a construção de parcerias e o desenvolvimento das frentes culturais, formativas e comunitárias da organização.",
    topics: ["História e atuação da Associação", "Projetos e ações culturais", "Território e comunidade", "Parcerias e desenvolvimento"],
    accent: "cyan" as const,
  },
  {
    name: "Rafaela da Silva Leite",
    role: "Diretora Administrativo-Financeira",
    bio: "Responde pela organização administrativa e financeira da Associação, acompanhando processos internos, prestação de contas, governança institucional e a sustentabilidade das iniciativas desenvolvidas.",
    topics: ["Gestão institucional", "Transparência e governança", "Parcerias e desenvolvimento", "Projetos e ações culturais"],
    accent: "gold" as const,
  },
];

export const officialPhotos = [
  {
    title: "Atividade formativa no Teatro Escola Maggu",
    description: "Registro de oficina com participantes do território.",
    credit: "Foto: Acervo Associação Maggu",
    image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=800&q=70",
    url: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=2000&q=90",
  },
  {
    title: "Apresentação cênica aberta à comunidade",
    description: "Ação cultural realizada no Benedito Bentes.",
    credit: "Foto: Acervo Associação Maggu",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=800&q=70",
    url: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=2000&q=90",
  },
  {
    title: "Encontro comunitário",
    description: "Roda de conversa com moradores e parceiros locais.",
    credit: "Foto: Acervo Associação Maggu",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=800&q=70",
    url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=2000&q=90",
  },
];

export const releases = [
  {
    category: "Projetos",
    title: "Teatro Escola Maggu amplia turmas de formação no Benedito Bentes",
    date: "2026",
    summary:
      "Percursos formativos em teatro seguem organizados por nível de experiência, com vagas destinadas a crianças, adolescentes, jovens e adultos do território.",
  },
  {
    category: "Institucional",
    title: "Associação Maggu estrutura sua área pública de transparência",
    date: "2026",
    summary:
      "Documentos, políticas institucionais e canais de integridade passam a ser reunidos em área pública de consulta.",
  },
  {
    category: "Território",
    title: "Ações culturais integram arte, memória e convivência comunitária",
    date: "2026",
    summary:
      "As frentes do Ecossistema Maggu articulam formação artística, audiovisual, leitura, esporte e sustentabilidade em iniciativas conjuntas.",
  },
];

export const clipping = [
  { title: "Cultura de periferia: o teatro que forma no Benedito Bentes", outlet: "Veículo regional", date: "2026", url: "#" },
  { title: "Entrevista: arte, território e juventude em Maceió", outlet: "Rádio comunitária", date: "2026", url: "#" },
  { title: "Ponto de Cultura amplia acesso a atividades formativas", outlet: "Portal de notícias", date: "2026", url: "#" },
];

export const pressDocs = [
  { name: "Portfólio institucional público", format: "PDF", url: "#" },
  { name: "Apresentação institucional resumida", format: "PDF", url: "#" },
  { name: "Ficha rápida da Associação", format: "PDF", url: "#" },
];

export const pressKitIncludes = [
  "Release institucional",
  "Ficha rápida",
  "Minibiografias autorizadas",
  "Seleção de fotos oficiais com créditos",
  "Logos oficiais autorizadas",
  "Apresentação institucional resumida",
  "Orientações de contato",
];

export const pressKitExcludes = [
  "Estatuto completo, atas e documentação jurídica extensa",
  "Banco integral de certificados",
  "Arquivos de identidade não autorizados",
  "Dados pessoais além do necessário para comunicação",
];
