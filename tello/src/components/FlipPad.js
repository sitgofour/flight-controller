import React, {Component} from 'react';
import FlightButton from './FlightButton';
import styles from '../styles/flippad.module.css';


class FlipPad extends Component {
    render() {
        return (
            <div className={styles.FlipPad}>
                <div><FlightButton flightCommand={this.props.flightCommand} command="flip l"/></div>
                <div className={styles.forwardBack}>
                    <FlightButton flightCommand={this.props.flightCommand} command="flip f"/>
                    <FlightButton flightCommand={this.props.flightCommand} command="flip b"/>
                </div>
                <div><FlightButton flightCommand={this.props.flightCommand} command="flip r"/></div>
            </div>
        )
    }
}

export default FlipPad;