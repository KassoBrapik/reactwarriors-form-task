import React, { Component } from "react";

export default class Steps extends Component {
  render() {
    // console.log(this.props);
    return (
      <ul className="nav nav-tabs mb-3 mt-2 border-bottom-0 justify-content-center">
        {this.props.steps.map((item, index) => {
          // console.log(item);
          return (
            <li key={index} className="nav-item mr-2">
              <a className="nav-link rounded">{item.name}</a>
            </li>
          );
        })}
      </ul>
    );
  }
}
