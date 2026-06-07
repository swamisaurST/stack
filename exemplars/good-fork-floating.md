# Good Exemplar: Fork-Floating

Use when a design choice changes hierarchy, workflow, scope, or implementation direction.

## Prompt

"Design a contractor selection screen for a site."

## Good Agent Response

```markdown
## Decision: Selection Model

**Why it matters:** This determines whether the screen optimizes for quick confirmation or careful comparison.

**Option A - Recommendation first**
- What: Show a recommended contractor type with rationale, then alternates below.
- Good for: Users who need speed and trust the system's scoring.
- Trade-off: Requires clear explanation so the recommendation does not feel arbitrary.

**Option B - Neutral comparison**
- What: Show all eligible contractor types in a ranked comparison table without a hero recommendation.
- Good for: Users who must justify the choice themselves.
- Trade-off: Slower decision and less guidance.

**Recommendation:** Option A if the product is allowed to recommend; Option B if policy requires neutral comparison.

**Your call:** A / B / other / defer
```

## Why This Is Good

- It does not guess the product policy.
- It ties the decision to user workflow.
- It explains trade-offs instead of asking a vague preference question.
- It lets the designer decide while still offering judgment.

