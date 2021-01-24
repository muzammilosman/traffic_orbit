var express = require('express');
const path = require('path');
const fs = require('fs');
var router = express.Router();
const vehicles = require('../config/keys').vehicles
const {calculateMaxSpeed} = require('../controllers/travelTime')
const {readTextFile} = require('../controllers/readFile')

/* GET home page. */
router.get('/', function(req, res, next) {
  readTextFile('input.txt', (trafficParams) => {
    const {weatherNow, maxSpeedOrbit1, maxSpeedOrbit2} = trafficParams
    calculateMaxSpeed(weatherNow, maxSpeedOrbit1, maxSpeedOrbit2, (bestTransport) => {
      console.log(bestTransport.name + ' ' + bestTransport.orbitName)
      res.send(bestTransport.name + ' ' + bestTransport.orbitName);
    })
  })
});

module.exports = router;
