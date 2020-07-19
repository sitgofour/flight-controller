import React, {Component} from 'react';
import styles from '../styles/flightbutton.module.css';

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
            <div className={styles.FlightButton}>
                <button className={styles.button} onClick={this.handleClick}>
                    {this.props.buttonText ? this.props.buttonText : this.props.command}
                </button>
            </div>
        )
    }
}

export default FlightButton;