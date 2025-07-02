import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import StatusDropdown from "./StatusDropdown";

describe("StatusDropdown", () => {
  it("renders label and toggle button", () => {
    render(<StatusDropdown />);
    expect(screen.getByTestId("status-dropdown-label")).toBeInTheDocument();
    expect(screen.getByTestId("status-dropdown-toggle")).toBeInTheDocument();
    expect(screen.getByTestId("status-dropdown-placeholder")).toHaveTextContent("Select one");
  });

  it("opens dropdown menu on click", () => {
    render(<StatusDropdown />);
    fireEvent.click(screen.getByTestId("status-dropdown-toggle"));
    expect(screen.getByTestId("status-dropdown-menu")).toBeInTheDocument();
    expect(screen.getByTestId("status-dropdown-option-Completed")).toBeInTheDocument();
    expect(screen.getByTestId("status-dropdown-option-In-Progress")).toBeInTheDocument();
    expect(screen.getByTestId("status-dropdown-option-On-Hold")).toBeInTheDocument();
  });

  it("selects an option and closes dropdown", () => {
    render(<StatusDropdown />);
    fireEvent.click(screen.getByTestId("status-dropdown-toggle"));
    fireEvent.click(screen.getByTestId("status-dropdown-option-Completed"));
    expect(screen.queryByTestId("status-dropdown-menu")).not.toBeInTheDocument();
    expect(screen.getByTestId("status-dropdown-selected-label")).toHaveTextContent("Completed");
  });

  it("shows correct color dot when option is selected", () => {
    render(<StatusDropdown />);
    fireEvent.click(screen.getByTestId("status-dropdown-toggle"));
    fireEvent.click(screen.getByTestId("status-dropdown-option-In-Progress"));
    expect(screen.getByTestId("status-dropdown-selected-label")).toHaveTextContent("In Progress");
    expect(screen.getByTestId("status-dropdown-selected-color")).toBeInTheDocument();
  });

  it("closes dropdown when clicking outside", () => {
    render(<StatusDropdown />);
    fireEvent.click(screen.getByTestId("status-dropdown-toggle"));
    expect(screen.getByTestId("status-dropdown-menu")).toBeInTheDocument();
    fireEvent.mouseDown(document.body);
    expect(screen.queryByTestId("status-dropdown-menu")).not.toBeInTheDocument();
  });
});