import React from 'react';
import "../css/content.css";
import SportFooter from "../SportFooter.js";
import "bootstrap/dist/css/bootstrap.min.css";
import DayOfWeekNav from "../DayOfWeekNav";
import DisplayGyms from "./displayGyms";
import GMAP from "../GMap";
import gymsArray from "./gymsArray";

export default class Tennis extends React.Component {
    constructor() {
        super();
        var today = new Date();
        var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        this.state = {
            dayOfWeek: daysOfWeek[today.getDay()]
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(dayOfWeek) {
        this.setState({ dayOfWeek: dayOfWeek })
    }

    render() {
        return (
            <div>
                <DayOfWeekNav handleClick={this.handleClick} />
                <h1 className="align-center">{this.state.dayOfWeek} Tennis</h1>
                <GMAP dayOfWeek={this.state.dayOfWeek} gymsArray={gymsArray}/>
                <div className="gym-spots">
                    <DisplayGyms dayOfWeek={this.state.dayOfWeek} />
                </div>
                <SportFooter sport="Tennis" handleClick={this.handleClick} />
            </div>
        );
    }
}