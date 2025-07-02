import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ServiceSelectPage from "./ServiceSelectPage";
import { vi } from "vitest";

vi.mock("./Buttons", () => ({
  GoBackButton: (props: React.ComponentProps<"button">) => <button data-testid="go-back" {...props}>Go Back</button>,
  CreateButton: (props: React.ComponentProps<"button">) => <button data-testid="create-btn" {...props}>Create</button>,
}));

// FIX: Return an object with a `default` property!
vi.mock("./RegisterModal", () => ({
  default: (props: Record<string, unknown>) =>
    props.isOpen ? <div data-testid="register-modal">Register Modal</div> : null
}));

describe("ServiceSelectPage", () => {
  it("renders sidebar and main content", () => {
    render(<ServiceSelectPage />);
    expect(screen.getByText(/262 3rd Avenue/)).toBeInTheDocument();
    expect(screen.getByText("Sidewalk Shed")).toBeInTheDocument();
    expect(screen.getByText("Scaffold")).toBeInTheDocument();
    expect(screen.getByText("Data Grid")).toBeInTheDocument();
  });

  it("shows empty state before service is selected", () => {
    render(<ServiceSelectPage />);
    expect(screen.getByText("No Service Selected")).toBeInTheDocument();
    expect(screen.getByText("Please select a service on your left to proceed.")).toBeInTheDocument();
  });

  it("shows table when 'Scaffold' is selected", () => {
    render(<ServiceSelectPage />);
    fireEvent.click(screen.getByText("Scaffold"));
    expect(screen.getByText("Nr.")).toBeInTheDocument();
    expect(screen.getByText("Item")).toBeInTheDocument();
    expect(screen.getByText("Quantity")).toBeInTheDocument();
    expect(screen.getByText("G42295")).toBeInTheDocument();
  });

  it("shows RegisterModal when Create button clicked", () => {
    render(<ServiceSelectPage />);
    const createBtn = screen.getByTestId("create-btn");
    fireEvent.click(createBtn);
    expect(screen.getByTestId("register-modal")).toBeInTheDocument();
  });

  it("Go Back button is clickable", () => {
    render(<ServiceSelectPage />);
    const goBackBtn = screen.getByTestId("go-back");
    expect(goBackBtn).toBeInTheDocument();
  });

  it("input for search is rendered in header", () => {
    render(<ServiceSelectPage />);
    const input = screen.getAllByPlaceholderText("Search a driver")[0];
    expect(input).toBeInTheDocument();
  });
});