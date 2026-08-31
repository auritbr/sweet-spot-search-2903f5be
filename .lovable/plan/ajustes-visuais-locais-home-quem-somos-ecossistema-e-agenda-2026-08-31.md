# Ajustes visuais locais — Home, Quem Somos, Ecossistema e Agenda

## Escopo protegido
- Alterar somente `src/components/Header.tsx`, `src/routes/index.tsx`, `src/routes/quem-somos/index.tsx`, `src/routes/ecossistema.tsx` e `src/routes/agenda/index.tsx`.
- Não alterar `src/styles.css`, fontes/importações, tokens, tema, Tailwind, componentes globais, `PageHero`, `Section`, `AgendaCard`, botões, footer, rotas, dados ou lógica de filtros.
- Preservar integralmente as demais páginas e a estrutura de navegação.

## Implementação

### Header
- Conferir os itens comuns no desktop e mobile e garantir que o hover permaneça transparente.
- Preservar cor de texto, underline/animação já existentes, dimensões, dropdown, estado ativo e botão “Apoie”; não adicionar nenhum efeito.

### Home
- Refazer localmente “Ponto de Cultura” como composição aberta, sem fundo cinza, borda, card ou sombra, com texto aprovado à esquerda e apenas um grafismo já existente à direita.
- Reorganizar “Agenda” em duas colunas no desktop: introdução à esquerda e, quando houver dados, até três linhas editoriais à direita, separadas apenas por divisórias. No estado vazio, usar os textos aprovados sem caixa/card e manter “Ver Agenda” e o link secundário existente.
- Refazer “Transparência” como composição simples e aberta, com eyebrow, título, texto e CTA aprovados, sem card/ícones/documentos.
- Aplicar espaçamento inferior local maior à seção de Transparência para separá-la claramente do CTA final, sem alterar tokens ou outras seções.

### Quem Somos
- Substituir somente a faixa “Ponto de Cultura” por composição editorial aberta com o texto aprovado, “2025” discreto e um grafismo existente; sem selo inventado, card, borda ou sombra.
- Separar Missão e Filosofia em composições locais distintas: Missão ampla e Filosofia menor/deslocada, com espaço real entre ambas e conteúdo exatamente preservado.
- Remover os cards individuais da Diretoria e apresentar Cristiano e Rafaela em linhas tipográficas simples com divisor, mantendo texto e CTAs atuais.
- Não tocar na linha do tempo nem nos demais blocos.

### Ecossistema
- Aumentar apenas a altura mínima do hero local em aproximadamente 80px no desktop e proporcionalmente menos em telas menores.
- Manter conteúdo, tipografia, imagem, formas, cores, botões e composição atual.

### Agenda
- Recriar o hero local segundo a estrutura visual já usada por Equipe/Transparência: fundo claro, composição centralizada e mesmos grafismos existentes, com H1 “Agenda” e texto aprovado.
- Inserir logo após o hero uma apresentação editorial simples com eyebrow, título, texto e complemento aprovados, sem painel/card.
- Manter toda a lógica dos filtros e alterar apenas as classes locais para controles leves, sem pills nem fundo envolvente, usando divisória/estado ativo com cores existentes.
- Renderizar os eventos localmente como linhas horizontais com data, conteúdo, status e CTAs atuais, sem modificar dados ou o componente compartilhado `AgendaCard`.
- Refazer o estado vazio local sem card, com os três textos aprovados e CTAs para Projetos e Ecossistema.

## Validação
- Conferir o diff para assegurar que nenhum arquivo global, fonte, token, componente compartilhado ou rota foi alterado.
- Validar build e ausência de erros no console.
- Verificar visualmente Home, Quem Somos, Ecossistema e Agenda em desktop e mobile, incluindo filtros, estados vazios, divisórias, espaçamentos e ausência de rolagem horizontal.
