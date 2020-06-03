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
            <div className="col-12 col-md-6 suggestion">
              <h2>
                Know of an open gym? <Link to="/Form"> Contact Us!</Link>
              </h2>
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
            <div className="col-6 col-md-3 secondFooterColumn daysColumn">
              <h3>{this.props.sport} By Day</h3>
              <a href="#" title="Go to Sunday gyms" onClick={e => this.props.handleClick("Sunday")}>Sunday</a>
              <a href="#" title="Go to Monday gyms" onClick={e => this.props.handleClick("Monday")}>Monday</a>
              <a href="#" title="Go to Tuesday gyms" onClick={e => this.props.handleClick("Tuesday")}>Tuesday</a>
              <a href="#" title="Go to Wednesday gyms" onClick={e => this.props.handleClick("Wednesday")}>Wendnesday</a>
              <a href="#" title="Go to Thursday gyms" onClick={e => this.props.handleClick("Thursday")}>Thursday</a>
              <a href="#" title="Go to Friday gyms" onClick={e => this.props.handleClick("Friday")}>Friday</a>
              <a href="#" title="Go to Saturday gyms" onClick={e => this.props.handleClick("Saturday")}>Saturday</a>
            </div>
            <div className="col-6 col-md-3 secondFooterColumn sportsColumn">
              <h3>Sports</h3>
              <Link to="/Volleyball" title="Go to Volleyball page">Volleyball</Link>
              <Link to="/Basketball" title="Go to Basketball page">Basketball</Link>
              <Link to="/Tennis" title="Go to Tennis page">Tennis</Link>
              <Link to="/Soccer" title="Go to Soccer page">Soccer</Link>
              <Link to="/MMA" title="Go to MMA page">MMA</Link>
              <Link to="/Swimming" title="Go to Swimming page">Swimming</Link>
            </div>
          </div>
        </div>
        <br />
        <br />
      </footer>
    );
  }
}