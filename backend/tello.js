const dgram = require('dgram');


//Tello IP: 192.168.10.1 UDP PORT:8889
// Establish Connection to Tello
const HOST = "192.168.10.1";
const PORT = 8889;
const tello = dgram.createSocket('udp4');


tello.on("error", function (err) {
    console.log("server error:\n" + err.stack);
    tello.close();
  });
  
  tello.on("message", function (msg, rinfo) {
    setTimeout(function() {
        console.log("server got: " + msg + " from " +
        rinfo.address + ":" + rinfo.port);
    }, 5000);
  });
  
  tello.on("listening", function () {
    var address = tello.address();
    console.log("Listening for Tello " +
        address.address + ":" + address.port);
  });
  
  tello.bind(PORT);


// command functions

const handleErrror = (error, errorMessage) => {
  if(error) {
    console.log(`Error ${errorMessage} Details: ${error}`);
  }
}

const flightCommand = (command) => {
  let comm = Buffer.from(command);
  tello.send(comm, PORT, HOST, handleErrror);
}






// tello state commands stream

const telloState = dgram.createSocket('udp4');

telloState.on("error", function (err) {
    console.log("server error:\n" + err.stack);
    telloState.close();
});

telloState.on("message", function (msg, rinfo) {
  setInterval(function() {
    console.log("server got: " + msg + " from TelloState" + rinfo.address + ":" + rinfo.port);
  }, 5000);
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


// EXPORTS
exports.flightCommand = flightCommand;