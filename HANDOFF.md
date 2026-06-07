# Handoff

This is the **single verification artifact**. There is no separate rubric, checklist, or critique file — they live here. Run it at the end of every task and paste the filled block in the final response, unless the designer explicitly asked for exploration only.

## How To Use

1. Grade each dimension below: **Pass**, **Needs work**, or **Fail**.
2. If any **critical** dimension fails, loop back in `METHOD.md` — do not hand off.
3. Compare against the relevant `exemplars/` (good and bad) as you grade.
4. Fill and paste the block.

## Dimensions

| Dimension | Critical | Pass when |
|---|---:|---|
| Conversation & decisions | Yes | Primary user, job, platform, destination, and output folder confirmed or flagged; major forks floated and decisions recorded. See `exemplars/good-fork-floating.md`. |
| Hierarchy explicit | Yes | Handoff states Scale 1 (regions + primary), Scale 2 (information order), Scale 3 (primary primitive + action); structure maps to this user's job. See `exemplars/good-hierarchy.md`. |
| Purpose stated | Yes | User purpose, screen purpose, and primary action are each one clear sentence; every major section has a "this exists because" rationale. |
| References used | Yes | Platform file and relevant `references/web/` loaded before composition; SLDS 2 only for gaps; no covered pattern replaced by ad hoc styling. |
| Coherence over conformity | Yes | The screen is internally coherent and operator-grade — not a blind copy of a shell, and not compliance machinery mistaken for quality. |
| State coverage | Yes | Relevant empty, loading, error, permission, validation, and overflow states are designed or named. |
| Accessibility | Yes | Labels, focus, keyboard, semantics, contrast, and ARIA considered for the destination. |
| Implementation readiness | No | Components, data needs, constraints, and gaps are clear enough for the target. |
| Visual proof | No | Output shown or linked at the destination's required fidelity; control-level proof when icons or brand matter. See `exemplars/good-gallery-reference.md`. |

A vague prompt that was guessed, missing hierarchy, generic SaaS UI, missing critical states, an invented component without proven gap, or a visual-parity claim without evidence are all critical failures.

## Block (paste and fill)

```md
## STACK Handoff

Platform:
Destination:
Output location:
References loaded:

### Purpose
- User:
- Screen job:
- Primary action:

### Hierarchy
- Scale 1 (regions, primary):
- Scale 2 (information order):
- Scale 3 (primary primitive, primary action):

### States
- Covered:
- Missing:

### Verification
- Method (render / link / frame / story / findings):
- Visual proof / part screenshots:
- Controls compared:

### Critique
| Dimension | Pass / Needs work / Fail | Notes |
|---|---|---|
| Conversation & decisions | | |
| Hierarchy explicit | | |
| Purpose stated | | |
| References used | | |
| Coherence | | |
| State coverage | | |
| Accessibility | | |
| Visual proof | | |

Flagged assumptions:
Open questions / what broke (Law 11):
Result: Pass | Pass with gaps | Fail
```

Do not record `Result: Pass` from a manifest match, an asset-path match, or a single full-page screenshot (Law 9).
