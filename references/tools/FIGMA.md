# Tool Context: Figma

Use when the destination is Figma, including working from a designer-provided Figma file in Cursor (via the Figma MCP/Dev Mode connector) or producing Figma frames.

## Native Mapping

- Source of truth for this task: the designer-named Figma file/frame. Inspect it before deciding (Law 1, Law 6).
- In Cursor: use the Figma connector to read frames, variables, and Dev-Mode specs. Treat what you read as **input**, not as permission to skip hierarchy.
- STACK references still own the rules. The Figma file shows one expression; `references/web/` and the platform file define the system.

## Working From A Provided Figma Design

1. Confirm platform, destination, and output location (`BOOTSTRAP.md`).
2. Inspect the frame: capture its structure, tokens, components, and states.
3. Map it to STACK: which parts are approved references, which are deviations, which are gaps.
4. Float forks for any deviation before carrying it forward — do not replicate a frame pixel-for-pixel if the framed job needs a different structure.
5. Pull tokens (color, type, spacing) from the platform and component refs, not by eyeballing the Figma fill — confirm the Figma values match STACK tokens, and flag mismatches.
6. Reuse the two-part shell from `references/web/STACK-WEB-GLOBAL-HEADER.md` and `references/web/STACK-WEB-COMPONENT-TITLE-GROUP.md` rather than redrawing it.

## Producing Figma Frames

- Draw the two-part shell, layout model, and component anatomy from STACK references.
- Name layers by role (region, primary action, state) so the handoff reads cleanly.
- Do not leave Figma-internal labels or node IDs in reviewer-facing output.

## Output Location

The selected Figma file/frame. Mirror the brief, decisions, and handoff under `design/<project-name>/`. Never treat a Figma frame as scaffold maintenance.

## Verification

Capture a Figma screenshot of the frame. For shell icons or brand assets, compare control-level against `references/GALLERY-REFERENCE.md` specimens or the running gallery — a frame matching the design file is not proof the icon is the canonical Sitetracker asset (Law 9). Load `references/VISUAL-VERIFICATION.md` when shell or brand is in scope.
