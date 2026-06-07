# STACK Web Buttons


Use this reference for Sitetracker web buttons and button groups. Buttons are a STACK web primitive and do not inherit visual appearance, variants, or interaction states from SLDS 2.

## Source

- Figma file: [Sitetracker Web Design Library](https://www.figma.com/design/P7QZySjFIHNpkaCJ80yCHo/Sitetracker-Web-Design-Library?node-id=8964-2047&t=cgcwd0WOR9zFu8or-1)
- Source node ID: `8964:2047`
- Source node name: `Buttons - WIP`
- Extraction date: 2026-06-03
- Extraction method: Figma MCP metadata, Figma MCP screenshot, and read-only Figma plugin extraction of button variant properties.
- Screenshot check: screenshot captured through Figma MCP during extraction. The short-lived screenshot URL is not stored in this reference.

## Inheritance

This reference overrides SLDS 2 for Sitetracker web button and button-group visual styling.

Use SLDS 2 only for behavior and accessibility semantics not defined here, such as keyboard operation, disabled semantics, ARIA, and form submission behavior. Do not use SLDS 2 button colors, sizes, or variants when a STACK button rule exists.

## Button Anatomy

Default text button anatomy:

- Height: `32px`
- Border radius: `4px`
- Horizontal padding: `16px`
- Vertical padding: `1px`
- Label style: `Body 3`
- Label size: `13px`
- Label line height: `20px`
- Icon variants: `None`, `Left`, `Right`

Default icon-bearing button widths from source examples:

- No icon: `66px`
- Left icon: `90px`
- Right icon: `90px`

Agents must not infer arbitrary button sizes. If a layout needs a non-standard width, use content-driven sizing and preserve the `32px` height and `4px` radius unless the designer approves otherwise.

## Primary Button Types

The source includes `96` primary button variants:

- `Brand`
- `Brand Outline`
- `Neutral`
- `Base`
- `Destructive`
- `Destructive Outline`
- `Success`
- `Inverse`

Each type supports:

- states: `Default`, `Hover`, `Focus`, `Disabled`
- icon positions: `None`, `Left`, `Right`

## Button Type Usage

- `Brand`: primary page or workflow action. Use sparingly; there should normally be one dominant primary action in a view or section.
- `Brand Outline`: secondary branded action that still needs strong Sitetracker emphasis.
- `Neutral`: standard secondary action.
- `Base`: low-emphasis text-like action when the surrounding UI already provides structure.
- `Destructive`: irreversible or high-risk destructive action.
- `Destructive Outline`: secondary destructive action or destructive action that should not dominate the view.
- `Success`: positive completion action only when the action semantics are explicitly success-oriented.
- `Inverse`: action on dark, image, or inverse surfaces.

Do not use color for decoration. Button type must follow action semantics.

## Primary Button State Styling

### Brand

| State | Fill | Stroke | Text |
|---|---:|---:|---:|
| Default | `#00847C` | none | `#FFFFFF` |
| Hover | `#00847C` | none | `#FFFFFF` |
| Focus | `#00847C` | none | `#FFFFFF` |
| Disabled | `#C9C7C5` | none | `#FFFFFF` |

### Brand Outline

| State | Fill | Stroke | Text |
|---|---:|---:|---:|
| Default | `#FFFFFF` | `#00847C` | `#00847C` |
| Hover | `#FAFAF9` | `#00847C` | `#00847C` |
| Focus | `#FAFAF9` | `#00847C` | `#00847C` |
| Disabled | `#FFFFFF` | `#DDDBDA` | `#DDDBDA` |

### Neutral

| State | Fill | Stroke | Text |
|---|---:|---:|---:|
| Default | `#FFFFFF` | `#DDDBDA` | `#00847C` |
| Hover | `#FAFAF9` | `#DDDBDA` | `#00847C` |
| Focus | `#FAFAF9` | `#DDDBDA` | `#00847C` |
| Disabled | `#FFFFFF` | `#DDDBDA` | `#DDDBDA` |

### Base

| State | Fill | Stroke | Text |
|---|---:|---:|---:|
| Default | `#FFFFFF` | none | `#00847C` |
| Hover | transparent | none | `#00847C` |
| Focus | `#FFFFFF` | none | `#00847C` |
| Disabled | `#FFFFFF` | none | `#DDDBDA` |

### Destructive

| State | Fill | Stroke | Text |
|---|---:|---:|---:|
| Default | `#C23934` | none | `#FFFFFF` |
| Hover | `#A61A14` | none | `#FFFFFF` |
| Focus | `#A61A14` | none | `#FFFFFF` |
| Disabled | `#C9C7C5` | none | `#FFFFFF` |

### Destructive Outline

| State | Fill | Stroke | Text |
|---|---:|---:|---:|
| Default | `#FFFFFF` | `#DDDBDA` | `#C23934` |
| Hover | `#FAFAF9` | `#DDDBDA` | `#C23934` |
| Focus | `#FAFAF9` | `#DDDBDA` | `#C23934` |
| Disabled | `#FFFFFF` | `#DDDBDA` | `#DDDBDA` |

### Success

| State | Fill | Stroke | Text |
|---|---:|---:|---:|
| Default | `#4BCA81` | none | `#080707` |
| Hover | `#04844B` | none | `#FFFFFF` |
| Focus | `#04844B` | none | `#FFFFFF` |
| Disabled | `#C9C7C5` | none | `#FFFFFF` |

### Inverse

| State | Fill | Stroke | Text |
|---|---:|---:|---:|
| Default | transparent | `#DDDBDA` | `#FFFFFF` |
| Hover | `#FFFFFF` | none | `#00847C` |
| Focus | `#FFFFFF` | none | `#00847C` |
| Disabled | `#C9C7C5` | `#D8DDE6` | `#FFFFFF` |

## Button Groups

Button groups are segmented controls composed of sub-buttons.

The source includes:

- `37` button-group sub-button variants.
- `6` group container sizes.
- supported item counts: `2`, `3`, `4`, `5`, `6`, `7`.
- group height: `32px`.
- segment width: `66px` for text segments.
- icon segment width: `32px`.

Supported button-group segment types:

- `Base Text`
- `Inverse Text`
- `Icon`
- `Text and Icon`

Supported positions:

- `Left`
- `Center`
- `Right`

Supported states:

- `Default`
- `Hover`
- `Selected`
- `Disabled`

## Button Group Styling

### Base Text Segments

| State | Fill | Text |
|---|---:|---:|
| Default | `#FFFFFF` | `#00847C` |
| Hover | `#FAFAF9` | `#00847C` |
| Selected | `#00847C` | `#FFFFFF` |
| Disabled | `#FFFFFF` | `#DDDBDA` |

Right-position segments include a `#DDDBDA` stroke in the extracted source.

### Inverse Text Segments

| State | Fill | Text |
|---|---:|---:|
| Default | transparent or near-transparent white | `#FFFFFF` |
| Hover | `#FAFAF9` | `#00847C` |
| Selected | `#00847C` | `#FFFFFF` |
| Disabled | near-transparent white | `rgba(255,255,255,0.15)` |

Use inverse groups only on inverse/dark surfaces.

### Icon Segments

| State | Fill |
|---|---:|
| Default | `#FFFFFF` |
| Hover | `#FAFAF9` |
| Selected | `#00847C` |
| Disabled | `#FFFFFF` |

Icon segment color must be verified against the selected icon asset and state treatment. Icon-only segments require accessible labels.

## Button Group Usage

- Use button groups for mutually exclusive view or mode switching.
- Use selected state only when one segment represents the active mode.
- Do not use button groups as a cluster of unrelated actions.
- Do not exceed the extracted `7` item group without designer approval.
- Do not mix text and icon-only segments unless the source pattern or designer direction supports it.

## Icon Usage In Buttons

- Button icons must come from `STACK-WEB-ICONS.md`.
- Search the icon database narrowly and visually verify the selected icon before placing it in a button.
- Icon-only buttons and icon-only group segments require accessible labels.
- Do not invent icon names or use decorative icons in buttons.

### Inline Icon Color

Utility SVGs in the icon database often ship with a fixed gray fill such as `#706E6B`. That fill is correct for standalone utility icons, but it is wrong for inline button icons.

Inline button icons must match the button label color for the active variant and state:

- Brand default: white icon on `#00847C`
- Brand outline / neutral / base: brand-teal icon on white or transparent fill
- Destructive and success variants: follow the text color in the state tables above

Do not render inline button icons as raw `<img>` tags when the SVG fill is hardcoded. Use one of these approved patterns:

1. **Preferred:** mask the utility SVG and set `background-color: currentColor` so the icon inherits the button text color.
2. **Alternative:** inline SVG with `fill="currentColor"`.

Visually verify icon color on filled brand/destructive/success buttons with a part screenshot before marking a button implementation verified.

## Locked Gallery Reference

The component gallery is the locked browser-rendered reference for STACK buttons and button groups.

- Gallery path: `gallery`
- Gallery: `gallery` at `http://localhost:4192/#components`
- Reference implementation: `src/ButtonGallery.jsx`, `src/styles.css`
- Verification protocol: `references/VISUAL-VERIFICATION.md`

Locked gallery demo pattern:

- One control per variant in a shared showcase canvas.
- One shared preview-state toolbar for default, hover, focus, and disabled. Do not duplicate full variant rows per state.
- Variant layout uses flex wrap with consistent `16px` row gap and `20px` column gap.
- Each variant cell centers the control and its label beneath it.
- Icon-left and icon-right brand examples belong in the same variant canvas as the primary type row.

Locked verification artifacts:

| Artifact | Path |
|---|---|
| Variant spacing and canvas layout | `gallery/screenshots/buttons-spacing-verified-2026-06-07.png` |
| Brand inline icon color | `gallery/screenshots/button-icon-left-part-verified-2026-06-07.png` |

When implementing buttons in another scaffold, match this reference structure, token table, inline icon color behavior, and gallery spacing before adjusting for scaffold-specific layout constraints.

## When To Use Figma MCP

Use Figma MCP again if:

- the designer provides an explicit Figma reference.
- the designer asks the agent to compare this extracted reference against the original Figma source.
- a button variant or state is not represented in this reference.
- visual precision is required for a selected state or icon-bearing button.
