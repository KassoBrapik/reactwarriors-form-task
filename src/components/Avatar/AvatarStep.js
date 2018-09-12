import React, { Component } from "react";
import Avatar from "../../images/default-avatar.png";

export default class AvatarStep extends Component {
  styleImg = () => {
    if (this.props.avatar === null) {
      const imgAvatar = {
        width: "350px",
        height: "350px",
        backgroundImage: `url(${Avatar})`,
        backgroundRepeat: "no-repeat",
        margin: "auto",
        backgroundSize: "100%",
        backgroundPosition: `center, center`
      };
      return imgAvatar;
    } else {
      let a = this.props.avatar;
      const imgAvatar2 = {
        width: "350px",
        height: "350px",
        backgroundImage: `url(${a})`,
        margin: "auto",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: `center, center`
      };
      return imgAvatar2;
    }
  };

  render() {
    // console.log(this.styleImg());
    return (
      <div>
        {/* <img
          width="100%"
          src={this.props.avatar === null ? Avatar : this.props.avatar}
        /> */}
        <div className="avatar_pic mb-3" style={this.styleImg()} />
        <div className="custom-file">
          <label className="custom-file-label" htmlFor="avatar">
            Avatar
          </label>
          <input
            type="file"
            className="custom-file-input"
            id="avatar"
            name="avatar"
            onChange={this.props.onChangeAvatar}
          />
        </div>
      </div>
    );
  }
}
