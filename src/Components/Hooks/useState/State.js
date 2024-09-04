import React, { useState } from "react";

function State() {
  const [itemCount, setItemCount] = useState(1);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState(false);

  const AddItem = () => {
    setItemCount(itemCount + 1);
  };
  const RemoveItem = () => {
    // if (itemCount > 1) {
    //   setItemCount(itemCount - 1);
    // } else {
    //   setItemCount(itemCount);
    // }
    itemCount > 1 ? setItemCount(itemCount - 1) : setItemCount(itemCount);
  };

  const Validate = (e) => {
    e.preventDefault();
    console.log(username, password);

    if (errorMessage === true) {
      setErrorMessage(false);
    } else {
      setErrorMessage(true);
    }
  };
  return (
    <>
      <div className="container">
        <button className="btn btn-danger" onClick={RemoveItem}>
          -
        </button>
        <span>{itemCount}</span>
        {/* 150 */}
        <button className="btn btn-success" onClick={AddItem}>
          +
        </button>
      </div>

      <form action="" className="w-50 mx-auto" onSubmit={Validate}>
        <lable>UserName</lable>
        <input
          type="text"
          className="form-control"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />

        {/* {errorMessage === false ? (
          <h5>please enter details</h5>
        ) : (
          <h5>{username}</h5>
        )} */}
        {errorMessage === false && username.length >= 0 ? (
          <h1>{username}</h1>
        ) : (
          <h5>Please Enter Details</h5>
        )}

        <lable>Password</lable>
        {errorMessage === true ? (
          <input
            type="text"
            className="form-control border border-danger"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        ) : (
          <input
            type="text"
            className="form-control "
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        )}

        {errorMessage === false ? (
          <h1>{password}</h1>
        ) : (
          <h1>Please Enter password</h1>
        )}

        <button className="btn btn-primary mx-auto my-lg-2" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default State;

/// on mouseover image change
// form-validation
// password hide and show
// dark and light mode
// conditional components render
// blinkit
