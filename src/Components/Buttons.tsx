import { FaPlus, FaTimes, FaCheck, FaArrowLeft } from "react-icons/fa";
import "../Styles/Buttons.css";

interface Buttons{
    onClick: () => void;
}


export function CreateButton({ onClick }:Buttons) {
  return (
    <button type="button" onClick={onClick} className="button button-create">
      <span className="button-label">Create</span>
      <span className="divider" />
      <FaPlus className="plus-icon" />
    </button>
  );
}

export function CancelButton({ onClick }: Buttons) {
  return (
    <button onClick={onClick} className="button button-cancel">
      <span className="button-label">Cancel Changes</span>
      <span className="divider" />
      <FaTimes className="cancel-icon" />
    </button>
  );
}

export function SaveButton({ onClick }: Buttons) {
  return (
    <button onClick={onClick} className="button button-save">
      <span className="button-label">Save Changes</span>
      <span className="divider" />
      <FaCheck className="save-icon" />
    </button>
  );
}

export function GoBackButton({ onClick }:Buttons) {
  return (
    <button onClick={onClick} className="button button-back">
      <span className="button-label">Go Back</span>
      <span className="divider" />
      <FaArrowLeft className="back-icon " />
    </button>
  );
}
