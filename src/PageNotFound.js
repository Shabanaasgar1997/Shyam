import React from "react";
import { useParams } from "react-router-dom";

function PageNotFound() {
  let x = useParams();
  console.log(x.id);
  return (
    <>
      <h1 className="display-1">OOPS ! {x.id} PAGE NOT FOUND</h1>
    </>
  );
}

export default PageNotFound;
