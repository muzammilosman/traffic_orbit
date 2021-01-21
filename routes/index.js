var express = require('express');
const path = require('path');
const fs = require('fs');
var router = express.Router();
const vehicles = require('../config/keys').vehicles
const {calculateMaxSpeed} = require('../controllers/travelTime')

/* GET home page. */
router.get('/', function(req, res, next) {
  calculateMaxSpeed('WINDY', 14, 20, (responseVehicles) => {
    console.log("responded:",responseVehicles)
  })
  fs.readFile(process.cwd() + '/views/index.html', 'utf8', (err, text) => {
    res.send(text);
  });
});

module.exports = router;
