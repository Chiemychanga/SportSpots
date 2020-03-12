import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Form.css";

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      gymName: "",
      googleAddressLink: "",
      sport: "Volleyball",
      dayOfWeek: "",
      time: "",
      cost: "",
      levelDescription: "",
      website: "",
      description: "",
      numberOfCourts: "1",
      courtType: "indoor",
      minimumAge: "none"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(dayOfWeek) {
    this.setState({ dayOfWeek: dayOfWeek });
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  onGymNameChange(event) {
    this.setState({ gymName: event.target.value });
  }

  onGoogleAddressLinkChange(event) {
    this.setState({ googleAddressLink: event.target.value });
  }

  handleSportChange = event => {
    this.setState({
      sport: event.target.value
    });
  };

  onDayOfWeekChange(event) {
    this.setState({ dayOfWeek: event.target.value });
  }

  onTimeChange(event) {
    this.setState({ time: event.target.value });
  }

  onCostChange(event) {
    this.setState({ cost: event.target.value });
  }

  onLevelDescriptionChange(event) {
    this.setState({ levelDescription: event.target.value });
  }

  onWebsiteChange(event) {
    this.setState({ website: event.target.value });
  }

  onDescriptionChange(event) {
    this.setState({ description: event.target.value });
  }

  onNumberOfCourtsChange(event) {
    this.setState({ numberOfCourts: event.target.value });
  }

  onCourtTypeChange(event) {
    this.setState({ courtType: event.target.value });
  }

  onMinimumAgeChange(event) {
    this.setState({ minimumAge: event.target.value });
  }
  onReset(event) {
    this.resetForm();
  }

  render() {
    return (
      <div className="container-fluid">
        <h1 id="contact-page-title">Send Us Your Open Gym!</h1>
        <form
          className="container"
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <legend>
            <h4>
              <b>Gym Submital Form</b>
            </h4>
          </legend>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-4">
                <input
                  type="radio"
                  name="sports"
                  id="Volleyball"
                  value="Volleyball"
                  checked={this.state.sport === "Volleyball"}
                  onChange={this.handleSportChange}
                  className="form-check-input"
                />
                <label htmlFor="Volleyball">Volleyball</label>
              </div>
              <div className="col-sm-4">
                <input
                  type="radio"
                  name="sports"
                  id="Basketball"
                  value="Basketball"
                  checked={this.state.sport === "Basketball"}
                  onChange={this.handleSportChange}
                  className="form-check-input"
                />
                <label htmlFor="Basketball">Basketball</label>
              </div>
              <div className="col-sm-4">
                <input
                  type="radio"
                  name="sports"
                  id="Tennis"
                  value="Tennis"
                  checked={this.state.sport === "Tennis"}
                  onChange={this.handleSportChange}
                  className="form-check-input"
                />
                <label htmlFor="Tennis">Tennis</label>
              </div>
            </div>

            <br />
            <br />

            <div className="row">
              <label htmlFor="name" className="col-sm-2" id="name-tag">
                {" "}
                Name
              </label>
              <input
                type="text"
                className="col-sm-4"
                value={this.state.name}
                onChange={this.onNameChange.bind(this)}
              />
              <br />
              <label htmlFor="email" className="col-sm-2" id="email-tag">
                Email
              </label>
              <input
                type="email"
                className="col-sm-4"
                value={this.state.email}
                onChange={this.onEmailChange.bind(this)}
              />
            </div>

            <br />
            <br />

            <div className="row">
              <label htmlFor="gym-name" className="col-sm-2" id="gym-name-tag">
                Gym Name
              </label>
              <input
                type="text"
                id="gym-name"
                className="col-sm-4"
                value={this.state.gymName}
                onChange={this.onGymNameChange.bind(this)}
              />
              <br />
              <label
                htmlFor="google-address-link"
                className="col-sm-2"
                id="google-address-link-tag"
              >
                Google Address link
              </label>
              <input
                type="text"
                className="col-sm-4"
                value={this.state.googleAddressLink}
                onChange={this.onGoogleAddressLinkChange.bind(this)}
              />
            </div>

            <br />
            <br />

            <div className="row">
              <label
                className="col-2"
                htmlFor="days-of-week"
                id="days-of-week-open-tag"
              >
                Day(s) Of The Week
              </label>
              <input
                className="col-4"
                type="text"
                id="days-of-week"
                value={this.state.dayOfWeek}
                onChange={this.onDayOfWeekChange.bind(this)}
              />

              <label className="col-2" htmlFor="time" id="time-tag">
                Time
              </label>
              <input
                className="col-4"
                type="text"
                id="time"
                value={this.state.time}
                onChange={this.onTimeChange.bind(this)}
              />
            </div>

            <br />
            <br />

            <div className="row">
              <label htmlFor="cost" className="col-2" id="cost-tag">
                Cost Per Session
              </label>
              <input
                type="text"
                id="cost"
                className="col-4"
                value={this.state.cost}
                onChange={this.onCostChange.bind(this)}
              />

              <label htmlFor="website" className="col-2" id="website-tag">
                Website Link
              </label>
              <input
                type="text"
                id="website"
                className="col-4"
                value={this.state.website}
                onChange={this.onWebsiteChange.bind(this)}
              />
            </div>

            <br />
            <br />

            <div className="row">
              <div className="col-6">
                <label htmlFor="message" id="message-tag">
                  Message
                </label>
                <textarea
                  className="form-control"
                  value={this.state.message}
                  rows={6}
                  onChange={this.onMessageChange.bind(this)}
                />
              </div>

              <div className="col-6">
                <label htmlFor="level-description" id="level-description-tag">
                  Skill Level
                </label>
                <textarea
                  className="form-control"
                  rows={6}
                  value={this.state.levelDescription}
                  onChange={this.onLevelDescriptionChange.bind(this)}
                />
              </div>
            </div>

            <br />
            <br />

            <label htmlFor="description" id="description-tag">
              Description
            </label>
            <textarea
              className="form-control"
              rows={6}
              value={this.state.description}
              onChange={this.onDescriptionChange.bind(this)}
            />

            <br />
            <br />

            <label
              htmlFor="number-of-courts"
              className="col-sm-2"
              id="number-of-courts-tag"
            >
              Number Of Courts
            </label>
            <select
              className="col-sm-2"
              numberOfCourts={this.state.numberOfCourts}
              onChange={this.onNumberOfCourtsChange.bind(this)}
            >
              <option numberOfCourts="1">1</option>
              <option numberOfCourts="2">2</option>
              <option numberOfCourts="3">3</option>
              <option numberOfCourts="4">4</option>
              <option numberOfCourts="5">5</option>
              <option numberOfCourts="6">6</option>
              <option numberOfCourts="7">7</option>
              <option numberOfCourts="8">8</option>
              <option numberOfCourts="9">9</option>
              <option numberOfCourts="10+">10+</option>
            </select>

            <label
              htmlFor="court-type"
              className="col-sm-2"
              id="court-type-tag"
            >
              Court Type
            </label>
            <select
              className="col-sm-2"
              courtType={this.state.courtType}
              onChange={this.onCourtTypeChange.bind(this)}
            >
              <option courtType="indoor">Indoor</option>
              <option courtType="outdoor">Outdoor</option>
              <option courtType="N/A">N/A</option>
            </select>

            <label htmlFor="min-age" className="col-sm-2" id="minimum-age-tag">
              Minimum Age
            </label>
            <select
              className="col-sm-2"
              minimumAge={this.state.minimumAge}
              onChange={this.onMinimumAgeChange.bind(this)}
            >
              <option minimumAge="none">None</option>
              <option minimumAge="6 to 10">6 to 10</option>
              <option minimumAge="11+">12+</option>
              <option minimumAge="18+">18+</option>
              <option minimumAge="21+">21+</option>
            </select>

            <br />
            <br />
            <br />
            <br />

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button
              type="reset"
              onClick={this.onReset.bind(this)}
              className="btn btn-secondary"
            >
              Reset
            </button>
          </div>
        </form>
        <div className="container">
        <p id="contact-note">
            Once you have submitted the form, our team will review the proposed open gym to be
            added to our weekly schedule. Whether approved or declined, we will reach out to you via
            email with our response. We appreciate your recommendations!
        </p>
        </div>
      </div>
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: this.state
    }).then(response => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  resetForm() {
    this.setState({
      name: "",
      email: "",
      message: "",
      gymName: "",
      googleAddressLink: "",
      sport: "Volleyball",
      dayOfWeek: "",
      time: "",
      cost: "",
      levelDescription: "",
      website: "",
      description: "",
      numberOfCourts: "1",
      courtType: "indoor",
      minimumAge: "None"
    });
  }
}
