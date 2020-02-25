import React from 'react';
import { OpenGymInst } from "../../OpenGymInst";
import MtScottCommunityCenter from "../images/MtScottCommunityCenter.jpg"; 
import TualatinHillsAthleticCenter from "../images/TualatinHillsAthleticCenter.jpg"; 
import Conestoga from "../images/conestoga.jpg"; 

export default class Sunday extends React.Component {
    render() {
        const gym1 = new OpenGymInst(TualatinHillsAthleticCenter, "Tualatin Hills Athletic Center", "50 NW 158th Ave, Beaverton, OR 97006", "https://goo.gl/maps/xS2V7opznhbrRKCG9", "Volleyball", "Sunday and Saturday", "7:00pm to 9:45pm", "$5, $6.25 (out of district)", "Open", "http://www.thprd.org/schedules/schedule.cfm?cs_id=28", "No pre-registration required on Saturdays. 42 players max limit.", "3", "Indoor", "18");
        const gym2 = new OpenGymInst(MtScottCommunityCenter, "Mt. Scott Community Center", "5530 SE 72nd Ave, Portland, OR 97206", "https://goo.gl/maps/45ZLWS7ZdRrA17Er8", "Volleyball", "Saturday", "12:00pm to 2:00pm", "$6 (Seniors: $4.75, Teens: $4.75)", "Open", "http://www.portlandoregon.gov/parks/60409", "Saturday starts at 12:15pm and runs to 1:45pm.", "2", "Indoor", "13");
        const gym3 = new OpenGymInst(Conestoga, "Conestoga Sunday", "9985 SW 125th Avenue, Beaverton, OR 97008", "https://goo.gl/maps/26BrMpZBaw1BJJjC8", "Volleyball", "Sunday", "6:00pm to 7:55pm", "$6.25 (out of district)", "Open", "http://www.thprd.org/facilities/recreation/conestoga/schedule/dropinsports/#dropin", "Drop-in tickets available at 5:15pm. Check-in starts at 5:45pm. Play at 6:00pm. They let in 32 players, then a wait list.", "2", "Indoor", "16");
        const gyms = [gym1, gym2, gym3];
        return (
            <div className="gym-spots">
                <h1>Volleyball Spots Sunday</h1>

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