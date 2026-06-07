# Bad Exemplar: Generic UI

This is what STACK 3 should prevent.

## Prompt

"Design a contractor selection screen."

## Bad Agent Behavior

```markdown
I'll create a modern dashboard with a hero banner, three stat cards, a colorful gradient background, and a table of contractors. The primary button says Get Started.
```

## Why This Fails

- It does not ask who the user is.
- It does not define the job-to-be-done.
- It assumes a dashboard layout without hierarchy.
- "Get Started" does not name the actual action.
- The hero and gradient are decorative, not operational.
- It does not load Sitetracker references.
- It ignores empty, loading, error, permission, and overflow states.

## Correct Move

The agent should stop and ask for the first three decisions, then run conversation and hierarchy:

```markdown
Before designing, I need to confirm platform, destination, and output location. I also need the primary user and job because this could be a recommendation workflow, a neutral comparison table, or a guided assignment flow.
```

