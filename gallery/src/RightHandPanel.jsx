import React, { useState } from "react";
import { assetUrl } from "./assetUrl.js";

function RhpIcon({ name, className = "rhp-icon" }) {
  return <img className={className} src={assetUrl(`stack-icons/${name}.svg`)} alt="" aria-hidden="true" />;
}

export function RhpFieldCell({
  label,
  value,
  href,
  editable = false,
  empty = false,
  hasHelp = false,
}) {
  return (
    <div className="rhp-field">
      <div className="rhp-field-label">
        <span>{label}</span>
        {hasHelp ? (
          <button className="rhp-icon-button" type="button" aria-label={`Help for ${label}`}>
            <RhpIcon name="info-rhp" className="rhp-info-icon" />
          </button>
        ) : null}
      </div>
      <div className="rhp-field-value-row">
        {href ? (
          <a className="rhp-link" href={href}>
            {value}
          </a>
        ) : (
          <span className={`rhp-value ${empty ? "is-empty" : ""}`}>{value}</span>
        )}
      </div>
      {editable ? (
        <button className="rhp-edit-button" type="button" aria-label={`Edit ${label}`}>
          <RhpIcon name="edit-rhp" className="rhp-edit-icon" />
        </button>
      ) : null}
    </div>
  );
}

export function RhpAuditFieldCell({ label, user, timestamp, href = "#" }) {
  return (
    <div className="rhp-field">
      <div className="rhp-field-label">
        <span>{label}</span>
      </div>
      <div className="rhp-field-value-row">
        <span className="rhp-audit-value">
          <a className="rhp-link" href={href}>
            {user}
          </a>
          <span className="rhp-audit-time">{timestamp}</span>
        </span>
      </div>
    </div>
  );
}

export function RhpFieldRow({ children, fullWidth = false }) {
  return <div className={`rhp-field-row ${fullWidth ? "rhp-field-row-full" : ""}`}>{children}</div>;
}

export function RhpPanelSection({ title, defaultOpen = true, children }) {
  const [open, setOpen] = useState(defaultOpen);
  const sectionId = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="rhp-section-group">
      <button
        className="rhp-section-header"
        type="button"
        aria-expanded={open}
        aria-controls={`${sectionId}-panel`}
        onClick={() => setOpen((current) => !current)}
      >
        <RhpIcon name={open ? "chevrondown" : "chevronright"} className="rhp-section-chevron" />
        <span>{title}</span>
      </button>
      {open ? (
        <div className="rhp-section-body" id={`${sectionId}-panel`}>
          {children}
        </div>
      ) : null}
    </div>
  );
}

function renderField(field) {
  if (field.type === "audit") {
    return (
      <RhpAuditFieldCell
        key={field.label}
        label={field.label}
        user={field.user}
        timestamp={field.timestamp}
        href={field.href}
      />
    );
  }

  return (
    <RhpFieldCell
      key={field.label}
      label={field.label}
      value={field.value ?? ""}
      href={field.href}
      editable={Boolean(field.editable)}
      empty={Boolean(field.empty)}
      hasHelp={Boolean(field.hasHelp)}
    />
  );
}

function renderSection(section) {
  const rows = [];
  let currentRow = [];

  section.fields.forEach((field, index) => {
    const cell = renderField(field);
    if (field.fullWidth) {
      if (currentRow.length) {
        rows.push(
          <RhpFieldRow key={`${section.title}-row-${rows.length}`}>{currentRow}</RhpFieldRow>,
        );
        currentRow = [];
      }
      rows.push(
        <RhpFieldRow key={`${section.title}-full-${index}`} fullWidth>
          {cell}
        </RhpFieldRow>,
      );
      return;
    }

    currentRow.push(cell);
    if (currentRow.length === 2) {
      rows.push(<RhpFieldRow key={`${section.title}-row-${rows.length}`}>{currentRow}</RhpFieldRow>);
      currentRow = [];
    }
  });

  if (currentRow.length) {
    rows.push(<RhpFieldRow key={`${section.title}-row-${rows.length}`}>{currentRow}</RhpFieldRow>);
  }

  return (
    <RhpPanelSection key={section.title} title={section.title} defaultOpen={section.defaultOpen ?? true}>
      <div className="rhp-field-rows">{rows}</div>
    </RhpPanelSection>
  );
}

/** Read-only gallery specimen — agents can reuse this shape for record panels. */
export const RHP_SPECIMEN = {
  eyebrow: "Object",
  title: "Record title",
  objectIcon: "page",
  tabs: ["Details", "Related Lists"],
  defaultTab: "Details",
  tabContent: {
    Details: {
      sections: [
        {
          title: "General",
          fields: [
            { type: "text", label: "Field name", value: "Field value" },
            { type: "text", label: "Status", value: "Draft" },
            {
              type: "link",
              label: "Lookup field",
              value: "Related record",
              href: "#right-hand-panel",
            },
            { type: "text", label: "Type", value: "Category value", hasHelp: true },
            { type: "text", label: "Owner", value: "User name", href: "#right-hand-panel" },
            { type: "text", label: "Notes", value: "", empty: true, editable: true },
          ],
        },
        {
          title: "System",
          fields: [
            {
              type: "audit",
              label: "Last Modified By",
              user: "Saurabh Swami",
              timestamp: "12/04/23 12:35 PM",
            },
            {
              type: "audit",
              label: "Created By",
              user: "Saurabh Swami",
              timestamp: "12/04/23 12:35 PM",
            },
          ],
        },
      ],
    },
    "Related Lists": {
      emptyMessage: "Related list content is object-specific. See STACK-WEB-RIGHT-HAND-PANEL.md.",
    },
  },
};

export default function RightHandPanel({
  eyebrow,
  title,
  objectIcon = "task",
  tabs,
  defaultTab,
  tabContent,
  className = "",
  ariaLabel = title,
}) {
  const [activeTab, setActiveTab] = useState(defaultTab ?? tabs[0]);
  const activeContent = tabContent[activeTab];

  return (
    <aside className={`rhp-panel ${className}`.trim()} aria-label={ariaLabel}>
      <header className="rhp-header">
        <div className="rhp-header-main">
          <RhpIcon name={objectIcon} className="rhp-object-icon" />
          <div className="rhp-header-copy">
            <span className="rhp-eyebrow">{eyebrow}</span>
            <div className="rhp-title-row">
              <h3 className="rhp-title">{title}</h3>
              <button className="rhp-icon-button" type="button" aria-label={`Open ${title} record`}>
                <RhpIcon name="new-window" className="rhp-new-window-icon" />
              </button>
            </div>
          </div>
        </div>
        <button className="rhp-icon-button rhp-close-button" type="button" aria-label="Close panel">
          <RhpIcon name="close" className="rhp-close-icon" />
        </button>
      </header>

      <div className="rhp-tabs-shell">
        <div className="rhp-tabs" role="tablist" aria-label="Record detail tabs">
          {tabs.map((tab) => {
            const selected = tab === activeTab;
            return (
              <button
                key={tab}
                className={`rhp-tab ${selected ? "rhp-tab-active" : ""}`}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      <div className="rhp-tab-panel" role="tabpanel" aria-label={`${activeTab} tab`}>
        {activeContent?.sections ? (
          activeContent.sections.map((section) => renderSection(section))
        ) : (
          <div className="rhp-empty-tab">
            <p>{activeContent?.emptyMessage ?? "No content for this tab."}</p>
          </div>
        )}
      </div>
    </aside>
  );
}
