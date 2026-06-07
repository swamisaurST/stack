# Bootstrap

The STACK entry point for any agent. Everything an agent needs lives inside this kit.

## Read Order

Always read, in order:

1. `SYSTEM-PROMPT.md` — constitution and activation.
2. `LAWS.md` — the eleven laws.
3. `ROLE.md` — the design-partner role.
4. `METHOD.md` — the design loop and per-phase gates.
5. `MANIFEST.md` — the contract: what to load for this task.

Then load as the task requires:

- `reasoning/` — when conversation, hierarchy, or principles depth is needed (greenfield, vague intake, or workflow forks).
- `references/REFERENCES.md` — before any platform or component decision.
- `workflows/` — the one playbook that matches the task.
- `HANDOFF.md` — before the final response. It is the single verification artifact.

## Session Shortcut

If a project `CONTEXT.md` records `stack.session.bootstrapped: true`, do not repeat the full read order. Reuse session state and load only what changed. Track: `stack.session.bootstrapped`, `stack.platform`, `stack.destination`, `stack.projectFolder`, `stack.workflow`, `stack.referencesLoaded`, `stack.assumptions`. Use `templates/CONTEXT.template.md` when a context file is needed.

## The First Three Decisions

Before creating product output, confirm:

1. **Platform** — web, mobile, or both.
2. **Destination** — Pencil, Figma, React prototype, LWC, Storybook, Markdown spec, or review notes.
3. **Output location** — the exact project folder, file, canvas, or implementation target.

If any answer is missing and the choice affects design direction, stop and ask (Law 4).

## Default Output Locations

- React prototype: `design/prototypes/<project-name>/`
- Pencil, Figma exports, Markdown specs, static artifacts: `design/<project-name>/`
- LWC: agreed Salesforce DX source folder, with brief and handoff mirrored under `design/<project-name>/`
- Storybook: agreed Storybook source folder, mirrored the same way
- Audit-only: no new folder unless auditing an existing project folder

Never create product output inside `design/stack/` (Law 10).

## Source Precedence

For web:

1. `references/platform/STACK-WEB-DESIGN.md` — platform architecture.
2. `references/web/` — component rules, tokens, anatomy.
3. `gallery/` — canonical browser-rendered proof (index: `references/GALLERY-REFERENCE.md`).
4. `reasoning/` — principles, conversation, hierarchy.
5. SLDS 2 — only for gaps STACK does not cover.
6. Designer clarification when sources conflict.

For mobile: `references/platform/STACK-MOBILE-DESIGN.md`, then Hero UI guidance when relevant, then designer clarification.

For browser-rendered output, compare against gallery specimens when shell, icons, brand, layout, or component fidelity matters. Load `references/VISUAL-VERIFICATION.md` when shell icons or brand assets are in scope.

## Tool Contexts

Load one tool-context only when the destination needs detail beyond this file: `references/tools/CURSOR.md`, `references/tools/CLAUDE-CODE.md`, `references/tools/FIGMA.md`, `references/tools/PENCIL.md`, `references/tools/LWC.md`, `references/tools/STORYBOOK.md`. They explain execution paths and constraints; they never override the laws, the method, or the platform files.

## Missing Reference Rule

If a required reference, design source, implementation target, or business constraint is missing:

1. Stop.
2. Name what is missing.
3. Explain why it matters.
4. Ask for the source or permission to create a new reference.

Do not continue by guessing (Law 8).
