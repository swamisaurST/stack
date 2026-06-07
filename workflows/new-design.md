# Workflow: New Design

Create a new screen, page, LWC, Storybook story, Figma frame, Pencil output, or Markdown spec from a brief.

## Task Progress

- [ ] STACK activated (`SYSTEM-PROMPT.md`, `LAWS.md`, `BOOTSTRAP.md`)
- [ ] Platform confirmed: web | mobile
- [ ] Destination and output location confirmed
- [ ] Project folder created or updated; path in `CONTEXT.md`
- [ ] Conversation run; major forks floated (`reasoning/CONVERSATION.md`)
- [ ] `## Hierarchy` block written (`reasoning/HIERARCHY.md`)
- [ ] Platform file loaded from `references/platform/`
- [ ] Component refs loaded by hierarchy only (`references/REFERENCES.md`)
- [ ] Gallery consulted if browser-rendered output is in scope
- [ ] Output produced after gates clear
- [ ] `HANDOFF.md` filled and pasted

## Bundle Quick Pick

| Task shape | Load (compact first) |
|---|---|
| Page with shell | `references/platform/STACK-WEB-DESIGN.md`, `references/web/STACK-WEB-GLOBAL-HEADER-COMPACT.md`, `references/web/STACK-WEB-COMPONENT-TITLE-GROUP.md`, `references/web/STACK-WEB-LAYOUT.md` |
| Table or list page | platform web file, `references/web/STACK-WEB-TABLE-COMPACT.md`, `references/web/STACK-WEB-LAYOUT.md` |
| Forms and controls | platform web file, `references/web/STACK-WEB-BUTTONS-COMPACT.md` |
| Mobile screen | `references/platform/STACK-MOBILE-DESIGN.md` |
| Icon pick | `references/web/STACK-WEB-ICONS.md`, keyword index only |
| Pencil / Figma | `references/tools/PENCIL.md` or `references/tools/FIGMA.md` + relevant refs |

## Rules

- Vague "design this" → stop at the first-three-decisions gate.
- Do not invent components when references cover the pattern (Law 8).
- Product output never inside `design/stack/` (Law 10).
