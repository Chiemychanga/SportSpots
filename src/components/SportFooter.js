import React from "react";
import { Link } from "react-router-dom";
import "./css/footer.css"

export default class SportFooter extends React.Component {
  render() {
    return (
      <footer>
        <br />
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
            <div className="col-3 secondFooterColumn">
              <h5>{this.props.sport} By Day</h5>
              <a href="#" onClick={e => this.props.handleClick("Sunday")}>Sunday</a>
              <a href="#" onClick={e => this.props.handleClick("Monday")}>Monday</a>
              <a href="#" onClick={e => this.props.handleClick("Tuesday")}>Tuesday</a>
              <a href="#" onClick={e => this.props.handleClick("Wednesday")}>Wendnesday</a>
              <a href="#" onClick={e => this.props.handleClick("Thursday")}>Thursday</a>
              <a href="#" onClick={e => this.props.handleClick("Friday")}>Friday</a>
              <a href="#" onClick={e => this.props.handleClick("Saturday")}>Saturday</a>
            </div>
            <div className="col-3 secondFooterColumn">
              <h5>Sports</h5>
              <Link to="/Volleyball">Volleyball</Link>
              <Link to="/Basketball">Basketball</Link>
              <Link to="/Tennis">Tennis</Link>
            </div>
          </div>
        </div>
        <br />
        <br />
      </footer>
    );
  }
}