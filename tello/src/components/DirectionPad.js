import React, {Component} from 'react';
import FlightButton from './FlightButton';
import styles from '../styles/directionpad.module.css';

class DirectionPad extends Component {
    render() {
        return(
            <div className={styles.DirectionPad}>
                <div className={styles.elevators}>
                    <FlightButton flightCommand={this.props.flightCommand} command="up 20"/>
                    <FlightButton flightCommand={this.props.flightCommand} command="down 20"/>
                </div>
                <div className={styles.Directions}>
                    <div className={styles.LDirection}>
                        <FlightButton flightCommand={this.props.flightCommand} command="left 20"/>
                    </div>
                    <div className={styles.ForwardBackDirection}>
                        <FlightButton flightCommand={this.props.flightCommand} command="forward 20"/>
                        <FlightButton flightCommand={this.props.flightCommand} command="back 20"/>
                    </div>
                    <div className={styles.RDirection}>
                        <FlightButton flightCommand={this.props.flightCommand} command="right 20"/>
                    </div>
                </div>
                <div className={styles.rotators}>
                    <FlightButton flightCommand={this.props.flightCommand} command="ccw 22"/>
                    <FlightButton flightCommand={this.props.flightCommand} command="cw 22"/>
                </div>                
            </div>
        )
    }
}


export default DirectionPad;