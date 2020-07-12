import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import Nav from "./components/NavBar/Nav";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Design from "./components/Design/Design";
import CreateItem from "./components/Admin/private/CreateItem";
import EditItem from "./components/Admin/private/EditItem";
import AdminLogin from "./components/Admin/public/AdminLogin";
import AdminMain from "./components/Admin/private/AdminMain";
import AdminRegister from "./components/Admin/private/AdminRegister";
import GalleryHandler from "./components/Gallery/GalleryHandler";

import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";

export default class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Router>
        <Provider store={store}>
          <div className="App">
            <Nav />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <Home />
                </React.Fragment>
              )}
            />
            <Route
              path="/gallery"
              render={(props) => (
                <React.Fragment>
                  <GalleryHandler />
                </React.Fragment>
              )}
            />
            <Route path="/design" component={Design} />
            <Route path="/admin" component={AdminLogin} />

            <PrivateRoute path="/article/add" component={CreateItem} />
            <PrivateRoute path="/article/edit/:id" component={EditItem} />
            <PrivateRoute path="/dashboard" component={AdminMain} />
            <PrivateRoute path="/adminregister" component={AdminRegister} />
            <Footer />
          </div>
        </Provider>
      </Router>
    );
  }
}
