# STACK Web Table (Compact)


Compact decision view of `STACK-WEB-TABLE.md`. Use for audits, routing decisions, and small-model bootstrap when a page includes a table but token-level details are not in scope. Promote to the full reference when implementing the table, locking header treatment, or comparing against the gallery part screenshot.

Authoritative file: `STACK-WEB-TABLE.md`.

For compact non-table rows, use `STACK-WEB-LIST-ROW.md`.

## Inheritance

- STACK owns table visual anatomy.
- SLDS 2 or production LWC owns sorting, selection, treegrid, keyboard, and pagination semantics.

## Anatomy

- Table width in source: `1344px`
- Table header height: `56px`
- Column header height: `34px`
- Row height: `34px`
- Pagination height: `40px`
- Selection column width: `32px`
- Row action column width: `32px`
- Standard column width in source examples: `160px`

## Table Header

- Fill: `#F3F2F2`
- Border: `#DDDBDA`
- Padding: `12px 16px`
- Title style: Headline 4, `16px`, `700`, `#080707`
- Count text inline after title
- Leading Standard Icon at `32×32` (no outer border wrapper), same pattern as card/section headers
- Optional table-level action uses `STACK-WEB-BUTTONS.md` neutral button

## Column Header Row

- Height: `34px`
- Fill: `#F3F2F2`
- Border: `#DDDBDA`
- Cell padding: `8px`
- Label: `12px`, `700`, `#3E3E3C`
- Variants: selection checkbox, text, sortable, menu-enabled, empty action

## Data Row

- Height: `34px`
- Fill: `#FFFFFF`
- Border: `#DDDBDA`
- Cell padding: `8px`
- Body text: Body 4, `12px`, `400`, `#080707`, line height `120%`

## Selection And Row Actions

- Selection column: `32px` wide, `16px` checkbox, border `#DDDBDA`, radius `2px`
- Row action column: `32px` wide, `16px` icon button, utility color `#706E6B`, border `#DDDBDA`
- Do not use `24px` header/control icons for dense row actions
- Icon-only row actions require accessible labels

## Pagination

- Height: `40px`
- Border: `#DDDBDA`
- Text: `12px`, `#080707`
- Includes rows-per-page, viewing range (`Viewing 1-5 of 150`), and previous/next controls

## Usage Rules (Quick)

- Use only for data-dense record review.
- Do not invent row height, density, or header styling.
- Use row-level actions only for actions scoped to that row.
- Cover empty, loading, error, and permission states at the workflow level.

## When To Promote To Full Ref

- Implementing a table in code, Storybook, or a new scaffold.
- Locking a non-default header treatment.
- Comparing rendered table against the gallery part screenshot.
- Resolving column or pagination behavior beyond the values above.

## Reference Implementation Pointer

- Gallery: `gallery`
- Gallery: `gallery` at `http://localhost:4192/#table-sample`
- Verification protocol: `references/VISUAL-VERIFICATION.md`
