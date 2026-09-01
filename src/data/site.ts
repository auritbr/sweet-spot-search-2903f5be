// Centralized demo content. Easy to edit.
export const site = {
  name: "Associação Sócio Cultural Maggu",
  short: "Associação Maggu",
  tagline: "Cultura, formação e território",
  phone: "(11) 4002-8922",
  whatsapp: "5511900000000",
  whatsappMsg: "Olá! Acessei o site do Ponto de Cultura e gostaria de mais informações.",
  email: "contato@cenaviva.org.br",
  address: "Rua das Artes, 123 — Centro Cultural, São Paulo/SP",
  hours: "Seg a Sex, 9h às 18h",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
  },
};

export const hero = {
  photo: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1920&q=80",
};

export const slides = [
  {
    title: "Cultura que nasce no território e transforma pessoas.",
    text: "No Benedito Bentes, em Maceió, a Associação Maggu conecta arte, educação, memória, cinema, leitura, comunicação, esporte, sustentabilidade e cidadania para ampliar direitos, fortalecer vínculos e criar novas possibilidades.",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1920&q=80",
    buttons: [
      { label: "Conheça a Maggu", to: "/quem-somos" },
      { label: "Conheça o Ecossistema", to: "/ecossistema" },
    ],
  },
  {
    title: "Muitas frentes. Um mesmo compromisso com o território.",
    text: "Arte, audiovisual, leitura, infância, esporte e sustentabilidade se organizam em eixos que se conectam no Ecossistema Maggu.",
    image: "https://images.unsplash.com/photo-1519683384663-1de1a1e3f6a7?auto=format&fit=crop&w=1920&q=80",
    buttons: [{ label: "Explorar o Ecossistema", to: "/ecossistema" }],
  },
  {
    title: "A arte como instrumento de transformação social.",
    text: "Formação, criação, convivência, memória e participação cultural construídas com a comunidade do Benedito Bentes.",
    image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&w=1920&q=80",
    buttons: [{ label: "Conheça os projetos", to: "/projetos" }],
  },
];

export const indicators = [
  { value: "1.000+", label: "participantes" },
  { value: "15", label: "anos de atuação" },
  { value: "30", label: "ações culturais realizadas" },
  { value: "20", label: "apresentações e espetáculos" },
];

export const projects = [
  {
    slug: "teatro-escola-maggu",
    name: "Teatro Escola Maggu",
    title: "Teatro Escola Maggu — formação, criação e encontro.",
    category: "Arte, Cultura & Formação",
    short: "Espaço de formação, criação e produção cultural no Benedito Bentes.",
    description: "O Teatro Escola Maggu é um espaço de formação, criação e produção cultural no Benedito Bentes. A partir do teatro e do diálogo com outras linguagens artísticas, promove experiências que estimulam expressão, criatividade, autonomia, convivência e acesso à cultura. O espaço recebe cursos, oficinas, ensaios, produções, encontros e ações do Ecossistema Maggu, aproximando crianças, adolescentes, jovens e adultos da experiência artística.",
    color: "brand-red",
    image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=1600&q=80",
    ctas: [
      { label: "Conheça as formações", to: "/contato" },
      { label: "Ver agenda", to: "/agenda" },
    ],
  },
  {
    slug: "bora-fazer-teatro",
    name: "Bora Fazer Teatro?",
    title: "Bora Fazer Teatro?",
    category: "Arte, Cultura & Formação",
    short: "Percurso de formação teatral com turmas organizadas por nível de experiência.",
    description: "Um percurso de formação teatral para quem quer começar, aprofundar experiências ou avançar para processos de montagem. As turmas são organizadas por nível de experiência, com aprendizagem prática, jogos, expressão, improvisação, voz, cena e criação.",
    color: "brand-orange",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1600&q=80",
    ctas: [{ label: "Ver turmas e inscrições", to: "/contato" }],
  },
  {
    slug: "cineclube-teatro-maggu",
    name: "Cineclube Teatro Maggu",
    title: "Cinema para ver, conversar e transformar.",
    category: "Audiovisual & Comunicação",
    short: "Cinema como espaço de encontro, repertório, reflexão e formação de público.",
    description: "O Cineclube Teatro Maggu aproxima o público do cinema por meio de sessões, mostras, debates e ações formativas. Mais do que exibir filmes, cria espaços de encontro, repertório, reflexão e formação de público. A iniciativa participa de circuitos e mostras audiovisuais e amplia o acesso a produções nacionais e internacionais, valorizando também recursos de acessibilidade quando disponíveis.",
    color: "brand-cyan",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1600&q=80",
    ctas: [
      { label: "Ver próximas sessões", to: "/agenda" },
      { label: "Conheça nossa memória audiovisual", to: "/contato" },
    ],
  },
  {
    slug: "jardim-literario-maggu",
    name: "Jardim Literário Maggu",
    title: "Livros que circulam. Histórias que permanecem.",
    category: "Livro, Leitura & Memória",
    short: "Iniciativa de leitura, circulação de livros e construção de memória comunitária.",
    description: "O Jardim Literário Maggu é uma iniciativa de incentivo à leitura, circulação de livros e construção de memória comunitária. A biblioteca aproxima livros e pessoas, promove doações, ações de leitura e experiências que reconhecem cada obra como portadora de histórias. Na campanha de doação, o livro pode chegar acompanhado de uma carta contando o que aquela obra representa para quem a doa, transformando a doação também em gesto de memória.",
    color: "brand-gold",
    image: "https://images.unsplash.com/photo-1526243741027-444d633d7365?auto=format&fit=crop&w=1600&q=80",
    ctas: [
      { label: "Doe livros", to: "/contato" },
      { label: "Conheça a biblioteca", to: "/contato" },
    ],
  },
  {
    slug: "infanciar",
    name: "INFANCIAR — Quando a Rua Volta a Sonhar",
    title: "Quando a rua volta a sonhar, a infância volta a ocupar seu lugar.",
    category: "Infância, Cidadania & Território",
    short: "Iniciativa que reconhece o brincar como direito e a rua como espaço de convivência.",
    description: "INFANCIAR é uma iniciativa que reconhece o brincar como direito e a rua como espaço possível de convivência, imaginação, cultura e pertencimento. Por meio de ocupações criativas, jogos, arte e experiências comunitárias, o projeto convida crianças, famílias e território a reconstruírem relações com o espaço público e com o direito de viver a infância.",
    color: "brand-orange",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1600&q=80",
    ctas: [{ label: "Conheça o INFANCIAR", to: "/contato" }],
  },
  {
    slug: "esporte-na-comunidade",
    name: "Esporte na Comunidade",
    title: "Movimento que forma. Esporte que aproxima.",
    category: "Esporte, Bem-estar & Inclusão",
    short: "Práticas esportivas, formação cidadã e convivência como caminhos de desenvolvimento humano.",
    description: "O Esporte na Comunidade integra práticas esportivas, formação cidadã e convivência. A proposta utiliza esporte e lazer como instrumentos de desenvolvimento humano, inclusão, disciplina, saúde e fortalecimento comunitário. A Associação Maggu está inscrita no Cadastro Alagoano do Esporte — CAE, fortalecendo institucionalmente sua atuação nessa área.",
    color: "brand-petrol",
    image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1600&q=80",
    ctas: [{ label: "Conheça as atividades esportivas", to: "/contato" }],
  },
  {
    slug: "em-memoria-de-mim",
    name: "Em Memória de Mim",
    title: "Uma obra que atravessa gerações.",
    category: "Arte, Cultura & Formação",
    short: "Produção construída ao longo dos anos que reúne teatro, memória, fé, território e criação coletiva.",
    description: "Nascida da trajetória da Paixão de Cristo iniciada em 2001, Em Memória de Mim reúne teatro, memória, fé, território e criação coletiva em uma produção construída ao longo dos anos com a participação de artistas e comunidade. A obra representa um dos principais fios da memória artística que antecede a atual Associação e ajuda a contar a relação histórica da Maggu com o teatro e com o Benedito Bentes.",
    color: "brand-red",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1600&q=80",
    ctas: [{ label: "Conheça essa história", to: "/contato" }],
  },
  {
    slug: "educativa-radio-web-maggu",
    name: "Educativa Rádio Web Maggu",
    title: "Comunicação que aproxima.",
    category: "Audiovisual & Comunicação",
    short: "Frente de comunicação comunitária e produção de conteúdo que amplia vozes.",
    description: "A Educativa Rádio Web Maggu é uma frente de comunicação comunitária e produção de conteúdo que amplia vozes, divulga cultura, compartilha informação e cria novas formas de conexão entre iniciativas, artistas, comunidade e território.",
    color: "brand-cyan",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1600&q=80",
    ctas: [{ label: "Conheça a Educativa", to: "/contato" }],
  },
  {
    slug: "laboratorio-de-arte-sustentavel",
    name: "Laboratório de Arte Sustentável",
    title: "Materiais esquecidos. Novas possibilidades.",
    category: "Sustentabilidade & Desenvolvimento",
    short: "Materiais reaproveitáveis transformados em experiências de criação, aprendizagem e consciência ambiental.",
    description: "O Laboratório de Arte Sustentável transforma materiais reaproveitáveis em experiências de criação, aprendizagem e consciência ambiental. Papel, papelão, PET, tampinhas e outros materiais deixam de ser apenas descarte e passam a integrar processos artísticos e educativos.",
    color: "brand-lime",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1600&q=80",
    ctas: [{ label: "Conheça o Laboratório", to: "/contato" }],
  },
] as const;

export const news = [
  {
    slug: "mostra-de-encerramento-reune-comunidade",
    title: "Mostra de encerramento reúne comunidade em noite de teatro",
    category: "Apresentações",
    date: "2026-06-12",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1600&q=80",
    excerpt: "Público lotou o espaço para acompanhar as apresentações dos participantes das oficinas.",
    body: "Ao longo da noite, participantes das oficinas apresentaram cenas construídas coletivamente durante o semestre. A programação incluiu apresentações de teatro, dança e leituras dramáticas...",
  },
  {
    slug: "novas-turmas-de-oficinas-abrem-inscricoes",
    title: "Novas turmas de oficinas abrem inscrições",
    category: "Oficinas",
    date: "2026-05-28",
    image: "https://images.unsplash.com/photo-1523207911345-32501502db22?auto=format&fit=crop&w=1600&q=80",
    excerpt: "Inscrições gratuitas para crianças, jovens e adultos interessados em iniciar-se no teatro.",
    body: "As oficinas fazem parte do projeto Palco Aberto e oferecem formação continuada em linguagens cênicas...",
  },
  {
    slug: "parceria-com-universidades-amplia-formacao",
    title: "Parceria com universidades amplia formação de jovens",
    category: "Parcerias",
    date: "2026-04-14",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80",
    excerpt: "Convênio permite intercâmbio de metodologias e residências artísticas.",
    body: "A parceria fortalece o percurso formativo dos jovens participantes e amplia as possibilidades de continuidade profissional na área...",
  },
  {
    slug: "circulacao-cultural-chega-a-novos-bairros",
    title: "Circulação cultural chega a novos bairros",
    category: "Comunidade",
    date: "2026-03-02",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1600&q=80",
    excerpt: "Projeto Cena no Território leva espetáculos e intervenções culturais a novas regiões.",
    body: "Neste ciclo, o projeto Cena no Território amplia sua atuação para mais quatro bairros...",
  },
  {
    slug: "encontro-de-arte-educadores",
    title: "Encontro de arte-educadores debate formação e território",
    category: "Formação",
    date: "2026-02-18",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80",
    excerpt: "Educadores compartilharam experiências e metodologias em dois dias de programação.",
    body: "O encontro reuniu arte-educadores de diferentes territórios em uma programação intensa...",
  },
  {
    slug: "programa-institucional-alcanca-marco-historico",
    title: "Programa institucional alcança marco histórico de atendimento",
    category: "Institucional",
    date: "2026-01-20",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80",
    excerpt: "Somamos mais de 1.000 participantes atendidos desde a fundação da organização.",
    body: "O marco foi celebrado com um encontro entre educadores, participantes e apoiadores...",
  },
];

export const team = [
  { name: "Ana Rocha", role: "Direção artística", bio: "Atriz e diretora com mais de 20 anos de trajetória em teatro comunitário.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80", color: "brand-red" },
  { name: "Bruno Alves", role: "Coordenação pedagógica", bio: "Arte-educador e pesquisador em metodologias participativas.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80", color: "brand-cyan" },
  { name: "Carla Menezes", role: "Produção executiva", bio: "Produtora cultural com experiência em circulação de espetáculos.", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80", color: "brand-gold" },
  { name: "Diego Souza", role: "Preparação corporal", bio: "Bailarino e preparador corporal para elencos cênicos.", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80", color: "brand-orange" },
  { name: "Elisa Prado", role: "Preparação vocal", bio: "Cantora lírica e preparadora vocal para artes cênicas.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80", color: "brand-lime" },
  { name: "Felipe Ramos", role: "Mediação cultural", bio: "Mediador cultural especializado em públicos escolares.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80", color: "brand-petrol" },
  { name: "Gabriela Lima", role: "Comunicação", bio: "Jornalista e produtora de conteúdo cultural.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80", color: "brand-red" },
  { name: "Hugo Nascimento", role: "Cenografia", bio: "Cenógrafo e figurinista, atua em produções teatrais e educacionais.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80", color: "brand-cyan" },
];

export const timeline = [
  { year: "2010", title: "Fundação", text: "Nascemos como coletivo de teatro comunitário no centro da cidade." },
  { year: "2013", title: "Primeira sede", text: "Inauguração da nossa primeira sede cultural com oficinas regulares." },
  { year: "2016", title: "Reconhecimento como Ponto de Cultura", text: "Certificação como Ponto de Cultura pelo Ministério da Cultura." },
  { year: "2019", title: "Circulação regional", text: "Ampliação das apresentações para outros territórios." },
  { year: "2022", title: "Formação técnica", text: "Início do programa de formação avançada em artes cênicas." },
  { year: "2026", title: "1.000 participantes", text: "Superamos a marca de mil pessoas atendidas desde a fundação." },
];

export const partners = [
  "Ministério da Cultura", "Secretaria Municipal", "Universidade Aberta", "Instituto Cultural",
  "Fundação Artes", "Sesc", "Itaú Cultural", "Rede Escola",
];

export const albums = [
  { year: 2026, slug: "oficinas-de-teatro-2026", title: "Oficinas de Teatro", count: 12, description: "Registros das oficinas regulares realizadas em 2026.",
    cover: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=1200&q=80",
    photos: [
      "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1523207911345-32501502db22?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1533158307587-828f0a76ef46?auto=format&fit=crop&w=1600&q=80",
    ]},
  { year: 2026, slug: "apresentacao-de-encerramento-2026", title: "Apresentação de Encerramento", count: 10, description: "Mostra final do primeiro semestre.",
    cover: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1200&q=80",
    photos: [
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1600&q=80",
    ]},
  { year: 2026, slug: "encontro-com-a-comunidade-2026", title: "Encontro com a Comunidade", count: 8, description: "Rodas de conversa e apresentações abertas.",
    cover: "https://images.unsplash.com/photo-1519683384663-1de1a1e3f6a7?auto=format&fit=crop&w=1200&q=80",
    photos: [
      "https://images.unsplash.com/photo-1519683384663-1de1a1e3f6a7?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80",
    ]},
  { year: 2025, slug: "mostra-cultural-2025", title: "Mostra Cultural", count: 9, description: "Programação da mostra cultural anual.",
    cover: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&w=1200&q=80",
    photos: [
      "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1533158307587-828f0a76ef46?auto=format&fit=crop&w=1600&q=80",
    ]},
  { year: 2025, slug: "formacao-de-jovens-2025", title: "Formação de Jovens", count: 7, description: "Registros do programa de formação para jovens.",
    cover: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
    photos: ["https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80"]},
  { year: 2024, slug: "circulacao-de-espetaculos-2024", title: "Circulação de Espetáculos", count: 11, description: "Registro das apresentações em diferentes bairros.",
    cover: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=80",
    photos: ["https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1600&q=80"]},
  { year: 2023, slug: "temporada-teatral-2023", title: "Temporada Teatral", count: 6, description: "Temporada realizada em espaços parceiros.",
    cover: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1200&q=80",
    photos: ["https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1600&q=80"]},
];

export const documents = [
  { name: "Relatório Anual 2025", category: "Relatórios", year: 2025, format: "PDF", size: "2.3 MB", url: "#" },
  { name: "Prestação de Contas 2025", category: "Prestação de contas", year: 2025, format: "PDF", size: "1.8 MB", url: "#" },
  { name: "Estatuto Social", category: "Institucional", year: 2024, format: "PDF", size: "540 KB", url: "#" },
  { name: "Ata da Assembleia 2025", category: "Atas", year: 2025, format: "PDF", size: "310 KB", url: "#" },
  { name: "Certidão Negativa Federal", category: "Certidões", year: 2026, format: "PDF", size: "180 KB", url: "#" },
  { name: "Plano de Trabalho — Palco Aberto", category: "Planos de trabalho", year: 2025, format: "PDF", size: "720 KB", url: "#" },
  { name: "Convênio Cultural Municipal", category: "Convênios", year: 2024, format: "PDF", size: "980 KB", url: "#" },
  { name: "Edital de Seleção 2026", category: "Editais", year: 2026, format: "PDF", size: "450 KB", url: "#" },
  { name: "Política de Privacidade", category: "Políticas", year: 2026, format: "PDF", size: "220 KB", url: "#" },
  { name: "Política de Proteção a Crianças e Adolescentes", category: "Políticas", year: 2025, format: "PDF", size: "260 KB", url: "#" },
];
