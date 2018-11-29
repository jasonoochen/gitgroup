import React, { Component } from "react";
import { KanbanService } from "./../services/kanbanService";

class ToolBar extends Component {
  state = {
    kanbans: []
  };

  componentDidMount = async () => {
    if (window.location.pathname.match(/^\/kanban/)) {
      const kanbansData = await new KanbanService().getKanbansOfProject(
        window.location.pathname.split("/").pop()
      );
      const kanbans = kanbansData.data;
      if (kanbans && kanbans.length > 0)
        this.props.handleKanbanIdChanged(kanbans[0]._id);
      this.setState({ kanbans });
    }
  };

  handleKanbanIdChanged = e => {
    console.log(e.target.value);
    this.props.handleKanbanIdChanged(e.target.value);
  };

  kanbanToolBar = () => {
    const { kanbans } = this.state;
    return (
      <React.Fragment>
        <div className="column is-paddingless has-text-right">
          <div className="has-text-right">
            <a
              className="button is-light is-small is-marginless"
              onClick={this.props.openNewKanbanModal}
            >
              Add
            </a>
            <a className="button is-light is-small is-marginless">Edit</a>
          </div>
        </div>
        <div className="column is-1 is-paddingless">
          <div className="field">
            <div className="control">
              <div className="select is-small">
                <select onChange={this.handleKanbanIdChanged}>
                  {kanbans &&
                    kanbans.map(kanban => (
                      <option key={kanban._id} value={kanban._id}>
                        {kanban.name}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };

  render() {
    return (
      <React.Fragment>
        <div className="columns is-marginless">
          <div className="column is-4 is-paddingless">
            <nav className="breadcrumb is-small" aria-label="breadcrumbs">
              <ul>
                <li>
                  <a href="#">Bulma</a>
                </li>
                <li>
                  <a href="#">Documentation</a>
                </li>
                <li>
                  <a href="#">Components</a>
                </li>
                <li className="is-active">
                  <a href="#" aria-current="page">
                    Breadcrumb
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* kanban tool bar */}

          {window.location.pathname.match(/^\/kanban/) && this.kanbanToolBar()}
        </div>
        <div className="is-divider" />
      </React.Fragment>
    );
  }
}

export default ToolBar;
