import React, { memo } from "react";

function Child({ pp }) {
  console.log("******************");
  return <div></div>;
}

export default memo(Child);
