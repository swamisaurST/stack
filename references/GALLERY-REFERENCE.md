# STACK Web Component Gallery Reference


Use this file as the canonical index for the STACK browser-rendered component gallery. The gallery lives at `gallery`.

## What It Is

- **Path:** `gallery`
- **Role:** Local hosted React gallery — canonical browser-rendered proof for STACK web and mobile patterns
- **Not:** A substitute for Markdown references. Markdown refs own rules; the gallery owns rendered proof.

**Default assumption:** every gallery section below is canonical. Do not check lock status before implementing. Substitute only with designer approval.

## Run

```bash
cd gallery
npm install
npm run dev
```

- **URL:** `http://localhost:4192`
- **Port:** `4192`

## Section Index

Gallery sections follow the STACK web component router in `references/platform/STACK-WEB-QUICK-DECISIONS.md`. Platform group headings are navigation anchors; verification hashes target individual specimens.

| Platform group | Group hash | Specimens |
|---|---|---|
| Web · Shell | `#web-shell` | `#shell` |
| Web · Primitives | `#web-primitives` | `#colors`, `#typography`, `#icon-catalog` |
| Web · Controls | `#web-controls` | `#components`, `#pills`, `#path-stages` |
| Web · Content & Data | `#web-content` | `#card-header`, `#table-sample`, `#list-rows-sample` |
| Web · Layout | `#web-layout` | `#layouts`, `#right-hand-panel` |
| Prototype Tooling | `#prototype-tooling` | `#prototype-nav-rail` |
| Mobile | `#mobile` | `#mobile` |

## Canonical Specimens

Verified 2026-06-07. Part screenshot paths are relative to `gallery/screenshots/`.

| Section | Hash | STACK reference | Part verification |
|---|---|---|---|
| Two-part web shell | `#shell` | `references/web/STACK-WEB-GLOBAL-HEADER.md`, `references/web/STACK-WEB-COMPONENT-TITLE-GROUP.md` | `shell-controls-verified-2026-06-07.png`, `shell-controls-reference-2026-06-07.png` |
| Color tokens | `#colors` | `references/web/STACK-WEB-COLORS.md` | `colors-part-verified-2026-06-07.png` |
| Typography tokens | `#typography` | `references/web/STACK-WEB-TYPOGRAPHY.md` | `typography-part-verified-2026-06-07.png` |
| Icon catalog browse UI | `#icon-catalog` | `references/web/STACK-WEB-ICONS.md` | `icon-catalog-controls-part-verified-2026-06-07.png`, `icon-catalog-grid-part-verified-2026-06-07.png` |
| Buttons and button groups | `#components` | `references/web/STACK-WEB-BUTTONS.md` | `buttons-spacing-verified-2026-06-07.png`, `button-icon-left-part-verified-2026-06-07.png` |
| Pills | `#pills` | `references/web/STACK-WEB-PILLS.md` | `pills-gallery-verified-2026-06-07.png`, `pills-selection-showcase-part-verified-2026-06-07.png`, `pills-badge-variants-part-verified-2026-06-07.png` |
| Path stages | `#path-stages` | `references/web/STACK-WEB-PATH-STAGES.md` | `path-stages-track-part-verified-2026-06-07.png`, `path-stages-specimen-verified-2026-06-07.png` |
| Card / section header | `#card-header` | `references/web/STACK-WEB-CARD-HEADER.md` | `card-header-part-verified-2026-06-07.png` |
| Sample table | `#table-sample` | `references/web/STACK-WEB-TABLE.md` | `table-sample-part-verified-2026-06-07.png` |
| Compact list rows | `#list-rows-sample` | `references/web/STACK-WEB-LIST-ROW.md` | `list-rows-part-verified-2026-06-07.png` |
| Layout models | `#layouts` | `references/web/STACK-WEB-LAYOUT.md` | `layouts-part-verified-2026-06-07.png` |
| Right hand panel | `#right-hand-panel` | `references/web/STACK-WEB-RIGHT-HAND-PANEL.md` | `rhp-gallery-card-verified-2026-06-07.png`, `rhp-panel-specimen-verified-2026-06-07.png` |
| Prototype navigation rail | `#prototype-nav-rail` | `references/web/STACK-WEB-PROTOTYPE-NAV-RAIL.md` | `prototype-nav-rail-part-verified-2026-06-07.png` |
| Mobile headers and tokens | `#mobile` | `references/platform/STACK-MOBILE-DESIGN.md` | `mobile-headers-part-verified-2026-06-07.png` |

**Icon catalog note:** the browse UI is canonical. Individual icons still require visual verification before use unless listed in the locked shell icon map in `references/web/STACK-WEB-ICONS.md`.

Verification protocol: `references/VISUAL-VERIFICATION.md`.

## When To Load This File

Load when you need a gallery hash, run instructions, or part screenshot path for browser-rendered verification.

Do not load solely to determine whether a section is canonical — assume canonical by default.

Skip when output is Markdown-only, Pencil-only, or Figma-only with no browser-rendered comparison.

## Agent Usage

1. Load the Markdown reference for the component (e.g. `references/web/STACK-WEB-GLOBAL-HEADER.md`).
2. Run the gallery at the hash above or compare against listed part screenshots when verifying browser output.
3. Apply `references/VISUAL-VERIFICATION.md` for shell icons and brand assets.
4. Do not mark verification complete from manifest name match or asset path alone.

## Migration

All gallery sections are canonical; refresh baselines only with designer approval.

## Related References

- Compact router: `references/platform/STACK-WEB-QUICK-DECISIONS.md`
- Platform rules: `references/platform/STACK-WEB-DESIGN.md`
- Gallery README: `gallery/README.md`
