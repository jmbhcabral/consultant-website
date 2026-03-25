

# Phase 1 — Website público simples

## Objetivo da fase

Construir a primeira versão pública do website com uma presença profissional, clara e funcional.

No fim desta fase, o website deve:
- comunicar claramente o posicionamento do consultor
- apresentar serviços e proposta de valor
- permitir navegação simples em mobile e desktop
- incluir uma base de conteúdo preparada para crescimento futuro
- ficar alinhado com a arquitetura definida no projecto

---

## Definição de pronto da fase

Uma task desta fase só deve ser considerada concluída quando:
- a implementação está funcional
- a UI está coerente com a base criada na Fase 0
- a solução funciona bem em mobile-first
- não foi introduzida lógica de domínio desnecessária em `app/`
- a página ou secção é clara do ponto de vista de UX e copy

A fase fica concluída quando:
- [ ] existe homepage funcional e credível
- [ ] existe navegação principal funcional
- [ ] existem páginas públicas essenciais
- [ ] existe página de contacto com formulário base
- [ ] o website está responsivo
- [ ] a base de conteúdo está preparada para evolução futura e i18n

---

## 1. Estrutura de rotas públicas

### Objetivo
Criar as rotas públicas mínimas do website.

### Checklist
- [ ] criar rota `/`
- [ ] criar rota `/services`
- [ ] criar rota `/about`
- [ ] criar rota `/contact`
- [ ] validar naming e organização das páginas em `app/`
- [ ] garantir que as páginas funcionam como composition layer

### Regra
As páginas em `app/` devem montar secções/features e não concentrar lógica de apresentação demasiado específica.

---

## 2. Estrutura de features públicas

### Objetivo
Criar a base das features de marketing e contacto para suportar as páginas públicas.

### Checklist
- [ ] criar `src/features/marketing`
- [ ] criar `src/features/contact`
- [ ] criar estrutura mínima interna de cada feature conforme necessidade
- [ ] criar `index.ts` nas features se fizer sentido para API pública
- [ ] manter conteúdo específico dentro da feature certa

### Regra
Começar simples.

Não criar subpastas desnecessárias antes de existir uso real.

---

## 3. Header e navegação principal

### Objetivo
Criar uma navegação principal simples, clara e preparada para mobile.

### Checklist
- [ ] criar header global
- [ ] adicionar links principais de navegação
- [ ] definir estado ativo da navegação, se fizer sentido
- [ ] preparar comportamento mobile para navegação
- [ ] garantir acessibilidade básica da navegação
- [ ] garantir consistência visual com o resto do layout

### Resultado esperado
- o utilizador percebe rapidamente para onde pode navegar
- a navegação funciona bem em mobile e desktop

---

## 4. Footer

### Objetivo
Criar um footer simples com informação útil e credível.

### Checklist
- [ ] criar footer global
- [ ] incluir links principais
- [ ] incluir informação de contacto essencial
- [ ] incluir links legais mínimos, se já existirem
- [ ] garantir que o footer fecha bem a experiência visual

---

## 5. Homepage — estrutura base

### Objetivo
Construir uma homepage clara, focada em proposta de valor e conversão inicial.

### Checklist
- [ ] definir estrutura da homepage
- [ ] criar hero section
- [ ] criar secção de serviços resumidos
- [ ] criar secção “sobre” resumida
- [ ] criar secção de prova de confiança
- [ ] criar CTA principal
- [ ] criar secção final de contacto ou próxima ação

### Regra
A homepage deve ser simples, legível e orientada a clareza.

Evitar excesso de secções ou complexidade visual prematura.

---

## 6. Hero section

### Objetivo
Comunicar de forma imediata quem é o consultor, o que faz e qual o valor entregue.

### Checklist
- [ ] definir headline clara
- [ ] definir supporting copy curta
- [ ] definir CTA principal
- [ ] definir CTA secundário, se fizer sentido
- [ ] validar legibilidade em mobile
- [ ] garantir que a mensagem principal aparece cedo no viewport

### Resultado esperado
- o utilizador percebe rapidamente a proposta de valor
- existe um caminho claro para a próxima ação

---

## 7. Secção de serviços

### Objetivo
Apresentar os serviços de forma simples e compreensível.

### Checklist
- [ ] definir lista inicial de serviços
- [ ] criar cards ou blocos de serviço
- [ ] descrever cada serviço de forma curta
- [ ] ligar para a página `/services` quando aplicável
- [ ] garantir boa leitura em mobile

### Regra
Evitar descrições demasiado técnicas ou densas nesta fase.

---

## 8. Secção sobre / apresentação do consultor

### Objetivo
Criar confiança e dar contexto humano ao serviço.

### Checklist
- [ ] definir copy curta de apresentação
- [ ] explicar experiência ou especialização principal
- [ ] destacar diferenciação relevante
- [ ] preparar ligação para página `/about`

---

## 9. Secção de prova de confiança

### Objetivo
Adicionar sinais de credibilidade.

### Checklist
- [ ] decidir formato inicial de prova social
- [ ] adicionar testemunhos, métricas, experiência ou clientes, conforme disponível
- [ ] garantir que a secção é discreta mas convincente
- [ ] evitar placeholders falsos ou prova social inventada

### Regra
Usar apenas sinais de confiança reais.

---

## 10. CTA principal

### Objetivo
Definir a principal ação que o website quer que o utilizador tome.

### Checklist
- [ ] escolher CTA principal
- [ ] garantir consistência do CTA entre secções
- [ ] ligar CTA à rota ou secção correta
- [ ] validar destaque visual sem excesso

### Exemplos possíveis
- pedir contacto
- marcar conversa
- ver serviços

---

## 11. Página de serviços

### Objetivo
Criar uma página pública dedicada aos serviços.

### Checklist
- [ ] criar estrutura da página `/services`
- [ ] listar serviços com mais detalhe do que na homepage
- [ ] incluir proposta de valor por serviço
- [ ] incluir CTA relevante
- [ ] validar consistência de conteúdo e hierarchy visual

---

## 12. Página sobre

### Objetivo
Criar uma página que aprofunde contexto, experiência e posicionamento.

### Checklist
- [ ] criar estrutura da página `/about`
- [ ] adicionar apresentação do consultor
- [ ] adicionar experiência, abordagem ou princípios de trabalho
- [ ] incluir CTA final
- [ ] validar clareza e credibilidade da narrativa

---

## 13. Página de contacto

### Objetivo
Dar ao utilizador um caminho simples para entrar em contacto.

### Checklist
- [ ] criar estrutura da página `/contact`
- [ ] adicionar contexto curto antes do formulário
- [ ] incluir dados de contacto relevantes, se aplicável
- [ ] manter a página simples e focada

---

## 14. Formulário de contacto base

### Objetivo
Criar a primeira versão funcional do formulário, mesmo que ainda sem backend final.

### Checklist
- [ ] definir campos mínimos do formulário
- [ ] criar UI do formulário
- [ ] validar estados básicos de interação
- [ ] garantir labels e acessibilidade
- [ ] preparar estrutura para validação futura
- [ ] preparar estrutura para integração real na Fase 2

### Regra
Nesta fase, o foco é UX, estrutura e clareza.

A persistência real de leads entra na fase seguinte.

---

## 15. Estados de UI do formulário

### Objetivo
Evitar uma experiência “morta” ou ambígua no contacto.

### Checklist
- [ ] definir estado idle
- [ ] definir estado loading
- [ ] definir estado success
- [ ] definir estado error
- [ ] garantir mensagens claras e curtas

---

## 16. Estrutura de conteúdo preparada para evolução

### Objetivo
Evitar acoplamento excessivo entre copy e UI.

### Checklist
- [ ] rever textos principais da homepage
- [ ] evitar hardcoded text excessivo em componentes reutilizáveis
- [ ] organizar conteúdo de secções de forma minimamente previsível
- [ ] preparar conteúdo para futura expansão de SEO, blog e casos de estudo
- [ ] preparar base para futura localização/i18n

---

## 17. Base de internacionalização na fase pública

### Objetivo
Garantir que as páginas públicas não dificultam futura tradução.

### Checklist
- [ ] definir idioma base do website
- [ ] validar que o conteúdo principal pode ser externalizado mais tarde
- [ ] evitar estrutura de rotas que bloqueie evolução para múltiplos idiomas
- [ ] garantir que metadata e copy principal não ficam acopladas de forma difícil de manter

### Regra
Nesta fase ainda não é obrigatório implementar locale switcher ou múltiplos idiomas reais.

---

## 18. Responsividade e mobile-first

### Objetivo
Validar que a experiência pública funciona bem em ecrãs pequenos.

### Checklist
- [ ] validar header em mobile
- [ ] validar hero em mobile
- [ ] validar secções principais em mobile
- [ ] validar formulários em mobile
- [ ] validar spacing e leitura em diferentes breakpoints
- [ ] validar touch targets e hierarquia visual

---

## 19. Acessibilidade base

### Objetivo
Garantir uma base mínima de acessibilidade nas páginas públicas.

### Checklist
- [ ] headings com hierarchy correta
- [ ] labels no formulário
- [ ] navegação por teclado funcional
- [ ] foco visível em elementos interativos
- [ ] contraste minimamente adequado
- [ ] links e botões semanticamente corretos

---

## 20. Metadata por página

### Objetivo
Criar uma base melhor de SEO técnico para as páginas públicas.

### Checklist
- [ ] definir metadata para homepage
- [ ] definir metadata para `/services`
- [ ] definir metadata para `/about`
- [ ] definir metadata para `/contact`
- [ ] manter estrutura pronta para evolução futura por idioma

---

## 21. Verificação final da fase

### Checklist final
- [ ] homepage funcional
- [ ] header funcional
- [ ] footer funcional
- [ ] páginas `/services`, `/about` e `/contact` criadas
- [ ] formulário base criado
- [ ] estados de UI do formulário definidos
- [ ] layout responsivo validado
- [ ] acessibilidade base revista
- [ ] metadata base por página definida
- [ ] conteúdo preparado para evolução futura
- [ ] arquitetura respeitada

---

## Ordem recomendada de execução

### Bloco 1 — Public foundations
- [ ] rotas públicas
- [ ] features públicas
- [ ] header
- [ ] footer

### Bloco 2 — Homepage
- [ ] hero
- [ ] secção de serviços
- [ ] secção sobre
- [ ] secção de prova de confiança
- [ ] CTA principal

### Bloco 3 — Public pages
- [ ] página de serviços
- [ ] página sobre
- [ ] página de contacto
- [ ] formulário base
- [ ] estados de UI do formulário

### Bloco 4 — Quality pass
- [ ] estrutura de conteúdo
- [ ] base de internacionalização
- [ ] responsividade
- [ ] acessibilidade
- [ ] metadata por página
- [ ] verificação final

---

## Fora de âmbito desta fase

Não fazer ainda:
- [ ] persistência real de leads
- [ ] envio real de emails
- [ ] autenticação
- [ ] dashboard admin
- [ ] blog
- [ ] casos de estudo completos
- [ ] CMS
- [ ] locale switcher real
- [ ] multi-language SEO completo
- [ ] analytics avançados

---

## Dúvidas a resolver durante a implementação

Estas decisões podem ser registadas em `docs/technical-decisions.md`:

- [ ] CTA principal final do website
- [ ] estrutura concreta da homepage
- [ ] formato inicial de prova social
- [ ] campos mínimos do formulário de contacto
- [ ] estratégia concreta para externalização de conteúdo mais tarde

---

## Critério de transição para a Fase 2

Só avançar para a Fase 2 quando:
- [ ] o website público estiver navegável
- [ ] as páginas principais estiverem coerentes
- [ ] o formulário base estiver pronto para integração real
- [ ] existir uma mensagem clara de negócio
- [ ] a base estiver sólida para começar captação real de leads