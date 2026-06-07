# STACK Web Design


Use this file for Sitetracker web design and implementation guidance. Load `references/platform/STACK-WEB-QUICK-DECISIONS.md` for compact component routing.

## Required First Step

Before designing or implementing a web surface:

1. Confirm the product platform is `web`.
2. Confirm the creation destination: Figma, Pencil, React, LWC, Storybook, Markdown, review notes, or another explicit destination.
3. Confirm the output location for that destination before creating anything.
4. Confirm the end user, workflow/job-to-be-done, and product constraints.
5. Confirm the workflow skill: new design, audit, transition, new component, or prototype.
6. Load `references/platform/STACK-WEB-QUICK-DECISIONS.md`.
7. Load only the specific web reference files needed for the current task.
8. Apply `HANDOFF.md` before final output.
9. Apply `references/VISUAL-VERIFICATION.md` for browser-rendered shell icons, brand assets, and locked header controls.

Do not load every web reference file by default.

If the request is broad, fake, playful, or says "anything", stop and ask clarifying questions. Do not treat vagueness as approval to choose the product workflow, output destination, folder location, layout model, component set, or visual direction.

## Source Precedence

Resolve web design decisions in this order:

1. STACK web local references.
2. SLDS 2 for uncovered components and behavior.
3. Ask the designer when sources conflict or coverage is unclear.

Do not resolve ambiguity by inventing new visual behavior, primitives, components, states, colors, icon names, or typography.

## Output Location Rule

STACK architecture lives in this kit. Product designs, prototypes, and implementations must not be created inside this kit (`design/stack/`) unless the task is explicitly maintaining STACK references or rubrics.

Destination-specific placement:

- Figma: create or update the designer-approved Figma file/frame.
- Pencil: create or update the designer-approved `.pen` file.
- React local hosted app: create a new designer-approved folder outside this kit (`design/stack/`).
- LWC or scratch org: use the agreed Salesforce implementation or scratch target.
- Storybook: use the agreed Storybook project and story path.
- Markdown/spec/review notes: use the agreed documentation path.

If the output location is not known, ask the designer before creating files or frames.

## Quick Router

Use `references/platform/STACK-WEB-QUICK-DECISIONS.md` to decide which detailed reference, icon map, or SLDS 2 fallback applies.

Do not load all detailed references by default.

## Web Shell Rule

Every STACK web page should use the Sitetracker web shell unless the designer explicitly says otherwise.

This shell rule is scaffold agnostic. Apply it the same way in Figma, Pencil, React, LWC, Storybook, Markdown specs, Cursor, Claude Code, or another supported environment.

Default two-part header and page order:

1. Top global bar from `references/web/STACK-WEB-GLOBAL-HEADER.md`
2. Second title/navigation row from `references/web/STACK-WEB-COMPONENT-TITLE-GROUP.md`
3. Page or workflow content using `references/web/STACK-WEB-LAYOUT.md`

The web header is divided into two parts:

- The top global bar is consistent for all web pages and owns the Sitetracker mark, global search, and global controls.
- The second row starts with the 9-dot app launcher menu, then the page/app/module title, then optional subtitles, subheadings, or tab-like navigation items.

This two-part header behavior is encoded in STACK. Agents do not need MCP, Figma, screenshots, or any other external reference to apply the structure during routine web work.

Fixed or sticky behavior is page/module-specific. If scroll behavior matters and the reference does not specify it, ask the designer.

## Two-Part Header Contract

Top global bar:

- Always present on STACK web pages.
- Consistent across all web pages.
- Contains the Sitetracker SVG mark on the left.
- Contains global search centered in the bar.
- Contains global controls on the right: favorite, create, help/question, setup, notification, and avatar.
- Must not contain page-specific title, page tabs, local actions, or workflow-specific controls.

Second title/navigation row:

- Always present on STACK web pages.
- Always starts with the 9-dot app launcher menu.
- The page, app, or module title appears immediately after the 9-dot menu.
- Optional subtitles, subheadings, or tab-like navigation items appear after the title.
- Selected tab-like item uses the STACK selected treatment.
- Must not contain global controls.

For pages without subnavigation, keep the 9-dot menu and title, then omit the optional tab-like items. Do not collapse the title into the top global bar.

## Page Layout Rule

Every STACK web page must use an approved page layout pattern from `references/web/STACK-WEB-LAYOUT.md`.

Do not create arbitrary centered max-width SaaS-style page shells. Use a full-width workspace, `50/50`, `75/25`, table/list plus side panel, or another approved/reference-backed layout. If none fits, ask the designer before proceeding.

Header assets:

- The Sitetracker mark is a consistent SVG brand asset across all web designs.
- Header and second-row icons must come from the local icon database and be visually verified before implementation.
- Do not draw replacement header icons manually when a database or documented header asset exists.

## SLDS 2 Fallback

Use SLDS 2 for all components not explicitly covered by STACK web local references.

For overlap cases, load `references/web/STACK-WEB-COMPONENT-PRECEDENCE.md` or use the quick map in `references/platform/STACK-WEB-QUICK-DECISIONS.md`.

When using SLDS 2 fallback:

- Use SLDS 2 for structure, accessibility, and component semantics.
- Apply STACK typography, colors, icons, and density where those primitives are defined.
- Do not replace a STACK local reference with generic SLDS 2 styling.
- If SLDS 2 and STACK conflict, ask the designer.

## Component Creation Rule

STACK web references are intended to avoid new component creation.

If a component or pattern is not covered:

1. Check whether SLDS 2 covers it.
2. Use SLDS 2 with STACK primitives when appropriate.
3. If neither STACK nor SLDS 2 covers it, stop and use the new-component workflow.

Do not invent a new component from this file alone.

## External Source Inspection Rule

The local STACK web references are the default source for routine work.

Do not use MCP, Figma, screenshots, or any external source to rediscover the standard web shell during routine work.

Use external source inspection only when:

- the designer provides an explicit external design reference.
- the designer asks for source comparison.
- a local reference is missing or marked incomplete.
- visual verification requires the original external source.

Do not require external source inspection for routine web design work when local references cover the need.

## Component Gallery Reference

STACK maintains a browser-rendered component gallery for visual verification at `gallery`. It is STACK infrastructure, not a product prototype.

Load `references/GALLERY-REFERENCE.md` when you need gallery hashes or part screenshots for browser-rendered verification.

All gallery sections are canonical as of 2026-06-07.

Gallery specimens: `#shell`, `#colors`, `#typography`, `#icon-catalog`, `#components`, `#pills`, `#path-stages`, `#card-header`, `#table-sample`, `#list-rows-sample`, `#layouts`, `#right-hand-panel`, `#prototype-nav-rail`, `#mobile`.

For browser-rendered shell icons and brand assets, apply `references/VISUAL-VERIFICATION.md` and compare against gallery part screenshots or the running gallery.

## Output Expectations

Every STACK web output should include:

- confirmed creation destination.
- confirmed output location.
- local references loaded.
- SLDS 2 fallback used, if any.
- component and primitive choices.
- selected page layout pattern.
- states covered and states not covered.
- visual verification method used, such as browser screenshot, Figma screenshot, Pencil screenshot, Storybook screenshot, org/browser inspection, or manual visual checklist.
- icon visual verification result, when icons are used.
- rubric evaluation result.
- assumptions and remaining designer decisions.

For React, HTML, Storybook, LWC, or other browser-rendered outputs, run the page and inspect it in a browser before presenting it as ready. Capture a screenshot when possible.
