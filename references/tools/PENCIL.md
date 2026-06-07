# Tool Context: Pencil

Use when the destination is a Pencil `.pen` canvas — including Pencil operated inside Cursor via the Pencil MCP connector.

## Native Mapping

- Source of truth for this task: the designer-named `.pen` file. Confirm it exists and is the right file before drawing.
- The Pencil connector exposes editor state, nodes, variables, layout, and screenshots. Read state before composing; do not assume canvas contents.
- STACK references own the rules; Pencil is the canvas. Apply the same shell, layout, tokens, and component anatomy you would in any destination (Law 1).

## Working In A `.pen` File

1. Confirm platform (usually web), destination (Pencil), and the exact `.pen` path (`BOOTSTRAP.md`).
2. Read the current canvas state and variables before adding anything.
3. Set variables/tokens from `references/web/STACK-WEB-COLORS.md` and `references/web/STACK-WEB-TYPOGRAPHY.md` — keep the Pencil theme aligned to STACK tokens; flag any mismatch.
4. Compose the two-part shell, layout model, and components from the relevant `references/web/` files. Draw the 9-dot launcher, title row, and section headers from their references rather than improvising.
5. Float forks before deviating from a reference (Law 6). Record decisions in the project `CONTEXT.md`.

## Output Location

The selected `.pen` file. Mirror brief, decisions, and handoff under `design/<project-name>/`. Never produce product Pencil work inside `design/stack/`.

## Verification

Capture a Pencil screenshot of the canvas. Pencil and Figma work do not require the browser visual protocol unless the designer asks for a browser-rendered comparison. If shell icons or brand assets are in scope and a browser comparison is requested, load `references/VISUAL-VERIFICATION.md` and compare control-level against `references/GALLERY-REFERENCE.md`.

Inspect the canvas visually before handoff. A node existing on the canvas is not proof it is correct (Law 9).
