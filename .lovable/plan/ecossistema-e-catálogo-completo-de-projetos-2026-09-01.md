# Ecossistema e catálogo completo de projetos

## Objetivo
Ajustar exclusivamente a conexão visual dos conceitos em `/ecossistema` e transformar `/projetos` em um catálogo de nove projetos, paginado em três itens por página, com detalhes fiéis ao conteúdo fornecido.

## Implementação

### 1. Ecossistema
- Manter título, texto e os seis conceitos da seção “Os eixos se conectam na prática”.
- Reduzir os blocos para pequenos cards translúcidos com blur, borda e sombra sutis.
- Preservar uma sequência claramente conectada por setas no desktop e reorganizá-la em linhas coerentes no mobile.
- Manter a legenda “CONCEITOS TRANSVERSAIS” centralizada e não alterar nenhuma outra seção da página.

### 2. Dados dos projetos
- Substituir os três projetos demonstrativos pelos nove projetos fornecidos, na ordem indicada.
- Guardar para cada projeto: slug, eixo, nome, H1, resumo, texto integral, CTAs e imagem temática já disponível no projeto.
- Não adicionar números, datas, resultados, parceiros, depoimentos, FAQs ou informações não fornecidas.

### 3. Listagem em `/projetos`
- Preservar o hero e a introdução existentes.
- Substituir as faixas atuais por uma grade responsiva: três colunas no desktop, duas no tablet e uma no celular.
- Mostrar eixo, nome, resumo e link “Conhecer projeto” em cada card.
- Implementar paginação real no cliente com três itens por página, controles Anterior/Próximo e páginas 1–3, incluindo retorno ao início da listagem ao trocar de página.
- Aplicar liquid glass sutil somente aos controles de paginação.

### 4. Detalhes em `/projetos/$slug`
- Reutilizar a rota dinâmica existente para os nove slugs.
- Simplificar o conteúdo para hero com eixo e H1, texto integral e CTAs correspondentes.
- Direcionar CTAs relacionados à programação para `/agenda`; os demais para `/contato`, sem criar rotas extras não solicitadas.
- Atualizar metadados por projeto e manter uma apresentação consistente com a identidade atual.

### 5. Validação
- Confirmar build sem erros e testar as três páginas da paginação.
- Abrir projetos de páginas diferentes e confirmar conteúdo e navegação.
- Verificar `/ecossistema` e `/projetos` em desktop e mobile, sem rolagem horizontal ou alterações globais.
