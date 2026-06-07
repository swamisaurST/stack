import React from "react";
import Icon from "./Icon.jsx";
import { assetUrl } from "./assetUrl.js";

const defaultTabs = ["Browse"];

export default function StackShell({
  pageTitle = "Component Gallery",
  tabs = defaultTabs,
  activeTabIndex = 0,
  onTabChange,
  embedded = false,
}) {
  const shell = (
    <header className="product-header" aria-label="STACK web shell">
      <div className="product-top-bar">
        <a className="product-wordmark" href="#top" aria-label="Sitetracker home">
          <img src={assetUrl("stack-icons/sitetracker-lettermarks.svg")} alt="" />
        </a>
        <label className="product-search">
          <span className="assistive-text">Global search</span>
          <Icon name="search" className="product-search-icon" />
          <input placeholder="Search..." aria-label="Search" />
        </label>
        <nav className="product-global-actions" aria-label="Global controls">
          <button className="product-favorite" type="button" aria-label="Favorites">
            <span className="product-favorite-segment">
              <Icon name="favorite" className="product-favorite-icon" />
            </span>
            <span className="product-favorite-segment">
              <Icon name="down" className="product-favorite-chevron" />
            </span>
          </button>
          <button className="product-icon-button product-create-button" type="button" aria-label="Create">
            <Icon name="add" className="product-action-icon product-create-icon" />
          </button>
          <button className="product-icon-button" type="button" aria-label="Guidance Center">
            <Icon name="guidance-center" className="product-action-icon" />
          </button>
          <button className="product-icon-button" type="button" aria-label="Help">
            <Icon name="question" className="product-action-icon" />
          </button>
          <button className="product-icon-button" type="button" aria-label="Setup">
            <Icon name="setup" className="product-action-icon" />
          </button>
          <button className="product-icon-button" type="button" aria-label="Notifications">
            <Icon name="notification" className="product-action-icon" />
          </button>
          <button className="product-avatar" type="button" aria-label="User profile">
            <img src={assetUrl("stack-icons/sitetracker-mark.svg")} alt="" />
          </button>
        </nav>
      </div>
      <div className="product-nav-row">
        <button className="product-app-launcher" type="button" aria-label="App launcher">
          <Icon name="apps" className="product-app-launcher-icon" />
        </button>
        <div className="product-app-name">{pageTitle}</div>
        <nav className="product-tabs" aria-label="Page navigation">
          {tabs.map((item, index) => {
            const isActive = index === activeTabIndex;
            const className = `product-tab ${isActive ? "product-tab-active" : ""}`;
            if (onTabChange) {
              return (
                <button
                  type="button"
                  className={className}
                  key={item}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => onTabChange(index, item)}
                >
                  {item}
                </button>
              );
            }
            return (
              <a
                className={className}
                href="#top"
                key={item}
                aria-current={isActive ? "page" : undefined}
              >
                {item}
              </a>
            );
          })}
        </nav>
        <button className="product-edit" type="button" aria-label="Edit navigation">
          <Icon name="edit" className="product-edit-icon" />
        </button>
      </div>
    </header>
  );

  if (embedded) {
    return <div className="shell-preview">{shell}</div>;
  }

  return shell;
}
