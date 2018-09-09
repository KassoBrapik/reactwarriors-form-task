import React, { Component } from "react";

export default class ContactsStep extends Component {
  render() {
    return (
      <div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            value={this.props.email}
            placeholder="Enter your email"
            onChange={this.props.onChangeValue}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile</label>
          <input
            type="text"
            className="form-control"
            id="mobile"
            name="mobile"
            value={this.props.mobile}
            placeholder="Enter number mobile"
            onChange={this.props.onChangeValue}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Country</label>
          <select>
            <option>1</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="">City</label>
          <select>
            <option>1</option>
          </select>
        </div>
      </div>
    );
  }
}
