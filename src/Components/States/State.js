import React, { Component } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
class State extends Component {
  state = {
    itemCount: 1,
    itemPrice: 450,
    name: "Virat Kohli",
    image: "https://m.media-amazon.com/images/I/71h8NUTmBOL._SL1500_.jpg",
    yes: true,
  };

  render() {
    console.error();

    const AddItem = () => {
      this.setState({
        itemCount: this.state.itemCount + 1,
        itemPrice:
          this.state.itemCount >= 1
            ? this.state.itemPrice * this.state.itemCount
            : this.state.itemPrice,
        name: "Anushka",
      });
    };

    const RemoveItem = () => {
      this.setState({
        itemCount:
          this.state.itemCount >= 1
            ? this.state.itemCount - 1
            : this.state.itemCount,
      });
    };
    const Change = () => {
      //   alert("hey");
      this.setState({
        yes: this.state.yes === true ? false : true,
      });
    };

    const ChangePic = (src) => {
      this.setState({
        image: src,
      });
    };

    const DarkMode = () => {
      this.setState({
        yes: this.state.yes === true ? false : true,
      });
    };
    return (
      <>
        <h1>HEY WELCOME</h1>
        {this.state.yes === true ? (
          <style>
            {`*
        {
        background:black;
        color:white
        }
      `}
          </style>
        ) : (
          <style>
            {`
          
          *
          {

          background:white;
        color:black;
          }
          
          `}
          </style>
        )}

        <button className="btn btn-dark" onClick={DarkMode}>
          {this.state.yes === true ? "Dark" : "Light"}
        </button>
        <h1>HEY THIS IS STATES CONCEPT</h1>
        <div className="container">
          <button className="btn btn-danger" onClick={RemoveItem}>
            Remove
          </button>
          <span className="h6">{this.state.itemCount}</span>
          <button className="btn btn-success" onClick={AddItem}>
            Add
          </button>
          <h5>{this.state.itemPrice}</h5>
          <h5>{this.state.name}</h5>

          <div className="row">
            <div className="col-lg-6">
              <div className="">
                <img
                  src="https://m.media-amazon.com/images/I/71Ix8GkgJiL._SL1500_.jpg"
                  alt=""
                  className="w-25 img-fluid"
                  onMouseOver={() =>
                    ChangePic(
                      `https://m.media-amazon.com/images/I/71Ix8GkgJiL._SL1500_.jpg`
                    )
                  }
                />
              </div>
              <div className="">
                <img
                  src="https://m.media-amazon.com/images/I/71Ov3nhPXfL._SL1500_.jpg"
                  alt=""
                  className="w-25 img-fluid"
                  onMouseOver={() =>
                    ChangePic(
                      `https://m.media-amazon.com/images/I/71Ov3nhPXfL._SL1500_.jpg`
                    )
                  }
                />
              </div>
            </div>
            <div className="col-lg-6">
              <img src={this.state.image} className="w-25 img-fluid" alt="" />
            </div>
          </div>

          <div className="container mt-lg-2">
            <input
              className="form-control"
              type={this.state.yes === true ? "password" : "text"}
            />

            <span onClick={Change}>
              {this.state.yes === true ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
        </div>
      </>
    );
  }
}

export default State;
