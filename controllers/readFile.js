const fs = require('fs');

exports.readTextFile = (filename, callback) => {
    if(filename){
        fs.readFile(filename, 'utf-8', (err, data) => {
            if(err) throw err;
            if(data){
                const orbitDataAsList = data.split(' ');
                const trafficData = {
                    weatherNow: orbitDataAsList[0].trim().toUpperCase(),
                    maxSpeedOrbit1: parseInt(orbitDataAsList[1]),
                    maxSpeedOrbit2: parseInt(orbitDataAsList[2])
                }
                callback(trafficData);
            }
        })
    } else {
        callback(null);
    }
}