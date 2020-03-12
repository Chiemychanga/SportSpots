import React from "react";
import "./css/home.css";
import volleyballPortal from "./images/volleyballPortal.png";
import basketballPortal from "./images/basketballPortal.png";
import tennisPortal from "./images/tennisPortal.png";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <h1>Sport Spots</h1>
        <div className="container">
          <Link to="/Basketball">
            <img className="sportIcon" src={basketballPortal} alt="basketball-portal" />
          </Link>
          <Link to="/Volleyball">
            <img className="sportIcon" src={volleyballPortal} alt="volleyball-portal" />
          </Link>
          <Link to="/Tennis">
            <img className="sportIcon" src={tennisPortal} alt="tennis-portal" />
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
}