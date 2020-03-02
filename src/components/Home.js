import React from 'react';
import "./css/home.css";
import portal1 from "./images/volleyballPortal.png";
import portal2 from "./images/basketballPortal.png";
import portal3 from "./images/tennisPortal.png";
import portal4 from "./images/soccerPortal.png";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <h1>Home</h1>
                <div className="container">
                    <div className="box">                    
                        <Link to="/Volleyball"><img src={portal1} alt="volleyball-portal"/><br></br></Link>
                    </div>
                    <div className="box">                  
                        <Link to="/Basketball"><img src={portal2} alt="basketball-portal"/><br></br></Link>
                    </div>
                    <div className="box">   
                        <Link to="/Tennis"><img src={portal3} alt="tennis-portal"/><br></br></Link>               
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