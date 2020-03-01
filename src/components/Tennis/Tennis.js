import React from 'react';
import "../css/content.css";
import SportFooter from "../SportFooter.js";
import "bootstrap/dist/css/bootstrap.min.css";
import DayOfWeekNav from "../DayOfWeekNav";
import DisplayGyms from "./displayGyms";

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
                <br />
                <DayOfWeekNav handleClick={this.handleClick} />
                <br />
                <h1 className="align-center">{this.state.dayOfWeek} Tennis</h1>
                <div className="gym-spots">
                    <DisplayGyms dayOfWeek={this.state.dayOfWeek} />
                </div>
                <br />
                <SportFooter sport="Tennis" handleClick={this.handleClick} />
            </div>
        );
    }
}