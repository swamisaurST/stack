# STACK Web Icons


Use this reference for Sitetracker web icon selection. Treat the icon inventory as a searchable database, not as a document to load into context.

## Source

- Figma file: [Sitetracker Web Design Library](https://www.figma.com/design/P7QZySjFIHNpkaCJ80yCHo/Sitetracker-Web-Design-Library?node-id=1456-2009&t=cgcwd0WOR9zFu8or-1)
- Source node ID: `1456:2009`
- Source node name: `Icons`
- Extraction date: 2026-06-03
- Extraction method: Figma MCP metadata parsed into local manifest.

## Search Database

- Preferred search database: `icon-assets/STACK-WEB-ICONS-DATABASE.csv`
- Database summary: `icon-assets/STACK-WEB-ICONS-DATABASE-SUMMARY.json`
- Total exported SVG files: `1094`

Agents must search `icon-assets/STACK-WEB-ICONS-DATABASE.csv` instead of loading full icon inventories into context.

## Database Search Protocol

Do not read the entire manifest into the context window.

Use this process:

1. Identify the icon intent in plain language, such as edit, filter, account, map, site, warning, upload, or table.
2. Search `icon-assets/STACK-WEB-ICONS-DATABASE.csv` with a narrow keyword.
3. Review only the matching rows.
4. Pick one or more candidate icons by exact manifest `name` and `nodeId`.
5. Visually verify the candidate icon before placing it into the UI.
6. Choose the final icon only after visual verification confirms that the icon matches the intended meaning and component context.
7. If no match exists, use Figma MCP only when the designer provides an explicit Figma reference or asks for source comparison.

Search finds candidates. Visual verification selects the icon.

## Fixed Shell Icon Protocol

Fixed shell icons are stricter than normal icon selections because they define the persistent Sitetracker web chrome.

Applies to:

- Sitetracker mark.
- 9-dot app launcher.
- Global search.
- Favorite and favorite dropdown.
- Global create.
- Guidance Center.
- Help/question.
- Setup.
- Notification.
- Navigation dropdown affordances.

Rules:

- Confirm the exact `name`, `nodeId`, `assetPath`, category, native size, and `useTier` before implementation.
- Visually verify the exported SVG or source screenshot before placing the icon.
- Do not rely on icon name similarity for shell icons.
- If the icon looks wrong in the target scaffold, mark the mapping as blocked and ask the designer.
- Do not substitute a similar utility icon for a fixed shell icon without designer approval.

## Locked Shell Icon Map

These shell icons are locked after visual verification on 2026-06-07. Use exact manifest rows and asset paths.

| Control | Manifest name | Node ID | Asset path |
|---|---|---|---|
| 9-dot app launcher | `Utility Icons  / A / apps` | `1518:28648` | `icon-assets/exported-svg/Utility Icons/A/apps.svg` |
| Global search | `Utility Icons / S / search` | `1518:29174` | `icon-assets/exported-svg/Utility Icons/S/search.svg` |
| Favorite | `Utility Icons / F / favorite` | `1518:28842` | `icon-assets/exported-svg/Utility Icons/F/favorite.svg` |
| Favorite dropdown | `Utility Icons / D / down` | `1518:28798` | `icon-assets/exported-svg/Utility Icons/D/down.svg` |
| Global create | `Utility Icons / A / add` | `1518:28618` | `icon-assets/exported-svg/Utility Icons/A/add.svg` |
| Guidance Center | `Utility Icons / T / trailhead_alt` | — | `guidance-center.svg` |
| Help | `Utility Icons / Q / question` | `1518:29090` | `icon-assets/exported-svg/Utility Icons/Q/question.svg` |
| Setup | `Utility Icons / S / setup` | `1518:29184` | `icon-assets/exported-svg/Utility Icons/S/setup.svg` |
| Notification | `Utility Icons / N / notification` | `1518:29010` | `icon-assets/exported-svg/Utility Icons/N/notification.svg` |
| Nav dropdown | `Utility Icons / C / chevrondown` | `1518:28716` | `icon-assets/exported-svg/Utility Icons/C/chevrondown.svg` |

Brand assets:

- Sitetracker wordmark: `sitetracker-lettermarks.svg`
- Avatar mark: `sitetracker-mark.svg`

Control order and treatments: `STACK-WEB-GLOBAL-HEADER.md`.
Second-row launcher placement: `STACK-WEB-COMPONENT-TITLE-GROUP.md`.
Reference implementation: `gallery`.

## Icon Catalog Gallery Reference

Locked browser-rendered browse/search/grid UI in the STACK component gallery (`#icon-catalog`). Verified 2026-06-07.

- Gallery: `gallery` at `http://localhost:4192/#icon-catalog`
- Part verification: `gallery/screenshots/icon-catalog-controls-part-verified-2026-06-07.png`, `gallery/screenshots/icon-catalog-grid-part-verified-2026-06-07.png`
- Gallery index: `references/GALLERY-REFERENCE.md`

Locking the catalog UI does not pre-verify every icon in the database. Individual icons still require visual verification before use unless listed in the locked shell icon map above.

Do not re-search or re-verify locked shell icons for routine web work unless a scaffold renders them incorrectly.

## Fixed Shell Icon Verification Protocol

Before locking or changing any shell icon mapping:

1. Read `../VISUAL-VERIFICATION.md`.
2. Capture a part screenshot of the control in the target scaffold.
3. Compare against a designer/product reference crop or locked gallery capture.
4. Verify glyph, treatment, size, spacing, color, and order independently.
5. Do not lock from CSV name match alone.

Observed failure to prevent: treating a full gallery page screenshot as proof that favorite, create, guidance center, and avatar controls are correct.

## Inline Button Icons

Utility SVG exports often include a fixed gray fill such as `#706E6B`. That is valid for standalone utility icons and dense row actions, but not for inline icons inside filled or semantic buttons.

For inline button icons, follow `STACK-WEB-BUTTONS.md`:

- inherit the button label color through `currentColor`
- verify brand/destructive/success inline icon color with a part screenshot
- locked gallery reference: `gallery/screenshots/button-icon-left-part-verified-2026-06-07.png`

## Use Tiers

- `primary`: `790`
- `secondary`: `184`
- `restricted`: `113`

Use `references/platform/STACK-WEB-QUICK-DECISIONS.md` for fixed header icon mappings.

## Usage Rules

- Use icons by exact manifest name and node ID.
- Do not invent icon names.
- Do not lock, approve, or mark an icon as final until it has been visually verified in the intended UI context.
- Visual verification is required for every icon, not only fixed shell icons.
- Prefer `Utility Icons` for actions and controls.
- Prefer `Standard Icons` for object/entity representation and section/card header leading icons at `32×32` with no outer border wrapper.
- Use `Doctype Icons` only for file/document type representation.
- Use `Action Icons` only for action-tile/action-specific iconography.
- Use `Custom Icons` only with exact designer direction or explicit Figma reference.
- If the designer provides a new Figma icon reference, inspect it with Figma MCP and update the manifest only after approval.

## Implementation Verification

When an icon is selected for implementation:

- Confirm the manifest row exists.
- Confirm the category fits the use case.
- Confirm the `useTier` is appropriate for implementation.
- Visually verify the icon before putting it into the UI.
- Visually verify the icon again in the target scaffold before locking it.
- Confirm the icon is appropriate for the intended meaning and component context.
- Confirm icon-only controls have accessible labels.
- If using the SVG asset pack, confirm the `assetPath` matches the selected database row.
- If visual precision matters, verify the selected icon against Figma MCP or the exported SVG before final handoff.
- If the visual check fails, go back to manifest search and choose another candidate instead of forcing the icon into the UI.

An icon is not locked if visual verification is missing, even when the manifest row and asset path are correct.

## Asset Pack

- Physical zip: `icon-assets/STACK-WEB-ICONS.zip`
- Raw SVG folder: `icon-assets/exported-svg/`
- Asset paths are listed in `icon-assets/STACK-WEB-ICONS-DATABASE.csv`.

See `icon-assets/README.md` for asset pack details.

## When To Use Figma MCP

Use Figma MCP again if:

- the designer provides an explicit Figma reference.
- the designer asks the agent to compare this extracted reference against the original Figma source.
- the icon is not present in the local manifest.
