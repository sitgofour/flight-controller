import React, {Component} from 'react';


class FlightButton extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.flightCommand(this.props.command);
    }

    render() {
        return (
            <div className="Flight-Button">
                <h3>{this.props.command}</h3>
                <button onClick={this.handleClick}>{this.props.command}</button>
            </div>
        )
    }
}

export default FlightButton;