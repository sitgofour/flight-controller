import React, {Component} from 'react';
import FlightButton from './FlightButton';


class TakeOffLand extends Component {
    render() {
        return(
            <div className="TakeOffLand">
                <FlightButton flightCommand={this.props.flightCommand} command="takeoff"/>
                <FlightButton flightCommand={this.props.flightCommand} command="land"/>
            </div>
        )
    }
}

export default TakeOffLand;