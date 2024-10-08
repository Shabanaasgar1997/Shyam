import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Read() {
  const [records, setRecords] = useState([]);
  let URL = "https://66dec3b5de4426916ee24a95.mockapi.io/logincredentials";

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        console.log(res.data);
        setRecords(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const DeleteTheRecord = (itemid) => {
    console.log(itemid);
    if (window.confirm("r u sure u want to delete the record")) {
      axios
        .delete(
          `https://66dec3b5de4426916ee24a95.mockapi.io/logincredentials/${itemid}`
        )
        .then((res) => {
          alert("Deleted Successfully");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  const UpdateTheRecord = (id, uname, paswrd) => {
    console.log(id, uname, paswrd);

    localStorage.setItem("id", id);
    localStorage.setItem("name", uname);
    localStorage.setItem("pswd", paswrd);
  };
  return (
    <>
      <div className="container">
        <button className="btn btn-danger">
          <Link to="/">Singup</Link>
        </button>
      </div>
      <div className="container">
        <table className="table">
          <tr>
            <th>ID</th>
            <th>USERNAME</th>
            <th>PASSWORD</th>
            <th>OPERATIONS</th>
          </tr>
          {records.map((item) => {
            return (
              <>
                <div className="card">
                  <div className="card-body">
                    <img src={item.image} alt="" className="card-img" />
                    <div className="card-title">{item.name}</div>
                    <div className="card-text">{item.pswd}</div>
                  </div>
                  <div className="card-footer"></div>
                </div>

                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.pswd}</td>
                  <td>
                    <button
                      className="btn bg-danger"
                      onClick={() => DeleteTheRecord(item.id)}
                    >
                      Delete
                    </button>
                    <Link to="/update">
                      <button
                        className="btn bg-success"
                        onClick={() =>
                          UpdateTheRecord(item.id, item.name, item.pswd)
                        }
                      >
                        Update
                      </button>
                    </Link>
                  </td>
                </tr>
              </>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default Read;
