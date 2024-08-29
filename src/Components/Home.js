import React from "react";
import About from "./About";

function Home(props) {
  console.log(props.username, props.Kohli);
  return (
    <div>
      <h1>
        HEY <span className="text-danger"> {props.username}</span> THIS IS
        HOMEPAGE
      </h1>
      <h2>
        AGE: {props.userage} {props.num}
      </h2>
      {props.Navbar === true ? (
        <h5 className="display-1 text-danger">HEY WELCOME</h5>
      ) : (
        "Not Found"
      )}
      <div className="container">
        <About prp1={props.username} add={props.address} Kohli1={props.Kohli} />
      </div>
    </div>
  );
}

export default Home;
