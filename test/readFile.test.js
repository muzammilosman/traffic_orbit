const expect = require('chai').expect
const { readTextFile } = require('../controllers/readFile')

describe('Reading input file', () => {
    it('weather should be fetched from the input file', () => {
        readTextFile('input.txt', (result) => {
            expect(result).to.have.property('weatherNow')
        })
    });

    it('maximum orbit speed should be fetched from the input file', () => {
        readTextFile('input.txt', (result) => {
            expect(result).to.have.property('maxSpeedOrbit1')
            expect(result).to.have.property('maxSpeedOrbit2')
        })
    });
})