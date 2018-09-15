import React from "react";
import BasicStep from "./Basic/BasicStep";
import ContactsStep from "./Contacts/ContactsStep";
import AvatarStep from "./Avatar/AvatarStep";
import FinalStep from "./Final/FinalStep";
import validate from "./Validate";
// import classNames from "classnames";

export default class App extends React.Component {
  state = {
    isActiveStep: 0,
    values: {
      firstName: "",
      lastName: "",
      password: "",
      repeatPassword: "",
      gender: "",
      email: "",
      mobile: "",
      country: 1,
      cities: "",
      avatar: null
    }
  };

  onChangeValue = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState(prevState => ({
      values: {
        ...prevState.values,
        [name]: value
      }
    }));
    // console.log("name", name);
    // console.log("value", value);
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
    const errorsForValidation = validate(
      this.state.values,
      this.state.isActiveStep
    );
    // console.log(errorsForValidation);

    if (Object.keys(errorsForValidation).length > 0) {
      this.setState(prevState => ({
        errors: errorsForValidation,
        isActiveStep: prevState.isActiveStep
      }));
    } else {
      this.setState(prevState => ({
        isActiveStep: prevState.isActiveStep + 1
      }));
    }
  };

  handlePrevStep = () => {
    this.setState(prevState => ({
      isActiveStep: prevState.isActiveStep - 1
    }));
  };

  render() {
    console.log("App state, values", this.state.values);
    return (
      <div className="form-container card shadow-sm">
        <form className="form card-body">
          {/* -------------------Nav block--------------------- */}
          <ul className="nav nav-tabs mb-3 mt-2 border-bottom-0 justify-content-center">
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
          {/* --------------firstName, LastName, password,---------
          ------------------repeat password block---------------- */}
          {this.state.isActiveStep === 0 ? (
            <BasicStep
              {...this.state}
              onChangeValue={this.onChangeValue}
              onChangeAgree={this.onChangeAgree}
            />
          ) : null}
          {/* ---------------email, mobile,------------------------ 
          -------------------country, city block----------------- */}
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
          {/* -----------------Final block---------------------- */}
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
