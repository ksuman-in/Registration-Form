import React, { Component } from "react";
import "./App.scss";
import Input from "./component/Input";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {},
      errors: {},
      isSubmitted: false
    };
  }

  onChangeInput = e => {
    const { values } = this.state;
    values[e.target.name] = e.target.value;
    this.setState({
      values,
      errors: {}
    });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    if (this.validationForm()) {
      this.setState({ fields: {}, isSubmitted: true });
    }
  };

  validationForm = () => {
    const { values, errors } = this.state;
    let isValid = true;

    if (!values["firstName"]) {
      isValid = false;
      errors["firstName"] = "*Please enter your First name.";
    }

    if (!values["lastName"]) {
      isValid = false;
      errors["lastName"] = "*Please enter your Last name.";
    }

    if (typeof values["firstName"] !== "undefined") {
      if (!values["firstName"].match(/^[a-zA-Z ]*$/)) {
        isValid = false;
        errors["firstName"] = "*Please enter alphabet characters only.";
      }
    }

    if (typeof values["lastName"] !== "undefined") {
      if (!values["lastName"].match(/^[a-zA-Z ]*$/)) {
        isValid = false;
        errors["lastName"] = "*Please enter alphabet characters only.";
      }
    }

    if (!values["email"]) {
      isValid = false;
      errors["email"] = "*Please enter your email address.";
    }

    if (typeof values["email"] !== "undefined") {
      let pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(values["email"])) {
        isValid = false;
        errors["email"] = "*Please enter valid email address.";
      }
    }

    if (!values["password"]) {
      isValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof values["password"] !== "undefined") {
      let pattern = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/i);
      if (!pattern.test(values["password"])) {
        isValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }

    this.setState({
      errors
    });
    return isValid;
  };

  render() {
    const { errors, isSubmitted } = this.state;
    return (
      <div className="app">
        {!isSubmitted ? (
          <div>
            <h5>Get started today!</h5>
            <form className="form" onSubmit={this.handleSubmitForm}>
              <div className="input-group">
                <Input
                  labelName="First name"
                  name="firstName"
                  onChangeInput={this.onChangeInput}
                  error={errors.firstName}
                />
                <Input
                  labelName="Last name"
                  name="lastName"
                  onChangeInput={this.onChangeInput}
                  error={errors.lastName}
                />
                <Input
                  labelName="Email address"
                  name="email"
                  onChangeInput={this.onChangeInput}
                  error={errors.email}
                />
                <Input
                  labelName="Password"
                  name="password"
                  onChangeInput={this.onChangeInput}
                  error={errors.password}
                />
              </div>
              <button type="submit">
                Claim your free trial <span>&#9654;</span>
              </button>
              <p>
                You are agreeing to our{" "}
                <a
                  rel="noopener noreferrer"
                  href="https://ksuman.in"
                  target="_blank"
                >
                  Terms and Services
                </a>
              </p>
            </form>
          </div>
        ) : (
          <div className="form-submit">
            <h3>Thank You!</h3>
            <p>Your submission has been received.</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
