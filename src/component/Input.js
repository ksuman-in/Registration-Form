import React from "react";

export default props => {
  const { labelName, name, onChangeInput, error } = props;
  return (
    <div className="input-content">
      <label htmlFor={name}>{labelName}</label>
      <input type="text" name={name} onChange={onChangeInput} />
      <p>{error}</p>
    </div>
  );
};
