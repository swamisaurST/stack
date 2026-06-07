# STACK Web Icon Assets

This folder is an icon database, not a prose document.

Do not load the full manifest into an agent context window. Search it narrowly.

## Files

- `STACK-WEB-ICONS-DATABASE.csv` — preferred search database for agents.
- `STACK-WEB-ICONS-DATABASE-SUMMARY.json` — category and tier counts.
- `exported-svg/` — physical SVG files exported from Figma by the designer.
- `STACK-WEB-ICONS.zip` — physical zip of `exported-svg/`.

## Search Workflow

1. Search `STACK-WEB-ICONS-DATABASE.csv` for the intended icon keyword.
2. Review only matching rows.
3. Pick one or more candidates by exact `name` and `nodeId`.
4. Check `useTier`.
5. Visually verify the candidate before placing it into the UI.
6. Select the final icon only after visual verification confirms the icon matches the intended meaning and component context.
7. Use `assetPath` when referencing the exported SVG asset pack.

Search finds candidates. Visual verification selects the icon.

No icon is final until it is visually verified in the UI context where it will appear. This applies to all icon usage, not only shell icons.

## Fixed Shell Icon Workflow

For fixed shell icons, search is not enough.

Fixed shell icons include the 9-dot app launcher and global header controls. Before using one:

1. Confirm the exact database row.
2. Confirm `assetPath`.
3. Confirm native size.
4. Confirm `useTier`.
5. Visually verify the SVG against the intended shell context.
6. Visually verify the SVG again in the target scaffold before locking it.
7. If the visual does not match, mark the mapping blocked and ask the designer.

Do not substitute a similar icon by filename or meaning.

Locked shell icons as of 2026-06-07:

- Full locked map: `../STACK-WEB-GLOBAL-HEADER.md` and `../STACK-WEB-ICONS.md`
- Reference implementation: `gallery`
- Verification screenshot: `gallery/screenshots/shell-controls-verified-2026-06-07.png`
- Reference comparison: `gallery/screenshots/shell-controls-reference-2026-06-07.png`
- Protocol: `references/VISUAL-VERIFICATION.md`

Routine web work must use the locked shell map without re-searching or re-verifying unless a scaffold renders an icon incorrectly.

## Locked Component Gallery Icons

As of 2026-06-07, button and table gallery references are locked:

- Buttons: `../STACK-WEB-BUTTONS.md` — specimen `components` per `references/GALLERY-REFERENCE.md`
- Sample table: `../STACK-WEB-TABLE.md` — specimen `table-sample` per `references/GALLERY-REFERENCE.md`
- Button spacing verification: `gallery/screenshots/buttons-spacing-verified-2026-06-07.png`
- Button inline icon color verification: `gallery/screenshots/button-icon-left-part-verified-2026-06-07.png`
- Table verification: `gallery/screenshots/table-sample-part-verified-2026-06-07.png`

Inline button icons must inherit button text color. Utility SVG fills such as `#706E6B` are not valid on filled brand/destructive/success buttons. See `../STACK-WEB-BUTTONS.md`.

## CSV Columns

- `name`
- `category`
- `iconName`
- `nodeId`
- `assetPath`
- `useTier`
- `verification`
- `notes`

## Use Tiers

- `primary`: normal searchable icon. Use after visual verification.
- `secondary`: action-tile/action-specific icon. Use after visual verification.
- `restricted`: ambiguous custom icon. Use only with exact designer direction or explicit Figma reference.

## Verification

Known export audit result:

- `1086` icons exported in memory.
- `1087` SVG files retained after removing ambiguous root-level exports.
- `0` export errors.
- `0` duplicate generated filenames.
- `0` embedded raster images.
- `0` empty or very small SVGs.
- `6` utility icons exported at `27x26` from `26x26` source nodes and require visual review before use in production UI.

The manual export included ambiguous root-level files such as `Frame`, `Group`, `Vector`, `Optional`, and `Job Task Badge`. These were removed from the kit to keep icon selection unambiguous.
