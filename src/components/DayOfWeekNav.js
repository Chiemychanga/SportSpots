/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default class daysOfWeekNav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div id="daysOfWeekNav" className="navbar-nav">
            <a
              className="nav-item nav-link SundayLink"
              onClick={e => {this.props.handleClick("Sunday");}}
              href="#"
              title="Go to Sunday gyms"
            >
              Sunday
            </a>
            <a
              className="nav-item nav-link MondayLink"
              onClick={e => {this.props.handleClick("Monday");}}
              href="#"
              title="Go to Monday gyms"
            >
              Monday
            </a>
            <a
              className="nav-item nav-link TuesdayLink"
              onClick={e => {this.props.handleClick("Tuesday");}}
              href="#"
              title="Go to Tuesday gyms"
            >
              Tuesday
            </a>
            <a
              className="nav-item nav-link WednesdayLink"
              onClick={e => {this.props.handleClick("Wednesday");}}
              href="#"
              title="Go to Wednesday gyms"
            >
              Wednesday
            </a>
            <a
              className="nav-item nav-link ThursdayLink"
              onClick={e => {this.props.handleClick("Thursday");}}
              href="#"
              title="Go to Thursday gyms"
            >
              Thursday
            </a>
            <a
              className="nav-item nav-link FridayLink"
              onClick={e => {this.props.handleClick("Friday");}}
              href="#"
              title="Go to Friday gyms"
            >
              Friday
            </a>
            <a
              className="nav-item nav-link SaturdayLink"
              onClick={e => {this.props.handleClick("Saturday");}}
              href="#"
              title="Go to Saturday gyms"
            >
              Saturday
            </a>
          </div>
        </div>
      </nav>
    );
  }
}