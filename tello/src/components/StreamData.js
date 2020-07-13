import React, {Component} from 'react';
import socketIOClient from "socket.io-client";


class StreamData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "telloData": ""
        }
    }
    render() {

        const socket = socketIOClient('http://localhost:8000/');

        socket.on('news', data => {
            this.setState({
                "telloData": data
            });
        });


        return (
            <div>
                <h2>stream data</h2>
                <p>{this.state.data}</p>
            </div>
        )
    }
}


export default StreamData;