

# Phase 8 — Funcionalidades opcionais com necessidade validada

## Objetivo da fase

Adicionar funcionalidades opcionais apenas quando existir necessidade real, retorno claro e capacidade de manutenção suficiente.

No fim desta fase, o projecto deve:
- evoluir apenas nas áreas que tragam valor comprovado
- evitar crescimento artificial do produto
- manter consistência com o roadmap e a arquitetura
- introduzir novas capacidades sem comprometer simplicidade e foco
- preservar o website como ativo comercial útil, e não como sistema cheio de features sem uso

---

## Definição de pronto da fase

Uma task desta fase só deve ser considerada concluída quando:
- existe necessidade validada
- o valor esperado é claro
- a solução não introduz complexidade desproporcional
- existe capacidade real para manter a funcionalidade
- a nova feature não desvia o produto do seu objetivo principal

A fase fica concluída quando:
- [ ] apenas foram implementadas funcionalidades com necessidade real comprovada
- [ ] o produto continua coerente e simples de operar
- [ ] a arquitetura continua consistente
- [ ] não foi criado overkill funcional

---

## 1. Processo de decisão antes de implementar qualquer opcional

### Objetivo
Criar um filtro claro para decidir o que entra e o que fica de fora.

### Checklist
- [ ] confirmar qual problema real a funcionalidade resolve
- [ ] confirmar quem beneficia diretamente
- [ ] validar se há evidência de necessidade real
- [ ] comparar valor esperado vs custo de implementação e manutenção
- [ ] confirmar alinhamento com objetivo do produto
- [ ] registar decisão em `docs/technical-decisions.md` quando fizer sentido

### Regra
Nenhuma funcionalidade opcional deve entrar apenas porque “fica bem” ou “é comum ter”.

---

## 2. Newsletter

### Objetivo
Avaliar se uma newsletter acrescenta valor real ao funil de descoberta e relacionamento.

### Checklist
- [ ] confirmar se existe estratégia de conteúdo suficiente para justificar newsletter
- [ ] decidir objetivo da newsletter
- [ ] decidir frequência realista de envio
- [ ] avaliar integração necessária
- [ ] validar implicações de UX, consentimento e manutenção

### Regra
Só avançar se houver plano real de conteúdo e continuidade.

---

## 3. Multi-admin

### Objetivo
Permitir que mais do que um utilizador interno opere o sistema, se isso passar a ser necessário.

### Checklist
- [ ] validar necessidade real de múltiplos admins
- [ ] decidir se basta partilha simples ou se são necessárias roles distintas
- [ ] avaliar impacto em auth e autorização
- [ ] garantir que a complexidade adicional compensa

### Regra
Não introduzir multi-admin só por antecipação.

---

## 4. Gestão avançada de artigos

### Objetivo
Permitir operação editorial mais completa se o conteúdo passar a ser um canal relevante.

### Checklist
- [ ] validar necessidade de workflow editorial mais rico
- [ ] decidir quais capacidades fazem falta
- [ ] avaliar se o conteúdo atual já justifica esta evolução
- [ ] manter a solução proporcional ao volume editorial real

### Exemplos possíveis
- drafts
- estados de publicação
- agendamento
- edição mais rica

---

## 5. Dashboard com métricas mais profundas

### Objetivo
Dar mais visibilidade quantitativa ao consultor quando isso trouxer melhores decisões.

### Checklist
- [ ] identificar métricas que realmente mudam comportamento ou decisão
- [ ] validar se o dashboard atual já é insuficiente
- [ ] evitar métricas decorativas
- [ ] garantir que os dados são fiáveis e interpretáveis

---

## 6. Exportação de leads

### Objetivo
Permitir levar dados para ferramentas externas quando isso for necessário operacionalmente.

### Checklist
- [ ] validar necessidade real de exportar leads
- [ ] decidir formato mínimo útil
- [ ] avaliar implicações de segurança e privacidade
- [ ] garantir que a exportação não expõe dados indevidamente

---

## 7. Integrações com CRM

### Objetivo
Ligar o sistema a ferramentas externas de gestão comercial quando o workflow o justificar.

### Checklist
- [ ] confirmar que a operação atual já excede o que o admin interno resolve
- [ ] escolher CRM apenas com base em necessidade real
- [ ] avaliar integração mínima possível
- [ ] validar impacto em manutenção, segurança e dados

### Regra
Integração com CRM só deve entrar quando houver operação suficiente para justificar a dependência.

---

## 8. Automações de follow-up

### Objetivo
Automatizar partes do processo comercial apenas quando o fluxo estiver suficientemente estável.

### Checklist
- [ ] confirmar que o processo atual é repetitivo e maduro o suficiente para automação
- [ ] decidir quais follow-ups fazem sentido automatizar
- [ ] garantir que a automação não degrada a qualidade do contacto
- [ ] prever supervisão e controlo humano quando necessário

### Regra
Automatizar demasiado cedo costuma amplificar processos mal definidos.

---

## 9. Área privada para clientes

### Objetivo
Criar um espaço reservado para clientes apenas se isso responder a um caso de uso real.

### Checklist
- [ ] validar necessidade concreta de área cliente
- [ ] definir quais ações ou conteúdos seriam privados
- [ ] avaliar impacto em auth, autorização e UX
- [ ] garantir que a área cliente não cria um segundo produto sem foco

---

## 10. Formulários diferentes por serviço

### Objetivo
Adaptar o fluxo de contacto ao tipo de serviço, se isso melhorar qualificação e conversão.

### Checklist
- [ ] confirmar se serviços diferentes exigem realmente formulários distintos
- [ ] validar impacto em conversão e operação
- [ ] evitar fragmentação desnecessária da experiência
- [ ] garantir consistência com o modelo de lead

### Regra
Diferenciar apenas quando isso melhora mesmo a qualidade do lead ou da experiência.

---

## 11. Rollout completo de internacionalização

### Objetivo
Executar a internacionalização real do produto quando houver necessidade validada de servir múltiplos mercados ou audiências.

### Checklist
- [ ] confirmar necessidade real de múltiplos idiomas
- [ ] decidir ordem de idiomas a suportar
- [ ] traduzir conteúdo público prioritário
- [ ] adaptar metadata por idioma
- [ ] rever estratégia de URLs por locale
- [ ] avaliar necessidade de locale switcher
- [ ] rever impacto em SEO internacional
- [ ] garantir consistência entre conteúdo, UX e operação

### Regra
Só fazer rollout completo quando a necessidade de negócio estiver clara.

A readiness já foi preparada em fases anteriores.

---

## 12. Qualidade e arquitetura das features opcionais

### Objetivo
Garantir que qualquer opcional mantém coerência técnica com o resto do sistema.

### Checklist
- [ ] encaixar nova funcionalidade na arquitetura existente
- [ ] manter fronteiras de módulo claras
- [ ] evitar novas features globais mal encaixadas
- [ ] rever impacto em auth, dados, observabilidade e segurança
- [ ] evitar soluções especiais difíceis de manter

---

## 13. Segurança e privacidade das funcionalidades opcionais

### Objetivo
Garantir que novas capacidades não abrem risco desnecessário.

### Checklist
- [ ] rever impacto em dados pessoais
- [ ] rever impacto em permissões e acessos
- [ ] rever impacto em integrações externas
- [ ] garantir uso correto de env vars e secrets
- [ ] rever logging e exposição de dados

---

## 14. Observabilidade e métricas de adoção

### Objetivo
Perceber se a funcionalidade opcional está realmente a gerar valor após ser lançada.

### Checklist
- [ ] definir o que significa sucesso para a feature
- [ ] preparar métricas de adoção ou impacto
- [ ] acompanhar se a funcionalidade está a ser usada
- [ ] rever se a feature deve evoluir, manter-se ou ser simplificada

---

## 15. UX e simplificação contínua

### Objetivo
Garantir que a introdução de novas capacidades não degrada a experiência do produto.

### Checklist
- [ ] rever impacto da nova funcionalidade no website público
- [ ] rever impacto no admin
- [ ] garantir que não foram criados fluxos confusos
- [ ] remover complexidade desnecessária quando surgir

---

## 16. Verificação final da fase

### Checklist final
- [ ] cada funcionalidade opcional implementada tem necessidade validada
- [ ] o produto continua focado e coerente
- [ ] a arquitetura continua saudável
- [ ] segurança, observabilidade e UX foram revistas nas novas capacidades
- [ ] o projecto não entrou em overengineering

---

## Ordem recomendada de execução

### Bloco 1 — Validation
- [ ] filtrar funcionalidades opcionais por necessidade real
- [ ] escolher apenas as que têm retorno claro
- [ ] registar decisões relevantes

### Bloco 2 — Optional capabilities
- [ ] newsletter
- [ ] multi-admin
- [ ] gestão avançada de artigos
- [ ] dashboard mais profundo
- [ ] exportação de leads
- [ ] integrações CRM
- [ ] automações de follow-up
- [ ] área cliente
- [ ] formulários por serviço
- [ ] rollout completo de i18n

### Bloco 3 — Quality pass
- [ ] rever arquitetura
- [ ] rever segurança e privacidade
- [ ] rever observabilidade e adoção
- [ ] rever UX e simplificação
- [ ] verificação final

---

## Fora de âmbito desta fase

Não fazer:
- [ ] funcionalidades sem necessidade validada
- [ ] integrações só por moda ou hype
- [ ] aumento de complexidade sem ganho operacional claro
- [ ] novos sistemas paralelos que desviem o foco do produto

---

## Dúvidas a resolver durante a implementação

Estas decisões podem ser registadas em `docs/technical-decisions.md`:

- [ ] quais opcionais têm realmente evidência de necessidade
- [ ] qual o primeiro opcional com melhor retorno
- [ ] que opcionais devem continuar fora de scope
- [ ] se o rollout completo de i18n já é ou não prioritário
- [ ] quais integrações externas valem mesmo o custo

---

## Critério de continuação após a Fase 8

Só continuar a expandir o produto quando:
- [ ] houver problema real a resolver
- [ ] existir capacidade real de manutenção
- [ ] a nova feature reforçar o valor do produto em vez de o dispersar