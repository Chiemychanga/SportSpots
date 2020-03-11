import React from "react";
import "../css/content.css";
import "./css/basketball.css";
import SportFooter from "../SportFooter.js";
import "bootstrap/dist/css/bootstrap.min.css";
import DayOfWeekNav from "../DayOfWeekNav";
import DisplayGyms from "./displayGyms";
import gyms from "./gymsArray";
import GMAP from "../GMap";
import Iframe from "react-iframe";

export default class Basketball extends React.Component {
  constructor() {
    super();
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    this.state = {
      dayOfWeek: weekday[d.getDay()]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(dayOfWeek) {
    this.setState({ dayOfWeek: dayOfWeek });
  }

  render() {
    return (
      <div>
        <br />
        <DayOfWeekNav handleClick={this.handleClick} />
        <br />
        <h1 className="align-center">{this.state.dayOfWeek} Basketball</h1>
        <br />
        <br />
        <GMAP dayOfWeek={this.state.dayOfWeek} gymsArray={gyms} />
        <div className="gym-spots">
          <h3>Open Gyms</h3>
          <DisplayGyms dayOfWeek={this.state.dayOfWeek} />
        </div>
        <br />
        <Iframe url="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=ZWFna2N2ZjFvM2xldmJtaHAyM3A1NWlrcDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23795548"
          className="google-calendar"
          width="800"
          height="600"
          frameborder="0"
          scrolling="no" />
        <SportFooter sport="Basketball" handleClick={this.handleClick} />
      </div>
    );
  }
}