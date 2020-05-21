import React, {Component} from 'react';
import FlightButton from './FlightButton';


class FlipPad extends Component {
    render() {
        return (
            <div className="Flip-Pad">
                <div><FlightButton flightCommand={this.props.flightCommand} command="flip f"/></div>
                <div>
                    <FlightButton flightCommand={this.props.flightCommand} command="flip l"/>
                    <FlightButton flightCommand={this.props.flightCommand} command="flip r"/>
                </div>
                <div><FlightButton flightCommand={this.props.flightCommand} command="flip b"/></div>
            </div>
        )
    }
}

export default FlipPad;