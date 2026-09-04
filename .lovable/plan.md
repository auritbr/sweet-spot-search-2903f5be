# Contato e fechamento global com CTA integrado

## Escopo
- Alterar somente a seção “Canais de contato”, o componente compartilhado de CTA final e sua aplicação na Home.
- Preservar navbar, heros, estrutura interna do footer, tipografia, paleta, textos aprovados e demais seções.

## Implementação
1. **Canais de contato**
   - Manter exatamente três cards horizontais e empilhados: E-mail, Telefone / WhatsApp e Redes sociais.
   - Remover a repetição de endereço e manter ações claras no lado direito.
   - Reproduzir nos quatro ícones sociais (Facebook, Instagram, YouTube e WhatsApp) o mesmo acabamento aprovado no compartilhamento da notícia individual.
2. **CTA final compartilhado**
   - Evoluir `CompactFinalCTA` de card isolado para seção gráfica de fechamento, ampla e horizontal, com base azul-petróleo e conexão imediata com o footer.
   - Criar hierarquia real de formas: elementos grandes integrados às bordas, forma média e detalhes menores, sem cobrir conteúdo.
   - Manter título, texto e dois botões centralizados, compactos e responsivos, com botões coloridos e liquid glass leve.
   - Diferenciar visualmente as variantes Quem Somos, Agenda, Projetos, Ecossistema, Transparência e Equipe dentro do mesmo componente base.
3. **Aplicação global**
   - Substituir o CTA fotográfico da Home pelo mesmo componente compartilhado, preservando seus textos e destinos.
   - Fazer o CTA terminar praticamente junto ao footer sem alterar a estrutura interna do footer; compensar apenas o espaçamento externo dele quando imediatamente precedido pelo CTA.
4. **Validação**
   - Conferir Contato e todas as páginas com CTA em desktop e mobile, verificando três cards, links, variações gráficas, ausência de sobreposição/overflow e conexão visual com o footer.
