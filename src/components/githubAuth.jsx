import React, { Component } from "react";
import { Auth } from "../services/authService";

class GithubAuth extends Component {
  state = {};

  handleAuth = () => {
    const auth = new Auth();
    auth.githubAuth();
  };

  render() {
    return (
      <i className="fab fa-github fa-lg clickable" onClick={this.handleAuth} />
    );
  }
}

export default GithubAuth;
