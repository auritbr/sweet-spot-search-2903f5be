// Centralized demo content. Easy to edit.
export const site = {
  name: "Ponto de Cultura Cena Viva",
  short: "Cena Viva",
  tagline: "Teatro, formação e transformação social",
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
    slug: "palco-aberto",
    name: "Palco Aberto",
    category: "Formação",
    status: "Em andamento",
    audience: "Crianças e adolescentes",
    location: "Sede — São Paulo/SP",
    period: "2023 — 2026",
    short: "Oficinas de iniciação teatral para crianças e adolescentes.",
    color: "brand-red",
    image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=1600&q=80",
    tags: ["crianças", "formação"],
    objective: "Iniciar crianças e adolescentes na linguagem teatral por meio de vivências lúdicas, corporais e de expressão.",
    specifics: [
      "Desenvolver noções básicas de interpretação e improvisação.",
      "Estimular autoconfiança, escuta e trabalho em grupo.",
      "Criar espaços de convivência e pertencimento cultural.",
    ],
    methodology: "Encontros semanais organizados em ciclos de formação, criação e apresentação, com condução de arte-educadores.",
    activities: ["Aquecimento corporal", "Jogos teatrais", "Leituras dramáticas", "Criação de cenas", "Mostras internas"],
    team: ["Coordenação pedagógica", "Arte-educadores", "Assistentes de produção"],
    partners: ["Secretaria Municipal de Cultura", "Escolas parceiras"],
    results: ["120 participantes formados", "6 mostras realizadas", "3 territórios atendidos"],
  },
  {
    slug: "corpo-voz-e-movimento",
    name: "Corpo, Voz e Movimento",
    category: "Formação técnica",
    status: "Em andamento",
    audience: "Jovens e adultos",
    location: "Sede e escolas parceiras",
    period: "2024 — 2026",
    short: "Formação em expressão corporal, interpretação e criação cênica.",
    color: "brand-cyan",
    image: "https://images.unsplash.com/photo-1533158307587-828f0a76ef46?auto=format&fit=crop&w=1600&q=80",
    tags: ["jovens", "formação"],
    objective: "Aprofundar a formação técnica em artes cênicas com foco em expressão corporal, voz e criação coletiva.",
    specifics: [
      "Ampliar recursos expressivos de corpo e voz.",
      "Desenvolver presença cênica e improvisação.",
      "Promover processos de criação coletiva.",
    ],
    methodology: "Módulos progressivos, laboratórios de criação e residências artísticas.",
    activities: ["Treinamento vocal", "Expressão corporal", "Improvisação", "Criação coletiva", "Apresentação pública"],
    team: ["Diretores artísticos", "Preparadores corporais e vocais"],
    partners: ["Universidades", "Companhias teatrais"],
    results: ["80 participantes", "4 espetáculos criados", "12 apresentações"],
  },
  {
    slug: "cena-no-territorio",
    name: "Cena no Território",
    category: "Circulação",
    status: "Em andamento",
    audience: "Comunidade em geral",
    location: "Praças, escolas e centros comunitários",
    period: "2022 — 2026",
    short: "Apresentações, intervenções culturais e circulação de espetáculos.",
    color: "brand-gold",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1600&q=80",
    tags: ["comunidade", "espetáculos"],
    objective: "Democratizar o acesso ao teatro por meio da circulação de espetáculos em territórios diversos.",
    specifics: [
      "Ocupar espaços públicos com apresentações.",
      "Promover intervenções culturais colaborativas.",
      "Ampliar o alcance das produções da organização.",
    ],
    methodology: "Planejamento territorial em diálogo com lideranças locais e mediação com o público.",
    activities: ["Apresentações abertas", "Intervenções urbanas", "Rodas de conversa", "Oficinas relâmpago"],
    team: ["Produção executiva", "Elenco", "Mediação cultural"],
    partners: ["Prefeituras", "Associações de bairro", "Coletivos culturais"],
    results: ["25 apresentações", "8 territórios atendidos", "público estimado de 4.000 pessoas"],
  },
];

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
