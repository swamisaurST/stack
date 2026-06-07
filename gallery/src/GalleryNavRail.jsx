import React, { useEffect, useState } from "react";
import { galleryPlatforms, platformForHash } from "./gallerySections.js";
import { railIconFor } from "./galleryIcons.js";
import RailIcon from "./RailIcon.jsx";

const STORAGE_KEY = "stack-gallery-rail-collapsed";
const PLATFORM_STORAGE_KEY = "stack-gallery-platform";

function readCollapsedPreference() {
  try {
    return localStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

function writeCollapsedPreference(collapsed) {
  try {
    localStorage.setItem(STORAGE_KEY, collapsed ? "true" : "false");
  } catch {
    // ignore storage failures in gallery preview
  }
}

function readPlatformPreference() {
  try {
    const stored = localStorage.getItem(PLATFORM_STORAGE_KEY);
    if (stored === "web" || stored === "mobile") return stored;
  } catch {
    // ignore
  }
  return "web";
}

function currentHashId() {
  const hash = window.location.hash.replace(/^#/, "");
  return hash || "top";
}

export default function GalleryNavRail({ activePlatformId, onPlatformChange }) {
  const [collapsed, setCollapsed] = useState(readCollapsedPreference);
  const [activeId, setActiveId] = useState(currentHashId);

  const activePlatform =
    galleryPlatforms.find((platform) => platform.id === activePlatformId) ?? galleryPlatforms[0];

  useEffect(() => {
    const onHashChange = () => {
      const hash = currentHashId();
      setActiveId(hash);
      const platformFromHash = platformForHash(window.location.hash);
      if (platformFromHash !== activePlatformId) {
        onPlatformChange(platformFromHash);
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [activePlatformId, onPlatformChange]);

  useEffect(() => {
    const sectionIds = activePlatform.sections.flatMap((group) => [
      group.id,
      ...group.items.map((item) => item.id),
    ]);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.15, 0.4] },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [activePlatform]);

  const toggleCollapsed = () => {
    setCollapsed((current) => {
      const next = !current;
      writeCollapsedPreference(next);
      return next;
    });
  };

  const selectPlatform = (platformId) => {
    onPlatformChange(platformId);
    try {
      localStorage.setItem(PLATFORM_STORAGE_KEY, platformId);
    } catch {
      // ignore
    }
  };

  const isActive = (id) => activeId === id;

  return (
    <aside
      className="prototype-rail gallery-nav-rail"
      data-collapsed={collapsed ? "true" : undefined}
      aria-label="Gallery section navigation"
      aria-expanded={!collapsed}
    >
      <div className="prototype-rail-top">
        <div className="prototype-rail-brand">
          <img
            src="/stack-icons/sitetracker-lettermark-white.svg"
            alt=""
            className="prototype-rail-brand-full"
          />
          <img src="/stack-icons/sitetracker-mark.svg" alt="" className="prototype-rail-brand-compact" />
        </div>
        <button
          type="button"
          className="prototype-rail-toggle"
          aria-expanded={!collapsed}
          aria-controls="gallery-workspace"
          aria-label={collapsed ? "Expand gallery navigation" : "Collapse gallery navigation"}
          onClick={toggleCollapsed}
        >
          <RailIcon name="chevrondown" className="prototype-rail-toggle-icon prototype-rail-link-icon" />
        </button>
      </div>

      <div className="prototype-rail-intro">
        <p className="prototype-rail-eyebrow">STACK visual verification</p>
        <p className="prototype-rail-title">Component Gallery</p>
      </div>

      <div className="gallery-platform-tabs" role="tablist" aria-label="Platform">
        {galleryPlatforms.map((platform) => (
          <button
            key={platform.id}
            type="button"
            role="tab"
            className="gallery-platform-tab"
            aria-selected={activePlatformId === platform.id}
            title={collapsed ? platform.label : undefined}
            onClick={() => selectPlatform(platform.id)}
          >
            {platform.label}
          </button>
        ))}
      </div>

      {activePlatform.sections.map((group) => (
        <div className="prototype-rail-section" key={group.id}>
          <div className="prototype-rail-section-head">
            <h2>{group.title}</h2>
            {!collapsed && group.description ? (
              <p className="prototype-rail-section-desc">{group.description}</p>
            ) : null}
          </div>
          {group.items.map((item) => (
            <a
              key={item.id}
              className="prototype-rail-link"
              href={`#${item.id}`}
              title={collapsed ? `${item.label} — ${group.title}` : undefined}
              aria-current={isActive(item.id) ? "page" : undefined}
            >
              <span className="prototype-rail-link-step prototype-rail-link-step-icon" aria-hidden="true">
                <RailIcon name={railIconFor(item.id)} />
              </span>
              <span className="prototype-rail-link-label">{item.label}</span>
            </a>
          ))}
        </div>
      ))}

      <div className="prototype-rail-footer">
        Markdown rules in <code>web-references/</code>. Gallery index:{" "}
        <code>STACK-WEB-GALLERY-REFERENCE.md</code>
      </div>
    </aside>
  );
}

export { readPlatformPreference };
