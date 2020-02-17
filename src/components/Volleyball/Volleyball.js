import React from 'react';
// import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { OpenGymInst } from "../OpenGymInst";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sunday from "./Sunday";

export default class Volleyball extends React.Component {
    render() {
        return (
            <Router>
                <div className="gym-spots">
                    <h1>Volleyball Spots</h1>
                    <Switch>
                        <Route path="/" exact component={Sunday} />
                    </Switch>
                </div>
            </Router>
        )
    }
}