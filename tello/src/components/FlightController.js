import React, {Component} from 'react';
import FlightButton from './FlightButton';
import FlightData from './FlightData';
import axios from 'axios';
import DirectionPad from './DirectionPad';
import FlipPad from './FlipPad';
import TakeOffLand from './TakeOffLand';
import styles from '../styles/flightController.module.css';


class FlightController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusText: "Waiting For Command"
        }

        this.flightCommand = this.flightCommand.bind(this);
    }

    flightCommand(command) {
        // post string to root route
        axios.post("http://localhost:5000/", {
            "command": command
        })
            .then(res => {
                console.log(res);
                let statusText = res.statusText;
                this.setState({statusText: statusText})
            })
            .catch(error => {
                console.log(`error issuing command: ${error}`);
            }) 
        console.log(`the "${command}" command has been sent`);
    }

    render() {
        return (
            <div className={styles.ControllerWrapper}>

                <div className={styles.SubWrapper}>    
                    <div className={styles.FlightController}>
                        <div className={styles.FlightStatus}>
                            <FlightButton flightCommand={this.flightCommand} command="command" buttonText="Flight Status?"/>
                        </div>
                        <TakeOffLand flightCommand={this.flightCommand} />
                        <FlipPad flightCommand={this.flightCommand} />
                    </div>
                <div>
                    <DirectionPad flightCommand={this.flightCommand} />
                </div>
                </div>

                <div>
                    <div className={styles.Emergency}>
                        <FlightButton className={styles.Emergency} flightCommand={this.flightCommand} command="emergency" />
                    </div>
                    <FlightData 
                        statusText={this.state.statusText}
                        className={styles.FlightData}
                    />
                </div>
                
            </div>
        );
    }
}

export default FlightController;