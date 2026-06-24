import React, { useState } from "react";
import Icon from "./Icon.jsx";

export default function InfoBanner({ title, children, onDismiss }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const handleDismiss = () => {
    setVisible(false);
    onDismiss?.();
  };

  return (
    <div className="stack-info-banner" role="status">
      <Icon name="info" className="stack-info-banner-icon" />
      <div className="stack-info-banner-copy">
        <strong>{title}</strong>
        <span>{children}</span>
      </div>
      <button className="stack-button stack-button-neutral" type="button" onClick={handleDismiss}>
        <span>Dismiss</span>
      </button>
    </div>
  );
}
