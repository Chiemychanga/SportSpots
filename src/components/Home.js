import React from 'react';
import "./css/home.css";
import portal1 from "./images/volleyball.png";
import portal2 from "./images/basketball.png";
import portal3 from "./images/tennis.png";
import portal4 from "./images/soccer.png";
import Footer from "./Footer";

export default class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <h1>Home</h1>
                <div className="container">
                    <div className="box">                    
                        <img src={portal1} alt="volleyball-portal"/><br></br>
                    </div>
                    <div className="box">                  
                        <img src={portal2} alt="basketball-portal"/><br></br>
                    </div>
                    <div className="box">                  
                        <img src={portal3} alt="tennis-portal"/><br></br>
                    </div>
                    <div className="box">                  
                        <img src={portal4} alt="soccer-portal"/><br></br>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}