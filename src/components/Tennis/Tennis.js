import React from 'react';
import "./css/tennis.css";
import SportFooter from "../SportFooter.js";
import SportFooter from "../SportFooter.js";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Tennis extends React.Component {
    state = {
        dayOfWeek: ""
    };

    getDisplay() {
        if(this.state.dayOfWeek === "Sunday") {
          return <Sunday />
        } else if(this.state.dayOfWeek === "Saturday") {
          return <Saturday />
        } else if(this.state.dayOfWeek === "Monday") {
          return <Monday />
        } else if(this.state.dayOfWeek === "Tuesday") {
          return <Tuesday />
        } else if(this.state.dayOfWeek === "Wednesday") {
          return <Wednesday />
        } else if(this.state.dayOfWeek === "Thursday") {
          return <Thursday />
        } else {
          return <Friday />
        }
    }
    render() {
        if (this.state.dayOfWeek === "") {
          var d = new Date();
          var weekday = new Array(7);
          weekday[0] = "Sunday";
          weekday[1] = "Monday";
          weekday[2] = "Tuesday";
          weekday[3] = "Wednesday";
          weekday[4] = "Thursday";
          weekday[5] = "Friday";
          weekday[6] = "Saturday";
    
          this.setState({dayOfWeek: weekday[d.getDay()]});
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
          <br />
          <h1 className="align-center">{this.state.dayOfWeek} Basketball</h1>
        
          {this.getDisplay()}
          <SportFooter sport="Tennis" />
        </div>
      );
    }
}