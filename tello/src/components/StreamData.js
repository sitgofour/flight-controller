import React, {Component} from 'react';
import socketIOClient from "socket.io-client";
const socket = socketIOClient('http://localhost:8001/');

function telloDataSocket(cb) {
    socket.on("tello data", (data) => cb(data)); 
}


class StreamData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            telloData: "Data",
        }
        telloDataSocket((data) => {
            let dataView = new DataView(data);
            let decoder = new TextDecoder("utf-8");
            let newData = decoder.decode(dataView);
            this.setState({
                telloData: newData
            });
        });
    }


    render() {

        return (
            <div>
                <h2>Stream data</h2>
                <p>{this.state.telloData}</p>
            </div>
        )
    }
}


export default StreamData;