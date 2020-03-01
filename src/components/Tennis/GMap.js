import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import gymsArray from "./gymsArray";// this is how we will get our gym data
import "./css/tennis.css";

class GMap extends React.Component {
    render() {
      const newGymArray = gymsArray.filter(  // this takes in all the gyms arrays for tennis
        gym => gym.dayOfWeek.includes(this.props.dayOfWeek) //This filters them all out by day
      );
        return (
          <div className="mapDisplay">
            {console.log(gymsArray.length)}
            {console.log(gymsArray[0].lat)}
            <Map
            google={this.props.google}
            zoom={11}
            initialCenter={{ lat: centerCalcLat(gymsArray), lng: centerCalcLong(gymsArray)}}
            >
              <Marker position={{lat: gymsArray[0].lat, lng: gymsArray[3].long}} label = {"A"} />
              <Marker position={{lat: gymsArray[2].lat, lng: gymsArray[0].long}} label = {"B"} />
              <Marker position={{lat: gymsArray[4].lat, lng: gymsArray[0].long}} label = {"C"} />
            </Map>
          </div>
        );
    }
};

function centerCalcLat(openGymInstance){
  let average = 0;
  for (let i = 0; i < openGymInstance.length; i++){
    average = average + parseFloat(openGymInstance[i].lat);
    //console.log(average);
  }
  average = (average / openGymInstance.length);
  return average;
}

function centerCalcLong(openGymInstance){
  let average = 0;
  for (let i = 0; i < openGymInstance.length; i++){
    average = average + parseFloat(openGymInstance[i].long);
  }
  average = (average / openGymInstance.length);
  return average;
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyBDSChLvqBMtpqq0W5WFUKMFmKrZtoICQs'
   })(GMap);