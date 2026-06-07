# STACK Web Card Header


Use this reference for Sitetracker web card headers and card title/icon/action composition.

## Source

- Figma file: [Sitetracker Web Design Library](https://www.figma.com/design/P7QZySjFIHNpkaCJ80yCHo/Sitetracker-Web-Design-Library?node-id=1744-269&t=cgcwd0WOR9zFu8or-1)
- Source node ID: `1744:269`
- Source node name: `Timepicker`
- Extraction date: 2026-06-03
- Extraction method: Figma MCP metadata, Figma MCP screenshot, and read-only Figma plugin extraction of card header/card variant properties.
- Screenshot check: screenshot captured through Figma MCP during extraction. The short-lived screenshot URL is not stored in this reference.

## Inheritance

This reference overrides SLDS 2 for Sitetracker web card header composition when a card needs the Sitetracker title/icon/action pattern.

Use SLDS 2 only for card behavior or accessibility semantics not defined here. Use STACK typography, colors, icons, and buttons inside the card header.

## Card Header Anatomy

The card header is a horizontal row that can contain:

- optional leading Standard Icon at `32×32` when the card represents an object, entity, partner, category, or table/list section.
- title text.
- optional single action button.
- optional multiple-action icon button.

Default dimensions:

- Width in source examples: `396px`
- Height without single action button: `56px`
- Height with single action button: `64px`
- Padding: `16px`
- Gap when icon is present: `12px`
- Title style: `Headline 4`
- Title size: `16px`
- Title weight: `700`
- Title color: `#080707` in extracted source. Use `STACK-WEB-COLORS.md` when finalizing text color behavior.
- Leading icon size: `32×32` rendered Standard Icon (source SVG is `48×48` with built-in colored background and white glyph)

Leading icon container treatment (verified 2026-06-07):

- Use Standard Icons from `STACK-WEB-ICONS.md` — the SVG asset includes its own colored square background and white glyph.
- Render at `32×32` directly. Do not wrap in a bordered neutral frame.
- Do not add an outer `border`, `#DDDBDA` stroke, or `#FAFAF9` background wrapper around the icon.
- The `4px` corner radius and category color come from the Standard Icon asset itself.
- Wrapper span (`.section-icon-frame`) is layout-only: `32×32` flex alignment, no visual chrome.

Gallery reference: `gallery/src/SectionHeader.jsx`, `.section-icon-frame`, `.section-icon`.

## Header Variants

The source includes `6` card header variants:

| Icon | Single Action Button | Multiple Actions | Height | Usage |
|---|---:|---:|---:|---|
| false | false | false | `56px` | Simple card title. |
| true | false | false | `56px` | Card title with object/entity icon. |
| false | true | false | `64px` | Card title with one inline action. |
| true | true | false | `64px` | Card title with icon and one inline action. |
| true | false | true | `56px` | Card title with icon and overflow/multiple-action affordance. |
| true | true | true | `56px` | Source includes this combination; use only when designer explicitly confirms the action priority. |

## Usage Rules

- Use this pattern for section headers when a page section is card-like, table-like, list-like, or represents a clear content category.
- Use a leading icon when the card represents a clear object, entity, or content category.
- Do not replace the section/card header with loose eyebrow text, a decorative heading, or an uncontained oversized icon.
- Leading icons must come from `STACK-WEB-ICONS.md` and must be visually verified before use.
- Use the title to describe the card content, not the page.
- Keep titles short enough to truncate cleanly.
- Use one visible action only when the action is directly tied to the whole card.
- Use multiple-action overflow only when more than one card-level action exists.
- Do not overload the card header with unrelated controls.
- Do not invent new card header variants. Ask the designer when the required combination is not listed here.
- If the section requires a leading icon and the exact Standard Icon is not documented, stop and ask the designer before implementing.

## Card Container Pattern

The extracted card examples use:

- Fill: `#FFFFFF`
- Stroke: `#DDDBDA`
- Radius: `4px`
- Common width: `396px`
- Table card width example: `944px`
- Common card height example: `253px`

Supported card examples in the source:

- header false, footer false, body none.
- header true, footer false, body text.
- header true, footer true, body text.
- header true, footer false, body illustration.
- header true, footer true, body illustration.
- header true, footer true, body illustration plus text.
- header true, footer true, body table.

Use card body and footer examples as composition references only. When the card content is a table, also load `STACK-WEB-TABLE.md`.

## Card Footer

The extracted footer example uses:

- Height: `44px`
- Fill: `#FFFFFF`
- Label style: `Body 2`
- Label size: `14px`
- Label weight: `400`
- Label color: `#00847C`

Use footer labels for card-level navigation or secondary links only. Do not use the footer as a dumping ground for unrelated actions.

## Gallery Reference

Locked browser-rendered reference in the STACK component gallery (`#card-header`). Standard Icon at `32×32`, no border wrapper — verified 2026-06-07.

- Gallery: `gallery` at `http://localhost:4192/#card-header`
- Part verification: `gallery/screenshots/card-header-part-verified-2026-06-07.png`
- Shared component: `gallery/src/SectionHeader.jsx`
- Gallery index: `references/GALLERY-REFERENCE.md`

## Related References

- Use `STACK-WEB-TYPOGRAPHY.md` for title and label typography.
- Use `STACK-WEB-COLORS.md` for colors.
- Use `STACK-WEB-ICONS.md` for leading icons and overflow/action icons.
- Use `STACK-WEB-BUTTONS.md` for single action buttons.
- Use `STACK-WEB-TABLE.md` when a card contains a table.

## When To Use Figma MCP

Use Figma MCP again if:

- the designer provides an explicit Figma reference.
- the designer asks the agent to compare this extracted reference against the original Figma source.
- a card header variant is not represented here.
- visual precision is required for icon/title/action alignment.
