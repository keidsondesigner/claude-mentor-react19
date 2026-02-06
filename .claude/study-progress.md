# Trilha de Aprendizado — React 19 + TypeScript + Next.js 15

## Fase 1 — React 19 + TypeScript (Fundamentos)

### 1. Fundamentos React
- [ ] Componentes funcionais e sua anatomia
- [ ] JSX e expressões TypeScript
- [ ] Props tipadas com `interface` e `type`
- [ ] Estado com `useState<T>` — tipagem explícita vs inferida
- [ ] Efeitos colaterais com `useEffect` — cleanup, dependências, quando NÃO usar
- [ ] Refs com `useRef<T>` — DOM refs vs valores mutáveis
- [ ] Listas e keys — por que index como key é problemático
- [ ] Renderização condicional — patterns e boas práticas
- [ ] Children tipados — `ReactNode`, `PropsWithChildren<T>`
- [ ] Eventos tipados — `React.MouseEvent`, `React.ChangeEvent`

### 2. React 19 — Novidades
- [ ] Server Components — o que são, quando usar, `"use client"`
- [ ] Server Actions — `"use server"`, formulários com actions
- [ ] `use()` hook — resolução de promises e contexts
- [ ] `useFormStatus()` — estado de submissão de formulários
- [ ] `useFormState()` — gerenciamento de estado de server actions
- [ ] `useOptimistic()` — atualizações otimistas na UI
- [ ] `useActionState()` — combinação de form state + action
- [ ] Melhorias no ref — ref como prop regular, cleanup functions
- [ ] `<Suspense>` melhorado — streaming SSR, loading states
- [ ] React Compiler — auto-memoização (conceito)

### 3. TypeScript Avançado para React
- [ ] Tipagem de Props — `interface` vs `type`, extends, intersection
- [ ] Generics em componentes — `<T,>` pattern
- [ ] Generics em hooks — custom hooks tipados
- [ ] Utility Types — `Partial`, `Required`, `Pick`, `Omit`, `Record`
- [ ] React Utility Types — `ComponentProps`, `HTMLAttributes`
- [ ] Inferência avançada — `as const`, `satisfies`
- [ ] Discriminated Unions — estados loading | error | success
- [ ] Type Guards — `is` keyword, narrowing
- [ ] Enums vs Union Types — quando usar cada um

### 4. Padrões de Composição
- [ ] Composição vs Herança
- [ ] Custom Hooks — extrair lógica, regras de nomenclatura
- [ ] Context Pattern — criar, tipar, consumir
- [ ] Render Props — pattern e quando é útil
- [ ] Compound Components — pattern tipo `<Select>` + `<Select.Option>`
- [ ] Container/Presentational — separação de lógica e apresentação
- [ ] Hooks como serviços — encapsular lógica de negócio

### 5. Arquitetura de Projetos
- [ ] Estrutura de pastas — feature-based vs layer-based
- [ ] Barrel exports — `index.ts` para API pública
- [ ] Path aliases — configuração de `@/`
- [ ] Separação de responsabilidades — UI, lógica, dados
- [ ] Colocation — manter arquivos relacionados juntos
- [ ] Naming conventions — PascalCase, camelCase

### 6. Gerenciamento de Estado
- [ ] useState — estado local simples
- [ ] useReducer — estado complexo com actions tipadas
- [ ] Context API — estado compartilhado em árvore
- [ ] Zustand — estado global leve e tipado
- [ ] TanStack Query (React Query) — estado do servidor, cache
- [ ] Quando usar cada um — fluxograma de decisão

### 7. Roteamento
- [ ] React Router v7 — createBrowserRouter, loaders, actions
- [ ] Layouts aninhados — `<Outlet />`
- [ ] Route guards — proteção de rotas autenticadas
- [ ] Lazy loading de rotas — `React.lazy()` + `Suspense`
- [ ] Error boundaries por rota

### 8. Formulários
- [ ] React Hook Form — `useForm<T>`, register, control
- [ ] Zod — schemas de validação, `z.infer<typeof schema>`
- [ ] zodResolver — integração RHF + Zod
- [ ] Validação condicional — `refine` e `superRefine`
- [ ] Form arrays — `useFieldArray`
- [ ] Server-side validation — client + server

### 9. Testes
- [ ] Vitest — configuração, matchers, mocks
- [ ] Testing Library — queries, userEvent, roles
- [ ] Testes de hooks — `renderHook`
- [ ] Testes de componentes — render, interação, asserção
- [ ] MSW (Mock Service Worker) — mock de APIs
- [ ] Testing patterns — Arrange-Act-Assert

### 10. Performance
- [ ] React.memo — quando usar
- [ ] useMemo e useCallback — memoização
- [ ] React Compiler — auto-memoização no React 19
- [ ] Code splitting — `React.lazy()`, dynamic imports
- [ ] Suspense — loading states granulares
- [ ] Virtualização — listas grandes
- [ ] Web Vitals — LCP, FID, CLS

---

## Fase 2 — Next.js 15 (Framework Fullstack)

### 15. Next.js 15
- [ ] Fundamentos do Next.js — App Router, estrutura
- [ ] Renderização — Server vs Client Components
- [ ] Roteamento no App Router — dinâmico, groups, parallel
- [ ] Server Actions — `useActionState`, revalidação
- [ ] Data Fetching e Caching — fetch, ISR, streaming
- [ ] Metadata e SEO — `generateMetadata`, sitemap
- [ ] Middleware — proteção de rotas, headers
- [ ] Autenticação — Better Auth, proteção de rotas
- [ ] Banco de Dados e ORM — Drizzle, migrations
- [ ] Pagamentos com Stripe — checkout, webhooks
- [ ] Estilização — Tailwind, shadcn/ui, next/font
- [ ] Deploy e Produção — Vercel, Docker, env vars
- [ ] Patterns Avançados — parallel routes, intercepting, optimistic updates
