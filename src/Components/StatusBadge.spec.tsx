import React from "react";
import { render, screen } from "@testing-library/react";
import StatusBadge from "./StatusBadge";
import type { StatusLabel } from "./StatusBadge";

describe("StatusBadge", () => {
  const cases: [StatusLabel, string][] = [
    ["Completed", "completed"],
    ["On Hold", "on-hold"],
    ["In Progress", "in-progress"],
  ];

  it.each(cases)("renders '%s' with correct class", (label, expectedClass) => {
    render(<StatusBadge label={label} />);
    const el = screen.getByText(label);
    expect(el).toBeInTheDocument();
    expect(el).toHaveClass("status-badge");
    expect(el).toHaveClass(expectedClass);
  });
});