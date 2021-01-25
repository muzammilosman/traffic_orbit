var express = require('express');
const {readTextFile} = require('./controllers/readFile');
const { calculateMaxSpeed } = require('./controllers/travelTime');

var app = express();
const fileName = process.argv[2]
readTextFile(fileName, (trafficParams) => {
  if(trafficParams){
    const {weatherNow, maxSpeedOrbit1, maxSpeedOrbit2} = trafficParams
    calculateMaxSpeed(weatherNow, maxSpeedOrbit1, maxSpeedOrbit2, (bestTransport) => {
      console.log(bestTransport.name + ' ' + bestTransport.orbitName)
    })
  } else {
    console.log("Enter a valid input text file in the command line. For ex: node geektrust.js input.txt")
  }
})

module.exports = app;
