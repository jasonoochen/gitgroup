import React from "react";

const Navbar = () => {
  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
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

        <div className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">Explore</a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" href="/documentation/overview/start/">
                Docs
              </a>
              <div className="navbar-dropdown is-boxed">
                <a
                  className="navbar-item"
                  href="/documentation/overview/start/"
                >
                  Overview
                </a>
                <hr className="navbar-divider" />
                <a
                  className="navbar-item is-active"
                  href="https://bulma.io/documentation/components/breadcrumb/"
                >
                  Components
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
