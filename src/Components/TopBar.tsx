import React, { useState } from "react";
import { CreateButton } from "./Buttons";
import StatusModal from "./StatusModal";

export default function TopBar() {
  const [showStatusModal, setShowStatusModal] = useState(false);

  return (
    <>
      <div
        className="d-flex justify-content-between align-items-center mb-3"
        data-testid="topbar-root"
      >
        <div data-testid="topbar-title-block">
          <h5 className="mb-1" data-testid="topbar-title">
            Title
          </h5>
          <small className="text-muted" data-testid="topbar-info">
            <i className="bi bi-info-circle me-2" data-testid="topbar-info-icon"></i>
            <span className="modal-info-icon" data-testid="topbar-info-i">i</span>
            Informative piece of text that can be used regarding this modal.
          </small>
        </div>
        <div className="d-flex align-items-center gap-2" data-testid="topbar-actions">
          <input
            type="text"
            className="form-control"
            placeholder="Search a driver"
            style={{ height: "34px" }}
            data-testid="topbar-search"
          />
          <CreateButton
            onClick={() => setShowStatusModal(true)}
            data-testid="topbar-create-button"
          />
        </div>
      </div>
      <StatusModal
        onSave={() => {}}
        isOpen={showStatusModal}
        onClose={() => setShowStatusModal(false)}
      />
    </>
  );
}