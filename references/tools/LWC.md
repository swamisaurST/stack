# STACK Tool Context: LWC / Salesforce

Use this file when the creation destination is a Lightning Web Component or any Salesforce surface — scratch org, sandbox, packaging org, App Builder preview, Experience Cloud site, or Lightning Record Page. The STACK gates apply unchanged; this file documents how to satisfy them inside Salesforce's runtime, DOM, and component model.

Load when the destination is LWC or scratch org. Defer to this file for verification specifics; defer to `references/platform/STACK-WEB-DESIGN.md` for visual rules.

## Native Salesforce Mapping

| Concern | Use |
|---|---|
| Component runtime | Lightning Web Components on Lightning Experience or Experience Cloud |
| Behavior fallback | SLDS 2 (Salesforce Lightning Design System v2) for components STACK does not cover |
| Visual primitives | STACK tokens applied via inline styles, scoped CSS, or SLDS Styling Hooks (`--sds-c-*`) |
| Icons | Prefer `lightning-icon` for SLDS utility/standard icons; fall back to inline SVG copied from `gallery/public/stack-icons/` for STACK-locked shell assets |
| Behavior | `lightning-button`, `lightning-tabset`, `lightning-accordion`, `lightning-record-form`, `lightning-datatable`, etc. |
| Output location | Salesforce DX project (`force-app/main/default/lwc/...`) or scratch org as designated by the designer |

## Source Precedence For LWC

1. STACK web references for visual structure and locked patterns.
2. Existing Lightning Base Components for behavior and accessibility.
3. SLDS 2 utility classes and styling hooks for uncovered visuals.
4. Ask the designer when STACK and Lightning Base Components conflict on shape, density, or interaction.

Do not reimplement a Lightning Base Component to match STACK pixel for pixel when the base component already provides correct behavior — apply STACK tokens via styling hooks instead.

## Required First Step

Before scaffolding LWC files:

1. Confirm platform is `web`, destination is `LWC`, and output location is the agreed Salesforce DX folder or scratch target.
2. Resolve the matching bundle with `./design/stack/scripts/resolve-bundle.sh <bundle> --mode=implement`. LWC implementation always uses full refs.
3. Load `references/platform/STACK-WEB-DESIGN.md`, `references/platform/STACK-WEB-QUICK-DECISIONS.md`, and `references/web/STACK-WEB-COMPONENT-PRECEDENCE.md`.
4. Load the component refs the LWC actually uses (header, table, list row, RHP, buttons, pills, path stages).
5. Load `references/VISUAL-VERIFICATION.md` whenever the LWC renders shell icons, brand assets, locked header controls, dense table rows, or STACK pills.

## Component Mapping (STACK ↔ Lightning Base + SLDS 2)

| STACK area | Use in LWC |
|---|---|
| Two-part web shell | Custom LWC inside `Lightning App Page` or Experience Cloud header slot — STACK owns the visuals; do not substitute Salesforce default headers |
| Buttons | `lightning-button` with STACK variant tokens via styling hooks; STACK owns inline icon color (`currentColor`) |
| Button groups (segmented) | `lightning-button-group` plus STACK selected-state visuals |
| Tables | `lightning-datatable` for behavior; apply STACK header chrome and row density via styling hooks. For non-Salesforce records, use a custom LWC with STACK table tokens. |
| Compact list rows | Custom LWC; do not force `lightning-datatable` into a list shape |
| Path stages | Compare `stPicklistPathLWC` / Storybook `PicklistPath` with STACK path stage rules; ask the designer if behavior diverges |
| Right hand panel | `lightning-tabset`, `lightning-accordion`, `lightning-record-form` plus STACK panel chrome |
| Modal / popover / tooltip / toast | Lightning Base or SLDS 2; STACK does not own these visuals |
| Forms / inputs | Lightning Base form components; apply STACK typography and color tokens |
| Local tabs (non-shell) | `lightning-tabset` |
| Icons (utility/standard) | `lightning-icon` (manifest name match is acceptable for SLDS-managed icons; visual verification still required for STACK-locked shell assets) |

## Verification Protocol For LWC

`references/VISUAL-VERIFICATION.md` Level 1 + Level 2 still apply. Salesforce runtime adds friction:

- Lightning DOM is shadow-encapsulated. STACK shell selectors (e.g., `.product-global-actions`) will not match `lightning-*` shadow trees. Use one of:
  - Render the LWC inside a Local Development Server (`sfdx force:lightning:lwc:start`) and screenshot the rendered DOM.
  - Capture in App Builder preview or scratch org and crop manually.
  - For shell-style custom LWCs that own their own DOM (no Lightning Base nesting), those selectors apply directly.
- Org/browser inspection counts as Level 1; tight crops of fixed shell assets count as Level 2.
- Capture the rendered LWC inside a representative Lightning record page or App Page when shell, header, or layout is in scope. Include the full Salesforce chrome around the component so layout interactions are visible.

Required handoff fields when LWC is the destination:

- `Visual verification`: cite the Local Dev Server screenshot or scratch-org crop path.
- `Part screenshot(s)`: tight crops of locked controls and STACK-distinct visuals.
- `Controls compared`: list the STACK controls plus any Lightning Base wrappers checked.
- `Open gaps`: any pattern blocked by Salesforce platform constraints (LDS field permissions, container width, etc.).

## Implementation Notes

- Apply STACK tokens via styling hooks first; only write component-scoped CSS when no styling hook covers the property.
- Preserve `lightning-button`/`lightning-icon` semantics — do not reimplement to chase pixel parity. STACK owns the *visual contract*; Lightning Base owns *behavior + accessibility*.
- Inline SVGs copied for STACK-locked shell icons must match the gallery `public/stack-icons/` set exactly. Do not modify glyph paths.
- For LWC tests, prefer Jest tests for behavior and the visual verification protocol for visuals; do not treat passing Jest as visual verification.

## Output Locations

- LWC source: `force-app/main/default/lwc/<componentName>/` in the agreed Salesforce DX project.
- Storybook stories that mirror the LWC: see `references/tools/STORYBOOK.md`.
- Designer review captures: under the designer-approved folder outside `design/stack/`.

## Stop Conditions

Stop and ask the designer when:

- The Salesforce target (scratch org, sandbox, package) is unspecified.
- The LWC is meant to override a Lightning Base Component without designer approval.
- A STACK pattern conflicts with a Lightning Base behavior the org depends on.
- Shadow-DOM constraints prevent part-screenshot capture and no fallback verification path is approved.

## Related References

- `references/platform/STACK-WEB-DESIGN.md` — visual rules.
- `references/web/STACK-WEB-COMPONENT-PRECEDENCE.md` — STACK vs SLDS 2 ownership.
- `references/VISUAL-VERIFICATION.md` — required two-level verification.
- `HANDOFF.md` — output rubric.
- `references/web/STACK-WEB-PATH-STAGES.md` — path stage behavior + LWC product reference.
- `references/tools/STORYBOOK.md` — Storybook story conventions for LWC documentation surfaces.
