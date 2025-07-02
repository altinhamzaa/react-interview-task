import React from "react";
import { render, screen } from "@testing-library/react";
import StatusCards from "./StatusCard";

describe("StatusCards", () => {
  it("renders all status cards with correct text and test ids", () => {
    render(<StatusCards />);
    expect(screen.getByTestId("status-cards")).toBeInTheDocument();
    expect(screen.getByTestId("status-cards-on-road")).toHaveTextContent("14 On Road");
    expect(screen.getByTestId("status-cards-completed")).toHaveTextContent("3 Completed");
    expect(screen.getByTestId("status-cards-on-hold")).toHaveTextContent("2 On Hold");
  });
});