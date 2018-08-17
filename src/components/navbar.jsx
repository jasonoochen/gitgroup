import React from "react";
import { Link } from "react-router-dom";
import SearchBox from "./searchBox";
import GithubSignin from "./githubSignin";

const Navbar = () => {
  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
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
          <div className="navbar-item has-dropdown is-hoverable">
            <Link to="/" className="navbar-link">
              <i className="fas fa-user" />
            </Link>
            <div className="navbar-dropdown is-boxed">
              <a className="navbar-item">Signed in as XXX</a>
              <hr className="navbar-divider" />
              <Link to="/profile" className="navbar-item">
                Your profile
              </Link>
              <a className="navbar-item">Your projects</a>
              <hr className="navbar-divider" />
              <a className="navbar-item">Help</a>
              <a className="navbar-item">Settings</a>
              <a className="navbar-item">Log out</a>
            </div>
          </div>
          <div className="navbar-item">
            <GithubSignin />
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
};

export default Navbar;
