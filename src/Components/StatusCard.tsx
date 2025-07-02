import React from "react";

export default function StatusCards() {
  return (
    <div className="p-2 bg-white rounded shadow-sm" data-testid="status-cards">
      <div className="row g-2">
        <div className="col-md-4">
          <div
            className="p-4 rounded text-white text-center fw-bold"
            style={{ backgroundColor: "#f0db4f", color: "#ffffff" }}
            data-testid="status-cards-on-road"
          >
            14 On Road
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="p-4 rounded text-white text-center fw-bold"
            style={{ backgroundColor: "#4CAF50" }}
            data-testid="status-cards-completed"
          >
            3 Completed
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="p-4 rounded text-white text-center fw-bold"
            style={{ backgroundColor: "#FF3E3E" }}
            data-testid="status-cards-on-hold"
          >
            2 On Hold
          </div>
        </div>
      </div>
    </div>
  );
}