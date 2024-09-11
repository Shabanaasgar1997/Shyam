import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Update() {
  const [id, setID] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    setID(localStorage.getItem("id")); //3
    setUsername(localStorage.getItem("name")); //virat kohli
    setPassword(localStorage.getItem("pswd"));
  }, []);
  let URL = `https://66dec3b5de4426916ee24a95.mockapi.io/logincredentials/${id}`;
  console.log(id, username, password);

  const UpdateRecord = (e) => {
    e.preventDefault();
    axios
      .put(URL, {
        name: username,
        pswd: password,
      })
      .then((shayamsundar) => {
        console.log(shayamsundar);
        alert("Successfully Updated");
        navigate("/read");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <>
      <div className="container">
        <form action="" className="w-50" onSubmit={UpdateRecord}>
          <label htmlFor="">ID</label>
          <input
            className="input form-control"
            value={id}
            readOnly
            disabled
            onChange={(e) => setID(e.target.value)}
          />
          <label htmlFor="">Username</label>
          <input
            value={username}
            className="input form-control"
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="">Password</label>
          <input
            className="input form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="btn btn-info mx-auto my-lg-2">
            UPDATE
          </button>
        </form>
      </div>
    </>
  );
}

export default Update;
