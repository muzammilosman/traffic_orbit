const { Vehicle } = require('../config/vehicle')
const { Weather } = require('../config/weather')
const { Orbit } = require('../config/orbits')

const calculateMaxSpeed = (weatherNow, maxSpeed1, maxSpeed2, callback) => {
    const allVehicles = new Vehicle();
    let vehicleSpeeds = allVehicles.getAllVehicles().map((vehicle) => {
        let vehicleWithSpeeds = {
            name: vehicle.name,
            maxSpeedOrbit1: vehicle.speed > maxSpeed1 ? maxSpeed1 : vehicle.speed,
            maxSpeedOrbit2: vehicle.speed > maxSpeed2 ? maxSpeed2 : vehicle.speed,
            craterTime: vehicle.craterTime.toFixed(2)
        }
        return vehicleWithSpeeds;
     })
     const weatherModel = new Weather()
     const currentWeather = weatherModel.getWeatherByName(weatherNow).name
     vehicleSpeeds = vehicleSpeeds.filter((vehicle) =>
         (weatherModel.checkVehicleInWeather(currentWeather, vehicle.name)))
     calculateTotalTime(vehicleSpeeds, weatherNow, (timeTaken) => {
         sortEfficientTime(timeTaken, (leastTimeTaken) => {
             callback(leastTimeTaken)
         });
     })
}

const countCraters = (weatherNow, orbitCraters) => {
    const weathers = new Weather()
    const craterEffect = weathers.getWeatherByName(weatherNow).craterEffect;
    const totalCraters = (craterEffect * orbitCraters) + orbitCraters;
    return totalCraters
}

const calculateTotalTime = (vehiclesWithOrbitSpeed, weatherNow, callback) => {
    const orbitModel = new Orbit()
    let timeTaken = vehiclesWithOrbitSpeed.map((vehicle) => {
        let timeForVehicle = { name: vehicle.name }
        orbitModel.getAllOrbits().forEach((orbit, i) => {
            timeForVehicle['timeOrbit' + (i+1)] = ((orbitModel.getOrbitDistance(i) / vehicle['maxSpeedOrbit' + (i+1)])
                    + (countCraters(weatherNow, orbitModel.getOrbitCraters(i)) * vehicle.craterTime)).toFixed(2)
        })
        return timeForVehicle
    })
    callback(timeTaken)
}

const sortEfficientTime = (timeTaken, callback) => {
    const orbitModel = new Orbit();
    let leastTimeTaken = {
        name: '', oribitTime: 0, orbitName: ''
    }
    leastTimeTaken.name = timeTaken[0].name
    if(timeTaken[0].timeOrbit1 < timeTaken[0].timeOrbit2 || timeTaken[0].timeOrbit1 == timeTaken[0].timeOrbit2){
        leastTimeTaken.orbitName = orbitModel.getOrbitName(0)
        leastTimeTaken.oribitTime = timeTaken[0].timeOrbit1
    } else {
        leastTimeTaken.orbitName = orbitModel.getOrbitName(1)
        leastTimeTaken.oribitTime = timeTaken[0].timeOrbit2
    }
    timeTaken.forEach((vehicleData, i) => {
        orbitModel.getAllOrbits().forEach((orbit, j) => {
            if(vehicleData['timeOrbit' + (j+1)] < leastTimeTaken.oribitTime){
                leastTimeTaken.name = vehicleData.name
                leastTimeTaken.orbitName = orbit.name
                leastTimeTaken.oribitTime = vehicleData['timeOrbit' + (j+1)]
            }
        })
    })
    callback(leastTimeTaken);
}

module.exports = {
    calculateMaxSpeed,
    countCraters,
    calculateTotalTime,
    sortEfficientTime
}