import React, {Component} from 'react';
import FlightButton from './FlightButton';
import styles from '../styles/takeOffLand.module.css';

class TakeOffLand extends Component {
    render() {
        return(
            <div className={styles.TakeOffLand}>
                <FlightButton flightCommand={this.props.flightCommand} command="takeoff"/>
                <FlightButton flightCommand={this.props.flightCommand} command="land"/>
            </div>
        )
    }
}

export default TakeOffLand;