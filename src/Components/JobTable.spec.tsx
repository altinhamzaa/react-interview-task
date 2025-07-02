import React from "react";
import { render, screen } from "@testing-library/react";
import JobsTable from "./JobsTable";
import { vi } from "vitest";

vi.mock("./StatusBadge", () => ({
  __esModule: true,
  default: (props: { label: string }) => <span data-testid="mock-status-badge">{props.label}</span>,
}));
vi.mock("react-router", () => ({
  NavLink: (props: React.PropsWithChildren<{ to: string }>) => <a href={props.to} data-testid="mock-navlink">{props.children}</a>,
}));

const jobs = [
  { address: "1658 E 23rd St, Brooklyn, NY 11229, USA", status: "Completed" },
  { address: "1705 E 22nd St, Brooklyn, NY 11229, USA", status: "On Hold" },
  { address: "47 Lake St, Brooklyn, NY 11223, USA", status: "Completed" },
  { address: "256 Bay 19th St, Brooklyn, NY 11214, USA", status: "On Hold" },
  { address: "86-04 Shore Pkwy, Jamaica, NY 11414, USA", status: "In Progress" },
  { address: "6908 13th Ave, Brooklyn, NY 11228, USA", status: "On Hold" },
  { address: "1329 56th St, Brooklyn, NY 11219, USA", status: "On Hold" },
  { address: "588 Lenox Rd, Brooklyn, NY 11203, USA", status: "On Hold" },
  { address: "200 Newport St, Brooklyn, NY 11212, USA", status: "On Hold" },
  { address: "158-39 99th St, Queens, NY 11414, USA", status: "On Hold" },
  { address: "95-01 Linden Blvd, Jamaica, NY 11417, USA", status: "On Hold" },
  { address: "86-04 Shore Pkwy, Jamaica, NY 11414, USA", status: "In Progress" },
  { address: "1705 E 22nd St, Brooklyn, NY 11229, USA", status: "On Hold" },
  { address: "47 Lake St, Brooklyn, NY 11223, USA", status: "Completed" },
  { address: "256 Bay 19th St, Brooklyn, NY 11214, USA", status: "On Hold" },
  { address: "6908 13th Ave, Brooklyn, NY 11228, USA", status: "On Hold" },
  { address: "1329 56th St, Brooklyn, NY 11219, USA", status: "On Hold" },
  { address: "588 Lenox Rd, Brooklyn, NY 11203, USA", status: "On Hold" },
  { address: "200 Newport St, Brooklyn, NY 11212, USA", status: "On Hold" },
  { address: "158-39 99th St, Queens, NY 11414, USA", status: "On Hold" },
  { address: "86-04 Shore Pkwy, Jamaica, NY 11414, USA", status: "In Progress" },
  { address: "95-01 Linden Blvd, Jamaica, NY 11417, USA", status: "On Hold" },
  { address: "86-04 Shore Pkwy, Jamaica, NY 11414, USA", status: "In Progress" },
];

describe("JobsTable", () => {
  it("renders all jobs with address and status", () => {
    render(<JobsTable />);
    for (let i = 0; i < jobs.length; i++) {
      expect(screen.getByTestId(`jobs-table-row-${i}`)).toBeInTheDocument();
      expect(screen.getByTestId(`jobs-table-jobsite-${i}`)).toBeInTheDocument();
      expect(screen.getByTestId(`jobs-table-status-${i}`)).toBeInTheDocument();
    }
  });

  it("renders the correct address in NavLink for each job", () => {
    render(<JobsTable />);
    for (let i = 0; i < jobs.length; i++) {
      const navLink = screen.getAllByTestId("mock-navlink")[i];
      expect(navLink).toHaveAttribute("href", "/jobs");
    }
  });
});