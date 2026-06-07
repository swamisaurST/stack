# STACK Web List Row


Use this reference for compact non-table list rows in Sitetracker web surfaces. Use `STACK-WEB-TABLE.md` for tabular record review.

## Inheritance

This reference owns compact list row anatomy, row action sizing, checkbox sizing, and row-level icon treatment for non-table lists.

Use SLDS 2 for form semantics, keyboard behavior, checkbox behavior, and accessibility mechanics not defined here. Do not substitute oversized generic icon buttons for dense row actions.

## When To Use

Use compact list rows when:

- The content is a short operational list rather than a full table.
- Rows need one or two scoped actions.
- The user needs quick scan, completion, selection, or simple editing.

Do not use this pattern when:

- Columns, sorting, pagination, or row menus are central to the workflow. Use `STACK-WEB-TABLE.md`.
- The row represents a rich record card with multiple fields and actions. Use a card or section pattern.

## Row Anatomy

A compact row may contain:

1. Optional selection or completion control.
2. Primary row label.
3. Optional metadata or status.
4. Optional row-scoped actions.

Default density:

- Row height: align to the dense table row reference where possible, approximately `34px` for simple rows.
- Row horizontal padding: `16px`
- Column gap: `8px` (matches dense table cell padding in `STACK-WEB-TABLE.md`)
- Grid tracks: `32px` selection | flexible copy | auto status/metadata | `32px` action | `32px` action
- Selection control and row actions are centered within their `32px` tracks
- Text: use `Body 4` for dense row body text or `Body 3` only when the row needs stronger readability.
- Row action column: align with the table action column, `32px` per action region when practical.
- Row action icon button size: `16px` icon inside a compact hit area.
- Utility icon color: `#706E6B` unless a specific state requires a semantic color.
- Checkbox size: `16px` for dense rows, matching `STACK-WEB-TABLE.md`.

## Action Rules

- Row actions must be scoped to the individual row.
- Icon-only row actions require accessible labels.
- Do not place primary page actions inside row actions.
- Do not use large `24px` header/control icons inside dense list rows.
- Use at most the actions needed for the row workflow; if the row needs many actions, use an overflow/menu pattern and confirm with the designer.

## Section Header Relationship

When a compact list sits inside a card or section, use `STACK-WEB-CARD-HEADER.md` for the section header. Do not replace a section header with loose eyebrow text or decorative headings.

Section header spacing (shared with card headers):

- Header height: `56px`
- Padding: `16px`
- Gap between icon and title copy: `12px`
- Gap between title group and trailing action: `16px`
- Title: Headline 4, `16px`, `700`, `#080707`
- Meta line: `12px`, `#3E3E3C`

## Required States

Consider:

- Default.
- Hover/focus.
- Selected or checked.
- Empty list.
- Filtered empty.
- Loading.
- Error.
- Permission or readonly.
- Validation when editable.
- Success when an action changes row state.

If a state is not shown, list it as missing in the output.

## Gallery Reference

Locked browser-rendered reference in the STACK component gallery (`#list-rows-sample`). Verified 2026-06-07.

- Gallery: `gallery` at `http://localhost:4192/#list-rows-sample`
- Part verification: `gallery/screenshots/list-rows-part-verified-2026-06-07.png`
- Gallery index: `references/GALLERY-REFERENCE.md`

## Verification Checklist

Before handoff, verify:

- The list is not actually a table workflow.
- Row action icons are compact and not larger than the dense row pattern allows.
- Icon-only actions have accessible labels.
- The section containing the list uses the approved card/section header pattern.
- Empty, filtered empty, error, loading, permission, validation, and success states are covered or listed as missing.
