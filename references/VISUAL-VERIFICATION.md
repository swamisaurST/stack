# STACK Visual Verification Protocol


Use this protocol before marking any browser-rendered STACK output as verified or locked.

This protocol exists because page-level screenshots alone are not sufficient for shell icon work. A full-page capture can look complete while individual fixed shell icons, control treatments, and sizes remain wrong.

## Non-Negotiable Rule

A page screenshot is evidence that the page rendered. It is not evidence that fixed shell icons, brand assets, or control treatments are correct.

Do not mark visual verification complete until both levels below pass.

## Two-Level Verification

### Level 1: Page render check

Purpose: confirm the target route, section, or story rendered without runtime failure.

Required:

- Run the page in its target environment.
- Capture one page- or section-level screenshot.
- Confirm the intended region is visible.

Pass criteria:

- HTTP/runtime success.
- Target section visible in capture.

Fail if:

- Build success is treated as visual verification.
- No screenshot was captured when capture was possible.

Level 1 alone is never sufficient for fixed shell icons, brand assets, or locked header controls.

### Level 2: Part verification for fixed shell and brand assets

Purpose: confirm each locked icon/control matches the approved product or designer reference.

Required whenever the output includes any of:

- Sitetracker wordmark or avatar brand assets.
- 9-dot app launcher.
- Global header right-control group.
- Any icon listed in `references/web/STACK-WEB-GLOBAL-HEADER.md` locked shell icon map.
- Any icon being newly locked in STACK.

Required steps:

1. Identify the reference source of truth:
   - designer-provided product screenshot crop, or
   - locked gallery reference capture, or
   - approved Figma frame screenshot.
2. Capture a part screenshot of the same region from the rendered output.
   - Prefer a tight crop of the control group, not the full page.
   - For the web global header, capture at minimum the right-control group and the wordmark/launcher alignment region separately when alignment is in scope.
3. Compare reference and rendered part screenshots explicitly.
4. Record a mismatch list before editing when the task is verification or lock-in.
5. Fix one mismatch at a time when requested.
6. Recapture the same part region after each meaningful icon/control fix.
7. Do not lock an icon mapping until its part screenshot comparison passes.

Pass criteria:

- Each locked control matches reference for: icon glyph, control treatment, size, spacing, color/fill, order, and border/background behavior.
- The verification record names the part screenshots used.
- Any remaining gap is disclosed as blocked, not silently ignored.

Fail if:

- Only a full-page screenshot was captured.
- Icon correctness was inferred from asset path or manifest name alone.
- A previous page screenshot was reused after icon CSS or asset changes without a fresh part capture.
- The agent says "verified" without naming mismatches checked or part screenshots compared.

## Fixed Shell Control Checklist

For the web global header right-control group, verify each item independently:

| Control | Verify |
|---|---|
| Favorite | Split button, vertical divider, star glyph, caret glyph, border, size |
| Global create | Solid gray square, white plus, size aligned to neighbors |
| Guidance Center | Shield/mountain badge (`trailhead_alt`), not landscape `trailhead` |
| Help | Question icon glyph and size |
| Setup | Gear icon glyph and size |
| Notification | Bell icon glyph and size |
| Avatar | Brand teal fill `#00847C`, not Salesforce blue; mark centered; border if reference shows border |

Also verify separately when in scope:

- Sitetracker wordmark asset and size.
- 9-dot launcher asset and left-rail alignment with wordmark.

## Capture Guidance

Preferred order:

1. Tight part screenshot of the control region from the running page.
2. Full section screenshot for context.
3. Designer/product reference crop stored or cited alongside the capture.

For local React gallery verification of the locked web shell:

- Gallery URL: `http://localhost:4192/#shell`
- Required part capture: `gallery/screenshots/shell-controls-verified-2026-06-07.png`
- Required reference comparison: designer product header crop or approved reference capture cited in the verification record

If tight crop capture is unavailable:

- Disclose the limitation.
- Mark icon verification incomplete or blocked.
- Do not mark the shell verified.

## Lock-In Gate

Do not mark `references/web/STACK-WEB-GLOBAL-HEADER.md`, `references/web/STACK-WEB-COMPONENT-TITLE-GROUP.md`, or any fixed shell icon mapping as locked unless:

1. Level 1 page/section screenshot exists.
2. Level 2 part screenshot comparison exists for the affected controls.
3. The verification record lists part screenshot paths.
4. Known mismatches are zero, or remaining gaps are explicitly documented as blocked.

## Verification Record Format

Append or include this block in handoff, audit, or lock-in work:

```md
## Visual Verification Record

Level 1 page/section screenshot:
Level 2 part screenshot(s):
Reference screenshot(s):
Controls compared:
Mismatches found before fix:
Mismatches remaining:
Icon lock status: verified | blocked | incomplete
Result: Pass | Pass with gaps | Fail
```

## Known Failure Mode This Protocol Prevents

Observed failure:

- Agent captured a full gallery page screenshot after CSS changes.
- Agent treated "screenshot exists" as icon verification.
- Fixed shell icons remained wrong: favorite treatment, create fill, guidance center glyph, avatar fill, and control sizing.

Root cause in STACK:

- Rubrics required "a screenshot" but did not require part-level icon comparison.
- Icon lock rules allowed manifest name match to stand in for visual verification.
- Shell lock was allowed after page capture without per-control comparison.

This protocol replaces that behavior.

## Related References

- Output gate: `HANDOFF.md`
- Reference verification: `references/web/STACK-WEB-REFERENCE-VERIFICATION-RUBRIC.md`
- Gallery index (hashes + part screenshots): `references/GALLERY-REFERENCE.md`
- Locked shell map: `references/web/STACK-WEB-GLOBAL-HEADER.md`
- Icon rules: `references/web/STACK-WEB-ICONS.md`
- Cursor scaffold: `references/tools/CURSOR.md`
- Calibration: `exemplars/good-gallery-reference.md` — control-level proof done right vs. asset-path bluffing.
