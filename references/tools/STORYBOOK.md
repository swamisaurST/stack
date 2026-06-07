# STACK Tool Context: Storybook

Use this file when the creation destination is a Storybook story — either a documentation surface for an LWC, a React component story, or a pattern catalog story that mirrors a STACK reference. The STACK gates apply unchanged; this file documents how to satisfy them inside a Storybook project.

Load when the destination is Storybook with implementation scope. Defer to `references/platform/STACK-WEB-DESIGN.md` for visual rules.

## Native Storybook Mapping

| Concern | Use |
|---|---|
| Story format | CSF 3 (`.stories.tsx`/`.stories.js`) or MDX docs pages |
| Component runtime | React (web prototypes) or LWC story wrappers (Salesforce documentation Storybook) |
| Visual primitives | STACK tokens applied via the project's design-token integration; if no token integration exists, copy the documented STACK token values verbatim |
| Icons | Copy from `gallery/public/stack-icons/` for STACK-locked shell assets; use SLDS icons via the project's icon component for utility/standard icons |
| Controls | Storybook args/argTypes for STACK variant matrices (variant, size, state, density) |
| Output location | The agreed Storybook project root and stories folder; never inside `design/stack` |

## Required First Step

Before authoring stories:

1. Confirm platform is `web`, destination is `Storybook`, and output location is the agreed Storybook project + stories path.
2. Resolve the matching bundle with `./design/stack/scripts/resolve-bundle.sh <bundle> --mode=implement`. Storybook documentation should reflect the full reference, not the compact router.
3. Load `references/platform/STACK-WEB-DESIGN.md`, `references/platform/STACK-WEB-QUICK-DECISIONS.md`, and the component refs the story documents.
4. Load `references/VISUAL-VERIFICATION.md` whenever the story renders shell icons, brand assets, locked header controls, dense table rows, or STACK pills.

## Story Conventions

- One story file per STACK reference: `Buttons.stories.tsx` mirrors `references/web/STACK-WEB-BUTTONS.md`, `Table.stories.tsx` mirrors `references/web/STACK-WEB-TABLE.md`, etc.
- Use a primary `Default` story that matches the canonical gallery specimen at `http://localhost:4192/#<hash>`.
- Add per-variant stories that mirror the gallery variant canvas (one variant per story) so designers can deep-link into a single state.
- Document the matching gallery hash and Markdown reference in the story file's `parameters.docs.description.component` field.
- Use Storybook controls (`argTypes`) only for variants the STACK reference explicitly allows. Do not expose argTypes that would let users toggle into invalid combinations.
- Keep prototype review chrome (nav rail, screen switcher) out of Storybook. Storybook stories document a single component or composition — review chrome belongs in `design/prototypes/`.

## Verification Protocol For Storybook

`references/VISUAL-VERIFICATION.md` Level 1 + Level 2 still apply.

- **Level 1 (page render):** capture the rendered story in Storybook's iframe (`http://localhost:6006/iframe.html?id=<story-id>&viewMode=story`). Confirm the rendered region matches the intended specimen.
- **Level 2 (part screenshot):** when the story documents shell, header, brand assets, locked controls, or dense rows, capture tight crops of those regions. The same STACK selectors apply if the story uses them (`.product-global-actions`, `.product-top-bar`, etc.).
- Story snapshots and Chromatic visual regression are useful but **do not replace** part-screenshot comparison against the canonical gallery reference.

Required handoff fields when Storybook is the destination:

- `Visual verification`: cite the Storybook iframe URL and the captured screenshot.
- `Part screenshot(s)`: tight crops aligned to STACK reference regions.
- `Controls compared`: the STACK controls present in the story.
- `Open gaps`: any STACK reference detail not yet covered by a story or argType.

## Story File Template (CSF 3, React)

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "STACK / Web / Controls / Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          "Mirrors STACK-WEB-BUTTONS.md and gallery #components. " +
          "Run gallery at http://localhost:4192/#components for the canonical specimen.",
      },
    },
  },
  argTypes: {
    variant: { control: "radio", options: ["brand", "neutral", "base", "destructive"] },
    size: { control: "radio", options: ["small", "medium", "large"] },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = { args: { variant: "brand", size: "medium", children: "Save" } };
export const Neutral: Story = { args: { ...Default.args, variant: "neutral" } };
export const Destructive: Story = { args: { ...Default.args, variant: "destructive" } };
```

## Output Locations

- Storybook stories: `<storybook-project>/src/stories/STACK/...` (or the project's agreed pattern).
- Documentation MDX: same folder as the story when applicable.
- Reference captures and visual regression baselines: under the Storybook project's screenshot folder, not under `design/stack/`.

## Stop Conditions

Stop and ask the designer when:

- The Storybook project root or stories path is unspecified.
- The story would invent a STACK variant or state not in the reference Markdown.
- A story would document an LWC behavior that contradicts the canonical STACK reference (raise as a transition or new-component task instead).
- Visual verification cannot capture the locked region (e.g., shadow-DOM-only Lightning components inside Storybook) and no fallback verification path is approved.

## Related References

- `references/platform/STACK-WEB-DESIGN.md` — visual rules.
- `references/web/STACK-WEB-COMPONENT-PRECEDENCE.md` — STACK vs SLDS 2 ownership.
- `references/VISUAL-VERIFICATION.md` — required two-level verification.
- `references/GALLERY-REFERENCE.md` — canonical specimen index.
- `references/tools/LWC.md` — when the story documents an LWC.
