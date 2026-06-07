import React, { useState } from "react";
import SectionHeader from "./SectionHeader.jsx";

function CheckIcon() {
  return (
    <svg className="stack-path__check" aria-hidden="true" viewBox="0 0 24 24">
      <path d="M8.8 19.6L1.2 12c-.3-.3-.3-.8 0-1.1l1-1c.3-.3.8-.3 1.1 0L9 15.7 20.7 4c.3-.3.8-.3 1.1 0l1 1c.3.3.3.8 0 1.1L9.9 19.6c-.3.3-.8.3-1.1 0z" />
    </svg>
  );
}

function getStepState(stepIndex, currentIndex) {
  if (stepIndex < currentIndex) return "complete";
  if (stepIndex === currentIndex) return "current";
  return "incomplete";
}

function stageClassName(state) {
  return [
    "stack-path__item",
    state === "complete" ? "stack-path__item--complete" : "",
    state === "current" ? "stack-path__item--current stack-path__item--active" : "",
    state === "incomplete" ? "stack-path__item--incomplete" : "",
  ]
    .filter(Boolean)
    .join(" ");
}

function PathStageLink({ label, state, onSelect, isEditable = false }) {
  const isComplete = state === "complete";
  const isCurrent = state === "current";
  const canSelect = isEditable && !isCurrent;

  return (
    <a
      className="stack-path__link"
      role="option"
      aria-selected={isCurrent}
      tabIndex={isCurrent ? 0 : -1}
      href="#path-stages"
      onClick={(event) => {
        event.preventDefault();
        if (canSelect) onSelect?.();
      }}
      style={{ cursor: canSelect ? "pointer" : "default" }}
    >
      <span className="stack-path__stage">{isComplete ? <CheckIcon /> : null}</span>
      <span className="stack-path__title">{label}</span>
    </a>
  );
}

function PathTrack({ stages, currentIndex, isEditable = false, onSelect, label = "Path" }) {
  return (
    <div className="stack-path" role="region" aria-label={label}>
      <ul className="stack-path__nav" role="listbox" aria-orientation="horizontal" aria-label={label}>
        {stages.map((stage, index) => {
          const state = getStepState(index, currentIndex);
          return (
            <li key={stage} className={stageClassName(state)} role="presentation">
              <PathStageLink
                label={stage}
                state={state}
                isEditable={isEditable}
                onSelect={() => onSelect?.(index)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const WORKFLOW_STAGES = ["Open", "Needs Review", "Closed"];

export default function PathStagesGallery() {
  const [currentIndex, setCurrentIndex] = useState(1);

  return (
    <div className="component-card component-card-wide path-stages-gallery" id="path-stages">
      <SectionHeader
        title="Path Stages"
        meta="STACK-WEB-PATH-STAGES — 32px chevron track, #01726C fill, complete / current / incomplete states"
      />

      <div className="path-stages-gallery-body">
        <section className="path-stages-showcase">
          <h4 className="path-stages-showcase-title">Workflow path</h4>
          <p className="path-stages-showcase-copy">
            Click a stage to update the current value. Complete, current, and incomplete states render in the bordered
            shell from the STACK path reference.
          </p>
          <div className="path-stages-reference-shell">
            <PathTrack
              stages={WORKFLOW_STAGES}
              currentIndex={currentIndex}
              isEditable
              label="Permit review path"
              onSelect={setCurrentIndex}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
