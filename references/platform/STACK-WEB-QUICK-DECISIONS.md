# STACK Web Quick Decisions


Use this file as the compact router for STACK web work. It does not replace detailed references.

If a row points to a STACK reference, that reference owns the details. Do not implement from this file alone when visual or behavioral precision matters.

## Source Order

1. Use STACK local references when listed here.
2. Use SLDS 2 when STACK does not cover the component.
3. Ask the designer when coverage or conflicts are unclear.

## Component Router

| Need | Primary source | Load details |
|---|---|---|
| Broad or fake idea intake | STACK gate | `references/platform/STACK-WEB-DESIGN.md`, `SYSTEM-PROMPT.md` |
| Output location | STACK gate | `references/platform/STACK-WEB-DESIGN.md` |
| Web shell header | STACK | `references/web/STACK-WEB-GLOBAL-HEADER-COMPACT.md` (audit) or `references/web/STACK-WEB-GLOBAL-HEADER.md` (implement, lock-in) |
| Second-row title/nav | STACK | `references/web/STACK-WEB-COMPONENT-TITLE-GROUP.md` |
| Page/workspace layout | STACK | `references/web/STACK-WEB-LAYOUT.md` |
| Typography | STACK | `references/web/STACK-WEB-TYPOGRAPHY.md` |
| Colors | STACK | `references/web/STACK-WEB-COLORS.md` |
| Icons | STACK | `references/web/STACK-WEB-ICONS.md` |
| Buttons/groups | STACK | `references/web/STACK-WEB-BUTTONS-COMPACT.md` (audit) or `references/web/STACK-WEB-BUTTONS.md` (implement) |
| Card header | STACK | `references/web/STACK-WEB-CARD-HEADER.md` |
| Table visuals | STACK | `references/web/STACK-WEB-TABLE-COMPACT.md` (audit) or `references/web/STACK-WEB-TABLE.md` (implement) |
| Compact non-table list rows | STACK | `references/web/STACK-WEB-LIST-ROW-COMPACT.md` (audit) or `references/web/STACK-WEB-LIST-ROW.md` (implement) |
| Path stages / picklist path | STACK | `references/web/STACK-WEB-PATH-STAGES-COMPACT.md` (audit) or `references/web/STACK-WEB-PATH-STAGES.md` (implement) |
| Right hand panel / record context panel | STACK | `references/web/STACK-WEB-RIGHT-HAND-PANEL-COMPACT.md` (audit) or `references/web/STACK-WEB-RIGHT-HAND-PANEL.md` (implement) |
| Dense row actions | STACK | `references/web/STACK-WEB-TABLE.md` or `references/web/STACK-WEB-LIST-ROW.md` |
| Progress (non-path) | SLDS 2 | SLDS 2 progress |
| Forms/inputs | SLDS 2 | SLDS 2 + STACK primitives |
| Local tabs | SLDS 2 | SLDS 2 |
| Pills (selection + badge) | STACK | `references/web/STACK-WEB-PILLS-COMPACT.md` (audit) or `references/web/STACK-WEB-PILLS.md` (implement) |
| Modal/popover/tooltip/toast | SLDS 2 | SLDS 2 |
| Menus/dropdowns | SLDS 2 behavior | STACK placement if header/nav |
| New component | STACK workflow | `workflows/new-component.md` |
| Browser-rendered verification | STACK | `references/GALLERY-REFERENCE.md` |

## Header Icon Map

Locked shell icons. Do not substitute without designer approval.

| Use | Locked icon/asset |
|---|---|
| Sitetracker wordmark | Brand asset `sitetracker-lettermarks.svg` |
| 9-dot menu | `Utility Icons  / A / apps` (`1518:28648`, `icon-assets/exported-svg/Utility Icons/A/apps.svg`) |
| Global search | `Utility Icons / S / search` (`1518:29174`) |
| Favorite | `Utility Icons / F / favorite` (`1518:28842`) |
| Favorite dropdown | `Utility Icons / D / down` (`1518:28798`) |
| Global create | `Utility Icons / A / add` (`1518:28618`) |
| Guidance Center | `Utility Icons / T / trailhead_alt` (asset: `guidance-center.svg`) |
| Help | `Utility Icons / Q / question` (`1518:29090`) |
| Setup | `Utility Icons / S / setup` (`1518:29184`) |
| Notifications | `Utility Icons / N / notification` (`1518:29010`) |
| Avatar mark | Brand asset `sitetracker-mark.svg`, fill `#00847C` |
| Nav dropdown | `Utility Icons / C / chevrondown` |

Full control order and treatments: `references/web/STACK-WEB-GLOBAL-HEADER.md`.
Browser-rendered reference: `gallery` — specimen `shell` per `references/GALLERY-REFERENCE.md`.
Icon verification protocol: `references/VISUAL-VERIFICATION.md`.

## Components Gallery Reference

Full index: `references/GALLERY-REFERENCE.md`. All gallery sections are canonical; do not check lock status before implementing.

Locked browser-rendered component references. Do not substitute without designer approval.

| Component | Reference | Gallery URL | Part verification |
|---|---|---|---|
| Two-part web shell | `references/web/STACK-WEB-GLOBAL-HEADER.md`, `references/web/STACK-WEB-COMPONENT-TITLE-GROUP.md` | `#shell` | `shell-controls-verified-2026-06-07.png`, `shell-controls-reference-2026-06-07.png` |
| Color tokens | `references/web/STACK-WEB-COLORS.md` | `#colors` | `colors-part-verified-2026-06-07.png` |
| Typography tokens | `references/web/STACK-WEB-TYPOGRAPHY.md` | `#typography` | `typography-part-verified-2026-06-07.png` |
| Icon catalog browse UI | `references/web/STACK-WEB-ICONS.md` | `#icon-catalog` | `icon-catalog-controls-part-verified-2026-06-07.png`, `icon-catalog-grid-part-verified-2026-06-07.png` |
| Buttons and button groups | `references/web/STACK-WEB-BUTTONS.md` | `#components` | `buttons-spacing-verified-2026-06-07.png`, `button-icon-left-part-verified-2026-06-07.png` |
| Pills | `references/web/STACK-WEB-PILLS.md` | `#pills` | `pills-gallery-verified-2026-06-07.png`, `pills-selection-showcase-part-verified-2026-06-07.png`, `pills-badge-variants-part-verified-2026-06-07.png` |
| Path stages | `references/web/STACK-WEB-PATH-STAGES.md` | `#path-stages` | `path-stages-track-part-verified-2026-06-07.png`, `path-stages-specimen-verified-2026-06-07.png` |
| Card / section header | `references/web/STACK-WEB-CARD-HEADER.md` | `#card-header` | `card-header-part-verified-2026-06-07.png` |
| Sample table | `references/web/STACK-WEB-TABLE.md` | `#table-sample` | `table-sample-part-verified-2026-06-07.png` |
| Compact list rows | `references/web/STACK-WEB-LIST-ROW.md` | `#list-rows-sample` | `list-rows-part-verified-2026-06-07.png` |
| Layout models | `references/web/STACK-WEB-LAYOUT.md` | `#layouts` | `layouts-part-verified-2026-06-07.png` |
| Right hand panel | `references/web/STACK-WEB-RIGHT-HAND-PANEL.md` | `#right-hand-panel` | `rhp-gallery-card-verified-2026-06-07.png`, `rhp-panel-specimen-verified-2026-06-07.png` |
| Prototype nav rail | `references/web/STACK-WEB-PROTOTYPE-NAV-RAIL.md` | `#prototype-nav-rail` | `prototype-nav-rail-part-verified-2026-06-07.png` |
| Mobile | `references/platform/STACK-MOBILE-DESIGN.md` | `#mobile` | `mobile-headers-part-verified-2026-06-07.png` |

All screenshot paths under `gallery/screenshots/`.

Locked button gallery rules:

- One control per variant with a shared preview-state toolbar.
- Variant canvas uses flex wrap with `16px` row gap and `20px` column gap; center control and label in each cell.
- Inline button icons inherit label color via `currentColor` mask or inline SVG. Do not use hardcoded gray utility SVG fills on filled brand/destructive/success buttons.

Locked table gallery rules:

- Table header uses `#F3F2F2`, Headline 4 title, inline count, borderless `32×32` Standard Icon, and optional neutral table action.

Reference implementation: `gallery`.

## Icon Selection

Search `references/web/icon-assets/STACK-WEB-ICONS-DATABASE.csv`.

Use tiers:

- `primary`: normal use after visual verification.
- `secondary`: action-specific use after visual verification.
- `restricted`: only with exact designer direction.

Search finds candidates. Visual verification selects the icon.

Shell header icons listed in `Header Icon Map` above are locked and do not require re-verification for routine web work unless the target scaffold renders them incorrectly.

Fixed shell icons are stricter than normal icons. For the Sitetracker mark, 9-dot launcher, and global header controls, do not rely on name similarity alone. Confirm exact asset path, native size, and visual match before implementation. If the fixed shell icon cannot be verified, ask the designer instead of substituting another asset.

## Overlap Rule

When STACK and SLDS 2 overlap, load `references/web/STACK-WEB-COMPONENT-PRECEDENCE.md`.

If still unclear, ask the designer.
