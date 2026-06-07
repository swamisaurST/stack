# STACK Web Reference Verification Rubric


Use this rubric when creating or auditing extracted web references in STACK.

Local STACK web references replace routine live Figma inspection. Apply these checks before agents rely on a reference for implementation work.

## Required Provenance

Verify that the reference includes:

- Source Figma file URL.
- Source node ID.
- Source node name.
- Extraction date.
- Extraction method, such as Figma MCP metadata, Figma MCP design context, screenshot inspection, exported asset, or manual designer confirmation.
- Extractor name or agent/session note when available.
- Known source caveats, such as WIP label, incomplete variants, oversized node, or missing documentation.

If provenance is incomplete, stop using the reference for implementation and ask the designer.

## Source Capture Checks

Verify that extraction was done at the right depth:

- Large Figma pages were not treated as complete if the MCP returned only sparse metadata.
- Complex components were drilled into variant or sublayer nodes when needed.
- Screenshots were captured or reviewed when visual parity matters.
- Temporary Figma asset URLs were not treated as permanent local assets.
- Extracted facts are separated from assumptions, interpretation, and recommendations.
- Any value copied from generated React/Tailwind context was translated into STACK language rather than copied as implementation truth.

## Visual Parity Checks

Verify visual parity before approval:

- Compare extracted values against source screenshots or a rendered review artifact.
- Check hierarchy, spacing, sizing, border treatment, radius, icon placement, labels, and density.
- Confirm that extracted values match the intended component state or variant.
- Confirm that hidden documentation frames, demo wrappers, and Figma documentation-only UI are not accidentally treated as product primitives.
- Confirm that the extracted reference describes the product component, not the Figma documentation page around it.

If a visual mismatch is found, document the mismatch and ask the designer before relying on the reference.

## Scaffold-Specific Visual Verification

Every implementation or design output must be visually verified in the scaffold where it was created.

Use the verification method that matches the creation destination:

- Figma: inspect the frame visually and capture a Figma screenshot when the tool supports it.
- Pencil: inspect the canvas visually and capture a Pencil screenshot when the tool supports it.
- React, HTML, or browser-rendered prototype: run the page, inspect it in browser, capture a page/section screenshot, and capture part screenshot(s) for fixed shell icons and brand assets per `../VISUAL-VERIFICATION.md`.
- LWC or scratch org: inspect the rendered component/page in the browser or org preview; capture a screenshot when possible.
- Storybook: inspect the story in the browser and capture a screenshot when possible.
- Markdown spec or handoff only: include a visual checklist and cite the reference files used; if no rendered artifact exists, disclose that visual verification is not complete.

Visual verification must check:

- the two-part web header structure when the output is web.
- component hierarchy and spacing.
- typography and color consistency.
- icon selection and visual meaning.
- table, button, card, and navigation density.
- SLDS 2 fallback components in their rendered state.

If screenshot capture is not available, document the browser/canvas/manual inspection method used and disclose the limitation.

For fixed shell icons and brand assets, a page screenshot alone is not sufficient. Apply `../VISUAL-VERIFICATION.md`.

## Token Accuracy Checks

Verify all token-like values:

- Typography values are exact: family, size, weight, line height, and intended use.
- Color values are exact and named by purpose, not only by hex.
- Grays are included only when used by real components, states, borders, or backgrounds.
- Border, radius, spacing, and sizing values come from extracted component evidence or approved STACK decisions.
- Icon names, categories, node IDs, and asset filenames match the extracted source.
- Selected icons are visually verified before being placed into UI.
- No token is invented to fill a gap.

If a token is missing or unclear, ask the designer or use Figma MCP again.

## Component Anatomy Checks

For component references, verify that the anatomy is clear:

- Required regions are named.
- Optional regions are named.
- Icon usage is documented.
- Icon selection explains how candidates are searched and visually verified before implementation.
- Action placement is documented.
- Text hierarchy is documented.
- Layout, alignment, density, and spacing are documented.
- Variant names match the source when source variants exist.
- Subcomponents are identified when they affect implementation.

The reference should let an agent understand what the component is made of without loading the entire Figma source.

## State Coverage Checks

Verify that relevant states are documented or explicitly marked out of scope:

- Default.
- Hover.
- Focus.
- Active or selected.
- Disabled.
- Loading.
- Empty or null.
- Error.
- Validation.
- Permission or read-only.
- Success or completed.

Not every component needs every state, but every reference must say which states are covered and which are not.

## Inheritance And Conflict Checks

Verify source precedence:

- The reference states whether it overrides SLDS 2 or supplements SLDS 2.
- Buttons and button groups override SLDS 2 for visual appearance, variants, and interaction states.
- Global header, component title group, card header, and table use STACK local references first.
- Any component not explicitly covered by STACK local references falls back to SLDS 2.
- If STACK and SLDS 2 conflict, the reference instructs the agent to ask the designer instead of inventing a resolution.

## Accessibility Checks

Verify accessibility expectations where relevant:

- Interactive components include focus behavior.
- Icon-only actions require accessible labels.
- Button groups explain selected state semantics.
- Tables document headers, row selection, sorting, pagination, and row actions where relevant.
- Color usage does not rely on color alone.
- Text and icon contrast concerns are documented if known.
- Keyboard behavior is documented or explicitly routed to SLDS 2 when not locally specified.

## Implementation Readiness Checks

Verify that an agent can use the reference without live Figma for routine work:

- The reference includes enough extracted facts for normal design and implementation decisions.
- The reference tells agents when Figma MCP is still needed.
- The reference tells agents when no MCP or external source inspection is needed because the local STACK structure is self-contained.
- The reference tells agents when to ask the designer.
- The reference avoids copying generated Tailwind or React as the final implementation standard.
- The reference maps Figma evidence into STACK concepts and target implementation guidance.
- The reference is concise enough to load with `references/platform/STACK-WEB-DESIGN.md` without causing context float.

## Context Control Checks

Verify that the reference stays scoped:

- It does not repeat the full STACK system prompt.
- It does not repeat the full source-precedence model from `references/platform/STACK-WEB-DESIGN.md`.
- It does not include unrelated components.
- It does not include low-value variant dumps unless those variants change agent behavior.
- It cites related references instead of duplicating them.

## Missing Detail Handling

Do not document unresolved decision-making inside a reference file as if it were guidance.

When extraction reveals a gap, conflict, or design decision:

1. Stop using that reference for implementation until resolved.
2. Surface the issue to the designer outside the reference file.
3. Explain what is missing or conflicting and why it matters.
4. Ask the designer for a resolution.
5. Document only the resolved decision in the reference.

Agents must not fill gaps with arbitrary choices.

## Completion Check

Before agents rely on a reference for routine work, confirm:

- The rubric was applied.
- The reference passed or documented every required check.
- Any blocking gaps were resolved with the designer.
- Visual verification was completed where the reference affects rendered UI.

Do not add status labels to reference files.
