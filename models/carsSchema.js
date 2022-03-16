const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const carsSchema = new Schema({
    name : {type: 'String'},
    image : {type: 'String'},
    capacity : {type: 'Number'},
    fuelType : {type: 'String'},
    bookedTimeSlots : [
        {
            from : {type : String },
            to : {type : String }
        }
    ] , 

    rentPerHour : {type: 'Number'}
});
module.exports = mongoose.model('cars',carsSchema)