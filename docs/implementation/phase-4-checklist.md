# Phase 4 — Autenticação e acesso privado

## Objetivo da fase

Preparar o projecto para acesso reservado, permitindo proteger a futura área admin sem introduzir complexidade de identidade desnecessária demasiado cedo.

No fim desta fase, o projecto deve:
- suportar autenticação funcional
- proteger rotas privadas
- ter uma base clara para sessão e controlo de acesso
- manter separação entre autenticação, autorização e domínio
- ficar pronto para suportar a área admin da fase seguinte

---

## Definição de pronto da fase

Uma task desta fase só deve ser considerada concluída quando:
- o fluxo de autenticação funciona de ponta a ponta
- as rotas privadas estão protegidas de forma consistente
- a solução respeita segurança básica
- a implementação não espalha lógica de auth por toda a app
- a UX de login e erro é clara e previsível

A fase fica concluída quando:
- [ ] existe página de login funcional
- [ ] existe login real
- [ ] existe logout funcional
- [ ] existe sessão persistente
- [ ] rotas privadas estão protegidas
- [ ] a base de roles/permissões mínimas está definida
- [ ] o projecto está pronto para suportar a área admin

---

## 1. Revisão da estratégia de autenticação

### Objetivo
Fechar a abordagem concreta antes de implementar fluxos e dependências.

### Checklist
- [ ] decidir a solução concreta de autenticação
- [ ] confirmar se o acesso privado é apenas para admin nesta fase
- [ ] definir fronteira entre autenticação e autorização
- [ ] garantir alinhamento com a arquitetura definida
- [ ] registar decisão em `docs/technical-decisions.md`

### Regra
Nesta fase, a autenticação deve resolver um caso simples: acesso privado do consultor ou admin.

Evitar sistema complexo de utilizadores, convites ou permissões avançadas demasiado cedo.

---

## 2. Estrutura da feature `auth`

### Objetivo
Criar a feature responsável por toda a lógica de autenticação.

### Checklist
- [ ] criar `src/features/auth`
- [ ] criar estrutura mínima com `components/`, `hooks/`, `services/`, `schemas/`, `types/` conforme necessário
- [ ] manter a lógica de auth concentrada na feature
- [ ] expor API pública mínima via `index.ts` se fizer sentido

### Regra
Não espalhar lógica de login, sessão e controlo de acesso por páginas e componentes não relacionados.

---

## 3. Modelo de utilizador e sessão

### Objetivo
Definir o mínimo necessário para identificar o utilizador autenticado.

### Checklist
- [ ] definir shape mínima do utilizador autenticado
- [ ] definir shape mínima da sessão
- [ ] decidir campos mínimos necessários
- [ ] preparar base para role `admin`
- [ ] evitar modelação excessiva de utilizadores nesta fase

### Regra
Modelar apenas o necessário para autenticação e acesso privado.

---

## 4. Página de login

### Objetivo
Criar uma página de entrada simples, profissional e clara.

### Checklist
- [ ] criar rota de login
- [ ] criar estrutura da página
- [ ] adicionar contexto mínimo e claro
- [ ] criar formulário de login
- [ ] garantir legibilidade em mobile
- [ ] manter UI simples e sem distrações

---

## 5. Formulário de login

### Objetivo
Criar o fluxo base de autenticação do utilizador privado.

### Checklist
- [ ] definir campos mínimos do formulário
- [ ] criar UI do formulário
- [ ] validar labels e acessibilidade
- [ ] preparar estados de loading, success e error quando aplicável
- [ ] manter a experiência clara e curta

### Regra
Nesta fase, o foco é autenticar de forma segura e previsível.

Evitar adicionar funcionalidades de conta que ainda não são necessárias.

---

## 6. Validação de credenciais

### Objetivo
Garantir que o input de login é validado com consistência.

### Checklist
- [ ] criar schema de login
- [ ] validar input no cliente para UX
- [ ] validar input no servidor para segurança
- [ ] preparar respostas de erro consistentes
- [ ] garantir que mensagens não expõem detalhes desnecessários

---

## 7. Serviço de login

### Objetivo
Criar um ponto claro de entrada para o fluxo de autenticação.

### Checklist
- [ ] criar service de login dentro da feature `auth`
- [ ] separar UI da lógica de autenticação
- [ ] tratar sucesso
- [ ] tratar erro
- [ ] devolver contrato claro para consumo pela UI

---

## 8. Sessão persistente

### Objetivo
Garantir que o utilizador autenticado permanece autenticado conforme esperado.

### Checklist
- [ ] implementar persistência de sessão
- [ ] garantir reidratação/recuperação da sessão quando aplicável
- [ ] decidir comportamento quando sessão expira
- [ ] garantir que a sessão é tratada com segurança

### Regra
A persistência deve ser suficientemente robusta para admin, sem criar uma stack desnecessariamente pesada.

---

## 9. Logout

### Objetivo
Permitir terminar a sessão de forma clara e segura.

### Checklist
- [ ] implementar logout
- [ ] limpar sessão corretamente
- [ ] garantir redirecionamento adequado após logout
- [ ] validar comportamento em UI autenticada

---

## 10. Proteção de rotas privadas

### Objetivo
Impedir acesso não autorizado às áreas internas.

### Checklist
- [ ] identificar rotas privadas atuais ou previstas
- [ ] proteger rota ou segmento admin
- [ ] garantir redirecionamento para login quando necessário
- [ ] impedir acesso indevido em server-side e client-side quando aplicável
- [ ] manter estratégia coerente com App Router

### Regra
A proteção de rotas deve existir antes da área admin ficar operacional.

---

## 11. Middleware ou mecanismo equivalente de controlo de acesso

### Objetivo
Centralizar o controlo de acesso em vez de o duplicar por página.

### Checklist
- [ ] decidir se o controlo será feito por middleware ou abordagem equivalente
- [ ] aplicar mecanismo consistente às rotas privadas
- [ ] evitar checks dispersos e inconsistentes pela app
- [ ] documentar a decisão caso ainda não esteja registada

---

## 12. Estado autenticado vs não autenticado

### Objetivo
Garantir que a app reage corretamente consoante o estado da sessão.

### Checklist
- [ ] definir comportamento quando utilizador está autenticado
- [ ] definir comportamento quando utilizador não está autenticado
- [ ] garantir renderização consistente de elementos privados
- [ ] evitar flicker ou estados ambíguos quando possível

---

## 13. Roles mínimas e autorização simples

### Objetivo
Preparar a base para distinguir quem pode aceder à área privada.

### Checklist
- [ ] decidir se nesta fase existe apenas role `admin`
- [ ] separar autenticação de autorização
- [ ] garantir que checks de acesso são explícitos
- [ ] evitar sistema de permissões complexo prematuro

### Regra
Role mínima e clara é suficiente nesta fase.

---

## 14. UX de erro e feedback no login

### Objetivo
Fechar o fluxo com mensagens claras e profissionais.

### Checklist
- [ ] definir mensagem para credenciais inválidas
- [ ] definir mensagem para erro inesperado
- [ ] garantir loading claro durante autenticação
- [ ] evitar mensagens vagas ou demasiado técnicas
- [ ] manter feedback curto e seguro

---

## 15. Segurança base da autenticação

### Objetivo
Garantir que a implementação segue princípios mínimos de segurança.

### Checklist
- [ ] garantir que secrets não são expostos no cliente
- [ ] usar env vars corretamente
- [ ] validar input sempre no servidor
- [ ] evitar leaks de informação nas respostas de erro
- [ ] garantir proteção adequada da sessão
- [ ] rever superfícies óbvias de risco

---

## 16. Observabilidade mínima do fluxo de auth

### Objetivo
Ter visibilidade suficiente sobre o funcionamento do login.

### Checklist
- [ ] preparar registo de login bem-sucedido quando fizer sentido
- [ ] preparar registo de falha de login quando fizer sentido
- [ ] garantir que logs não expõem dados sensíveis desnecessariamente
- [ ] manter observabilidade proporcional ao tamanho do projecto

---

## 17. Preparação para internacionalização

### Objetivo
Garantir que a autenticação continua preparada para futura localização.

### Checklist
- [ ] evitar mensagens de erro difíceis de externalizar
- [ ] preparar labels, placeholders e feedback para futura localização
- [ ] manter conteúdo do login compatível com i18n readiness

---

## 18. Acessibilidade do fluxo de login

### Objetivo
Garantir que a página e formulário de login continuam acessíveis.

### Checklist
- [ ] labels corretas
- [ ] foco visível
- [ ] navegação por teclado funcional
- [ ] estados de erro perceptíveis
- [ ] botões e inputs semanticamente corretos

---

## 19. Preparação para a área admin

### Objetivo
Deixar a base pronta para a fase seguinte sem refactors grandes.

### Checklist
- [ ] garantir que a rota admin pode ser protegida de forma limpa
- [ ] garantir que a sessão fornece os dados mínimos necessários
- [ ] garantir que a role mínima está prevista
- [ ] confirmar que a arquitetura suporta expansão da área privada

---

## 20. Verificação final da fase

### Checklist final
- [ ] página de login criada
- [ ] formulário de login funcional
- [ ] cliente valida input
- [ ] servidor valida input
- [ ] login real funciona
- [ ] logout funciona
- [ ] sessão persiste corretamente
- [ ] rotas privadas estão protegidas
- [ ] autorização mínima está definida
- [ ] segurança base revista
- [ ] arquitetura respeitada

---

## Ordem recomendada de execução

### Bloco 1 — Auth foundations
- [ ] rever estratégia de autenticação
- [ ] criar feature `auth`
- [ ] definir modelo de utilizador e sessão

### Bloco 2 — Login flow
- [ ] página de login
- [ ] formulário de login
- [ ] validação de credenciais
- [ ] serviço de login

### Bloco 3 — Session and access control
- [ ] sessão persistente
- [ ] logout
- [ ] proteção de rotas
- [ ] middleware ou mecanismo equivalente
- [ ] estado autenticado vs não autenticado
- [ ] roles mínimas

### Bloco 4 — Quality pass
- [ ] UX de erro e feedback
- [ ] segurança base
- [ ] observabilidade mínima
- [ ] i18n readiness
- [ ] acessibilidade
- [ ] preparação para admin
- [ ] verificação final

---

## Fora de âmbito desta fase

Não fazer ainda:
- [ ] gestão completa de utilizadores
- [ ] registo público de conta
- [ ] recuperação de password complexa
- [ ] permissões avançadas por recurso
- [ ] multi-admin completo
- [ ] área admin operacional com gestão de leads
- [ ] auditoria avançada

---

## Dúvidas a resolver durante a implementação

Estas decisões podem ser registadas em `docs/technical-decisions.md`:

- [ ] solução concreta de autenticação
- [ ] mecanismo concreto de sessão
- [ ] estratégia de proteção de rotas
- [ ] necessidade real de roles além de `admin`
- [ ] comportamento esperado quando a sessão expira

---

## Critério de transição para a Fase 5

Só avançar para a Fase 5 quando:
- [ ] o acesso privado estiver estável
- [ ] as rotas admin estiverem protegidas
- [ ] existir confiança suficiente para construir a área admin sobre esta base
