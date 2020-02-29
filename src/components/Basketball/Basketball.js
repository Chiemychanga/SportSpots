import React from "react";
import "../css/content.css";
import "./css/basketball.css";
import SportFooter from "../SportFooter.js";
import "bootstrap/dist/css/bootstrap.min.css";
import basketballPicture from "../images/basketball.png";
import DayOfWeekNav from "../DayOfWeekNav";
import DisplayGyms from "./displayGyms";
import "../css/content.css";

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
    this.setState( {dayOfWeek: dayOfWeek})
  }

  render() {
    return (
      <div>
        <br />
        <DayOfWeekNav handleClick={this.handleClick}/>
        <br />
        <h1 className="align-center">{this.state.dayOfWeek} Basketball</h1>
        <br />
        <img src={basketballPicture} alt="Athletes playing basketball" />
        <br />
        <br />
        <br />
        <br />
        <div className="gym-spots">
          <DisplayGyms dayOfWeek={this.state.dayOfWeek} />
        </div>
        <br />
        <SportFooter sport="Basketball" handleClick={this.handleClick}/>
      </div>
    );
  }
}