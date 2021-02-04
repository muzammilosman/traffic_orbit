let allWeathers = []

class Weather {
    constructor(name, craterEffect, vehicles){
        this.name = name
        this.craterEffect = craterEffect
        this.vehicles = vehicles
    }

    addWeather(){
        allWeathers.push(this)
    }

    getAllWeathers(){
        return allWeathers
    }

    static RAINY = new Weather('RAINY', 0.2, ['CAR', 'TUKTUK']).addWeather();
    static SUNNY = new Weather('SUNNY', -0.1, ['CAR', 'BIKE', 'TUKTUK']).addWeather();
    static WINDY = new Weather('WINDY', 1, ['CAR', 'BIKE']).addWeather();

    getWeatherByName(weatherName){
        return allWeathers.find((weather) => weather.name === weatherName);
    }

    checkVehicleInWeather(weather, vehicleName){
        const matchedWeather = this.getWeatherByName(weather);
        return matchedWeather.vehicles.includes(vehicleName);
    }
}

module.exports = { Weather } 