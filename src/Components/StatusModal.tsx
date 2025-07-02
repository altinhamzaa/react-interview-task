import React from "react";
import { CancelButton, SaveButton } from "./Buttons";
import StatusDropdown from "./StatusDropdown";
import CategoryDropDown from "./CategoryDropdown";

interface StatusModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

export default function StatusModal({ isOpen, onClose, onSave }: StatusModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="modal d-block"
      tabIndex={-1}
      style={{ background: "rgba(0,0,0,0.3)" }}
      data-testid="status-modal-root"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered" data-testid="status-modal-dialog">
        <div className="modal-content" data-testid="status-modal-content">
          <div className="modal-header" data-testid="status-modal-header">
            <h5 className="modal-title" data-testid="status-modal-title">Title</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              data-testid="status-modal-close"
            ></button>
          </div>

          <div className="modal-body" data-testid="status-modal-body">
            <div className="mb-3 d-flex align-items-center text-muted" data-testid="status-modal-info">
              <i className="bi bi-info-circle me-2" data-testid="status-modal-info-icon"></i>
              <small data-testid="status-modal-info-text">
                Informative piece of text that can be used regarding this modal.
              </small>
            </div>

            <div className="mb-3" data-testid="status-modal-name-group">
              <label className="form-label" htmlFor="status-modal-name-input" data-testid="status-modal-label-name">Name</label>
              <input
                id="status-modal-name-input"
                type="text"
                className="form-control"
                placeholder="Type the jobsite’s name"
                data-testid="status-modal-input-name"
              />
            </div>

            <div className="row" data-testid="status-modal-dropdown-row">
              <div className="col-md-6 mb-3" data-testid="status-modal-category-col">
                <CategoryDropDown data-testid="status-modal-category-dropdown" />
              </div>
              <div className="col-md-6 mb-3" data-testid="status-modal-status-col">
                <StatusDropdown data-testid="status-modal-status-dropdown" />
              </div>
            </div>
          </div>

          <div className="modal-footer" data-testid="status-modal-footer">
            <CancelButton onClick={onClose} data-testid="status-modal-cancel" />
            <SaveButton onClick={onSave} data-testid="status-modal-save" />
          </div>
        </div>
      </div>
    </div>
  );
}