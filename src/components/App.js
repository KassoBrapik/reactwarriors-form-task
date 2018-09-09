import React from "react";

export default class App extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    password: "",
    repeatPassword: "",
    gender: ""
  };

  onChangeValue = event => {
    // console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    console.log(this.state);

    return (
      <div className="form-container card shadow-sm">
        <form className="form card-body">
          <ul className="nav nav-tabs mb-5 mt-2 border-bottom-0 justify-content-center">
            <li className="nav-item mr-2">
              <a className="nav-link rounded">Basic</a>
            </li>
            <li className="nav-item mr-2">
              <a className="nav-link rounded">Contacts</a>
            </li>
            <li className="nav-item mr-2">
              <a className="nav-link rounded">Avatar</a>
            </li>
            <li className="nav-item mr-2">
              <a className="nav-link rounded">Finish</a>
            </li>
          </ul>
          {/* email, password, repeat password block */}
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={this.state.firstName}
              placeholder="Enter First Name"
              onChange={this.onChangeValue}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={this.state.lastName}
              placeholder="Enter Last Name"
              onChange={this.onChangeValue}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={this.state.password}
              placeholder="Password"
              onChange={this.onChangeValue}
            />
          </div>
          <div className="form-group">
            <label htmlFor="repeatPassword">Repeat password</label>
            <input
              type="password"
              className="form-control"
              id="repeatPassword"
              name="repeatPassword"
              value={this.state.repeatPassword}
              placeholder="Repeat password"
              onChange={this.onChangeValue}
            />
          </div>
          {/* gender check block */}
          <div>Gender</div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="male"
              id="male"
              value="option1"
              checked
            />
            <label className="form-check-label" for="male">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="female"
              id="female"
              value="option2"
            />
            <label className="form-check-label" for="female">
              Female
            </label>
          </div>
          <div className="btn-group justify-content-center w-100" role="group">
            <button type="button" className="btn btn-secondary mr-3">
              Prev
            </button>
            <button type="button" className="btn btn-secondary">
              Next
            </button>
          </div>
        </form>
      </div>
    );
  }
}
