
var { orbits, vehicles, weather } = require('../config/keys')

exports.calculateMaxSpeed = (weatherNow, maxSpeed1, maxSpeed2, callback) => {
     let vehicleSpeeds = vehicles.map((vehicle) => {
        let vehicleWithSpeeds = {
            name: vehicle.name,
            maxSpeedOrbit1: vehicle.speed > maxSpeed1 ? maxSpeed1 : vehicle.speed,
            maxSpeedOrbit2: vehicle.speed > maxSpeed2 ? maxSpeed2 : vehicle.speed,
            craterTime: vehicle.craterTime
        }
        return vehicleWithSpeeds;
     })
     const currentWeather = weather.find((w) => w.name === weatherNow)
     vehicleSpeeds = vehicleSpeeds.filter((vehicle) => (currentWeather.vehicles.includes(vehicle.name)))
     this.calculateTotalTime(vehicleSpeeds, weatherNow, (timeOnTraffic) => {
         callback(timeOnTraffic)
     })
}

const countCraters = (weatherNow, orbitCraters) => {
    const craterEffect = weather.find((w) => w.name === weatherNow).craterEffect;
    const totalCraters = (craterEffect * orbitCraters) + orbitCraters;
    return totalCraters
}

exports.calculateTotalTime = (vehiclesWithOrbitSpeed, weatherNow, callback) => {
    let timeTaken = vehiclesWithOrbitSpeed.map((vehicle) => {
        let timeForVehicle = {
            name: vehicle.name,
            timeOrbit1: (orbits[0].distance / vehicle.maxSpeedOrbit1) 
                        + (countCraters(weatherNow, orbits[0].craters) * vehicle.craterTime),
            timeOrbit2: (orbits[1].distance / vehicle.maxSpeedOrbit1) 
                        + (countCraters(weatherNow, orbits[1].craters) * vehicle.craterTime)
        }
        return timeForVehicle
    })
    callback(timeTaken);
}