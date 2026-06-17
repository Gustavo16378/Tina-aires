# Tina Aires — Prompt de Implementação (Claude Code)
### Etapa 3 — Build do site institucional

---

## Contexto

Implementar a landing page institucional de **Tina Aires** (Miraltina Aires da Silva), profissional multidisciplinar de saúde, educação e desenvolvimento humano em Porto Nacional-TO. O design (HTML) já foi aprovado no Claude Design — usá-lo como referência visual.

## Stack obrigatória

- **React 19 + Vite + Tailwind CSS v3**
- **Tema CLARO, mobile-first** (breakpoints só `min-width`)
- Deploy Cloudflare Pages
- **Todo conteúdo em arrays no `/data`** — nunca hardcoded nos componentes (textos, áreas de atuação, links, etc.)
- Estrutura de componentes limpa, um componente por arquivo

## Identidade visual (tema claro)

Definir como design tokens no `tailwind.config.js`:
- **Fundo principal:** off-white cremoso `#F7F3EC`
- **Marca / títulos / navbar sólida / footer:** verde-petróleo escuro `#0F3B3A` → `#134E4A`
- **Acento quente (CTAs, destaques):** terracota/âmbar `#C2703D`
- **Texto corpo:** `#1E2B2A`
- **Detalhe / seções alternadas:** sálvia `#8FA99B`
- **Títulos:** Fraunces ou DM Serif Display · **Corpo:** Inter

## Seções

1. Hero — nome "Tina Aires", posicionamento multidisciplinar, CTA WhatsApp, espaço reservado para retrato (foto entra depois — usar placeholder).
2. Sobre — trajetória traduzida em autoridade (+20 anos, concursada há 29 anos, perita TJ-TO).
3. Áreas de Atuação — grid de 4 cards (Terapia TRG, Neuropsicopedagogia/TEA, Perícia Pedagógica, Coordenação em Saúde Pública).
4. Palestras — bloco destacado com CTA próprio.
5. Para quem é / Como ajudo — seção acolhedora.
6. Contato — WhatsApp como conversão principal + localização Porto Nacional-TO.
7. Footer discreto — "Desenvolvido por Gustavo Dev".

**Conversão:** CTAs abrem WhatsApp com mensagem pré-preenchida por contexto (ex: card Palestras → "Olá Tina, gostaria de informações sobre uma palestra").

---

## NAVBAR — requisitos técnicos obrigatórios

> Cores adaptadas ao tema claro da Tina. A **mecânica abaixo é obrigatória e não deve ser alterada** (não trocar inline style por Tailwind no overlay/painel, não usar `overflow:hidden` no scroll lock).

### Comportamento geral
- Fixa no topo (`position: fixed`).
- **Transparente quando no topo da página; fundo sólido com `backdrop-blur` ao rolar** (threshold: 40px de scroll). No tema claro, o fundo sólido é off-white com leve transparência + blur (ex: `#F7F3EC`/[0.85]), e os links/logo em teal escuro `#0F3B3A`.
- Logo à esquerda, links de navegação centralizados no desktop, botão CTA (WhatsApp, terracota) à direita.

### Hide-on-scroll (estilo Google mobile)
- Hook **`useScrollDirection`** que compara a posição atual do scroll com a anterior.
- Scroll para baixo → aplica `transform: translateY(-100%)` na navbar com transition suave.
- Scroll para cima → volta para `translateY(0)`.
- **Transição:** usar `transition-[transform,background-color,backdrop-filter,border-color]` (NÃO `transition-all`).
- **`border-b` sempre presente**, com `border-color` transicionando de `transparent` → cor de borda — elimina o flash da linha durante o slide de retorno. **No tema claro a borda é `#0F3B3A`/[0.08]** (não `white/[0.06]`).

### Menu mobile (hambúrguer)
- Ícone hambúrguer visível apenas em telas `< lg` (1024px); em teal escuro `#0F3B3A`.
- Ao clicar, abre painel que **desliza da direita para a esquerda** (`translateX`).
- **Painel com fundo sólido** — no tema claro da Tina, usar **teal escuro `#0F3B3A`** como contraste elegante sobre o off-white (texto/links do painel em off-white `#F7F3EC`).
- Atrás do painel, **overlay com blur** (`backdrop-filter: blur`) sobre o conteúdo da página, semi-transparente. No tema claro, tom escuro suave (ex: rgba do teal escuro, ~0.4).
- Clicar no overlay fecha o menu.
- Clicar em qualquer link → navega para a seção **e** fecha o menu.
- Botão "×" dentro do painel para fechar.

### Scroll lock (iOS-safe — obrigatório)
- Quando o menu abre, a página não pode ser rolada.
- Usar **`position: fixed` + `top: -scrollY` no body** (NÃO usar apenas `overflow: hidden`, pois não funciona no iOS Safari).
- Ao fechar, **restaurar a posição exata de scroll** em que o usuário estava.

### Implementação técnica (React) — obrigatória
- Usar **`ReactDOM.createPortal(menu, document.body)`** para renderizar overlay e painel diretamente no `document.body`, fora de qualquer stacking context da página.
- **NÃO** colocar overlay/painel dentro do `<nav>` — isso cria conflitos de z-index quando há seções com `transform` CSS (animações de scroll).
- Usar **estilos inline** (não classes CSS/Tailwind) no overlay e painel, para evitar conflitos de especificidade com classes globais que sobrescrevem `opacity`.
- Prefixo **`-webkit-backdropFilter`** para compatibilidade com iOS Safari.
- **z-index:** overlay `9998`, painel `9999`.
- Transição suave: overlay usa `opacity` com transition; painel usa `transform` com transition.
- Menu fechado: **`opacity: 0` + `pointerEvents: none`** no overlay (NÃO remover do DOM, para a transição funcionar).

---

## Padrões Gustavo Dev a seguir

- Navbar hide-on-scroll via `useScrollDirection`; mobile menu via `ReactDOM.createPortal`; iOS scroll lock via `position:fixed + top:-scrollY` (já detalhados acima).
- Todo conteúdo em arrays no `/data`.
- Componentes em `/components`, um por arquivo.
- Mobile-first, breakpoints só `min-width`.
