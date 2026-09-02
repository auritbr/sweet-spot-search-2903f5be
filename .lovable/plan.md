# Padronização dos CTAs finais

## Objetivo
Substituir exclusivamente os CTAs finais de Quem Somos, Agenda, Projetos e Ecossistema por composições compactas da mesma família visual já aprovada em Transparência e Equipe.

## Implementação
- Criar um componente local reutilizável para os quatro novos CTAs, reproduzindo escala, altura, hierarquia, espaçamento e botões coloridos com liquid glass leve dos modelos aprovados.
- Permitir pequenas variações de alinhamento, combinação cromática e formas geométricas para diferenciar cada página sem criar uma nova linguagem visual.
- Inserir exatamente os títulos, textos, rótulos e destinos informados em `/quem-somos`, `/agenda`, `/projetos` e `/ecossistema`.
- Remover nessas quatro páginas apenas o uso do CTA fotográfico anterior; Transparência e Equipe permanecerão intocadas.

## Responsividade e validação
- Manter altura aproximada de 300–360px no desktop, botões empilháveis no mobile e formas reduzidas/ocultas quando necessário.
- Confirmar build, links, ausência de overflow e aparência das quatro páginas em desktop e mobile.
