import React from "react";
import "../css/content.css";
import "./css/basketball.css";
import SportFooter from "../SportFooter.js";
import "bootstrap/dist/css/bootstrap.min.css";
import DayOfWeekNav from "../DayOfWeekNav";
import DisplayGyms from "./displayGyms";
import gyms from "./gymsArray";
import GMAP from "../GMap";
import Iframe from "react-iframe";

export default class Basketball extends React.Component {
  constructor() {
    super();
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    this.state = {
      dayOfWeek: weekday[d.getDay()]
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
        <br />
        <DayOfWeekNav handleClick={this.handleClick} />
        <br />
        <h1 className="align-center">{this.state.dayOfWeek} Basketball</h1>
        <br />
        <br />
        <GMAP dayOfWeek={this.state.dayOfWeek} gymsArray={gyms} />
        <div className="gym-spots">
          <h2>Open Gyms</h2>
          <DisplayGyms dayOfWeek={this.state.dayOfWeek} />
        </div>
        <br />
        <Iframe url="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=ZWFna2N2ZjFvM2xldmJtaHAyM3A1NWlrcDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23795548"
          className="center-iframe"
          width="800"
          height="600"
          frameborder="0"
          scrolling="no"
          title="Basketball Google Calendar"
        />
        <br/>
        <h2>Need a new basketball?</h2>
        <Iframe className="center-iframe" width="120" height="240" scrolling="no" frameborder="0" url="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=chiemychanga-20&marketplace=amazon&region=US&placement=B0009KMXWY&asins=B0009KMXWY&linkId=88e027f8aec06d416af7e14644b1e284&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
    </Iframe>
        <SportFooter sport="Basketball" handleClick={this.handleClick} />
      </div>
    );
  }
}