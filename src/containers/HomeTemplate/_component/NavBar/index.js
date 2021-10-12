import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dart bg-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">
              Cyber Soft
            </a>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/list-movie"
                >
                  List Movie
                </NavLink>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
