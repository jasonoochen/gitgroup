import React, { Component } from "react";
import { getGenres } from "../services/fakeGenreService";

class Panel extends Component {
  state = {
    genres: []
  };

  componentDidMount() {
    let genres = getGenres();
    genres = [{ _id: "", name: "all" }, ...genres];
    this.setState({ genres });
  }

  handleSelectGenre(genre) {
    this.setState({ selectedGenre: genre });
    console.log(this.state);
  }

  render() {
    return (
      <nav className="panel">
        <p className="panel-heading">projects</p>
        <div className="panel-block">
          <p className="control has-icons-left">
            <input
              className="input is-small is-rounded"
              type="text"
              placeholder="search"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-search" aria-hidden="true" />
            </span>
          </p>
        </div>
        <p className="panel-tabs">
          {this.state.genres.map(genre => (
            <a
              key={genre._id}
              onClick={() => this.handleSelectGenre(genre)}
              className={this.state.selectedGenre === genre ? "is-active" : ""}
            >
              {genre.name}
            </a>
          ))}
        </p>
        <a className="panel-block is-active">
          <span className="panel-icon">
            <i className="fas fa-book" aria-hidden="true" />
          </span>
          bulma
        </a>
        <a className="panel-block">
          <span className="panel-icon">
            <i className="fas fa-book" aria-hidden="true" />
          </span>
          marksheet
        </a>
        <a className="panel-block">
          <span className="panel-icon">
            <i className="fas fa-book" aria-hidden="true" />
          </span>
          minireset.css
        </a>
        <a className="panel-block">
          <span className="panel-icon">
            <i className="fas fa-book" aria-hidden="true" />
          </span>
          jgthms.github.io
        </a>
        <a className="panel-block">
          <span className="panel-icon">
            <i className="fas fa-code-branch" aria-hidden="true" />
          </span>
          daniellowtw/infboard
        </a>
        <a className="panel-block">
          <span className="panel-icon">
            <i className="fas fa-code-branch" aria-hidden="true" />
          </span>
          mojs
        </a>
        <label className="panel-block">
          <input type="checkbox" />
          remember me
        </label>
        <div className="panel-block">
          <button className="button is-link is-outlined is-fullwidth">
            reset all filters
          </button>
        </div>
      </nav>
    );
  }
}

export default Panel;
