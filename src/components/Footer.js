import React from "react";
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <br />
        <div className="container">
          <div className="row">
            <div id="firstFooterColumn" className="col-8">
              <h4>
                Know of an open gym? <a href="#">Contact us!</a>
              </h4>
              <br />
              <p>
                If you facilitate and/or know of an open gym that you would like
                to suggest, send us an email! Please ensure to include
                information including location, name of the gym, cost to play,
                and competition level.
              </p>
              <br />
              <p className="align-center">
                &copy; 2020 Sport Spots. All rights reserved.
              </p>
            </div>
            <div id="secondFooterColumn" className="col-4">
              <h5>Sports</h5>
              <br />
              <Link to="/Volleyball">
                <a href="#">Volleyball</a>
                <br />
              </Link>
              <Link to="/Basketball">
                <a href="#">Basketball</a>
              </Link>
              <br />
              <Link to="/Tennis">
                <a href="#">Tennis</a>
                <br />
              </Link>
            </div>
          </div>
        </div>
        <br />
      </footer>
    );
  }
}
