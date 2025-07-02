import React from "react";
import { Modal, Form, Row, Col } from "react-bootstrap";
import { CancelButton, SaveButton } from "./Buttons";

interface JobModalProps {
  show: boolean;
  handleClose: () => void;
}
export default function JobModal({ show, handleClose }: JobModalProps) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      data-testid="job-modal"
    >
      <Modal.Body>
        <h5 className="fw-bold" data-testid="job-modal-title">Title</h5>
        <div
          className="d-flex align-items-start mb-3"
          data-testid="job-modal-info"
        >
          <div className="me-2 mt-1">
            <i className="bi bi-info-circle text-primary" data-testid="job-modal-info-icon"></i>
          </div>
          <small className="text-muted" data-testid="job-modal-info-text">
            Informative piece of text that can be used regarding this modal.
          </small>
        </div>

        <Form data-testid="job-modal-form">
          <Row className="mb-3">
            <Col>
              <Form.Group>
                <Form.Label htmlFor="job-modal-input-name" data-testid="job-modal-label-name">
                  Name
                </Form.Label>
                <Form.Control
                  id="job-modal-input-name"
                  type="text"
                  placeholder="Type the jobsite's name"
                  data-testid="job-modal-input-name"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label htmlFor="job-modal-select-status" data-testid="job-modal-label-status">
                  Status
                </Form.Label>
                <Form.Select
                  id="job-modal-select-status"
                  defaultValue=""
                  data-testid="job-modal-select-status"
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  <option>On Road</option>
                  <option>Completed</option>
                  <option>On Hold</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <div
            className="d-flex justify-content-end gap-2"
            data-testid="job-modal-buttons"
          >
            <CancelButton onClick={handleClose} data-testid="job-modal-cancel" />
            <SaveButton onClick={() => {}} data-testid="job-modal-save" />
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}