import React, { useState } from "react";
import { GoBackButton, CreateButton } from "./Buttons";
import { FaCheck } from "react-icons/fa";
import "../Styles/Service-select-page.css";
import "../Styles/ScaffoldTable.css";
import RegisterModal from "./RegisterModal";
import GroupImage from "../assets/Group-img.svg"

const services = ["Sidewalk Shed", "Scaffold"];

const scaffoldTableData = [
  { id: 1, item: "G42295", quantity: 10, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 2, item: "M721", quantity: 83, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 3, item: "M94796", quantity: 31, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 4, item: "S25907", quantity: 47, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 5, item: "A68446", quantity: 52, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 6, item: "F3786", quantity: 10, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 7, item: "R69895", quantity: 30, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 8, item: "A29259", quantity: 32, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 9, item: "A41878", quantity: 16, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 10, item: "A37244", quantity: 13, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 11, item: "M89319", quantity: 10, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
];

function ScaffoldTable() {
  return (
    <div className="scaffold-table-simple-outer">
      <div className="scaffold-table-header-row">
        <div style={{ flexGrow: 1 }} />
      </div>
      <div className="scaffold-table-wrapper">
        <table className="scaffold-table-simple">
          <thead>
            <tr>
              <th>Nr.</th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Description</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {scaffoldTableData.map(row => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.item}</td>
                <td>{row.quantity}</td>
                <td>{row.description}</td>
                <td>{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function ServiceSelectPage() {
  // Only this line is changed: set "Sidewalk Shed" as the default selected service
  const [selectedService, setSelectedService] = useState<string>("Sidewalk Shed");
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  return (
    <div className="service-select-bg py-4">
      <div className="container-fluid">
        <div className="row" style={{ minHeight: "80vh" }}>
          <div className="col-12 col-md-3 mb-3 mb-md-0">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <div className="mb-3 fw-medium" style={{ fontSize: 15 }}>
                  262 3rd Avenue, New York
                </div>
                <div className="d-flex flex-column gap-2 mb-3">
                  {services.map(service => (
                    <button
                      key={service}
                      type="button"
                      className={`custom-select-btn w-100${selectedService === service ? " selected" : ""}`}
                      onClick={() => setSelectedService(service)}
                    >
                      <span className="custom-select-btn-label">{service}</span>
                      {selectedService === service && (
                        <span className="custom-select-btn-check">
                          <FaCheck />
                        </span>
                      )}
                    </button>
                  ))}
                </div>
                <div className="mt-auto">
                  <GoBackButton onClick={() => window.history.back()} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-9">
            <div className="card h-100 shadow-sm" style={{ background: "transparent", boxShadow: "none" }}>
              <div className="card-body d-flex flex-column p-0" style={{ background: "transparent" }}>
                <div className="d-flex align-items-center border-bottom px-4 py-3" style={{ minHeight: 60 }}>
                  <div className="fw-medium flex-grow-1" style={{ fontSize: 16 }}>
                    Data Grid
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search a driver"
                    style={{ maxWidth: 220, height: "34px" }}
                  />
                  <div className="ms-2">
                    <CreateButton onClick={() => setShowRegisterModal(true)} />
                  </div>
                </div>
                <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center py-5" style={{ width: "100%" }}>
                  {selectedService === "Scaffold" ? (
                    <ScaffoldTable />
                  ) : (
                    <>
                      <img
                        src={GroupImage}
                        alt="Group Icon"
                        style={{ width: 120, opacity: 0.8, marginBottom: 14 }}
                      />
                      <div className="fw-semibold mb-1" style={{ fontSize: 17 }}>
                        No Service Selected
                      </div>
                      <div className="text-muted" style={{ fontSize: 15 }}>
                        Please select a service on your left to proceed.
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RegisterModal
        isOpen={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
        onSave={() => setShowRegisterModal(false)}
      />
    </div>
  );
}