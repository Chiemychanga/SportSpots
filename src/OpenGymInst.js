import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export class OpenGym extends React.Component {
    render() {
        return (
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
        );
    }
}