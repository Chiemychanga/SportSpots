import React from "react";
import gymsArray from "./gymsArray";
import { OpenGym } from "./OpenGymInst";

export default class DisplayGyms extends React.Component {
  render() {
    const newGymArray = gymsArray.filter(  // this takes in all the gyms arrays for tennis
      gym => gym.dayOfWeek.includes(this.props.dayOfWeek) //This filters them all out by day
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
