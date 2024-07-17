const express = require('express')
const route = express()
const mockRides = require('../../models/ridesdb')
const addRide = require('../../models/ridesdb')
const deleteRide = require('../../models/ridesdb')
// const cleanMockRides = require('../../models/ridesdb')


route.get('/', (req, res)=>{
    // cleanMockRides()
    res.send(mockRides)
})

route.post('/',(req,res)=>{
    const {origin, destination, date} = req.body
    const newRide = {origin, destination, date}
    addRide(newRide)
    res.status(201).json(newRide)
    res.send(mockRides)
})

route.delete('/rides/:id', (req,res)=>{
    const rideId = parseInt(req.params.id)

    if (isNaN(rideId)) {
        return res.status(400).json({ error: 'ID inválido' });
      }

    deleteRide(rideId)
    res.send("Deleted!").status(204).end()
})

module.exports = route