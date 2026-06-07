# STACK Web Global Header (Compact)


Compact decision view of `STACK-WEB-GLOBAL-HEADER.md`. Use for audits, routine layout work, and small-model bootstrap when a page just needs the standard shell. Promote to the full reference when verifying or locking shell icons, comparing against product reference crops, or implementing the header in a new scaffold.

Authoritative file: `STACK-WEB-GLOBAL-HEADER.md`.

## Inheritance

- STACK owns the two-part global header composition and locked icon map.
- SLDS 2 contributes only accessibility and keyboard semantics.
- The 9-dot launcher and second-row title group live in `STACK-WEB-COMPONENT-TITLE-GROUP.md`.

## Anatomy

- Source width: `1440px`
- Full shell height: `92px`
- Top global bar height: `48px`
- Second row height: `40px`
- Gap between rows: `4px`
- Fill: `#FFFFFF`
- Logo mark: left, `16px` from left, `28x26`
- Search input: centered, `401x32`
- Right control group: `225x32`, right aligned

## Top Bar Locked Order

1. Sitetracker wordmark
2. Global search
3. Favorite (with dropdown)
4. Global create
5. Guidance Center
6. Help
7. Setup
8. Notification
9. Avatar

Do not reorder, omit, or substitute controls.

## Locked Shell Icon Map

| Control | Manifest name | Asset path | Native size |
|---|---|---|---|
| Sitetracker wordmark | Brand asset | `sitetracker-lettermarks.svg` | wordmark |
| Global search icon | `Utility Icons / S / search` | `icon-assets/exported-svg/Utility Icons/S/search.svg` | `16x16` |
| Favorite | `Utility Icons / F / favorite` | `icon-assets/exported-svg/Utility Icons/F/favorite.svg` | `24x24` |
| Favorite dropdown | `Utility Icons / D / down` | `icon-assets/exported-svg/Utility Icons/D/down.svg` | `16x16` |
| Global create | `Utility Icons / A / add` | `icon-assets/exported-svg/Utility Icons/A/add.svg` | `24x24` |
| Guidance Center | `Utility Icons / T / trailhead_alt` | `guidance-center.svg` | `24x24` |
| Help | `Utility Icons / Q / question` | `icon-assets/exported-svg/Utility Icons/Q/question.svg` | `24x24` |
| Setup | `Utility Icons / S / setup` | `icon-assets/exported-svg/Utility Icons/S/setup.svg` | `24x24` |
| Notification | `Utility Icons / N / notification` | `icon-assets/exported-svg/Utility Icons/N/notification.svg` | `24x24` |
| Avatar mark | Brand asset | `sitetracker-mark.svg` | `32x32` |

Default utility icon color: `#706E6B`.

## Locked Treatments (Quick Reference)

- Favorite: split button, two equal segments separated by vertical divider; star + dropdown caret; white fill, border `#C9C7C5`, radius `4px`, source size `41x24`.
- Global create: solid gray rounded square, fill `#8D8F91`, white plus icon centered.
- Guidance Center, Help, Setup, Notification: standalone utility icons at `24x24`, color `#706E6B`.
- Avatar: circular, brand teal `#00847C`, gray border `#C9C7C5`, Sitetracker mark centered. Do not use Salesforce blue `#0176D3`.
- Search input: white fill, border `#DDDBDA`, radius `4px`, placeholder `Search...` in `#706E6B`.

## When To Promote To Full Ref

- Verifying or locking shell icons with part screenshots.
- Comparing rendered header against the product reference crop.
- Implementing the header in a new scaffold.
- Evaluating cross-row alignment between the wordmark and 9-dot launcher.

## Reference Implementation Pointer

- Gallery: `gallery`
- Gallery: `gallery` at `http://localhost:4192/#shell`
- Verification protocol: `references/VISUAL-VERIFICATION.md`
