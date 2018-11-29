import React, { Component } from "react";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import DatePicker from "react-datepicker";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import NotFound from "./components/notFound";
import SearchPage from "./components/searchPage";
import Profile from "./components/profile";
import Overview from "./components/overview";
import Kanban from "./components/kanban";
import Tabs from "./components/tabs";
import ToolBar from "./components/toolBar";
import { UserService } from "./services/userService";
import { ProjectService } from "./services/projectService";
import { KanbanService } from "./services/kanbanService";

import "./App.css";
import "react-datepicker/dist/react-datepicker.css";

class App extends Component {
  state = {
    // authorizationPage: null,
    user: null,
    // user information
    // user data format:
    //   {id, name, projects:[{id, name, owner_id}],
    //    repositories:[{repository_id, name, description, owner_id, _url}]}
    // **note: 1. the owner_id should be named 'owner_name'
    newProjectModal: false, // used to control the open and close of the modal
    newKanbanModal: false, // used to control the open and close of the modal
    kanbanId: null, // if the kanban page is mounted, this is the id of the kanban
    newProjectFormData: {
      name: "",
      description: "",
      repositories: []
    }, // when you create a new project, this is the data of the project ~
    //~ sent to server
    newKanbanFormData: {
      name: "",
      due: new Date(),
      projectId: ""
    } // when you create a new kanban, this is the data of the kanban sent to~
    //~ server
  };

  componentDidMount() {
    this.setState({ user: null });
    const search = this.props.location.search; // when github give us authorization ~
    const params = new URLSearchParams(search); // ~ there will be a query parameter in this page ~
    const access_token = params.get("access_token"); // ~ url, therefore, we can get the access token
    if (access_token) localStorage.setItem("access_token", access_token);
    // store the access token in the local storage

    // get the user data from the local storage first
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) this.setState({ user });

    // get the user data from the remote, and update the user data
    const userService = new UserService();
    userService.getUser().then(user => {
      localStorage.setItem("user", JSON.stringify(user));
      this.setState({ user });
    });
  }

  //--------------------------------------------------------------------------
  //  Create new project
  //--------------------------------------------------------------------------
  /**open the new project modal */
  openNewProjectModal = () => {
    this.setState({ newProjectModal: true });
  };

  /**close the new project modal */
  closeNewProjectModal = () => {
    this.setState({ newProjectModal: false });
  };

  /**the cancel button handler in the new project modal */
  handleCancel = () => {
    const newProjectFormData = {
      name: "",
      description: "",
      repositories: []
    };
    this.setState({ newProjectFormData: newProjectFormData });
    this.closeNewProjectModal();
  };

  /**the create button(submit) in the new project modal */
  handleSubmit = () => {
    let projectService = new ProjectService();
    projectService.createNewProject(this.state.newProjectFormData);
    window.location = "/";
  };

  /**the repositories select in the new project modal handler */
  handleRepositoriesSelect = repository => {
    let newProjectFormData = { ...this.state.newProjectFormData };
    if (!newProjectFormData.repositories.includes(repository))
      newProjectFormData.repositories.push(repository);
    this.setState({ newProjectFormData: newProjectFormData });
  };

  /**the repositories deselect in the new project modal handler */
  handleRepositoriesDeselect = repository => {
    let newProjectFormData = { ...this.state.newProjectFormData };
    newProjectFormData.repositories = newProjectFormData.repositories.filter(
      r => repository !== r
    );
    this.setState({ newProjectFormData: newProjectFormData });
  };

  /**the new project modal html content */
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
                  onChange={e => this.handleChange("newProjectFormData", e)}
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
                  onChange={e => this.handleChange("newProjectFormData", e)}
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
                                key={repository.name}
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

  //---------------------------------------------------------------------------
  // Create new kanban
  //---------------------------------------------------------------------------

  /**control to open the new kanban modal */
  openNewKanbanModal = () => {
    this.setState({ newKanbanModal: true });
  };

  /**control to close the new kanban modal */
  closeNewKanbanModal = () => {
    this.setState({ newKanbanModal: false });
  };

  /**the data picker handler */
  handleDatePickerChange = date => {
    let kanbanFormData = { ...this.state.newKanbanFormData };
    kanbanFormData.due = date;
    this.setState({ newKanbanFormData: kanbanFormData });
  };

  /**the new kanban create button(submit) handler*/
  handleKanbanSubmit = () => {
    let kanbanService = new KanbanService();
    const projectId = window.location.pathname.split("/").pop();
    let newKanbanFormData = { ...this.state.newKanbanFormData };
    newKanbanFormData.projectId = projectId;
    this.setState({ newKanbanFormData });
    kanbanService.createNewKanban(newKanbanFormData);
    this.closeNewKanbanModal();
    window.location = window.location; // refresh the page
  };

  /**the new kanban cancel button handler */
  handleKanbanCancel = () => {
    const newKanbanFormData = {
      name: "",
      due: "",
      projectId: ""
    };
    this.setState({ newKanbanFormData });
    this.closeNewKanbanModal();
  };

  /**the new kanban modal html content */
  newKanbanModal = () => {
    const isActive = this.state.newKanbanModal ? "is-active" : "";
    const { user, newKanbanFormData } = this.state;
    return (
      <div className={"modal " + isActive}>
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">New Kanban</p>
            <button
              className="delete"
              onClick={this.closeNewKanbanModal}
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
                  onChange={e => this.handleChange("newKanbanFormData", e)}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Due</label>
              <div className="control">
                <DatePicker
                  className="input"
                  minDate={new Date()}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  dateFormat="MMMM d, yyyy h:mm aa"
                  timeCaption="time"
                  popperPlacement="top"
                  popperModifiers={{
                    offset: {
                      enabled: true,
                      offset: "200px, -1px"
                    },
                    preventOverflow: {
                      enabled: true,
                      escapeWithReference: true, // force popper to stay in viewport (even when input is scrolled out of view)
                      boundariesElement: "viewport"
                    }
                  }}
                  selected={this.state.newKanbanFormData.due}
                  onChange={date => this.handleDatePickerChange(date)}
                />
              </div>
              <div className="m-t-200" />
              <div className="buttons">
                <button
                  className="button is-success"
                  onClick={this.handleKanbanSubmit}
                >
                  Create
                </button>
                <button className="button" onClick={this.handleCancel}>
                  Cancel
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  };

  //---------------------------------------------------------------------------
  // Other handlers
  //---------------------------------------------------------------------------

  /** handle the form data changed,
   *    formType:("newProjectFormData"/"newKanbanFormData") */
  handleChange = (formType, e) => {
    let formData = { ...this.state[formType] };
    formData[e.target.name] = e.target.value;
    const newState = {};
    newState[formType] = formData;
    this.setState(newState);
  };

  /** change the kanbanId in the state of App */
  handleKanbanIdChanged = kanbanId => {
    this.setState({ kanbanId });
  };

  //----------------------------------------------------------------------------
  // The main html page contents
  //----------------------------------------------------------------------------

  render() {
    const { user, kanbanId } = this.state;
    return (
      <React.Fragment>
        <Navbar user={user} />
        <Tabs />
        <ToolBar
          openNewKanbanModal={this.openNewKanbanModal}
          handleKanbanIdChanged={this.handleKanbanIdChanged}
        />
        <section className="section is-fluid is-paddingless">
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Overview
                  {...props}
                  user={user}
                  openNewProjectModal={this.openNewProjectModal}
                />
              )}
            />
            <Route
              path="/kanban/:project_id"
              render={props => (
                <Kanban {...props} user={user} kanbanId={kanbanId} />
              )}
            />
            <Route path="/not-found" component={NotFound} />
            <Route path="/search-page" component={SearchPage} />
            <Route path="/profile" component={Profile} />
            <Redirect to="/not-found" />
          </Switch>
        </section>
        {this.newProjectModal()}
        {this.newKanbanModal()}
        <Footer />
        <ToastContainer />
      </React.Fragment>
    );
  }
}

export default withRouter(App);
