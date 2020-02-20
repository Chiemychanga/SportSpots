import React from 'react';
import { OpenGymInst } from "../OpenGymInst";
import SWCommunityCenter from "./images/SWCommunityCenter.jpg"; 
import SellwoodCommunityHouse from "./images/SellwoodCommunityHouse.png"; 
import HillsideCommunityCenter from "./images/HillsideCommunityCenter.jpg"; 
import EPCC from "./images/epcc.jpg"; 

export default class Thursday extends React.Component {
    render() {
        const gym1 = new OpenGymInst(SWCommunityCenter, "SW Community Center", "6820 Southwest 45th Avenue, Portland, OR 97219", "https://goo.gl/maps/K59PYeZthQvWCCgC8", "Volleyball", "Tuesday and Thursday", "7:30pm to 9:30pm", "$7.25", "Open", "http://www.portlandoregon.gov/parks/60161", "Great location. All days are now open play, all levels.", "2", "Indoor", "16");
        const gym2 = new OpenGymInst(SellwoodCommunityHouse, "Sellwood Community House", "1436 SE Spokane Street, Portland, OR 97202", "https://goo.gl/maps/3sFmTALR49gWdtcj9", "Volleyball", "Thursday", "11:30am to 2:00pm", "$3.50", "Open", "https://fsch.recdesk.com/Community/Program", "Formerly, Sellwood Community Center. Check website for schedule.", "1", "Indoor", "16");
        const gym3 = new OpenGymInst(HillsideCommunityCenter, "Hillside Community Center", "653 Northwest Culpepper Terrace, Portland, OR 97204", "https://goo.gl/maps/97BZFt9txMVCzYHH6", "Volleyball", "Thursday", "7:00pm to 8:30pm", "$4", "Advanced", "http://www.portlandoregon.gov/parks/60396", "", "1", "Indoor", "18");
        const gym4 = new OpenGymInst(EPCC, "East Portland Community Center", "740 SE 106th Avenue, Portland, OR 97216", "https://goo.gl/maps/zp4jQJNk3XUyA81CA", "Volleyball", "Monday and Thursday", "7:30pm to 9:30pm", "$6.25 (Seniors: $5)", "Open", "http://www.portlandoregon.gov/parks/60370", "Open, advanced play at East Portland Community Center. Plenty of parking and easy access from I-205.", "2", "Indoor", "18");
        const gyms = [gym1, gym2, gym3, gym4];
        return (
            <div className="gym-spots">
                <h1>Volleyball Spots Thursday</h1>

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