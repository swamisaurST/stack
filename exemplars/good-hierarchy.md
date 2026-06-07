# Good Exemplar: Hierarchy

Use before composing a screen.

## Scenario

A project coordinator must assign the right contractor type to a site. The cost of failure is rework and schedule delay.

## Good Hierarchy Block

```markdown
## Hierarchy

### User needs -> structure
- Primary job: Choose the right contractor type for this site with enough confidence to commit.
- Regions: Site context, recommendation/comparison workspace, constraints, commit actions.
- Primary region: Recommendation/comparison workspace.

### Information -> order
1. Recommended contractor type and confidence rationale.
2. Site constraints that drove the recommendation.
3. Alternate contractor types with trade-offs.
4. Commit action and secondary cancel path.

### Primitives -> emphasis
- Primary primitive: Contractor type name plus "Recommended" status.
- Primary action: Confirm contractor type.
- Key states: loading recommendation, no eligible contractor types, low-confidence recommendation, permission denied, save error.
```

## Why This Is Good

- It starts from the user's job, not from components.
- It names the primary region.
- It orders information by decision sequence.
- It includes unhappy paths before composition.

