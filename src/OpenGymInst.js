import React from "react";

export class OpenGym extends React.Component {
  render() {
    return (
      /*
            <div>
              <h3>{this.props.gym.getGymName()}</h3>
              <h5>{this.props.gym.getAddress()}</h5>
              <br />
              <p>
                <b>Time:</b> {this.props.gym.getTime()}
                <br />
                <b>Cost:</b> {this.props.gym.getCost()}
                <br />
                <b>Description:</b> {this.props.gym.getLevelDescription()}
                <br />
                <br />
                <a rel="noopener noreferrer" href={this.props.gym.getWebsite()} target="_blank">{this.props.gym.getWebsite()}</a>
              </p>
              <br />
              <br />
              <br />
            </div>
            */
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