import React from "react";
import "../Styles/StatusBadge.css"

export type StatusLabel = "Completed" | "On Hold" | "In Progress";

interface Props {
  label: StatusLabel;
}

const StatusBadge: React.FC<Props> = ({ label }) => {
  const getClassName = (label: StatusLabel) => {
    switch (label) {
      case "Completed":
        return "completed";
      case "On Hold":
        return "on-hold";
      case "In Progress":
        return "in-progress";
      default:
        return "";
    }
  };

  return (
    <span
      className={`status-badge ${getClassName(label)}`}
      data-testid={`status-badge-${label.replace(/\s/g, "-")}`}
    >
      {label}
    </span>
  );
};

export default StatusBadge;