import React from 'react';
import { OpenGymInst } from "../../OpenGymInst";
import PortlandTennisCenter from "../images/PortlandTennisCenter.png";
import StJohnsRacquetCenter from "../images/StJohnsRacquetCenter.jpg"; 
import LakeOswegoTennisCenter from "../images/LakeOswegoTennisCenter.png"; 

export default class Monday extends React.Component {
    render() {
        const gym1 = new OpenGymInst(PortlandTennisCenter, "Portland Tennis Center", "324 NE 12th Avenue, Portland, Oregon 97232", "https://goo.gl/maps/pD42T9Nez3XxQejD7", "Tennis", "Monday through Friday", "5:30am to 11:00pm", "$16.00 per Court for 75 minutes", "Singles/Doubles", "http://www.thprd.org/facilities/recreation/conestoga/schedule/dropinsports/#dropin", "Reservations open 3 days in advance at 8:30am.", "8", "Indoor", "None");
        const gym2 = new OpenGymInst(StJohnsRacquetCenter, "St. Johns Racquet Center", "7519 N Burlington Ave, Portland, OR 97203", "https://goo.gl/maps/d7WVkBReSGAJVeb4A", "Tennis", "Monday and Thursday", "8:00am to 2:00pm and 6:00pm to 10:00pm", "$30.00 per Court 75 minutes", "Singles/Doubles", "https://www.stjohnsracquetcenter.org/", "Courts can be booked up to 7 days in advance.", "8", "Indoor", "None");
        const gym3 = new OpenGymInst(LakeOswegoTennisCenter, "Lake Oswego Tennis Center", "2900 SW Diane Dr, Lake Oswego, OR 97035", "https://goo.gl/maps/3QUUnJDZjpMpqtF17", "Tennis", "Monday and Thursday", "6:00am to 10:00pm", "$22.00 per Court 60 minutes", "Singles/Doubles", "https://www.ci.oswego.or.us/parksrec/indoor-tennis-center", "Courts can be booked up to 7 days in advance.", "8", "Indoor", "None");
        const gyms = [gym1,gym2,gym3];
        return (
            <div className="gym-spots">
                <h1>Tennis Spots Saturday</h1>

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