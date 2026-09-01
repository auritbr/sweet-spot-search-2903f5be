# Ajustes em Projetos e Ecossistema

## Escopo
- Alterar somente a listagem e os detalhes de `/projetos` e a seção “Os eixos se conectam na prática” de `/ecossistema`.
- Preservar fontes, estilos globais, navegação, header, footer e todas as demais seções.

## Implementação
1. **Projetos**
   - Manter os 9 projetos oficiais já centralizados nos dados, conferindo títulos, eixos, resumos, textos, slugs e CTAs fornecidos.
   - Reconstruir a listagem em 3 composições editoriais por página: texto e imagem circular, alternância visual equilibrada, grafismos existentes e sem aparência de card genérico.
   - Manter paginação funcional com anterior, números e próximo; aplicar liquid glass leve somente ao controle.
   - Incluir o CTA final solicitado.
2. **Detalhes dos projetos**
   - Ajustar a rota dinâmica para a composição editorial aprovada: eixo e conteúdo à esquerda, imagem circular e grafismos existentes à direita, com somente os CTAs informados.
   - Remover qualquer bloco adicional que não faça parte da estrutura pedida.
3. **Conexões do Ecossistema**
   - Substituir integralmente apenas a seção atual por seis módulos numerados, claros e compactos, conectados em fluxo horizontal no desktop e vertical no mobile.
   - Usar exclusivamente vermelho, amarelo, petróleo, ciano e off-white já existentes, com borda/sombra discretas e setas finas.

## Validação
- Confirmar 3 projetos por página e 3 páginas.
- Verificar as 9 rotas dinâmicas, a paginação e a responsividade das conexões em desktop e mobile.
- Conferir build e erros de runtime sem tocar em estilos ou componentes globais.
