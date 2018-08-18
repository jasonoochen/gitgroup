import React, { Component } from "react";

/**
 * @prop {boolean} isActive - To indicate the modal is open or close.
 * @prop {function} handleModal - To control the modal is open or close.
 * @prop {string} name - Name of the modal
 * @prop {object} content - The content of the modal
     
 }}
 */
class Modal extends Component {
  state = {};

  handleModal = () => {
    this.props.handleModal();
  };

  render() {
    const { isActive, name, content } = this.props;
    return (
      <div className={`modal ${isActive ? "is-active" : ""}`}>
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{name}</p>
            <button
              className="delete"
              aria-label="close"
              onClick={this.handleModal}
            />
          </header>
          <section className="modal-card-body">{content}</section>
        </div>
      </div>
    );
  }
}

export default Modal;
