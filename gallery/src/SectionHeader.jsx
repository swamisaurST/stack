import React from "react";

export default function SectionHeader({ title, meta, action, as: Tag = "div" }) {
  return (
    <Tag className="section-header">
      <div className="section-title-group">
        <div className="section-title-copy">
          <h3 className="section-title">{title}</h3>
          {meta ? <p className="section-meta">{meta}</p> : null}
        </div>
      </div>
      {action ? <div className="section-action">{action}</div> : null}
    </Tag>
  );
}
