/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default class daysOfWeekNav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
          <ul id="navbarNavAltMarkup" className="d-flex flex-row navbar-nav mx-auto">
            <li className="nav-item">
            <a
              className="nav-item nav-link text-dark SundayLink"
              onClick={e => {this.props.handleClick("Sunday");}}
              href="#"
              title="Go to Sunday gyms"
            >
              Sun
            </a>
            </li>
            <li className="nav-item">
            <a
              className="nav-item nav-link text-dark MondayLink"
              onClick={e => {this.props.handleClick("Monday");}}
              href="#"
              title="Go to Monday gyms"
            >
              Mon
            </a>
            </li>
            <li className="nav-item">
            <a
              className="nav-item nav-link text-dark TuesdayLink"
              onClick={e => {this.props.handleClick("Tuesday");}}
              href="#"
              title="Go to Tuesday gyms"
            >
              Tue
            </a>
            </li>
            <li className="nav-item">
            <a
              className="nav-item nav-link text-dark WednesdayLink"
              onClick={e => {this.props.handleClick("Wednesday");}}
              href="#"
              title="Go to Wednesday gyms"
            >
              Wed
            </a>
            </li>
            <li className="nav-item">
            <a
              className="nav-item nav-link text-dark ThursdayLink"
              onClick={e => {this.props.handleClick("Thursday");}}
              href="#"
              title="Go to Thursday gyms"
            >
              Thu
            </a>
            </li>
            <li className="nav-item">
            <a
              className="nav-item nav-link text-dark FridayLink"
              onClick={e => {this.props.handleClick("Friday");}}
              href="#"
              title="Go to Friday gyms"
            >
              Fri
            </a>
            </li>
            <li className="nav-item">
            <a
              className="nav-item nav-link text-dark SaturdayLink"
              onClick={e => {this.props.handleClick("Saturday");}}
              href="#"
              title="Go to Saturday gyms"
            >
              Sat
            </a>
            </li>
          </ul>
      </nav>
    );
  }
}