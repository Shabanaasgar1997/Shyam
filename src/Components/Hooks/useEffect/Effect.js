import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Effect() {
  //   const [count, setCount] = useState(100);
  //   const [countRemove, setCountRemove] = useState(1);
  //   useEffect(() => {
  //     console.log("HEY WELCOME");
  //   }, [count]);
  const [data, setData] = useState([]);
  const URL = "https://fakestoreapi.com/products";
  async function fetchDetails() {
    const response = await fetch(URL);
    const result = await response.json();
    console.log(result);
    setData(result);
  }

  useEffect(() => {
    fetchDetails();
  }, []);

  const Card = styled.div`
    width: 15rem;
    height: 500px;
    overflow: scroll;
    margin: 5px;
  `;
  return (
    <>
      <h1>Effect concept</h1>
      <button className="btn btn-info" onClick={fetchDetails}>
        FETCH
      </button>
      <div className="row">
        {data.map((item) => {
          return (
            <>
              <div className="col-lg">
                <Card className="card">
                  <img src={item.image} alt="" className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                  </div>
                </Card>
              </div>
            </>
          );
        })}
      </div>

      {/* {countRemove}
      <button
        className="btn btn-danger"
        onClick={() => setCountRemove(countRemove - 1)}
      >
        -
      </button>
      <br />
      <span>{count}</span>
      <button
        className="btn btn-success"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button> */}
    </>
  );
}

export default Effect;
