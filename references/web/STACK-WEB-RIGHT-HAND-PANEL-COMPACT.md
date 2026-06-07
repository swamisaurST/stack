# STACK Web Right Hand Panel (Compact)


Compact decision view of `STACK-WEB-RIGHT-HAND-PANEL.md`. Use for audits, routing decisions, and small-model bootstrap when a page includes a contextual record panel but token-level details are not in scope. Promote to the full reference when implementing the panel, field-grid spacing, or comparing against the gallery reference.

Authoritative file: `STACK-WEB-RIGHT-HAND-PANEL.md`.

## Inheritance

- STACK owns panel chrome, local tab visuals, section headers, and read-only field-grid layout.
- SLDS 2 owns accordion behavior, edit-mode form controls, and uncovered interaction semantics.

## Anatomy

- Width: `726px`
- Regions: header, local tabs, scrollable sections, two-column field grid
- Container fill: `#FFFFFF`
- Border: `#DDDBDA`

## Header

- Fill: `#F3F2F2`, height `73px`, padding `16px`, gap `14px`
- Eyebrow: `13px`, `#000000`
- Record title: `18px`, `700`, `#080707`
- Leading object image: `32×32`
- Open record: `18×18` `new_window`; close: `16×16`

## Local Tabs

- Strip height: `40px`
- Active: `700` weight + `inset 0 -2px 0 #00847C`
- Label: `Body 3`, `13px`
- Local to the panel; not global shell tabs

## Sections And Fields

- Section header: `33px`, radius `4px`, title `16px/400`
- Section gap: `16px` inside group, `24px` between groups
- Field cell: `44px` tall, label `12px #3E3E3C`, value `13px #080707`
- Edit icon: `12px #B0ADAB`; links: `#00847C`

## Usage

- Use for linked Salesforce record context beside tables, lists, projects, sites, and map selections.
- Pair with `STACK-WEB-LAYOUT.md` `Table/List Plus Side Panel` or `75/25 Split`.
- Do not use for modals, global shell navigation, or unconstrained sidebars.

## States To Check

- closed, loading, ready, empty selection, empty tab, permission denied, error, edit mode

## Gallery

- Gallery: `gallery`
- Gallery: `gallery` at `http://localhost:4192/#right-hand-panel`
- Part verification: `gallery/screenshots/rhp-gallery-card-verified-2026-06-07.png`
