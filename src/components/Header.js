import React from "react";
// import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/">
            <a class="navbar-brand" href="#">
              Sport Spots
            </a>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <Link to="/Basketball">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Basketball
                  </a>
                </li>
              </Link>
              <Link to="/Volleyball">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Volleyball
                  </a>
                </li>
              </Link>
              <Link to="/Tennis">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Tennis
                  </a>
                </li>
              </Link>
            </ul>
          </div>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </nav>
      </header>
    );
  }
}
