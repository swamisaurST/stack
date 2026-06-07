# STACK Web Pills


Use this reference for Sitetracker web pills. Pills are a STACK web primitive with two distinct patterns: **Input Selection Pills** (interactive, removable) and **Badge Pills** (read-only, informative).

## Source

- Figma file: [Sitetracker Web Design Library](https://www.figma.com/design/P7QZySjFIHNpkaCJ80yCHo/Sitetracker-Web-Design-Library?node-id=1012-12089&t=dKANgYtmiDs2y9F9-1)
- Selection pill node ID: `1012:12089` (`Pill`)
- Badge pill node ID: `1527:801` (`Badge`)
- Extraction date: 2026-06-07
- Extraction method: Figma MCP metadata, Figma MCP design context, Figma MCP screenshots, and browser dimension verification.
- Screenshot check: verified against Figma captures and gallery part screenshots during integration.

## Inheritance

This reference overrides SLDS 2 for Sitetracker web pill visuals, variants, and state colors.

Use SLDS 2 only for behavior and accessibility semantics not defined here:

- keyboard operation for removable pills.
- `aria-label` on remove controls.
- live-region announcements when selections are cleared.
- badge semantics when status is conveyed to assistive technology.

Do not use SLDS 2 badge or pill colors when a STACK pill rule exists.

## Pill Types

| Type | Class prefix | Interactive | Purpose |
|---|---|---|---|
| Input Selection Pill | `stack-selection-pill` | Yes — remove via close control | Summarize active filter, lookup, or multi-select choices |
| Badge Pill | `stack-badge-pill` | No — may have hover only | Read-only status, category, or metadata label |

Do not use Badge Pills for removable selections. Do not use Input Selection Pills for static status display.

## Input Selection Pill

### When To Use

Use when:

- a combobox, lookup, or multi-select field needs to show what the user already chose.
- filters or chips must be removable without opening the source control again.
- selected records or entities need a compact summary with optional leading icon.

Do not use when:

- the label is informational only and cannot be removed. Use a Badge Pill.
- the action is navigation or toggling a view mode. Use buttons or button groups.

### Anatomy

- Container: inline-flex row, `4px` radius, `1px` border, white fill.
- Optional leading icon container: `20px` square or circle with object/entity icon inside.
- Label: `Body 3` (`13px`, line height `20px`, weight `400`), brand teal text.
- Remove control: utility `close` icon button on the trailing edge.

Default measurements from Figma `1012:12089`:

- Height: `26px`
- Horizontal padding: `4px`
- Vertical padding: `3px`
- Gap between internal elements: `4px`
- Border radius: `4px`
- Border treatment: `box-shadow: inset 0 0 0 1px #DDDBDA` (not layout `border`) so total height stays `26px`
- Leading icon container: `20px` × `20px`
- Remove icon: `16px` glyph in `16px` hit target

### Leading Icon Containers

| Variant | Container shape | Container fill | Icon treatment |
|---|---|---|---|
| Record / object (`Type=Icon`) | `4px` radius square | `#7F8DE1` | White standard object icon, `12px` |
| Person / user (`Type=Avatar`) | Circle | `#34BECD` | White person icon, `10px` centered in `20px` frame |

Gallery implementation (verified 2026-06-07):

- Record / object: render `/stack-icons/account.svg` at `20px` × `20px` directly. The asset already includes the purple frame and white building glyph — do not wrap it in a second `#7F8DE1` container.
- Person / user: render a `20px` teal circle (`#34BECD`) with a centered `10px` white person silhouette SVG inside.

Object and person icon containers are decorative summaries of the selected entity type. Use only when the source field provides that context.

### Input Selection Pill States

| State | Fill | Stroke | Label | Remove icon |
|---|---|---|---|---|
| Default | `#FFFFFF` | `#DDDBDA` | `#00847C` | `#706E6B` |
| Hover | `#FAFAF9` | `#DDDBDA` | `#00847C` | `#00847C` |
| Focus | `#FAFAF9` | `#DDDBDA` | `#00847C` | `#00847C` |

Focus ring on the pill container:

- `box-shadow: 0 0 3px #0070D2`

Do not use the double-ring button focus treatment on selection pills.

### Input Selection Pill Stack

When multiple selection pills appear together:

- Wrap in a flex container with `flex-wrap: wrap`.
- Use `4px` gap between pills.
- Preserve reading order left-to-right, top-to-bottom.
- Each pill removes only itself; do not shift focus unexpectedly after removal.

## Badge Pill

### When To Use

Use when:

- a compact label communicates status, category, or metadata.
- the label is read-only and not actionable.
- semantic color reinforces meaning (success, warning, error, info).

Do not use when:

- the user must remove or edit the value. Use an Input Selection Pill.
- the label triggers navigation or opens a menu. Use a button or link pattern.

### Anatomy

- Container: inline-flex row, pill radius.
- Optional leading or trailing icon: `14px` utility icon matching label color.
- Label: `Label Bold` (`12px`, weight `700`, line height `100%`).

Default measurements from Figma `1527:801`:

- Height: `20px` (plain), `22px` (with icon)
- Horizontal padding: `8px`
- Vertical padding: `4px`
- Gap between icon and label: `4px`
- Border radius: `23px`
- Border treatment: only `Light` uses `box-shadow: inset 0 0 0 1px #DDDBDA` so plain/icon heights stay `20px` / `22px`

Badge Pills are not clickable. A hover state may lighten or darken the fill slightly when the surrounding pattern expects it; do not add pointer cursor or button semantics.

### Badge Icon Positions

- `None`: label only.
- `Left`: icon before label.
- `Right`: icon after label.

Inline badge icons must match label color via `currentColor` mask or inline SVG. Do not use hardcoded gray utility fills inside colored badge pills.

### Badge Variants

| Variant | Fill | Stroke | Text / icon |
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

Use semantic variants only when the label meaning matches the variant. Do not use success, warning, or error badge colors decoratively.

### Badge Hover

When hover is shown:

- Lighten solid fills by ~4% luminance or darken subtle fills by one gray step.
- Do not change text color on hover.
- Do not add borders or shadows unless the variant is `Light`.

## Icon Rules

- Remove control: `Utility Icons / C / close` (`1518:28732`), `16px`.
- Badge inline icons: verified STACK utility icon at `14px`, colored via `currentColor`.
- Leading selection icons: `Standard Icons / A / account` for record/object; person avatar glyph for user selections.

## Accessibility

### Input Selection Pill

- The remove control must be a `<button type="button">` with an accessible name such as `Remove {label}`.
- If the pill container is focusable, ensure only one tab stop per pill unless the design requires separate focus on label and remove.
- After removal, move focus to the next pill, the source input, or a logical fallback.

### Badge Pill

- Render as `<span>` or non-interactive text. Do not use `<button>` or `<a>`.
- If the badge conveys status, pair with visible text or `aria-label` on the parent region so status is not icon-only.

## Gallery Reference

- Path: `gallery`
- Hash: `#pills`
- Run: `npm run dev` (port `4192`, or next free port)
- Layout: matches the buttons gallery pattern — shared **Preview state** toolbar for selection pills, one specimen per variant (no state matrix), compact stack demo, badge variant grid plus icon-position samples on Default.
- Part screenshots:
  - `gallery/screenshots/pills-gallery-verified-2026-06-07.png`
  - `gallery/screenshots/pills-selection-showcase-part-verified-2026-06-07.png`
  - `gallery/screenshots/pills-badge-showcase-part-verified-2026-06-07.png`
  - `gallery/screenshots/pills-badge-variants-part-verified-2026-06-07.png`
  - `gallery/screenshots/pills-figma-reference-2026-06-07.png`
  - `gallery/screenshots/badges-figma-reference-2026-06-07.png`

Status: locked browser-rendered reference — verified 2026-06-07.

## Related References

- Colors: `STACK-WEB-COLORS.md`
- Typography: `STACK-WEB-TYPOGRAPHY.md` (`Body 3` for selection pills, `Label Bold` for badges)
- Icons: `STACK-WEB-ICONS.md`
- Compact router: `STACK-WEB-PILLS-COMPACT.md`
