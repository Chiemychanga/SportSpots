import React from 'react';
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import {OpenGymInst} from "./OpenGymInst";

let openGyms = [
    new OpenGymInst("Mt. Scott Community Center", "5530 Southeast 72nd Avenue", "Sunday", "2:30-4:30 PM", "$0-$6.25", "All Ages"),
    new OpenGymInst("Mt. Scott Community Center", "5530 Southeast 72nd Avenue", "Tuesday", "7:20-9:20 PM", "$0-$6.25", "Ages 18+ (ID Required)"),
    new OpenGymInst("Mt. Scott Community Center", "5530 Southeast 72nd Avenue", "Thursday", "7:20-9:20 PM", "$0-$6.25", "Ages 18+ (ID Required)"),
    new OpenGymInst("Mt. Scott Community Center", "5530 Southeast 72nd Avenue", "Saturday", "4:45-6:45 PM", "$0-$6.25", "Ages 30+ (ID Required)"),
    new OpenGymInst("Mt. Scott Community Center", "5530 Southeast 72nd Avenue", "Sunday", "4:45-6:45 PM", "$0-$6.25", "Ages 30+ (ID Required)")
]

export class Basketball extends React.Component {
    render() {
        return (
            <div>
                <OpenGymInst gymName="Mt. Scott Community Center" address="5530 Southeast 72nd Avenue" time="2:30-4:30 PM" cost="$0-$6.25" description="All Ages." />
            </div>
        )
    }
}