import React, { Component } from "react";
import { Auth } from "../services/authService";

class GithubSignin extends Component {
  state = {};

  handleAuth = async () => {
    const auth = new Auth();
    const page = await auth.githubAuth();
    this.props.handleAuth(page.data);
  };

  render() {
    return (
      <i onClick={this.handleAuth} className="fab fa-github fa-lg clickable" />
    );
  }
}

export default GithubSignin;
