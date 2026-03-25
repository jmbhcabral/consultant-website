# Planeamento do projecto

## Objetivo do produto

Criar um website de consultoria com foco em:
- apresentar serviços com clareza
- gerar contactos qualificados
- facilitar marcação de contacto/reunião
- permitir gestão simples de conteúdo e leads
- evoluir de forma incremental sem overengineering

---

## Estratégia de implementação

A abordagem vai ser por **fases**, começando por uma base pequena, funcional e fácil de manter.

A ideia é esta:
1. primeiro construir a fundação técnica
2. depois lançar uma versão pública simples
3. depois adicionar captação de leads e valor real de negócio
4. só depois introduzir autenticação e área admin
5. por fim melhorar operações, conteúdo e conversão

---

## Fase 0 — Fundação do projecto

**Objetivo:** preparar a base técnica e a estrutura do código para crescer sem caos.

### O que implementar
- [ ] criar projecto Next.js com App Router
- [ ] configurar TypeScript
- [ ] configurar ESLint
- [ ] configurar Tailwind CSS v4
- [ ] configurar alias `@/*`
- [ ] definir estrutura base feature-based
- [ ] criar layout global base
- [ ] configurar página 404
- [ ] configurar metadata base da aplicação
- [ ] definir estratégia de internacionalização (i18n)
- [ ] preparar base arquitetural para múltiplos idiomas
- [ ] definir convenções de pastas e naming
- [ ] criar componentes UI base (button, input, textarea, card, section, container)
- [ ] criar utilitários partilhados (`cn`, helpers de formatação, constants)
- [ ] criar sistema simples de design tokens com spacing, typography e max-widths
- [ ] configurar variáveis de ambiente
- [ ] criar ficheiro `.env.example`

### Entregável da fase
- [ ] projecto arranca localmente sem problemas
- [ ] estrutura está limpa e preparada para evolução
- [ ] existe uma base de UI reutilizável

---

## Fase 1 — Website público simples

**Objetivo:** lançar uma versão mínima mas profissional do website.

### O que implementar
- [ ] homepage simples e credível
- [ ] header com navegação principal
- [ ] footer com contactos e links essenciais
- [ ] secção hero com proposta de valor clara
- [ ] secção de serviços
- [ ] secção “sobre” / apresentação do consultor
- [ ] secção de prova de confiança (clientes, testemunhos, métricas ou experiência)
- [ ] call to action principal para contacto
- [ ] página de serviços
- [ ] página sobre
- [ ] página de contacto
- [ ] formulário de contacto simples
- [ ] estados de loading, sucesso e erro no formulário
- [ ] layout responsivo
- [ ] navegação mobile
- [ ] páginas legais mínimas (privacidade e termos, se aplicável)
- [ ] definir idioma base do produto
- [ ] preparar estrutura de conteúdo compatível com i18n
- [ ] evitar texto hardcoded de forma a facilitar tradução futura

### Entregável da fase
- [ ] website público navegável
- [ ] mensagem do negócio clara
- [ ] utilizador consegue perceber serviços e entrar em contacto

---

## Fase 2 — Captação de leads com valor real

**Objetivo:** transformar o site numa ferramenta útil para o consultor, não apenas numa montra.

### O que implementar
- [ ] integrar envio real do formulário de contacto
- [ ] guardar leads numa base de dados
- [ ] definir modelo de lead
- [ ] registar nome, email, empresa, mensagem e origem
- [ ] criar validação de formulário no cliente e no servidor
- [ ] proteção anti-spam básica
- [ ] mensagem de confirmação clara para o utilizador
- [ ] notificação por email para novo lead
- [ ] opcional: auto-resposta simples ao contacto
- [ ] criar tabela/lista interna de leads para uso futuro na área admin
- [ ] instrumentar eventos básicos de conversão

### Entregável da fase
- [ ] o consultor recebe contactos reais
- [ ] os leads ficam registados
- [ ] o site começa a gerar valor operacional

---

## Fase 3 — Conteúdo que melhora confiança e descoberta

**Objetivo:** reforçar credibilidade e abrir espaço para SEO sem complicar demasiado.

### O que implementar
- [ ] página de casos de estudo / projetos
- [ ] estrutura para artigos ou insights
- [ ] página de listagem de artigos
- [ ] página de detalhe de artigo
- [ ] sistema simples de categorias ou tags
- [ ] secção de perguntas frequentes
- [ ] metadata por página
- [ ] Open Graph básico
- [ ] sitemap
- [ ] robots.txt
- [ ] estratégia mínima de SEO on-page
- [ ] preparar conteúdo para futura localização
- [ ] definir estratégia de URLs por idioma, se aplicável
- [ ] preparar metadata para múltiplos idiomas, se necessário
- [ ] avaliar necessidade real de conteúdo traduzido nesta fase

### Entregável da fase
- [ ] site com mais profundidade de conteúdo
- [ ] confiança reforçada
- [ ] base inicial para SEO e partilha social

---

## Fase 4 — Autenticação

**Objetivo:** preparar acesso reservado para gestão interna.

### O que implementar
- [ ] escolher estratégia de autenticação
- [ ] implementar login
- [ ] implementar logout
- [ ] proteger rotas privadas
- [ ] middleware para controlo de acesso
- [ ] sessão persistente
- [ ] tratar estados de utilizador autenticado / não autenticado
- [ ] criar página de login simples
- [ ] mensagens de erro de autenticação
- [ ] definir roles mínimas, se fizer sentido (ex: admin)

### Entregável da fase
- [ ] acesso privado funcional
- [ ] base pronta para área administrativa

---

## Fase 5 — Área admin mínima e útil

**Objetivo:** dar ao consultor controlo sobre os dados mais importantes sem criar um backoffice pesado.

### O que implementar
- [ ] dashboard admin simples
- [ ] resumo com métricas úteis
- [ ] listagem de leads
- [ ] detalhe de lead
- [ ] estado do lead (novo, contactado, qualificado, fechado, arquivado)
- [ ] pesquisa e filtros de leads
- [ ] notas internas por lead
- [ ] listagem de mensagens recebidas
- [ ] gestão básica de conteúdo do website
- [ ] edição simples de serviços
- [ ] edição simples de FAQs
- [ ] edição simples de testemunhos ou casos de estudo

### Entregável da fase
- [ ] consultor consegue operar leads sem tocar em código
- [ ] admin já resolve o essencial do dia a dia

---

## Fase 6 — Marcação e workflow operacional

**Objetivo:** reduzir fricção no processo comercial.

### O que implementar
- [ ] CTA para marcação de reunião
- [ ] integração com calendário externo ou formulário de pedido de reunião
- [ ] possibilidade de associar reunião a um lead
- [ ] estado do processo comercial por lead
- [ ] timeline simples de interações
- [ ] origem do lead (site, artigo, referral, campanha)
- [ ] campos adicionais relevantes para qualificação

### Entregável da fase
- [ ] site ajuda no processo comercial e não apenas na captação

---

## Fase 7 — Melhorias de conversão e qualidade

**Objetivo:** polir a experiência e melhorar resultados sem adicionar features só porque sim.

### O que implementar
- [ ] melhorar performance
- [ ] otimizar imagens
- [ ] melhorar acessibilidade
- [ ] rever copy das páginas principais
- [ ] testar CTAs
- [ ] melhorar UX do formulário
- [ ] melhorar empty states e feedback states
- [ ] adicionar analytics úteis e discretos
- [ ] rever SEO técnico
- [ ] rever segurança básica

### Entregável da fase
- [ ] produto mais sólido, rápido e credível
- [ ] melhor experiência para visitante e consultor

---

## Fase 8 — Funcionalidades opcionais (só se houver necessidade real)

**Objetivo:** evitar overkill e só implementar o que gerar valor claro.

### Candidatas a implementar
- [ ] newsletter
- [ ] multi-admin
- [ ] gestão avançada de artigos
- [ ] dashboard com métricas mais profundas
- [ ] exportação de leads
- [ ] integrações CRM
- [ ] automações de follow-up
- [ ] área privada para clientes
- [ ] formulários diferentes por serviço

### Regra desta fase
- [ ] só implementar após validar necessidade real

---

## Estratégia para internacionalização

A internacionalização deve ser tratada como uma preocupação arquitetural cedo no projecto, mas a tradução completa do produto só deve avançar quando houver necessidade real.

### Decisão
- [ ] preparar o projecto para i18n desde a base
- [ ] implementar primeiro i18n readiness, não full rollout
- [ ] traduzir conteúdo real apenas quando houver necessidade de negócio clara

### Distribuição por fases
- [ ] Fase 0: decisão arquitetural e preparação base
- [ ] Fase 1: estrutura compatível com múltiplos idiomas
- [ ] Fase 3: preparação de conteúdo, metadata e SEO para expansão futura
- [ ] fases posteriores: rollout completo apenas se justificar

---

## Roadmap recomendado de execução

### Iteração 1
- [ ] Fase 0
- [ ] Fase 1

### Iteração 2
- [ ] Fase 2

### Iteração 3
- [ ] Fase 3

### Iteração 4
- [ ] Fase 4
- [ ] Fase 5

### Iteração 5
- [ ] Fase 6
- [ ] Fase 7

### Iteração 6
- [ ] Fase 8 apenas se necessário

---

## MVP recomendado

Se o objetivo for lançar rápido sem perder qualidade, o MVP deve incluir:

- [ ] base técnica sólida
- [ ] homepage profissional
- [ ] páginas de serviços, sobre e contacto
- [ ] formulário funcional com persistência de leads
- [ ] notificação de novos contactos
- [ ] SEO básico
- [ ] base preparada para internacionalização futura

Isto já cria valor real sem entrar demasiado cedo em autenticação e admin.

---

## Critérios para decidir a próxima feature

Antes de implementar qualquer feature nova, validar sempre:

- [ ] resolve um problema real do consultor?
- [ ] melhora conversão, operação ou credibilidade?
- [ ] compensa o custo de manutenção?
- [ ] pode ser feita de forma simples?
- [ ] existe evidência de que é necessária agora?

---

## Notas

- priorizar sempre simplicidade
- começar com o mínimo funcional
- extrair abstrações só quando houver repetição real
- evitar backoffice pesado demasiado cedo
- preparar internacionalização cedo, mas traduzir apenas quando houver necessidade real
- o site deve funcionar como ativo comercial, não apenas como portefólio