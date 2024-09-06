import React, { useMemo, useState } from "react";

function Memoization() {
  const [count, setCount] = useState(100);

  const Add = () => {
    setCount(count + 1);
  };

  const Remove = () => {
    setCount(count - 1);
  };
  const shyam = useMemo(() => {
    console.log("**********welcome***************");
  }, []);
  return (
    <>
      <h1> {count}</h1>
      {shyam}
      <div className="container">
        <button className="btn btn-danger" onClick={Remove}>
          -
        </button>
      </div>
      <div className="container">
        <button className="btn btn-success" onClick={Add}>
          +
        </button>
      </div>
    </>
  );
}

export default Memoization;
