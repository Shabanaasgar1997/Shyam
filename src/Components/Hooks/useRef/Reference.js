import React, { useRef } from "react";

function Reference() {
  const uname = useRef();
  const image = useRef();

  const ChangeColor = () => {
    console.log(uname.current);
    uname.current.style = "background:red;color:white;border:2px solid green";
  };

  const ChangeWidth = () => {
    console.log(image.current);
    image.current.style = "width:150px";
  };
  return (
    <>
      <div className="container">
        <input
          type="text"
          className="form-control w-50 mx-auto"
          ref={uname}
          onChange={ChangeColor}
        />
        <img
          src="https://images.pexels.com/photos/663487/pexels-photo-663487.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="img-fluid"
          onClick={ChangeWidth}
          ref={image}
        />
      </div>
    </>
  );
}

export default Reference;
