import React, { Component } from "react";

export default class BasicStep extends Component {
  render() {
    // console.log("properties into BasicStep", this.props);
    return (
      <div>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={this.props.firstName}
            placeholder="Enter First Name"
            onChange={this.props.onChangeValue}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={this.props.lastName}
            placeholder="Enter Last Name"
            onChange={this.props.onChangeValue}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={this.props.password}
            placeholder="Password"
            onChange={this.props.onChangeValue}
          />
        </div>
        <div className="form-group">
          <label htmlFor="repeatPassword">Repeat password</label>
          <input
            type="password"
            className="form-control"
            id="repeatPassword"
            name="repeatPassword"
            value={this.props.repeatPassword}
            placeholder="Repeat password"
            onChange={this.props.onChangeValue}
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
          />
          <label className="form-check-label" htmlFor="male">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="female"
            id="female"
          />
          <label className="form-check-label" htmlFor="female">
            Female
          </label>
        </div>
      </div>
    );
  }
}
