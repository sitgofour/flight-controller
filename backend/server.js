const express = require('express');
const app = express();
const PORT = 5000;
const tello = require('./tello.js');
const cors = require('cors');
 
app.use(express.json());
app.use(cors());

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.post('/', function (req, res) {
    console.log(req.body.command);
    tello.flightCommand(req.body.command);
    res.send("got your request");
});

app.listen(PORT, function() {
    console.log(`Server listening on port: ${PORT}`);
});



