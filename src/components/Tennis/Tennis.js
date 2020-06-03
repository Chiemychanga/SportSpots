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
                    className="center-iframe"
                    width="800"
                    height="600"
                    frameborder="0"
                    scrolling="no"
                    title="Tennis Google Calendar"
                />
                <h2>Need a new tennis racket?</h2>
                <Iframe url="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=chiemychanga-20&marketplace=amazon&region=US&placement=B07SC3KK57&asins=B07SC3KK57&linkId=a7656f53574cb327df38260f698035d2&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff"
                    className="center-iframe"
                    width="120"
                    height="240"
                    scrolling="no"
                    frameborder="0" />
                <SportFooter sport="Tennis" handleClick={this.handleClick} />
            </div>
        );
    }
}