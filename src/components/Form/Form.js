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
            dayOfWeek: daysOfWeek[today.getDay()],
            name: '',
            email: '',
            message: ''
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(dayOfWeek) {
        this.setState({ dayOfWeek: dayOfWeek })
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
    }
    
    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onMessageChange(event) {
        this.setState({message: event.target.value})
    } 

    render() {
        return (
            <div className="Form">
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="form-group">
                        <label htmlFor="name"> Name</label>
                        <input type="text" classNAme="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" value={this.state.email} onChange={this.onEmailChange.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="reset" className="btn btn-primary">Reset</button>
                </form>
            </div>
        );
    }
    handleSubmit(event){
        event.preventDefault(); //If it is a cancelable it will cancel it

        fetch('http://localahost:3002/send',{//I think it was /submit for the hw5 though also axios can be used aswell
            method: "POST",
            body: JSON.stringify(this.state), //converting to json string
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .then(
            (response) => (response.json())
        )
        .then(
            (response) => {
                if(response.status === 'success'){
                    alert("Message Sent.");
                    this.resetForm()
                }
                else if(response.status === 'fail') {
                    alert("Message Failed To Send.")
                }
            }

        )
    }

    resetForm(){
        this.setState({name: '', email: '', message: ''})
    }
}
