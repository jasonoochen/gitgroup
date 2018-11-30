import React, { Component } from "react";

class Tabs extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="tabs is-centered is-marginless">
          <ul>
            <li className="is-active">
              <a>Overview</a>
            </li>
            <li>
              <a>KanBan</a>
            </li>
            <li>
              <a>Chart</a>
            </li>
            <li>
              <a>Documents</a>
            </li>
          </ul>
        </div>
        <div className="m-b-3" />
      </React.Fragment>
    );
  }
}

export default Tabs;
