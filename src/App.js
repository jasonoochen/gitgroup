import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
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
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      this.setState({ user });
    } catch (error) {}
  }

  render() {
    return (
      <React.Fragment>
        <Navbar user={this.state.user} />
        <section className="section is-fluid">
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/search-page" component={SearchPage} />
            <Route path="/document" component={Document} />
            <Route path="/explore" component={Explore} />
            <Route path="/profile" component={Profile} />
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

export default App;
