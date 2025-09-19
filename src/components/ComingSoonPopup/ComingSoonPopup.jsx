import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import "./ComingSoonPopup.scss";

export default function ComingSoonPopup({ open, onClose, title = "Coming Soon" }) {
  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose?.();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <>
      {/* Backdrop */}
      <button
        className="cs-backdrop"
        aria-label="Close"
        onClick={onClose}
      />
      {/* Dialog */}
      <div className="cs-portal">
        <div
          className="cs-dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cs-title"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 id="cs-title" className="cs-title">{title}</h3>
          <p className="cs-text">XIM is not open yet. Stay tuned for updates ✨</p>
          <button className="cs-btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </>,
    document.body
  );
}
