import React, { Component } from "react";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import jwtDecode from "jwt-decode";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Dashboard from "./components/dashboard";
import NotFound from "./components/notFound";
import SearchPage from "./components/searchPage";
import Document from "./components/document";
import Explore from "./components/explore";
import Profile from "./components/profile";
import Authorization from "./components/authorization";
import "./App.css";

class App extends Component {
  state = {
    authorizationPage: null
  };

  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      this.setState({ user });
    } catch (error) {}
  }

  authorization = page => {
    this.setState({ authorizationPage: page });
    this.props.history.push("/github/authorization");
  };

  render() {
    const { authorizationPage } = this.state;
    return (
      <React.Fragment>
        <Navbar user={this.state.user} handleAuth={this.authorization} />
        <section className="section is-fluid">
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/search-page" component={SearchPage} />
            <Route path="/document" component={Document} />
            <Route path="/explore" component={Explore} />
            <Route path="/profile" component={Profile} />
            <Route
              path="/github/authorization"
              render={() => <Authorization content={authorizationPage} />}
            />
            <Redirect from="/" to="/dashboard" />
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
