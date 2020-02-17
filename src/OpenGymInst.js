import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export class OpenGymInst extends React.Component {
    render() {
        return (
            <div className = "container align-center">
                <h2>{this.props.gymName}</h2>
                <h3>{this.props.address}</h3>
                <p>Time: {this.props.time}
                <br />
                Cost: {this.props.cost}
                <br />
                Description: {this.props.description}</p>
            </div>
        );
    }
}