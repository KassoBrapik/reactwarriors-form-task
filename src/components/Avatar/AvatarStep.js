import React, { Component } from "react";
import DefaultAvatar from "../../images/default-avatar.png";

export default class AvatarStep extends Component {
  render() {
    // console.log(this.styleImg());
    return (
      <div>
        {/* <img
          width="100%"
          src={this.props.avatar === null ? Avatar : this.props.avatar}
        /> */}
        <div
          className="avatar_preview mb-3"
          style={{
            backgroundImage: `url(${
              this.props.avatar ? this.props.avatar : DefaultAvatar
            })`
          }}
        />
        <div className="custom-file">
          <label className="custom-file-label" htmlFor="avatar">
            Avatar
          </label>
          <input
            type="file"
            className="custom-file-input"
            id="avatar"
            name="avatar"
            onChange={this.props.handleChangeAvatar}
          />
        </div>
      </div>
    );
  }
}
