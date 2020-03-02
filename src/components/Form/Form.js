import React from 'react';
import "../css/content.css";
import "./css/Form.css";
import SportFooter from "../SportFooter.js";
import "bootstrap/dist/css/bootstrap.min.css";
import DayOfWeekNav from "../DayOfWeekNav";

export default class Form extends React.Component {
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

                <h1 className="align-center">Contact Form</h1>
                
                <form action="/submit" method='POST'>
                <label for="fname">First name:</label><br/>
                <input type="text" id="fname" name="fname"></input><br/>
                <label for="lname">Last name:</label><br/>
                <input type="text" id="lname" name="lname"
                ></input><br/><br/>
                <input type="submit" value="Submit"></input>
                </form> 

            </div>
        );
    }
}