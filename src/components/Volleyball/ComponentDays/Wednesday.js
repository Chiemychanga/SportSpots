import React from 'react';
import { OpenGymInst } from "../../OpenGymInst";
import Conestoga from "../images/conestoga.jpg"; 
import CharlesJordanCC from "../images/CharlesJordanCC.jpg";

export default class Wednesday extends React.Component {
    render() {
        const gym1 = new OpenGymInst(Conestoga, "Conestoga", "9985 SW 125th Avenue, Beaverton, OR 97008", "https://goo.gl/maps/26BrMpZBaw1BJJjC8", "Volleyball", "Monday and Wednesday", "7:30pm to 9:25pm", "$6.25 (out of district)", "Open", "http://www.thprd.org/facilities/recreation/conestoga/schedule/dropinsports/#dropin", "Wednesday fills quickly, get there early. Not sure about other days. Drop-in tickets available at 6:45pm. Check-in at 7:15pm. Play at 7:30pm. They let in 32 players, then a wait list. So when full, which is often — at least on Wednesday, 8 players per team.", "2", "Indoor", "16");
        const gym2 = new OpenGymInst(CharlesJordanCC, "Charles Jordan Community Center (teen)", "9009 N Foss Ave, Portland, OR 97217", "https://goo.gl/maps/QWW1XFA5MnxRyk7L8", "Volleyball", "Wednesday", "5:00pm to 7:00pm", "Free, with a teen pass", "Open", "https://www.portlandoregon.gov/parks/60367", "Free drop-in but your teen needs a teen pass that provides access to Portland community centers. There are also coaches providing instruction and drills. Listed for ages 12-17, but we do have girls who are 10. Youth just need to be eligible for a TeenForce pass which starts at 10 years old.", "2", "Indoor", "12-17");
        const gyms = [gym1,gym2];
        return (
            <div className="gym-spots">
                <h1>Volleyball Spots Wednesday</h1>

                {gyms.map(function (gym) {
                    return (
                        <div className="gym-info">
                        <img src={gym.image} alt={gym.gymName}></img>
                        <h2>{gym.gymName}</h2>
                        <li>Address: <a href={gym.googleAddressLink}>{gym.address}</a></li>
                        <li>Day(s) of the week: {gym.dayOfWeek}</li>
                        <li>Time: {gym.time}</li>
                        <li>Cost: {gym.cost}</li>
                        <li>Level: {gym.levelDescription}</li>
                        <li>Website: <a href={gym.website}>{gym.website}</a></li>
                        <li>Description: {gym.description}</li>
                        <li>Number of Courts: {gym.numberOfCourts}</li>
                        <li>Court Type: {gym.courtType}</li>
                        <li>Minimum Age: {gym.minimumAge}</li>
                        </div>
                    )
                })}

            </div>
        )
    }
}