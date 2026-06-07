import React from "react";

export const BUTTON_DEMO_STATES = [
  { key: "default", label: "Default" },
  { key: "hover", label: "Hover" },
  { key: "focus", label: "Focus" },
  { key: "disabled", label: "Disabled" },
];

export const PILL_DEMO_STATES = [
  { key: "default", label: "Default" },
  { key: "hover", label: "Hover" },
  { key: "focus", label: "Focus" },
];

export default function DemoStateToolbar({
  demoState,
  onChange,
  description,
  states = BUTTON_DEMO_STATES,
  groupLabel = "Preview state",
}) {
  return (
    <div className="button-demo-toolbar">
      <div className="button-demo-toolbar-copy">
        <strong>{groupLabel}</strong>
        <p>{description}</p>
      </div>
      <div className="button-group" role="group" aria-label={groupLabel}>
        {states.map((state) => (
          <button
            key={state.key}
            type="button"
            className={`button-segment ${demoState === state.key ? "button-segment-selected" : ""}`}
            aria-pressed={demoState === state.key}
            onClick={() => onChange(state.key)}
          >
            {state.label}
          </button>
        ))}
      </div>
    </div>
  );
}
