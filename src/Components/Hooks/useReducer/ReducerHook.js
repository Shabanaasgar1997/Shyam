import React, { useReducer, useState } from "react";

function ReducerHook() {
  const [userAmount, setUserAmount] = useState(0);
  const initialState = 1;

  const reducer = (state, action) => {
    switch (action) {
      case "Deposit":
        return state + 1;

      case "WithDraw":
        return state >= 1 ? state - 1 : state;

      case "Reset":
        return 0;

      default:
        return state;
    }
  };

  const [amount, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <form action="">
        <input type="text" className="form-control" />
      </form>
      <button className="btn btn-danger" onClick={() => dispatch("WithDraw")}>
        Remove
      </button>

      <span>{amount}</span>

      <button className="btn btn-success" onClick={() => dispatch("Deposit")}>
        Add
      </button>

      <button className="btn btn-info" onClick={() => dispatch("Reset")}>
        Reset
      </button>
    </>
  );
}

export default ReducerHook;
