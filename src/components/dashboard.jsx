import React, { Component } from "react";
import queryString from "query-string";
import { getViewer } from "../services/githubService";
import Panel from "./panel";

class Dashboard extends Component {
  state = {};

  async componentDidMount() {
    // try {
    //   const querys = queryString.parse(this.props.location.search);
    //   const gitHubAccessToken = querys.access_token;
    //   const viewer = await getViewer(gitHubAccessToken);
    //   console.log(viewer);
    // } catch (error) {
    //   console.log(error);
    // }
  }

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
