import React from 'react';
import "./css/tennis.css";
import SportFooter from "../SportFooter.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Sunday from "./ComponentDays/Sunday";
import Saturday from "./ComponentDays/Saturday";
import Monday from "./ComponentDays/Monday";
import Tuesday from "./ComponentDays/Tuesday";
import Wednesday from "./ComponentDays/Wednesday";
import Thursday from "./ComponentDays/Thursday";
import Friday from "./ComponentDays/Friday";
import GMap from "./ComponentDays/GMap";

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export default class Tennis extends React.Component {
    state = {
        dayOfWeek: ""
    };

    getDisplay() {
        var components = [<Sunday />, <Monday />, <Tuesday />, <Wednesday />, <Thursday />, <Friday />, <Saturday />]
        return components[days.indexOf(this.state.dayOfWeek)];
    }

    render() {
        if (this.state.dayOfWeek === "") {
            var now = new Date();
            var components = [<Sunday />, <Monday />, <Tuesday />, <Wednesday />, <Thursday />, <Friday />, <Saturday />]
            var numDay = now.getDay();
            this.setState({ dayOfWeek: days[numDay] });
        }

        return (
        <div>
          <br />
          <nav className="navbar navbar-expand-lg navbar-light">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div id="daysOfWeekNav" className="navbar-nav">
                <a
                  className="nav-item nav-link SundayLink"
                  onClick={(e) => {this.setState({dayOfWeek: "Sunday"})}}
                  href="#"
                >
                  Sunday
                </a>
                <a
                  className="nav-item nav-link MondayLink"
                  onClick={(e) => {this.setState({dayOfWeek: "Monday"})}}
                  href="#"
                >
                  Monday
                </a>
                <a
                  className="nav-item nav-link TuesdayLink"
                  onClick={(e) => {this.setState({dayOfWeek: "Tuesday"})}}
                  href="#"
                >
                  Tuesday
                </a>
                <a
                  className="nav-item nav-link WednesdayLink"
                  onClick={(e) => {this.setState({dayOfWeek: "Wednesday"})}}
                  href="#"
                >
                  Wednesday
                </a>
                <a
                  className="nav-item nav-link ThursdayLink"
                  onClick={(e) => {this.setState({dayOfWeek: "Thursday"})}}
                  href="#"
                >
                  Thursday
                </a>
                <a
                  className="nav-item nav-link FridayLink"
                  onClick={(e) => {this.setState({dayOfWeek: "Friday"})}}
                  href="#"
                >
                  Friday
                </a>
                <a
                  className="nav-item nav-link SaturdayLink"
                  onClick={(e) => {this.setState({dayOfWeek: "Saturday"})}}
                  href="#"
                >
                  Saturday
                </a>
              </div>
            </div>
          </nav>
          <div className="map">
            Maps
            <GMap />
          </div>
          <br />
          {this.getDisplay()}
          <br />
          <SportFooter sport="Tennis" />
        </div>
      );
    }
}