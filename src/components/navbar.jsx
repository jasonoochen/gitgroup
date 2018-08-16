import React from "react";
import { Link } from "react-router-dom";
import SearchBox from "./searchBox";

const Navbar = () => {
  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a
          className="navbar-item"
          onClick={() => {
            window.location = "/";
          }}
        >
          GitGroup
        </a>

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
            <a className="navbar-link" href="/documentation/overview/start/">
              <i className="fas fa-user" />
            </a>
            <div className="navbar-dropdown is-boxed">
              <a className="navbar-item">Signed in as XXX</a>
              <hr className="navbar-divider" />
              <a className="navbar-item">Your profile</a>
              <a className="navbar-item">Your projects</a>
              <hr className="navbar-divider" />
              <a className="navbar-item">Help</a>
              <a className="navbar-item">Settings</a>
              <a className="navbar-item">Log out</a>
            </div>
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
