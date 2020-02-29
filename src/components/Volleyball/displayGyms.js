import React from "react";
import gymsArray from "./gymsArray";
import { OpenGym } from "./OpenGymInst";

export default class DisplayGyms extends React.Component {
  render() {
    const newGymArray = gymsArray.filter(
      gym => gym.dayOfWeek === this.props.dayOfWeek
    );
    return (
      <div>
        {newGymArray.map(function(gym, i) {
          return <OpenGym gym={gym} key={i}/>;
        })}
      </div>
    );
  }
}
