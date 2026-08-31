# Ajustes finais da Home e do header

## Escopo
- Alterar apenas `src/components/Header.tsx` e `src/routes/index.tsx`.
- Preservar hero, carrossel, cortina, rotas, componentes globais e todas as páginas internas.

## Implementação
1. **Header**
   - Remover fundos de hover dos itens comuns no desktop e mobile.
   - Aplicar texto vermelho no hover/ativo e uma linha inferior discreta animada no desktop.
   - Manter “Apoie” como único item com fundo sólido e preservar os submenus.
   - Garantir indicação ativa além do hover, incluindo `aria-current="page"` quando aplicável.

2. **Home**
   - Manter o hero sem mudanças de estrutura ou lógica.
   - Reordenar a página para: Associação, Ecossistema, Projetos, Ponto de Cultura, Agenda, Memória, Transparência e CTA final.
   - Aplicar os textos fornecidos, reduzir a síntese do Ecossistema aos seis eixos e manter apenas os três projetos especificados.
   - Inserir uma faixa compacta de reconhecimento “Ponto de Cultura”, sem criar selo quando não houver arquivo oficial disponível.
   - Preservar a Agenda dinâmica, com até três registros; mostrar o link secundário de Projetos apenas no estado vazio.
   - Remover da Home títulos fictícios de álbuns e manter apenas uma composição fotográfica sem legendas.
   - Atualizar Transparência e CTA final conforme o conteúdo aprovado, sem criar indicadores ou novas seções.

3. **Validação**
   - Confirmar build, ordem das seções, ausência dos textos removidos, estados da Agenda e navegação.
   - Verificar visualmente desktop e mobile, foco/estado ativo do header e ausência de rolagem horizontal.
