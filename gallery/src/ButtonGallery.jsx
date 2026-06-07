import React, { useEffect, useRef, useState } from "react";
import DemoStateToolbar, { BUTTON_DEMO_STATES } from "./DemoStateToolbar.jsx";
import SectionHeader from "./SectionHeader.jsx";
import { assetUrl } from "./assetUrl.js";

function Icon({ name, className = "stack-icon", alt = "" }) {
  return <img className={className} src={assetUrl(`stack-icons/${name}.svg`)} alt={alt} aria-hidden={alt ? undefined : "true"} />;
}

function ColorIcon({ name, className = "" }) {
  return (
    <span
      className={`stack-color-icon ${className}`.trim()}
      style={{ "--stack-color-icon-src": `url("${assetUrl(`stack-icons/${name}.svg`)}")` }}
      aria-hidden="true"
    />
  );
}

function ButtonInlineIcon({ name = "edit", className = "button-inline-icon" }) {
  return <ColorIcon name={name} className={className} />;
}

const BUTTON_TYPES = [
  { key: "brand", className: "stack-button-brand", label: "Brand" },
  { key: "brand-outline", className: "stack-button-brand-outline", label: "Brand Outline" },
  { key: "neutral", className: "stack-button-neutral", label: "Neutral" },
  { key: "base", className: "stack-button-base", label: "Base" },
  { key: "destructive", className: "stack-button-destructive", label: "Destructive" },
  { key: "destructive-outline", className: "stack-button-destructive-outline", label: "Destructive Outline" },
  { key: "success", className: "stack-button-success", label: "Success" },
  { key: "success-outline", className: "stack-button-success-outline", label: "Success Outline" },
];

const DEMO_STATES = BUTTON_DEMO_STATES;

const ICON_BUTTON_SIZES = [
  { key: "large", className: "stack-icon-button-large", label: "Large" },
  { key: "medium", className: "stack-icon-button-medium", label: "Medium" },
  { key: "small", className: "stack-icon-button-small", label: "Small" },
  { key: "ghost", className: "stack-icon-button-ghost", label: "Ghost" },
];

function demoStateProps(demoState, focusRef) {
  const isDisabled = demoState === "disabled";

  return {
    "data-demo-state": demoState !== "default" ? demoState : undefined,
    disabled: isDisabled,
    tabIndex: demoState === "focus" ? 0 : undefined,
    ref: demoState === "focus" ? focusRef : undefined,
  };
}

function StackButton({ typeClass, demoState = "default", iconPosition = "none", label = "Label", focusRef }) {
  const stateProps = demoStateProps(demoState, focusRef);

  return (
    <button type="button" className={`stack-button ${typeClass}`.trim()} {...stateProps}>
      {iconPosition === "left" ? <ButtonInlineIcon /> : null}
      <span>{label}</span>
      {iconPosition === "right" ? <ButtonInlineIcon /> : null}
    </button>
  );
}

function PrimaryButtonShowcase({ demoState }) {
  const focusRef = useRef(null);

  useEffect(() => {
    if (demoState === "focus") {
      focusRef.current?.focus();
    }
  }, [demoState]);

  return (
    <div className="button-showcase-block">
      <div className="button-showcase-copy-column">
        <h4 className="button-showcase-title">Primary Buttons</h4>
        <p className="button-showcase-copy">
          One control per variant. Use Preview state to simulate hover, focus, and disabled without duplicating rows.
        </p>
      </div>
      <div className="button-showcase-control-column">
        <div className="button-variant-grid">
          {BUTTON_TYPES.map((type) => (
            <div className="button-variant-item" key={type.key}>
              <StackButton
                typeClass={type.className}
                demoState={demoState}
                label={type.label}
                focusRef={type.key === "brand" ? focusRef : undefined}
              />
              <span className="button-variant-label">{type.label}</span>
            </div>
          ))}
          <div className="button-variant-item">
            <StackButton typeClass="stack-button-brand" demoState={demoState} iconPosition="left" label="Icon left" />
            <span className="button-variant-label">Icon left</span>
          </div>
          <div className="button-variant-item">
            <StackButton typeClass="stack-button-brand" demoState={demoState} iconPosition="right" label="Icon right" />
            <span className="button-variant-label">Icon right</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function DropdownMenu({ items, open }) {
  if (!open) {
    return null;
  }

  return (
    <ul className="stack-dropdown-menu" role="menu">
      {items.map((item) => (
        <li key={item} role="none">
          <button type="button" className="stack-dropdown-item" role="menuitem">
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
}

function DropdownButton({ variant = "neutral", label = "Action", items, demoState = "default" }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const focusRef = useRef(null);
  const stateProps = demoStateProps(demoState, focusRef);

  useEffect(() => {
    if (demoState === "focus") {
      focusRef.current?.focus();
    }
  }, [demoState]);

  useEffect(() => {
    function handlePointerDown(event) {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  return (
    <div className={`stack-dropdown ${open ? "stack-dropdown-open" : ""}`} ref={rootRef}>
      <button
        type="button"
        className={`stack-button stack-dropdown-trigger ${
          variant === "brand" ? "stack-button-brand" : "stack-button-neutral"
        }`}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        {...stateProps}
      >
        <span>{label}</span>
        <ColorIcon name="down" className="stack-dropdown-chevron" />
      </button>
      <DropdownMenu items={items} open={open} />
    </div>
  );
}

function DropdownButtonShowcase({ demoState }) {
  return (
    <div className="button-showcase-block">
      <div className="button-showcase-copy-column">
        <h4 className="button-showcase-title">Dropdown Buttons</h4>
        <p className="button-showcase-copy">Click to open the menu. Preview state applies to the trigger.</p>
      </div>
      <div className="button-showcase-control-column">
        <div className="button-variant-grid button-variant-grid-compact">
          <div className="button-variant-item">
            <DropdownButton variant="neutral" items={["Menu Action", "Menu Action"]} demoState={demoState} />
            <span className="button-variant-label">Neutral</span>
          </div>
          <div className="button-variant-item">
            <DropdownButton
              variant="brand"
              label="Assign"
              items={["Assign to Existing Job", "Assign to Existing Job"]}
              demoState={demoState}
            />
            <span className="button-variant-label">Brand</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconOnlyButton({ sizeClass, demoState = "default", icon = "down", label, focusRef }) {
  const stateProps = demoStateProps(demoState, focusRef);

  return (
    <button type="button" className={`stack-icon-button ${sizeClass}`} aria-label={label} {...stateProps}>
      <ColorIcon name={icon} className="stack-icon-button-glyph" />
    </button>
  );
}

function IconButtonShowcase({ demoState }) {
  const focusRef = useRef(null);

  useEffect(() => {
    if (demoState === "focus") {
      focusRef.current?.focus();
    }
  }, [demoState]);

  return (
    <div className="button-showcase-block">
      <div className="button-showcase-copy-column">
        <h4 className="button-showcase-title">Icon Buttons</h4>
        <p className="button-showcase-copy">One size sample per variant. Use Preview state to inspect non-default states.</p>
      </div>
      <div className="button-showcase-control-column">
        <div className="button-variant-grid button-variant-grid-compact">
          {ICON_BUTTON_SIZES.map((size, index) => (
            <div className="button-variant-item" key={size.key}>
              <IconOnlyButton
                sizeClass={size.className}
                demoState={demoState}
                label={`${size.label} chevron`}
                focusRef={index === 0 ? focusRef : undefined}
              />
              <span className="button-variant-label">{size.label}</span>
            </div>
          ))}
          <div className="button-variant-item">
            <button
              type="button"
              className="stack-button stack-button-neutral stack-icon-menu-button"
              aria-label="Settings menu"
              {...demoStateProps(demoState)}
            >
              <Icon name="setup" className="button-inline-icon" />
              <span>Action</span>
              <ColorIcon name="down" className="stack-dropdown-chevron" />
            </button>
            <span className="button-variant-label">Icon + menu</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonGroupShowcase({ demoState }) {
  const [selected, setSelected] = useState("all");
  const focusRef = useRef(null);
  const segments = [
    { key: "all", label: "All" },
    { key: "open", label: "Open" },
    { key: "closed", label: "Closed" },
  ];

  useEffect(() => {
    if (demoState === "focus") {
      focusRef.current?.focus();
    }
  }, [demoState]);

  return (
    <div className="button-showcase-block">
      <div className="button-showcase-copy-column">
        <h4 className="button-showcase-title">Button Groups</h4>
        <p className="button-showcase-copy">
          Use the action lane to align right-side segmented controls. The group stays visually separate from neighboring
          buttons.
        </p>
      </div>
      <div className="button-showcase-control-column button-showcase-control-column-end">
        <div className="button-alignment-frame">
          <div className="button-alignment-actions">
            <div className="button-group button-group-with-icons" role="group" aria-label="Filter records">
              {segments.map((segment, index) => (
                <button
                  key={segment.key}
                  type="button"
                  className={`button-segment ${selected === segment.key ? "button-segment-selected" : ""}`}
                  onClick={() => setSelected(segment.key)}
                  {...demoStateProps(demoState, index === 0 ? focusRef : undefined)}
                >
                  {segment.label}
                </button>
              ))}
              <button
                type="button"
                className={`button-segment button-segment-icon ${
                  selected === "flash" ? "button-segment-icon-selected" : ""
                }`}
                aria-label="Edit filter"
                onClick={() => setSelected("flash")}
                {...demoStateProps(demoState)}
              >
                <ButtonInlineIcon name="edit" className="button-segment-icon-glyph" />
              </button>
            </div>
            <StackButton typeClass="stack-button-neutral" demoState={demoState} label="Apply" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ButtonGallery() {
  const [demoState, setDemoState] = useState("default");

  return (
    <div className="component-card component-card-wide">
      <SectionHeader
        title="Buttons and Button Groups"
        meta="32px height, 4px radius, Body 3 labels"
      />
      <div className="button-showcase">
        <DemoStateToolbar
          demoState={demoState}
          onChange={setDemoState}
          description="Select a state to preview it on the grouped examples below. Default uses native hover and click."
        />
        <PrimaryButtonShowcase demoState={demoState} />
        <DropdownButtonShowcase demoState={demoState} />
        <IconButtonShowcase demoState={demoState} />
        <ButtonGroupShowcase demoState={demoState} />
      </div>
    </div>
  );
}
