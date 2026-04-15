

# Fase 0 — Checklist técnica

## Objetivo da fase

Criar uma base técnica sólida, simples e consistente para o projecto.

No fim desta fase, o projecto deve:
- arrancar sem problemas
- ter estrutura limpa
- seguir as regras definidas em `docs/arquitecture.md`
- ficar preparado para internacionalização futura sem refatoração estrutural grande
- estar pronto para começar a construir a homepage e o website público

---

## Definição de pronto da fase

Uma task desta fase só deve ser considerada concluída quando:
- a implementação está a funcionar localmente
- a estrutura está consistente com a arquitetura definida
- não foi introduzida complexidade desnecessária
- o código base está mais claro, não mais confuso

A fase fica concluída quando:
- [ ] o projecto arranca com `pnpm dev`
- [ ] a estrutura principal existe
- [ ] a homepage base está limpa
- [ ] existe uma base mínima de UI reutilizável
- [ ] metadata e layout global estão preparados
- [ ] a base do projecto está preparada para i18n

---

## 1. Setup inicial do projecto

### Objetivo
Garantir que o projecto arranca com a stack certa e sem ruído desnecessário.

### Checklist
- [x] criar projecto com `pnpm create next-app`
- [ ] confirmar uso de App Router
- [x] confirmar TypeScript ativo
- [x] confirmar ESLint ativo
- [x] confirmar Tailwind CSS v4 ativo
- [ ] confirmar alias `@/*`
- [x] confirmar que o projecto arranca com `pnpm dev`
- [x] validar que não há erros iniciais no terminal

### Notas técnicas
- usar `src/` directory
- usar App Router como base de routing
- evitar instalar bibliotecas extra nesta fase sem necessidade clara

---

## 2. Limpeza do boilerplate inicial

### Objetivo
Remover código demo para ficar com uma base limpa e fácil de ler.

### Checklist
- [x] limpar conteúdo demo de `src/app/page.tsx`
- [ ] limpar estilos default que não interessam ao projecto
- [ ] rever `src/app/layout.tsx`
- [x] remover assets ou exemplos que venham do template e não tragam valor
- [x] deixar uma homepage mínima temporária

### Resultado esperado
- a app já não parece um template inicial
- o código inicial está reduzido ao essencial

---

## 3. Estrutura base de diretórios

### Objetivo
Criar a estrutura mínima alinhada com a arquitetura definida.

### Checklist
- [ ] criar `src/features`
- [ ] criar `src/components/ui`
- [ ] criar `src/lib`
- [ ] criar `src/hooks`
- [ ] criar `src/styles`
- [ ] criar `src/messages`

### Estrutura alvo

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

### Regra
Ainda não criar subestruturas grandes sem necessidade real.

---

## 4. Configuração de layout global

### Objetivo
Ter uma base visual e estrutural comum para toda a aplicação.

### Checklist
- [ ] rever `src/app/layout.tsx`
- [ ] definir estrutura base do documento
- [ ] configurar `lang`
- [ ] preparar `body` com classes globais base
- [ ] garantir que o layout suporta evolução futura de header/footer
- [ ] ligar estilos globais corretamente

### Resultado esperado
- existe um layout global limpo
- a aplicação tem um ponto central para estrutura comum

---

## 5. Metadata base da aplicação

### Objetivo
Preparar a base de SEO técnico e identidade do site.

### Checklist
- [ ] definir `title` base
- [ ] definir `description` base
- [ ] definir metadata mínima global
- [ ] preparar base para metadata por página no futuro
- [ ] garantir que a base de metadata pode evoluir para múltiplos idiomas

### Nota
Não é preciso fechar SEO completo nesta fase, apenas deixar uma base correta.

---

## 6. Estratégia base de internacionalização

### Objetivo
Preparar o projecto para suportar i18n mais tarde sem refatoração estrutural grande.

### Checklist
- [ ] definir idioma base inicial do produto
- [ ] decidir que o projecto arranca com i18n readiness e não full rollout
- [ ] preparar `src/messages` como ponto de evolução para conteúdos traduzíveis
- [ ] evitar hardcoded text em excesso em componentes reutilizáveis
- [ ] garantir que a estrutura de rotas e metadata pode evoluir para múltiplos idiomas
- [ ] registar decisão em `docs/technical-decisions.md`

### Regra
Nesta fase não é obrigatório implementar tradução real de páginas.

O objetivo é preparar a base e reduzir refactors futuros.

---

## 7. Estilos globais e tokens simples

### Objetivo
Definir uma base visual consistente sem criar um design system pesado.

### Checklist
- [ ] rever `globals.css`
- [ ] confirmar import correto do Tailwind v4
- [ ] definir estilos base de `html` e `body`
- [ ] definir max-widths ou containers padrão
- [ ] definir spacing base
- [ ] definir tipografia base
- [ ] criar base mínima de tokens/utilitários visuais se fizer sentido

### Regra
Manter esta fase simples.

Não transformar já esta parte num sistema complexo de theming.

---

## 8. Base de UI reutilizável

### Objetivo
Criar componentes simples que vão acelerar a construção das próximas fases.

### Checklist
- [ ] criar `Button`
- [ ] criar `Input`
- [ ] criar `Textarea`
- [ ] criar `Card`
- [ ] criar `Container`
- [ ] criar `Section`

### Regras
- [ ] componentes devem ser genéricos
- [ ] componentes não devem conter lógica de domínio
- [ ] naming deve seguir a convenção definida
- [ ] componentes devem funcionar bem em mobile
- [ ] componentes devem começar com acessibilidade básica
- [ ] componentes devem evitar acoplamento forte a copy fixa

### Resultado esperado
- existe uma pequena base de UI shared
- a Fase 1 pode reutilizar estes componentes

---

## 9. Utilitários partilhados

### Objetivo
Centralizar helpers realmente transversais.

### Checklist
- [ ] criar `src/lib/utils.ts`
- [ ] adicionar `cn`
- [ ] criar `constants` se houver necessidade real
- [ ] criar helpers pequenos de formatação apenas se já forem úteis

### Regra
Não criar utilitários vagos ou genéricos sem uso concreto.

---

## 10. Convenções e consistência

### Objetivo
Evitar decisões aleatórias logo no início do projecto.

### Checklist
- [ ] validar que ficheiros seguem convenção definida em `docs/arquitecture.md`
- [ ] validar que pastas seguem convenção definida
- [ ] validar que imports usam alias `@/*` quando apropriado
- [ ] validar que `app/` está focado em routing e composição
- [ ] validar que lógica de domínio não está a ser colocada em `app/`
- [ ] validar que a base do projecto está coerente com a estratégia de i18n definida

### Resultado esperado
- a base já mostra consistência arquitetural

---

## 11. Variáveis de ambiente

### Objetivo
Preparar o projecto para integrações futuras sem improviso.

### Checklist
- [ ] criar `.env.example`
- [ ] documentar variáveis já necessárias, se existirem
- [ ] garantir que secrets não ficam hardcoded
- [ ] preparar base para futuras integrações de email, auth ou database

### Regra
Mesmo que ainda não existam integrações reais, vale a pena preparar a convenção.

---

## 12. Página base temporária

### Objetivo
Fechar a fase com uma homepage mínima limpa e intencional.

### Checklist
- [ ] criar homepage simples temporária
- [ ] incluir uma mensagem curta de placeholder coerente com o projecto
- [ ] usar `Container` e `Section` se já existirem
- [ ] validar comportamento responsivo básico
- [ ] evitar hardcoded text difícil de extrair mais tarde, quando fizer sentido

### Resultado esperado
- existe uma página inicial simples
- a app já parece uma base de projecto real

---

## 13. Verificação final da fase

### Checklist final
- [ ] `pnpm dev` funciona
- [ ] sem erros de lint relevantes
- [ ] estrutura de pastas criada
- [ ] layout global limpo
- [ ] metadata base definida
- [ ] estratégia base de i18n definida
- [ ] estilos globais revistos
- [ ] UI base criada
- [ ] utilitários base criados
- [ ] homepage temporária pronta
- [ ] arquitetura respeitada

---

## Ordem recomendada de execução

### Bloco 1 — Foundation
- [ ] setup inicial do projecto
- [ ] limpeza do boilerplate
- [ ] estrutura base de diretórios

### Bloco 2 — Base estrutural
- [ ] layout global
- [ ] metadata base
- [ ] estratégia base de internacionalização

### Bloco 3 — Base visual
- [ ] estilos globais
- [ ] componentes UI base
- [ ] utilitários partilhados

### Bloco 4 — Fecho da fase
- [ ] homepage temporária
- [ ] verificação final

---

## Fora de âmbito desta fase

Não fazer ainda:
- [ ] tradução completa de páginas
- [ ] locale switcher
- [ ] SEO multi-language completo
- [ ] autenticação
- [ ] base de dados
- [ ] dashboard admin
- [ ] gestão de leads real
- [ ] blog
- [ ] analytics avançados
- [ ] CMS
- [ ] otimizações prematuras

---

## Dúvidas a resolver durante a implementação

Estas decisões podem ser registadas em `docs/technical-decisions.md`:

- [ ] naming final de ficheiros de componentes React
- [ ] estratégia de tokens visuais mínima
- [ ] necessidade real de `constants.ts` já nesta fase
- [ ] estrutura inicial exata da homepage temporária
- [ ] solução concreta de i18n a adotar mais tarde

---

## Critério de transição para a Fase 1

Só avançar para a Fase 1 quando:
- [ ] a base técnica estiver estável
- [ ] a estrutura estiver coerente
- [ ] os componentes UI mínimos estiverem criados
- [ ] a preparação para i18n estiver definida
- [ ] houver confiança para começar a construir páginas públicas sem refatoração imediata