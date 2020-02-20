import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export class OpenGym extends React.Component {
    render() {
        return (
            <div className="container align-center">
                <h3>
                    {this.props.gymName}
                </h3>
                <br />
                <br />
                <h5>{this.props.address}</h5>
                <br />
                <p>Time: {this.props.time}
                <br />
                Cost: {this.props.cost}
                <br />
                Description: {this.props.description}</p>
            </div>
        );
    }
}