import React from "react";
import StatusBadge from "./StatusBadge";
import type { StatusLabel } from "./StatusBadge";
import {NavLink} from "react-router"

const jobs: { address: string; status: StatusLabel }[] = [
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

const JobsTable: React.FC = () => {

  return (
    <div className="container-fluid px-4 border border-white" data-testid="jobs-table-container">
      <div className="row">
        <div className="col-12">
          <div
            className="table-responsive border rounded"
            style={{ maxHeight: "calc(100vh - 200px)", overflowY: "auto" }}
            data-testid="jobs-table-responsive"
          >
            <table className="table table-striped align-middle w-100 text-center" data-testid="jobs-table">
              <thead className="table-light position-sticky top-0">
                <tr>
                  <th className="fw-bold text-secondary" data-testid="jobs-table-header-jobsite">Jobsite Name</th>
                  <th className="fw-bold text-secondary" data-testid="jobs-table-header-status">Status</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job, idx) => (
                  <tr key={idx} data-testid={`jobs-table-row-${idx}`}>
                    <td
                      className="text-primary"
                      style={{ cursor: "pointer" }}
                      data-testid={`jobs-table-jobsite-${idx}`}
                    >
                      <NavLink to="/jobs">{job.address}</NavLink>
                      
                    </td>
                    <td data-testid={`jobs-table-status-${idx}`}>
                      <StatusBadge label={job.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsTable;