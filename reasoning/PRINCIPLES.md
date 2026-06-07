# Principles — what good means

These principles define **good Sitetracker UI** for this practice. They are quality-based, not brand-based. The brand is evolving; good product judgment is not.

An agent must be able to explain every screen against these principles before handoff. If an element cannot be justified, it is cut.

---

## 1. Clarity over cleverness

The user is doing operational work — often under time pressure, often with incomplete information, often on behalf of others.

- Prefer obvious over novel.
- Prefer scannable over decorative.
- Prefer labels that name the thing over labels that sound polished.
- If a clever interaction saves the designer’s time but costs the user’s comprehension, it fails.

**Test:** Can a tired user complete the primary job without re-reading?

---

## 2. Every element earns its place

Nothing is on the screen because it was easy to add, because a component library had it, or because “most apps have this.”

- Each section, control, label, icon, and line of copy must have a stated job.
- Redundancy is a smell — two elements doing the same job means one should go.
- Default density is **operational**: enough to work, not enough to overwhelm. Whitespace is a tool for hierarchy, not a style choice.

**Test:** For every visible element, complete: “This exists because ___.”

---

## 3. Hierarchy is mandatory — and explicit

Good UI is ordered thought made visible. Hierarchy is not optional polish; it is the product.

Three scales (see `HIERARCHY.md`):

1. **User needs** → structure within the screen (what regions exist, what is primary).
2. **Information** → order within each region (what the eye meets first, second, third).
3. **Primitives** → structure, state, and position within each component (text vs icon vs button; emphasis; interaction affordance).

Hierarchy can only be set after the agent understands **who** the user is and **what job** they are doing. That understanding comes from conversation with the designer — not from defaults.

**Test:** State the primary job, the primary region, and the primary action in one sentence each.

---

## 4. Unhappy paths are first-class

Empty, loading, error, partial data, permission denied, and “too much data” are not afterthoughts.

- Design them in the same pass as the happy path.
- Error copy must say what happened and what to do next.
- Empty states must say why it is empty and what action opens the path forward.
- Loading must not hide structure the user needs to orient.

**Test:** Name at least three non-happy states and show how each is handled.

---

## 5. Purpose is stated, not assumed

The agent and the designer align on purpose before composition.

- **User purpose:** who is this for, what job, in what context?
- **Screen purpose:** what is the one job of this surface?
- **Element purpose:** why this control, this column, this section header?

When business context is missing, the agent **asks** or **flags an explicit assumption** — never silently guesses on a fork that changes hierarchy or workflow.

**Test:** The handoff includes a short “Purpose” block: user, screen job, primary action, and any flagged assumptions.

---

## 6. Coherence over conformity

Consistency means the screen feels **internally coherent** and built from a shared vocabulary — not that it matches a frozen shell or sacred layout.

- Use the fallback scaffold (`references/web/`, platform design files) so the agent does not start from raw SLDS 2.
- Deviating from a reference is allowed when the designer approves and the deviation is reasoned against these principles.
- “On brand” is a weak pass. “Purposeful and well ordered” is the bar.

**Test:** Would a user trust this screen to help them finish the job, regardless of whether it matches last month’s header?

---

## What good is not

- Generic SaaS UI (centered card stacks, mystery meat navigation, decorative empty hero areas).
- Component assembly without a framed job-to-be-done.
- Locked chrome treated as more important than workflow clarity.
- Visual proof without stated reasoning.
- Skipping conversation because “the references already say how it should look.”

---

## Related files

- `HIERARCHY.md` — how to turn understanding into structure.
- `CONVERSATION.md` — how to learn what you need from the designer.
- `METHOD.md` — when and how to apply these principles in a loop.
- `exemplars/` — signed-off good and bad, with reasoning.
