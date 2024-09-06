// import React from "react";
// import Child2 from "./Child2";

// function Child1({ parentprop }) {
//   return (
//     <>
//       <Child2 child1prop={parentprop} />
//     </>
//   );
// }

// export default Child1;

import React from "react";
import Child2 from "./Child2";

function Child1() {
  return (
    <>
      <Child2 />
    </>
  );
}

export default Child1;
