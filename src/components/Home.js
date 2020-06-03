import React from "react";
import "./css/home.css";
import portal1 from "./images/volleyballPortal.png";
import portal2 from "./images/basketballPortal.png";
import portal3 from "./images/tennisPortal.png";
import portal4 from "./images/soccerPortal.png";
import portal5 from "./images/mmaPortal.png";
import portal6 from "./images/swimmingPortal.png";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <br />
        <h1>Sport Spots</h1>
        <div className="gridWrapper justify-content-md-center">
          <div className="box">
            <Link to="/Volleyball">
              <img src={portal1} alt="volleyball-portal" className="img-fluid" title="Volleyball Icon"/>
              <br /><br />
            </Link>
          </div>
          <div className="box">
            <Link to="/Basketball">
              <img src={portal2} alt="basketball-portal" className="img-fluid" title="Basketball Icon"/>
              <br /><br />
            </Link>
          </div>
          <div className="box">
            <Link to="/Tennis">
              <img src={portal3} alt="tennis-portal" className="img-fluid" title="Tennis Icon"/>
              <br /><br />
            </Link>
          </div>
          <div className="box">
            <Link to="Soccer">
            <img src={portal4} alt="soccer-portal" className="img-fluid" title="Soccer/Futbal Icon"/>
            <br /><br />
            </Link>
          </div>
          <div className="box">
            <Link to="MMA">
            <img src={portal5} alt="mma-portal" className="img-fluid" title="Mixed Martial Arts Icon"/>
            <br /><br />
            </Link>
          </div>
          <div className="box">
            <Link to="Swimming">
            <img src={portal6} alt="swimming-portal" className="img-fluid" title="Swimming Icon"/>
            <br /><br />
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}