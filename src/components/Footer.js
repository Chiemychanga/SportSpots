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
              <h2>
                Know of an open gym? <Link to="/Form"> Contact Us!</Link>
              </h2>
              <br/>
              <p>
                If you facilitate and/or know of an open gym that you would like
                to suggest, send us an email! Please ensure to include
                information including location, name of the gym, cost to play,
                and competition level.
              </p>
              <br/>
              <p className="align-center">
                &copy; 2020 Sport Spots. All rights reserved.
              </p>
            </div>
            <div className="col-4 secondFooterColumn">
              <h2>Sports</h2>
              <Link to="/Volleyball" title="Go to Volleyball page">Volleyball</Link>
              <Link to="/Basketball" title="Go to Basketball page">Basketball</Link>
              <Link to="/Tennis" title="Go to Tennis page">Tennis</Link>
              <Link to="/Soccer" title="Go to Soccer page">Soccer</Link>
              <Link to="/MMA" title="Go to MMA page">MMA</Link>
              <Link to="/Swimming" title="Go to Swimming page">Swimming</Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
