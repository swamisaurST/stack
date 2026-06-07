# Good Exemplar: Handoff

Use this as a compact model for final STACK 3 responses.

## Good Handoff Shape

```markdown
## STACK 3 Handoff

### Outcome
- Created a web React prototype for contractor type selection.
- Destination: React local review app.
- Output location: `design/prototypes/site-contractor-selection/`.

### Decisions
- Platform: Web.
- Workflow: `stack-prototype`.
- Primary user: Project coordinator.
- Primary job: Select the right contractor type for a site.
- Major forks decided: Recommendation-first model approved; neutral comparison kept as secondary.

### Hierarchy
- Primary region: Recommendation and comparison workspace.
- Information order: recommendation, rationale, alternates, site constraints, commit action.
- Primary action: Confirm contractor type.

### References Used
- Core: STACK 3 method and rubric.
- Platform: STACK web design.
- Components: layout, buttons, table, pills.
- Visual proof: browser render checked; shell icon parity not in scope.

### States Covered
- Happy path: recommendation with alternates.
- Empty: no eligible contractor types.
- Loading: recommendation pending.
- Error: failed recommendation fetch.
- Permission / validation / overflow: permission denied and long alternates list.

### Critique
- Rubric result: Pass with one flagged assumption.
- Critical failures: none.
- Flagged assumptions: scoring rules are illustrative until API is available.
- Open questions: final eligibility policy.

### Verification
- What was rendered, tested, or inspected: local prototype route and responsive table behavior.
- What was not verified: production Salesforce integration.
```

## Why This Is Good

- It says what was made and where it lives.
- It ties the visible UI back to decisions and hierarchy.
- It names references and states.
- It discloses what was not verified.

