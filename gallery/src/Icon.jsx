import React from "react";

export default function Icon({ name, className = "stack-icon", alt = "" }) {
  return (
    <img
      className={className}
      src={`/stack-icons/${name}.svg`}
      alt={alt}
      aria-hidden={alt ? undefined : "true"}
    />
  );
}
