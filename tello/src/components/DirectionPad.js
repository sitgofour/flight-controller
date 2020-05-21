import React, {Component} from 'react';
import FlightButton from './FlightButton';


class DirectionPad extends Component {
    constructor(props) {
        super(props);


    }
    render() {
        return(
            <div className="Direction-Pad">
                <div className="Height-buttons">
                    <FlightButton flightCommand={this.props.flightCommand} command="up 20"/>
                    <FlightButton flightCommand={this.props.flightCommand} command="down 20"/>
                </div>
                <div className="Directions">
                    <FlightButton flightCommand={this.props.flightCommand} command="forward 20"/>
                    <FlightButton flightCommand={this.props.flightCommand} command="back 20"/>
                    <FlightButton flightCommand={this.props.flightCommand} command="left 20"/>
                    <FlightButton flightCommand={this.props.flightCommand} command="right 20"/>
                </div>
                <div className="Rotation-buttons">
                    <FlightButton flightCommand={this.props.flightCommand} command="ccw 22"/>
                    <FlightButton flightCommand={this.props.flightCommand} command="cw 22"/>
                </div>                
            </div>
        )
    }
}


export default DirectionPad;