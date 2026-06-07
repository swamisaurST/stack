# STACK Web Prototype Navigation Rail


Use this reference for the dark collapsible left navigation rail used in local React STACK prototypes. This is **prototype review chrome**, not Sitetracker product UI.

Common uses:

- Multi-screen React prototypes with hash routes (`#/context`, `#/profile`, …).
- Design review sessions where reviewers need quick screen jumps without leaving the STACK shell preview.
- Wizard flows where step numbers and utility screens share one navigation registry.

## Inheritance

This reference owns prototype-only navigation rail layout, collapse behavior, and visual treatment.

Use STACK product references for everything inside the main workspace:

- `STACK-WEB-GLOBAL-HEADER.md` and `STACK-WEB-COMPONENT-TITLE-GROUP.md` for the product shell.
- `STACK-WEB-LAYOUT.md` for page layout models inside the main pane.

Do not ship this rail in production LWC, Storybook product stories, or customer-facing Salesforce surfaces unless a designer explicitly approves prototype chrome for a demo environment.

## Purpose

The prototype navigation rail gives reviewers a persistent left panel to jump between prototype screens while the main pane renders the locked STACK web shell and workflow content.

It is not:

- the Salesforce app launcher or org navigation.
- a product left hand panel for record context (see `STACK-WEB-RIGHT-HAND-PANEL.md` for contextual inspectors on the right).
- a substitute for in-page master-detail lists.

## When To Use

- A local hosted React prototype has three or more review screens.
- Screen order matters and should mirror a wizard or flow diagram.
- Reviewers need to collapse the rail to inspect full-width STACK shell content.

## When Not To Use

- The deliverable is Figma, Pencil, or Markdown-only.
- The surface is production Sitetracker web UI.
- Navigation belongs in the product title row or page tabs inside the STACK shell.

## Rail Anatomy

1. Brand row — Sitetracker lettermark (expanded) or mark only (collapsed).
2. Collapse toggle — icon button at the top of the rail.
3. Prototype intro — eyebrow + prototype title (expanded only).
4. Screen sections — grouped links with step badges (Wizard, Utility, …).
5. Footer notes — STACK references used by the prototype (expanded only).

### Dimensions

| State | Rail width | Notes |
|---|---|---|
| Expanded | `248px` | Default review width |
| Collapsed | `56px` | Step badges remain tappable; labels hidden |
| Medium breakpoint | `220px` expanded | Optional; collapse still wins when active |

Background: `#1D2D34`. Text: white at ~86% opacity; active link uses brand teal overlay.

### Text color tokens

| Element | Color | Notes |
|---|---|---|
| Rail container | `#ffffff` | Base inherited color for badges and links |
| Eyebrow | `rgba(255, 255, 255, 0.6)` | Uppercase prototype label |
| Prototype title | `#ffffff` | Primary rail heading |
| Section heading (`h2`) | `rgba(255, 255, 255, 0.55)` | Wizard / Utility group labels |
| Link label | `rgba(255, 255, 255, 0.86)` | Default screen name |
| Link label (hover/active) | `#ffffff` | Full white on interaction |
| Footer | `rgba(255, 255, 255, 0.5)` | STACK refs note |
| Footer `code` | `rgba(255, 255, 255, 0.75)` | Reference names in footer |

### Host isolation (required)

When the rail is embedded inside a light-themed host (for example the STACK component gallery), global `p` and `h2` color rules can override rail text and make labels invisible on the dark background.

Scope all rail text colors under `.prototype-rail` with explicit selectors:

- `.prototype-rail p.prototype-rail-eyebrow`
- `.prototype-rail p.prototype-rail-title`
- `.prototype-rail .prototype-rail-section h2`
- `.prototype-rail .prototype-rail-footer` and `.prototype-rail .prototype-rail-footer code`

Do not rely on inheritance from `.prototype-rail { color: #ffffff }` alone for `p` and `h2` children.

## Collapse Behavior

Rules:

- Collapsing the rail must increase main workspace width; do not overlay the STACK shell.
- Preserve the user's current screen selection when toggling collapse.
- Persist collapse preference in `localStorage` under a prototype-specific key (recommended: `stack-prototype-rail-collapsed`).
- Animate width and label opacity (~180ms); avoid layout jank in the main pane.
- Collapsed links expose their label through `title` and remain keyboard reachable.

Toggle control:

- Placement: top of the rail beside the brand row; stacks vertically under the compact mark when collapsed.
- Icon: rotate `chevrondown` utility icon — points left when expanded (collapse), right when collapsed (expand).
- Accessible name: `Collapse prototype navigation` / `Expand prototype navigation`.
- Expose `aria-expanded` on the rail container and toggle.
- Toggle `aria-controls` must reference the main workspace element (for example `id="prototype-main"`), not the rail itself.

### Collapsed layout contract

When collapsed, these rules prevent the common layout bugs found in early implementations:

| Element | Expanded | Collapsed |
|---|---|---|
| Intro, footer, section headings | Visible | `display: none` — must not participate in flex layout |
| Link labels | Visible beside badge | `max-width: 0`, `flex: 0 0 0`, `opacity: 0`, `overflow: hidden` — must not reserve horizontal space |
| Link rows | `gap: 10px`, left-aligned | `gap: 0`, `width: 100%`, `justify-content: center` — badge centered in rail |
| Brand row | Lettermark + toggle side by side | Compact mark centered; `overflow: hidden` on brand container during width transition |
| Rail column gap | `16px` | `8px` between remaining flex children |
| Main grid | `--prototype-rail-width: 248px` | Parent grid sets `--prototype-rail-width: 56px` via `:has(.prototype-rail[data-collapsed="true"])` |

Do **not** hide collapsed text with `visibility: hidden` or `height: 0` alone — flex children still reserve space and misalign step badges.

## Link Structure

Each screen link includes:

- Step badge — circular `22×22` index for wizard steps; small square marker for utility screens.
- Label — screen name (hidden when collapsed).
- Current state — `aria-current="page"` on the active route.

Register screens in one shared module (for example `flowRegistry.js`) so the rail, wizard stepper, and flow diagram stay in sync.

## Layout Relationship

The host app uses a two-column grid:

```text
[ prototype rail | STACK shell + page content ]
```

The rail column width follows `--prototype-rail-width`. The main column is `minmax(0, 1fr)`.

On small mobile widths (`≤760px`), the expanded rail may stack above the main pane. When collapsed, keep the `56px` sidebar beside the main pane so reviewers still gain horizontal workspace — do not let a collapsed rail span full viewport width.

## Required States

| State | Requirement |
|---|---|
| Expanded | Full labels, section headings, and footer visible |
| Collapsed | Compact brand mark, step badges only, toggle visible |
| Active route | Current screen highlighted with brand teal selection |
| Hover/focus | Link row highlight and visible focus ring on toggle and links |

## Accessibility

- Rail container: `aria-label="Prototype navigation"`.
- Toggle: explicit expand/collapse label; do not rely on icon alone.
- Collapsed links: `title` attribute or visually hidden text for screen names.
- Keyboard: toggle and all links reachable in logical tab order.

## Implementation Contract

### Host layout

```css
.prototype-app {
  --prototype-rail-width: 248px;
  display: grid;
  grid-template-columns: var(--prototype-rail-width) minmax(0, 1fr);
  transition: grid-template-columns 180ms ease;
}

.prototype-app:has(.prototype-rail[data-collapsed="true"]) {
  --prototype-rail-width: 56px;
}
```

The width variable must be set on the **parent grid**, not only on the rail element, so the main workspace expands when collapsed.

### Required class names

| Class | Role |
|---|---|
| `.prototype-app` | Two-column host grid |
| `.prototype-rail` | Rail container; `data-collapsed="true"` when collapsed |
| `.prototype-rail-top` | Brand row + toggle |
| `.prototype-rail-brand` | Lettermark / compact mark wrapper |
| `.prototype-rail-brand-full` | Expanded lettermark |
| `.prototype-rail-brand-compact` | Collapsed mark only |
| `.prototype-rail-toggle` | Collapse/expand button |
| `.prototype-rail-toggle-icon` | Rotated `chevrondown.svg` |
| `.prototype-rail-intro` | Eyebrow + prototype title |
| `.prototype-rail-section` | Wizard / utility group |
| `.prototype-rail-link` | Screen jump button |
| `.prototype-rail-link-step` | Step badge (`22×22`) |
| `.prototype-rail-link-step-utility` | Square utility marker variant |
| `.prototype-rail-link-label` | Screen name |
| `.prototype-rail-footer` | STACK refs note |
| `.prototype-main` | Main workspace (`id="prototype-main"` for `aria-controls`) |

### Component structure

Reference: `design/prototypes/site-contractor-selection/src/components/PrototypeNavRail.jsx`.

- State: `collapsed` boolean, persisted to `localStorage` key `stack-prototype-rail-collapsed`.
- Props: `currentSlug`, `onNavigate(slug)`.
- Screen list: import from shared `flowRegistry.js` — never duplicate nav metadata in the component.
- Collapsed links: set `title={step.label}` when `collapsed` is true.

### Responsive rules

```css
@media (max-width: 1080px) {
  .prototype-app:not(:has(.prototype-rail[data-collapsed="true"])) {
    --prototype-rail-width: 220px;
  }
}

@media (max-width: 760px) {
  .prototype-app {
    grid-template-columns: 1fr;
  }

  .prototype-app:has(.prototype-rail[data-collapsed="true"]) {
    grid-template-columns: var(--prototype-rail-width) minmax(0, 1fr);
  }
}
```

## Implementation Targets

| Destination | Guidance |
|---|---|
| React prototype | Extract `PrototypeNavRail.jsx`; copy collapsed CSS contract from reference prototype `styles.css` |
| Gallery | Canonical specimen at `#prototype-nav-rail`; keep CSS in sync with reference prototype |
| LWC / production | Do not implement unless explicitly approved |

## Gallery Reference

Canonical browser-rendered reference in the STACK component gallery (`#prototype-nav-rail`). Verified 2026-06-07.

- Gallery: `gallery` at `http://localhost:4192/#prototype-nav-rail`
- Part verification: `gallery/screenshots/prototype-nav-rail-part-verified-2026-06-07.png`
- Reference prototype: `design/prototypes/site-contractor-selection` at `http://localhost:4193`
- Gallery index: `references/GALLERY-REFERENCE.md`

## Related References

- `workflows/prototype.md` — workflow for building multi-screen React prototypes
- `STACK-WEB-LAYOUT.md` — workspace layout inside the main pane
- `STACK-WEB-GLOBAL-HEADER.md` — locked product shell rendered beside the rail
- `STACK-WEB-RIGHT-HAND-PANEL.md` — product contextual panel (right side; different pattern)
- `LAWS.md` - product prototypes live outside the kit scaffold folder

## Verification Checklist

Before handoff, verify:

- Collapsing the rail widens the STACK shell preview without hiding primary actions.
- Active route remains selected after collapse/expand.
- Collapse preference persists across reload when storage is available.
- Rail styling is clearly prototype chrome, not product navigation.
- **Collapsed:** step badges are centered in the `56px` rail; labels do not reserve horizontal space.
- **Collapsed:** intro, footer, and section headings are fully removed from layout (`display: none`).
- **Collapsed:** toggle chevron points right; brand shows compact mark only.
- **Collapsed mobile:** rail stays `56px` wide beside main pane, not full-width stacked.
- Toggle `aria-controls` references the main workspace element.
- **Text visibility:** eyebrow, prototype title, section headings, and footer use scoped white tokens — not host page `p`/`h2` colors.
