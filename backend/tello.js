const dgram = require('dgram');


//Tello IP: 192.168.10.1 UDP PORT:8889
// Establish Connection to Tello
const HOST = "192.168.10.1";
const PORT = 8889;
const tello = dgram.createSocket('udp4');
let count = 0;


tello.on("error", function (err) {
    console.log("server error:\n" + err.stack);
    tello.close();
  });
  
  tello.on("message", function (msg, rinfo) {
        socket.emit('commandResponse', msg);
        console.log("server got: " + msg + " from " +
        rinfo.address + ":" + rinfo.port);
  });
  
  tello.on("listening", function () {
    var address = tello.address();
    console.log("Listening for Tello " +
        address.address + ":" + address.port);
  });
  
  tello.bind(PORT);






////////////////////////////////////////////////  
// command functions
////////////////////////////////////////////////  

const handleErrror = (error, errorMessage) => {
  if(error) {
    console.log(`Error ${errorMessage} Details: ${error}`);
  }
}

const flightCommand = (command) => {
  let comm = Buffer.from(command);
  tello.send(comm, PORT, HOST, handleErrror);
}









////////////////////////////////////////////////  
// tello state commands stream
////////////////////////////////////////////////  

const telloState = dgram.createSocket('udp4');

telloState.on("error", function (err) {
    console.log("server error:\n" + err.stack);
    telloState.close();
});

telloState.on("message", function (msg, rinfo) {
  /* When you get flight info from tello here, forward it to 
    front-end using port 8001 below */

  //hacky way to throttle?
  if(count % 5 === 0) {
    
    sendTelloDataToClient(msg);
    count++;

  } else {
    count++;
  }
});

telloState.on("listening", function () {
    var address = telloState.address();
    console.log("Listening for TelloState " + address.address + ":" + address.port);
});

telloState.bind(8890);


// const telloVideoStream = dgram.createSocket('udp4');

// telloVideoStream.on("error", function (err) {
//     console.log("server error:\n" + err.stack);
//     telloState.close();
// });

// telloVideoStream.on("message", function (msg, rinfo) {
//     console.log("server got: " + msg + " from TelloState" + rinfo.address + ":" + rinfo.port);
// });

// telloVideoStream.on("listening", function () {
//     var address = telloVideoStream.address();
//     console.log("Listening for TelloVideoStream " + address.address + ":" + address.port);
// });

// telloVideoStream.bind(11111);




/* ****************************************************** */
const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const PORT2 = 8001;


const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('From server evan');
  res.end();
}).listen(PORT2);

const socket = socketIO(server);

socket.on('connect', socket => {
  console.log('connected to socket on 8001');
});

/* ****************************************************** */

function sendTelloDataToClient(data) {
  socket.emit("tello data", data);
}

/* ****************************************************** */

// function convertBufferToString(bufferObject) {

//   let dataView = new DataView(bufferObject);
//   let decoder = new TextDecoder("utf-8");

//   return decoder.decode(dataView);
// }

/* ****************************************************** */



// EXPORTS
exports.flightCommand = flightCommand;