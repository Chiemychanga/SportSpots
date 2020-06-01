import React from "react";

export class OpenGym extends React.Component {
  render() {
    return (
      <div className="gym-info">
        <h2>{this.props.gym.getGymName()}</h2>
        <br />
        <img src={this.props.gym.getImage()} title={this.props.gym.getGymName + " image"} alt={this.props.gym.getGymName()} title={this.props.gym.getGymName()+ " image"} ></img>
        <br />
        <br />
        <li><b>Address:</b> <a href={this.props.gym.getGoogleAddressLink()} title={"Go to " + this.props.gym.getGymName() + " on Google Maps"} target="_blank">{this.props.gym.getAddress()}</a></li>
        <li><b>Time:</b> {this.props.gym.getTime()}</li>
        <li><b>Cost:</b> {this.props.gym.getCost()}</li>
        <li><b>Description:</b> {this.props.gym.getLevelDescription()}</li>
        <li><b>Website:</b> <a href={this.props.gym.getWebsite()} title={"Go to " + this.props.gym.getGymName() + "'s website"} target="_blank">{this.props.gym.getWebsite()}</a></li>
      </div>
    );
  }
}