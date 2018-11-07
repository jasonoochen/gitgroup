import React, { Component } from "react";

class Tabs extends Component {
  state = {};
  render() {
    return (
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
    );
  }
}

export default Tabs;
