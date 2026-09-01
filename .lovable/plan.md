# Redesign exclusivo da página Agenda

## Escopo
- Alterar somente `src/routes/agenda/index.tsx`.
- Não modificar fontes, estilos globais, tokens, header, footer, componentes compartilhados ou outras rotas.
- Preservar a fonte de dados atual da Agenda e a rota de detalhes dos eventos.

## Implementação
1. **Hero interno aprovado**
   - Recriar o hero no padrão visual de Equipe e Transparência: fundo claro, conteúdo centralizado, eyebrow “PROGRAMAÇÃO”, título “Agenda”, texto solicitado, pincel e grafismos geométricos já existentes.
   - Remover completamente a ilustração de calendário do hero.
   - Incluir link “Ver programação” com rolagem até a agenda.

2. **Introdução e filtros**
   - Substituir todo o conteúdo atual abaixo do hero por uma introdução curta e centralizada.
   - Criar barra centralizada com filtros de categoria e período.
   - Aplicar glass sutil com transparência, `backdrop-blur` e bordas leves, usando apenas tokens e cores existentes.
   - Manter “Semana” como visualização inicial; suportar Semana, Mês e Próximos eventos.

3. **Calendário público**
   - Criar uma grade semanal de domingo a sábado, com cabeçalho de mês/ano, navegação anterior/próxima e ação “Hoje”.
   - Posicionar os eventos reais de `agendaEvents` no dia correspondente, exibindo título, categoria, horário, local, resumo curto e status quando disponível.
   - Diferenciar categorias pelas cores Maggu já existentes e manter os eventos acessíveis por link para seus detalhes.
   - Em “Mês” e “Próximos eventos”, navegar por períodos coerentes sem transformar a página em painel administrativo.
   - Para semanas sem atividades, preservar a grade e mostrar um estado vazio discreto dentro do calendário.

4. **Responsividade e CTA**
   - No desktop, usar sete colunas estáveis e legíveis.
   - No mobile, manter a estrutura de calendário com dias navegáveis/empilhados de forma clara, sem compressão ilegível.
   - Encerrar com um único CTA no padrão visual já aprovado, com links para Projetos, Ecossistema e Contato.

## Validação
- Verificar build e erros de runtime.
- Testar filtros, navegação temporal, botão “Hoje”, rolagem do hero e links de eventos.
- Conferir visual em desktop e mobile, incluindo ausência de overflow horizontal e boa legibilidade do glass.
