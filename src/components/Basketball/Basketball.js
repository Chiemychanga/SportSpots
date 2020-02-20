import React from "react";
import "../css/content.css";
import "./css/basketball.css";
import SportFooter from "../SportFooter.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { OpenGymInst } from "../OpenGymInst";
import { OpenGym } from "../../OpenGymInst";
import basketballPicture from "../images/basketball.png";

const openGyms = [
  new OpenGymInst(
    null,
    "Mt. Scott Community Center",
    "5530 Southeast 72nd Avenue",
    null,
    "Basketball",
    "Sunday",
    "2:30 - 4:30 PM",
    "$0 - $6.25",
    "All Ages",
    "https://www.portlandoregon.gov/parks/article/634572",
    null,
    null,
    null,
    null
  ),
  new OpenGymInst(
    null,
    "Mt. Scott Community Center",
    "5530 Southeast 72nd Avenue",
    null,
    "Basketball",
    "Tuesday",
    "7:20 - 9:20 PM",
    "$0 - $6.25",
    "Ages 18+ (ID Required)",
    "https://www.portlandoregon.gov/parks/article/634572",
    null,
    null,
    null,
    null
  ),
  new OpenGymInst(
    null,
    "Mt. Scott Community Center",
    "5530 Southeast 72nd Avenue",
    null,
    "Basketball",
    "Thursday",
    "7:20 - 9:20 PM",
    "$0 - $6.25",
    "Ages 18+ (ID Required)",
    "https://www.portlandoregon.gov/parks/article/634572",
    null,
    null,
    null,
    null
  ),
  new OpenGymInst(
    null,
    "Mt. Scott Community Center",
    "5530 Southeast 72nd Avenue",
    null,
    "Basketball",
    "Saturday",
    "4:45 - 6:45 PM",
    "$0 - $6.25",
    "Ages 30+ (ID Required)",
    "https://www.portlandoregon.gov/parks/article/634572",
    null,
    null,
    null,
    null
  ),
  new OpenGymInst(
    null,
    "Mt. Scott Community Center",
    "5530 Southeast 72nd Avenue",
    null,
    "Basketball",
    "Sunday",
    "4:45 - 6:45 PM",
    "$0 - $6.25",
    "Ages 30+ (ID Required)",
    "https://www.portlandoregon.gov/parks/article/634572",
    null,
    null,
    null,
    null
  )
];

export default class Basketball extends React.Component {
  render() {
    return (
      <div>
        <br />
        <nav className="navbar navbar-expand-lg navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div id="daysOfWeekNav" className="navbar-nav">
                    <a className="nav-item nav-link" href="#">Sunday</a>
                    <a className="nav-item nav-link" href="#">Monday</a>
                    <a className="nav-item nav-link" href="#">Tuesday</a>
                    <a className="nav-item nav-link" href="#">Wednesday</a>
                    <a className="nav-item nav-link" href="#">Thursday</a>
                    <a className="nav-item nav-link" href="#">Friday</a>
                    <a className="nav-item nav-link" href="#">Saturday</a>
                </div>
            </div>
        </nav>
        <br />
        <h1 className="align-center">Basketball</h1>
        <br />
        <img src={basketballPicture} alt="Athletes playing basketball" />
        <br />
        <br />
        <br />
        <br />
        <br />
        {openGyms.map(function(gym) {
          return (
            <div className="container align-center {gym.getDayOfWeek()}">
                <h3>
                    {gym.getGymName()}
                </h3>
                <h5>{gym.getAddress()}</h5>
                <br />
                <p><b>Time:</b> {gym.getTime()}
                <br />
                <b>Cost:</b> {gym.getCost()}
                <br />
                <b>Description:</b> {gym.getLevelDescription()}
                <br />
                <br />
                <a href="{gym.getWebsite()}">{gym.getWebsite()}</a>
                </p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
          );
        })}
        <SportFooter sport="Basketball"/>
      </div>
    );
  }
}
