const express = require('express')
const app = express()
const port = 3002
const rides = require('../routes/rides.js')


app.use(express.json())

app.get('/', (req, res)=>{
    res.send("Yess")
})

app.use('/rides', rides)

app.listen(port, () =>{
    console.log(`Servidor rodando! em ${port}`)
})