

# Phase 2 — Captação de leads com valor real

## Objetivo da fase

Transformar o website numa ferramenta útil para o consultor, e não apenas numa presença pública.

No fim desta fase, o projecto deve:
- receber contactos reais a partir do website
- validar e persistir leads
- dar visibilidade mínima sobre submissões e falhas
- preparar os dados para futura área admin
- manter a implementação simples e alinhada com a arquitetura definida

---

## Definição de pronto da fase

Uma task desta fase só deve ser considerada concluída quando:
- existe comportamento real e não apenas UI simulada
- a validação está coerente entre cliente e servidor
- a solução respeita segurança básica
- os dados ficam preparados para reutilização futura
- o fluxo principal funciona de ponta a ponta

A fase fica concluída quando:
- [ ] o formulário de contacto envia dados reais
- [ ] os dados são validados no cliente e no servidor
- [ ] os leads ficam persistidos
- [ ] existe feedback claro para sucesso e erro
- [ ] existe base para gestão futura de leads
- [ ] o fluxo está preparado para observabilidade mínima

---

## 1. Revisão do fluxo de contacto

### Objetivo
Confirmar o fluxo funcional exato antes de ligar backend, persistência e notificações.

### Checklist
- [ ] rever campos atuais do formulário
- [ ] confirmar campos mínimos necessários para lead
- [ ] validar se o fluxo atual continua simples para o utilizador
- [ ] decidir comportamento após submissão com sucesso
- [ ] decidir comportamento em caso de erro

### Regra
Não aumentar fricção sem necessidade real.

O objetivo é maximizar clareza e submissão, não recolher dados em excesso.

---

## 2. Estrutura da feature de contacto

### Objetivo
Organizar a feature `contact` para suportar validação, submissão e evolução futura.

### Checklist
- [ ] rever estrutura atual de `src/features/contact`
- [ ] criar ou ajustar `components/`, `hooks/`, `services/`, `schemas/`, `types/` conforme necessário
- [ ] manter responsabilidades claras entre UI, lógica e acesso a dados
- [ ] expor API pública mínima da feature

### Regra
A lógica da submissão não deve ficar espalhada por `app/`.

---

## 3. Modelo de lead

### Objetivo
Definir a estrutura base dos dados a guardar.

### Checklist
- [ ] definir campos mínimos do lead
- [ ] incluir nome
- [ ] incluir email
- [ ] incluir empresa, se fizer sentido
- [ ] incluir mensagem
- [ ] incluir origem do lead
- [ ] incluir timestamps relevantes
- [ ] preparar campo de estado para uso futuro

### Regra
O modelo deve ser simples, mas já preparado para evolução futura na área admin.

---

## 4. Validação do formulário no cliente

### Objetivo
Melhorar UX com feedback imediato antes da submissão.

### Checklist
- [ ] definir schema do formulário
- [ ] validar campos obrigatórios
- [ ] validar formato de email
- [ ] validar limites de tamanho quando fizer sentido
- [ ] mostrar mensagens claras junto ao formulário ou campo
- [ ] garantir consistência com regras do servidor

### Resultado esperado
- o utilizador recebe feedback útil antes do submit
- reduz-se submissão inválida evitável

---

## 5. Validação no servidor

### Objetivo
Garantir integridade e segurança no ponto de entrada real.

### Checklist
- [ ] validar payload no servidor
- [ ] rejeitar dados inválidos
- [ ] normalizar dados quando fizer sentido
- [ ] garantir que não se depende apenas da validação do browser
- [ ] preparar respostas de erro consistentes

### Regra
A validação do servidor é obrigatória mesmo que a UI valide antes.

---

## 6. Persistência de leads

### Objetivo
Guardar leads de forma fiável para utilização futura.

### Checklist
- [ ] escolher abordagem concreta de persistência
- [ ] implementar criação de lead
- [ ] garantir que os dados ficam guardados corretamente
- [ ] guardar origem do lead
- [ ] guardar data de criação
- [ ] preparar estrutura para leitura futura no admin

### Regra
Nesta fase, o foco é criar e guardar leads.

Leitura avançada, filtros e gestão entram mais tarde.

---

## 7. Serviço de submissão do formulário

### Objetivo
Criar um ponto claro de entrada para a submissão do contacto.

### Checklist
- [ ] criar service de submissão na feature `contact`
- [ ] garantir separação entre UI e lógica de submissão
- [ ] tratar resposta de sucesso
- [ ] tratar resposta de erro
- [ ] devolver contrato claro para a UI consumir

---

## 8. Endpoint / action / fluxo server-side

### Objetivo
Ligar o formulário ao backend de forma alinhada com o modelo do projecto.

### Checklist
- [ ] escolher abordagem concreta para submissão server-side
- [ ] garantir que a integração respeita arquitetura do Next.js adotada
- [ ] evitar lógica duplicada entre camada de UI e camada server-side
- [ ] garantir que o fluxo é testável e legível

### Nota
A decisão concreta usada deve ficar registada em `docs/technical-decisions.md` se ainda não estiver fechada.

---

## 9. Estados reais do formulário

### Objetivo
Passar de estados “simulados” para estados reais do fluxo de submissão.

### Checklist
- [ ] estado idle
- [ ] estado loading real
- [ ] estado success real
- [ ] estado error real
- [ ] impedir múltiplos submits acidentais, se necessário
- [ ] garantir mensagens curtas e credíveis

---

## 10. Notificação de novo lead

### Objetivo
Garantir que o consultor sabe que entrou um novo contacto.

### Checklist
- [ ] decidir canal inicial de notificação
- [ ] implementar notificação mínima de novo lead
- [ ] garantir que o conteúdo da notificação é útil
- [ ] incluir dados suficientes para ação rápida
- [ ] tratar falha da notificação sem perder o lead persistido

### Regra
Persistência do lead é mais importante do que entrega perfeita da notificação.

---

## 11. Auto-resposta opcional

### Objetivo
Avaliar se compensa enviar confirmação automática ao utilizador.

### Checklist
- [ ] decidir se a auto-resposta entra já nesta fase
- [ ] se entrar, manter conteúdo simples e profissional
- [ ] evitar automação excessiva ou demasiado promocional
- [ ] garantir que falha da auto-resposta não quebra o fluxo principal

### Regra
Opcional.

Só implementar se acrescentar valor claro.

---

## 12. Proteção anti-spam básica

### Objetivo
Reduzir submissões abusivas sem complicar demasiado o formulário.

### Checklist
- [ ] escolher proteção anti-spam inicial simples
- [ ] implementar proteção mínima no fluxo
- [ ] evitar degradar demasiado a UX legítima
- [ ] validar que a solução é proporcional ao risco atual

### Regra
Começar com proteção básica e evoluir só se houver problema real.

---

## 13. Observabilidade mínima do fluxo

### Objetivo
Ter visibilidade suficiente sobre submissões e falhas.

### Checklist
- [ ] registar sucesso de submissão
- [ ] registar falha de submissão quando fizer sentido
- [ ] preparar base para métricas de conversão
- [ ] identificar origem do lead quando possível
- [ ] garantir que logs não expõem dados sensíveis desnecessariamente

---

## 14. Estrutura de dados preparada para admin

### Objetivo
Garantir que a informação recolhida já serve a futura área privada.

### Checklist
- [ ] preparar estado inicial do lead
- [ ] preparar campos mínimos para futura triagem
- [ ] garantir identificador consistente
- [ ] garantir que o modelo pode evoluir para filtros e detalhe de lead

---

## 15. UX de sucesso e erro

### Objetivo
Fechar o fluxo com uma experiência clara para o utilizador.

### Checklist
- [ ] definir mensagem de sucesso
- [ ] definir mensagem de erro genérica mas útil
- [ ] decidir se o formulário limpa após sucesso
- [ ] decidir se o utilizador fica na página ou é redirecionado
- [ ] garantir linguagem clara e profissional

---

## 16. Segurança base do fluxo

### Objetivo
Garantir que a submissão de contacto segue as regras mínimas de segurança.

### Checklist
- [ ] validar input no servidor
- [ ] não expor secrets no cliente
- [ ] garantir uso correto de env vars
- [ ] tratar autenticação como irrelevante neste fluxo público, mas proteger integrações internas
- [ ] evitar leaks de erro para o utilizador final

---

## 17. Preparação para internacionalização

### Objetivo
Garantir que a evolução do fluxo de contacto continua compatível com i18n.

### Checklist
- [ ] evitar mensagens críticas hardcoded de forma difícil de extrair
- [ ] preparar labels e feedback para futura localização
- [ ] manter a estrutura de conteúdo preparada para múltiplos idiomas
- [ ] garantir que validação e mensagens podem evoluir por locale

---

## 18. Revisão de acessibilidade

### Objetivo
Garantir que o formulário real continua acessível.

### Checklist
- [ ] labels corretas
- [ ] mensagens de erro perceptíveis
- [ ] foco correto após erro ou sucesso, quando aplicável
- [ ] navegação por teclado funcional
- [ ] estados disabled/loading compreensíveis

---

## 19. Verificação final da fase

### Checklist final
- [ ] formulário envia dados reais
- [ ] cliente valida input
- [ ] servidor valida input
- [ ] lead é persistido
- [ ] proteção anti-spam básica está aplicada
- [ ] notificação mínima está resolvida
- [ ] estados reais de success/error funcionam
- [ ] dados estão preparados para futura área admin
- [ ] arquitetura respeitada
- [ ] fluxo público continua simples e claro

---

## Ordem recomendada de execução

### Bloco 1 — Data flow design
- [ ] rever fluxo de contacto
- [ ] definir modelo de lead
- [ ] rever estrutura da feature

### Bloco 2 — Validation and persistence
- [ ] validação cliente
- [ ] validação servidor
- [ ] persistência de leads
- [ ] serviço de submissão
- [ ] integração server-side

### Bloco 3 — Operational value
- [ ] estados reais do formulário
- [ ] notificação de novo lead
- [ ] auto-resposta opcional
- [ ] proteção anti-spam
- [ ] observabilidade mínima

### Bloco 4 — Quality pass
- [ ] preparação para admin
- [ ] UX de sucesso e erro
- [ ] segurança base
- [ ] i18n readiness
- [ ] acessibilidade
- [ ] verificação final

---

## Fora de âmbito desta fase

Não fazer ainda:
- [ ] dashboard admin completo
- [ ] listagem e filtros avançados de leads
- [ ] login
- [ ] gestão editorial de conteúdo
- [ ] CRM completo
- [ ] automações complexas de follow-up
- [ ] analytics avançados
- [ ] scoring complexo de leads

---

## Dúvidas a resolver durante a implementação

Estas decisões podem ser registadas em `docs/technical-decisions.md`:

- [ ] stack concreta de persistência
- [ ] abordagem concreta de submissão server-side
- [ ] canal inicial de notificação
- [ ] necessidade real de auto-resposta nesta fase
- [ ] solução inicial de proteção anti-spam

---

## Critério de transição para a Fase 3

Só avançar para a Fase 3 quando:
- [ ] o website já estiver a captar leads reais
- [ ] o fluxo principal estiver estável
- [ ] houver confiança nos dados recolhidos
- [ ] a base estiver preparada para aumentar conteúdo e credibilidade do website