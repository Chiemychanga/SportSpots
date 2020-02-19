import React from "react";
import "../css/content.css";
import Footer from "../Footer.js";
import Header from "../Header";
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
    "2:30-4:30 PM",
    "$0-$6.25",
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
    "7:20-9:20 PM",
    "$0-$6.25",
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
    "7:20-9:20 PM",
    "$0-$6.25",
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
    "4:45-6:45 PM",
    "$0-$6.25",
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
    "4:45-6:45 PM",
    "$0-$6.25",
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
        <h1 className="align-center">Basketball</h1>
        <br />
        <img src={basketballPicture} alt="Athletes playing basketball" />
        <br />
        <br />
        <br />
        {openGyms.map(function(gym) {
          return (
            <OpenGym
              gymName={gym.getGymName()}
              address={gym.getAddress()}
              time={gym.getTime()}
              cost={gym.getCost()}
              description={gym.getLevelDescription()}
            />
          );
        })}
      </div>
    );
  }
}
