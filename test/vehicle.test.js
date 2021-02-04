const expect = require('chai').expect
const { Vehicle } = require('../config/vehicle')

describe('Vehicle data structure', () => {
    it('All vehicle data should be available', () => {
        const allVehicles = new Vehicle().getAllVehicles()
        expect(allVehicles).to.have.length(3)
    })

    it('Newly added vehicle should be added to the list', () => {
        const newVehicle = new Vehicle('TRUCK', 5, 10/60)
        const vehicleLength = newVehicle.getAllVehicles().length
        newVehicle.addVehicles()
        expect(newVehicle.getAllVehicles()).to.have.length(vehicleLength + 1)
    })
})