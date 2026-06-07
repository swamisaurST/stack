# STACK Web Colors


Use this reference for Sitetracker web color decisions. This file is extracted from the static Sitetracker Web Design Library.

## Source

- Figma file: [Sitetracker Web Design Library](https://www.figma.com/design/P7QZySjFIHNpkaCJ80yCHo/Sitetracker-Web-Design-Library?node-id=1344-10515&t=cgcwd0WOR9zFu8or-1)
- Source node ID: `1344:10515`
- Source node name: `Color Variables`
- Extraction date: 2026-06-03
- Extraction method: Figma MCP metadata, Figma MCP design context for `Text` and `Foundation Palette` sublayers, targeted text search through extracted metadata, and Figma MCP screenshot of the color variables node.
- Screenshot check: screenshot captured through Figma MCP during extraction. The short-lived screenshot URL is not stored in this reference.

## Inheritance

This reference overrides SLDS 2 for Sitetracker web color choices when a color purpose is defined here.

Use SLDS 2 for component structure and accessibility when a component is not covered by STACK, but apply these STACK colors where this reference defines the color purpose. If an SLDS 2 component requires a color not covered here, use SLDS 2 and document the fallback.

## Color Scope

This file intentionally does not copy the full Figma palette.

It includes:

- core brand colors.
- core text colors.
- core link and state colors.
- selected grays used by real Sitetracker web components.
- selected component-support colors that appear in extracted headers, tables, and buttons.

Do not add colors from the full palette unless a STACK reference or designer-approved component needs them.

## Brand Colors

- `Brand / ST Teal`
  - Hex: `#00847C`
  - Source name: `ST Teal`
  - Source token: `$brand-accessible`
  - Use for primary Sitetracker emphasis, selected indicators, brand icons, and primary actions where the relevant component reference allows it.

- `Brand / ST Teal Dark`
  - Hex: `#00736C`
  - Source name: `ST Teal Dark`
  - Source token: `$brand-accessible`
  - Use for darker brand emphasis and supported hover/active treatments when a component reference specifies it.

## Text Colors

- `Text / Default`
  - Hex: `#17191C`
  - Source name: `Neutrals/900 (Text)`
  - Use for primary product text.

- `Text / Legacy Default`
  - Hex: `#080707`
  - Source name: `Text / Default`
  - Use only when an extracted component explicitly uses this value or when matching existing Sitetracker web library references.

- `Text / Weak`
  - Hex: `#3E3E3C`
  - Use for secondary text, muted labels, table headers, and lower-emphasis metadata.

- `Text / Placeholder`
  - Hex: `#706E6B`
  - Use for placeholders, inactive hints, and low-emphasis icon/text states.

- `Text / White`
  - Hex: `#FFFFFF`
  - Use for text on dark or brand-filled backgrounds.

## Link Colors

- `Text / Link`
  - Hex: `#00847C`
  - Use as the Sitetracker web default link color.

- `Text / Link Active`
  - Hex: `#00396B`
  - Source name: `Midnight Blue`
  - Source token: `$color-text-link-active`
  - Use for active link states only when the component reference calls for it.

- `Text / Link Disabled`
  - Hex: `#16325C`
  - Source name: `Biscay`
  - Use only when a disabled inverse/link treatment explicitly requires it.

## Stateful Colors

- `Text / Success`
  - Hex: `#027E46`
  - Source name: `Forest Green`
  - Source token: `$color-text-success`

- `Text / Warning`
  - Hex: `#844800`
  - Source name: `Cinnamon`
  - Source token: `$color-text-warning-alt`

- `Text / Error`
  - Hex: `#C23934`
  - Source name: `Flush Mahogany`
  - Source token: `$color-background-error-dark`

Use state colors for semantic feedback only. Do not use success, warning, or error colors for decoration.

## Selected Grays And Surfaces

- `Surface / Selected Teal`
  - Hex: `#EBF5F4`
  - Use for selected or active navigation/tab backgrounds when a STACK component reference specifies selected teal treatment.

- `Surface / White`
  - Hex: `#FFFFFF`
  - Source name: `Foundation / Gray / 01`
  - Source token: `$color-gray-1`
  - Use for primary surfaces, cards, inputs, and table rows.

- `Surface / Subtle`
  - Hex: `#FAFAF9`
  - Source name: `Foundation / Gray / 02`
  - Source token: `$color-gray-2`
  - Use only when a component reference needs a subtle off-white surface.

- `Surface / Section`
  - Hex: `#F3F2F2`
  - Source name: `Foundation / Gray / 03`
  - Source token: `$color-gray-3`
  - Use for table headers, grouped section backgrounds, and light component backgrounds shown in extracted references.

- `Border / Default`
  - Hex: `#DDDBDA`
  - Source name: `Foundation / Gray / 05`
  - Source token: `$color-gray-5`
  - Use for component borders, table lines, input borders, dividers, and button outlines where the component reference specifies default borders.

- `Icon / Light`
  - Hex: `#B0ADAB`
  - Source name: `Foundation / Gray / 07`
  - Source token: `$color-gray-7`
  - Use for light/disabled icon states when a component reference specifies this treatment.

- `Icon / Default`
  - Hex: `#706E6B`
  - Source name: `Foundation / Gray / 09`
  - Source token: `$color-gray-9`
  - Use for default utility icons and low-emphasis controls.

- `Text / Weak Gray`
  - Hex: `#3E3E3C`
  - Source name: `Foundation / Gray / 11`
  - Source token: `$color-gray-11`
  - Use for weak text and table header labels.

- `Text / Default Gray`
  - Hex: `#080707`
  - Source name: `Foundation / Gray / 13`
  - Source token: `$color-gray-13`
  - Use only when an extracted component explicitly uses `#080707`.

## Component-Specific Notes

- Global header extraction uses white surface, ST Teal brand icons, `#DDDBDA` input border, and `#706E6B` placeholder/icon color.
- Global navigation extraction uses selected tab background `#EBF5F4` and selected indicator `#00847C`.
- Table extraction uses `#F3F2F2` for the table header background, `#DDDBDA` for borders, `#3E3E3C` for column header text, `#080707` for body text, and `#706E6B` for default utility icons.
- Button extraction uses STACK button references for final button color behavior. Do not infer button color rules from this color file alone.

## Usage Rules

- Use color by purpose, not by visual preference.
- Do not introduce arbitrary hex values.
- Do not use state colors decoratively.
- Do not use the full gray palette unless another STACK reference or the designer approves the need.
- If a component requires a color not listed here, first check its STACK component reference. If it is not covered, use SLDS 2 and document the fallback.
- If a color conflict appears between STACK and SLDS 2, ask the designer instead of choosing.

## Gallery Reference

Locked browser-rendered reference in the STACK component gallery (`#colors`). Verified 2026-06-07.

- Gallery: `gallery` at `http://localhost:4192/#colors`
- Part verification: `gallery/screenshots/colors-part-verified-2026-06-07.png`
- Gallery index: `references/GALLERY-REFERENCE.md`

## When To Use Figma MCP

Use Figma MCP again if:

- the designer asks for full palette verification.
- the designer provides an explicit Figma reference.
- the designer asks the agent to compare this extracted reference against the original Figma source.
- a future extraction is explicitly sourced from a Figma node not already represented in the local STACK references.
