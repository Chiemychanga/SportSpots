import React from "react";

export class OpenGym extends React.Component {
  render() {
    return (
      <div className="gym-info">
        <img src={this.props.gym.getImage()} alt={this.props.gym.getGymName()}></img>
        <h2>{this.props.gym.getGymName()}</h2>
        <li><b>Address:</b> <a href={this.props.gym.getGoogleAddressLink()}>{this.props.gym.getAddress()}</a></li>
        <li><b>Time:</b> {this.props.gym.getTime()}</li>
        <li><b>Cost:</b> {this.props.gym.getCost()}</li>
        <li><b>Level:</b> {this.props.gym.getLevelDescription()}</li>
        <li><b>Website:</b> <a href={this.props.gym.getWebsite()}>{this.props.gym.getWebsite()}</a></li>
      </div>
    );
  }
}