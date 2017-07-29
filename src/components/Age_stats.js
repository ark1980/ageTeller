import React, { Component } from 'react';
import partyPoper from '../assets/party-poper.jpg'

class AgeStats extends Component {

    livingTimes(date) {
        let birthdayTime = new Date(date).getTime();
        let currentDay = new Date().getTime();
        let difference = Math.abs(currentDay - birthdayTime);

        let years, months, days;
        days = Math.floor(difference / (1000*3600*24));
        years = Math.floor(days/365);
        days -= years*365;
        months = Math.floor(days/31);
        days -= months*31;

        return `${years} years ${months} months and ${days} days`
    }

    render() {
        return (
            <div>
                <h4>Congrats on {this.livingTimes(this.props.date)}!</h4>
                <img src={partyPoper} alt="party-poper" className="partyPoper w3-animate-zoom" />
            </div>
        )
    }
}

export default AgeStats;