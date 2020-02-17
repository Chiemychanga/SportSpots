import React from 'react';
import "./css/home.css";
import portal1 from "./images/volleyball.png";
import portal2 from "./images/basketball.png";
import portal3 from "./images/tennis.png";
import portal4 from "./images/soccer.png";

export default class Home extends React.Component {
    render() {
        return (
            <div class="home">
                <h1>Home</h1>
                <div class="container">
                    <div class="box">                    
                        <img src={portal1} alt="volleyball-portal"/><br></br>
                    </div>
                    <div class="box">                  
                        <img src={portal2} alt="basketball-portal"/><br></br>
                    </div>
                    <div class="box">                  
                        <img src={portal3} alt="tennis-portal"/><br></br>
                    </div>
                    <div class="box">                  
                        <img src={portal4} alt="soccer-portal"/><br></br>
                    </div>
                </div>
            </div>
        )
    }
}