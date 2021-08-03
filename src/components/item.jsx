import React from 'react';

function Item({ onStatusChange, onClickStatus }){

  return (
    <div style={{ fontSize: "22px" }}>
      <label>
        <input
          type="checkbox"
          name="free"
          onChange={(e) => onStatusChange(e)}
        />
        <span> Free option </span>
      </label>

      <label>
        <input
          type="checkbox"
          name="pro"
          onChange={(e) => onStatusChange(e)}
        />
        <span> Pro option </span>
      </label>

      <button onClick={(e) => onClickStatus(e)}> Click me </button>
    </div>
  )
};

export default Item;
