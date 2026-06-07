# STACK Web Component Title Group


Use this reference for the second row of the Sitetracker web header: the 9-dot app launcher, page/app/module title, and optional subtitle/subheading/tab navigation.

This second-row structure is scaffold agnostic. Apply it in Figma, Pencil, React, LWC, Storybook, Markdown specs, Cursor, Claude Code, or another supported environment without rediscovering it from Figma or MCP.

## Source

- Primary Figma reference: [GIS/PT Header](https://www.figma.com/design/fnKFvD3YGb99nVG2XXlEXY/GIS---PT-improvements--Metallica-PI-10?node-id=1325-20956&t=spdlCtGfzDkIHLz2-1)
- Primary source node ID: `1325:20956`
- Primary source node name: `Header`
- Supporting library source: [Sitetracker Web Design Library / Global Navigation](https://www.figma.com/design/P7QZySjFIHNpkaCJ80yCHo/Sitetracker-Web-Design-Library?node-id=1544-18618&t=cgcwd0WOR9zFu8or-1)
- Extraction date: 2026-06-04
- Extraction method: Figma MCP metadata, Figma MCP design context, Figma MCP screenshot, designer-provided visual screenshot, and gallery screenshot verification on 2026-06-07.
- Screenshot check: screenshot captured through Figma MCP and visually compared with the designer-provided header screenshot. Final parity verified in `gallery/screenshots/shell-m7-search.png`.

## Inheritance

This reference overrides SLDS 2 for the Sitetracker web second-row title/navigation group.

Use SLDS 2 only for accessibility semantics, keyboard behavior, ARIA patterns, and menu behavior not defined here. Do not substitute generic SLDS tabs for this global navigation pattern when the STACK web shell is required.

## Anatomy

The extracted GIS/PT second-row component:

- Width in source: `1440px`
- Height: `40px`
- Fill: `#FFFFFF`
- Left offset for navigation items: `24px`
- Top-level item gap: `24px`
- Selected indicator: `#00847C`
- Selected tab background: `#EBF5F4`

Required regions:

1. 9-dot app launcher menu.
2. Page, app, or module title.
3. Optional subtitle, subheading, or tab-like navigation item.
4. Optional dropdown affordances inside tab-like items.

## Alignment Contract

The second row must be implemented as part of the global shell, not as an independent page header.

Required alignment:

- The 9-dot launcher starts the second row at the documented left navigation offset.
- The page/app/module title appears immediately after the 9-dot launcher with the documented top-level item gap.
- The title baseline and launcher center should visually align with the `40px` second-row height.
- The title row must not use arbitrary page content padding or centered page constraints.
- Do not style the page title as a marketing headline or card title. It is the shell module title.
- If the launcher icon asset, size, or row alignment does not visually match the source shell, stop and ask the designer.

## Page Or Module Title

Extracted example:

- Label text: `Sitetracker GIS Link`
- Font family: `SF Pro Text`
- Size: `18px`
- Line height: `27px`
- Color: black in extracted source.

Use this text for the current page, app, or module identity. It sits immediately after the 9-dot menu.

Do not place this title in the top global bar.

## GIS/PT Navigation Labels

The GIS/PT reference shows these second-row labels:

- `Sitetracker GIS Link` as the page/app/module title.
- `Sitetracker Maps` selected, with dropdown icon.
- `Areas`, with dropdown icon.
- `Sites`, with dropdown icon.
- `Map Layers`, with dropdown icon.
- `Map Object Configurations`, with dropdown icon.

Agents should not reuse these labels outside GIS/PT unless the designer confirms that the target module uses the same navigation structure.

For other web pages, preserve the structure but replace the title and tab labels with page-specific content.

## Tab Variants

The source includes `4` tab variants:

| Icon | Selected | Width | Height | Fill | Text |
|---|---:|---:|---:|---:|---:|
| false | false | `58px` | `37px` | `#FFFFFF` | `#080707` |
| false | true | `58px` | `37px` | `#EBF5F4` | `#080707` |
| true | false | `86px` | `37px` | `#FFFFFF` | `#080707` |
| true | true | `86px` | `37px` | `#EBF5F4` | `#080707` |

Tab label:

- Font family: `SF Pro Text`
- Size: `13px`
- Line height: `20px`
- Weight: `400`
- Color: `#080707` in extracted source.

Dropdown icon:

- Source icon: `Utility Icons / C / chevrondown`
- Size: `16x16`
- Use only when the tab opens a menu or contains child navigation.

Selected tab:

- Fill: `#EBF5F4`
- Top inset indicator: `#00847C`
- Indicator thickness in source: `3px`

## Usage Rules

- Use this region directly below the top global bar on every STACK web page.
- Always begin this row with the 9-dot app launcher menu.
- Always place the page, app, or module title immediately after the 9-dot menu.
- Use optional tab-like items for subtitles, subheadings, related module sections, or top-level navigation under that title.
- Use exactly one selected tab when navigation state is known.
- Use dropdown tabs only when the tab has child navigation.
- Keep tab labels short.
- Do not use this pattern for local in-card tabs or local page sections. Use SLDS 2 or the relevant component reference for local tabs.
- Do not invent navigation tabs that are not part of the product/module information architecture.

## Locked App Launcher

The 9-dot app launcher is locked for the second row:

| Control | Manifest name | Node ID | Asset path | Native size | Accessible label |
|---|---|---|---|---|---|
| 9-dot app launcher | `Utility Icons  / A / apps` | `1518:28648` | `icon-assets/exported-svg/Utility Icons/A/apps.svg` | `24x24` | App launcher |

Use this asset at the documented left navigation offset. Do not draw ad hoc dot grids when the locked asset is available.

## Icon Consistency

- The 9-dot app launcher must use the locked mapping above.
- Dropdown affordances must use the local icon database and be visually verified before implementation.
- Do not draw ad hoc dots, arrows, chevrons, or menu icons manually when a database icon exists.
- If a needed navigation icon is not present in the database, ask the designer before using an alternate source.

## Scaffold-Agnostic Implementation Contract

The second row must keep the same structure in every creation destination:

- Figma or Pencil: draw the 9-dot menu, title, and optional tab-like items.
- React or LWC: implement the 9-dot menu, title, and optional tab-like items.
- Storybook: document the row structure, selected state, dropdown tabs, and title behavior.
- Markdown handoff: specify the row structure and page-specific title/tab labels.

Do not call MCP or inspect external references to recreate the standard second row during routine web work. The structure in this file is sufficient.

## Relationship To Global Header

Use this reference with `STACK-WEB-GLOBAL-HEADER.md`.

The top global bar owns:

- logo.
- global search.
- global controls.

This second row owns:

- page, app, or module identity.
- optional subtitle/subheading/tab navigation.
- selected navigation state.

Do not place global actions in this navigation row.

## Related References

- Use `STACK-WEB-GLOBAL-HEADER.md` for the header above this region.
- Use `STACK-WEB-TYPOGRAPHY.md` for typography.
- Use `STACK-WEB-COLORS.md` for selected teal background and indicator colors.
- Use `STACK-WEB-ICONS.md` for waffle and dropdown icons.

## When External Source Inspection Is Allowed

Use external source inspection only if:

- the designer provides an explicit external design reference.
- the designer asks the agent to compare this extracted reference against the original Figma source.
- a navigation variant is not represented here.
- visual precision is required for tab spacing, selected state, or dropdown icon alignment.
