import React, { Component } from "react";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import NotFound from "./components/notFound";
import SearchPage from "./components/searchPage";
import Profile from "./components/profile";
import Overview from "./components/overview";
import Kanban from "./components/kanban";
import "./App.css";
import { UserService } from "./services/userService";
import { ProjectService } from "./services/projectService";
import Tabs from "./components/tabs";
import ToolBar from "./components/toolBar";

class App extends Component {
  state = {
    authorizationPage: null,
    user: null,
    newProjectModal: false,
    newProjectFormData: {
      name: "",
      description: "",
      repositories: []
    }
  };

  //-------------------------------------------------
  // new project: open the new project modal window
  //-------------------------------------------------
  openNewProjectModal = () => {
    this.setState({ newProjectModal: true });
  };

  closeNewProjectModal = () => {
    this.setState({ newProjectModal: false });
  };

  handleCancel = () => {
    const newProjectFormData = {
      name: "",
      description: "",
      repositories: []
    };
    this.setState({ newProjectFormData: newProjectFormData });
    this.closeNewProjectModal();
  };

  //---------------------------------------------------------
  // new project: change the new project form data
  //---------------------------------------------------------
  handleChange = e => {
    let newProjectFormData = { ...this.state.newProjectFormData };
    newProjectFormData[e.target.name] = e.target.value;
    this.setState({ newProjectFormData: newProjectFormData });
  };

  handleSubmit = () => {
    let projectService = new ProjectService();
    projectService.createNewProject(this.state.newProjectFormData);
    window.location = "/";
  };

  //----------------------------------------------------------
  // new project: select repositories and deselect an option
  //----------------------------------------------------------
  handleRepositoriesSelect = repository => {
    let newProjectFormData = { ...this.state.newProjectFormData };
    if (!newProjectFormData.repositories.includes(repository))
      newProjectFormData.repositories.push(repository);
    this.setState({ newProjectFormData: newProjectFormData });
  };
  handleRepositoriesDeselect = repository => {
    let newProjectFormData = { ...this.state.newProjectFormData };
    newProjectFormData.repositories = newProjectFormData.repositories.filter(
      r => repository !== r
    );
    this.setState({ newProjectFormData: newProjectFormData });
  };

  componentDidMount() {
    this.setState({ user: null });
    const search = this.props.location.search;
    const params = new URLSearchParams(search);
    const access_token = params.get("access_token");
    if (access_token) localStorage.setItem("access_token", access_token);

    const userService = new UserService();
    userService.getUser().then(user => {
      this.setState({ user });
    });
  }

  newProjectModal = () => {
    const isActive = this.state.newProjectModal ? "is-active" : "";
    const { user, newProjectFormData } = this.state;
    return (
      <div className={"modal " + isActive}>
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">New Project</p>
            <button
              className="delete"
              onClick={this.closeNewProjectModal}
              aria-label="close"
            />
          </header>
          <section className="modal-card-body">
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="name"
                  placeholder="project name"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Description</label>
              <div className="control">
                <textarea
                  className="textarea"
                  name="description"
                  placeholder="project description"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="columns">
              <div className="column is-6">
                <div className="field">
                  <label className="label">Select Repositories</label>
                  <div className="control">
                    <div className="select is-multiple is-fullwidth">
                      <select multiple size="8">
                        {user &&
                          user.repositories.map(repository => {
                            return (
                              <option
                                value={repository.name}
                                onClick={() =>
                                  this.handleRepositoriesSelect(repository)
                                }
                              >
                                {repository.name}
                              </option>
                            );
                          })}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-6">
                <div className="field">
                  <label className="label">Selected</label>
                  <div className="control">
                    <div className="select is-multiple is-fullwidth">
                      <select multiple size="8">
                        {newProjectFormData.repositories.length === 0 && (
                          <option className="has-text-grey-light" value="dummy">
                            selected repositories...
                          </option>
                        )}
                        {newProjectFormData.repositories.map(repository => {
                          return (
                            <option
                              value={repository.name}
                              onClick={() =>
                                this.handleRepositoriesDeselect(repository)
                              }
                            >
                              {repository.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success" onClick={this.handleSubmit}>
              Create
            </button>
            <button className="button" onClick={this.handleCancel}>
              Cancel
            </button>
          </footer>
        </div>
      </div>
    );
  };

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <Navbar user={user} />
        <Tabs />
        <ToolBar />
        <section className="section is-fluid is-paddingless">
          <Switch>
            <Route
              path="/"
              render={() => (
                <Overview
                  user={user}
                  openNewProjectModal={this.openNewProjectModal}
                />
              )}
            />
            <Route
              path="/kanban/:project_id"
              render={() => <Kanban user={user} />}
            />
            <Route path="/not-found" component={NotFound} />
            <Route path="/search-page" component={SearchPage} />
            <Route path="/profile" component={Profile} />
            <Redirect to="/not-found" />
          </Switch>
        </section>
        {this.newProjectModal()}
        <Footer />
        <ToastContainer />
      </React.Fragment>
    );
  }
}

export default withRouter(App);
