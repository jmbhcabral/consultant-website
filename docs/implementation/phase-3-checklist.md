

# Phase 3 — Conteúdo, confiança e descoberta

## Objetivo da fase

Reforçar a credibilidade do website e aumentar a sua capacidade de descoberta, sem transformar o projecto num sistema editorial pesado demasiado cedo.

No fim desta fase, o projecto deve:
- comunicar melhor profundidade e autoridade
- preparar base sólida para SEO e partilha social
- suportar crescimento de conteúdo relevante para o consultor
- continuar simples de manter
- ficar melhor preparado para futura internacionalização de conteúdo

---

## Definição de pronto da fase

Uma task desta fase só deve ser considerada concluída quando:
- o conteúdo acrescenta valor real ao utilizador
- a solução não introduz complexidade editorial desnecessária
- a arquitetura continua coerente com a organização por features
- a estrutura está preparada para crescimento progressivo
- existe cuidado com SEO, metadata e clareza do conteúdo

A fase fica concluída quando:
- [ ] existe estrutura mínima para conteúdo adicional
- [ ] existem páginas de confiança e profundidade editorial
- [ ] metadata está melhor preparada
- [ ] sitemap e robots estão resolvidos
- [ ] o site fica mais forte em SEO e credibilidade
- [ ] a base continua simples para evolução futura

---

## 1. Revisão da estratégia de conteúdo

### Objetivo
Confirmar que tipo de conteúdo faz sentido para o consultor e evita esforço editorial sem retorno.

### Checklist
- [ ] decidir quais os tipos de conteúdo prioritários
- [ ] distinguir conteúdo de credibilidade de conteúdo puramente informativo
- [ ] definir quais páginas trazem mais valor nesta fase
- [ ] evitar criar estruturas sem plano mínimo de manutenção

### Regra
O conteúdo deve existir para melhorar confiança, descoberta e conversão.

Não criar secções só porque “um site profissional deve ter”.

---

## 2. Estrutura de features de conteúdo

### Objetivo
Criar as features mínimas para suportar crescimento de conteúdo.

### Checklist
- [ ] criar ou rever `src/features/blog`
- [ ] criar ou rever `src/features/marketing` para secções adicionais
- [ ] criar estrutura mínima para páginas de conteúdo longo
- [ ] manter responsabilidades claras entre conteúdo, UI e metadata

### Regra
Começar com estrutura mínima suficiente.

Não transformar já esta fase num CMS interno.

---

## 3. Página de casos de estudo / projetos

### Objetivo
Criar uma página que aumente confiança através de exemplos concretos.

### Checklist
- [ ] decidir se a página será `case-studies`, `projects` ou equivalente
- [ ] criar estrutura da página
- [ ] definir formato base de caso de estudo
- [ ] incluir contexto, problema, abordagem e resultado quando aplicável
- [ ] incluir CTA relevante no final
- [ ] garantir clareza visual e textual

### Regra
Só usar casos reais ou exemplos credíveis.

Evitar inventar prova de trabalho.

---

## 4. Estrutura para artigos / insights

### Objetivo
Preparar uma base leve para conteúdo recorrente que possa ajudar em SEO, autoridade e partilha.

### Checklist
- [ ] decidir se o nome será `blog`, `insights` ou outro
- [ ] criar estrutura base da listagem
- [ ] criar estrutura base do detalhe de artigo
- [ ] garantir que a solução permite crescimento sem refactor grande
- [ ] evitar dependência precoce de tooling editorial pesado

---

## 5. Página de listagem de artigos

### Objetivo
Criar uma página simples para listar conteúdo editorial.

### Checklist
- [ ] criar rota de listagem
- [ ] definir card ou item de artigo
- [ ] incluir título, resumo e metadata mínima
- [ ] preparar estados de lista vazia, se necessário
- [ ] garantir boa leitura em mobile

---

## 6. Página de detalhe de artigo

### Objetivo
Criar uma página clara e legível para leitura de conteúdo longo.

### Checklist
- [ ] criar estrutura base de detalhe
- [ ] definir hierarchy visual do conteúdo
- [ ] incluir título, descrição, data e conteúdo principal
- [ ] preparar metadata por artigo
- [ ] garantir legibilidade em mobile e desktop
- [ ] incluir CTA ou próxima ação quando fizer sentido

---

## 7. Estratégia de conteúdo fonte

### Objetivo
Definir de onde vem o conteúdo nesta fase e como será gerido.

### Checklist
- [ ] decidir se o conteúdo inicial é local ao projecto
- [ ] organizar conteúdo de forma simples e previsível
- [ ] separar, quando fizer sentido, conteúdo e apresentação
- [ ] garantir que a estratégia atual pode evoluir mais tarde

### Regra
Nesta fase, a solução mais simples que permita editar conteúdo com segurança costuma ser a melhor.

---

## 8. Categorias, tags ou organização mínima

### Objetivo
Dar alguma estrutura ao conteúdo sem exagerar na taxonomia.

### Checklist
- [ ] decidir se vale a pena usar categorias
- [ ] decidir se vale a pena usar tags
- [ ] se usar, manter número reduzido e nomes claros
- [ ] evitar taxonomia excessiva demasiado cedo

---

## 9. FAQ

### Objetivo
Responder a dúvidas frequentes e melhorar clareza, confiança e potencial SEO.

### Checklist
- [ ] decidir se FAQ vive em página própria ou em secção
- [ ] definir perguntas realmente relevantes
- [ ] escrever respostas curtas e úteis
- [ ] evitar conteúdo redundante com outras páginas
- [ ] garantir boa legibilidade e escaneabilidade

---

## 10. Expansão da metadata

### Objetivo
Melhorar a base técnica de SEO e partilha social.

### Checklist
- [ ] rever metadata da homepage
- [ ] rever metadata das páginas públicas existentes
- [ ] definir metadata para páginas de conteúdo
- [ ] preparar títulos e descrições coerentes
- [ ] garantir consistência entre conteúdo e metadata

---

## 11. Open Graph base

### Objetivo
Melhorar a apresentação do site quando partilhado em plataformas externas.

### Checklist
- [ ] definir Open Graph base do website
- [ ] preparar Open Graph para páginas principais
- [ ] preparar base para Open Graph por artigo ou página de conteúdo
- [ ] garantir consistência entre OG e metadata principal

---

## 12. Sitemap

### Objetivo
Criar base técnica para descoberta e indexação do website.

### Checklist
- [ ] gerar sitemap
- [ ] garantir inclusão das rotas públicas relevantes
- [ ] validar se rotas futuras de conteúdo entram corretamente
- [ ] manter solução simples e alinhada com o App Router

---

## 13. Robots.txt

### Objetivo
Controlar instruções básicas de crawling.

### Checklist
- [ ] criar `robots.txt`
- [ ] validar regras mínimas adequadas ao website
- [ ] evitar bloquear conteúdo público relevante por engano
- [ ] preparar para futura evolução do website

---

## 14. Estratégia mínima de SEO on-page

### Objetivo
Melhorar a qualidade estrutural das páginas sem over-optimization.

### Checklist
- [ ] rever headings
- [ ] rever títulos de página
- [ ] rever descrições
- [ ] rever estrutura de links internos
- [ ] garantir clareza sem keyword stuffing
- [ ] validar que cada página tem propósito claro

---

## 15. Links internos e navegação de descoberta

### Objetivo
Melhorar navegação entre conteúdo e páginas de valor.

### Checklist
- [ ] criar ligações entre homepage e páginas de conteúdo
- [ ] ligar serviços a páginas relevantes
- [ ] ligar artigos a contacto ou serviços quando fizer sentido
- [ ] evitar links artificiais sem valor de UX

---

## 16. Estrutura de conteúdo preparada para i18n

### Objetivo
Garantir que o crescimento editorial não dificulta futura internacionalização.

### Checklist
- [ ] evitar conteúdo hardcoded em excesso em componentes reutilizáveis
- [ ] preparar conteúdos de marketing para futura localização
- [ ] garantir que metadata pode evoluir por idioma
- [ ] avaliar necessidade real de conteúdo traduzido nesta fase
- [ ] decidir se URLs por idioma são já uma preocupação ou apenas futura

### Regra
Nesta fase, o foco é readiness e não rollout completo multi-language.

---

## 17. Qualidade editorial mínima

### Objetivo
Garantir que o conteúdo parece profissional, claro e útil.

### Checklist
- [ ] rever clareza da escrita
- [ ] rever tom consistente
- [ ] evitar jargão desnecessário
- [ ] garantir que cada página responde a uma intenção clara
- [ ] validar coerência entre proposta de valor e conteúdo publicado

---

## 18. Responsividade e leitura de conteúdo longo

### Objetivo
Garantir boa experiência de leitura em mobile e desktop.

### Checklist
- [ ] validar largura de texto confortável
- [ ] validar spacing entre headings, parágrafos e listas
- [ ] validar leitura em mobile
- [ ] validar comportamento de imagens ou blocos visuais, se existirem
- [ ] manter hierarquia visual limpa

---

## 19. Acessibilidade do conteúdo

### Objetivo
Garantir que o conteúdo continua acessível e semanticamente correto.

### Checklist
- [ ] usar headings com hierarchy correta
- [ ] usar listas quando fizer sentido
- [ ] garantir links descritivos
- [ ] validar contraste e legibilidade
- [ ] evitar elementos visuais que dificultem leitura ou navegação

---

## 20. Observabilidade mínima de conteúdo

### Objetivo
Preparar base para perceber que conteúdo e páginas têm utilidade.

### Checklist
- [ ] identificar páginas e conteúdos importantes para medir no futuro
- [ ] preparar eventos ou métricas simples quando fizer sentido
- [ ] manter observabilidade leve e proporcional

---

## 21. Verificação final da fase

### Checklist final
- [ ] página de casos de estudo / projetos criada ou decidida
- [ ] estrutura de artigos criada
- [ ] listagem e detalhe de conteúdo preparados
- [ ] FAQ criada ou integrada
- [ ] metadata revista
- [ ] Open Graph preparado
- [ ] sitemap resolvido
- [ ] robots resolvido
- [ ] SEO on-page revisto
- [ ] base preparada para i18n futura
- [ ] arquitetura respeitada

---

## Ordem recomendada de execução

### Bloco 1 — Content foundations
- [ ] revisão da estratégia de conteúdo
- [ ] estrutura de features de conteúdo
- [ ] estratégia de conteúdo fonte
- [ ] taxonomia mínima

### Bloco 2 — Trust and depth
- [ ] página de casos de estudo / projetos
- [ ] FAQ
- [ ] links internos

### Bloco 3 — Editorial base
- [ ] estrutura para artigos
- [ ] listagem de artigos
- [ ] detalhe de artigo
- [ ] qualidade editorial

### Bloco 4 — SEO and discoverability
- [ ] metadata
- [ ] Open Graph
- [ ] sitemap
- [ ] robots.txt
- [ ] SEO on-page

### Bloco 5 — Quality pass
- [ ] i18n readiness
- [ ] responsividade
- [ ] acessibilidade
- [ ] observabilidade mínima
- [ ] verificação final

---

## Fora de âmbito desta fase

Não fazer ainda:
- [ ] CMS interno completo
- [ ] workflow editorial complexo
- [ ] gestão avançada de autores
- [ ] comentários
- [ ] motor de pesquisa interno complexo
- [ ] personalização avançada de conteúdo
- [ ] tradução completa de todo o conteúdo
- [ ] SEO internacional completo

---

## Dúvidas a resolver durante a implementação

Estas decisões podem ser registadas em `docs/technical-decisions.md`:

- [ ] nome final da secção editorial (`blog`, `insights`, outro)
- [ ] estrutura concreta de conteúdo fonte
- [ ] necessidade real de categorias ou tags
- [ ] formato base dos casos de estudo
- [ ] prioridade real entre SEO e profundidade editorial nesta fase

---

## Critério de transição para a Fase 4

Só avançar para a Fase 4 quando:
- [ ] o website tiver mais profundidade e credibilidade pública
- [ ] existir base técnica de conteúdo e SEO suficiente
- [ ] a estrutura estiver pronta para começar a área privada sem desorganizar o projecto