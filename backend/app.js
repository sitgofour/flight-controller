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
    console.log("server got: " + msg + " from " +
      rinfo.address + ":" + rinfo.port);
  });
  
  tello.on("listening", function () {
    var address = tello.address();
    console.log("server listening " +
        address.address + ":" + address.port);
  });
  
  let message = Buffer.from("command");

  tello.bind(PORT);

  tello.send(message, PORT, HOST, (err) => {
    if(err) {
      console.log("Error:");
      console.log(err);
    }
  });


// receive telloState by sending "command"
const telloState = dgram.createSocket('udp4');

telloState.on("error", function (err) {
    console.log("server error:\n" + err.stack);
    telloState.close();
  });
  
  telloState.on("message", function (msg, rinfo) {
    console.log("server got: " + msg + " from TelloState" +
      rinfo.address + ":" + rinfo.port);
  });
  
  telloState.on("listening", function () {
    var address = telloState.address();
    console.log("server listening " +
        address.address + ":" + address.port);
  });
  
telloState.bind(8890);


// command functions

const handleErrror = (error, errorMessage) => {
  if(error) {
    console.log(`Error ${errorMessage} Details: ${error}`);
  }
}

const flightCommand = (command) => {
  let comm = Buffer.from(command);
  tello.send(comm, PORT, HOST, handleErrror(error, "while sending flight command"));
}




