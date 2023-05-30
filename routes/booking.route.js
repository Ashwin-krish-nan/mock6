const express = require("express")
const {BookModel}=require("../models/booking.model")
const {FlightModel}=require("../models/flight.model")
const {UserModel}=require("../models/user.model")
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const booking_route = express.Router()




booking_route.post('/api/booking', async (req, res) => {
  try {
    const { user, flight } = req.body;

    const booking = new BookModel({
      user,
      flight
    });

    await booking.save();

res.status(201).json({ message: 'Booking created successfully' });
  } catch (error) {
    console.error('Error creating booking:', error);
res.status(500).json({ message: 'Internal server error' });
  }
});













module.exports = {booking_route}