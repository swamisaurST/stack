import React from "react";
import Icon from "./Icon.jsx";
import InfoBanner from "./InfoBanner.jsx";
import RightHandPanel, { RHP_SPECIMEN } from "./RightHandPanel.jsx";
import SectionHeader from "./SectionHeader.jsx";
import StackShell from "./StackShell.jsx";

const workspaceTabs = ["Tab 1", "Tab 2", "Tab 3"];

const workspaceRows = [
  ["R-1001", "Record name", "Authority name", { label: "In review", tone: "warning" }, "Today"],
  ["R-1002", "Second record", "Authority name", { label: "Open", tone: "neutral" }, "Jun 28"],
  ["R-1003", "Third record", "Authority name", { label: "Blocked", tone: "error" }, "Jul 02"],
  ["R-1004", "Fourth record", "Authority name", { label: "Done", tone: "success" }, "Jul 09"],
  ["R-1005", "Fifth record", "Authority name", { label: "Open", tone: "neutral" }, "Jul 14"],
];

function StatusTag({ children, tone = "neutral" }) {
  const variantByTone = {
    neutral: "default",
    warning: "warning",
    success: "success",
    error: "error",
  };
  const variant = variantByTone[tone] || "default";

  return (
    <span className={`stack-badge-pill stack-badge-pill--${variant}`}>
      <span className="stack-badge-pill__label">{children}</span>
    </span>
  );
}

function PathStagesBar() {
  return (
    <div className="stack-path" role="region" aria-label="Sample path">
      <ul className="stack-path__nav" role="listbox" aria-orientation="horizontal" aria-label="Sample path">
        <li className="stack-path__item stack-path__item--complete" role="presentation">
          <a className="stack-path__link" role="option" href="#record-workspace">
            <span className="stack-path__stage">
              <svg className="stack-path__check" aria-hidden="true" viewBox="0 0 24 24">
                <path d="M8.8 19.6L1.2 12c-.3-.3-.3-.8 0-1.1l1-1c.3-.3.8-.3 1.1 0L9 15.7 20.7 4c.3-.3.8-.3 1.1 0l1 1c.3.3.3.8 0 1.1L9.9 19.6c-.3.3-.8.3-1.1 0z" />
              </svg>
            </span>
            <span className="stack-path__title">Stage 1</span>
          </a>
        </li>
        <li
          className="stack-path__item stack-path__item--current stack-path__item--active"
          role="presentation"
        >
          <a className="stack-path__link" role="option" aria-selected="true" href="#record-workspace">
            <span className="stack-path__stage" />
            <span className="stack-path__title">Stage 2</span>
          </a>
        </li>
        <li className="stack-path__item stack-path__item--incomplete" role="presentation">
          <a className="stack-path__link" role="option" href="#record-workspace">
            <span className="stack-path__stage" />
            <span className="stack-path__title">Stage 3</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default function WorkspaceGallery() {
  return (
    <div className="component-card component-card-wide workspace-gallery-card" id="record-workspace">
      <SectionHeader
        title="Record workspace"
        meta="Shell, path stages, info banner, table, and context panel in one specimen."
      />

      <div className="workspace-specimen">
        <StackShell pageTitle="Page Title" tabs={workspaceTabs} activeTabIndex={0} />
        <div className="workspace-specimen-body">
          <div className="workspace-path-shell">
            <PathStagesBar />
          </div>

          <div className="workspace-master-detail">
            <div className="table-shell">
              <InfoBanner title="Information title">
                Supporting copy for a dismissible workspace banner.
              </InfoBanner>
              <div className="table-header">
                <div className="table-title-group">
                  <span className="table-header-icon" aria-hidden="true">
                    <Icon name="account" className="table-header-icon-img" />
                  </span>
                  <h3 className="table-title">
                    Sample Table <span className="table-title-count">({workspaceRows.length})</span>
                  </h3>
                </div>
                <button className="stack-button stack-button-neutral" type="button">
                  <span>Table Action</span>
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
                    <th scope="col">Authority</th>
                    <th scope="col">Status</th>
                    <th scope="col">Due</th>
                    <th className="action-col" scope="col">
                      <span className="assistive-text">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {workspaceRows.map((row) => {
                    const [id, name, authority, status, due] = row;
                    return (
                      <tr key={id}>
                        <td className="select-col">
                          <span className="checkbox-shell" aria-hidden="true" />
                        </td>
                        <td>{id}</td>
                        <td>
                          <a className="stack-link" href="#record-workspace">
                            {name}
                          </a>
                        </td>
                        <td>{authority}</td>
                        <td>
                          <StatusTag tone={status.tone}>{status.label}</StatusTag>
                        </td>
                        <td>{due}</td>
                        <td className="action-col">
                          <button className="row-action" type="button" aria-label={`Edit ${id}`}>
                            <Icon name="edit" className="row-action-icon" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="table-footer">
                <span>Rows per page: 5</span>
                <span>Viewing 1-5 of 150</span>
                <span className="pager-controls">Previous · Next</span>
              </div>
            </div>

            <aside className="rhp-panel workspace-rhp" aria-label="Record title">
              <RightHandPanel {...RHP_SPECIMEN} />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
