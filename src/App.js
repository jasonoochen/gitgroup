import React, { Component } from "react";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import NotFound from "./components/notFound";
import SearchPage from "./components/searchPage";
import Profile from "./components/profile";
import Overview from "./components/overview";
import "./App.css";
import { UserService } from "./services/userService";
import Tabs from "./components/tabs";
import ToolBar from "./components/toolBar";

class App extends Component {
  state = {
    authorizationPage: null,
    user: null
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

  render() {
    return (
      <React.Fragment>
        <Navbar user={this.state.user} />
        <Tabs />
        <ToolBar />
        <section className="section is-fluid is-paddingless">
          <Switch>
            <Route
              path="/"
              render={() => <Overview user={this.state.user} />}
            />
            <Route path="/not-found" component={NotFound} />
            <Route path="/search-page" component={SearchPage} />
            <Route path="/profile" component={Profile} />
            <Redirect to="/not-found" />
          </Switch>
        </section>
        <Footer />
        <ToastContainer />
      </React.Fragment>
    );
  }
}

export default withRouter(App);
