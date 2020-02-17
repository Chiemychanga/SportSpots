import React from 'react';
import "./css/tennis.css";
import gym1 from "./images/portlandTennisCenter.png";
import gym2 from "./images/lakeOswegoTennisCenter.png"

export default class MondayTennis extends React.Component {
    render() {
        return (
            <div class="tennis">
                <h1>Tennis Spots</h1>
                <div class="container">
                    <div class="box">                    
                        <img src={gym1} alt="gym1"/><br></br>
                        Portland Tennis Center <br></br>
                        324 NE 12th Ave, Portland, OR 97232<br></br>
                        (503) 823-3189
                    </div>
                    <div class="box">                  
                        <img src={gym2} alt="gym2"/><br></br>
                        Lake Oswego Tennis Center <br></br>
                        2900 SW Diane Dr, Lake Oswego, OR 97035<br></br>
                        (503) 635-5550
                    </div>
                </div>
            </div>
        )
    }
}