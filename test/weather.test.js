const expect = require('chai').expect
const { Weather } = require('../config/weather')

describe('Weather data structure', () => {
    it('All weather data should be available', () => {
        const weatherModel = new Weather()
        expect(weatherModel.getAllWeathers()).to.have.length(3)
    })

    it('Newly added weather should be added to the list', () => {
        const weatherModal = new Weather('SPRING', 0.6, ['CAR', 'BIKE'])
        const weatherLength = weatherModal.getAllWeathers().length
        weatherModal.addWeather();
        expect(weatherModal.getAllWeathers().length).to.be.equal(weatherLength + 1)
    })

    it('Matched weather should return all the properties', () => {
        const weatherModel = new Weather()
        const matchedWeather = weatherModel.getWeatherByName('RAINY')
        expect(matchedWeather).to.have.property('name').that.is.a('string')
        expect(matchedWeather).to.have.property('craterEffect').that.is.a('number')
        expect(matchedWeather).to.have.property('vehicles').that.is.an('array')
    })

    it('If the vehicle is available for the weather, should return true', () => {
        const weatherModel = new Weather()
        expect(weatherModel.checkVehicleInWeather('RAINY', 'CAR')).is.true
        expect(weatherModel.checkVehicleInWeather('RAINY', 'BIKE')).is.false
    })
})