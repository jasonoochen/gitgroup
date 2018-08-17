import React, { Component } from "react";
import { Link } from "react-router-dom";

class GithubSignin extends Component {
  state = {};

  render() {
    const githubAuthUrl = "https://github.com/login/oauth/authorize";
    const clientId = "e823af2ff3250e3b966f";
    const scope = "user%20repo";
    return (
      <i
        className="fab fa-github fa-lg clickable"
        onClick={() => {
          window.location = `${githubAuthUrl}?client_id=${clientId}&scope=${scope}`;
        }}
      />
    );
  }
}

export default GithubSignin;
