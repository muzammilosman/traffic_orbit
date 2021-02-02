const expect = require('chai').expect
const { calculateMaxSpeed, countCraters, calculateTotalTime, sortEfficientTime } = require('../controllers/travelTime');

describe('Calculating fastest speed and orbit', () => {
    it('Fastest vehicle should be non empty', () => {
        calculateMaxSpeed('RAINY', 20, 40, (result) => {
            expect(result).to.have.property('name')
            expect(result.name).to.be.a('string').that.does.not.have.length(0);
        })
    });

    it('Fastest orbit name should not be empty', () => {
        calculateMaxSpeed('RAINY', 20, 40, (result) => {
            expect(result).to.have.property('orbitName')
            expect(result.orbitName).to.be.a('string')
        })
    });

    it('Craters returned should be a number', () => {
        const numberOfCraters = countCraters('RAINY')
        expect(numberOfCraters).to.be.a('number')
    });

    it('Total time taken should be non empty array with orbit times', () => {
        const vehicleDetails = [
            {
              name: 'TUKTUK',
              maxSpeedOrbit1: 12,
              maxSpeedOrbit2: 12,
              craterTime: 0.02
            },
            {
              name: 'CAR',
              maxSpeedOrbit1: 20,
              maxSpeedOrbit2: 20,
              craterTime: 0.05
            }
          ]
        calculateTotalTime(vehicleDetails, 'RAINY', (totalTimeTaken) => {
            expect(totalTimeTaken).to.have.length(vehicleDetails.length);
            expect(totalTimeTaken).to.be.an('array')
            expect(totalTimeTaken[0]).to.include.all.keys('name', 'timeOrbit1', 'timeOrbit2')
        })
    });

    it('Least time taken should be an object with no undefined values', () => {
        const timeTaken = [
            { name: 'TUKTUK', timeOrbit1: 1.98, timeOrbit2: 1.91 },
            { name: 'CAR', timeOrbit1: 2.10, timeOrbit2: 1.60 }
          ]
        sortEfficientTime(timeTaken, (efficientTime) => {
            expect(efficientTime).to.include.all.keys('name', 'oribitTime', 'orbitName')
            expect(efficientTime.oribitTime).to.be.greaterThan(0);
        })
    })
})