import React, { useState } from "react";
import SectionHeader from "./SectionHeader.jsx";
const demoSteps = [
  { id: "context", step: "0", label: "Site Context", current: true },
  { id: "profile", step: "1", label: "Site Profile" },
  { id: "recommendations", step: "2", label: "Recommendations" },
  { id: "compare", step: "3", label: "Compare" },
];

export default function PrototypeNavRailGallery() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="component-card prototype-rail-gallery-card" id="prototype-nav-rail">
      <SectionHeader
        title="Prototype navigation rail"
        meta="Collapsible left review chrome for multi-screen STACK prototypes — not product UI."
      />

      <div
        className="prototype-rail-gallery-frame"
        data-rail-collapsed={collapsed ? "true" : undefined}
      >
        <aside
          className="prototype-rail prototype-rail-specimen"
          data-collapsed={collapsed ? "true" : undefined}
          aria-label="Prototype navigation preview"
          aria-expanded={!collapsed}
        >
          <div className="prototype-rail-top">
            <div className="prototype-rail-brand">
              <img
                src="/stack-icons/sitetracker-lettermark-white.svg"
                alt=""
                className="prototype-rail-brand-full"
              />
              <img
                src="/stack-icons/sitetracker-mark.svg"
                alt=""
                className="prototype-rail-brand-compact"
              />
            </div>
            <button
              type="button"
              className="prototype-rail-toggle"
              aria-expanded={!collapsed}
              aria-controls="prototype-rail-gallery-preview"
              aria-label={
                collapsed ? "Expand prototype navigation" : "Collapse prototype navigation"
              }
              onClick={() => setCollapsed((current) => !current)}
            >
              <img
                src="/stack-icons/chevrondown.svg"
                alt=""
                className="prototype-rail-toggle-icon"
                aria-hidden="true"
              />
            </button>
          </div>

          <div className="prototype-rail-intro">
            <p className="prototype-rail-eyebrow">Prototype</p>
            <p className="prototype-rail-title">Demo flow</p>
          </div>

          <div className="prototype-rail-section">
            <h2>Wizard</h2>
            {demoSteps.map((step) => (
              <button
                key={step.id}
                type="button"
                className="prototype-rail-link"
                title={collapsed ? step.label : undefined}
                aria-current={step.current ? "page" : undefined}
              >
                <span className="prototype-rail-link-step">{step.step}</span>
                <span className="prototype-rail-link-label">{step.label}</span>
              </button>
            ))}
          </div>
        </aside>

        <div className="prototype-rail-gallery-main" id="prototype-rail-gallery-preview">
          <div className="prototype-rail-gallery-shell">STACK shell + page workspace</div>
        </div>
      </div>
    </div>
  );
}
