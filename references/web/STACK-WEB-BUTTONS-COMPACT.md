# STACK Web Buttons (Compact)


Compact decision view of `STACK-WEB-BUTTONS.md`. Use for audits, routing decisions, and small-model bootstrap. Promote to the full reference when implementing buttons, locking new variants, or verifying inline icon color on filled buttons.

Authoritative file: `STACK-WEB-BUTTONS.md`.

## Inheritance

- STACK owns button visuals, variants, and states for the web platform.
- SLDS 2 contributes only behavior and accessibility semantics (keyboard, ARIA, form submission).

## Tokens

- Height: `32px`
- Border radius: `4px`
- Horizontal padding: `16px`
- Vertical padding: `1px`
- Label style: `Body 3`, `13px`, line height `20px`
- Icon positions: `None`, `Left`, `Right`
- Default widths from source: `66px` (no icon), `90px` (icon left), `90px` (icon right)

## Variants And Default Tokens

| Variant | Default fill | Default stroke | Default text | Use |
|---|---:|---:|---:|---|
| Brand | `#00847C` | none | `#FFFFFF` | primary page or workflow action |
| Brand Outline | `#FFFFFF` | `#00847C` | `#00847C` | secondary branded action |
| Neutral | `#FFFFFF` | `#DDDBDA` | `#00847C` | standard secondary action |
| Base | `#FFFFFF` | none | `#00847C` | low-emphasis text-like action |
| Destructive | `#C23934` | none | `#FFFFFF` | irreversible action |
| Destructive Outline | `#FFFFFF` | `#DDDBDA` | `#C23934` | secondary destructive action |
| Success | `#4BCA81` | none | `#080707` | success-only completion |
| Inverse | transparent | `#DDDBDA` | `#FFFFFF` | dark or inverse surfaces |

States covered in the full ref: `Default`, `Hover`, `Focus`, `Disabled`. Selected applies only to button-group segments.

## Button Groups

- Group height: `32px`
- Text segment width: `66px`
- Icon segment width: `32px`
- Supported counts: `2`–`7`
- Segment types: `Base Text`, `Inverse Text`, `Icon`, `Text and Icon`
- Right-position segments may include `#DDDBDA` stroke
- Use only for mutually exclusive view or mode switching

## Inline Icon Color Rule

Inline button icons must match label color for the active variant and state. Do not render utility SVGs with hardcoded gray fills inside filled brand, destructive, or success buttons.

Approved patterns:

1. Mask the utility SVG and set `background-color: currentColor`.
2. Inline SVG with `fill="currentColor"`.

Verify inline icon color on filled buttons with a part screenshot before marking implementation verified. Full state tables and screenshot artifacts live in `STACK-WEB-BUTTONS.md`.

## When To Promote To Full Ref

- Implementing buttons in code, Storybook, or a new scaffold.
- Locking a new variant or state.
- Resolving a hover, focus, or disabled treatment that is not in this compact view.
- Verifying gallery part screenshots after CSS changes.
