import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
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
  render() {
    return (
      <React.Fragment>
        <Navbar />
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
