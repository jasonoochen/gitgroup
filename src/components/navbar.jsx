import React from "react";

const Navbar = () => {
  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item">GitGroup</a>

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
          <a className="navbar-item">Explore</a>
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
            <div className="control">
              <div className="control has-icons-left">
                <input
                  className="input is-rounded"
                  type="text"
                  placeholder="Search..."
                />
                <span className="icon is-left">
                  <i className="fas fa-search" aria-hidden="true" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
