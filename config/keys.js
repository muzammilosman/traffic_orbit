exports.orbits =  [{
        name: 'ORBIT1',
        distance: 18,
        craters: 20
    }, {
        name: 'ORBIT2',
        distance: 20,
        craters: 10
    }]

exports.vehicles = [
    {
        name: 'BIKE',
        speed: 10,
        craterTime: 2 / 60
    },
    {
        name: 'TUKTUK',
        speed: 12,
        craterTime: 1 / 60
    },
    {
        name: 'CAR',
        speed: 20,
        craterTime: 3 / 60
    }
]

exports.weather = [
    {
        name: 'RAINY',
        craterEffect: 0.2,
        vehicles: ['CAR', 'TUKTUK']
    },
    {
        name: 'SUNNY',
        craterEffect: -0.1,
        vehicles: ['CAR', 'BIKE', 'TUKTUK']
    },
    {
        name: 'WINDY',
        craterEffect: 1,
        vehicles: ['CAR', 'BIKE']
    }
]