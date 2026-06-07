# STACK Mobile Design


Use this file for Sitetracker mobile design and implementation guidance. Mobile is intentionally simpler than web: shared STACK primitives stay consistent, Hero UI provides the component base, and STACK owns only the mobile shell/header rules plus Sitetracker-specific primitive decisions.

## Source

- Mobile design system: [Figma / Mobile Design System](https://www.figma.com/design/YOuLeSd6Qkt2DMrqC6phUG/%F0%9F%8E%A8-Mobile-Design-System?node-id=2-2431&t=gcR0mGmugRDQTXpd-1)
- Color and typography source node ID: `2:2431`
- Color system section ID: `811:2574`
- Type system section ID: `811:2691`
- Header source node: [Figma / Mobile Header](https://www.figma.com/design/YOuLeSd6Qkt2DMrqC6phUG/%F0%9F%8E%A8-Mobile-Design-System?node-id=2-2439&t=gcR0mGmugRDQTXpd-1)
- Header source node ID: `2:2439`
- Main header component ID: `2:2441`
- Secondary dark header component ID: `2:2447`
- Extraction date: 2026-06-04
- Extraction method: Figma MCP metadata, Figma MCP design context for header components, Figma MCP screenshot, and targeted color-swatch inspection.

## Required First Step

Before designing or implementing a mobile surface:

1. Read `BOOTSTRAP.md`. If `CONTEXT.md` shows `stack.session.bootstrapped: true`, skip the re-read.
2. Confirm the product platform is `mobile`.
3. Confirm the creation destination: Figma, Pencil, React, Hero UI implementation, Markdown spec, review notes, or another explicit destination.
4. Confirm the output location for that destination before creating anything.
5. Confirm the end user, workflow/job-to-be-done, and product constraints.
6. Confirm the workflow skill: new design, audit, transition, or new component.
7. Use this file as the mobile platform reference.
8. Use Hero UI for components unless this file defines a Sitetracker-specific shell or primitive.
9. Apply `HANDOFF.md` before final output.

Do not load web references by default for mobile work. Load web references only when the designer asks for primitive cross-verification or when a shared primitive needs comparison.

If the request is broad, fake, playful, or says "anything", stop and ask clarifying questions. Do not treat vagueness as approval to choose the product workflow, output destination, folder location, component set, or visual direction.

## Source Precedence

Resolve mobile design decisions in this order:

1. STACK mobile rules in this file.
2. Hero UI for component structure, states, and behavior.
3. Shared STACK primitives where this file explicitly says they are shared with web.
4. Ask the designer when sources conflict or coverage is unclear.

Do not resolve ambiguity by inventing new visual behavior, primitives, components, states, colors, icon names, typography, or mobile navigation patterns.

## Mobile App Rule

Sitetracker mobile uses a dark fixed header model. Light mode is out of scope unless the designer explicitly reintroduces it.

Default mobile screen order:

1. Fixed mobile header.
2. Page or workflow content.
3. Hero UI content components and controls.

The mobile header is divided into two approved patterns:

- Main logo header for top-level app/home contexts.
- Secondary dark page header for nested screens that need a back button and screen title.

Do not use the Figma `Header / Tertiary Light` component. No light-mode mobile header should be produced from the current STACK mobile context.

## Header Contract

### Main Logo Header

Use `Header / Main` for top-level mobile contexts.

Extracted anatomy:

- Source component: `Header / Main`
- Node ID: `2:2441`
- Source size: `390x116`
- Background: `UI / Top Bar`, `#1D2D34`
- Includes iOS status bar.
- Sitetracker logo appears left aligned at `16px`, top offset `54px`, size `162x26`.
- Organization name appears below logo at left `16px`, top offset `80px`, with source text box `275x24`.
- Notification icon appears on the right at right offset `63px`, top offset `54px`, size `24x24`.
- Avatar appears on the far right at right offset `19px`, top offset `51px`, size `28x28`.

Rules:

- Keep the exact mobile Sitetracker logo asset in the main header.
- Keep organization name as contextual account/tenant text.
- Avatar is always available unless a product requirement explicitly removes identity access.
- Do not place page titles or back navigation in the main logo header.

### Secondary Dark Page Header

Use `Header / Secondary Dark` for nested pages and workflows.

Extracted anatomy:

- Source component: `Header / Secondary Dark`
- Node ID: `2:2447`
- Source size: `390x90`
- Background: `UI / Top Bar`, `#1D2D34`
- Includes iOS status bar.
- Left back chevron group appears at left `16px`, top offset `54px`, with `24px` tap-region height.
- Screen title is centered at top offset `56px`, source text box width `212px`, line height `20px`.
- Optional right-side icons are available for workflow actions at `24x24`.

Rules:

- Always include the back button when the screen is not a top-level destination.
- Keep the screen name centered.
- Keep right-side icons to global or screen-level utilities only.
- Do not use this header for top-level app/home contexts that need the Sitetracker logo and organization name.

### Exact Header Style Contract

Mobile header details are strict. Do not reinterpret them from Hero UI defaults.

Shared header values:

- Viewport reference width: `390px`.
- Header background: `UI / Top Bar`, `#1D2D34`.
- Header content and icons on dark background: `Text / White` and `Icon / White`, `#FFFFFF`.
- Status bar height: `44px`.
- Status bar time: left `21px`, top `12px`, source box `54x21`, `SF Pro Text`, `600`, `15px / 20px`, letter spacing `-0.5px`, color `#FFFFFF`.
- Status bar right-side group: right `14.67px`, top `17.33px`, source size `66.661x11.336`.
- Status bar right-side group contains cellular signal, Wi-Fi, and battery indicators. Use icon/vector approximations in prototypes if native device chrome is not available.
- Do not replace status bar indicators with text labels such as `Cell`, `Wi-Fi`, or `Battery`.
- Header content row starts at top offset `54px`.
- Status bar typography belongs to device chrome only and does not define Sitetracker product typography.

Main logo header values:

- Header size: `390x116`.
- Logo asset: exact `ST Logo` asset from `Header / Main`, not text and not a recreated SVG.
- Logo placement: left `16px`, top `54px`, size `162x26`.
- Organization label: left `16px`, top `80px`, source box `275x24`.
- Organization typography: use mobile `Body+` mapped to `Barlow`, `400`, `16px / 24px`, letter spacing `0.15px`, color `#FFFFFF`.
- Notification icon: right `63px`, top `54px`, size `24x24`, color `#FFFFFF`.
- Avatar: right `19px`, top `51px`, size `28x28`, white circular container with dark user glyph as extracted from the source.

Secondary page header values:

- Header size: `390x90`.
- Back button: left `16px`, top `54px`, `24px` tall region, white chevron.
- Screen title: centered, top `56px`, width `212px`, line height `20px`.
- Screen title typography: use mobile `Headline` mapped to `Barlow`, `700`, `16px / 20px`, letter spacing `0.15px`, color `#FFFFFF`.
- Right utility icons: `24x24`, top `54px`, right-aligned slots as source spacing allows.

Cross-verification against web references:

- Logo rule matches web: the Sitetracker mark is a required brand asset and must not be replaced with text, a standard icon, a custom icon, or a raster screenshot.
- Logo sizing is platform-specific: web uses a compact mark at `28x26`; mobile uses the full `ST Logo` wordmark at `162x26`.
- Brand teal `#00847C`, white `#FFFFFF`, success `#027E46`, error `#C23934`, and border/stroke `#DDDBDA` are shared with web.
- Header shell color is mobile-specific: mobile uses dark `#1D2D34`; web global header uses a white shell.
- Typography is platform-specific: web uses `SF Pro`; mobile uses `Barlow`.
- Icon behavior matches web in principle: use documented icon assets, visually verify them, and provide accessible labels for interactive icon controls.

Offline, loading, and readonly header states are not part of the default mobile header contract. Add them only when a specific product workflow requires them.

## Hero UI Component Rule

Hero UI is the default mobile component system.

Use Hero UI for:

- buttons.
- inputs and forms.
- cards and surfaces.
- lists and list items.
- tabs and segmented controls.
- modals, drawers, sheets, popovers, and menus.
- badges, chips, and status indicators.
- validation, success, error, empty, and feedback components where a workflow requires them.

STACK owns:

- mobile fixed header composition.
- Sitetracker color primitives.
- Sitetracker typography primitives.
- Sitetracker icon and logo usage.
- source-precedence and evaluation behavior.

If Hero UI and STACK conflict visually, use STACK for the documented primitive and Hero UI for structure, accessibility, and behavior. If the conflict affects product semantics or component availability, ask the designer.

## Typography

Mobile uses `Barlow`.

The Figma source includes older Lato rows for body/supporting styles. The designer direction overrides those artifacts: mobile STACK typography uses `Barlow`.

Use the Barlow title values as extracted. For support styles that were inherited from older Lato rows, use the source size, weight, and line height, but do not treat the source letter spacing as canonical for Barlow unless a component-specific reference proves it. Letter spacing is font-sensitive and should not be exaggerated in compact mobile labels.

### Type Scale

- `Title (1+)`
  - Font family: `Barlow`
  - Size: `32px`
  - Weight: `700`
  - Line height: `38px`
  - Letter spacing: `-0.35px`

- `Title (1)`
  - Font family: `Barlow`
  - Size: `26px`
  - Weight: `700`
  - Line height: `34px`
  - Letter spacing: `-0.5px`

- `Title (2)`
  - Font family: `Barlow`
  - Size: `20px`
  - Weight: `600`
  - Line height: `26px`
  - Letter spacing: `-0.5px`

- `Headline`
  - Font family: `Barlow`
  - Size: `16px`
  - Weight: `700`
  - Line height: `20px`
  - Letter spacing: normal by default; source Lato row reported `0.15px`

- `Body+`
  - Font family: `Barlow`
  - Size: `16px`
  - Weight: `400`
  - Line height: `24px`
  - Letter spacing: normal by default; source Lato row reported `0.15px`

- `Body`
  - Font family: `Barlow`
  - Size: `14px`
  - Weight: `400`
  - Line height: `22px`
  - Letter spacing: normal by default; source Lato row reported `-0.15px`

- `Caps`
  - Font family: `Barlow`
  - Size: `12px`
  - Weight: `800`
  - Line height: `12px`
  - Letter spacing: normal by default; do not apply the source Lato `1px` tracking unless a specific mobile component reference requires it.
  - Text transform: capitalize only when the component reference calls for it.

- `Eyebrow`
  - Font family: `Barlow`
  - Size: `12px`
  - Weight: `500`
  - Line height: `16px`
  - Letter spacing: normal by default; source Lato row reported `-0.05px`

Use iOS status bar typography only for device chrome in prototypes. Do not treat status bar typography as a Sitetracker content type style.

## Colors

Use color by purpose, not by visual preference.

### Shared With Web

- `Brand / ST Teal`
  - Hex: `#00847C`
  - Mobile source names: `Text (Brand)`, `Icon (Brand)`, `UI (Brand)`
  - Web match: `Brand / ST Teal`

- `Text / White`
  - Hex: `#FFFFFF`
  - Mobile source names: `Text (White)`, `Icon (White)`, `UI (Surface / White)`
  - Web match: `Text / White`, `Surface / White`

- `Border / Stroke`
  - Hex: `#DDDBDA`
  - Mobile source name: `UI (Stroke)`
  - Web match: `Border / Default`

- `State / Success`
  - Hex: `#027E46`
  - Mobile source name: `UI (Success)`
  - Web match: `Text / Success`

- `State / Error`
  - Hex: `#C23934`
  - Mobile source name: `UI (Error)`
  - Web match: `Text / Error`

### Mobile Specific

- `Text / Default`
  - Hex: `#1D2D34`
  - Use for primary mobile text on light surfaces.

- `Text / Weak`
  - Hex: `#494D4F`
  - Use for secondary mobile text and lower-emphasis metadata.

- `Text / Placeholder`
  - Hex: `#707577`
  - Use for placeholders and inactive hints.

- `Text / Disabled`
  - Hex: `#DDDBDA`
  - Use for disabled text.

- `Icon / Default`
  - Hex: `#666D71`
  - Use for default mobile icons on light surfaces.

- `Icon / Dark`
  - Hex: `#1D2D34`
  - Use for high-emphasis dark icons.

- `Icon / Placeholder`
  - Hex: `#AAADAE`
  - Use for placeholder or inactive icon states.

- `Icon / Disabled`
  - Hex: `#DFDFDF`
  - Use for disabled icons.

- `UI / Top Bar`
  - Hex: `#1D2D34`
  - Use for fixed mobile headers.

- `UI / Sub Bar`
  - Hex: `#354851`
  - Use for secondary dark mobile bars when the design calls for a sub-bar.

- `UI / Light`
  - Hex: `#F0EEED`
  - Use for light mobile fills only when the component reference calls for it.

- `UI / Background`
  - Hex: `#F7F8F7`
  - Use for mobile app background.

- `UI / Surface`
  - Hex: `#FFFFFF`
  - Use for cards, sheets, lists, and primary content surfaces.

- `UI / Warning`
  - Hex: `#FFB75D`
  - Use for semantic warning only.

Do not introduce light-mode shell colors. Light fills may still appear inside dark-mode mobile screens for content surfaces when the Figma primitive defines them.

## Icons And Logo

- The Sitetracker logo is a brand asset, not an icon.
- Header icons must use the approved mobile design system icon source or the shared Sitetracker icon library when the mobile source does not define an icon.
- Do not draw replacement icons manually when a documented asset exists.
- Every interactive icon needs an accessible label in implementation-facing output.

## State Expectations

Mobile state coverage should come from the design thinking process, not from a blanket checklist.

Always consider:

- default.
- validation.
- success.
- error.

Consider when the workflow makes them relevant:

- empty state.
- filtered empty state.
- retry, when error recovery is part of the workflow.
- permission denied, when access control affects the end user.

For headers specifically:

- default.
- back navigation available or unavailable.
- right action enabled, disabled, or hidden.

Do not include loading, offline, sync-stale, or readonly states by default. Add them only when the product workflow, designer direction, or implementation constraints make them necessary.

If a mobile output does not show every relevant state, list the missing states explicitly and explain why they matter for the workflow.

## Cross-Platform Primitive Notes

Shared primitives should remain conceptually aligned across web and mobile:

- Brand teal remains `#00847C`.
- White remains `#FFFFFF`.
- Semantic success remains `#027E46`.
- Semantic error remains `#C23934`.
- Border/stroke remains aligned to `#DDDBDA`.

Platform-specific primitives should not be forced to match:

- Web typography uses `SF Pro`; mobile typography uses `Barlow`.
- Web default text is `#17191C`; mobile default text is `#1D2D34`.
- Web shell is a two-part Salesforce-style header; mobile shell is a fixed dark app/page header.
- Web uses SLDS 2 fallback; mobile uses Hero UI fallback.

## When To Use Figma MCP

Use Figma MCP again if:

- the designer provides a new mobile Figma reference.
- a mobile component is not covered by Hero UI and this file.
- exact visual verification is needed before implementation.
- the designer asks to compare this extracted reference against the original Figma source.
- color values for secondary/pill states are needed; these were identified in the source but not fully extracted into this draft.

Do not require Figma MCP for routine mobile header work when this file covers the need.

## Gallery Reference

Canonical browser-rendered mobile previews in the STACK component gallery (`#mobile`). Verified 2026-06-07.

- Gallery: `gallery` at `http://localhost:4192/#mobile`
- Part verification: `gallery/screenshots/mobile-headers-part-verified-2026-06-07.png`
- Gallery index: `references/GALLERY-REFERENCE.md`

## Output Expectations

Every STACK mobile output should include:

- confirmed creation destination.
- Hero UI components used, if any.
- STACK mobile shell/header pattern used, if any.
- color and typography primitives used.
- states covered and states not covered.
- visual verification method used, such as Figma screenshot, Pencil screenshot, browser screenshot, or manual checklist.
- assumptions and remaining designer decisions.

For React, Hero UI, browser-rendered prototypes, or app implementations, run the page and inspect it in a browser/device preview before presenting it as ready. Capture a screenshot when possible.
