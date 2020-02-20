import React from 'react';
import { OpenGymInst } from "../OpenGymInst";
import SWCommunityCenter from "./images/SWCommunityCenter.jpg"; 
import LakeGroveElementary from "./images/LakeGroveElementary.jpg"; 
import AtheyCreekMiddleSchool from "./images/AtheyCreekMiddleSchool.jpg"; 

export default class Tuesday extends React.Component {
    render() {
        const gym1 = new OpenGymInst(SWCommunityCenter, "SW Community Center", "6820 Southwest 45th Avenue, Portland, OR 97219", "https://goo.gl/maps/K59PYeZthQvWCCgC8", "Volleyball", "Tuesday and Thursday", "7:30pm to 9:30pm", "$7.25", "Open", "http://www.portlandoregon.gov/parks/60161", "Great location. All days are now open play, all levels.", "2", "Indoor", "16");
        const gym2 = new OpenGymInst(LakeGroveElementary, "Lake Grove Elementary", "15777 Boones Ferry Rd, Lake Oswego, OR 97035", "https://goo.gl/maps/456SdGUoLUxKfPjq5", "Volleyball", "Tuesday", "7:30pm to 9:45pm", "$4 residents, $6 non-residents", "Open", "http://www.ci.oswego.or.us/parksrec/adult-drop-sports", "Winter 2020: January 7 through March 31. No play 1/14 and 3/24. Check website for schedules, especially around holidays. Not active during the summer — school’s out. Lake Grove has a low ceiling, backboards interfering, odd lines (large courts), and no separation between courts. With that, still fun play.", "2", "Indoor", "18");
        const gym3 = new OpenGymInst(AtheyCreekMiddleSchool, "Athey Creek Middle School (West Linn Parks)", "2900 SW Borland Rd, Tualatin, OR 97062", "https://goo.gl/maps/YiKfbTfwZ3DFVGF28", "Volleyball", "Tuesday", "8:00pm to 10:00pm", "$2", "Advanced", "http://westlinnoregon.gov/parksrec/adult-sports-fitness", "They say this is power volleyball at AA and A levels.", "2", "Indoor", "18");
        const gyms = [gym1,gym2,gym3];
        return (
            <div className="gym-spots">
                <h1>Volleyball Spots Tuesday</h1>

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