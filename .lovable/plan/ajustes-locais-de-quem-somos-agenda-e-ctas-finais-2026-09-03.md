# Ajustes locais de Quem Somos, Agenda e CTAs finais

## Escopo
- Alterar somente `Quem Somos`, o detalhe da Agenda e o espaçamento externo inferior dos seis CTAs finais citados.
- Preservar integralmente navbar, footer, heroes, tipografia e paleta globais, conteúdo das demais seções e o design interno dos CTAs.

## Implementação
1. **Transição entre CTA e footer**
   - Reduzir em cerca de 35% apenas o `padding-bottom` externo dos CTAs finais em Transparência, Equipe e no componente compartilhado por Quem Somos, Agenda, Projetos e Ecossistema.
   - Manter dimensões, conteúdo, botões e grafismos internos intactos.

2. **Cor do status no detalhe da Agenda**
   - Centralizar o mapeamento visual de categorias da Agenda em um dado reutilizável.
   - Fazer o texto “Inscrições abertas” e o traço do hero individual usarem o mesmo token de destaque do card de origem para cada categoria, sem duplicar cores fixas.

3. **Seções de Quem Somos**
   - **Associação Maggu:** trocar a imagem dominante por uma composição editorial centralizada, com fotografia menor integrada, amplo respiro e formas nas bordas, preservando todos os textos.
   - **Ponto de Cultura:** criar faixa horizontal fotográfica compacta com overlay institucional, conteúdo claro, identificação “Ponto de Cultura”, destaque controlado de “2025” e grafismos discretos.
   - **O que nos orienta:** criar três cards editoriais compactos para Missão, Visão e Valores. A Missão preserva seu texto atual; conforme definido, o conteúdo atual de Filosofia será repartido entre Visão e Valores sem novas afirmações.
   - **Nossa forma de atuar:** substituir os cinco blocos pesados por cards glass leves, uniformes e responsivos, usando cor apenas em números, bordas e pequenos grafismos; preservar conceitos e textos.
   - **Organização institucional:** manter introdução e links, criar dois cards editoriais moderados com áreas de fotografia preparadas como placeholders explícitos, fundos institucionais, nomes/cargos integrados e composição responsiva.

## Validação
- Verificar desktop, tablet e mobile em Quem Somos e em eventos de categorias diferentes na Agenda.
- Confirmar ausência de overflow/sobreposição, hierarquia e legibilidade das novas seções, cor dinâmica do status/traço e redução do espaço em todos os seis CTAs.
- Conferir build e console sem erros e garantir que arquivos fora do escopo não foram alterados.
