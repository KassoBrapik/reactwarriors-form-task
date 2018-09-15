import React from "react";
import Steps from "./Steps/Steps";
import BasicStep from "./Basic/BasicStep";
import ContactsStep from "./Contacts/ContactsStep";
import AvatarStep from "./Avatar/AvatarStep";
import FinalStep from "./Final/FinalStep";
import validate from "./Validate";
// import classNames from "classnames";

export default class App extends React.Component {
  state = {
    isActiveStep: 0,
    steps: [
      {
        name: "Basic",
        isActive: true,
        isCompleted: false
      },
      {
        name: "Contacts",
        isActive: false,
        isCompleted: false
      },
      {
        name: "Avatar",
        isActive: false,
        isCompleted: false
      },
      {
        name: "Finish",
        isActive: false,
        isCompleted: false
      }
    ],
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
    },
    error: {}
  };

  handleChangeValue = event => {
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

  handleChangeAvatar = event => {
    const reader = new FileReader();
    reader.onload = event => {
      // console.log(event.target)
      this.setState(prevState => ({
        values: {
          ...prevState.values,
          avatar: event.target.result
        }
      }));
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
    console.log(errorsForValidation);

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
    // console.log("App state, values", this.state.values);

    return (
      <div className="form-container card shadow-sm">
        <form className="form card-body">
          {/* -------------------Nav block--------------------- */}
          <Steps {...this.state.steps} />
          {/* --------------firstName, LastName, password,---------
          ------------------repeat password block---------------- */}
          {this.state.isActiveStep === 0 ? (
            <BasicStep
              values={this.state.values}
              errors={this.state.errors}
              handleChangeValue={this.handleChangeValue}
            />
          ) : null}
          {/* ---------------email, mobile,------------------------ 
          -------------------country, city block----------------- */}
          {this.state.isActiveStep === 1 ? (
            <ContactsStep
              {...this.state.values}
              handleChangeValue={this.handleChangeValue}
              getOptions={this.getOptions}
            />
          ) : null}
          {/* ----------------Avatar block---------------------- */}
          {this.state.isActiveStep === 2 ? (
            <AvatarStep
              {...this.state.values}
              handleChangeAvatar={this.handleChangeAvatar}
            />
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
