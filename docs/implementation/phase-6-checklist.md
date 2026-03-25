# Phase 6 — Marcação e workflow operacional

## Objetivo da fase

Reduzir fricção no processo comercial e transformar o website/admin numa ferramenta mais útil para o acompanhamento de oportunidades.

No fim desta fase, o projecto deve:
- facilitar marcação de reunião ou pedido de conversa
- ligar melhor leads a ações comerciais seguintes
- dar mais contexto operacional ao consultor
- melhorar o acompanhamento do pipeline sem virar um CRM complexo
- manter simplicidade de uso e de manutenção

---

## Definição de pronto da fase

Uma task desta fase só deve ser considerada concluída quando:
- melhora realmente o workflow do consultor
- não adiciona complexidade desproporcional
- a UX continua simples para visitante e admin
- a implementação respeita a arquitetura existente
- os dados novos ficam úteis para operação futura

A fase fica concluída quando:
- [ ] existe CTA claro para marcação de reunião ou conversa
- [ ] existe forma funcional de iniciar pedido de reunião
- [ ] leads podem ser associados ao processo comercial seguinte
- [ ] existe maior visibilidade sobre estado e histórico operacional
- [ ] a área admin suporta melhor acompanhamento de oportunidades

---

## 1. Revisão do workflow comercial

### Objetivo
Perceber exatamente como o consultor quer transformar um lead em contacto comercial real.

### Checklist
- [ ] mapear fluxo atual entre lead recebido e conversa marcada
- [ ] identificar pontos de fricção mais relevantes
- [ ] decidir se a marcação será direta ou via pedido de reunião
- [ ] decidir o que deve acontecer no website público e o que deve acontecer no admin
- [ ] validar que esta fase continua focada em simplicidade operacional

### Regra
Melhorar workflow real, não criar um pipeline “bonito” sem uso prático.

---

## 2. Estratégia de marcação

### Objetivo
Definir o modelo concreto de marcação a adotar nesta fase.

### Checklist
- [ ] decidir se a marcação será via integração com calendário externo
- [ ] decidir se a alternativa será formulário de pedido de reunião
- [ ] decidir se ambas as opções coexistem
- [ ] registar decisão em `docs/technical-decisions.md` se ainda não estiver fechada

### Regra
A solução mais simples que reduza fricção e mantenha controlo operacional costuma ser a melhor.

---

## 3. CTA de marcação no website público

### Objetivo
Criar um caminho claro para o visitante avançar para uma conversa comercial.

### Checklist
- [ ] decidir onde o CTA de marcação aparece
- [ ] adicionar CTA nas páginas relevantes
- [ ] validar copy do CTA
- [ ] garantir consistência com o posicionamento do website
- [ ] validar legibilidade e destaque em mobile

### Exemplos possíveis
- marcar conversa
- pedir reunião
- agendar call
- falar sobre o projecto

---

## 4. Fluxo público de pedido de reunião

### Objetivo
Criar uma experiência simples para iniciar pedido de reunião quando não houver marcação direta.

### Checklist
- [ ] decidir campos mínimos do pedido
- [ ] criar formulário ou fluxo correspondente
- [ ] manter fricção baixa
- [ ] preparar validação e feedback do utilizador
- [ ] garantir alinhamento com o resto da experiência pública

### Regra
Pedir apenas a informação necessária para avançar a conversa.

---

## 5. Integração com calendário externo ou solução equivalente

### Objetivo
Permitir ligação a uma forma concreta de marcação ou gestão de disponibilidade.

### Checklist
- [ ] decidir ferramenta concreta de calendário, se aplicável
- [ ] implementar integração mínima ou ligação funcional
- [ ] garantir que a experiência não quebra o fluxo principal
- [ ] validar que a solução é consistente com o branding e UX do site
- [ ] preparar fallback caso a integração falhe

### Regra
Só integrar o necessário nesta fase.

Não construir sistema de calendaring próprio sem necessidade real.

---

## 6. Associação entre lead e reunião/oportunidade

### Objetivo
Ligar melhor o lead captado à próxima ação comercial.

### Checklist
- [ ] decidir como representar a associação entre lead e pedido de reunião
- [ ] guardar ligação entre lead e ação comercial seguinte quando aplicável
- [ ] garantir que a informação fica visível no admin
- [ ] manter estrutura de dados simples e útil

---

## 7. Estado do processo comercial

### Objetivo
Dar mais visibilidade ao progresso de cada oportunidade.

### Checklist
- [ ] rever estados existentes do lead
- [ ] decidir se é preciso acrescentar novos estados
- [ ] refletir transição entre lead recebido e reunião pedida/marcada
- [ ] garantir consistência entre frontend, persistência e admin

### Regra
A evolução do estado deve continuar simples de entender.

---

## 8. Timeline simples de interações

### Objetivo
Dar contexto operacional sobre o histórico essencial de cada lead.

### Checklist
- [ ] decidir se a timeline entra já nesta fase
- [ ] definir que eventos fazem sentido mostrar
- [ ] incluir eventos mínimos úteis
- [ ] manter a apresentação simples e escaneável

### Exemplos possíveis
- lead criado
- lead contactado
- reunião pedida
- reunião marcada
- nota adicionada
- estado alterado

---

## 9. Origem do lead

### Objetivo
Melhorar contexto sobre de onde veio cada oportunidade.

### Checklist
- [ ] rever estrutura atual de origem do lead
- [ ] decidir se precisa de maior detalhe
- [ ] garantir consistência entre website, persistência e admin
- [ ] preparar uso futuro da informação para operação e conversão

---

## 10. Campos adicionais para qualificação

### Objetivo
Recolher apenas os dados adicionais que realmente ajudam a qualificar uma oportunidade.

### Checklist
- [ ] decidir se fazem falta campos adicionais
- [ ] escolher apenas campos com valor operacional claro
- [ ] evitar aumentar demasiado fricção no formulário público
- [ ] garantir que a informação é utilizável no admin

### Regra
Cada campo adicional deve justificar o custo em UX.

---

## 11. UX do fluxo de marcação/pedido

### Objetivo
Garantir que o visitante percebe facilmente o próximo passo.

### Checklist
- [ ] definir mensagens de sucesso
- [ ] definir mensagens de erro
- [ ] garantir loading states claros
- [ ] garantir transição fluida entre CTA e ação seguinte
- [ ] manter linguagem simples e profissional

---

## 12. Atualizações na área admin

### Objetivo
Refletir o novo workflow comercial dentro da área privada.

### Checklist
- [ ] mostrar pedido de reunião ou estado equivalente no detalhe de lead
- [ ] mostrar novos estados ou eventos no admin
- [ ] adaptar dashboard se fizer sentido
- [ ] garantir que o admin continua simples de usar

---

## 13. Observabilidade do workflow comercial

### Objetivo
Preparar base para perceber melhor conversão e fricção no processo.

### Checklist
- [ ] registar clique em CTA de marcação quando fizer sentido
- [ ] registar submissão de pedido de reunião quando aplicável
- [ ] registar falhas relevantes no fluxo
- [ ] preparar visibilidade mínima sobre passagem de lead para reunião/oportunidade

---

## 14. Segurança do novo fluxo

### Objetivo
Garantir que a nova camada operacional não abre superfícies de risco desnecessárias.

### Checklist
- [ ] validar input no servidor onde existir submissão
- [ ] proteger integrações com ferramentas externas
- [ ] evitar exposição de dados sensíveis em logs ou respostas
- [ ] garantir uso correto de env vars e credenciais

---

## 15. Responsividade e mobile-first

### Objetivo
Garantir que o fluxo de marcação também funciona bem em mobile.

### Checklist
- [ ] validar CTA em mobile
- [ ] validar formulário ou integração em mobile
- [ ] validar feedback e mensagens em viewport reduzido
- [ ] garantir touch targets adequados

---

## 16. Acessibilidade do fluxo

### Objetivo
Garantir que a nova experiência continua acessível.

### Checklist
- [ ] labels corretas
- [ ] foco visível
- [ ] mensagens perceptíveis
- [ ] navegação por teclado funcional
- [ ] botões e links semanticamente corretos

---

## 17. Preparação para internacionalização

### Objetivo
Garantir que o novo fluxo continua compatível com expansão futura para múltiplos idiomas.

### Checklist
- [ ] evitar hardcoded text difícil de externalizar
- [ ] preparar labels, CTAs e mensagens para futura localização
- [ ] manter campos e estados compatíveis com evolução por locale quando fizer sentido

---

## 18. Verificação final da fase

### Checklist final
- [ ] CTA de marcação implementado
- [ ] fluxo funcional de pedido ou marcação implementado
- [ ] lead pode ser associado à ação comercial seguinte
- [ ] estado operacional reflete melhor o pipeline
- [ ] admin mostra informação útil do novo workflow
- [ ] observabilidade mínima está preparada
- [ ] segurança revista
- [ ] UX, acessibilidade e responsividade revistas
- [ ] arquitetura respeitada

---

## Ordem recomendada de execução

### Bloco 1 — Workflow design
- [ ] rever workflow comercial
- [ ] definir estratégia de marcação
- [ ] decidir associação entre lead e reunião/oportunidade
- [ ] rever estados do processo

### Bloco 2 — Public flow
- [ ] CTA de marcação
- [ ] fluxo público de pedido de reunião
- [ ] integração com calendário externo ou equivalente
- [ ] UX do fluxo

### Bloco 3 — Admin and operations
- [ ] associação no admin
- [ ] timeline simples de interações
- [ ] origem do lead
- [ ] campos de qualificação
- [ ] atualizações no dashboard/admin

### Bloco 4 — Quality pass
- [ ] observabilidade
- [ ] segurança
- [ ] mobile-first
- [ ] acessibilidade
- [ ] i18n readiness
- [ ] verificação final

---

## Fora de âmbito desta fase

Não fazer ainda:
- [ ] CRM completo
- [ ] automações avançadas de pipeline
- [ ] scoring complexo de oportunidades
- [ ] calendaring próprio
- [ ] reporting comercial profundo
- [ ] workflows de vendas altamente personalizados

---

## Dúvidas a resolver durante a implementação

Estas decisões podem ser registadas em `docs/technical-decisions.md`:

- [ ] marcação direta vs pedido de reunião
- [ ] ferramenta concreta de calendário
- [ ] eventos mínimos da timeline
- [ ] necessidade real de campos adicionais de qualificação
- [ ] novo modelo exato de estados do pipeline

---

## Critério de transição para a Fase 7

Só avançar para a Fase 7 quando:
- [ ] o website e o admin já ajudarem de forma real no processo comercial
- [ ] o fluxo entre lead e próxima ação estiver claro
- [ ] houver base suficiente para começar a otimizar qualidade, conversão e performance
