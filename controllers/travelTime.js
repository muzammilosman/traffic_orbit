
var { orbits, vehicles, weather } = require('../config/keys')

const calculateMaxSpeed = (weatherNow, maxSpeed1, maxSpeed2, callback) => {
     let vehicleSpeeds = vehicles.map((vehicle) => {
        let vehicleWithSpeeds = {
            name: vehicle.name,
            maxSpeedOrbit1: vehicle.speed > maxSpeed1 ? maxSpeed1 : vehicle.speed,
            maxSpeedOrbit2: vehicle.speed > maxSpeed2 ? maxSpeed2 : vehicle.speed,
            craterTime: vehicle.craterTime.toFixed(2)
        }
        return vehicleWithSpeeds;
     })
     const currentWeather = weather.find((w) => w.name === weatherNow)
     vehicleSpeeds = vehicleSpeeds.filter((vehicle) => (currentWeather.vehicles.includes(vehicle.name)))
     calculateTotalTime(vehicleSpeeds, weatherNow, (timeTaken) => {
        sortEfficientTime(timeTaken, (leastTimeTaken) => {
            callback(leastTimeTaken)
        });
     })
}

const countCraters = (weatherNow, orbitCraters) => {
    const craterEffect = weather.find((w) => w.name === weatherNow).craterEffect;
    const totalCraters = (craterEffect * orbitCraters) + orbitCraters;
    return totalCraters
}

const calculateTotalTime = (vehiclesWithOrbitSpeed, weatherNow, callback) => {
    let timeTaken = vehiclesWithOrbitSpeed.map((vehicle) => {
        let timeForVehicle = {
            name: vehicle.name,
            timeOrbit1: ((orbits[0].distance / vehicle.maxSpeedOrbit1)
                        + (countCraters(weatherNow, orbits[0].craters) * vehicle.craterTime)).toFixed(2),
            timeOrbit2: ((orbits[1].distance / vehicle.maxSpeedOrbit2) 
                        + (countCraters(weatherNow, orbits[1].craters) * vehicle.craterTime)).toFixed(2)
        }
        return timeForVehicle
    })
    callback(timeTaken)
}

const sortEfficientTime = (timeTaken, callback) => {
    let leastTimeTaken = {
        name: '', oribitTime: 0, orbitName: ''
    }
    leastTimeTaken.name = timeTaken[0].name
    if(timeTaken[0].timeOrbit1 < timeTaken[0].timeOrbit2 || timeTaken[0].timeOrbit1 == timeTaken[0].timeOrbit2){
        leastTimeTaken.orbitName = 'ORBIT1'
        leastTimeTaken.oribitTime = timeTaken[0].timeOrbit1
    } else {
        leastTimeTaken.orbitName = 'ORBIT2'
        leastTimeTaken.oribitTime = timeTaken[0].timeOrbit2
    }
    timeTaken.forEach((vehicleData) => {
        if(vehicleData.timeOrbit1 < leastTimeTaken.oribitTime){
            leastTimeTaken.name = vehicleData.name
            leastTimeTaken.orbitName = 'ORBIT1'
            leastTimeTaken.oribitTime = vehicleData.timeOrbit1
        } else if(vehicleData.timeOrbit2 < leastTimeTaken.oribitTime){
            leastTimeTaken.name = vehicleData.name
            leastTimeTaken.orbitName = 'ORBIT2'
            leastTimeTaken.oribitTime = vehicleData.timeOrbit2
        }
    })
    callback(leastTimeTaken);
}

module.exports = {
    calculateMaxSpeed,
    countCraters,
    calculateTotalTime,
    sortEfficientTime
}