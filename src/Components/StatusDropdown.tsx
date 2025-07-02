import React, { useState, useRef, useEffect } from "react";
import "../Styles/StatusDropdown.css";

type StatusItem = {
  label: string;
  color: string;
  hover: string;
};

const statuses: StatusItem[] = [
  { label: "Completed", color: "#7AC14D", hover: "#5dac2b" },
  { label: "In Progress", color: "#B3D99B", hover: "#a1cd82" },
  { label: "On Hold", color: "#ECDE7C", hover: "#e5d44b" },
];

const StatusDropdown: React.FC = () => {
  const [selected, setSelected] = useState<StatusItem | null>(null);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  const handleSelect = (status: StatusItem) => {
    setSelected(status);
    setOpen(false);
  };

  return (
    <div className="mb-4" data-testid="status-dropdown-root">
      <label className="form-label fw-bold" data-testid="status-dropdown-label">Status</label>
      <div className="dropdown" ref={dropdownRef} data-testid="status-dropdown-wrapper">
        <button
          className="btn btn-light border dropdown-toggle w-100 text-start d-flex align-items-center"
          type="button"
          onClick={() => setOpen(!open)}
          data-testid="status-dropdown-toggle"
        >
          {selected ? (
            <>
              <span
                className="me-2 rounded-circle"
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: selected.color,
                  display: "inline-block",
                }}
                data-testid={`status-dropdown-selected-color`}
              ></span>
              <span data-testid="status-dropdown-selected-label">{selected.label}</span>
            </>
          ) : (
            <span className="text-muted" data-testid="status-dropdown-placeholder">
              Select one
            </span>
          )}
        </button>
        {open && (
          <ul className="dropdown-menu w-100 show" data-testid="status-dropdown-menu">
            {statuses.map((status) => (
              <li
                key={status.label}
                className={`dropdown-item d-flex align-items-center ${
                  selected?.label === status.label ? "active text-white" : ""
                }`}
                style={
                  selected?.label === status.label
                    ? { backgroundColor: status.color }
                    : { backgroundColor: "#fff" }
                }
                data-testid={`status-dropdown-option-${status.label.replace(/\s/g, "-")}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelect(status);
                }}
                onMouseEnter={(e) => {
                  if (selected?.label !== status.label) {
                    (e.currentTarget as HTMLLIElement).style.backgroundColor =
                      status.hover;
                  }
                }}
                onMouseLeave={(e) => {
                  if (selected?.label !== status.label) {
                    (e.currentTarget as HTMLLIElement).style.backgroundColor =
                      "#fff";
                  }
                }}
              >
                <span
                  className="me-2 rounded-circle"
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: status.color,
                    opacity: selected?.label === status.label ? 1 : 0.7,
                  }}
                  data-testid={`status-dropdown-option-color-${status.label.replace(/\s/g, "-")}`}
                ></span>
                {status.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default StatusDropdown;