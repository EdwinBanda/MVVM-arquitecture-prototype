let mockedRides = [
    {
        id: 1,
        origin: "isutc",
        destination: "home",
        date: "02-15-2024"
    },
    {
        id: 2,
        origin: "isutc",
        destination: "home",
        date: "02-15-2024"
    },
    {
        id: 3,
        origin: "isutc",
        destination: "home",
        date: "02-07-2024"
    },
    {
        id: 4,
        origin: "isutc",
        destination: "home",
        date: "02-05-2024"
    }
]

const isValidRide = (ride)=>{
    const rideProperties = ["origin", "destination", "date"]
    return rideProperties.every(prop => ride.hasOwnProperty(prop) && typeof(ride[prop]) === String)
}

const addRide = (newRide)=>{

    newRide.id = mockedRides.length + 1
    mockedRides.push(newRide)
}

const cleanmockedRides = ()=>{
    mockedRides = mockedRides.filter(isValidRide)
}

const deleteRide = (id)=>{
    if(mockedRides){
        mockedRides = mockedRides.filter(ride => ride.id !== id)
    }
}

module.exports = mockedRides
module.exports = addRide
module.exports = deleteRide

