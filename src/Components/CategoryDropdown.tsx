import React, { useState } from 'react';
import "../Styles/CategoryDropdown.css"

type Category = {
  name: string;
  color: 'success' | 'warning' | 'purple';
};

const options: Category[] = [
  { name: 'Sidewalk Shed', color: 'success' }, 
  { name: 'Scaffold', color: 'warning' },      
  { name: 'Shoring', color: 'purple' },        
];

const CategoryDropDown: React.FC = () => {
  const [selected, setSelected] = useState<Category[]>([]);

  const toggleSelect = (item: Category) => {
    if (selected.find((s) => s.name === item.name)) {
      setSelected(selected.filter((s) => s.name !== item.name));
    } else {
      setSelected([...selected, item]);
    }
  };

  const removeItem = (name: string) => {
    setSelected(selected.filter((s) => s.name !== name));
  };

  return (
    <div className="mb-4">
      <label className="form-label fw-bold">Category Included</label>
      <div className="dropdown">
        <button
          className="btn btn-light border dropdown-toggle w-100 text-start"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {selected.length === 0 ? 'Select' : 'Select'}
        </button>
        <ul className="dropdown-menu w-100">
          {options.map((option) => (
            <li
              key={option.name}
              className={`dropdown-item d-flex justify-content-between align-items-center ${
                selected.find((s) => s.name === option.name) ? 'active' : ''
              } hover-${option.color}`}
              onClick={() => toggleSelect(option)}
              style={{ cursor: 'pointer' }}
            >
              {option.name}
              {selected.find((s) => s.name === option.name) && (
                <span className="ms-2 text-success">&#10003;</span> 
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-2 d-flex flex-wrap gap-2">
        {selected.map((item) => (
          <span
            key={item.name}
            data-testid={`selected-badge-${item.name.replace(/\s+/g, '-')}`}
            className={`badge bg-${item.color} position-relative pe-4`}
          >
            {item.name}
            <button
              type="button"
              className="btn-close btn-close-white position-absolute end-0 top-50 translate-middle-y me-1"
              onClick={() => removeItem(item.name)}
              style={{ fontSize: '0.6rem' }}
            ></button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default CategoryDropDown;
