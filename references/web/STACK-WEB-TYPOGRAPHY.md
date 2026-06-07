# STACK Web Typography


Use this reference for Sitetracker web typography. This file is extracted from the static Sitetracker Web Design Library.

## Source

- Figma file: [Sitetracker Web Design Library](https://www.figma.com/design/P7QZySjFIHNpkaCJ80yCHo/Sitetracker-Web-Design-Library?node-id=1363-60&t=cgcwd0WOR9zFu8or-1)
- Source node ID: `1363:60`
- Source node name: `Typography`
- Extraction date: 2026-06-03
- Extraction method: Figma MCP metadata, Figma MCP design context on each typography style sublayer, and Figma MCP screenshot of the typography node.
- Screenshot check: screenshot captured through Figma MCP during extraction. The short-lived screenshot URL is not stored in this reference.

## Inheritance

This reference overrides SLDS 2 for Sitetracker web typography choices.

Use SLDS 2 for component structure and accessibility when a component is not covered by STACK, but do not replace this typography scale with SLDS defaults unless the designer explicitly approves the change.

## Font Rule

Sitetracker web uses `SF Pro`.

Agents must not choose another font. If `SF Pro` is unavailable in the target environment, stop and tell the designer:

- `SF Pro` is required by the STACK web typography reference.
- The target environment does not appear to have it available.
- Continuing requires an explicit designer decision.

The designer may approve removing the explicit font requirement or selecting an implementation fallback. Do not choose a fallback without consensus.

## Typography Scale

### Headings

- `Headline 1`
  - Font family: `SF Pro`
  - Size: `24px`
  - Rem: `1.5rem`
  - Weight: `700`
  - Line height: `150%`
  - Source style: `Headings/Header 1`

- `Headline 2`
  - Font family: `SF Pro`
  - Size: `20px`
  - Rem: `1.25rem`
  - Weight: `700`
  - Line height: `150%`
  - Source style: `Headings/Header 2`
  - Source usage examples: empty state headers, modal titles, tracker list view title, setup page titles.

- `Headline 3`
  - Font family: `SF Pro`
  - Size: `18px`
  - Rem: `1.125rem`
  - Weight: `700`
  - Line height: `150%`
  - Source style: `Headings/Header 3`
  - Source usage examples: list view title, object record title, object label in global navigation.

- `Headline 4`
  - Font family: `SF Pro`
  - Size: `16px`
  - Rem: `1rem`
  - Weight: `700`
  - Line height: `150%`
  - Source style: `Headings/Header 4`
  - Source usage examples: tab labels, related list titles, card headers.

- `Headline 5`
  - Font family: `SF Pro`
  - Size: `14px`
  - Rem: `0.875rem`
  - Weight: `700`
  - Line height: `150%`
  - Source row label: `Headline 5`
  - Source usage examples: section headers, including table section headers.

### Body

- `Body 1`
  - Font family: `SF Pro`
  - Size: `16px`
  - Rem: source row reports `1.125rem`
  - Weight: `400`
  - Line height: `120%`
  - Source style: `Body/Body 1`
  - Source usage examples: general section headers, such as details tabs.

- `Body 2`
  - Font family: `SF Pro`
  - Size: `14px`
  - Rem: `0.875rem`
  - Weight: `400`
  - Line height: `120%`
  - Source style: `Body/Body 2`
  - Source usage examples: field values.

- `Body 3`
  - Font family: `SF Pro`
  - Size: `13px`
  - Rem: `0.8125rem`
  - Weight: `400`
  - Line height: `120%`
  - Source style: `Body/Body 3 (default)`
  - Source usage examples: button text, table text, paragraph text.
  - Note: the Figma documentation states that `13px` appears to be the common default for this web library.

- `Body 4`
  - Font family: `SF Pro`
  - Size: `12px`
  - Rem: `0.75rem`
  - Weight: `400`
  - Line height: `120%`
  - Source style: `Body/Body 4`
  - Source usage examples: table body text.

### Labels

- `Label`
  - Font family: `SF Pro`
  - Size: `12px`
  - Rem: `0.75rem`
  - Weight: `400`
  - Line height: `100%`
  - Source style: `Labels/Label`
  - Source usage examples: form field labels, badge text, list view object labels.

- `Caption`
  - Font family: `SF Pro`
  - Size: `12px`
  - Rem: `0.75rem`
  - Weight: `400`
  - Line height: `100%`
  - Source style: `Labels/Caption`
  - Source usage examples: form field captions and form field error states.

## Usage Rules

- Use this scale for all Sitetracker web typography unless another approved STACK web reference gives a more specific rule.
- Do not introduce additional type sizes without designer approval.
- Prefer `Body 3` for default dense product copy unless the component reference specifies otherwise.
- Prefer `Body 4` for dense table body text when using `STACK-WEB-TABLE.md`.
- Prefer `Headline 4` for card headers when using `STACK-WEB-CARD-HEADER.md`.
- Use labels and captions only for supporting metadata, fields, badges, validation copy, and compact helper text.

## Gallery Reference

Locked browser-rendered reference in the STACK component gallery (`#typography`). Verified 2026-06-07.

- Gallery: `gallery` at `http://localhost:4192/#typography`
- Part verification: `gallery/screenshots/typography-part-verified-2026-06-07.png`
- Gallery index: `references/GALLERY-REFERENCE.md`

## When To Use Figma MCP

Use Figma MCP again if:

- the designer asks for exact visual verification.
- the designer provides an explicit Figma reference.
- the designer asks the agent to compare this extracted reference against the original Figma source.
- the target environment cannot support `SF Pro` and the designer wants source inspection before approving a change.
