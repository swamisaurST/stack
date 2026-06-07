# STACK Mobile Quick Decisions


Use this file as the compact router for STACK mobile work. It does not replace `references/platform/STACK-MOBILE-DESIGN.md`.

If a row points to a STACK or Hero UI source, that source owns the details. Do not implement from this file alone when visual or behavioral precision matters.

## Source Order

1. STACK mobile rules in `references/platform/STACK-MOBILE-DESIGN.md`.
2. Hero UI for component structure, states, and behavior.
3. Shared STACK primitives where `references/platform/STACK-MOBILE-DESIGN.md` explicitly says they are shared with web.
4. Ask the designer when sources conflict or coverage is unclear.

## Component Router

| Need | Primary source | Load details |
|---|---|---|
| Top-level mobile screen | STACK | `references/platform/STACK-MOBILE-DESIGN.md` (Main logo header, app/home contexts) |
| Nested page or workflow screen | STACK | `references/platform/STACK-MOBILE-DESIGN.md` (Secondary dark page header) |
| Mobile colors and tokens | STACK | `references/platform/STACK-MOBILE-DESIGN.md` (color and type system) |
| Mobile typography | STACK | `references/platform/STACK-MOBILE-DESIGN.md` |
| Buttons, inputs, lists, sheets, badges | Hero UI | Hero UI defaults |
| Animation and motion | Hero UI | Hero UI defaults |
| Cross-platform primitive verification | STACK | `references/web/STACK-WEB-COLORS.md`, `references/web/STACK-WEB-TYPOGRAPHY.md` only when shared primitive comparison is requested |
| New mobile component | STACK workflow | `workflows/new-component.md` |

## Header Decisions

| Use case | Header pattern | Notes |
|---|---|---|
| App home, top-level destinations | `Header / Main` (`2:2441`, `390x116`) | Sitetracker logo + organization name + notification + avatar. No page title. |
| Nested page or workflow | `Header / Secondary Dark` (`2:2447`, `390x90`) | Back chevron + centered screen title + optional right-side workflow icons. |
| Light-mode mobile header | Not used | Light-mode mobile is out of scope. Do not use `Header / Tertiary Light`. |

Shared header values:

- Background: `UI / Top Bar`, `#1D2D34`
- Viewport reference width: `390px`
- Always include the iOS status bar inside the header component

## Workflow Skill

Pick exactly one workflow per task:

- `workflows/new-design.md`
- `workflows/audit.md`
- `workflows/transition.md`
- `workflows/new-component.md`

## Reference Loading

- Default load: `references/platform/STACK-MOBILE-DESIGN.md`.
- Do not load web references by default. Load them only when the designer asks for primitive cross-verification or shared primitive comparison.
- Do not load `references/platform/STACK-WEB-DESIGN.md` for mobile work.

## Overlap Rule

When STACK mobile and Hero UI overlap, STACK rules win for headers, color/typography tokens, and Sitetracker-specific primitives. Hero UI wins for component structure, states, and behavior.

If still unclear, ask the designer.
