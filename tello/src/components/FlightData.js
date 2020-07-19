import React, { Component } from 'react';



class FlightData extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return(
            <div>
                <h3>Flight Status: {this.props.statusText}</h3>
            </div>
        )
    }
}


export default FlightData; 



