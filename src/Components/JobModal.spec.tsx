import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import JobModal from "./JobModal";

vi.mock("./Buttons", () => ({
  CancelButton: (props: React.ComponentPropsWithoutRef<"button">) => <button onClick={props.onClick} data-testid="job-modal-cancel">Cancel</button>,
  SaveButton: (props: React.ComponentPropsWithoutRef<"button">) => <button onClick={props.onClick} data-testid="job-modal-save">Save</button>,
}));

describe("JobModal", () => {
  it("renders modal when show=true", () => {
    render(<JobModal show={true} handleClose={() => {}} />);
    expect(screen.getByTestId("job-modal-title")).toBeInTheDocument();
    expect(screen.getByTestId("job-modal-info")).toBeInTheDocument();
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Status")).toBeInTheDocument();
    expect(screen.getByTestId("job-modal-cancel")).toBeInTheDocument();
    expect(screen.getByTestId("job-modal-save")).toBeInTheDocument();
  });

  it("does not render modal content when show=false", () => {
    render(<JobModal show={false} handleClose={() => {}} />);
    expect(screen.queryByTestId("job-modal-title")).not.toBeInTheDocument();
    expect(screen.queryByTestId("job-modal-cancel")).not.toBeInTheDocument();
    expect(screen.queryByTestId("job-modal-save")).not.toBeInTheDocument();
  });

  it("renders select options for status", () => {
    render(<JobModal show={true} handleClose={() => {}} />);
    const select = screen.getByLabelText("Status");
    fireEvent.change(select, { target: { value: "On Road" } });
    expect((select as HTMLSelectElement).value).toBe("On Road");
    expect(screen.getByText("On Road")).toBeInTheDocument();
    expect(screen.getByText("Completed")).toBeInTheDocument();
    expect(screen.getByText("On Hold")).toBeInTheDocument();
  });

  it("inputs can be changed", () => {
    render(<JobModal show={true} handleClose={() => {}} />);
    const nameInput = screen.getByPlaceholderText("Type the jobsite's name") as HTMLInputElement;
    fireEvent.change(nameInput, { target: { value: "My Jobsite" } });
    expect(nameInput.value).toBe("My Jobsite");
  });
});