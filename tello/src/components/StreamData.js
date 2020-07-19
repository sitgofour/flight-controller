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
            telloData: ["data"],
        }
        telloDataSocket((data) => {
            let dataView = new DataView(data);
            let decoder = new TextDecoder("utf-8");
            let newData = decoder.decode(dataView);
            let dataArr = newData.split(";");
            console.log(dataArr);
            this.setState({
                telloData: dataArr
            });
        });
    }


    render() {

        return (
            <div>
                <h2>Stream data</h2>
                <div>
                    {this.state.telloData.map(str => <p>{str}</p>)}
                </div>
            </div>
        )
    }
}


export default StreamData;