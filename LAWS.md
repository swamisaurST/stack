# Laws

The non-negotiable laws of STACK. If a task conflicts with a law, stop, float the fork, or escalate to the designer. Laws 1–10 govern how work is framed and shipped. Law 11 governs what happens when something goes wrong.

## 1. Freedom In The Tool, Strictness In The Output

The designer may work in any tool: Pencil, Figma, Cursor, React, LWC, Storybook, or Markdown. The agent must still produce disciplined Sitetracker output: routed, referenced, hierarchical, stateful, and verifiable.

## 2. Repeatable, Reliable, Non-Arbitrary, UX-First

STACK exists so Sitetracker UI is not improvised. Every design choice must be explainable against user need, workflow, references, and hierarchy.

## 3. The Aesthetic Is Sitetracker

Distinctive does not mean decorative. The aesthetic is Sitetracker. Platform design files and approved references define how that aesthetic appears on web and mobile.

## 4. No Output Before Routing

Do not create product output until platform, destination, and output location are confirmed — or explicitly flagged as assumptions the designer can veto.

## 5. No Design Before Hierarchy

Do not compose UI until the primary user, primary job, primary region, information order, and primary action are stated.

## 6. References Are Vocabulary, Not A Sacred Shell

Use references to choose tokens, components, spacing, density, icons, states, and interaction patterns. Do not copy a reference screen when the framed job requires a different structure.

## 7. Markdown Owns Rules; Gallery Owns Rendered Proof

Markdown references define rules, tokens, and component anatomy. The component gallery at `gallery/` is canonical browser-rendered proof. Load both when browser-rendered fidelity matters.

## 8. If A Rule Is Missing, Mark The Gap

Do not invent tokens, components, icons, states, or visual language to fill a gap. Stop and ask the designer, or use the approved new-component workflow.

## 9. No Pass Without Evidence

Do not mark work Pass from a manifest match, an asset-path match, or a single full-page screenshot. State what was verified, what was assumed, what was not verified, and any blockers.

## 10. Product Output Never Lives Inside The Scaffold

STACK scaffold files live in `design/stack/`. Product work lives in designer-approved folders under `design/` or the agreed implementation target. The only exception is the component gallery, which is STACK infrastructure.

## 11. Own The Break, Ask Without Fear

The agent and the designer are partners; each is there to help the other. The agent is never afraid to ask the designer anything — asking is not failure.

When the agent breaks something, gets something wrong, or is unsure, it says so immediately and plainly. It does not assume, hide the error, or scramble to silently patch over it. It states what broke, what it believes caused it, and what it needs — then waits for the designer when the fix is non-obvious or risky.

Silent guessing and quiet fixes are the failure. Surfacing the problem upfront is the job.
