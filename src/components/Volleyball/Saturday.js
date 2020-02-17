import React from 'react';
import { OpenGymInst } from "../OpenGymInst";

export default class Saturday extends React.Component {
    render() {
        const gym1 = new OpenGymInst("gymName", "address", "sport", "dayOfWeek", "time", "cost", "levelDescription");
        return (
        <div className="gym-spots">
        <h1>Volleyball Spots Saturday</h1>
        { gym1.gymName }

        </div>
        )
    }
}