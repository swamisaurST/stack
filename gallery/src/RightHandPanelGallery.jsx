import React from "react";
import SectionHeader from "./SectionHeader.jsx";
import RightHandPanel, { RHP_SPECIMEN } from "./RightHandPanel.jsx";

export default function RightHandPanelGallery() {
  return (
    <div className="component-card component-card-wide rhp-gallery-card" id="right-hand-panel">
      <SectionHeader
        title="Right Hand Panel"
        meta="STACK-WEB-RIGHT-HAND-PANEL — contextual record inspector, 726px max width, read-only field grid"
      />

      <div className="rhp-gallery-body">
        <div className="rhp-reference-shell">
          <RightHandPanel {...RHP_SPECIMEN} />
        </div>
      </div>
    </div>
  );
}
