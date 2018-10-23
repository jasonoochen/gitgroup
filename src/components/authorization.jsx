import React, { Component } from "react";
import Parse from "html-react-parser";

class Authorization extends Component {
  state = {};
  render() {
    const { content } = this.props;
    return Parse(content);
  }
}

export default Authorization;
