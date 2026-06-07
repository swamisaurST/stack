# STACK Web Pills (Compact)


Compact decision view of `STACK-WEB-PILLS.md`. Use for audits, routing decisions, and small-model bootstrap. Promote to the full reference when implementing pills or locking variants.

Authoritative file: `STACK-WEB-PILLS.md`.

## Inheritance

- STACK owns pill visuals, variants, and state colors for the web platform.
- SLDS 2 contributes only behavior and accessibility semantics (keyboard, ARIA, live regions).

## Types

| Type | Prefix | Interactive | Use |
|---|---|---|---|
| Input Selection Pill | `stack-selection-pill` | Yes — remove via close | Selected filters, lookups, multi-select summaries |
| Badge Pill | `stack-badge-pill` | No — hover optional | Read-only status, category, metadata |

## Input Selection Pill Tokens

- Height: `26px`
- Radius: `4px`
- Padding: `3px 4px`
- Gap: `4px`
- Border: `1px #DDDBDA`
- Fill default: `#FFFFFF`; hover/focus: `#FAFAF9`
- Label: `Body 3` — `13px / 20px`, `#00847C`
- Remove icon: `16px`; default `#706E6B`; hover/focus `#00847C`
- Focus ring: `0 0 3px #0070D2`
- Stack wrap gap: `4px`

Leading icon containers: `20px`; record `#7F8DE1` square; avatar `#34BECD` circle.

## Badge Pill Tokens

- Height: `20px` plain, `22px` with icon
- Radius: `23px`
- Padding: `4px 8px`
- Label: `Label Bold` — `12px`, weight `700`, line height `100%`
- Icon: `14px`; gap `4px`
- Icon positions: `None`, `Left`, `Right`

## Badge Variants

| Variant | Fill | Stroke | Text |
|---|---|---|---|
| Default | `#F3F2F2` | none | `#080707` |
| Inverse | `#706E6B` | none | `#FFFFFF` |
| Light | `#FFFFFF` | `#DDDBDA` | `#080707` |
| Success | `#027E46` | none | `#FFFFFF` |
| Warning | `#FFB75D` | none | `#080707` |
| Error | `#C23934` | none | `#FFFFFF` |
| New | `#D9FFDF` | none | `#027E46` |
| Informational | `#D8EDFF` | none | `#16325C` |
| Error (Light) | `#FFDDE1` | none | `#A61A14` |
| Orange | `#FFF1EA` | none | `#DD7A01` |

## Gallery

- Hash: `#pills` in `gallery`
- Pattern: same as buttons — preview-state toolbar + one specimen per variant (no state/type matrix duplication)

## When To Promote To Full Ref

- Implementing selection pill remove behavior or focus management.
- Adding new badge semantic variants.
- Verifying a new variant against gallery part screenshots.
