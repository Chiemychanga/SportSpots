import React from "react";
// import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Media } from 'reactstrap';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/">
          <Media tag="a" className="navbar-brand" href="#">Sport Spots</Media>
            {/* <a className="navbar-brand" href="#">Sport Spots</a> */}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <Link to="/Basketball">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Basketball
                  </a>
                </li>
              </Link>
              <Link to="/Volleyball">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Volleyball
                  </a>
                </li>
              </Link>
              <Link to="/Tennis">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Tennis
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
