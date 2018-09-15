import React, { Component } from "react";

export default class Pagination extends Component {
  render() {
    return (
      <div>
        <div className="btn-group justify-content-center w-100">
          <button
            type="button"
            className="btn btn-secondary mr-3"
            disabled={this.props.isActiveStep === 0}
            onClick={this.props.handlePrevStep}
          >
            Prev
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={this.props.handleNextStep}
            disabled={this.props.isActiveStep === 3}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
