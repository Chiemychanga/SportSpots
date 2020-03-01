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
            <Map
            google={this.props.google}
            zoom={8}
            initialCenter={{ lat: 45.42, lng: -122.706}}
            >
              <Marker position={{lat: 45.42, lng: -122.706}} label = {"A"} />
            </Map>
          </div>
        );
    }
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBDSChLvqBMtpqq0W5WFUKMFmKrZtoICQs'
   })(GMap);