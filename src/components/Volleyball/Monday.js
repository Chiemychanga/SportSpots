import React from 'react';
import { OpenGymInst } from "../OpenGymInst";
export default class Monday extends React.Component {
    render() {
        const gym1 = new OpenGymInst("Conestoga", "9985 SW 125th Avenue, Beaverton, OR 97008", "Volleyball", "Monday and Wednesday", "7:30pm to 9:25pm", "$6.25 (out of district)", "Open");
        const gym2 = new OpenGymInst("East Portland Community Center", "740 SE 106th Avenue, Portland, OR 97216", "Volleyball", "Monday and Thursday", "7:30pm to 9:30pm", "$6.25 (Seniors: $5)", "Open");
        const gyms = [gym1,gym2]
        return (
            <div className="gym-spots">
                <h1>Volleyball Spots Monday</h1>

                {gyms.map(function (gym) {
                    return (
                        <div className="gym-info">
                        <h2>{gym.gymName}</h2>
                        <li>Address: {gym.address}</li>
                        <li>Day(s) of the week: {gym.dayOfWeek}</li>
                        <li>Time: {gym.time}</li>
                        <li>Cost: {gym.cost}</li>
                        <li>Level: {gym.levelDescription}</li>
                        </div>
                    )
                })}

            </div>
        )
    }
}