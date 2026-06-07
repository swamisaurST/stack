# STACK Web Table


Use this reference for Sitetracker web table and list-data display patterns.

For compact non-table rows, use `STACK-WEB-LIST-ROW.md`.

## Source

- Figma file: [Sitetracker Web Design Library](https://www.figma.com/design/P7QZySjFIHNpkaCJ80yCHo/Sitetracker-Web-Design-Library?node-id=1841-3132&t=cgcwd0WOR9zFu8or-1)
- Source node ID: `1841:3132`
- Source node name: `Sample Table`
- Extraction date: 2026-06-03
- Extraction method: Figma MCP design context, Figma MCP screenshot, and read-only Figma plugin extraction of table anatomy.
- Screenshot check: screenshot captured through Figma MCP during extraction. The short-lived screenshot URL is not stored in this reference.

## Inheritance

This reference overrides SLDS 2 for Sitetracker web table visual anatomy where defined.

Use SLDS 2 or production LWC semantics for table accessibility, keyboard behavior, sorting semantics, selection behavior, treegrid behavior, and pagination behavior not defined here. Do not substitute generic SLDS table styling for visual details defined in this reference.

## Table Variants

The source includes `3` row-count variants:

| Variant | Width | Height |
|---|---:|---:|
| `Rows=5` | `1344px` | `266px` |
| `Rows=10` | `1344px` | `436px` |
| `Rows=20` | `1344px` | `742px` |

Use these as density references, not as hard row-count limits.

## Table Anatomy

The extracted `Rows=5` table includes:

1. Table header region.
2. Column header row.
3. Data rows.
4. Row selection column.
5. Row action column.
6. Pagination footer.

Extracted dimensions:

- Table width: `1344px`
- Table header height: `56px`
- Column header height: `34px`
- Row height: `34px`
- Pagination height: `40px`
- Selection column width: `32px`
- Row action column width: `32px`
- Standard column width in source examples: `160px`

## Table Header Region

Extracted table header:

- Fill: `#F3F2F2`
- Border: `#DDDBDA`
- Padding: `12px 16px`
- Header icon size: approximately `29px`
- Header title: `Headline 4`, `16px`, `700`
- Header title color in source: `#080707`
- Count text appears inline after title, for example `(#)`.
- Optional header button uses `STACK-WEB-BUTTONS.md`.

Use the table header to name the table and expose table-level actions only.

## Column Header Row

Column header row:

- Height: `34px`
- Fill: `#F3F2F2`
- Border: `#DDDBDA`
- Horizontal padding per cell: `8px`
- Column label size: `12px`
- Column label weight: `700`
- Column label color: `#3E3E3C`

Column header variants include:

- selection checkbox cell.
- text header cell.
- sortable header cell.
- menu-enabled header cell.
- empty action header cell.

Use sort and menu affordances only when the column supports those behaviors.

## Data Rows

Data row:

- Height: `34px`
- Fill: `#FFFFFF`
- Border: `#DDDBDA`
- Horizontal padding per cell: `8px`
- Body text size: `12px`
- Body text weight: `400`
- Body text color in source: `#080707`
- Body text line height: `120%`

Use `Body 4` for dense table body text.

## Selection And Row Actions

Selection:

- Selection column width: `32px`
- Checkbox size: `16px`
- Checkbox border: `#DDDBDA`
- Checkbox radius: `2px`

Row actions:

- Action column width: `32px`
- Extracted row action icon button size: `16px`
- Utility icon color: `#706E6B`
- Icon button border: `#DDDBDA`
- Icon-only row actions require accessible labels.
- Do not use `24px` header/control icons for dense row actions.

Use row actions only for actions scoped to that row.

## Pagination

Pagination footer:

- Height: `40px`
- Border: `#DDDBDA`
- Text size: `12px`
- Text color: `#080707`
- Includes rows-per-page control.
- Includes viewing range text, for example `Viewing 1-5 of 150`.
- Includes previous/next controls.

Use pagination only when table content is paginated. Do not show pagination for small static lists unless the product behavior requires it.

## Usage Rules

- Use this table reference for data-dense record review and operational workflows.
- Tables should have a clear title and useful columns.
- Do not use a table when a card/list would better support the end-user task.
- Do not invent table density, row height, or header styling.
- Use table-level buttons only for actions that apply to the table as a whole.
- Use row-level actions only for actions scoped to a single row.
- If the content is a compact non-table list, use `STACK-WEB-LIST-ROW.md` instead of inventing a custom row density.
- Include empty, loading, error, and permission states in the broader design or workflow when table data can be unavailable.

## Related References

- Use `STACK-WEB-TYPOGRAPHY.md` for table type styles.
- Use `STACK-WEB-COLORS.md` for table colors and borders.
- Use `STACK-WEB-ICONS.md` for table icons and visual verification.
- Use `STACK-WEB-BUTTONS.md` for table-level action buttons.
- Use `STACK-WEB-CARD-HEADER.md` when a table is placed inside a card. Reuse the borderless `32×32` Standard Icon pattern from card/section headers for the table title icon.
- Use `STACK-WEB-LIST-ROW.md` for compact non-table list rows.

## Locked Gallery Reference

The component gallery is the locked browser-rendered reference for the STACK sample table.

- Gallery path: `gallery`
- Gallery: `gallery` at `http://localhost:4192/#table-sample`
- Reference implementation: `src/App.jsx` (`TableGallery`), `src/styles.css`
- Verification protocol: `references/VISUAL-VERIFICATION.md`

Locked table header treatment:

- Fill: `#F3F2F2`
- Padding: `12px 16px`
- Height: `56px`
- Title: Headline 4 — `16px`, `700`, `#080707`
- Count inline after title with normal weight, same color
- Leading Standard Icon at `32×32` (no outer border wrapper), matching card/section header icon pattern
- Optional table-level action uses `STACK-WEB-BUTTONS.md` neutral button

Locked verification artifact:

| Artifact | Path |
|---|---|
| Table header, columns, rows, footer | `gallery/screenshots/table-sample-part-verified-2026-06-07.png` |

When implementing tables in another scaffold, match this reference anatomy and header treatment before adjusting for scaffold-specific layout constraints.

## When To Use Figma MCP

Use Figma MCP again if:

- the designer provides an explicit Figma reference.
- the designer asks the agent to compare this extracted reference against the original Figma source.
- a table state or behavior is not represented here.
- visual precision is required for column widths, row action placement, or pagination.
