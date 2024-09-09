import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let redirect = useNavigate();
  let URL = "https://66dec3b5de4426916ee24a95.mockapi.io/logincredentials";
  const sendDatatoApi = (e) => {
    e.preventDefault();
    console.log(username, password);
    axios
      .post(URL, {
        name: username,
        pswd: password,
      })
      .then((res) => {
        console.log(res);
        alert("Successfully Created an Account");
        redirect("/read");
      })
      .catch(() => {
        console.error();
      });
  };

  return (
    <>
      <div className="container" onSubmit={sendDatatoApi}>
        <form action="" className="w-50">
          <label htmlFor="">Username</label>
          <input
            className="input form-control"
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="">Password</label>
          <input
            className="input form-control"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="btn btn-info mx-auto my-lg-2">
            Signup
          </button>
        </form>
      </div>
    </>
  );
}

export default Signup;
