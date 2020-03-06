import React from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import './css/Form.css'


export default class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            message: '',
            gymName: '',
            googleAddressLink: '',
            sport: "Volleyball",
            dayOfWeek: '',
            time: '',
            cost: '',
            levelDescription: '',
            website: '',
            description: '',
            numberOfCourts: '1',
            courtType: 'indoor',
            minimumAge: 'none'
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

    handleSportChange = event => {
        this.setState({
          sport: event.target.value
        });
    };

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
    onReset(event){
        this.resetForm()
    }

    render() {
        return (
            <div className="form-body">
                <div className="form-title">
                    Gym Submital Form
                </div>
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="form-group-row">
                        <label htmlFor="name" className="col-sm-2"> Name</label>
                        <input type="text" className="col-sm-4" value={this.state.name} onChange={this.onNameChange.bind(this)}/>
                        <label htmlFor="email" className="col-sm-2">Email</label>
                        <input type="email" className="col-sm-4" value={this.state.email} onChange={this.onEmailChange.bind(this)}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" value={this.state.message} onChange={this.onMessageChange.bind(this)}/>
                    </div>

                    <div className="form-group-row">
                        <label htmlFor="gym-name" className="col-sm-2">Gym Name</label>
                        <input type="text" className="col-sm-4" value={this.state.gymName} onChange={this.onGymNameChange.bind(this)}/>

                        <label htmlFor="google-address-link"className="col-sm-2">Google Address link</label>
                        <input type="text" className="col-sm-4" value={this.state.googleAddressLink} onChange={this.onGoogleAddressLinkChange.bind(this)}/>
                    </div>
                    <div className="form-group-row"><label htmlFor="sport" className="col-sm-1">Sport</label>
                    </div>
                
                    <div className="form-group-row">
                        <label className="col-sm-2">Volleyball</label>
                        <input type="radio" className="col-sm-2" value="Volleyball" checked={this.state.sport === "Volleyball"} onChange={this.handleSportChange} className="form-check-input"/>
                        <label className="col-sm-2">Basketball</label>
                        <input type="radio" className="col-sm-2" value="Basketball" checked={this.state.sport === "Basketball"} onChange={this.handleSportChange} className="form-check-input"/>
                        <label className="col-sm-2">Tennis</label>
                        <input type="radio" className="col-sm-2" value="Tennis" checked={this.state.sport === "Tennis"} onChange={this.handleSportChange} className="form-check-input"/>
                    </div>

                    <div className="form-group-row">
                        <label htmlFor="days-of-week" className="col-sm-2">Days Of The Week Open</label>
                        <input type="text" className="col-sm-10" value={this.state.dayOfWeek} onChange={this.onDayOfWeekChange.bind(this)}/>
                    </div>

                    <div className="form-group-row">
                        <label htmlFor="time" className="col-sm-2">Time Gym Open</label>
                        <input type="text" className="col-sm-2" value={this.state.time} onChange={this.onTimeChange.bind(this)}/>

                        <label htmlFor="cost" className="col-sm-2">Cost Per Session</label>
                        <input type="text" className="col-sm-2" value={this.state.cost} onChange={this.onCostChange.bind(this)}/>

                        <label htmlFor="website" className="col-sm-2">Website Link</label>
                        <input type="text" className="col-sm-2" value={this.state.website} onChange={this.onWebsiteChange.bind(this)}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="level-description">Level Description</label>
                        <input type="text" className="form-control" value={this.state.levelDescription} onChange={this.onLevelDescriptionChange.bind(this)}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea className="form-control" value={this.state.description} onChange={this.onDescriptionChange.bind(this)}/>
                    </div>

                    <div className="form-group-row">
                        <label htmlFor="number-of-courts" className="col-sm-2" >Number Of Courts</label>
                        <select className="col-sm-2" numberOfCourts={this.state.numberOfCourts} onChange={this.onNumberOfCourtsChange.bind(this)}>
                            <option numberOfCourts='1'>1</option>
                            <option numberOfCourts='2'>2</option>
                            <option numberOfCourts='3'>3</option>
                            <option numberOfCourts='4'>4</option>
                            <option numberOfCourts='5'>5</option>
                            <option numberOfCourts='6'>6</option>
                            <option numberOfCourts='7'>7</option>
                            <option numberOfCourts='8'>8</option>
                            <option numberOfCourts='9'>9</option>
                            <option numberOfCourts='10+'>10+</option>
                        </select>

                        <label htmlFor="court-type" className="col-sm-2">Court Type</label>

                        <select className="col-sm-2" courtType={this.state.courtType} onChange={this.onCourtTypeChange.bind(this)}>
                            <option courtType='indoor'>Indoor</option>
                            <option courtType='outdoor'>Outdoor</option>
                            <option courtType='N/A'>N/A</option>
                        </select>

                        <label htmlFor="min-age" className="col-sm-2">Minimum Age</label>
                        <select className="col-sm-2" minimumAge={this.state.minimumAge} onChange={this.onMinimumAgeChange.bind(this)}>
                            <option minimumAge='none'>None</option>
                            <option minimumAge='6 to 10'>6 to 10</option>
                            <option minimumAge='11+'>12+</option>
                            <option minimumAge='18+'>18+</option>
                            <option minimumAge='21+'>21+</option>
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type ="reset" onClick={this.onReset.bind(this)} className="btn btn-primary">Reset</button>
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
            sport: 'Volleyball',
            dayOfWeek: '',
            time: '',
            cost: '',
            levelDescription: '',
            website: '',
            description: '',
            numberOfCourts: '1',
            courtType: 'indoor',
            minimumAge: 'None'
        })
    }
}
