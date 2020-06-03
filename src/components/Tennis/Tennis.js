import React from 'react';
import "../css/content.css";
import SportFooter from "../SportFooter.js";
import "bootstrap/dist/css/bootstrap.min.css";
import DayOfWeekNav from "../DayOfWeekNav";
import DisplayGyms from "./displayGyms";
import GMAP from "../GMap";
import gymsArray from "./gymsArray";
import Iframe from 'react-iframe';

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
        if(dayOfWeek === "Monday" || dayOfWeek === "Tuesday" || dayOfWeek === "Wednesday" || dayOfWeek === "Thursday" || dayOfWeek === "Friday" || dayOfWeek === "Saturday" || dayOfWeek === "Sunday") {
          this.setState({ dayOfWeek: dayOfWeek });
        }
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
                <Iframe url="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=ZmZsY2NsZGpkdWZvcmEydmppNDlyOGJhNnNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23D50000"
                    className="google-calendar"
                    width="800"
                    height="600"
                    frameborder="0"
                    scrolling="no"
                    title="Tennis Google Calendar"
                />
                <SportFooter sport="Tennis" handleClick={this.handleClick} />
            </div>
        );
    }
}