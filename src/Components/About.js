import React from "react";

function About({ prp1, add, Kohli1 }) {
  return (
    <>
      <h1>HEY THIS {prp1}ABOUT PAGE</h1>
      <h6>{add}</h6>
      <button className="btn btn-primary" onClick={Kohli1}>
        Click
      </button>
    </>
  );
}

export default About;
