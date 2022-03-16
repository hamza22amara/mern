const express = require('express')
const app = express()
const mongoose = require('mongoose')
app.use(express.json());

const mongoUrl = "mongodb+srv://hamzaamara:hamzaamara123@cluster0.rm0uv.mongodb.net/DARELBAYHOUSE?retryWrites=true&w=majority"

mongoose.connect(mongoUrl, (err)=>{
    err ? console.log(err) : console.log('database is connected ')
})

app.use('/cars', require('./routes/carsRoute'))
app.use('/users' , require('./routes/userRoute'))
app.use('/bookings' , require('./routes/bookingRoute'))


const path = require('path')

if(process.env.NODE_ENV==='production')
{

    app.use('/' , express.static('client/build'))

    app.get('*' , (req , res)=>{

          res.sendFile(path.resolve(__dirname, 'client/build/index.html'));

    })

}

app.get('/', (req, res) => res.send('Hello World!'))
const port = 5000
app.listen( port, (err)=>{
    err ? console.log(err) : console.log('serveur is runing on port 5000')

})