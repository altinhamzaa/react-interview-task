import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import RegisterModal from "./RegisterModal";

vi.mock("./Buttons", () => ({
  SaveButton: (props: React.ComponentProps<"button"> & { "data-testid"?: string }) => (
    <button onClick={props.onClick} data-testid={props["data-testid"] || "register-modal-save"}>Save</button>
  ),
}));

describe("RegisterModal", () => {
  const onClose = vi.fn();
  const onSave = vi.fn();

  afterEach(() => {
    onClose.mockClear();
    onSave.mockClear();
  });

  it("does not render when isOpen is false", () => {
    render(<RegisterModal isOpen={false} onClose={onClose} onSave={onSave} />);
    expect(screen.queryByTestId("register-modal-bg")).not.toBeInTheDocument();
  });

  it("renders all elements when isOpen is true", () => {
    render(<RegisterModal isOpen={true} onClose={onClose} onSave={onSave} />);
    expect(screen.getByTestId("register-modal-bg")).toBeInTheDocument();
    expect(screen.getByTestId("register-modal-box")).toBeInTheDocument();
    expect(screen.getByTestId("register-modal-title")).toHaveTextContent("Title");
    expect(screen.getByTestId("register-modal-close")).toBeInTheDocument();
    expect(screen.getByTestId("register-modal-info-row")).toBeInTheDocument();
    expect(screen.getByTestId("register-modal-info-icon")).toHaveTextContent("i");
    expect(screen.getByTestId("register-modal-info-text")).toBeInTheDocument();
    expect(screen.getByTestId("register-modal-form-row")).toBeInTheDocument();
    expect(screen.getByTestId("register-modal-label-item")).toHaveTextContent("Item");
    expect(screen.getByTestId("register-modal-input-item")).toBeInTheDocument();
    expect(screen.getByTestId("register-modal-label-quantity")).toHaveTextContent("Quantity");
    expect(screen.getByTestId("register-modal-input-quantity")).toBeInTheDocument();
    expect(screen.getByTestId("register-modal-label-description")).toHaveTextContent("Description");
    expect(screen.getByTestId("register-modal-textarea-description")).toBeInTheDocument();
    expect(screen.getByTestId("register-modal-label-notes")).toHaveTextContent("Notes");
    expect(screen.getByTestId("register-modal-textarea-notes")).toBeInTheDocument();
    expect(screen.getByTestId("register-modal-actions")).toBeInTheDocument();
    expect(screen.getByTestId("register-modal-save")).toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", () => {
    render(<RegisterModal isOpen={true} onClose={onClose} onSave={onSave} />);
    fireEvent.click(screen.getByTestId("register-modal-close"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onSave when save button is clicked", () => {
    render(<RegisterModal isOpen={true} onClose={onClose} onSave={onSave} />);
    fireEvent.click(screen.getByTestId("register-modal-save"));
    expect(onSave).toHaveBeenCalledTimes(1);
  });

  it("inputs and textareas are editable", () => {
    render(<RegisterModal isOpen={true} onClose={onClose} onSave={onSave} />);
    const quantityInput = screen.getByTestId("register-modal-input-quantity") as HTMLInputElement;
    fireEvent.change(quantityInput, { target: { value: "12" } });
    expect(quantityInput.value).toBe("12");

    const descTextarea = screen.getByTestId("register-modal-textarea-description") as HTMLTextAreaElement;
    fireEvent.change(descTextarea, { target: { value: "test description" } });
    expect(descTextarea.value).toBe("test description");

    const notesTextarea = screen.getByTestId("register-modal-textarea-notes") as HTMLTextAreaElement;
    fireEvent.change(notesTextarea, { target: { value: "notes here" } });
    expect(notesTextarea.value).toBe("notes here");
  });
});