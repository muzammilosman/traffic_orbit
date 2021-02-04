const expect = require('chai').expect
const { Orbit } = require('../config/orbits')

describe('Orbits data structure', () => {
    it('Orbits model should have the two orbit details', () => {
        const orbitModel = new Orbit().getAllOrbits()
        expect(orbitModel).to.have.length(2);
    })

    it('New orbit should be added to the list of orbits', () => {
        const orbitModel = new Orbit('ORBIT3', 22, 20)
        const orbitLength = orbitModel.getAllOrbits().length
        orbitModel.addorbit()
        const allOrbits = orbitModel.getAllOrbits()
        expect(allOrbits).to.have.length(orbitLength + 1)
    })

    it('All orbit properties are returned based on index', () => {
        const orbitModel = new Orbit()
        const matchedOrbitName = orbitModel.getOrbitName(1)
        const matchedOrbitDistance = orbitModel.getOrbitDistance(1)
        const matchedCraters = orbitModel.getOrbitCraters(1)
        expect(matchedOrbitName).to.be.a('string').that.does.not.have.length(0)
        expect(matchedOrbitDistance).to.be.a('number').that.is.not.lessThan(0)
        expect(matchedCraters).to.be.a('number').that.is.not.lessThan(0)
    })  
})