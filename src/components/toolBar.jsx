import React, { Component } from "react";

class ToolBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="columns">
          <div className="column is-6">
            <nav className="breadcrumb is-small" aria-label="breadcrumbs">
              <ul>
                <li>
                  <a href="#">Bulma</a>
                </li>
                <li>
                  <a href="#">Documentation</a>
                </li>
                <li>
                  <a href="#">Components</a>
                </li>
                <li className="is-active">
                  <a href="#" aria-current="page">
                    Breadcrumb
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="column" />
        </div>
      </React.Fragment>
    );
  }
}

export default ToolBar;
