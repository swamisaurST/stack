# Hierarchy — the decision engine

Hierarchy is how understanding becomes UI. It operates at **three scales**. Each scale answers a different question. Each scale must be **explicit** in the handoff — not implied by copying a reference screen.

Derive every scale from what you learned in `CONVERSATION.md` about the user, the job, and the context. If that understanding is thin, go back and ask — do not default to a generic layout.

---

## Scale 1 — User needs → structure of the UI

**Question:** Given what this person is trying to accomplish, what are the major regions of the screen and which one is primary?

### How to derive it

1. List the user’s jobs on this surface (often one primary, zero–two secondary).
2. Rank by urgency and frequency in the stated context (ask the designer if unclear).
3. Assign **regions** to jobs — not components yet.
4. Make the primary job visually and spatially dominant.

### Typical region types (web)

| Region role | When it wins primary | Examples |
|---|---|---|
| **Workspace** | User acts on a list, map, table, or canvas | Data grid, map-first task, bulk edit |
| **Guided flow** | User completes a sequence with a clear end state | Wizard, assignment flow, approval |
| **Record context** | User inspects one entity and related actions | Record header + tabs + side panel |
| **Dashboard / summary** | User orients before diving in | KPI strip + drill-down entry points |

### Worked illustration — contractor selection for a site

**User need (primary):** choose the right contractor type for this site quickly, with confidence.  
**User need (secondary):** compare options without leaving context.

**Structure:**

```
[ Global orientation — where am I, what site ]
[ Primary workspace — recommendation + comparison table ]
[ Secondary — filters / constraints if needed ]
[ Actions — commit selection, cancel ]
```

Primary region = comparison + recommendation, not the global chrome.

### Anti-patterns

- Primary region is “marketing header” or empty hero while the real job is buried.
- Every region given equal weight → user cannot tell where to start.
- Structure copied from a reference screen without mapping regions to **this** user’s jobs.

---

## Scale 2 — Information → ordering within a region

**Question:** Inside each region, what does the eye meet first, second, third — and why?

### How to derive it

1. List the **information objects** the user needs in this region (entities, fields, statuses, actions).
2. Order by decision sequence: what must they know **before** they can act?
3. Group what belongs together; separate what competes for attention.
4. Progressive disclosure: show summary first, detail on demand — unless the job requires full detail upfront (ask).

### Ordering heuristics

| Heuristic | Use when |
|---|---|
| **Decision before detail** | User picks among options |
| **Status before history** | User needs to know “where things stand” now |
| **Action adjacent to object** | User acts on a row, card, or map feature |
| **Destructive last and separated** | Delete, reject, cancel permanent changes |
| **Filters before results** | Results only make sense after scope is set |

### Worked illustration — same contractor selection, primary region

**Information objects:** recommended type, rationale, alternates, site constraints, selection action.

**Order:**

1. **Recommendation headline** — the answer, if the job is “tell me what to pick.”
2. **Why** — short rationale tied to site attributes (supports trust).
3. **Alternates table** — compare when recommendation is not enough.
4. **Site context strip** — attributes that drove the recommendation (visible, not hidden in a drawer, if they validate the decision).
5. **Primary action** — confirm selection (one clear button).

### Anti-patterns

- Alphabetical or implementation-order layout (API field order ≠ user order).
- Actions scattered away from the objects they affect.
- Equal-weight columns in a table when one column is the decision driver.

---

## Scale 3 — Primitives → structure, state, and position within a component

**Question:** Within each component, how do text, icon, button, badge, input, and spacing express priority and affordance?

### How to derive it

1. Identify the **one** primary primitive in this component (usually label + value, or a single primary button).
2. Set **emphasis** (typography tier, weight, color role) to match information rank from Scale 2.
3. Set **state design** (default, hover, focus, disabled, error, selected) for anything interactive.
4. Set **position** so reading order matches decision order (LTR top-to-bottom; actions at natural completion point).

### Primitive rules of thumb

| Primitive | Role | Hierarchy lever |
|---|---|---|
| **Page/section title** | Name the job of the region | Size, weight; one per region |
| **Body text** | Support decision | Regular weight; truncate with intent |
| **Metadata / secondary** | Context, timestamps, IDs | Smaller, muted token |
| **Icon** | Category or action affordance | Size, color; never decorative-only |
| **Primary button** | Commit the main action | One per logical scope |
| **Secondary button** | Alternate non-destructive path | Visually subordinate |
| **Pill / badge** | Status or compact filter | Color semantics from references |
| **Link** | Navigate without leaving task | Inline where the object is named |

### Worked illustration — recommendation card row

```
[ icon (entity) ]  [ title — contractor type name     ]  [ badge: Recommended ]
                   [ secondary — match score / reason   ]
                   [ tertiary — constraint hint         ]     [ Select — primary ]
```

- Title = Scale 2 rank #1 within the row.
- Badge = status, not competing with title.
- Select = primary action at row completion (right edge in LTR).

### Anti-patterns

- Multiple primary buttons in one card.
- Icons sized for decoration, not scanability.
- Muted text used for the one field the user must read to decide.

---

## Handoff requirement

Before composition is “done,” the agent states hierarchy explicitly:

```markdown
## Hierarchy

### User needs → structure
- Primary job: …
- Regions: …

### Information → order (primary region)
1. …
2. …

### Primitives → emphasis (key component)
- Primary primitive: …
- Primary action: …
- States covered: …
```

---

## Related files

- `CONVERSATION.md` — inputs that feed hierarchy.
- `PRINCIPLES.md` — why hierarchy is non-negotiable.
- `references/web/` — vocabulary for primitives (not a substitute for hierarchy decisions).
- `METHOD.md` — when to set hierarchy in the loop.
