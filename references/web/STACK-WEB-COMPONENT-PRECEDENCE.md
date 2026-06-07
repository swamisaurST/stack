# STACK Web Component Precedence


Use this reference when a component could come from either a STACK web reference or SLDS 2.

## Decision Rule

For every component decision:

1. Check whether a STACK local reference covers the component or primitive.
2. If STACK covers it, use STACK for the documented visual structure and states.
3. If STACK does not cover it, use SLDS 2.
4. If STACK covers visuals but not behavior, use STACK visuals and SLDS 2 behavior/accessibility semantics.
5. If the sources conflict or coverage is unclear, ask the designer.

Do not blend STACK and SLDS 2 arbitrarily.

## Conflict Matrix

| Area | Primary source | SLDS 2 role | Handling |
|---|---|---|---|
| Page/workspace layout | STACK layout | Grid mechanics only | Use approved layout models; do not invent centered max-width shells. |
| Web header shell | STACK header references | None for visual shell | Always use the two-part STACK header. |
| Second-row navigation | STACK title group | Menu/keyboard semantics | STACK owns 9-dot/title/tabs; SLDS 2 can inform menu behavior. |
| Buttons | STACK buttons | Behavior/accessibility only | STACK owns button visuals, variants, and states. |
| Button groups | STACK buttons | Keyboard/selection semantics | STACK owns segmented-control visuals and selected state. |
| Tables | STACK table | Sorting, selection, treegrid, keyboard, pagination semantics | STACK owns density/anatomy; SLDS 2 fills behavior. |
| Compact list rows | STACK list row | Checkbox/action semantics | STACK owns row density and action icon sizing. |
| Path stages | STACK path stages | Keyboard/listbox/coaching semantics | STACK owns chevron visuals and state colors; SLDS 2 fills behavior. |
| Progress (non-path) | SLDS 2 | Primary | Use SLDS 2 progress bars/rings; apply STACK colors only when compatible. |
| Forms and inputs | SLDS 2 | Primary | Use SLDS 2 structure; apply STACK typography/color primitives. |
| Local tabs | SLDS 2 | Primary | STACK owns only global second-row tabs. |
| Cards | STACK card header | Card body/accessibility semantics | STACK owns title/icon/action header; uncovered body patterns use SLDS 2. |
| Right hand panel | STACK right hand panel | Accordion, edit-mode forms, menus | STACK owns panel chrome, local tabs, section headers, and read-only field grid; SLDS 2 fills behavior. |
| Icons | STACK icon database | LWC/SLDS mapping if needed | Search database, visually verify, then implement. |
| Typography | STACK typography | None unless designer approves fallback | Use SF Pro scale for web. |
| Colors | STACK colors | Uncovered semantic colors | Use STACK by purpose; SLDS 2 fills uncovered cases. |
| Pills (selection + badge) | STACK pills | Keyboard, ARIA, live-region semantics | STACK owns pill visuals, variants, and state colors; SLDS 2 fills behavior. |
| Modal/popover/tooltip/toast | SLDS 2 | Primary | Use SLDS 2; do not invent custom overlays. |
| Menus/dropdowns | SLDS 2 | Primary behavior source | STACK may own visual placement; SLDS 2 owns behavior. |
| New/custom components | New-component workflow | Fallback check before creation | Use only after STACK and SLDS 2 are insufficient. |
| Implementation APIs | Target stack source | Primary runtime truth | Verify React/LWC APIs separately; do not infer APIs from Figma. |

## Output Requirement

When a component uses both STACK and SLDS 2, state:

- what STACK provided.
- what SLDS 2 provided.
- what was visually verified.
- what remains a designer decision.
