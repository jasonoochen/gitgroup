import React from "react";
import Form from "./common/form";
import { register } from "./../services/userService";
const Joi = require("joi");

class RegisterForm extends Form {
  state = {
    formData: {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: ""
    },
    errors: {}
  };

  validate() {
    const schema = {
      name: Joi.string()
        .min(5)
        .max(20)
        .required()
        .label("Name"),
      email: Joi.string()
        .email()
        .required()
        .label("Email"),
      password: Joi.string()
        .min(3)
        .max(15)
        .required()
        .label("Password"),
      passwordConfirmation: Joi.any()
        .valid(Joi.ref("password"))
        .required()
        .options({ language: { any: { allowOnly: "must match password" } } })
    };
    return Joi.validate(this.state.formData, schema, { abortEarly: false });
  }

  handleSubmit = async e => {
    const result = this.validate();
    const errors = { ...this.state.errors };
    if (!result.error) {
      try {
        const response = await register(this.state.formData);
        localStorage.setItem("token", response.headers["x-auth-token"]);
        window.location = "/";
      } catch (ex) {
        if (ex.response && ex.response.status === 400) {
          const errors = { ...this.state.errors };
          errors.name = ex.response.data;
          this.setState({ errors });
        }
      }
      return;
    }

    const errDetails = result.error.details;
    for (let errDetail of errDetails) {
      errors[errDetail.path[0]] = errDetail.message;
    }
    this.setState({ errors });
  };

  render() {
    const usericon = <i className="fas fa-user" />;
    const emailicon = <i className="fas fa-envelope" />;
    const pwicon = <i className="fas fa-lock" />;
    return (
      <React.Fragment>
        {this.renderInput("text", "Name", "name", usericon)}
        {this.renderInput("email", "Email", "email", emailicon)}
        {this.renderInput("password", "Password", "password", pwicon)}
        {this.renderInput(
          "password",
          "Password Confirmation",
          "passwordConfirmation",
          pwicon
        )}
        <div className="field">
          <p className="control">
            <button className="button is-success" onClick={this.handleSubmit}>
              register
            </button>
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default RegisterForm;
