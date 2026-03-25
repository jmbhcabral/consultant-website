

# Phase 5 — Área admin mínima e útil

## Objetivo da fase

Construir uma área admin simples, funcional e centrada no que traz valor real ao consultor no dia a dia.

No fim desta fase, o projecto deve:
- permitir consultar leads e mensagens recebidas
- permitir atualizar o estado operacional de um lead
- dar visibilidade mínima sobre atividade relevante
- permitir gerir conteúdo essencial sem transformar o sistema num backoffice pesado
- manter a experiência admin clara, segura e fácil de manter

---

## Definição de pronto da fase

Uma task desta fase só deve ser considerada concluída quando:
- resolve uma necessidade operacional real
- a UI admin é clara e suficientemente rápida de usar
- o fluxo respeita autenticação e autorização definidas na fase anterior
- a implementação não transforma a área admin num sistema genérico excessivo
- os dados apresentados estão corretos e utilizáveis

A fase fica concluída quando:
- [ ] existe dashboard admin funcional
- [ ] existe listagem de leads
- [ ] existe detalhe de lead
- [ ] o estado de um lead pode ser atualizado
- [ ] existem filtros e pesquisa mínimos úteis
- [ ] existe base para gestão simples de conteúdo essencial
- [ ] a área admin está protegida e operacional

---

## 1. Revisão do objetivo da área admin

### Objetivo
Garantir que a área privada resolve problemas operacionais reais e não vira um sistema inflacionado.

### Checklist
- [ ] rever quais são as tarefas principais do consultor no admin
- [ ] distinguir funcionalidades essenciais de funcionalidades “nice to have”
- [ ] confirmar que o foco desta fase é operação simples e não backoffice completo
- [ ] validar alinhamento com o roadmap do projecto

### Regra
O admin deve servir o fluxo do consultor.

Não deve ser construído como produto separado nem como CMS genérico demasiado cedo.

---

## 2. Estrutura da feature `admin`

### Objetivo
Criar a base da feature responsável pela experiência da área privada.

### Checklist
- [ ] criar `src/features/admin`
- [ ] criar estrutura mínima com `components/`, `hooks/`, `services/`, `types/` conforme necessário
- [ ] manter a feature `admin` focada em experiência e composição interna
- [ ] evitar mover lógica de domínio de leads para dentro de `admin` sem necessidade

### Regra
A feature `admin` deve orquestrar a experiência privada.

A lógica de domínio de leads pode continuar a viver numa feature própria se isso mantiver melhor separação.

---

## 3. Estrutura de domínio para leads

### Objetivo
Preparar a base para consultar e operar leads de forma limpa.

### Checklist
- [ ] criar ou rever `src/features/leads`
- [ ] separar claramente UI, tipos, serviços e utilitários
- [ ] preparar leitura de leads
- [ ] preparar atualização de estado
- [ ] expor API pública mínima da feature

### Regra
Se leads já são um domínio relevante, devem ter fronteira própria.

---

## 4. Rota e layout da área admin

### Objetivo
Criar a estrutura base das rotas privadas de administração.

### Checklist
- [ ] criar rota base do admin
- [ ] garantir proteção da rota
- [ ] criar layout privado simples
- [ ] preparar estrutura para páginas internas do admin
- [ ] manter navegação interna clara

---

## 5. Dashboard admin simples

### Objetivo
Criar uma página inicial do admin que ajude o consultor a perceber o estado geral.

### Checklist
- [ ] definir quais métricas ou resumos fazem sentido
- [ ] mostrar informação útil e não decorativa
- [ ] incluir acesso rápido a leads e mensagens
- [ ] manter a página simples e legível
- [ ] evitar dashboard cheio de widgets irrelevantes

### Exemplos possíveis
- número de leads recentes
- leads por estado
- últimos contactos recebidos
- atalhos para ações comuns

---

## 6. Listagem de leads

### Objetivo
Permitir ao consultor consultar os leads existentes de forma rápida.

### Checklist
- [ ] criar página ou secção de listagem de leads
- [ ] mostrar colunas/campos realmente úteis
- [ ] incluir nome, email, origem, estado e data quando fizer sentido
- [ ] garantir boa escaneabilidade da lista
- [ ] validar empty state e loading state

### Regra
A lista deve ser funcional e rápida de ler.

Não precisa de parecer um CRM completo.

---

## 7. Detalhe de lead

### Objetivo
Dar visibilidade contextual sobre cada lead individual.

### Checklist
- [ ] criar página ou painel de detalhe
- [ ] mostrar informação principal do lead
- [ ] mostrar mensagem recebida
- [ ] mostrar origem do lead
- [ ] mostrar estado atual
- [ ] preparar espaço para notas internas

---

## 8. Estado do lead

### Objetivo
Permitir que o consultor acompanhe a progressão operacional de cada contacto.

### Checklist
- [ ] definir estados iniciais do lead
- [ ] decidir nomenclatura simples e clara
- [ ] implementar atualização de estado
- [ ] garantir consistência entre frontend e persistência
- [ ] refletir mudanças na UI sem ambiguidade

### Estados possíveis
- novo
- contactado
- qualificado
- fechado
- arquivado

---

## 9. Pesquisa de leads

### Objetivo
Permitir encontrar rapidamente leads relevantes.

### Checklist
- [ ] definir se pesquisa entra já nesta fase
- [ ] escolher campos mínimos pesquisáveis
- [ ] implementar pesquisa simples e útil
- [ ] garantir comportamento previsível da UI

### Regra
A pesquisa deve resolver casos reais do consultor.

Começar simples é suficiente.

---

## 10. Filtros mínimos

### Objetivo
Melhorar triagem de leads sem criar complexidade excessiva.

### Checklist
- [ ] decidir filtros mínimos necessários
- [ ] considerar filtro por estado
- [ ] considerar filtro por origem
- [ ] considerar filtro por data, se fizer sentido
- [ ] manter UI de filtros simples

---

## 11. Notas internas por lead

### Objetivo
Permitir registar contexto operacional sem sair do sistema.

### Checklist
- [ ] decidir se notas entram já nesta fase
- [ ] preparar campo ou estrutura de notas
- [ ] permitir adicionar nota simples
- [ ] garantir que as notas ficam associadas ao lead certo
- [ ] manter a experiência leve e útil

### Regra
Se entrar nesta fase, começar com notas simples e não com histórico complexo.

---

## 12. Listagem de mensagens recebidas

### Objetivo
Dar visibilidade adicional sobre contactos recebidos, quando fizer sentido distingui-los de leads.

### Checklist
- [ ] decidir se mensagens vivem separadas de leads ou se são a mesma visão nesta fase
- [ ] criar vista simples se fizer sentido
- [ ] garantir consistência com o fluxo de contacto implementado
- [ ] evitar duplicação de informação sem benefício real

---

## 13. Gestão básica de conteúdo do website

### Objetivo
Permitir edição simples de conteúdo essencial sem entrar num CMS pesado.

### Checklist
- [ ] decidir que conteúdo justifica gestão via admin nesta fase
- [ ] limitar a gestão a blocos de alto valor
- [ ] evitar tentar gerir todo o website via admin demasiado cedo
- [ ] manter a solução simples e segura

### Regra
Gerir apenas conteúdo com retorno operacional claro.

---

## 14. Edição simples de serviços

### Objetivo
Permitir atualizar a apresentação dos serviços sem editar código, se isso já fizer sentido.

### Checklist
- [ ] decidir se os serviços entram já como conteúdo gerível
- [ ] preparar estrutura mínima de edição
- [ ] permitir atualizar informação essencial
- [ ] garantir consistência com o website público

---

## 15. Edição simples de FAQ

### Objetivo
Permitir manter perguntas frequentes atualizadas com baixo esforço.

### Checklist
- [ ] decidir se FAQ entra como conteúdo gerível nesta fase
- [ ] preparar estrutura mínima
- [ ] permitir editar perguntas e respostas
- [ ] garantir consistência com a secção pública

---

## 16. Edição simples de testemunhos ou casos de estudo

### Objetivo
Permitir atualizar sinais de confiança sem depender sempre de deploy de código, se isso já trouxer valor.

### Checklist
- [ ] decidir se testemunhos entram já nesta fase
- [ ] decidir se casos de estudo entram já nesta fase
- [ ] escolher apenas um escopo mínimo e útil
- [ ] garantir que a solução não vira gestão editorial pesada

---

## 17. Observabilidade mínima do admin

### Objetivo
Ter visibilidade básica sobre uso e funcionamento da área privada.

### Checklist
- [ ] preparar eventos ou logs mínimos para ações importantes
- [ ] considerar atualização de estado de lead como evento relevante
- [ ] considerar falhas importantes no admin como observáveis
- [ ] manter observabilidade discreta e proporcional

---

## 18. Segurança e controlo de acesso no admin

### Objetivo
Garantir que a área privada continua protegida à medida que ganha funcionalidades.

### Checklist
- [ ] validar que todas as rotas admin estão protegidas
- [ ] validar que ações sensíveis exigem sessão válida
- [ ] garantir que checks de autorização continuam consistentes
- [ ] evitar expor dados internos a utilizadores não autorizados
- [ ] rever superfícies de risco óbvias

---

## 19. UX da área admin

### Objetivo
Garantir que a experiência interna é clara, eficiente e sem ruído.

### Checklist
- [ ] validar navegação interna
- [ ] validar loading states
- [ ] validar empty states
- [ ] validar feedback de ações como atualização de estado
- [ ] manter interface limpa e orientada a tarefa

---

## 20. Acessibilidade e responsividade mínimas

### Objetivo
Garantir que a área admin continua utilizável e consistente em diferentes contextos.

### Checklist
- [ ] garantir legibilidade em viewport reduzido
- [ ] garantir foco visível
- [ ] garantir botões, filtros e inputs semanticamente corretos
- [ ] manter estrutura clara em tabelas ou listas
- [ ] validar navegação por teclado nas ações principais

---

## 21. Preparação para internacionalização

### Objetivo
Garantir que o admin também continua compatível com evolução futura de i18n.

### Checklist
- [ ] evitar labels e mensagens críticas demasiado hardcoded
- [ ] preparar estados e feedback para futura localização
- [ ] manter conteúdo gerível compatível com expansão futura por idioma quando aplicável

### Regra
Não é necessário traduzir o admin já.

O foco é readiness arquitetural.

---

## 22. Verificação final da fase

### Checklist final
- [ ] dashboard admin criado
- [ ] listagem de leads criada
- [ ] detalhe de lead criado
- [ ] estado de lead atualizável
- [ ] pesquisa e/ou filtros mínimos resolvidos
- [ ] notas internas avaliadas ou implementadas
- [ ] gestão simples de conteúdo essencial avaliada ou implementada
- [ ] segurança do admin revista
- [ ] UX interna revista
- [ ] arquitetura respeitada

---

## Ordem recomendada de execução

### Bloco 1 — Admin foundations
- [ ] rever objetivo do admin
- [ ] criar feature `admin`
- [ ] criar/rever feature `leads`
- [ ] criar rota e layout privado

### Bloco 2 — Lead operations
- [ ] dashboard simples
- [ ] listagem de leads
- [ ] detalhe de lead
- [ ] atualização de estado
- [ ] pesquisa
- [ ] filtros
- [ ] notas internas

### Bloco 3 — Content operations
- [ ] decidir escopo de gestão de conteúdo
- [ ] edição de serviços
- [ ] edição de FAQ
- [ ] edição de testemunhos ou casos de estudo

### Bloco 4 — Quality pass
- [ ] observabilidade mínima
- [ ] segurança e controlo de acesso
- [ ] UX interna
- [ ] acessibilidade e responsividade
- [ ] i18n readiness
- [ ] verificação final

---

## Fora de âmbito desta fase

Não fazer ainda:
- [ ] CRM completo
- [ ] pipeline comercial avançado
- [ ] automações complexas de lead management
- [ ] CMS completo com workflow editorial
- [ ] analytics profundos dentro do admin
- [ ] multi-admin avançado
- [ ] permissões granulares por recurso

---

## Dúvidas a resolver durante a implementação

Estas decisões podem ser registadas em `docs/technical-decisions.md`:

- [ ] fronteira exata entre `admin` e `leads`
- [ ] necessidade real de notas internas nesta fase
- [ ] escopo mínimo de gestão de conteúdo
- [ ] necessidade real de pesquisa além de filtros
- [ ] estrutura concreta da homepage/dashboard do admin

---

## Critério de transição para a Fase 6

Só avançar para a Fase 6 quando:
- [ ] o consultor conseguir operar leads sem tocar em código
- [ ] a área admin já resolver o essencial do dia a dia
- [ ] existir base suficiente para melhorar workflow comercial e marcação