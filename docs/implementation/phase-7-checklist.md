

# Phase 7 — Qualidade, conversão e robustez

## Objetivo da fase

Melhorar a qualidade global do produto, aumentar a capacidade de conversão e reforçar robustez técnica sem adicionar features apenas por adicionar.

No fim desta fase, o projecto deve:
- ser mais rápido e mais sólido
- oferecer melhor experiência ao visitante e ao consultor
- converter melhor com base em melhorias pragmáticas
- ter melhor base de performance, acessibilidade e segurança
- estar preparado para crescer com menos fricção técnica

---

## Definição de pronto da fase

Uma task desta fase só deve ser considerada concluída quando:
- melhora claramente qualidade percebida ou operacional
- não complica desnecessariamente a solução existente
- respeita prioridades reais do produto
- tem impacto verificável em UX, performance, credibilidade ou manutenção
- não é apenas polish estético sem valor funcional

A fase fica concluída quando:
- [ ] performance principal foi revista
- [ ] experiência de conversão foi melhorada
- [ ] acessibilidade foi reforçada
- [ ] segurança base foi revista novamente
- [ ] analytics e observabilidade úteis estão preparados
- [ ] o produto está mais sólido e mais credível

---

## 1. Revisão global de qualidade

### Objetivo
Identificar os pontos de maior impacto antes de otimizar aleatoriamente.

### Checklist
- [ ] rever fricções principais do website público
- [ ] rever fricções principais do admin
- [ ] identificar problemas de performance percebida
- [ ] identificar pontos fracos de conversão
- [ ] identificar debt técnica visível que já esteja a travar evolução

### Regra
Priorizar sempre o que traz mais valor real com menos complexidade.

---

## 2. Performance percebida do website público

### Objetivo
Melhorar velocidade percebida e fluidez da experiência pública.

### Checklist
- [ ] rever peso das páginas principais
- [ ] rever custo de componentes client-side
- [ ] reduzir JavaScript desnecessário quando possível
- [ ] rever componentes com renderização desnecessária
- [ ] rever oportunidades de simplificação de UI

### Regra
O objetivo não é otimizar tudo, é remover gargalos reais.

---

## 3. Otimização de imagens e assets

### Objetivo
Reduzir custo de carregamento sem sacrificar qualidade essencial.

### Checklist
- [ ] rever imagens do website
- [ ] otimizar formatos e tamanhos
- [ ] garantir uso correto de assets no Next.js
- [ ] evitar imagens pesadas sem valor claro
- [ ] validar impacto em mobile e redes mais lentas

---

## 4. Revisão de rendering e bundle

### Objetivo
Confirmar que a estratégia server-first continua a ser respeitada.

### Checklist
- [ ] rever uso de `"use client"`
- [ ] confirmar que componentes interativos são realmente os que precisam de cliente
- [ ] rever rotas com potencial para simplificação
- [ ] reduzir custo de bundle nas páginas mais importantes
- [ ] garantir consistência com a arquitetura definida

---

## 5. Revisão da homepage e páginas de maior valor

### Objetivo
Melhorar clareza, foco e conversão nas páginas que mais importam.

### Checklist
- [ ] rever homepage
- [ ] rever página de serviços
- [ ] rever página de contacto
- [ ] rever CTAs principais
- [ ] validar se a proposta de valor está imediatamente clara

---

## 6. Otimização de copy

### Objetivo
Melhorar a capacidade do conteúdo para comunicar e converter.

### Checklist
- [ ] rever headline principal
- [ ] rever supporting copy
- [ ] rever descrições de serviços
- [ ] rever copy do formulário de contacto
- [ ] rever linguagem de CTAs
- [ ] remover texto vago ou excessivamente genérico

### Regra
Copy deve ser clara, específica e orientada a valor.

---

## 7. Teste e melhoria de CTAs

### Objetivo
Tornar mais claros os próximos passos para o utilizador.

### Checklist
- [ ] rever consistência do CTA principal
- [ ] rever CTAs secundários
- [ ] validar posicionamento dos CTAs nas páginas-chave
- [ ] simplificar texto dos CTAs quando necessário
- [ ] remover CTAs redundantes ou concorrentes

---

## 8. Melhoria do formulário e conversão

### Objetivo
Reduzir fricção e aumentar clareza no principal ponto de conversão.

### Checklist
- [ ] rever número de campos
- [ ] rever labels e placeholders
- [ ] rever mensagens de erro
- [ ] rever feedback de sucesso
- [ ] rever ordem visual e hierarquia do formulário
- [ ] validar se o fluxo continua claro em mobile

---

## 9. Empty states, loading states e feedback states

### Objetivo
Melhorar robustez percebida da interface em cenários reais.

### Checklist
- [ ] rever empty states no website e admin
- [ ] rever loading states
- [ ] rever mensagens de sucesso e erro
- [ ] garantir consistência visual e textual
- [ ] evitar estados “mudos” ou confusos

---

## 10. Reforço de acessibilidade

### Objetivo
Subir o nível de acessibilidade para além do baseline inicial.

### Checklist
- [ ] rever headings e landmarks
- [ ] rever foco visível
- [ ] rever contraste
- [ ] rever formulários e feedback de erro
- [ ] rever elementos interativos em mobile
- [ ] rever experiência por teclado nas áreas principais

---

## 11. Revisão de segurança

### Objetivo
Confirmar que o crescimento do produto não introduziu fragilidades óbvias.

### Checklist
- [ ] rever fluxos públicos de input
- [ ] rever fluxo de auth e admin
- [ ] rever gestão de env vars
- [ ] rever proteção de rotas privadas
- [ ] rever exposição desnecessária de dados em logs ou respostas
- [ ] rever integrações externas existentes

---

## 12. Observabilidade e analytics úteis

### Objetivo
Passar de visibilidade mínima para uma base útil de aprendizagem do produto.

### Checklist
- [ ] decidir eventos realmente importantes a medir
- [ ] instrumentar eventos principais de conversão
- [ ] instrumentar eventos relevantes no admin quando fizer sentido
- [ ] manter tracking discreto e proporcional
- [ ] evitar ruído analítico sem valor operacional

### Exemplos possíveis
- clique em CTA principal
- submissão de contacto
- pedido de reunião
- lead criado
- lead atualizado

---

## 13. Revisão de SEO técnico

### Objetivo
Fechar lacunas técnicas que afetem descoberta e qualidade do site.

### Checklist
- [ ] rever metadata global e por página
- [ ] rever sitemap
- [ ] rever robots.txt
- [ ] rever links internos importantes
- [ ] rever estrutura de headings
- [ ] garantir coerência entre conteúdo, metadata e intenção da página

---

## 14. Revisão de UX do admin

### Objetivo
Melhorar eficiência operacional do consultor no backoffice.

### Checklist
- [ ] rever dashboard admin
- [ ] rever listagem de leads
- [ ] rever detalhe de lead
- [ ] rever filtros, pesquisa e notas se existirem
- [ ] remover fricções óbvias no workflow interno

---

## 15. Reforço de consistência visual

### Objetivo
Melhorar credibilidade percebida através de maior consistência de interface.

### Checklist
- [ ] rever spacing global
- [ ] rever tipografia
- [ ] rever consistência entre secções públicas
- [ ] rever consistência entre estados de UI
- [ ] rever consistência entre website público e admin quando aplicável

### Regra
O objetivo não é redesign total.

É reduzir ruído visual e inconsistência.

---

## 16. Gestão de dívida técnica visível

### Objetivo
Resolver problemas que já estejam a dificultar manutenção ou evolução.

### Checklist
- [ ] identificar duplicações óbvias
- [ ] identificar abstrações mal colocadas
- [ ] corrigir fronteiras mal definidas entre features
- [ ] limpar código morto ou legacy que já não traz valor
- [ ] evitar refactors amplos sem retorno claro

---

## 17. Preparação para testes mais úteis

### Objetivo
Melhorar a base para garantir qualidade contínua nos fluxos mais críticos.

### Checklist
- [ ] identificar fluxos mais críticos do produto
- [ ] decidir onde faz sentido introduzir testes primeiro
- [ ] rever lógica crítica que beneficia de testes unitários
- [ ] rever fluxos que podem justificar testes de integração
- [ ] evitar estratégia de testes pesada sem foco

---

## 18. Preparação para internacionalização de qualidade

### Objetivo
Garantir que a melhoria global do produto também facilita futura expansão multi-language.

### Checklist
- [ ] rever hardcoded text ainda desnecessário
- [ ] rever conteúdos e metadata com futura localização em mente
- [ ] validar consistência da estrutura preparada para i18n
- [ ] identificar onde a futura tradução terá mais impacto de UX e SEO

---

## 19. Revisão de mobile-first

### Objetivo
Confirmar que as melhorias continuam a respeitar a prioridade mobile.

### Checklist
- [ ] rever homepage em mobile
- [ ] rever contacto e marcação em mobile
- [ ] rever conteúdo longo em mobile
- [ ] rever admin em viewport reduzido quando aplicável
- [ ] garantir touch targets, legibilidade e hierarchy visual

---

## 20. Verificação final da fase

### Checklist final
- [ ] principais problemas de qualidade foram endereçados
- [ ] performance percebida foi melhorada
- [ ] imagens e assets foram revistos
- [ ] copy e CTAs foram melhorados
- [ ] formulário e conversão foram revistos
- [ ] acessibilidade foi reforçada
- [ ] segurança foi revista
- [ ] analytics/observabilidade útil foi preparada
- [ ] SEO técnico foi revisto
- [ ] dívida técnica mais visível foi reduzida
- [ ] arquitetura respeitada

---

## Ordem recomendada de execução

### Bloco 1 — Diagnosis
- [ ] revisão global de qualidade
- [ ] identificar gargalos de performance
- [ ] identificar fricções de conversão
- [ ] identificar debt técnica visível

### Bloco 2 — Public product improvements
- [ ] performance percebida
- [ ] imagens e assets
- [ ] rendering e bundle
- [ ] revisão de homepage e páginas-chave
- [ ] copy
- [ ] CTAs
- [ ] formulário

### Bloco 3 — Product robustness
- [ ] states de UI
- [ ] acessibilidade
- [ ] segurança
- [ ] SEO técnico
- [ ] mobile-first review

### Bloco 4 — Internal and long-term quality
- [ ] analytics e observabilidade
- [ ] UX do admin
- [ ] consistência visual
- [ ] dívida técnica
- [ ] preparação para testes
- [ ] i18n readiness
- [ ] verificação final

---

## Fora de âmbito desta fase

Não fazer ainda:
- [ ] redesign total do produto
- [ ] replatforming técnico
- [ ] otimizações micro sem impacto real
- [ ] stack enterprise de observabilidade
- [ ] framework complexo de experimentação
- [ ] tradução completa multi-language

---

## Dúvidas a resolver durante a implementação

Estas decisões podem ser registadas em `docs/technical-decisions.md`:

- [ ] métricas realmente importantes para o produto
- [ ] eventos prioritários para instrumentação
- [ ] principais gargalos atuais de performance
- [ ] áreas de maior debt técnica a resolver
- [ ] prioridade entre performance, conversão e robustez nesta fase

---

## Critério de transição para a Fase 8

Só avançar para a Fase 8 quando:
- [ ] o produto base estiver sólido
- [ ] as melhorias de qualidade e conversão mais importantes já tiverem sido tratadas
- [ ] existir clareza sobre que funcionalidades opcionais trazem valor real e quais devem continuar fora do scope