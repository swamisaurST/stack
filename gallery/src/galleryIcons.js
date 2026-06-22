/**
 * Canonical rail icon mapping for every gallery specimen (12px utility glyph in nav rail).
 */
export const GALLERY_SPECIMEN_ICONS = {
  colors: "palette",
  typography: "text_color",
  "icon-catalog": "list",
  shell: "home",
  components: "add",
  pills: "check",
  "path-stages": "chevronright",
  "card-header": "page",
  "table-sample": "table",
  "list-rows-sample": "list",
  layouts: "layout",
  "right-hand-panel": "toggle-panel-right",
  "prototype-nav-rail": "apps",
  "mobile-main-header": "apps",
  "mobile-secondary-header": "chevronleft",
  "mobile-colors": "palette",
  "mobile-typography": "text_color",
};

export function railIconFor(specimenId) {
  return GALLERY_SPECIMEN_ICONS[specimenId] ?? specimenId;
}

export function resolveRailIcon(name) {
  return name;
}
