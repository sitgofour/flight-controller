import React, { Component } from 'react';
import io from 'socket.io-client';


const HOST = "http://127.0.0.1:8001";
const telloResSocket = io(HOST);

telloResSocket.on("commandResponse", data => {
    console.log("tello responded with " + data);
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
                Command Response
            </div>
        )
    }
}


export default CommandResponse; 