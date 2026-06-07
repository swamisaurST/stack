import React from "react";
import { assetUrl } from "./assetUrl.js";

export default function Icon({ name, className = "stack-icon", alt = "" }) {
  return (
    <img
      className={className}
      src={assetUrl(`stack-icons/${name}.svg`)}
      alt={alt}
      aria-hidden={alt ? undefined : "true"}
    />
  );
}
