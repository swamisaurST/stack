# Tool Context: Claude Code

Use when operating in Claude Code or another Claude-style coding scaffold. It has project instructions, local files, commands, subagents, and terminal workflows, but not Cursor's `.cursor/skills` layer.

## Native Mapping

- Persistent guidance: a project instruction file (`CLAUDE.md`, `AGENTS.md`, or equivalent) that points to `SYSTEM-PROMPT.md`.
- Reusable workflows: slash commands or direct use of `workflows/*.md`.
- Kit references: load by kit-relative path.
- Verification: terminal checks, test commands, rendered browser checks, screenshots, and the visual protocol.

## First Read

1. Read `SYSTEM-PROMPT.md`, `LAWS.md`, `BOOTSTRAP.md`.
2. Confirm the project instruction file references this kit.
3. If workflow commands are missing, use the `workflows/*.md` files directly for the session; install persistent commands only with designer approval.

## Operating Checklist

Before output: confirm platform, destination, output location; pick one workflow; load the platform file and needed component refs; use terminal and file tools per the scaffold's safety rules. For browser-rendered work, run and inspect the page before handoff; apply `references/VISUAL-VERIFICATION.md` when shell icons or brand assets are in scope. Never create product output inside `design/stack/`.
