import React from 'react';
import { OpenGymInst } from "../../OpenGymInst";
import Conestoga from "../images/conestoga.jpg"; 
import EPCC from "../images/epcc.jpg"; 
import WillamettePrimarySchool from "../images/willamettePrimarySchool.png"; 

export default class Monday extends React.Component {
    render() {
        const gym1 = new OpenGymInst(Conestoga, "Conestoga", "9985 SW 125th Avenue, Beaverton, OR 97008", "https://goo.gl/maps/26BrMpZBaw1BJJjC8", "Volleyball", "Monday and Wednesday", "7:30pm to 9:25pm", "$6.25 (out of district)", "Open", "http://www.thprd.org/facilities/recreation/conestoga/schedule/dropinsports/#dropin", "Wednesday fills quickly, get there early. Not sure about other days. Drop-in tickets available at 6:45pm. Check-in at 7:15pm. Play at 7:30pm. They let in 32 players, then a wait list. So when full, which is often — at least on Wednesday, 8 players per team.", "2", "Indoor", "16");
        const gym2 = new OpenGymInst(EPCC, "East Portland Community Center", "740 SE 106th Avenue, Portland, OR 97216", "https://goo.gl/maps/zp4jQJNk3XUyA81CA", "Volleyball", "Monday and Thursday", "7:30pm to 9:30pm", "$6.25 (Seniors: $5)", "Open", "http://www.portlandoregon.gov/parks/60370", "Open, advanced play at East Portland Community Center. Plenty of parking and easy access from I-205.", "2", "Indoor", "18");
        const gym3 = new OpenGymInst(WillamettePrimarySchool, "Willamette Primary School (West Linn Parks)", "1403 12th Street, West Linn, OR 97068", "https://goo.gl/maps/xmauxRXfJZnHiBbT7", "Volleyball", "Monday", "8:00pm to 10:00pm", "$2", "Beginner", "https://westlinnoregon.gov/parksrec/adult-sports-fitness", "", "2", "Indoor", "18");
        const gyms = [gym1,gym2,gym3];
        return (
            <div className="gym-spots">
                <h1>Volleyball Spots Monday</h1>

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