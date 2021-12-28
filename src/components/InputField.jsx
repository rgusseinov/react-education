import React from "react";

const InputField = ({ text, handleInput, handleSubmit }) => {
  return (
    <label>
      <input
        value={text}
        onChange={(evt) => handleInput(evt.target.value)}
      />
      <button onClick={handleSubmit}>Add Todo</button>
    </label>
  )
}

export default InputField;