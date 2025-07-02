import React from "react";
import "../Styles/RegisterModal.css";
import { SaveButton } from "./Buttons";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

export default function RegisterModal({ isOpen, onClose, onSave }: RegisterModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-bg" data-testid="register-modal-bg">
      <div className="modal-box" data-testid="register-modal-box">
        <div className="modal-header" data-testid="register-modal-header">
          <span className="modal-title" data-testid="register-modal-title">Title</span>
          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Close"
            data-testid="register-modal-close"
          >
            &times;
          </button>
        </div>
        <div className="modal-info-row" data-testid="register-modal-info-row">
          <span className="modal-info-icon" data-testid="register-modal-info-icon">i</span>
          <span className="modal-info-text" data-testid="register-modal-info-text">
            Informative piece of text that can be used regarding this modal.
          </span>
        </div>
        <div className="modal-form-row" data-testid="register-modal-form-row">
          <div className="modal-form-col">
            <label className="modal-label" htmlFor="register-modal-item" data-testid="register-modal-label-item">Item</label>
            <div className="modal-input modal-select" data-testid="register-modal-item-select">
              <input
                id="register-modal-item"
                type="text"
                placeholder="Search & Select item"
                readOnly
                data-testid="register-modal-input-item"
              />
              <span className="modal-select-arrow" data-testid="register-modal-select-arrow">&#9660;</span>
            </div>
          </div>
          <div className="modal-form-col">
            <label className="modal-label" htmlFor="register-modal-quantity" data-testid="register-modal-label-quantity">Quantity</label>
            <input
              id="register-modal-quantity"
              className="modal-input"
              type="text"
              placeholder="Set Quantity"
              data-testid="register-modal-input-quantity"
            />
          </div>
        </div>
        <div className="modal-form-group">
          <label className="modal-label" htmlFor="register-modal-description" data-testid="register-modal-label-description">Description</label>
          <textarea
            id="register-modal-description"
            className="modal-textarea"
            placeholder="Type the description..."
            data-testid="register-modal-textarea-description"
          />
        </div>
        <div className="modal-form-group">
          <label className="modal-label" htmlFor="register-modal-notes" data-testid="register-modal-label-notes">Notes</label>
          <textarea
            id="register-modal-notes"
            className="modal-textarea"
            placeholder="Type a note..."
            data-testid="register-modal-textarea-notes"
          />
        </div>
        <div className="modal-actions" data-testid="register-modal-actions">
          <SaveButton onClick={onSave} data-testid="register-modal-save" />
        </div>
      </div>
    </div>
  );
}