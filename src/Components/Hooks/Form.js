import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  return (
    <>
      <form className="w-50 mx-auto">
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>{name}</p>
        <p>{name}</p>
        <p>{name}</p>

        <button className="btn btn-primary" type="button">
          Click
        </button>
      </form>
    </>
  );
}

export default Form;
