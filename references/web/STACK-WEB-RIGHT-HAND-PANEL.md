# STACK Web Right Hand Panel


Use this reference for the Sitetracker web right hand panel (RHP): the contextual record-inspector surface that opens beside a primary workspace to show Salesforce object details, related records, and object-specific tabs.

Common product uses:

- Linked items opened from tables, lists, maps, or project/site workflows.
- Activity, permit, site, project, and other object record context without leaving the current page.
- Master-detail layouts where the left pane holds selection and the right pane holds record detail.

## Source

- Figma file: [Sitetracker Web Design Library](https://www.figma.com/design/P7QZySjFIHNpkaCJ80yCHo/Sitetracker-Web-Design-Library?node-id=6838-11226&t=dKANgYtmiDs2y9F9-1)
- Source node ID: `6838:11226`
- Source node name: `Right Hand Panel`
- Example record in source: `Environmental Permit` activity with `Permit` tab selected
- Extraction date: 2026-06-07
- Extraction method: Figma source link, designer-provided screenshot, and visual comparison against existing STACK card, tab, and typography references.
- Screenshot check: designer screenshot captured during extraction. The short-lived Figma screenshot URL is not stored in this reference.

## Inheritance

This reference overrides SLDS 2 for Sitetracker web right hand panel chrome, header composition, local tab visuals, collapsible section headers, and read-only field-grid layout.

Use SLDS 2 for:

- accordion expand/collapse behavior and keyboard semantics when not specified here.
- form editing, validation, and input controls when a field enters edit mode.
- modal, toast, and menu behavior outside the panel shell.

Use STACK for:

- panel header, object icon treatment, record title, and header actions.
- local tab strip visuals inside the panel.
- section accordion headers and field-grid density.
- typography, colors, links, and utility icons.

Do not replace this pattern with a generic SLDS record detail page or an unconstrained drawer when the product workflow expects the Sitetracker RHP.

## Purpose

The right hand panel gives additional context on Salesforce objects while preserving the user's place in the current workflow.

It is not:

- the global two-part web shell.
- a full record page replacement unless the user explicitly opens the record in a new view.
- a free-form sidebar for unrelated widgets.

## When To Use

- The user selects a linked record from a table, list, map feature, project view, site view, or related list and needs object detail beside the primary task.
- The workflow is master-detail: selection on the left, contextual record inspection on the right.
- The object has multiple detail surfaces that fit local tabs such as `Details`, `Dependencies`, `Permit`, `Submittals`, `Files`, or `Related Lists`.
- The record has grouped Salesforce fields that should appear in collapsible sections.

## When Not To Use

- The task needs a full-page record layout with global shell navigation. Use the standard page shell instead.
- The content is a transient action sheet, confirmation, or short form. Use SLDS 2 modal or popover patterns.
- The surface is map-only attribute display with no Salesforce record chrome. Confirm whether `GIS feature panel` or another product-specific panel is the correct pattern.
- The left workspace is not the user's primary task area. Re-evaluate layout using `STACK-WEB-LAYOUT.md`.
- The panel would duplicate the entire primary table or list with no added record context.

## Panel Anatomy

The extracted example uses a vertical panel with four regions:

1. Panel header
2. Local tab navigation
3. Scrollable tab content
4. Collapsible field sections inside the active tab

Default container treatment in source:

- Fill: `#FFFFFF`
- Border: `#DDDBDA`
- Radius: `4px` on the outer card when the panel is rendered as a contained surface
- Width in source instance: `726px`
- The panel height follows the available workspace below the page shell or beside the master pane

The panel is a secondary contextual surface. It must not compete with the primary workspace for page-level actions.

## Panel Header

Required elements:

- object-type eyebrow label, such as `Activity`
- leading object Standard Icon at `32×32` (no outer border wrapper)
- record title, such as `Environmental Permit`
- open-record affordance to launch the full record view
- close affordance to dismiss the panel

Extracted header structure:

- Fill: `#F3F2F2`
- Height: `73px`
- Padding: `16px`
- Gap between icon and title group: `14px`
- Bottom divider: `#DDDBDA`
- Eyebrow style: `Body 3`, `13px`, `400`, `#000000`
- Record title style: `18px`, `700`, `#080707`
- Open-record icon: `18×18` `new_window` utility icon
- Close icon: `16×16`
- Leading object icon: `32×32` Standard Icon or raster/object image from the source instance — not a generic bordered utility frame

Header rules:

- The eyebrow names the Salesforce object type, not the page.
- The title names the selected record.
- Keep the open-record and close actions icon-only with accessible labels.
- Do not move global shell controls into the panel header.
- Do not add unrelated bulk actions to the panel header unless the whole selected record is the action target.

Recommended icon mapping:

| Action | Icon |
|---|---|
| Open full record | `Utility Icons / N / new` (`1518:28998`) |
| Close panel | `Utility Icons / C / close` (`1518:28732`) |
| Object/status examples | Use `STACK-WEB-ICONS.md`; visually verify before implementation |

## Local Tab Navigation

The source example shows local tabs inside the panel:

- `Details`
- `Dependencies`
- `Permit`
- `Submittals`
- `Files`
- `Related Lists`

Extracted tab treatment:

- Tab strip height: `40px`
- Tab label style: `Body 3`, `13px`
- Default text: `#080707`, weight `400`
- Active text weight: `700`
- Active indicator: `box-shadow: inset 0 -2px 0 0 #00847C`
- Active background: `#FFFFFF`
- Tab padding: `10px 12px`
- Tab strip sits directly below the panel header and above scrollable content
- Bottom divider on the tab row: `1px #DDDBDA`

Tab rules:

- These are local object-detail tabs, not global second-row shell tabs.
- Use object-specific tab labels; do not copy the Environmental Permit tab set unless the target object uses the same detail model.
- Truncate or overflow additional tabs before wrapping the panel header.
- Preserve exactly one active tab.
- SLDS 2 may supply keyboard behavior; STACK owns the visual treatment above.

## Collapsible Sections

The source `Permit` tab groups fields into accordion sections:

- `General`
- `Application`
- `Expiration`
- `Related`
- `System`

Extracted section header treatment:

- Fill: `#F3F2F2`
- Height: `33px`
- Radius: `4px`
- Section title style: `16px`, `400`, `#080707`, line height `24px`
- Leading chevron: `16×16`, positioned `8px` from left
- Title inset: `32px` from left
- Section group gap below header: `16px`
- Gap between section groups: `24px`
- Section body fill: `#FFFFFF`

Section rules:

- Use sections to group Salesforce field sets, not arbitrary visual blocks.
- Default to expanded for the user's current task-critical group when the product allows it.
- Preserve accordion semantics for keyboard and screen-reader users.
- Do not nest accordions inside accordions unless the designer approves the hierarchy.
- `System` sections hold audit metadata such as created/modified by and timestamps.

## Field Grid

Within each expanded section, fields use a two-column read-only grid.

Field cell anatomy:

1. Label row
2. Value row
3. Optional trailing inline-edit affordance

Extracted field treatment (`Detail Input / Default`):

- Field cell height: `44px`
- Column gap in a row: `16px`
- Row gap within a section: `16px`
- Label style: `12px`, `400`, `#3E3E3C`, line height `18px`
- Label/info gap: `8px`
- Info icon: `12×12`
- Value style: `Body 3`, `13px`, `400`, `#080707`, positioned `22px` from top of cell
- Link value color: `#00847C`
- Inline edit icon: `12×12`, `#B0ADAB`, positioned top `26px` right `0`
- Cell bottom border: `1px #DDDBDA`
- Tab content padding: `16px 16px 24px`
- Full-width fields may span both columns when the value is long, such as URLs or notes

Field rules:

- Labels come from Salesforce field labels or the approved field metadata model.
- Show the info icon only when field help exists.
- Show the edit icon only when the field is editable in the current context.
- Empty values remain visually empty; do not insert placeholder dashes unless the product explicitly requires them.
- Related-record values render as links, not buttons.
- System values may combine a user link and a timestamp in one value row.

Common value types in source:

| Value type | Treatment |
|---|---|
| Plain text | `Body 2`, `#080707` |
| Currency | `Body 2`, locale-formatted |
| Date | `Body 2`, locale-formatted |
| URL / record link | `Text / Link`, `#00847C` |
| User link | `Text / Link`, `#00847C` |
| Audit value | user link plus timestamp in one row |

## Layout Relationship

Use with `STACK-WEB-LAYOUT.md`:

- `Table/List Plus Side Panel` when the panel is the detail surface for a selected row or list item.
- `75/25 Split` when the panel is a persistent inspector beside a dominant primary pane.

Rules:

- The panel is always the secondary contextual region.
- The primary pane keeps selection, filtering, and bulk workflow ownership.
- Opening the panel must not collapse the primary selection state unless the designer approves that behavior.
- On narrow widths, the panel may become an overlay drawer only when responsive behavior is explicitly defined for the product surface.

## Required States

Document and implement these states for product work:

| State | Requirement |
|---|---|
| Closed | No panel rendered or panel dismissed without losing primary selection unless approved |
| Loading | Panel chrome visible with section skeleton or field placeholders |
| Ready | Header, tabs, and field values populated |
| Empty selection | Primary pane shows selection prompt; panel hidden or empty-state message |
| Empty tab | Active tab renders an intentional empty state, not a broken layout |
| Permission denied | Read-only shell with hidden edit affordances and explicit permission copy if needed |
| Error | Preserve header context and show recoverable error inside the active tab |
| Edit mode | Field-level or section-level edit uses SLDS 2 form controls without breaking grid alignment |

## Accessibility

- The panel needs an accessible name from the record title or `aria-label`.
- Close and open-record controls require explicit labels.
- Local tabs require tablist/tab/tabpanel semantics.
- Section headers must be expandable buttons with `aria-expanded`.
- Info icons require accessible descriptions for field help.
- Edit icons require labels that include the field name.
- Link values must be real links or link-styled buttons with clear destinations.
- Keyboard users must be able to reach close, tabs, section headers, links, and edit affordances without trapping focus in the panel.

## Responsive Behavior

- Desktop: dock the panel to the right of the master workspace.
- Medium widths: preserve the two-region model when possible; reduce field grid to one column only when the designer approves.
- Small widths: confirm with the designer whether the panel becomes a full-width overlay, a bottom sheet, or navigates to a full record page.

Do not invent responsive behavior for a product surface without designer confirmation.

## Implementation Targets

| Destination | Guidance |
|---|---|
| React / local hosted app | Compose panel shell and field grid with STACK tokens; use SLDS-like semantics for accordion and tabs |
| LWC | Prefer `lightning-tabset`, `lightning-accordion`, and record field primitives where available; apply STACK visuals via utility classes and documented tokens |
| Figma / Pencil | Reuse card header icon frame, local tab strip, and section header treatments from this reference |
| Markdown / spec | Name the layout model and list tabs, sections, and field groups explicitly |

## Gallery Reference

Canonical browser-rendered reference in the STACK component gallery (`#right-hand-panel`). Verified 2026-06-07.

- Gallery: `gallery` at `http://localhost:4192/#right-hand-panel`
- Part verification: `gallery/screenshots/rhp-gallery-card-verified-2026-06-07.png`, `gallery/screenshots/rhp-panel-specimen-verified-2026-06-07.png`
- Reusable React module: `src/RightHandPanel.jsx` with exported `RHP_SPECIMEN` data shape for agent read-only rendering
- Gallery wrapper: `src/RightHandPanelGallery.jsx` (uses shared `SectionHeader`; icon `toggle-panel-right`)
- Gallery index: `references/GALLERY-REFERENCE.md`

### Agent data shape

Use `RHP_SPECIMEN` in the gallery as the canonical read-only configuration example:

```js
{
  eyebrow: "Activity",
  title: "Environmental Permit",
  objectIcon: "task",
  tabs: ["Details", "Related Lists"],
  defaultTab: "Details",
  tabContent: {
    Details: { sections: [{ title, fields: [{ type, label, value, href?, editable?, hasHelp?, empty? }] }] },
    "Related Lists": { emptyMessage: "..." }
  }
}
```

Field types: `text`, `link`, `audit`, with optional `editable`, `hasHelp`, `empty`, and `fullWidth` flags.

## Related References

- `STACK-WEB-LAYOUT.md` for master-detail and split layouts
- `STACK-WEB-CARD-HEADER.md` for leading icon frame and section-header language
- `STACK-WEB-COMPONENT-TITLE-GROUP.md` for tab visual language; use only as a visual reference for local tabs, not as a shell substitute
- `STACK-WEB-TYPOGRAPHY.md` for label and value text styles
- `STACK-WEB-COLORS.md` for text, link, section, and border colors
- `STACK-WEB-ICONS.md` for utility and object icons
- `STACK-WEB-TABLE.md` when the primary pane is a dense table
- `STACK-WEB-LIST-ROW.md` when the primary pane is a compact list
- `STACK-WEB-COMPONENT-PRECEDENCE.md` for STACK vs SLDS 2 ownership

## Known Design-System Gaps

- Exact responsive breakpoint behavior is product-specific and not locked here.
- Field inline-edit transition states depend on SLDS 2 form patterns and Salesforce field permissions.
- Related-list tab content is referenced visually but not fully extracted in this file; load the relevant list/table reference when implementing that tab.
- File and submittal tab interiors may require additional references when those surfaces are in scope.

## When To Use Figma MCP

Use Figma MCP again if:

- the designer provides an updated Figma node for the right hand panel.
- a new object type introduces header, tab, or section variants not represented here.
- visual precision is required for field-grid spacing, icon alignment, or responsive behavior.
- the designer asks to compare this reference against the original Figma source.
