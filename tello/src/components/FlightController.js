import React, {Component} from 'react';
import FlightButton from './FlightButton';
import axios from 'axios';


class FlightController extends Component {
    constructor(props) {
        super(props);

        this.flightCommand = this.flightCommand.bind(this);
    }

    flightCommand(command) {
        // post string to root route
        axios.post("http://localhost:5000/", {
            "command": command
        })
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.log(`error issuing command: ${error}`);
            }) 
        console.log(`the "${command}" command has been sent`);
    }

    render() {
        return (
            <div className = "FlightController">
                <h1>Flight Controls</h1>
                <FlightButton flightCommand={this.flightCommand} command="command"/>
                <FlightButton flightCommand={this.flightCommand} command="battery?"/>
            </div>
        );
    }
}

export default FlightController;