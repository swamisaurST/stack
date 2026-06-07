# STACK Web Global Header


Use this reference for the Sitetracker web header shell. Every STACK web page should include this two-part header unless the designer explicitly states that the target surface does not use the Sitetracker web shell.

This header structure is scaffold agnostic. Apply it in Figma, Pencil, React, LWC, Storybook, Markdown specs, Cursor, Claude Code, or another supported environment without rediscovering it from Figma or MCP.

## Source

- Primary Figma reference: [GIS/PT Header](https://www.figma.com/design/fnKFvD3YGb99nVG2XXlEXY/GIS---PT-improvements--Metallica-PI-10?node-id=1325-20956&t=spdlCtGfzDkIHLz2-1)
- Primary source node ID: `1325:20956`
- Primary source node name: `Header`
- Supporting library source: [Sitetracker Web Design Library / Global Header](https://www.figma.com/design/P7QZySjFIHNpkaCJ80yCHo/Sitetracker-Web-Design-Library?node-id=1542-10067&t=cgcwd0WOR9zFu8or-1)
- Extraction date: 2026-06-04
- Extraction method: Figma MCP metadata, Figma MCP design context, Figma MCP screenshot, designer-provided visual screenshot, and gallery screenshot verification on 2026-06-07.
- Screenshot check: screenshot captured through Figma MCP and visually compared with the designer-provided header screenshot. Final parity verified in `gallery/screenshots/shell-m7-search.png`.

## Inheritance

This reference overrides SLDS 2 for Sitetracker web global header composition.

Use SLDS 2 only for accessibility semantics, keyboard behavior, and implementation details not covered here. Do not substitute a generic SLDS page header for this global header.

## Header Anatomy

Default web header shell:

- Width in source: `1440px`
- Full shell height: `92px`
- Top global bar height: `48px`
- Second navigation/title row height: `40px`
- Gap between rows: `4px`
- Fill: `#FFFFFF`
- Logo mark: left aligned, `16px` from left, `28x26`, top offset `11px`
- Search input: centered, `401x32`, top offset `8px`
- Right controls group: `225x32`, right aligned, top offset `8px`

Header regions:

Top global bar:

1. Sitetracker mark.
2. Global search input.
3. Favorite control.
4. Global create control.
5. Guidance Center icon.
6. Help/question icon.
7. Setup icon.
8. Notification icon.
9. Avatar.

Second navigation/title row:

1. 9-dot app launcher menu.
2. Page, app, or module title.
3. Optional subtitles, subheadings, or tab-like navigation items.

## Cross-Row Alignment Contract

The top global bar and second title/navigation row must be visually aligned as one shell system.

Required checks:

- The Sitetracker mark in the top global bar and the 9-dot launcher in the second row must preserve the intended left-rail relationship from the source shell.
- The second-row title must align with the 9-dot launcher as documented in `STACK-WEB-COMPONENT-TITLE-GROUP.md`.
- Do not independently center, pad, or resize the top logo and second-row launcher.
- Do not use generic flex spacing that makes the logo and launcher appear unrelated.
- If the implementation scaffold cannot match the extracted offsets with the documented values, stop and ask the designer or inspect the source visually.

## Search Input

Extracted search input:

- Width: `401px`
- Height: `32px`
- Fill: `#FFFFFF`
- Border: `#DDDBDA`
- Radius: `4px`
- Placeholder text: `Search...`
- Placeholder style: `Body 3`
- Placeholder size: `13px`
- Placeholder color: `#706E6B`
- Search icon: `Utility Icons / S / search`, `16x16`

Use this search region only for global search. Do not repurpose it as a page-level filter field.

## Controls

Right control sizes:

- Avatar: `32x32`, brand teal fill `#00847C`
- Notification: `Utility Icons / N / notification`, `24x24`
- Setup: `Utility Icons / S / setup`, `24x24`
- Help/question: `Utility Icons / Q / question`, `24x24`
- Guidance Center: `Utility Icons / T / trailhead_alt` (SLDS `utility:trailhead_alt`), shield-and-mountain badge at `24x24`
- Global create: `Utility Icons / A / add`, `24x24`, inside solid gray square with white plus icon
- Favorite control: `41x24`

Default utility icon color in the extracted header is `#706E6B`.

All icon controls require accessible labels in implementation.

## Locked Top Bar Control Order

Agents must preserve this exact left-to-right order in the top global bar:

1. Sitetracker wordmark.
2. Global search.
3. Favorite with dropdown affordance.
4. Global create.
5. Guidance Center.
6. Help.
7. Setup.
8. Notification.
9. Avatar.

Do not reorder, omit, or substitute controls in this locked shell.

## Locked Shell Icon Map

These mappings are locked after visual verification against the Sitetracker Admin product header on 2026-06-07.

| Control | Manifest name | Node ID | Asset path | Native size | Accessible label |
|---|---|---|---|---|---|
| Sitetracker wordmark | Brand asset | — | `sitetracker-lettermarks.svg` | wordmark | Sitetracker home |
| Global search icon | `Utility Icons / S / search` | `1518:29174` | `icon-assets/exported-svg/Utility Icons/S/search.svg` | `16x16` | Search |
| Favorite | `Utility Icons / F / favorite` | `1518:28842` | `icon-assets/exported-svg/Utility Icons/F/favorite.svg` | `24x24` | Favorites |
| Favorite dropdown | `Utility Icons / D / down` | `1518:28798` | `icon-assets/exported-svg/Utility Icons/D/down.svg` | `16x16` | — |
| Global create | `Utility Icons / A / add` | `1518:28618` | `icon-assets/exported-svg/Utility Icons/A/add.svg` | `24x24` | Create |
| Guidance Center | `Utility Icons / T / trailhead_alt` | — | `guidance-center.svg` (SLDS `utility:trailhead_alt`) | `24x24` | Guidance Center |
| Help | `Utility Icons / Q / question` | `1518:29090` | `icon-assets/exported-svg/Utility Icons/Q/question.svg` | `24x24` | Help |
| Setup | `Utility Icons / S / setup` | `1518:29184` | `icon-assets/exported-svg/Utility Icons/S/setup.svg` | `24x24` | Setup |
| Notification | `Utility Icons / N / notification` | `1518:29010` | `icon-assets/exported-svg/Utility Icons/N/notification.svg` | `24x24` | Notifications |
| Avatar mark | Brand asset | — | `sitetracker-mark.svg` | `32x32` | User profile |

Notes:

- Figma source labeled global create as `Untracked Icon / Global Create`. The locked local mapping is `Utility Icons / A / add` after product screenshot verification.
- Guidance Center uses `trailhead_alt` (shield/mountain badge). Do not use landscape `Utility Icons / T / trailhead`.
- The 9-dot app launcher for the second row is locked in `STACK-WEB-COMPONENT-TITLE-GROUP.md`.

## Locked Control Treatments

Source values below are at product scale. The gallery preview uses proportional preview-scale rendering.

- Favorite control: split button with two equal segments separated by a vertical divider. Left segment: star icon. Right segment: dropdown caret. White fill, border `#C9C7C5`, radius `4px`. Source size `41x24`.
- Global create: solid gray rounded square, fill `#8D8F91`, white plus icon centered inside, size aligned with neighboring utility icons. Do not use an outlined white square with gray plus.
- Guidance Center, Help, Setup, and Notification: standalone utility icons at `24x24`, color `#706E6B`.
- Avatar: circular, brand teal fill `#00847C`, gray border `#C9C7C5`, Sitetracker mark centered inside. Do not use Salesforce blue `#0176D3`.
- Search input: white fill, border `#DDDBDA`, radius `4px`, placeholder `Search...`, placeholder color `#706E6B`.

## Visual Verification Record

Locked on 2026-06-07 after designer review of icon-level mismatches.

| Artifact | Path |
|---|---|
| Gallery controls part capture | `gallery/screenshots/shell-controls-verified-2026-06-07.png` |
| Product reference controls crop | `gallery/screenshots/shell-controls-reference-2026-06-07.png` |
| Gallery section context capture | `gallery/screenshots/shell-plus-size-fix-2026-06-07.png` |

Controls verified by part comparison:

- Favorite split button and divider
- Global create solid gray square and white plus sizing
- Guidance Center `trailhead_alt` shield badge
- Help, setup, notification glyphs
- Avatar teal fill and border

Verification protocol: `references/VISUAL-VERIFICATION.md`

## Reference Implementation

Use the component gallery as the locked browser-rendered reference:

- Gallery path: `gallery`
- Preview component: `StackShellPreview` in `src/App.jsx`
- Styles: `src/styles.css` under `.product-header` and related classes
- Verification URL: `http://localhost:4192/#shell`
- Part verification screenshot: `gallery/screenshots/shell-controls-verified-2026-06-07.png`
- Reference comparison screenshot: `gallery/screenshots/shell-controls-reference-2026-06-07.png`

When implementing the header in another scaffold, match this reference structure and locked icon map before adjusting for scaffold-specific layout constraints.

## Header Asset Consistency

- The Sitetracker mark is a required SVG brand asset and must be consistent across all STACK web designs.
- Treat the Sitetracker mark as a brand asset, not as a selectable icon from the icon database.
- Do not replace the Sitetracker mark with text, a standard icon, a custom icon, or a raster screenshot.
- Header utility icons must use the locked shell icon map in this file.
- The 9-dot app launcher belongs to the second row and is locked in `STACK-WEB-COMPONENT-TITLE-GROUP.md`.
- Do not substitute similar utility icons for locked shell controls.

Fixed shell icon rule:

- Name match is not sufficient for shell icons outside the locked map.
- The Sitetracker mark, 9-dot launcher, and locked top-bar controls require exact asset path, native size, and visual verification.
- If a locked mapping appears visually wrong in a new scaffold, stop and ask the designer. Do not substitute a similar utility icon.

## Layout Rules

- Always use the two-part header for web interface design.
- Keep the top global bar consistent across all web pages.
- Keep the top global bar height at `48px`.
- Keep the Sitetracker mark on the left of the top global bar.
- Keep global search visually centered in the top global bar.
- Keep global controls grouped on the right of the top global bar.
- Keep page/module-specific identity and tabs in the second row, not the top global bar.
- Always start the second row with the 9-dot app launcher menu.
- Place the page, app, or module title immediately after the 9-dot menu.
- Place optional subtitles, subheadings, or tab-like navigation items after the title.
- Do not add page-specific actions into the top global bar.
- Do not replace the Sitetracker mark or 9-dot menu with text.
- Do not invent new global controls without designer approval.
- Do not present a web output as ready until the Sitetracker mark, second-row 9-dot launcher, and title group alignment have been visually checked in the target scaffold.

## Scaffold-Agnostic Implementation Contract

The web header shell must keep the same structure in every creation destination:

- Figma or Pencil: draw the same two-part shell.
- React or LWC: implement the same two-part shell.
- Storybook: document the same two-part shell and states.
- Markdown handoff: specify the same two-part shell.

Do not call MCP or inspect external references to recreate the standard shell during routine web work. The structure in this file is sufficient.

## Fixed Or Sticky Behavior

This reference defines the global header component, not page scroll behavior.

Whether the header is fixed, sticky, or part of a larger fixed page shell must be decided by the page/module reference or the designer. Do not infer fixed behavior from this component alone.

## Related References

- Use `STACK-WEB-COLORS.md` for colors.
- Use `STACK-WEB-TYPOGRAPHY.md` for search placeholder typography.
- Use `STACK-WEB-ICONS.md` for icon selection and visual verification.
- Use `STACK-WEB-COMPONENT-TITLE-GROUP.md` for the second navigation/title row.

## When External Source Inspection Is Allowed

Use external source inspection only if:

- the designer provides an explicit external design reference.
- the designer asks the agent to compare this extracted reference against the original Figma source.
- a page requires a modified header state or shell behavior.
- visual precision is required for logo/search/control alignment.
