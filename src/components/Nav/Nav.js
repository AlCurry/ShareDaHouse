import React, { Component } from "react";
class Nav extends Component {
  state = {};
  render() {
    return (
      <nav>
        <ul className="navContainer">
          <a href="/">
            <span>Home</span>
          </a>
          <a href="/dashboard">
            <span>Dashboard</span>
          </a>
          <a href="/add/home">
            <span>Add Home</span>
          </a>
        </ul>
      </nav>
    );
  }
}

export default Nav;
