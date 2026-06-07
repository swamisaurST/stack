# Manifest

Route every task into the minimum required files. All paths are relative to the kit root. This file is the single source of truth for routing; `bin/lint-paths.mjs` independently verifies that every path cited anywhere in the kit actually exists.

## Always Load

1. `SYSTEM-PROMPT.md`
2. `LAWS.md`
3. `ROLE.md`
4. `METHOD.md`

Load `HANDOFF.md` before the final response. Load `reasoning/` files when the task has ambiguity, greenfield design, or hierarchy decisions.

## Intent Router

| Intent | Workflow | Add these |
|---|---|---|
| New web screen or page | `workflows/new-design.md` | `references/platform/STACK-WEB-DESIGN.md`, component refs by hierarchy |
| New mobile screen | `workflows/new-design.md` | `references/platform/STACK-MOBILE-DESIGN.md` |
| React review prototype | `workflows/prototype.md` | shell, layout, `references/GALLERY-REFERENCE.md` if shell included |
| Pencil design | `workflows/new-design.md` | `references/tools/PENCIL.md`, relevant web/mobile refs |
| Figma design | `workflows/new-design.md` | `references/tools/FIGMA.md`, relevant web/mobile refs |
| LWC implementation | `workflows/new-design.md` | `references/tools/LWC.md`, web refs |
| Storybook story | `workflows/new-design.md` | `references/tools/STORYBOOK.md`, web refs |
| Audit or review only | `workflows/audit.md` | platform + audited-pattern refs only |
| Transition existing UI | `workflows/transition.md` | source artifact + target refs |
| New component | `workflows/new-component.md` | `references/web/STACK-WEB-COMPONENT-PRECEDENCE.md` + gap evidence |
| Vague "design this" | — | Stop at the first-three-decisions gate in `BOOTSTRAP.md` |

Pick exactly one workflow per task unless the designer asks for a multi-stage effort. Routing keywords: *prototype/multi-screen/wizard* → prototype; *audit/review/evaluate* → audit; *transition/modernize* → transition; *new component* → new-component; *new page/table/form/LWC/Storybook/Pencil/Figma* → new-design.

## Component Reference Lookup

Use `references/REFERENCES.md` to pick component references by hierarchy. Load narrowly — never bulk-load. Each component has a compact variant (decisions + tokens) and a full variant; load compact first, promote to full only on implementation or a fidelity dispute.

## Gallery And Visual Verification Triggers

Load `references/GALLERY-REFERENCE.md` when output is browser-rendered and shell, header, buttons, tables, layout, icons, or brand fidelity is in scope. Load `references/VISUAL-VERIFICATION.md` when shell icons, brand assets, or locked header controls are in scope. Skip both for Markdown-only, Pencil-only, or Figma-only work unless the designer asks for visual comparison.

## Forbidden Shortcuts

- Do not create product output before the first-three-decisions gate clears.
- Do not skip hierarchy because a reference exists.
- Do not invent a new component without `workflows/new-component.md`.
- Do not claim visual parity without evidence (Law 9).
- Do not read `references/web/icon-assets/STACK-WEB-ICONS-DATABASE.csv` in full; grep it narrowly. Do not bulk-load `references/web/icon-assets/exported-svg/`.
- Load only files inside this kit.
