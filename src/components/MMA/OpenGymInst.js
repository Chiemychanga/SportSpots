import React from "react";

export class OpenGym extends React.Component {
  render() {
    return (
      <div className="gym-info">
        <img src={this.props.gym.getImage()} title={this.props.gym.getGymName + " image"} alt={this.props.gym.getGymName()}></img>
        <h2>{this.props.gym.getGymName()}</h2>
        <ul style={{listStyle: "none"}}>
          <li><b>Address:</b> <a href={this.props.gym.getGoogleAddressLink()} target="_blank">{this.props.gym.getAddress()}</a></li>
          <li><b>Day(s) of the week:</b>{this.props.gym.getDayOfWeek()}</li>
          <li><b>Time:</b> {this.props.gym.getTime()}</li>
          <li><b>Cost:</b> {this.props.gym.getCost()}</li>
          <li><b>Level:</b> {this.props.gym.getLevelDescription()}</li>
          <li><b>Website:</b> <a href={this.props.gym.getWebsite()}>{this.props.gym.getWebsite()}</a></li>
          <li><b>Description:</b> {this.props.gym.getDescription()}</li>
          <li><b>Number of Courts:</b> {this.props.gym.getNumberOfCourts()}</li>
          <li><b>Court Type:</b> {this.props.gym.getCourtType()}</li>
          <li><b>Minimum Age:</b> {this.props.gym.getMinimumAge()}</li>
        </ul>
      </div>
    );
  }
}