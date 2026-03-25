# Arquitetura do projecto

## Objetivo

Definir uma arquitetura simples, escalável e pragmática para o website do consultor.

O foco é:
- evoluir por fases
- manter baixo acoplamento
- organizar o código por domínio
- evitar abstrações prematuras
- permitir crescer de website público para produto com área admin

---

## Princípios de arquitetura

### 1. Local-first
Tudo o que pertence a uma feature deve viver dentro dessa feature.

Só deve ser promovido para global quando houver reutilização real.

### 2. Organizar por domínio, não por tipo técnico
Devemos preferir agrupar por feature em vez de espalhar ficheiros por pastas genéricas como `services`, `hooks` e `components` a nível global.

### 3. Extração só com repetição real
Não criar abstrações “porque provavelmente vão ser úteis”.

Primeiro implementar de forma simples. Depois extrair quando existir repetição, necessidade clara ou um padrão estável.

### 4. UI partilhada separada do domínio
Componentes de interface genéricos e reutilizáveis devem viver fora das features.

Exemplo: `Button`, `Input`, `Card`, `Container`.

### 5. Infraestrutura separada do negócio
Helpers transversais, configuração, clientes HTTP, env e utilitários globais devem ficar fora das features.

### 6. Simplicidade antes de sofisticação
O projecto deve resolver problemas reais do consultor sem virar um sistema complexo demasiado cedo.

---

## Estrutura base do projecto

```txt
src/
  app/
  features/
  components/
    ui/
  lib/
  hooks/
  styles/
  messages/
```

### Responsabilidade de cada diretório

#### `app/`
Contém routing, layouts, páginas e entry points do App Router.

Exemplos:
- `layout.tsx`
- `page.tsx`
- `services/page.tsx`
- `contact/page.tsx`
- `admin/page.tsx`

Regra:
- em `app/` vive estrutura de rota
- lógica de domínio deve ser delegada para `features/`

---

#### `features/`
Contém o código por domínio/feature.

Cada feature deve ser o mais autónoma possível.

Exemplos de features esperadas neste projecto:
- `marketing`
- `contact`
- `blog`
- `auth`
- `admin`
- `leads`
- `scheduling`

---

#### `components/ui/`
Contém componentes visuais genéricos e reutilizáveis.

Exemplos:
- `button.tsx`
- `input.tsx`
- `textarea.tsx`
- `card.tsx`
- `container.tsx`
- `section.tsx`

Regra:
- sem lógica de domínio
- sem dependência de uma feature específica
- API simples e reutilizável

---

#### `lib/`
Contém utilitários, config e infraestrutura partilhada.

Exemplos:
- `utils.ts`
- `constants.ts`
- `env.ts`
- `metadata.ts`
- `api-client.ts`
- `formatters.ts`

Regra:
- código transversal
- sem responsabilidade de UI
- sem responsabilidade de domínio específico

---

#### `hooks/`
Contém apenas hooks genéricos e reutilizáveis entre várias features.

Exemplos:
- `use-debounce.ts`
- `use-media-query.ts`
- `use-mounted.ts`

Regra:
- se o hook pertence a uma feature, deve ficar dentro da feature
- esta pasta não deve virar contentor de hooks de domínio

---

#### `styles/`
Contém estilos globais e tokens visuais do sistema.

Exemplos:
- `globals.css`
- `tokens.css`

---

#### `messages/`
Contém dicionários, traduções ou recursos de texto por idioma, caso a estratégia de i18n escolhida os use desta forma.

Exemplos:
- `pt-PT.json`
- `en.json`

Regra:
- centralizar conteúdo traduzível fora dos componentes quando fizer sentido
- evitar texto hardcoded em excesso nas páginas e features
- a estrutura exata pode evoluir conforme a solução de i18n adotada

---

## Estrutura interna de uma feature

Estrutura recomendada:

```txt
features/
  nome-da-feature/
    components/
    hooks/
    services/
    types/
    schemas/
    utils/
    index.ts
```

Nem todas as features precisam de todas estas pastas.

A estrutura deve crescer conforme a necessidade.

### Responsabilidade por pasta

#### `components/`
Componentes específicos da feature.

Exemplos:
- `login-form.tsx`
- `contact-form.tsx`
- `lead-status-badge.tsx`

#### `hooks/`
Hooks específicos da feature.

Exemplos:
- `use-login.ts`
- `use-contact-form.ts`
- `use-lead-filters.ts`

#### `services/`
Lógica de acesso a dados, chamadas a APIs e operações da feature.

Exemplos:
- `submit-contact-form.ts`
- `get-leads.ts`
- `update-lead-status.ts`

#### `types/`
Tipos específicos da feature.

Exemplos:
- `lead.types.ts`
- `auth.types.ts`

#### `schemas/`
Validação e parsing de dados.

Exemplos:
- `contact-form.schema.ts`
- `login.schema.ts`

#### `utils/`
Helpers locais da feature.

Exemplos:
- `map-lead-status.ts`
- `format-contact-origin.ts`

#### `index.ts`
Exports públicos da feature.

Serve para controlar o que a feature expõe ao resto da aplicação.

---

## Convenção global vs local

### Deve ficar dentro da feature quando
- só é usado nessa feature
- representa regra de negócio dessa feature
- o nome só faz sentido naquele domínio
- a mudança esperada afeta apenas essa área

### Pode subir para global quando
- é usado por várias features
- é agnóstico ao domínio
- tem uma API estável
- a extração reduz duplicação real

### Regra prática
Começar local.

Só extrair para global depois da segunda ou terceira reutilização clara.

---

## Fluxo entre camadas

A estrutura deve seguir, de forma simples, esta direção:

```txt
app -> features -> lib / external services
```

E dentro da feature, idealmente:

```txt
components -> hooks -> services
```

Nem sempre isto será rígido, mas ajuda a manter clareza.

### Exemplo
- uma página em `app/contact/page.tsx`
- usa um componente da feature `contact`
- o componente usa um hook `use-contact-form`
- o hook usa schema + service da feature
- o service comunica com a API ou base de dados

---

## Estratégia para routing

O projecto vai usar **App Router**.

### Regra
- `app/` define rotas
- `features/` implementa comportamento

### Exemplo

```txt
app/
  page.tsx
  services/page.tsx
  about/page.tsx
  contact/page.tsx
  admin/page.tsx
```

As páginas devem ser pequenas e funcionar como composition layer.

Ou seja, devem montar secções, features e layouts, não concentrar lógica de negócio.

---

## Estratégia de internacionalização

A internacionalização deve ser tratada como uma preocupação arquitetural desde o início, mesmo que o rollout completo de múltiplos idiomas aconteça mais tarde.

### Objetivo
Preparar o projecto para suportar vários idiomas sem forçar uma refatoração grande no futuro.

### Princípios
- i18n readiness entra cedo
- full translation rollout só avança quando houver necessidade real de negócio
- a estrutura de rotas, metadata e conteúdo deve ser compatível com expansão futura
- evitar hardcoded text em excesso dentro de componentes e páginas

### Regras
- definir um idioma base explícito
- preparar a aplicação para suportar mais do que um locale
- manter conteúdo textual suficientemente desacoplado da UI para permitir tradução futura
- garantir que metadata e conteúdo podem evoluir para versões localizadas
- tratar URLs por idioma como decisão explícita quando essa necessidade surgir

### Aplicação prática neste projecto
- na fase inicial, o projecto pode arrancar com um idioma principal
- a arquitetura deve permitir adicionar um segundo idioma sem reestruturar o projecto inteiro
- páginas públicas, navegação e conteúdo de marketing devem ser desenhados com expansão futura em mente
- o rollout completo de conteúdo traduzido deve ser guiado por necessidade real do produto

## Estratégia para UI

### Camadas de UI

#### 1. UI genérica
Fica em `components/ui/`.

É a base visual reutilizável.

#### 2. UI de feature
Fica em `features/*/components`.

É composta a partir da UI genérica e da lógica da feature.

### Exemplo
- `components/ui/button.tsx`
- `features/contact/components/contact-form.tsx`

---

## Estratégia responsiva

A interface deve seguir uma abordagem **mobile-first**.

Isto significa que a experiência base deve ser desenhada e implementada primeiro para ecrãs pequenos, expandindo depois para tablet e desktop.

### Regras
- estilos base devem assumir mobile
- breakpoints devem ser usados para expandir layout e não para remendar problemas de desktop em mobile
- navegação, hero, secções e formulários devem funcionar bem em ecrãs pequenos
- componentes interativos devem ter áreas de toque confortáveis
- conteúdo prioritário deve aparecer cedo no viewport mobile
- a complexidade visual deve crescer com o espaço disponível

### Implicações práticas
- preferir stacking vertical por defeito
- adicionar colunas e layouts mais densos apenas em breakpoints maiores
- CTAs principais devem ser visíveis e fáceis de acionar em mobile
- formulários devem ser simples, curtos e legíveis em largura reduzida
- header e navegação devem ter uma estratégia explícita para mobile

---

## Estratégia para dados

Na fase inicial, a aplicação pode começar simples.

Quando existir persistência e autenticação, a separação deve manter-se.

### Regras
- acesso a dados deve ficar em `services/` da feature ou em infraestrutura partilhada
- validação deve acontecer com schemas
- componentes não devem conter lógica de acesso a dados complexa
- parsing e mapeamento devem ser explícitos

---

## Estratégia de rendering

O projecto deve seguir uma abordagem **server-first** compatível com o modelo moderno do Next.js.

### Regras
- usar Server Components por defeito
- usar Client Components apenas quando houver necessidade real de interatividade, estado no cliente ou APIs do browser
- evitar adicionar `"use client"` sem motivo claro
- reduzir ao mínimo o JavaScript enviado para o browser

### Aplicação prática neste projecto
- páginas públicas de marketing devem ser preferencialmente renderizadas no servidor
- conteúdo estático deve ser estático sempre que possível
- áreas privadas e experiências interativas podem exigir partes client-side
- a decisão entre estático, dinâmico e client-side deve ser explícita por feature ou rota

## Estratégia de conteúdo

O conteúdo do website deve ser tratado como parte importante da arquitetura, especialmente porque o produto depende de clareza, confiança, SEO e futura internacionalização.

### Regras
- separar, quando fizer sentido, conteúdo de apresentação e estrutura visual
- evitar copy hardcoded em excesso dentro de componentes reutilizáveis
- manter conteúdo de marketing suficientemente organizado para futura edição e localização
- preparar metadata e conteúdo para crescimento progressivo do website

### Aplicação prática
- secções de marketing podem começar simples, mas sem acoplar demasiado o texto à implementação visual
- FAQs, serviços, testemunhos e artigos devem poder evoluir sem refactor estrutural grande

## Fronteiras de módulo

Cada feature deve ter fronteiras claras e uma superfície pública pequena.

### Regras
- features não devem depender de detalhes internos de outras features sem necessidade clara
- imports entre features devem passar preferencialmente pela API pública exposta em `index.ts`
- cada feature deve esconder a sua estrutura interna sempre que isso reduzir acoplamento
- o objetivo é permitir refactor interno sem impacto desnecessário noutras áreas da aplicação

### Regra prática
- `app/` pode consumir features
- uma feature pode consumir `lib/`, `components/ui/` e `hooks/` globais
- uma feature só deve consumir outra feature quando isso fizer sentido de negócio e a dependência for explícita

## Estratégia de estado

A gestão de estado deve começar simples e crescer apenas quando houver necessidade real.

### Prioridade de abordagem
1. estado local no componente
2. estado partilhado dentro da feature
3. estado global apenas quando várias áreas independentes precisarem da mesma informação
4. estado de servidor tratado perto da origem dos dados

### Regras
- não introduzir state management pesado cedo demais
- evitar global state para dados que podem ser passados por props ou resolvidos perto da feature
- distinguir claramente estado de UI, estado de domínio e estado de servidor
- preferir simplicidade e previsibilidade

## Estratégia de validação

Todos os dados que entram no sistema devem ser validados de forma explícita.

### Regras
- validação no cliente serve UX
- validação no servidor serve segurança e integridade
- schemas devem ser usados para centralizar regras de entrada
- parsing e normalização devem ser explícitos
- nunca confiar apenas na validação feita no browser

### Aplicação prática
- formulários públicos devem validar no cliente para feedback rápido
- submissões devem voltar a validar no servidor
- autenticação e operações de admin devem validar sempre no servidor

## Observabilidade e métricas

Mesmo sendo um projecto pequeno, o sistema deve ser pensado para permitir visibilidade mínima sobre os fluxos críticos.

### Regras
- ações importantes devem poder ser observadas
- eventos de conversão devem poder ser medidos
- falhas relevantes devem poder ser investigadas
- tracking deve ser útil e discreto, sem introduzir complexidade prematura

### Exemplos de interesse neste projecto
- envio de formulário de contacto
- falha no envio de formulário
- login admin
- criação ou atualização de lead
- origem de lead e conversão de CTA

## Estratégia de tratamento de erros

A aplicação deve tratar erros de forma previsível, útil para o utilizador e clara para manutenção.

### Regras
- erros esperados devem produzir mensagens claras e apropriadas ao contexto
- erros inesperados devem falhar com segurança e ser registados quando fizer sentido
- componentes não devem esconder silenciosamente falhas relevantes
- fluxos críticos devem prever estados de loading, empty, success e error

### Exemplos de aplicação
- erro de validação num formulário deve mostrar feedback útil junto ao campo ou ao formulário
- erro de submissão deve informar o utilizador sem expor detalhes internos
- falhas em áreas privadas devem respeitar autenticação, sessão e permissões

## Princípios de segurança

O projecto deve seguir uma abordagem de **security by default**.

### Regras
- nunca confiar no cliente
- validar dados no servidor
- proteger rotas privadas
- não expor secrets no browser
- usar variáveis de ambiente de forma correta
- restringir o acesso admin ao mínimo necessário
- tratar autenticação e autorização como preocupações distintas

## Acessibilidade como baseline

A acessibilidade não deve ser tratada como melhoria opcional tardia.

### Regras
- usar HTML semântico
- garantir labels corretas em formulários
- manter navegação por teclado funcional
- garantir foco visível
- construir componentes reutilizáveis com acessibilidade de base
- evitar depender apenas de cor para comunicar estado

## Princípios de performance

A performance deve ser tratada como requisito de qualidade desde o início.

### Regras
- preferir rendering no servidor quando isso reduzir custo no cliente
- evitar Client Components desnecessários
- otimizar imagens e assets
- manter bundles pequenos
- lazy load apenas onde fizer sentido
- evitar abstrações que aumentem custo sem valor claro

---

## Estratégia de testes

A estratégia de testes deve crescer com a criticidade do produto.

### Regras
- lógica pura e helpers críticos beneficiam de testes unitários
- fluxos importantes devem ser cobertos com testes de integração quando começarem a estabilizar
- fluxos críticos do produto podem justificar testes end-to-end numa fase posterior
- não introduzir uma pirâmide de testes pesada antes da aplicação ter fluxos estáveis

### Fluxos que poderão justificar testes mais tarde
- submissão do formulário de contacto
- autenticação
- gestão de leads
- operações principais da área admin

## Estratégia para autenticação

A autenticação só entra quando houver necessidade real de área admin.

Quando for introduzida:
- a feature `auth` concentra a lógica de autenticação
- proteção de rotas pode usar middleware
- roles mínimas devem ser simples
- evitar sistema de permissões complexo demasiado cedo

Estrutura provável:

```txt
features/
  auth/
    components/
    hooks/
    services/
    schemas/
    types/
```

---

## Estratégia para área admin

A área admin deve ser mínima e focada em valor operacional.

Objetivos principais:
- ver leads
- atualizar estado de leads
- consultar mensagens
- editar conteúdo essencial

Evitar no início:
- CMS demasiado complexo
- dashboards cheios de métricas irrelevantes
- workflows administrativos pesados

---

## Naming conventions

### Pastas
Usar `kebab-case`.

Exemplos:
- `contact-form`
- `lead-status`

### Ficheiros
Usar `camelCase` por defeito.

Exceções:
- ficheiros de componentes React podem usar `PascalCase` quando o nome do ficheiro acompanha o nome do componente
- ficheiros de tipos podem manter o sufixo por domínio, por exemplo `auth.types.ts`

Exemplos:
- `contactForm.tsx`
- `useContactForm.ts`
- `formatContactOrigin.ts`
- `auth.types.ts`

### Componentes React
Usar `PascalCase`.

Exemplos:
- `ContactForm`
- `LeadStatusBadge`

### Hooks
Começar sempre por `use`.

Exemplos:
- `useLogin`
- `useContactForm`

### Tipos
Agrupar por domínio quando fizer sentido.

Exemplos:
- `auth.types.ts`
- `lead.types.ts`

---

## Imports

Usar alias `@/*`.

### Exemplos

```ts
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/features/contact"
import { cn } from "@/lib/utils"
```

### Regras
- preferir imports absolutos com alias
- evitar caminhos relativos longos
- manter fronteiras entre features claras

---

## Barrel exports

Pode existir `index.ts` por feature para expor API pública.

### Exemplo

```txt
features/
  contact/
    index.ts
```

Boa prática:
- exportar apenas o necessário
- não esconder estrutura em excesso
- não criar barrels gigantes globais no início

---

## Regras de crescimento

### Quando adicionar uma nova feature
1. criar pasta em `features/`
2. adicionar apenas as subpastas necessárias
3. expor API mínima com `index.ts` se fizer sentido
4. ligar à rota em `app/` caso exista interface pública

### Quando extrair código da feature para global
1. confirmar reutilização real
2. confirmar que o conceito é agnóstico ao domínio
3. mover para `components/ui`, `lib` ou `hooks`
4. atualizar imports

---

## Anti-patterns a evitar

- criar tudo global demasiado cedo
- misturar lógica de domínio em `app/`
- componentes com demasiada lógica de dados
- hooks globais que na verdade pertencem a uma feature
- utilitários genéricos com nomes vagos
- abstrações sem uso real
- pastas gigantes tipo `services/` para todo o projecto
- acoplamento entre features sem necessidade

---

## Exemplo de evolução esperada

### Início do projecto

```txt
src/
  app/
  features/
    marketing/
    contact/
  components/
    ui/
  lib/
  hooks/
  styles/
  messages/
```

### Fase intermédia

```txt
src/
  app/
  features/
    marketing/
    contact/
    leads/
    auth/
    admin/
  components/
    ui/
  lib/
  hooks/
  styles/
  messages/
```

### Fase mais madura

```txt
src/
  app/
  features/
    marketing/
    contact/
    blog/
    leads/
    auth/
    admin/
    scheduling/
  components/
    ui/
  lib/
  hooks/
  styles/
  messages/
```

---

## Resumo operacional

### Regras principais
- organizar por feature
- manter local-first
- usar global apenas para shared real
- separar UI genérica de lógica de domínio
- manter páginas finas no App Router
- aplicar mobile-first na UI
- preparar i18n cedo
- usar server-first por defeito
- validar dados de forma explícita
- tratar segurança, acessibilidade, observabilidade e performance como preocupações base
- crescer por necessidade e não por antecipação

### Objetivo final
Construir um projecto que seja:
- fácil de navegar
- fácil de manter
- simples de evoluir
- preparado para expansão de conteúdo e internacionalização
- robusto nas decisões de frontend e backend
- adequado ao tamanho real do produto
