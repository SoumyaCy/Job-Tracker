import React from "react";

export const FormRow = ({ type, name, onChange, labelText, value }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText}
      </label>
      <input
        placeholder={name}
        type={type}
        className="form-input"
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
