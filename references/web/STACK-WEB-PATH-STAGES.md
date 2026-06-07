# STACK Web Path Stages


Use this reference for Sitetracker web path stages (chevron stage steppers). Path stages are a STACK web primitive derived from the SLDS path blueprint with Sitetracker color and typography treatment.

## Source

- Figma file: [Sitetracker Web Design Library](https://www.figma.com/design/P7QZySjFIHNpkaCJ80yCHo/Sitetracker-Web-Design-Library?node-id=2493-2664&t=dKANgYtmiDs2y9F9-1)
- Source node ID: `2493:2664`
- Source node name: `Path Stages`
- Extraction date: 2026-06-07
- Extraction method: Figma library screenshot, SLDS path blueprint cross-check, and STACK color token alignment.
- Screenshot check: verified against user-provided Figma capture during integration.

## Inheritance

This reference overrides SLDS 2 for Sitetracker web path stage visuals, including chevron segment fill, typography, spacing, and state colors.

Use SLDS 2 for path behavior and accessibility semantics not defined here:

- keyboard navigation between stages.
- `listbox` / `option` roles and `aria-selected`.
- coaching panel behavior when present.
- scroll overflow controls for long stage lists.

Do not use SLDS 2 default path colors (Salesforce blue and green) when a STACK path rule exists.

## When To Use

Use path stages when:

- a picklist or workflow field represents ordered stages.
- the user needs to see progress through a short linear process.
- stage selection is the primary status control on a record page or card header region.

Do not use path stages when:

- steps are not sequential or reversible order matters visually. Consider a progress indicator instead.
- there are more than seven stages in the primary view without overflow treatment. Confirm with the designer.
- the workflow is better served by tabs or a compact status pill.

## Anatomy

Default horizontal path anatomy:

- Track container: full-width flex row inside an optional bordered card shell.
- Stage item: chevron segment with skewed `:before` / `:after` connectors.
- Stage link: centered label region, `32px` tall.
- Optional stage icon area: checkmark for completed stages.
- Optional coaching block below the track when guidance text is required.

Default geometry (Figma node `2493:2664` extracted 2026-06-07):

- Stage height: `22px`
- Minimum stage width: `55px` (`3.4375rem` at scaled density)
- Horizontal segment overlap margins: `4px` left / `5px` right between chevrons
- First segment: rounded left cap (`11px` radius)
- Last segment: rounded right cap (`11px` radius)
- Label style: `12px`, line height `22px`, centered, ellipsis on overflow

SLDS blueprint maps to `32px` at full scale. The Sitetracker Figma specimen exports at `22px` track height inside a `1024px`-wide frame with `16px` shell padding.

Optional bordered specimen shell (Figma `Path Stages` frame):

- Background: `#FFFFFF`
- Border: `1px solid #DDDBDA`
- Border radius: `4px`
- Padding: `16px`
- Frame label: `Body 4`, `#706E6B`, placed above the shell

## Stage States

Path stages classify each step relative to the current value:

| State | SLDS classes | Visual treatment | Label color |
|---|---|---|---|
| Complete | `slds-is-complete` | Fill `#01726C`, white checkmark in stage area | `#FFFFFF` |
| Current / active | `slds-is-current slds-is-active` | Fill `#01726C` | `#FFFFFF` |
| Current / editable (mark stage) | `slds-is-current` only | White fill, `2px` `#00847C` outline on first segment or inset border treatment on inner segments | `#00847C` |
| Incomplete | `slds-is-incomplete` | Fill `#F3F2F2` | `#17191C` |
| Incomplete hover | `slds-is-incomplete:hover` | Fill `#DDDBDA` | `#17191C` |

Hover/active darkening for filled stages uses `#00736C` (`ST Teal Dark`).

The Figma `Path Stages` specimen shows three filled teal segments (`Open`, `Needs Review`, `Closed`) and documents the filled-segment treatment. Interactive implementations must still distinguish complete, current, and incomplete states in live data.

## Color Tokens

| Token | Hex | Use |
|---|---:|---|
| ST Teal Dark / Path Fill | `#01726C` | Complete and active stage fill (Figma extracted) |
| ST Teal Dark Hover | `#01564F` | Hover on filled stages |
| Text Default | `#17191C` | Incomplete stage label |
| Section | `#F3F2F2` | Incomplete stage fill |
| Border | `#DDDBDA` | Incomplete hover, optional outer shell |
| Text Inverse | `#FFFFFF` | Filled stage label and checkmark |

## Interaction Rules

- When editable, users may activate incomplete or complete stages to change the underlying picklist value.
- The current stage should not re-submit when clicked.
- Provide an accessible name via `aria-label` on the path region and stage list.
- Preserve keyboard focus on the current stage option.
- Do not hide stage labels on desktop widths; mobile may collapse to the current stage name only when SLDS coaching/mobile path rules require it.

## Implementation Notes

- Prefer SLDS path class structure (`slds-path`, `slds-path__nav`, `slds-path__item`, etc.) with STACK color overrides.
- Product reference: `stPicklistPathLWC` / Storybook `PicklistPath` for behavior shape.
- Apply STACK colors through CSS overrides or SLDS 2 global hooks; do not hardcode Salesforce blue/green path colors.
- Long stage lists should use the SLDS scroller overflow pattern rather than wrapping segments onto multiple rows.

## Gallery Reference

Locked browser-rendered reference in the STACK component gallery (`#path-stages`). Verified 2026-06-07.

- Gallery: `gallery` at `http://localhost:4192/#path-stages`
- Part verification: `gallery/screenshots/path-stages-track-part-verified-2026-06-07.png`, `gallery/screenshots/path-stages-specimen-verified-2026-06-07.png`
- Gallery index: `references/GALLERY-REFERENCE.md`

## Verification Checklist

- [ ] Chevron overlap and end caps match the Figma specimen.
- [ ] Filled stages use `#01726C`, not SLDS blue/green or `#00847C` unless designer updates the Figma source.
- [ ] Incomplete stages use `#F3F2F2` with `#17191C` labels.
- [ ] Current editable stage shows outline treatment, not filled teal, unless also active.
- [ ] Completed stages show a checkmark and white label.
- [ ] Keyboard and `aria-selected` behavior verified for interactive paths.

## When Not To Use

- Non-linear workflows, branching states, or status that is not order-dependent.
- Dense table/list rows where a pill or badge is sufficient.
- Global page navigation (use second-row tabs from `STACK-WEB-COMPONENT-TITLE-GROUP.md`).
