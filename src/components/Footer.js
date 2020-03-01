import React from "react";
import { Link } from "react-router-dom";
import "./css/footer.css"

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
              <p>
                If you facilitate and/or know of an open gym that you would like
                to suggest, send us an email! Please ensure to include
                information including location, name of the gym, cost to play,
                and competition level.
              </p>
              <p className="align-center">
                &copy; 2020 Sport Spots. All rights reserved.
              </p>
            </div>
            <div className="col-3 secondFooterColumn">
              <h5>Sports</h5>
              <Link to="/Volleyball">Volleyball</Link>
              <Link to="/Basketball">Basketball</Link>
              <Link to="/Tennis">Tennis</Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
