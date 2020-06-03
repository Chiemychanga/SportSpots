import React from "react";
import { Link } from "react-router-dom";
import "./css/header.css"

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-nbablue" title="Header with Sport Links">
          <Link to="/" className="navbar-brand text-white">Sport Spots</Link>
          <button
            className="navbar-toggler bg-light"
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
              <li className="nav-item"><Link to="/Basketball">Basketball</Link></li>
              <li className="nav-item"><Link to="/Volleyball">Volleyball</Link></li>
              <li className="nav-item"><Link to="/Tennis">Tennis</Link></li>
              <li className="nav-item"><Link to="/Soccer">Soccer</Link></li>
              <li className="nav-item"><Link to="/MMA">MMA</Link></li>
              <li className="nav-item"><Link to="/Swimming">Swimming</Link></li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
