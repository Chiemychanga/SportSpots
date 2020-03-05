import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';


export default class Form extends React.Component {
    constructor() {
        super();
        var today = new Date();
        var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this.state = {
            name: '',
            email: '',
            message: '',
            gymName: '',
            googleAddressLink: '',
            sport: '',
            dayOfWeek: '',
            time: '',
            cost: '',
            levelDescription: '',
            website: '',
            description: '',
            numberOfCourts: '',
            courtType: '',
            minimumAge: ''
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

    onGymNameChange(event){
        this.setState({gymName: event.target.value})
    }

    onGoogleAddressLinkChange(event){
        this.setState({googleAddressLink: event.target.value})
    }

    onSportChange(event){
        this.setState({sport: event.target.value})
    }

    onDayOfWeekChange(event){
        this.setState({dayOfWeek: event.target.value})
    }

    onTimeChange(event){
        this.setState({time: event.target.value})
    }

    onCostChange(event){
        this.setState({cost: event.target.value})
    }

    onLevelDescriptionChange(event){
        this.setState({levelDescription: event.target.value})
    }

    onWebsiteChange(event){
        this.setState({website: event.target.value})
    }

    onDescriptionChange(event){
        this.setState({description: event.target.value})
    }

    onNumberOfCourtsChange(event){
        this.setState({numberOfCourts: event.target.value})
    }

    onCourtTypeChange(event){
        this.setState({courtType: event.target.value})
    }

    onMinimumAgeChange(event){
        this.setState({minimumAge: event.target.value})
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
                    <div className="form-group">
                        <label htmlFor="gym-name">Gym Name</label>
                        <input type="text" className="form-control" value={this.state.gymName} onChange={this.onGymNameChange.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="google-address-link">Google Address link</label>
                        <input type="text" className="form-control" value={this.state.googleAddressLink} onChange={this.onGoogleAddressLinkChange.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="sport">Sport</label>
                        <input type="text" className="form-control" value={this.state.sport} onChange={this.onSportChange.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="days-of-week">Days Of The Week Open</label>
                        <input type="text" className="form-control" value={this.state.dayOfWeek} onChange={this.onDayOfWeekChange.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="time">Time Gym Open</label>
                        <input type="text" className="form-control" value={this.state.time} onChange={this.onTimeChange.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cost">Cost Per Session</label>
                        <input type="text" className="form-control" value={this.state.cost} onChange={this.onCostChange.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="level-description">Level Description</label>
                        <input type="text" className="form-control" value={this.state.levelDescription} onChange={this.onLevelDescriptionChange.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="website">Website Link</label>
                        <input type="text" className="form-control" value={this.state.website} onChange={this.onWebsiteChange.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input type="text" className="form-control" value={this.state.description} onChange={this.onDescriptionChange.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="number-of-courts">Number Of Courts</label>
                        <input type="text" className="form-control" value={this.state.numberOfCourts} onChange={this.onNumberOfCourtsChange.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="court-type">Court Type</label>
                        <input type="text" className="form-control" value={this.state.courtType} onChange={this.onCourtTypeChange.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="min-age">Minimum Age</label>
                        <input type="text" className="form-control" value={this.state.minimumAge} onChange={this.onMinimumAgeChange.bind(this)}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
    handleSubmit(event){
        event.preventDefault();
        axios({
          method: "POST", 
          url:"http://localhost:3002/send", 
          data:  this.state
        }).then((response)=>{
          if (response.data.status === 'success'){
            alert("Message Sent."); 
            this.resetForm()
          }else if(response.data.status === 'fail'){
            alert("Message failed to send.")
          }
        })
      }

    resetForm(){
        this.setState({            
            name: '',
            email: '',
            message: '',
            gymName: '',
            googleAddressLink: '',
            sport: '',
            dayOfWeek: '',
            time: '',
            cost: '',
            levelDescription: '',
            website: '',
            description: '',
            numberOfCourts: '',
            courtType: '',
            minimumAge: ''})
    }
}
