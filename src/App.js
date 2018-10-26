import React, { Component } from "react";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import jwtDecode from "jwt-decode";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import NotFound from "./components/notFound";
import SearchPage from "./components/searchPage";
import Profile from "./components/profile";
import "./App.css";
import { UserService } from "./services/userService";

class App extends Component {
  state = {
    authorizationPage: null,
    user: null
  };

  componentDidMount() {
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
        <section className="section is-fluid">
          <Switch>
            <Route path="/" component={NotFound} />
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
