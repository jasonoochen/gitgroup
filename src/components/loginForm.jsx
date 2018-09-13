import React from "react";
import Form from "./common/form";
import { login } from "./../services/authService";
import Joi from "joi-browser";

class LoginForm extends Form {
  state = {
    formData: {
      email: "",
      password: ""
    },
    errors: {}
  };

  validate() {
    const schema = {
      email: Joi.string()
        .email()
        .required()
        .label("Email"),
      password: Joi.string()
        .min(3)
        .max(15)
        .required()
        .label("Password")
    };
    return Joi.validate(this.state.formData, schema, { abortEarly: false });
  }

  handleSubmit = async e => {
    const result = this.validate();
    const errors = { ...this.state.errors };
    const { email, password } = this.state.formData;
    if (!result.error) {
      try {
        const { data: jwt } = await login(email, password);
        localStorage.setItem("token", jwt);
        window.location = "/";
      } catch (ex) {
        if (ex.response && ex.response.status === 400) {
          const errors = { ...this.state.errors };
          errors.password = ex.response.data;
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
    const emailicon = <i className="fas fa-envelope" />;
    const pwicon = <i className="fas fa-lock" />;
    return (
      <React.Fragment>
        {this.renderInput("email", "Email", "email", emailicon)}
        {this.renderInput("password", "Password", "password", pwicon)}
        <div className="field">
          <p className="control">
            <button className="button is-success" onClick={this.handleSubmit}>
              Login
            </button>
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginForm;
