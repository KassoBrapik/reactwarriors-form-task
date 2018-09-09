import React, { Component } from "react";

export default class AvatarStep extends Component {
  render() {
    console.log(this.props.avatar);
    return (
      <div>
        <img src={this.props.avatar} />
        <div className="form-group">
          <label htmlFor="avatar">Avatar</label>
          <input
            type="file"
            className="form-control-file"
            id="avatar"
            name="avatar"
            onChange={this.props.onChangeAvatar}
          />
        </div>
      </div>
    );
  }
}
