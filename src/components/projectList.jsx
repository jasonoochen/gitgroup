import React, { Component } from "react";

class ProjectList extends Component {
  state = {
    projects: []
  };

  search = () => {};

  render() {
    const { user } = this.props;
    return (
      <React.Fragment>
        <nav className="panel">
          <p className="panel-heading">projects</p>
          <div className="panel-block">
            <div className="control has-icons-left">
              <input
                className="input is-small"
                type="text"
                placeholder="search"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-search" aria-hidden="true" />
              </span>
            </div>
          </div>
          {user &&
            user.projects.map(project => (
              <a className="panel-block is-active" key={project.id}>
                <span className="panel-icon">
                  <i className="fas fa-project-diagram" aria-hidden="true" />
                </span>
                {project.name}
              </a>
            ))}
          <div className="panel-block">
            <button className="button is-link is-outlined is-fullwidth">
              New Project
            </button>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default ProjectList;
