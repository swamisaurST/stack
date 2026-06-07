import React from "react";
import { resolveRailIcon } from "./galleryIcons.js";

/**
 * Utility icon for dark prototype rails — uses CSS mask so hardcoded SVG fills
 * (#706E6B) still render crisply at small sizes (unlike filter/invert on complex paths).
 */
export default function RailIcon({ name, className = "prototype-rail-link-icon" }) {
  const iconName = resolveRailIcon(name);

  return (
    <span
      className={className}
      style={{ "--rail-icon-src": `url("/stack-icons/${iconName}.svg")` }}
      aria-hidden="true"
    />
  );
}
