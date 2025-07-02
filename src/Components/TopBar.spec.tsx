import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TopBar from "./TopBar";
import { vi } from "vitest";

vi.mock("./Buttons", () => ({
  CreateButton: (props: React.ComponentPropsWithoutRef<"button"> & { "data-testid"?: string }) => (
    <button data-testid={props["data-testid"] || "topbar-create-button"} onClick={props.onClick}>
      Create
    </button>
  ),
}));
vi.mock("./StatusModal", () => ({
  default: (props: { isOpen: boolean; onClose: () => void }) =>
    props.isOpen ? (
      <div data-testid="status-modal">
        Status Modal
        <button data-testid="close-modal-btn" onClick={props.onClose}>
          Close
        </button>
      </div>
    ) : null,
}));

describe("TopBar", () => {
  it("renders all topbar elements", () => {
    render(<TopBar />);
    expect(screen.getByTestId("topbar-root")).toBeInTheDocument();
    expect(screen.getByTestId("topbar-title-block")).toBeInTheDocument();
    expect(screen.getByTestId("topbar-title")).toHaveTextContent("Title");
    expect(screen.getByTestId("topbar-info")).toBeInTheDocument();
    expect(screen.getByTestId("topbar-info-icon")).toBeInTheDocument();
    expect(screen.getByTestId("topbar-info-i")).toBeInTheDocument();
    expect(screen.getByTestId("topbar-actions")).toBeInTheDocument();
    expect(screen.getByTestId("topbar-search")).toBeInTheDocument();
    expect(screen.getByTestId("topbar-create-button")).toBeInTheDocument();
  });

  it("does not show StatusModal by default", () => {
    render(<TopBar />);
    expect(screen.queryByTestId("status-modal")).not.toBeInTheDocument();
  });

  it("shows StatusModal when CreateButton is clicked", () => {
    render(<TopBar />);
    fireEvent.click(screen.getByTestId("topbar-create-button"));
    expect(screen.getByTestId("status-modal")).toBeInTheDocument();
  });

  it("closes StatusModal when onClose is called", () => {
    render(<TopBar />);
    fireEvent.click(screen.getByTestId("topbar-create-button"));
    const closeBtn = screen.getByTestId("close-modal-btn");
    fireEvent.click(closeBtn);
    expect(screen.queryByTestId("status-modal")).not.toBeInTheDocument();
  });
});