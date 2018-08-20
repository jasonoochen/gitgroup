import React, { Component } from "react";

class Form extends Component {
  state = { formData: {}, errors: {} };

  handleChange = e => {
    const { formData } = this.state;
    formData[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ formData });
  };

  /**
   * @argument {string} type - type of the input
   * @argument {string} placeholder - input placeholder
   * @argument {string} inputName - input name
   * @argument {object} formDataObject - form data object
   * @argument {object} errorsObject
   * @argument {function} handleChange
   * @argument {object} icon
   */
  renderInput(type, placeholder, inputName, icon) {
    const { formData, errors } = this.state;
    return (
      <div className="field">
        <div className="control is-expanded has-icons-left">
          <input
            className="input"
            type={type}
            placeholder={placeholder}
            name={inputName}
            value={formData[inputName]}
            onChange={this.handleChange}
          />
          <span className="icon is-small is-left">{icon}</span>
          {errors[inputName] && (
            <p className="help is-danger">{errors[inputName]}</p>
          )}
        </div>
      </div>
    );
  }
  render() {
    return null;
  }
}

export default Form;
