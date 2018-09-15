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
            value={this.props.values.firstName}
            placeholder="Enter First Name"
            onChange={this.props.handleChangeValue}
          />
          {this.props.errors ? (
            <div className="invalid-feedback">
              {this.props.errors.firstName}
            </div>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={this.props.values.lastName}
            placeholder="Enter Last Name"
            onChange={this.props.handleChangeValue}
          />
          {this.props.errors ? (
            <div className="invalid-feedback">{this.props.errors.lastName}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={this.props.values.password}
            placeholder="Password"
            onChange={this.props.handleChangeValue}
          />
          {this.props.errors ? (
            <div className="invalid-feedback">{this.props.errors.password}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="repeatPassword">Repeat password</label>
          <input
            type="password"
            className="form-control"
            id="repeatPassword"
            name="repeatPassword"
            value={this.props.values.repeatPassword}
            placeholder="Repeat password"
            onChange={this.props.handleChangeValue}
          />
          {this.props.errors ? (
            <div className="invalid-feedback">
              {this.props.errors.repeatPassword}
            </div>
          ) : null}
        </div>
        {/* gender check block */}
        <div>
          Gender
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="male"
              value="male"
              onChange={this.props.handleChangeValue}
              checked={this.props.values.gender === "male"}
            />
            <label className="form-check-label" htmlFor="male">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="female"
              value="female"
              onChange={this.props.handleChangeValue}
              checked={this.props.values.gender === "female"}
            />
            <label className="form-check-label" htmlFor="female">
              Female
            </label>
          </div>
        </div>
        {this.props.errors ? (
          <div className="invalid-feedback">{this.props.errors.gender}</div>
        ) : null}
      </div>
    );
  }
}
