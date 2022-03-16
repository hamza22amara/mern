const express = require('express')
const router = express.Router()
const cars = require('../models/carsSchema')

router.post('/newcars', (req,res) => {
   
    let newcars = new cars({
        name : req.body.name,
        image : req.body.image,
        capacity :req.body.capacity,
        fuelType :req.body.fuelType,
        rentPerHour : req.body.rentPerHour
    })


    newcars.save((err,data) => {
        err ? console.log(err) : res.send('car was added')
    })
})
router.get("/getAllcars", async (req, res) => {
    try {
      const cars = await Car.find();
      res.send(cars);
    } catch (error) {
      return res.status(400).json(error);
    }
  });
  router.post("/editcar", async (req, res) => {
    try {
      const car = await Car.findOne({ _id: req.body._id });
      car.name = req.body.name;
      car.image = req.body.image;
      car.fuelType = req.body.fuelType;
      car.rentPerHour = req.body.rentPerHour;
      car.capacity = req.body.capacity;
  
      await car.save();
  
      res.send("Car details updated successfully");
    } catch (error) {
      return res.status(400).json(error);
    }
  });
  router.post("/deletecar", async (req, res) => {
    try {
      await Car.findOneAndDelete({ _id: req.body.carid });
  
      res.send("Car deleted successfully");
    } catch (error) {
      return res.status(400).json(error);
    }
  });



module.exports = router