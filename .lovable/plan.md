# Refinamento de Agenda, Ecossistema e Projetos

## Escopo
- Alterar somente `/agenda`, `/ecossistema`, as páginas individuais de `/projetos/$slug` e os componentes/dados estritamente necessários para essas experiências.
- Preservar navbar, footer, tipografia global, paleta, heros já aprovados, CTAs existentes fora das páginas de projeto e todas as outras páginas.

## Implementação

### 1. Agenda semanal
- Reestruturar o calendário para uma grade estável de sete colunas no desktop, com cabeçalho alinhado, navegação discreta e células com largura controlada.
- Tornar cada evento compacto e seguro para títulos longos, usando limites de linhas, `min-width: 0`, truncamento e hierarquia clara de categoria, título, horário e local.
- No mobile, apresentar os dias em fluxo vertical legível, sem apertar sete colunas nem causar sobreposição.
- Manter filtros, períodos e dados atuais funcionando.

### 2. Ficha compacta do evento
- Criar uma interação exclusiva para a Agenda: popover ancorado ao evento no desktop e ficha compacta na parte inferior no mobile.
- Mostrar somente categoria, título, data, horário, local, status, gratuidade/valor e descrição curta.
- Manter apenas “Compartilhar esta atividade” com cinco ações e “Fale com a Associação”.
- Remover dessa experiência qualquer acesso à página completa, blocos extensos e ações secundárias.
- Preservar o painel já usado na página inicial, evitando alterações fora do escopo.

### 3. Ecossistema
- Reduzir largura, altura, espaçamento interno e tipografia dos seis cards de conceitos transversais, mantendo linhas/conectores leves entre eles.
- Refazer “Uma atuação integrada” como fechamento editorial centralizado, com eyebrow, título, dois parágrafos aprovados, frase de destaque e formas discretas.
- Encerrar visualmente a seção antes do CTA final com espaçamento e mudança de superfície claros, sem aparência de card ou CTA.

### 4. Páginas individuais de projetos
- Evoluir a rota dinâmica existente para que os nove projetos tenham a mesma estrutura completa: hero atual, apresentação editorial, galeria, cards de conteúdo e CTA final compacto.
- Reutilizar somente textos e imagens já existentes no projeto e criar rótulos estruturais neutros, sem inventar resultados, números, parceiros ou informações institucionais.
- Montar galerias responsivas com imagens tematicamente coerentes já disponíveis, proporções estáveis, cantos discretos e carregamento otimizado.
- Criar cards compactos a partir do conteúdo aprovado de cada projeto, variando apenas acentos e pequenos grafismos.
- Reutilizar a família visual dos CTAs finais aprovados, com os links próprios de cada projeto e bom respiro antes do footer.

## Validação
- Conferir Agenda em desktop e mobile: grade sem sobreposição, títulos contidos, abertura/fechamento da ficha, compartilhamento e ausência de “Ver página completa”.
- Conferir Ecossistema em desktop e mobile: conceitos menores, conexões preservadas e fechamento separado do CTA.
- Abrir as nove rotas de projeto e verificar hero, apresentação, galeria, cards, CTA e responsividade.
- Confirmar ausência de overflow, erros de console, rotas quebradas e erros de build.
