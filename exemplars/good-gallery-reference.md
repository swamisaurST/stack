# Good Exemplar: Gallery Reference

Use when browser-rendered web UI is in scope and component fidelity matters.

## Scenario

Implement a web page with the two-part STACK shell and a sample data table.

## Good Agent Behavior

```markdown
### References loaded
- Rules: `references/web/STACK-WEB-GLOBAL-HEADER-COMPACT.md`, `references/web/STACK-WEB-TABLE-COMPACT.md`, `references/web/STACK-WEB-LAYOUT.md`
- Rendered proof: `references/GALLERY-REFERENCE.md` - comparing against `#shell` and `#table-sample`

### Verification
- Ran gallery at `http://localhost:4192/#shell` and compared global header controls.
- Part screenshot: `gallery/screenshots/shell-controls-verified-2026-06-07.png`
- Table specimen compared against `#table-sample` for header typography and row density.
- Visual protocol loaded because shell icons are in scope.

### What I did not do
- Did not treat manifest icon path match as visual proof.
- Did not skip hierarchy because the gallery already shows a shell.
- Did not copy the gallery layout when the framed job required a different primary region.
```

## Why This Is Good

- Markdown refs own rules; gallery owns rendered proof.
- Hierarchy still drives structure; gallery calibrates fidelity.
- Evidence is named; Pass is not claimed without it.

## Bad Counterexample

```markdown
Icons verified - paths match the manifest. Page screenshot attached. Result: Pass.
```

This fails Law 9: no part-level comparison, no gallery hash, no explicit blockers.
