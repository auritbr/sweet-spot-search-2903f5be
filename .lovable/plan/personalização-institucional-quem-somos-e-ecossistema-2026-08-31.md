# Personalização institucional: Quem Somos e Ecossistema

## Objetivo
Atualizar somente a navegação principal, a página **Quem Somos** e criar a nova página **Ecossistema**, preservando o design system, componentes globais, acessibilidade e todas as demais páginas.

## Implementação

### 1. Navegação principal
- Reorganizar o menu para: Início, Quem Somos, Ecossistema, Projetos, Notícias, Galeria, Transparência e Contato.
- Manter os submenus existentes de Quem Somos e Projetos, com Ecossistema como item independente.
- Garantir o mesmo comportamento no desktop e no menu móvel.

### 2. Página Quem Somos
- Reconstruir `/quem-somos` com o hero e os textos institucionais fornecidos.
- Criar a seção narrativa “Quem é a Associação Maggu” em duas colunas com fotografia documental e formas geométricas.
- Manter `id="nossa-historia"`, inserir a introdução completa e atualizar a linha do tempo com os cinco marcos reais, incluindo os dois acontecimentos separados de 2025; usar linha horizontal no desktop e vertical no celular.
- Substituir Missão, Visão e Valores por dois blocos editoriais distintos: Missão e Filosofia, sem reescrever os textos institucionais.
- Criar “Como transformamos” com os cinco verbos conectados e microtextos fornecidos, sem estética de fluxograma corporativo.
- Adicionar a seção Benedito Bentes com abordagem de pertencimento e potência comunitária e chamada para `/ecossistema`.
- Adicionar governança resumida somente com os dois nomes e cargos fornecidos, seguida do link para Transparência.
- Finalizar com CTA contrastante para Ecossistema e Contato.
- Atualizar title, description, Open Graph e canonical da rota.

### 3. Nova página Ecossistema
- Criar `/ecossistema` como rota independente de Projetos, com metadados próprios.
- Montar hero fotográfico com acesso aos eixos e à página Projetos.
- Criar introdução narrativa com composição visual abstrata representando seis frentes conectadas.
- Apresentar os seis eixos com os nomes e textos exatos em composição editorial assimétrica no desktop e coluna única no celular.
- Criar a seção “Os eixos se encontram” com somente os seis conceitos transversais fornecidos.
- Exibir as nove iniciativas prioritárias com nome, eixo, resumo fornecido, imagem demonstrativa e botão “Conheça” direcionando à página geral de Projetos, sem inventar dados ou rotas internas inexistentes.
- Adicionar chamada para todos os projetos e CTA final próprio.

### 4. Validação
- Corrigir apenas incompatibilidades de links tipados já existentes que impeçam a compilação, sem alterar sua aparência ou destino.
- Verificar build atual, navegação das novas ligações e ausência de erros no navegador.
- Validar visualmente `/quem-somos` e `/ecossistema` em desktop e celular, incluindo linha do tempo, menu móvel e ausência de rolagem horizontal.
- Confirmar que Notícias e Galeria permanecem sem alterações.

## Detalhes técnicos
- Reutilizar `PageHero`, `Section`, `Link` e as formas SVG existentes.
- Usar os tokens semânticos e utilitários já definidos, sem criar uma identidade paralela.
- Manter imagens com `alt`, carregamento adiado fora do hero, hierarquia semântica, foco visível e links compatíveis com TanStack Router.
- Não alterar `routeTree.gen.ts`; a nova rota será gerada automaticamente a partir de `src/routes/ecossistema.tsx`.
