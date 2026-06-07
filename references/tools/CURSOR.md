# Tool Context: Cursor

Use when operating in Cursor. Cursor has native rules, agent skills, file-edit and terminal tools, lints, and optional MCP connectors (Figma, Pencil, and others). Use those features rather than behaving like a Markdown-only prompt.

## Native Mapping

- Persistent routing: `.cursor/rules/*.mdc`.
- Reusable workflows: `.cursor/skills/<name>/SKILL.md`, each delegating to a `workflows/*.md` file in this kit.
- Kit references: load by kit-relative path (`references/...`, `reasoning/...`).
- Connectors: Figma and Pencil load their tool-contexts (`references/tools/FIGMA.md`, `PENCIL.md`) when used as a destination or source.

## First Read

1. Read `SYSTEM-PROMPT.md`, `LAWS.md`, `BOOTSTRAP.md`.
2. Confirm `.cursor/rules/` has STACK routing and `.cursor/skills/` has wrappers for the five workflows. If missing and the task is STACK maintenance, create them. If missing and the task is product design, ask the designer before installing.
3. Load the matching workflow before composing.

## Operating Checklist

Before output: confirm platform, destination, output location; pick one workflow; load the platform file and only the needed component refs; use Cursor file tools for edits and run lints after substantive edits. For browser-rendered work, run the page, capture a section screenshot, and capture control-level part screenshots for shell icons, brand assets, and locked header controls; compare against `references/GALLERY-REFERENCE.md`. Do not treat a manifest-name or asset-path match as icon verification (Law 9). Do not create product prototypes inside `design/stack/`.
