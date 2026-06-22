/**
 * Gallery navigation index — platform tabs (Web / Mobile) with parallel section structure.
 * Rail icons are defined in galleryIcons.js.
 */

export const galleryPlatforms = [
  {
    id: "web",
    label: "Web",
    sections: [
      {
        id: "web-header",
        title: "Web shell",
        description: "Sitetracker global header and title row",
        items: [
          {
            id: "shell",
            label: "Header shell",
            reference: "STACK-WEB-GLOBAL-HEADER",
          },
        ],
      },
      {
        id: "web-primitives",
        title: "Foundations",
        description: "Color, type, and icon vocabulary",
        items: [
          { id: "colors", label: "Colors", reference: "STACK-WEB-COLORS" },
          { id: "typography", label: "Typography", reference: "STACK-WEB-TYPOGRAPHY" },
          { id: "icon-catalog", label: "Icons", reference: "STACK-WEB-ICONS" },
        ],
      },
      {
        id: "web-controls",
        title: "Actions & inputs",
        description: "Buttons, pills, and steppers",
        items: [
          { id: "components", label: "Buttons", reference: "STACK-WEB-BUTTONS" },
          { id: "pills", label: "Pills", reference: "STACK-WEB-PILLS" },
          { id: "path-stages", label: "Path stages", reference: "STACK-WEB-PATH-STAGES" },
        ],
      },
      {
        id: "web-content",
        title: "Data surfaces",
        description: "Headers, tables, and list rows",
        items: [
          { id: "card-header", label: "Section headers", reference: "STACK-WEB-CARD-HEADER" },
          { id: "table-sample", label: "Tables", reference: "STACK-WEB-TABLE" },
          { id: "list-rows-sample", label: "List rows", reference: "STACK-WEB-LIST-ROW" },
        ],
      },
      {
        id: "web-layout",
        title: "Page layout",
        description: "Workspace splits and side panel",
        items: [
          { id: "layouts", label: "Workspace splits", reference: "STACK-WEB-LAYOUT" },
          {
            id: "right-hand-panel",
            label: "Context panel",
            reference: "STACK-WEB-RIGHT-HAND-PANEL",
          },
        ],
      },
      {
        id: "web-tooling",
        title: "Prototype harness",
        description: "Review navigation — not product UI",
        items: [
          {
            id: "prototype-nav-rail",
            label: "Left nav rail",
            reference: "STACK-WEB-PROTOTYPE-NAV-RAIL",
          },
        ],
      },
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    sections: [
      {
        id: "mobile-shell",
        title: "Screen headers",
        description: "Fixed dark bars for app and nested flows",
        items: [
          {
            id: "mobile-main-header",
            label: "Main header",
            reference: "STACK-MOBILE-DESIGN",
          },
          {
            id: "mobile-secondary-header",
            label: "Secondary header",
            reference: "STACK-MOBILE-DESIGN",
          },
        ],
      },
      {
        id: "mobile-primitives",
        title: "Design tokens",
        description: "Color and typography scale",
        items: [
          { id: "mobile-colors", label: "Colors", reference: "STACK-MOBILE-DESIGN" },
          { id: "mobile-typography", label: "Typography", reference: "STACK-MOBILE-DESIGN" },
        ],
      },
    ],
  },
];

/** Flat list for legacy consumers */
export const gallerySections = galleryPlatforms.flatMap((platform) =>
  platform.sections.map((section) => ({
    ...section,
    platformId: platform.id,
  })),
);

export function platformForItemId(itemId) {
  for (const platform of galleryPlatforms) {
    for (const section of platform.sections) {
      if (section.items.some((item) => item.id === itemId)) {
        return platform.id;
      }
    }
  }
  return "web";
}

export function platformForHash(hash) {
  const id = hash.replace(/^#/, "");
  if (!id || id === "top") return "web";
  if (id === "mobile") return "mobile";
  for (const platform of galleryPlatforms) {
    if (platform.sections.some((section) => section.id === id)) {
      return platform.id;
    }
    for (const section of platform.sections) {
      if (section.items.some((item) => item.id === id)) {
        return platform.id;
      }
    }
  }
  return "web";
}
