# Method

STACK runs one loop for every non-trivial design task:

**Understand → Frame → Compose → Critique → Prove**

Each phase has a gate. Do not cross a gate until its checklist is satisfied or its gaps are explicitly flagged.

## 1. Understand

Collect the brief, references, screenshots, existing UI, implementation target, and constraints. Run `reasoning/CONVERSATION.md` for anything beyond a narrow mechanical task — ask exhaustively, float every fork, record decisions.

Gate — before framing, confirm:

- [ ] Primary user stated.
- [ ] Primary job and definition of done stated.
- [ ] Platform: web | mobile | both.
- [ ] Destination and output location.
- [ ] Project folder created or updated; path in `CONTEXT.md`.
- [ ] Major forks floated or explicitly waived.

Exit when the agent can state the user, the job, and "done" in plain language.

## 2. Frame

Turn understanding into hierarchy using `reasoning/HIERARCHY.md`.

Gate — write the `## Hierarchy` block:

- [ ] Scale 1 — regions and the primary region.
- [ ] Scale 2 — information order in the primary region.
- [ ] Scale 3 — primary primitive and primary action.
- [ ] States that must be covered, named.

Exit when the hierarchy block is written. Do not compose before this (Law 5).

## 3. Compose

Load the platform file and only the component references the hierarchy needs (`references/REFERENCES.md`). Create the selected output: Pencil, Figma, React, LWC, Storybook, Markdown, or audit notes.

Gate:

- [ ] Platform file loaded.
- [ ] Component refs loaded only for patterns the design uses.
- [ ] Composition serves the hierarchy; any deviation from a reference was floated first (Law 6).
- [ ] No invented components (Law 8).

## 4. Critique

Run `HANDOFF.md` — the single verification artifact. Self-grade out loud against `reasoning/PRINCIPLES.md` and the relevant `exemplars/`.

Do not hand off if: user/job/platform/destination/location is missing; hierarchy is not explicit; the design is generic or decorative; relevant references were not loaded; critical unhappy paths are ignored; or the output cannot be verified at the required fidelity. If a critical dimension fails, loop back to Frame or Compose.

## 5. Prove

Show what was made or reviewed, at the fidelity the destination requires: screenshot or browser link for rendered UI; frame reference for Pencil/Figma; story for Storybook; file references and test notes for implementation; findings list for audit-only. For shell icons and brand assets, control-level proof — not a page-only screenshot (Law 9). Load `references/VISUAL-VERIFICATION.md` for the two-level protocol.

The handoff must explain what changed, why it works, what was verified, and what remains open. If anything broke or is uncertain, say so plainly (Law 11).
