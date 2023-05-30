const express = require("express")
const {FlightModel}=require("../models/flight.model")
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const flight_route = express.Router()


flight_route.get("/api/flights",async (req,res)=>{
 try {
  const flights = await FlightModel.find({})
  if(!flights){
   res.send("No flights available")
  }else{
   res.send(flights)
  }
 } catch (error) {
  res.send("error in fetching flights")
        console.log(error);
 }
})

flight_route.post("/api/flights",async (req,res)=>{
  const {airline,flightNo,departure,arrival,departureTime,arrivalTime,seats,price} = req.body
  try {
    const flights = new FlightModel({airline,flightNo,departure,arrival,departureTime,arrivalTime,seats,price})
                await flights.save()
                res.send("flight added succesfully")
  } catch (error) {
    res.send("error in adding the flights")
        console.log(error);
  }
})

flight_route.get("/api/flights/:id", async (req,res)=>{
   const id = req.params.id;
  try {
   if (!ObjectId.isValid(id)) {
      return res.status(404).json({ message: 'flight not found' });
    }
  const flightById = await FlightModel.findById(id);
    if (!flightById) {
      return res.status(404).json({ message: 'flight not found' });
    }

    res.json(flightById);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }


})



flight_route.put('/api/flights/:id', async (req, res) => {
  const id = req.params.id;
  if (!ObjectId.isValid(id)) {
    return res.status(404).json({ message: 'Invalid ID' });
  }

  const { airline,flightNo,departure,arrival,departureTime,arrivalTime,seats,price } = req.body;
  try {
    const updatedflight = await FlightModel.findByIdAndUpdate(id, {
      airline,flightNo,departure,arrival,departureTime,arrivalTime,seats,price
    }, { new: true });
    if (!updatedflight) {
      return res.status(404).json({ message: 'flight not found' });
    }
    res.json(updatedflight);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


flight_route.delete('/api/flights/:id', async (req, res) => {
  const id = req.params.id;
  if (!ObjectId.isValid(id)) {
    return res.status(404).json({ message: 'Invalid ID' });
  }

  const { airline,flightNo,departure,arrival,departureTime,arrivalTime,seats,price } = req.body;
  try {
    const deletebyid = await FlightModel.findByIdAndDelete(id);
    if (!deletebyid) {
      return res.status(404).json({ message: 'flight not found' });
    }
    res.send("deleted flight");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


 /*  "airline": "jet",
  "flightNo": "String",
  "departure": "String",
  "arrival": "String",
  "departureTime": "2023-06-01T10:30:00Z",
  "arrivalTime": "2023-06-01T10:30:00Z",
  "seats": 1,
  "price": 8768 */


module.exports = {flight_route}