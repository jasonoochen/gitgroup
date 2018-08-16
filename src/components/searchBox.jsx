import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class SearchBox extends Component {
  state = {};

  search() {
    console.log(this.state.query);
    window.location = "/search-page";
  }

  render() {
    return (
      <div className="control has-icons-left">
        <input
          className="input is-rounded"
          type="text"
          placeholder="Search..."
          onChange={event => {
            this.setState({ query: event.target.value });
          }}
          onKeyPress={event => {
            if (event.key === "Enter") {
              this.search();
            }
          }}
        />
        <span className="icon is-left">
          <i className="fas fa-search" aria-hidden="true" />
        </span>
      </div>
    );
  }
}

export default SearchBox;
