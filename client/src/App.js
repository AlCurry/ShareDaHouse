import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import LandingPage from "./pages/landing";
import HomePage from "./pages/home";
import DashboardPage from "./pages/dashboard";
import LoginPage from "./pages/login";
import Footer from "./components/Footer";
import "./master.css";

class App extends React.Component {
  state = {};
  // Handles updating component state when the user types into the input field
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/dashboard" component={DashboardPage} />
            <Route exact path="/add/home" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
          </Switch>
          <Footer>officiis fugit.</Footer>
        </div>
      </Router>
    );
  }
}

export default App;
