// import React from "react";

// function Child3({ child2prop }) {
//   return (
//     <>
//       <h1>hey this is child3 {child2prop} component</h1>
//     </>
//   );
// }

// export default Child3;

import React, { useContext } from "react";
import { data, data1 } from "./Parent";

function Child3() {
  const uname = useContext(data);
  const age = useContext(data1);
  console.log(uname);
  return (
    <>
      <h1>welcome to child3 {uname}</h1>
      <p>age {age}</p>
    </>
  );
}

export default Child3;
