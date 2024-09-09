import React, { useCallback } from "react";
import { useState } from "react";
import Child from "./Child";

function Back() {
  const [count, setCount] = useState(1);
  //   function Shyam() {}
  const Shyam = useCallback(() => {}, []);
  return (
    <>
      <Child pp={Shyam} />
      <h1>{count}</h1>
      <button className="btn btn-success" onClick={() => setCount(count + 1)}>
        Add
      </button>
    </>
  );
}

export default Back;
