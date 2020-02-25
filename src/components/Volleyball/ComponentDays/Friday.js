import React from 'react';
import { OpenGymInst } from "../../OpenGymInst";
import ColumbiaChristianSchool from "../images/ColumbiaChristianSchool.jpg"; 
import TheCourtsInBeaverton from "../images/TheCourtsInBeaverton.jpg"; 
import TualatinHillsAthleticCenter from "../images/TualatinHillsAthleticCenter.jpg"; 

export default class Friday extends React.Component {
    render() {
        const gym1 = new OpenGymInst(ColumbiaChristianSchool, "Columbia Christian School", "9100 East Burnside St, Portland OR 97216", "https://goo.gl/maps/5NsQ6UcQfsetpZdt8", "Volleyball", "Friday", "7:05pm to 10:00pm", "$10", "Open", "https://www.meetup.com/meetup-group-kLcTIHwA/", "Drop-in is back at what used to be called Cascade College, but is now Columbia Christian School. Still offered by portlandbasketball.com. Things are starting with Fridays but more days are coming — and they’re looking for your input!", "2", "Indoor", "18");
        const gym2 = new OpenGymInst(TheCourtsInBeaverton, "The Courts in Beaverton", "14523 SW Millikan Way #110 Beaverton, Oregon 97005", "https://goo.gl/maps/HSHrQtSbvNMBiG29A", "Volleyball", "Friday", "7:00pm to 9:30pm", "$4", "Advanced", "http://www.thecourtsinbeaverton.com/DropinPlayxpf.html", "This is the place to play volleyball on Friday evenings! The Courts are typically packed full and you can expect a high level of play. Bring your own volleyball.", "6", "Indoor", "None");
        const gym3 = new OpenGymInst(TualatinHillsAthleticCenter, "Friday Night Teen Volleyball at Tualatin Hills Athletic Center", "50 NW 158th Ave, Beaverton, OR 97006", "https://goo.gl/maps/xS2V7opznhbrRKCG9", "Volleyball", "Friday", "7:30pm to 9:45pm", "$6.25", "Open", "http://www.thprd.org/schedules/schedule.cfm?cs_id=28", "Teen night! You must be 13 to 18 years old and still in high school.", "3", "Indoor", "13-18");
        const gyms = [gym1, gym2, gym3];
        return (
            <div className="gym-spots">
                <h1>Volleyball Spots Friday</h1>

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