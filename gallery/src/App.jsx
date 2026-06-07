import React, { useMemo, useState } from "react";
import ButtonGallery from "./ButtonGallery.jsx";
import PathStagesGallery from "./PathStagesGallery.jsx";
import PillGallery from "./PillGallery.jsx";
import RightHandPanelGallery from "./RightHandPanelGallery.jsx";
import PrototypeNavRailGallery from "./PrototypeNavRailGallery.jsx";
import GalleryNavRail from "./GalleryNavRail.jsx";
import SectionHeader from "./SectionHeader.jsx";
import Icon from "./Icon.jsx";
import { iconData } from "./iconData.js";

import { platformForHash } from "./gallerySections.js";

const PLATFORM_STORAGE_KEY = "stack-gallery-platform";

function readPlatformPreference() {
  try {
    const stored = localStorage.getItem(PLATFORM_STORAGE_KEY);
    if (stored === "web" || stored === "mobile") return stored;
  } catch {
    // ignore
  }
  return "web";
}

const mobileSwatches = [
  ["Top Bar", "#1D2D34"],
  ["Surface", "#FFFFFF"],
  ["Background", "#F7F8F7"],
  ["Brand", "#00847C"],
  ["Text Weak", "#494D4F"],
  ["Stroke", "#DDDBDA"],
];

const tableRows = [
  ["T-1042", "Field crew checklist", "Open", "Today"],
  ["T-1043", "Permit photo review", "In Review", "Tomorrow"],
  ["T-1044", "Closeout package", "Blocked", "Jun 10"],
  ["T-1045", "As-built verification", "Done", "Jun 12"],
  ["T-1046", "Site access note", "Open", "Jun 14"],
];

const listRows = [
  ["Web shell header locked", "Header shell", "Canonical"],
  ["Confirm card icon container", "Section headers", "Pending"],
  ["Check row icon density", "Lists", "Ready"],
];

function CatalogIcon({ icon }) {
  return (
    <img
      className="catalog-icon-img"
      src={`/stack-icons/catalog/${encodeURI(icon.assetPath)}`}
      alt=""
      loading="lazy"
      aria-hidden="true"
    />
  );
}

function StatusTag({ children, tone = "neutral" }) {
  const variantByTone = {
    neutral: "default",
    warning: "warning",
    success: "success",
  };
  const variant = variantByTone[tone] || "default";

  return (
    <span className={`stack-badge-pill stack-badge-pill--${variant}`}>
      <span className="stack-badge-pill__label">{children}</span>
    </span>
  );
}

function CardHeaderGallery() {
  return (
    <div className="component-card" id="card-header">
      <SectionHeader
        title="Card / Section Header"
        meta="Title group with optional action"
        action={<button className="stack-button stack-button-neutral">Action</button>}
      />
      <div className="card-body-copy">
        <p>This header pattern is used for card-like, table-like, list-like, and content-category sections.</p>
      </div>
      <div className="card-footer-link">View all</div>
    </div>
  );
}

function TableGallery() {
  return (
    <div className="table-shell component-card-wide" id="table-sample">
      <div className="table-header">
        <div className="table-title-group">
          <span className="table-header-icon" aria-hidden="true">
            <img className="table-header-icon-img" src="/stack-icons/account.svg" alt="" />
          </span>
          <h3 className="table-title">
            Sample Table <span className="table-title-count">({tableRows.length})</span>
          </h3>
        </div>
        <button className="stack-button stack-button-neutral" type="button">
          Table Action
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th className="select-col" scope="col">
              <span className="checkbox-shell" aria-hidden="true" />
            </th>
            <th scope="col">Record ID</th>
            <th scope="col">Name</th>
            <th scope="col">Status</th>
            <th scope="col">Due</th>
            <th className="action-col" scope="col">
              <span className="assistive-text">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {tableRows.map((row) => (
            <tr key={row[0]}>
              <td className="select-col">
                <span className="checkbox-shell" aria-hidden="true" />
              </td>
              {row.map((cell) => (
                <td key={cell}>{cell}</td>
              ))}
              <td className="action-col">
                <button className="row-action" type="button" aria-label={`Edit ${row[0]}`}>
                  <Icon name="edit" className="row-action-icon" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="table-footer">
        <span>Rows per page: 5</span>
        <span>Viewing 1-5 of 150</span>
        <span className="pager-controls">Previous · Next</span>
      </div>
    </div>
  );
}

function ListRowGallery() {
  return (
    <div className="component-card" id="list-rows-sample">
      <SectionHeader
        title="Compact List Rows"
        meta="34px row reference, 16px row action icons"
      />
      <div className="list-row-stack">
        {listRows.map((row) => (
          <div className="list-row" key={row[0]}>
            <span className="checkbox-shell" />
            <div className="list-row-copy">
              <strong>{row[0]}</strong>
              <span>{row[1]}</span>
            </div>
            <StatusTag tone={row[2] === "Ready" ? "success" : "neutral"}>{row[2]}</StatusTag>
            <button className="row-action" type="button" aria-label={`Edit ${row[0]}`}>
              <Icon name="edit" className="row-action-icon" />
            </button>
            <button className="row-action" type="button" aria-label={`Delete ${row[0]}`}>
              <Icon name="delete" className="row-action-icon" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function LayoutGallery() {
  return (
    <div className="layout-gallery" id="layout-models">
      <div className="layout-card full-width">
        <SectionHeader
          title="Full-Width Workspace"
          meta="Fills available space below shell"
        />
        <div className="layout-block">Primary operational workspace</div>
      </div>
      <div className="layout-card split-50">
        <SectionHeader title="50/50 Split" meta="Equal task importance" />
        <div className="layout-columns equal">
          <div>Panel A</div>
          <div>Panel B</div>
        </div>
      </div>
      <div className="layout-card split-75">
        <SectionHeader
          title="75/25 Split"
          meta="Primary workflow plus supporting context"
        />
        <div className="layout-columns ratio">
          <div>Main work area</div>
          <div>Context panel</div>
        </div>
      </div>
      <div className="layout-card master-detail">
        <SectionHeader
          title="Table/List + Side Panel"
          meta="Master-detail verification"
        />
        <div className="layout-columns ratio">
          <div>List or table selection</div>
          <div>Details and actions</div>
        </div>
      </div>
    </div>
  );
}

function ColorGallery() {
  const swatches = [
    ["ST Teal", "#00847C"],
    ["Selected Teal", "#EBF5F4"],
    ["Text", "#17191C"],
    ["Weak Text", "#3E3E3C"],
    ["Text Placeholder", "#706E6B"],
    ["Icon Default", "#706E6B"],
    ["Border", "#DDDBDA"],
    ["Section", "#F3F2F2"],
    ["Subtle", "#FAFAF9"],
  ];

  return (
    <div className="component-card" id="colors">
      <SectionHeader
        title="Color Tokens"
        meta="STACK-WEB-COLORS — web primitives by purpose"
      />
      <div className="swatch-grid">
        {swatches.map(([name, value]) => (
          <div className="swatch" key={name}>
            <span style={{ background: value }} />
            <strong>{name}</strong>
            <code>{value}</code>
          </div>
        ))}
      </div>
    </div>
  );
}

function TypographyGallery() {
  return (
    <div className="component-card" id="typography">
      <SectionHeader
        title="Typography Tokens"
        meta="STACK-WEB-TYPOGRAPHY — SF Pro web scale"
      />
      <div className="type-samples">
        <h1>Headline 1 / 24px</h1>
        <h2>Headline 2 / 20px</h2>
        <h3>Headline 4 / 16px</h3>
        <p>Body 3 / 13px default dense product copy.</p>
        <small>Body 4 / 12px dense table and metadata text.</small>
      </div>
    </div>
  );
}

function IconCatalogGallery() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(() => ["All", ...Array.from(new Set(iconData.map((icon) => icon.category))).sort()], []);
  const filteredIcons = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return iconData.filter((icon) => {
      const matchesCategory = category === "All" || icon.category === category;
      const matchesQuery =
        !normalizedQuery ||
        icon.name.toLowerCase().includes(normalizedQuery) ||
        icon.iconName.toLowerCase().includes(normalizedQuery) ||
        icon.nodeId.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <div className="component-card component-card-wide" id="icon-catalog">
      <SectionHeader
        title="Complete Icon Catalog"
        meta={`${iconData.length} exported SVGs from the STACK icon database`}
      />
      <div className="icon-catalog-controls">
        <label>
          Search icons
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search name, icon, or node id" />
        </label>
        <label>
          Category
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            {categories.map((categoryOption) => (
              <option key={categoryOption} value={categoryOption}>
                {categoryOption}
              </option>
            ))}
          </select>
        </label>
        <StatusTag>{filteredIcons.length} shown</StatusTag>
      </div>
      <div className="icon-catalog-grid">
        {filteredIcons.map((icon) => (
          <article className="icon-catalog-card" key={`${icon.nodeId}-${icon.assetPath}`}>
            <div className="icon-catalog-art">
              <CatalogIcon icon={icon} />
            </div>
            <div className="icon-catalog-copy">
              <strong>{icon.iconName}</strong>
              <span>{icon.category}</span>
              <code>{icon.nodeId}</code>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function MobileStatusBar() {
  return (
    <div className="mobile-status-bar" aria-hidden="true">
      <span>9:41</span>
      <div className="mobile-status-icons">
        <span className="signal-icon" />
        <span className="wifi-icon" />
        <span className="battery-icon" />
      </div>
    </div>
  );
}

function MobileMainHeader() {
  return (
    <div className="mobile-frame">
      <div className="mobile-header mobile-header-main">
        <MobileStatusBar />
        <div className="mobile-main-row">
          <img className="mobile-logo" src="/stack-icons/sitetracker-lettermark-white.svg" alt="Sitetracker" />
          <button className="mobile-icon-button mobile-notification" type="button" aria-label="Notifications">
            <Icon name="notification" className="mobile-header-icon" />
          </button>
          <button className="mobile-avatar" type="button" aria-label="User profile">
            SS
          </button>
        </div>
        <div className="mobile-org-name">Edge Communications</div>
      </div>
      <div className="mobile-content">
        <p className="mobile-eyebrow">Top-level mobile context</p>
        <h3>Header / Main</h3>
        <p>Dark fixed header with logo, organization context, notification, and avatar.</p>
      </div>
    </div>
  );
}

function MobileSecondaryHeader() {
  return (
    <div className="mobile-frame">
      <div className="mobile-header mobile-header-secondary">
        <MobileStatusBar />
        <div className="mobile-secondary-row">
          <button className="mobile-back-button" type="button" aria-label="Back">
            ‹
          </button>
          <div className="mobile-screen-title">Work Details</div>
          <button className="mobile-icon-button" type="button" aria-label="More actions">
            <Icon name="edit" className="mobile-header-icon" />
          </button>
        </div>
      </div>
      <div className="mobile-content">
        <p className="mobile-eyebrow">Nested mobile workflow</p>
        <h3>Header / Secondary Dark</h3>
        <p>Back button, centered title, and optional right-side utility action.</p>
      </div>
    </div>
  );
}

function MobileColorTokens() {
  return (
    <div className="component-card" id="mobile-colors">
      <SectionHeader
        title="Colors"
        meta="STACK-MOBILE-DESIGN — mobile color roles"
      />
      <div className="mobile-swatch-grid mobile-swatch-grid-standalone">
        {mobileSwatches.map(([name, value]) => (
          <div className="swatch" key={name}>
            <span style={{ background: value }} />
            <strong>{name}</strong>
            <code>{value}</code>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileTypographyTokens() {
  return (
    <div className="component-card" id="mobile-typography">
      <SectionHeader
        title="Typography"
        meta="Barlow scale — Title 1+ through body"
      />
      <div className="mobile-type-samples mobile-type-samples-standalone">
        <h1>Title 1+ / 32px</h1>
        <h2>Title 2 / 20px</h2>
        <h3>Headline / 16px</h3>
        <p>Body / 14px mobile product text.</p>
        <StatusTag tone="success">Shared pill colors — see Web · Controls · Pills</StatusTag>
      </div>
    </div>
  );
}

export default function App() {
  const [activePlatformId, setActivePlatformId] = useState(() => {
    const fromHash = platformForHash(window.location.hash);
    return fromHash || readPlatformPreference();
  });

  const handlePlatformChange = (platformId) => {
    setActivePlatformId(platformId);
    try {
      localStorage.setItem(PLATFORM_STORAGE_KEY, platformId);
    } catch {
      // ignore
    }
  };

  const platformSectionProps = (platformId) => ({
    className: "gallery-platform-section",
    hidden: activePlatformId !== platformId ? true : undefined,
    "data-platform": platformId,
  });

  return (
    <div className="gallery-app" id="top">
      <div className="prototype-app gallery-app-body">
        <GalleryNavRail activePlatformId={activePlatformId} onPlatformChange={handlePlatformChange} />

        <main className="gallery-workspace prototype-main" id="gallery-workspace">
          <section className="gallery-workspace-intro">
            <p className="eyebrow">Canonical browser-rendered reference</p>
            <h1>STACK component specimens</h1>
            <p>
              Use the <strong>{activePlatformId === "mobile" ? "Mobile" : "Web"}</strong> tab and navigation rail
              to jump to a specimen. Markdown references in <code>references/web/</code> and{" "}
              <code>STACK-MOBILE-DESIGN.md</code> own the rules; this gallery owns rendered proof.
            </p>
          </section>

          <section {...platformSectionProps("web")} id="web-primitives">
            <header className="gallery-platform-head">
              <h2>Foundations</h2>
              <p>Color, type, and icon vocabulary applied across web surfaces.</p>
            </header>
            <div className="gallery-section component-grid">
              <ColorGallery />
              <TypographyGallery />
              <IconCatalogGallery />
            </div>
          </section>

          <section {...platformSectionProps("web")} id="web-controls">
            <header className="gallery-platform-head">
              <h2>Actions &amp; inputs</h2>
              <p>Buttons, pills, and path stage steppers.</p>
            </header>
            <div className="gallery-section component-grid">
              <div id="components" className="component-card-wide">
                <ButtonGallery />
              </div>
              <PillGallery />
              <PathStagesGallery />
            </div>
          </section>

          <section {...platformSectionProps("web")} id="web-content">
            <header className="gallery-platform-head">
              <h2>Data surfaces</h2>
              <p>Section headers, tables, and compact list rows.</p>
            </header>
            <div className="gallery-section component-grid">
              <CardHeaderGallery />
              <TableGallery />
              <ListRowGallery />
            </div>
          </section>

          <section {...platformSectionProps("web")} id="web-layout">
            <header className="gallery-platform-head">
              <h2>Page layout</h2>
              <p>Workspace splits and record context panel.</p>
            </header>
            <div className="gallery-section">
              <div id="layouts">
                <LayoutGallery />
              </div>
              <RightHandPanelGallery />
            </div>
          </section>

          <section {...platformSectionProps("web")} id="web-tooling">
            <header className="gallery-platform-head">
              <h2>Prototype harness</h2>
              <p>Left review navigation for multi-screen React prototypes — not product UI.</p>
            </header>
            <div className="gallery-section">
              <PrototypeNavRailGallery />
            </div>
          </section>

          <section {...platformSectionProps("mobile")} id="mobile-shell">
            <header className="gallery-platform-head">
              <h2>Screen headers</h2>
              <p>Fixed dark bars for top-level app context and nested workflow screens.</p>
            </header>
            <div className="gallery-section mobile-preview-grid">
              <div id="mobile-main-header">
                <MobileMainHeader />
              </div>
              <div id="mobile-secondary-header">
                <MobileSecondaryHeader />
              </div>
            </div>
          </section>

          <section {...platformSectionProps("mobile")} id="mobile-primitives">
            <header className="gallery-platform-head">
              <h2>Design tokens</h2>
              <p>Color and typography scale — Hero UI for components.</p>
            </header>
            <div className="gallery-section component-grid">
              <MobileColorTokens />
              <MobileTypographyTokens />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
