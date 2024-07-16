let mockRides = [
    {
        id: 1,
        origin: "isutc",
        destination: "Home",
        date: "06/01/2001"
        },
    {
        id: 2,
        origin: "isutc",
        destination: "Zimpas",
        date: "06/01/2001"
        },
    {
        id: 3,
        origin: "isutc",
        destination: "Museu",
        date: "06/01/2001"
        }
]

const isValidRide = (ride)=>{
    const rideProperties = ["origin", "destination", "date"]
    return rideProperties.every(prop => ride.hasOwnProperty(prop) && typeof(ride[prop]) === String)
}

const addRide = (newRide)=>{
    if(isValidRide(newRide)){
        newRide.id = mockRides.length + 1
        mockRides.push(newRide)
    }else{
        throw new Error("Dados invalidos")
    }
}

const cleanMockRides = ()=>{
    mockRides = mockRides.filter(isValidRide)
}

const deleteRide = (id)=>{
    
    if(mockRides){
        mockRides = mockRides.filter(ride => ride.id !== id)
    }
}

module.exports = mockRides
module.exports = addRide
module.exports = deleteRide
module.exports = cleanMockRides
