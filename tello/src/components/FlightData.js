import React, { Component } from 'react';
import styles from '../styles/flightdata.module.css';


class FlightData extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return(
            <div className={styles.FlightData}>
                <h3 className={styles.FlightDataH3}>Flight Status: {this.props.statusText}</h3>
            </div>
        )
    }
}


export default FlightData; 



