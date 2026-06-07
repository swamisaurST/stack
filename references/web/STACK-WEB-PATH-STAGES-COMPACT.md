# STACK Web Path Stages (Compact)


Compact decision view of `STACK-WEB-PATH-STAGES.md`. Use for audits, routing decisions, and small-model bootstrap. Promote to the full reference when implementing path stages, locking variants, or verifying chevron geometry.

Authoritative file: `STACK-WEB-PATH-STAGES.md`.

## Inheritance

- STACK owns path stage visuals, chevron geometry, and state colors for the web platform.
- SLDS 2 contributes path behavior, coaching overflow, keyboard operation, and ARIA listbox semantics.

## Tokens

- Stage height: `22px` (Figma specimen at `1024px` frame width)
- Minimum stage width: `55px`
- Label: `12px`, line height `22px`
- Filled stage fill: `#01726C` (Figma extracted; nearest STACK token `#00736C`)
- Filled stage hover: `#01564F`
- Incomplete fill: `#F3F2F2`
- Incomplete label: `#17191C`
- Optional specimen shell border: `#DDDBDA`, radius `4px`, padding `16px`

## States

| State | Fill | Label | Notes |
|---|---:|---:|---|
| Complete | `#01726C` | `#FFFFFF` | White checkmark |
| Current active | `#01726C` | `#FFFFFF` | Current picklist value |
| Current editable | `#FFFFFF` | `#00847C` | Outline / mark-current treatment |
| Incomplete | `#F3F2F2` | `#17191C` | Hover to `#DDDBDA` |

## When To Promote To Full Ref

- Implementing path stages in code, Storybook, LWC, or a new scaffold.
- Verifying chevron overlap against the Figma specimen.
- Adding coaching, overflow, or mobile collapse behavior.
- Resolving conflicts between STACK colors and SLDS path defaults.
