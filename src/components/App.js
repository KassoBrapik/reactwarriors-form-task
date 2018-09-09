import React from "react";
import BasicStep from "./Basic/BasicStep";
import ContactsStep from "./Contacts/ContactsStep";
import AvatarStep from "./Avatar/AvatarStep";
import FinalStep from "./Final/FinalStep";
// import classNames from "classnames";

export default class App extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    password: "",
    repeatPassword: "",
    gender: "",
    email: "",
    mobile: "",
    country: 1,
    city: "",
    avatar: null,
    isActiveStep: 0
  };

  onChangeValue = event => {
    // console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onChangeAvatar = event => {
    const reader = new FileReader();
    reader.onload = event => {
      this.setState({
        avatar: event.target.result
      });
      // console.log(event.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);
    // console.log(event.target.files[0]);
  };

  handleNextStep = () => {
    this.setState(prevState => ({ isActiveStep: prevState.isActiveStep + 1 }));
  };
  handlePrevStep = () => {
    this.setState(prevState => ({ isActiveStep: prevState.isActiveStep - 1 }));
  };

  render() {
    // console.log("App state", this.state);

    return (
      <div className="form-container card shadow-sm">
        <form className="form card-body">
          {/* --------------Nav block-------------- */}
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
          {/* --------------firstName, LastName, password, repeat password block-------------- */}
          {this.state.isActiveStep === 0 ? (
            <BasicStep
              {...this.state}
              onChangeValue={this.onChangeValue}
              onChangeAgree={this.onChangeAgree}
            />
          ) : null}
          {/* ---------------email, mobile, country, city block---------------------- */}
          {this.state.isActiveStep === 1 ? (
            <ContactsStep
              {...this.state}
              onChangeValue={this.onChangeValue}
              getOptions={this.getOptions}
            />
          ) : null}
          {/* ----------------Avatar block---------------------- */}
          {this.state.isActiveStep === 2 ? (
            <AvatarStep {...this.state} onChangeAvatar={this.onChangeAvatar} />
          ) : null}
          {/* ---------------Final block--------------------- */}
          {this.state.isActiveStep === 3 ? <FinalStep /> : null}
          {/* buttons block */}
          <div className="btn-group justify-content-center w-100">
            <button
              type="button"
              className="btn btn-secondary mr-3"
              disabled={this.state.isActiveStep === 0}
              onClick={this.handlePrevStep}
            >
              Prev
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={this.handleNextStep}
              disabled={this.state.isActiveStep === 3}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    );
  }
}
