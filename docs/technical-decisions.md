# Technical decisions

## Objetivo

Registar decisões técnicas importantes do projecto de forma simples, para manter contexto ao longo da implementação.

Este ficheiro serve para:
- explicar decisões arquiteturais
- evitar rediscutir o mesmo tema várias vezes
- documentar trade-offs
- facilitar consistência à medida que o projecto cresce

---

## Como usar este ficheiro

Sempre que uma decisão técnica tiver impacto em arquitetura, estrutura, tooling, dados, auth, rendering ou escala futura, deve ficar registada aqui.

### Estrutura de cada decisão
- **Data**
- **Tema**
- **Decisão**
- **Motivação**
- **Consequências**
- **Alternativas consideradas**
- **Estado**

Estados sugeridos:
- `accepted`
- `superseded`
- `pending`
- `rejected`

---

## 2026-03-25

### Tema
Arquitetura base do projecto

### Decisão
Usar uma arquitetura **feature-based** com princípio **local-first**.

### Motivação
O projecto vai crescer por fases e deverá evoluir de website público simples para aplicação com leads, autenticação e área admin.

Organizar por domínio ajuda a manter coesão, reduz espalhamento de lógica e melhora manutenção.

### Consequências
- código específico vive dentro da feature
- elementos shared só sobem para global quando houver reutilização real
- `app/` fica focado em routing e composição
- reduz-se o risco de criar pastas globais gigantes demasiado cedo

### Alternativas consideradas
- organização por tipo técnico global (`components/`, `hooks/`, `services/` para tudo)
- organização híbrida mais solta sem fronteiras de módulo claras

### Estado
`accepted`

---

## 2026-03-25

### Tema
Estratégia de frontend responsivo

### Decisão
Adotar abordagem **mobile-first** para a UI.

### Motivação
O site do consultor terá forte probabilidade de ser visitado em mobile e os fluxos principais são consumo de conteúdo, contacto e marcação de reunião.

Começar por mobile melhora foco, clareza e evita remendos posteriores em responsive design.

### Consequências
- estilos base pensados para ecrãs pequenos
- breakpoints usados para expandir experiência, não para corrigir desktop-first
- componentes e layouts devem funcionar bem em touch e viewport reduzido

### Alternativas consideradas
- desktop-first com adaptação posterior para mobile

### Estado
`accepted`

---

## 2026-03-25

### Tema
Modelo de rendering

### Decisão
Adotar abordagem **server-first** no Next.js, usando Server Components por defeito e Client Components apenas quando necessário.

### Motivação
Isto reduz JavaScript no cliente, melhora performance e está alinhado com o modelo moderno do Next.js.

### Consequências
- páginas públicas tendem a ser renderizadas no servidor
- `"use client"` deve ser introduzido com intenção clara
- interatividade local continua possível quando justificar

### Alternativas consideradas
- abordagem client-heavy por defeito
- tratar todas as páginas como client components

### Estado
`accepted`

---

## 2026-03-25

### Tema
Estratégia de internacionalização

### Decisão
Preparar o projecto para **i18n desde o início**, mas adiar o rollout completo de múltiplos idiomas até existir necessidade real de negócio.

### Motivação
Internacionalização tardia costuma gerar refactors em rotas, metadata, conteúdo e navegação.

Ao mesmo tempo, traduzir tudo cedo demais seria overkill sem validação de necessidade real.

### Consequências
- a arquitetura deve suportar expansão futura de idiomas
- evitar hardcoded text em excesso
- estrutura de conteúdo e metadata deve ser compatível com localização futura
- conteúdo traduzido completo só avança quando houver justificação clara

### Alternativas consideradas
- ignorar i18n na fase inicial
- implementar sistema completo de múltiplos idiomas logo no MVP

### Estado
`accepted`

---

## 2026-03-25

### Tema
Estratégia de conteúdo

### Decisão
Tratar conteúdo como parte da arquitetura do produto, e não apenas como texto embutido em componentes.

### Motivação
O valor do website depende de clareza na proposta, confiança, SEO e futura possibilidade de localização.

### Consequências
- evitar copy hardcoded em excesso em componentes reutilizáveis
- preparar secções de marketing para futura evolução
- permitir crescimento posterior de FAQs, serviços, artigos e casos de estudo

### Alternativas consideradas
- gerir todo o conteúdo diretamente dentro dos componentes sem separação clara

### Estado
`accepted`

---

## 2026-03-25

### Tema
Estratégia de estado

### Decisão
Começar com gestão de estado simples: estado local por defeito, partilha dentro da feature quando necessário e estado global apenas quando houver necessidade real.

### Motivação
Introduzir state management pesado demasiado cedo aumenta complexidade sem benefício proporcional.

### Consequências
- `useState` e composição simples primeiro
- evitar global state prematuro
- distinguir estado de UI, domínio e servidor

### Alternativas consideradas
- introduzir store global desde o início
- usar abstrações pesadas antes de existirem fluxos complexos

### Estado
`accepted`

---

## 2026-03-25

### Tema
Validação de dados

### Decisão
Validar dados explicitamente no cliente e no servidor, com foco em schemas reutilizáveis quando fizer sentido.

### Motivação
Validação no cliente melhora UX, mas não garante segurança. A validação no servidor protege integridade do sistema.

### Consequências
- formulários devem ter feedback rápido no cliente
- submissões devem ser revalidadas no servidor
- operações de auth e admin devem validar sempre no servidor

### Alternativas consideradas
- depender só da validação do browser
- validação dispersa e inconsistente por formulário

### Estado
`accepted`

---

## 2026-03-25

### Tema
Segurança base

### Decisão
Adotar princípio de **security by default**.

### Motivação
O projecto vai lidar com leads, contactos e possivelmente área admin. Segurança não deve ser adicionada só no fim.

### Consequências
- nunca confiar no cliente
- secrets não devem ir para o browser
- rotas privadas devem ser protegidas
- autenticação e autorização devem ser tratadas como preocupações distintas

### Alternativas consideradas
- adicionar segurança apenas quando a área admin existir

### Estado
`accepted`

---

## 2026-03-25

### Tema
Acessibilidade

### Decisão
Tratar acessibilidade como baseline do frontend, especialmente em componentes shared.

### Motivação
Acessibilidade melhora qualidade geral da UI, usabilidade e robustez da interface.

### Consequências
- foco em HTML semântico
- labels corretas em formulários
- navegação por teclado funcional
- foco visível e componentes reutilizáveis acessíveis

### Alternativas consideradas
- tratar acessibilidade apenas como polish tardio

### Estado
`accepted`

---

## 2026-03-25

### Tema
Performance

### Decisão
Tratar performance como requisito de qualidade desde o início.

### Motivação
O website público beneficia diretamente de carregamento rápido, menos JavaScript e boa experiência em mobile.

### Consequências
- preferência por rendering no servidor quando isso fizer sentido
- evitar client components desnecessários
- otimizar imagens e assets
- evitar abstrações que aumentem custo sem valor claro

### Alternativas consideradas
- otimizar só numa fase final

### Estado
`accepted`

---

## 2026-03-25

### Tema
Observabilidade e métricas

### Decisão
Preparar o sistema para observabilidade mínima dos fluxos críticos, sem introduzir stack pesada cedo demais.

### Motivação
O consultor precisa de perceber se contactos entram, de onde vêm e onde falham os fluxos principais.

### Consequências
- eventos de conversão devem poder ser medidos
- erros relevantes devem poder ser investigados
- tracking deve ser útil e discreto

### Alternativas consideradas
- não medir nada na fase inicial
- introduzir observabilidade demasiado complexa desde o início

### Estado
`accepted`

---

## 2026-03-25

### Tema
Estratégia de testes

### Decisão
Fazer os testes crescerem com a criticidade do produto, começando por lógica crítica e fluxos de maior valor.

### Motivação
No início, o produto ainda está a estabilizar. Uma estratégia pesada de testes demasiado cedo teria baixo retorno.

### Consequências
- lógica pura pode receber testes unitários
- fluxos estáveis e críticos podem receber testes de integração
- E2E fica reservado para caminhos realmente importantes numa fase posterior

### Alternativas consideradas
- tentar cobrir tudo desde o início
- adiar completamente qualquer estratégia de testes

### Estado
`accepted`

---

## Decisões em aberto

### Tema
Naming final de ficheiros de componentes React

### Decisão
Ainda em validação entre `camelCase` consistente para tudo e `PascalCase` para ficheiros de componentes.

### Motivação
A equipa neste momento é pequena, mas convém fechar a convenção cedo para evitar inconsistência.

### Consequências
- até decisão final, manter consistência local e evitar mistura sem regra

### Alternativas consideradas
- `camelCase` para todos os ficheiros
- `PascalCase` para componentes e `camelCase` para utilitários/hooks

### Estado
`pending`

---

### Tema
Solução concreta de i18n

### Decisão
Ainda não foi escolhida a abordagem concreta de implementação.

### Motivação
A decisão depende de quão cedo o projecto vai precisar de múltiplos idiomas reais.

### Consequências
- a arquitetura já está preparada
- a implementação concreta pode ser escolhida mais tarde sem contrariar o roadmap

### Alternativas consideradas
- solução baseada em dicionários locais
- solução baseada em biblioteca dedicada de i18n
- solução híbrida conforme o tipo de conteúdo

### Estado
`pending`

---

### Tema
Estratégia de dados para leads, auth e conteúdo

### Decisão
Ainda não foi fechada a stack concreta para persistência e acesso a dados.

### Motivação
Essa decisão depende das features que entrarem primeiro após o MVP público.

### Consequências
- a arquitetura continua agnóstica nesta fase
- a decisão deverá ser tomada antes da implementação real de leads e admin

### Alternativas consideradas
- solução simples com base de dados relacional
- backend managed + auth integrada
- abordagem mais minimalista com ferramentas externas numa fase inicial

### Estado
`pending`
