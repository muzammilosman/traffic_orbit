let allOrbits = []
class Orbit {
    constructor(name, distance, craters) {
        this.name = name
        this.distance = distance
        this.craters = craters
    }

    addorbit(){
        allOrbits.push(this)
    }

    getAllOrbits(){
        return allOrbits
    }

    getOrbitName(index){
        return allOrbits[index].name
    }

    getOrbitCraters(index){
        return allOrbits[index].craters
    }

    getOrbitDistance(index){
        return allOrbits[index].distance
    }

    static ORBIT1 = new Orbit('ORBIT1', 18, 20).addorbit()
    static ORBIT2 = new Orbit('ORBIT2', 20, 10).addorbit()

}

module.exports = { Orbit }