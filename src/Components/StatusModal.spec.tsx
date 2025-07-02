import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import StatusModal from "./StatusModal";
import { vi } from "vitest";

vi.mock("./Buttons", () => ({
  CancelButton: (props: React.ComponentPropsWithoutRef<"button"> & { "data-testid"?: string }) => (
    <button onClick={props.onClick} data-testid={props["data-testid"] || "status-modal-cancel"}>Cancel</button>
  ),
  SaveButton: (props: React.ComponentPropsWithoutRef<"button"> & { "data-testid"?: string }) => (
    <button onClick={props.onClick} data-testid={props["data-testid"] || "status-modal-save"}>Save</button>
  ),
}));
vi.mock("./StatusDropdown", () => ({
  __esModule: true,
  default: (props: React.ComponentPropsWithoutRef<"div"> & { "data-testid"?: string }) => (
    <div data-testid={props["data-testid"] || "status-modal-status-dropdown"}>StatusDropdown</div>
  ),
}));
vi.mock("./CategoryDropdown", () => ({
  __esModule: true,
  default: (props: React.ComponentPropsWithoutRef<"div"> & { "data-testid"?: string }) => (
    <div data-testid={props["data-testid"] || "status-modal-category-dropdown"}>CategoryDropdown</div>
  ),
}));

describe("StatusModal", () => {
  const onClose = vi.fn();
  const onSave = vi.fn();

  beforeEach(() => {
    onClose.mockClear();
    onSave.mockClear();
  });

  it("does not render when isOpen is false", () => {
    render(<StatusModal isOpen={false} onClose={onClose} onSave={onSave} />);
    expect(screen.queryByTestId("status-modal-root")).not.toBeInTheDocument();
  });

  it("renders all elements when isOpen is true", () => {
    render(<StatusModal isOpen={true} onClose={onClose} onSave={onSave} />);
    expect(screen.getByTestId("status-modal-root")).toBeInTheDocument();
    expect(screen.getByTestId("status-modal-dialog")).toBeInTheDocument();
    expect(screen.getByTestId("status-modal-content")).toBeInTheDocument();
    expect(screen.getByTestId("status-modal-header")).toBeInTheDocument();
    expect(screen.getByTestId("status-modal-title")).toHaveTextContent("Title");
    expect(screen.getByTestId("status-modal-close")).toBeInTheDocument();
    expect(screen.getByTestId("status-modal-body")).toBeInTheDocument();
    expect(screen.getByTestId("status-modal-info")).toBeInTheDocument();
    expect(screen.getByTestId("status-modal-info-icon")).toBeInTheDocument();
    expect(screen.getByTestId("status-modal-info-text")).toBeInTheDocument();
    expect(screen.getByTestId("status-modal-name-group")).toBeInTheDocument();
    expect(screen.getByTestId("status-modal-label-name")).toHaveTextContent("Name");
    expect(screen.getByTestId("status-modal-input-name")).toBeInTheDocument();
    expect(screen.getByTestId("status-modal-dropdown-row")).toBeInTheDocument();
    expect(screen.getByTestId("status-modal-category-col")).toBeInTheDocument();
    expect(screen.getByTestId("status-modal-status-col")).toBeInTheDocument();
    expect(screen.getByTestId("status-modal-category-dropdown")).toBeInTheDocument();
    expect(screen.getByTestId("status-modal-status-dropdown")).toBeInTheDocument();
    expect(screen.getByTestId("status-modal-footer")).toBeInTheDocument();
    expect(screen.getByTestId("status-modal-cancel")).toBeInTheDocument();
    expect(screen.getByTestId("status-modal-save")).toBeInTheDocument();
  });

  it("calls onClose when close button or cancel button is clicked", () => {
    render(<StatusModal isOpen={true} onClose={onClose} onSave={onSave} />);
    fireEvent.click(screen.getByTestId("status-modal-close"));
    expect(onClose).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getByTestId("status-modal-cancel"));
    expect(onClose).toHaveBeenCalledTimes(2);
  });

  it("calls onSave when save button is clicked", () => {
    render(<StatusModal isOpen={true} onClose={onClose} onSave={onSave} />);
    fireEvent.click(screen.getByTestId("status-modal-save"));
    expect(onSave).toHaveBeenCalledTimes(1);
  });

  it("input is editable", () => {
    render(<StatusModal isOpen={true} onClose={onClose} onSave={onSave} />);
    const input = screen.getByTestId("status-modal-input-name") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Test Name" } });
    expect(input.value).toBe("Test Name");
  });
});