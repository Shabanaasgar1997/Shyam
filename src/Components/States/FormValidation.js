import React, { Component } from "react";

export default class FormValidation extends Component {
  state = {
    username: "",
    password: "",
    errorMessage: false,
  };
  render() {
    const Validate = (e) => {
      e.preventDefault();
      console.log(this.state.username, this.state.password);

      if (this.state.errorMessage === true) {
        this.setState({
          errorMessage: false,
        });
      } else {
        this.setState({
          errorMessage: true,
        });
      }
    };
    return (
      <>
        <div className="container">
          <form className="w-50 mx-auto" onSubmit={Validate}>
            <label htmlFor="">Username</label>
            <input
              type="text"
              className="form-control"
              value={this.state.username}
              onChange={(e) =>
                this.setState({
                  username: e.target.value,
                })
              }
            />
            {this.state.errorMessage === true &&
            this.state.username.length <= 0 ? (
              <p className="text-danger">Please Enter Valid Details</p>
            ) : (
              <p>{this.state.username}</p>
            )}
            {/* Dhoni */}
            <label htmlFor="">Password</label>
            <input
              type="text"
              className="form-control"
              value={this.state.password}
              onChange={(e) =>
                this.setState({
                  password: e.target.value,
                })
              }
            />
            {this.state.errorMessage === true &&
            this.state.password.length <= 0 ? (
              <p className="text-danger">Please Enter Valid Details</p>
            ) : (
              <p>{this.state.password}</p>
            )}
            <button
              className="btn btn-success my-lg-2 d-flex mx-auto"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>

        <table className="table">
          <tr>
            <th>UserName</th>
            <th>Password</th>
          </tr>

          <tr>
            <td>{this.state.username}</td>
            <td>{this.state.password}</td>
          </tr>
        </table>
      </>
    );
  }
}
