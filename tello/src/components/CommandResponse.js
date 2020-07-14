import React, { Component } from 'react';
import io from 'socket.io-client';


const HOST = "http://127.0.0.1:8001";
const telloResSocket = io(HOST);

telloResSocket.on("commandResponse", data => {
    let dataView = new DataView(data);
    let decoder = new TextDecoder('utf-8');
    let decodedString = decoder.decode(dataView);
    console.log("tello responded with " + decodedString);
})

class CommandResponse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            telloResponse: ""
        }
    }


    render() {
        return(
            <div>
                <h2>Command Response</h2>
            </div>
        )
    }
}


export default CommandResponse; 