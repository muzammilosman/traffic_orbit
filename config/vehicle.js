let allVehicles = []

class Vehicle {

    constructor(name, speed, craterTime){
       this.name = name
       this.speed = speed
       this.craterTime = craterTime
    }

    addVehicles(){
        allVehicles.push(this)
    }
    static BIKE = new Vehicle('BIKE', 10, 2/60).addVehicles()
    static TUKTUK = new Vehicle('TUKTUK', 12, 1/60).addVehicles()
    static CAR = new Vehicle('CAR', 20, 3/60).addVehicles()

    getAllVehicles(){
        return allVehicles;
    }

}

module.exports = { Vehicle }