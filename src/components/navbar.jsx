import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchBox from "./searchBox";
import GithubSignin from "./githubSignin";
import Modal from "./modal";
import RegisterForm from "./registerForm";
import LoginForm from "./loginForm";

class Navbar extends Component {
  state = { isModalActive: false, isLogin: false };

  handleModal = () => {
    let { isModalActive } = this.state;

    isModalActive = !isModalActive;
    this.setState({ isModalActive });
  };

  handleLogout = () => {
    localStorage.removeItem("token");

    window.location = "/";
  };

  switchSignInUp = () => {
    let { isLogin } = this.state;

    isLogin = !isLogin;
    this.setState({ isLogin });
  };

  render() {
    const { isModalActive, isLogin } = this.state;
    const modalContent = (
      <React.Fragment>
        {!isLogin && <RegisterForm />}
        {isLogin && <LoginForm />}
        <a onClick={this.switchSignInUp}>
          {isLogin
            ? "I don't have an account, click here to register."
            : "I already have an account, click here to login."}
        </a>
      </React.Fragment>
    );

    return (
      <nav className="navbar is-dark" aria-label="main navigation">
        <div className="navbar-brand">
          <img
            className="clickable"
            src="./images/brand.png"
            alt="Bulma: a modern CSS framework based on Flexbox"
            onClick={() => {
              window.location = "/";
            }}
          />

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to={"/explore"}>
              Explore
            </Link>
            <Link className="navbar-item" to={"/document"}>
              Document
            </Link>
            {!this.props.user && (
              <React.Fragment>
                <a className="navbar-item" onClick={this.handleModal}>
                  Login/Register
                </a>
                <Modal
                  isActive={isModalActive}
                  handleModal={this.handleModal}
                  name={isLogin ? "Login" : "Register"}
                  content={modalContent}
                />
              </React.Fragment>
            )}
            {this.props.user && (
              <div className="navbar-item has-dropdown is-hoverable">
                <Link to="/" className="navbar-link">
                  <i className="fas fa-user" />
                </Link>
                <div className="navbar-dropdown is-boxed">
                  <a className="navbar-item">
                    Signed in as {this.props.user.name}
                  </a>
                  <hr className="navbar-divider" />
                  <Link to="/profile" className="navbar-item">
                    Your profile
                  </Link>
                  <a className="navbar-item">Your projects</a>
                  <hr className="navbar-divider" />
                  <a className="navbar-item">Help</a>
                  <a className="navbar-item">Settings</a>
                  <a className="navbar-item" onClick={this.handleLogout}>
                    Log out
                  </a>
                </div>
              </div>
            )}
            <div className="navbar-item">
              <GithubSignin handleAuth={this.props.handleAuth} />
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <SearchBox />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
