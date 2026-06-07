# STACK Web List Row (Compact)


Compact decision view of `STACK-WEB-LIST-ROW.md`. Use for audits, routing decisions, and small-model bootstrap when a page includes a compact list but token-level details are not in scope. Promote to the full reference when implementing list rows, section header treatment, or comparing against the gallery reference.

Authoritative file: `STACK-WEB-LIST-ROW.md`.

For tabular record review, use `STACK-WEB-TABLE.md`.

## Inheritance

- STACK owns compact list row anatomy and dense row action sizing.
- SLDS 2 owns checkbox semantics, keyboard behavior, and accessibility mechanics.

## Row Anatomy

- Row height: `34px`
- Row horizontal padding: `16px`
- Column gap: `8px` (aligns with dense table cell padding)
- Grid tracks: `32px` selection | flexible copy | auto status/metadata | `32px` action | `32px` action
- Body text: Body 4, `12px`, `#080707`
- Metadata text: `12px`, `#3E3E3C`

## Selection And Row Actions

- Selection control: `16px` checkbox centered in a `32px` track
- Row action column: `32px` wide, `16px` icon button centered in the track
- Row action icon: `12px` inside the `16px` button
- Utility icon color: `#706E6B`
- Do not use `24px` header/control icons inside dense list rows
- Icon-only row actions require accessible labels

## Section Header

When a compact list sits inside a card or section, use `STACK-WEB-CARD-HEADER.md`:

- Header height: `56px`
- Padding: `16px`
- Gap between icon and title copy: `12px`
- Gap between title group and trailing action: `16px`
- Title: Headline 4, `16px`, `700`, `#080707`
- Meta: `12px`, `#3E3E3C`

## Usage Rules (Quick)

- Use only for short operational lists, not full table workflows.
- Keep row actions scoped to the individual row.
- Cover empty, loading, error, and permission states at the workflow level.

## When To Promote To Full Ref

- Implementing list rows in code, Storybook, LWC, or a new scaffold.
- Locking section header icon container treatment.
- Comparing rendered list rows against the gallery reference (`#list-rows-sample`).

## Reference Implementation Pointer

- Gallery: `gallery`
- Gallery: `gallery` at `http://localhost:4192/#list-rows-sample`
- Section header reference: `STACK-WEB-CARD-HEADER.md`
- Verification protocol: `references/VISUAL-VERIFICATION.md`
