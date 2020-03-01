import React from "react"; 
import gymsArray from "./gymsArray"; //standard arrays that store all the gyms based on days. A filter is used to determine which gym appears on what day
import { OpenGym } from "./OpenGymInst"; // uses jsx to display and get the gym information.

export default class DisplayGyms extends React.Component { //new class
    render() {
      const newGymArray = gymsArray.filter( //creates a new array from the array to only show gyms based on what day of the week is set.
        gym => gym.dayOfWeek === this.props.dayOfWeek
      );
      return (
        <div>
          {newGymArray.map(function(gym) { //returns the new array of gyms
            return <OpenGym gym={gym} />; //uses opengym component class
          })}
        </div>
      );
    }
  }