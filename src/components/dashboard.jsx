import React, { Component } from "react";
import Panel from "./panel";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div className="columns">
        <div className="cloumns is-3">
          <Panel />
        </div>
        <div className="column">
          <h1>empty</h1>
        </div>
      </div>
    );
  }
}

export default Dashboard;
