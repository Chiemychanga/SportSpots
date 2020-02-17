import React from 'react';
// import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { OpenGymInst } from "../OpenGymInst";

export default class Sunday extends React.Component {
    render() {
        const gym1 = new OpenGymInst("gymName", "address", "sport", "dayOfWeek", "time", "cost", "levelDescription", "website", "description", "numberOfCourts", "courtType", "minimumAge");
        return (
        <div className="gym-spots">
        <h1>Volleyball Spots Sunday</h1>
        { gym1.gymName }

        </div>
        )
    }
}