import React, { Component } from "react";
import ProjectList from "./projectList";
import CardsOverview from "./cardsOverview";
import StatusOverview from "./statusOverview";

class Overview extends Component {
  state = {};
  render() {
    const { user } = this.props;
    return (
      <div className="columns is-1 is-paddingless">
        <div className="column is-2">
          <ProjectList user={user} />
        </div>
        <div className="column">
          <StatusOverview />
        </div>
        <div className="column is-4">
          <CardsOverview />
        </div>
      </div>
    );
  }
}

export default Overview;
