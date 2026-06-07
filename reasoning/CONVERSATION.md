# Conversation — structured intake and fork-floating

Design is a conversation with the designer. The agent’s job is not to guess business context, user motivation, or workflow priority — it is to **ask**, **present options**, and **record decisions**.

Run this conversation **before** composition unless the designer explicitly waives it for a narrow, mechanical task (e.g. “fix this one button label”).

---

## Core rules

1. **Ask exhaustively.** Use the question sets below. Skip only what the designer already answered in the brief.
2. **Float every fork.** If more than one reasonable approach exists, present options with trade-offs. Do not pick silently.
3. **Record decisions.** Capture answers in the project `CONTEXT.md` or a session decisions block.
4. **Assume only when refused.** If the designer declines to answer, state the assumption explicitly and flag it in the handoff.
5. **One topic at a time in Plan Mode;** batch related questions in Agent Mode when the designer prefers speed.

---

## Fork-floating protocol

Use whenever a decision affects hierarchy, workflow, or scope.

### Template

```markdown
## Decision: [short title]

**Why it matters:** [one sentence — tie to user need or hierarchy]

**Option A — [name]**
- What: …
- Good for: …
- Trade-off: …

**Option B — [name]**
- What: …
- Good for: …
- Trade-off: …

**Option C — [optional]**

**Recommendation (if any):** [agent may suggest, but designer decides]

**Your call:** A / B / C / other / defer (agent assumes: ___)
```

### Always float forks for

- Primary user and primary job on the screen
- Layout model (full workspace vs split vs wizard vs record view)
- What is primary vs secondary information
- Whether recommendation/automation is shown vs neutral comparison only
- Empty, error, and loading behavior when not specified
- Mobile vs web when both are plausible
- Scope cuts (“MVP vs full flow”)
- Any deviation from a scaffold reference

### Do not float forks for

- Token values already defined in references (unless they conflict with hierarchy)
- Mechanical fixes explicitly scoped by the designer
- Purely syntactic implementation choices with no UX impact

---

## Question set 1 — The user

**Goal:** Know who you are designing for well enough to set Scale 1 hierarchy.

| # | Question |
|---|---|
| 1.1 | Who is the primary user (role, team, seniority)? |
| 1.2 | Are they inside Sitetracker daily or occasional? |
| 1.3 | What is their relationship to the data (owner, reviewer, executor, admin)? |
| 1.4 | What pressure are they under (deadline, audit, field conditions, customer escalation)? |
| 1.5 | What do they already know when they land on this screen? |
| 1.6 | What do they **not** know that this screen must teach or surface? |
| 1.7 | Secondary users — who else views or acts on this output? |
| 1.8 | Accessibility or environment constraints (mobile, gloves, bright sun, low bandwidth)? |

---

## Question set 2 — Job to be done

**Goal:** One clear primary job; secondary jobs explicit.

| # | Question |
|---|---|
| 2.1 | In one sentence: what job must complete successfully on this surface? |
| 2.2 | What triggers the user to open this flow (event, navigation, notification)? |
| 2.3 | What does “done” look like — artifact, state change, handoff to someone else? |
| 2.4 | How often is this job performed (daily, weekly, once per project)? |
| 2.5 | What is the cost of failure (wrong pick, delay, compliance, rework)? |
| 2.6 | What is the cost of slowness (minutes matter vs deep analysis ok)? |
| 2.7 | Secondary jobs on the same surface — list and rank. |
| 2.8 | What should this screen **not** try to do (explicit non-goals)? |

---

## Question set 3 — Context and constraints

**Goal:** Business and technical boundaries that shape the frame.

| # | Question |
|---|---|
| 3.1 | What business rules or policies constrain choices (approval, eligibility, regions)? |
| 3.2 | What data is authoritative vs illustrative in this phase (real API vs prototype)? |
| 3.3 | Permissions — who can see, edit, commit? |
| 3.4 | Integration points (Salesforce record, map, external vendor)? |
| 3.5 | Timeline — demo, pilot, production? |
| 3.6 | Known technical limits (LWC, Storybook, Pencil, React prototype)? |
| 3.7 | Existing UI this replaces or sits beside — link or describe. |
| 3.8 | Compliance, audit trail, or logging requirements? |

---

## Question set 4 — Success and failure

**Goal:** Define good outcomes and feared failures for critique.

| # | Question |
|---|---|
| 4.1 | What would make the designer say “this is great”? |
| 4.2 | What would make the designer say “this failed”? |
| 4.3 | What mistake do users make today that this should prevent? |
| 4.4 | What question should the user never have to ask after using this? |
| 4.5 | Metrics or signals of success if any (time to complete, error rate)? |

---

## Question set 5 — Data and interaction shape

**Goal:** Inputs for Scales 2 and 3 hierarchy.

| # | Question |
|---|---|
| 5.1 | What entities/objects appear (sites, contractors, tasks, records)? |
| 5.2 | Cardinality — one, few, hundreds, thousands? |
| 5.3 | Primary interaction pattern (select one, compare many, edit inline, drag on map)? |
| 5.4 | Required fields vs optional vs computed? |
| 5.5 | Sorting, filtering, search — what drives the default view? |
| 5.6 | States to design: empty, loading, partial, error, no permission, overflow. |
| 5.7 | Destructive or irreversible actions — which and where? |
| 5.8 | Notifications or confirmations needed? |

---

## Question set 6 — Platform and destination

**Goal:** Confirm where output lives and which scaffold applies.

| # | Question |
|---|---|
| 6.1 | Web or mobile (or both)? |
| 6.2 | Creation destination: Pencil, Figma, React prototype, LWC, Storybook, Markdown spec? |
| 6.3 | Output folder / project name? |
| 6.4 | Is this audit-only, net-new, or transition from existing UI? |
| 6.5 | Review format — static screens, clickable prototype, live app? |

---

## Question set 7 — Scope and phasing

**Goal:** Avoid building the wrong slice.

| # | Question |
|---|---|
| 7.1 | MVP — minimum shippable slice for this session? |
| 7.2 | Explicitly out of scope for now? |
| 7.3 | Screens/states inventory — list or co-create? |
| 7.4 | Dependencies on other tasks or teams? |
| 7.5 | Open questions that block design — who resolves? |

---

## Session capture template

Copy into project `CONTEXT.md` or a `DECISIONS.md` in the project folder:

```markdown
## Conversation summary — [date]

### User
- Primary: …
- Pressure: …
- Assumptions: …

### Job
- Primary job: …
- Done when: …
- Non-goals: …

### Decisions
| Topic | Choice | Notes |
|---|---|---|
| Layout | … | … |
| Primary region | … | … |

### Open questions
- …
```

---

## Related files

- `HIERARCHY.md` — apply answers to structure.
- `METHOD.md` — when conversation runs in the loop.
- `templates/CONTEXT.template.md` — persistent project state.
- `PRINCIPLES.md` — purpose and deferral rules.
