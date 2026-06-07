# STACK Web Layout


Use this reference for Sitetracker web page and workspace layout selection. This file prevents agents from inventing arbitrary centered layouts when a web surface needs an operational product workspace.

## Inheritance

This reference owns STACK web page-level layout selection. Component-level layout still belongs to the relevant component reference, such as card header, table, list row, form, modal, or SLDS 2 fallback.

Use SLDS 2 for grid semantics, accessibility, and implementation mechanics when needed, but do not replace the layout decision model in this file with generic centered SaaS page structure.

## Required Layout Gate

Before creating a web page, ask or confirm:

1. What is the creation destination?
2. Where should the output be created?
3. What is the end-user workflow?
4. Which layout model should the page use?

If the designer has not provided a layout model and the workflow could support multiple models, ask before creating.

## Output Location Rule

Do not create product designs, prototypes, or local hosted apps inside this kit (`design/stack/`).

For a React local hosted app, create a new designer-approved folder outside this kit (`design/stack/`). Use `STACK-WEB-PROTOTYPE-NAV-RAIL.md` when the prototype needs a collapsible left review rail for multi-screen navigation.

For Figma, Pencil, Storybook, LWC, scratch org, or Markdown/spec work, use the destination and location approved by the designer.

## Approved Layout Models

### Full-Width Workspace

Use when:

- The page is an operational workspace.
- The primary task is reviewing, filtering, editing, or managing dense records.
- The content benefits from horizontal space.

Rules:

- Content should fill the available workspace below the STACK web shell.
- Use page padding and gutters, not a narrow centered max-width container.
- Section widths should be intentional and tied to the workflow.

### 50/50 Split

Use when:

- Two panels have equal task importance.
- The user compares, maps, edits, or reconciles two related work areas.

Rules:

- Each panel gets equal horizontal priority.
- Both panels need clear section headers.
- Avoid putting unrelated content into either half just to fill space.

### 75/25 Split

Use when:

- One primary work area dominates the workflow.
- A secondary panel provides details, filters, summary, inspector content, or contextual actions.

Rules:

- The primary pane owns the main workflow.
- The secondary pane supports the selected object, filter, or summary state.
- Do not let the secondary pane compete with primary actions.

### Table/List Plus Side Panel

Use when:

- The user selects from a table or list and reviews details or actions beside it.
- The page needs master-detail behavior.

Rules:

- Use `STACK-WEB-TABLE.md` for dense tabular record review.
- Use `STACK-WEB-LIST-ROW.md` for compact non-table list rows.
- Use `STACK-WEB-RIGHT-HAND-PANEL.md` for the contextual Salesforce record inspector on the right.
- Use card/section headers for both primary and side-panel regions.

## Disallowed Defaults

Do not use these unless a designer or reference explicitly approves them:

- Arbitrary centered max-width page shells.
- Decorative hero-first SaaS layouts for product workflows.
- Large side caps that waste workspace width.
- Unexplained card grids that are not tied to the end-user workflow.
- Split layouts where the ratio is chosen only for visual balance.

## Section Structure

Every major section should have:

- A clear section purpose.
- A STACK card/section header when the section is card-like or table-like.
- A relationship to the selected layout model.
- Defined empty, loading, error, permission, validation, and success handling where relevant.

## Gallery Reference

Canonical browser-rendered layout models in the STACK component gallery (`#layouts`). Verified 2026-06-07.

- Gallery: `gallery` at `http://localhost:4192/#layouts`
- Part verification: `gallery/screenshots/layouts-part-verified-2026-06-07.png`
- Gallery index: `references/GALLERY-REFERENCE.md`

## Verification Checklist

Before handoff, verify:

- The output location was confirmed and is outside this kit (`design/stack/`) for product prototypes.
- The layout model was named.
- The layout uses available workspace intentionally.
- Centered max-width caps were avoided unless approved.
- Major sections use approved section/card header structure.
- The layout supports the user's workflow and not only visual symmetry.
