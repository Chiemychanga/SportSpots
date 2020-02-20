import React from "react";
import { Link } from "react-router-dom";

export default class SportFooter extends React.Component {
  render() {
    return (
      <footer>
        <br />
        <div className="container">
          <div className="row">
            <div id="firstFooterColumn" className="col-6">
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
            <div id="secondFooterColumn" class="col-3">
              <h5>{this.props.sport} By Day</h5>
              <br />
              <a href="#">Sunday</a>
              <br />
              <a href="#">Monday</a>
              <br />
              <a href="#">Tuesday</a>
              <br />
              <a href="#">Wednesday</a>
              <br />
              <a href="#">Thursday</a>
              <br />
              <a href="#">Friday</a>
              <br />
              <a href="#">Saturday</a>
            </div>
            <div id="secondFooterColumn" className="col-3">
              <h5>Sports</h5>
              <br />
              <Link to="/Volleyball">
                <a href="#">Volley Ball</a>
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
