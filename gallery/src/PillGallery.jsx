import React, { useEffect, useRef, useState } from "react";
import DemoStateToolbar, { PILL_DEMO_STATES } from "./DemoStateToolbar.jsx";
import SectionHeader from "./SectionHeader.jsx";

function ColorIcon({ name, className = "" }) {
  return (
    <span
      className={`stack-color-icon ${className}`.trim()}
      style={{ "--stack-color-icon-src": `url("/stack-icons/${name}.svg")` }}
      aria-hidden="true"
    />
  );
}

const SELECTION_TYPES = [
  { key: "base", label: "Base", icon: null },
  { key: "object", label: "Object", icon: "record" },
  { key: "avatar", label: "Avatar", icon: "person" },
];

const BADGE_VARIANTS = [
  { key: "default", label: "Default" },
  { key: "inverse", label: "Inverse" },
  { key: "light", label: "Light" },
  { key: "success", label: "Success" },
  { key: "warning", label: "Warning" },
  { key: "error", label: "Error" },
  { key: "new", label: "New" },
  { key: "informational", label: "Informational" },
  { key: "error-light", label: "Error (Light)" },
  { key: "orange", label: "Orange" },
];

const STACK_ITEMS = [
  { id: "site-a", label: "Site A", icon: "record" },
  { id: "owner", label: "Alex Rivera", icon: "person" },
  { id: "status", label: "In Review", icon: null },
];

function selectionPillStateClass(demoState) {
  return demoState !== "default" ? `stack-selection-pill--${demoState}` : "";
}

function PersonIconGlyph() {
  return (
    <svg className="stack-selection-pill__icon-glyph--person" viewBox="0 0 10 10" aria-hidden="true">
      <path
        fill="#FFFFFF"
        d="M5 1.1a1.9 1.9 0 1 1 0 3.8 1.9 1.9 0 0 1 0-3.8Zm-3.2 5.9c0-.9 1.4-1.6 3.2-1.6s3.2.7 3.2 1.6V8.4H1.8V7Z"
      />
    </svg>
  );
}

function SelectionLeadingIcon({ type }) {
  if (!type) return null;

  if (type === "record") {
    return (
      <img className="stack-selection-pill__icon stack-selection-pill__icon--record" src="/stack-icons/account.svg" alt="" />
    );
  }

  return (
    <span className="stack-selection-pill__icon stack-selection-pill__icon--person" aria-hidden="true">
      <PersonIconGlyph />
    </span>
  );
}

function SelectionPill({
  label,
  icon,
  demoState = "default",
  onRemove,
  removeRef,
  previewState = false,
}) {
  const stateClass = previewState ? selectionPillStateClass(demoState) : "";
  const focusProps =
    previewState && demoState === "focus"
      ? { tabIndex: 0, ref: removeRef, "data-demo-state": "focus" }
      : {};

  return (
    <span className={["stack-selection-pill", stateClass].filter(Boolean).join(" ")}>
      <SelectionLeadingIcon type={icon} />
      <span className="stack-selection-pill__label">{label}</span>
      <button
        type="button"
        className={[
          "stack-selection-pill__remove",
          previewState && demoState === "hover" ? "stack-selection-pill__remove--hover" : "",
          previewState && demoState === "focus" ? "stack-selection-pill__remove--focus" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        aria-label={`Remove ${label}`}
        onClick={onRemove}
        {...focusProps}
      >
        <ColorIcon name="close" className="stack-selection-pill__remove-icon" />
      </button>
    </span>
  );
}

function BadgeBoltIcon() {
  return (
    <svg className="stack-badge-pill__icon" aria-hidden="true" viewBox="0 0 14 14">
      <path
        fill="currentColor"
        d="M8.3 1.4 4 7.4c-.1.2 0 .5.2.5h2.6L5.5 12.4c-.1.3.2.6.5.4l4.7-6c.1-.2 0-.5-.2-.5H7.8l1.3-3.7c.1-.4-.2-.6-.5-.4Z"
      />
    </svg>
  );
}

function BadgePill({ variant, iconPosition = "none", label = "Label" }) {
  return (
    <span className={["stack-badge-pill", `stack-badge-pill--${variant}`].join(" ")}>
      {iconPosition === "left" ? <BadgeBoltIcon /> : null}
      <span className="stack-badge-pill__label">{label}</span>
      {iconPosition === "right" ? <BadgeBoltIcon /> : null}
    </span>
  );
}

function SelectionPillShowcase({ demoState }) {
  const focusRef = useRef(null);
  const [stackItems, setStackItems] = useState(STACK_ITEMS);

  useEffect(() => {
    if (demoState === "focus") {
      focusRef.current?.focus();
    }
  }, [demoState]);

  return (
    <div className="button-showcase-block pill-selection-showcase" id="pill-selection-showcase">
      <div className="button-showcase-copy-column">
        <h4 className="button-showcase-title">Input Selection Pill</h4>
        <p className="button-showcase-copy">
          Removable selected values with base, object, and avatar treatments.
        </p>
      </div>
      <div className="button-showcase-control-column">
        <div className="pill-specimen-column">
          <div className="pill-specimen-panel">
            <div className="pill-specimen-head">
              <span className="button-alignment-title">Leading icon types</span>
              <span className="button-alignment-meta">Base, object, and avatar variants</span>
            </div>
            <div className="pill-selection-grid">
              {SELECTION_TYPES.map((type, index) => (
                <div className="pill-specimen-cell" key={type.key}>
                  <SelectionPill
                    label={type.label === "Base" ? "Site A" : type.label === "Object" ? "Tower permit" : "Alex Rivera"}
                    icon={type.icon}
                    demoState={demoState}
                    previewState
                    removeRef={index === 0 ? focusRef : undefined}
                  />
                  <span className="button-variant-label">{type.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pill-stack-demo">
            <div className="pill-specimen-head">
              <span className="button-alignment-title">Selected filter stack</span>
              <span className="button-alignment-meta">4px wrapped gap, each pill removes itself</span>
            </div>
            <div className="stack-selection-pill-group" role="list" aria-label="Selected filters">
              {stackItems.map((item) => (
                <span role="listitem" key={item.id}>
                  <SelectionPill
                    label={item.label}
                    icon={item.icon}
                    onRemove={() => setStackItems((current) => current.filter((entry) => entry.id !== item.id))}
                  />
                </span>
              ))}
            </div>
            {stackItems.length === 0 ? (
              <button type="button" className="stack-button stack-button-base" onClick={() => setStackItems(STACK_ITEMS)}>
                Reset stack
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

function BadgePillShowcase() {
  return (
    <div className="button-showcase-block pill-badge-showcase" id="pill-badge-showcase">
      <div className="button-showcase-copy-column">
        <h4 className="button-showcase-title">Badge Pill</h4>
        <p className="button-showcase-copy">
          Read-only semantic labels grouped by meaning, with icons shown separately.
        </p>
      </div>
      <div className="button-showcase-control-column">
        <div className="pill-specimen-column">
          <div className="pill-specimen-panel">
            <div className="pill-specimen-head">
              <span className="button-alignment-title">Semantic variants</span>
              <span className="button-alignment-meta">Status, category, and metadata badges</span>
            </div>
            <div className="pill-badge-variant-grid">
              {BADGE_VARIANTS.map((variant) => (
                <div className="pill-specimen-cell" key={variant.key}>
                  <BadgePill variant={variant.key} label={variant.label} />
                </div>
              ))}
            </div>
          </div>

          <div className="pill-icon-position-demo">
            <div className="pill-specimen-head">
              <span className="button-alignment-title">Default badge icons</span>
              <span className="button-alignment-meta">Icon left and right, same compact badge height</span>
            </div>
            <div className="pill-icon-position-grid">
              <div className="pill-specimen-cell">
                <BadgePill variant="default" iconPosition="left" label="Default" />
                <span className="button-variant-label">Left icon</span>
              </div>
              <div className="pill-specimen-cell">
                <BadgePill variant="default" iconPosition="right" label="Default" />
                <span className="button-variant-label">Right icon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PillGallery() {
  const [demoState, setDemoState] = useState("default");

  return (
    <div className="component-card component-card-wide" id="pills">
      <SectionHeader
        title="Pills"
        meta="26px selection pills (4px radius) and 20–22px badge pills (Figma 1012:12089, 1527:801)"
      />
      <div className="button-showcase">
        <DemoStateToolbar
          states={PILL_DEMO_STATES}
          demoState={demoState}
          onChange={setDemoState}
          description="Applies to input selection pills. Default uses native hover on the remove control."
        />
        <SelectionPillShowcase demoState={demoState} />
        <BadgePillShowcase />
      </div>
    </div>
  );
}
