const express=require("express")
const {connection}=require("./config/db")
const {user_route}=require("./routes/user.route")
const {flight_route}=require("./routes/flight.route")
const {booking_route}=require("./routes/booking.route")





const app=express()

app.use(express.json())

app.get("/",(req,res)=>{
 res.send("home")
})



app.use("/",user_route)
app.use("/",flight_route)
app.use("/",booking_route)



app.listen(5000,async()=>{
 try {
  await connection
  console.log("connected to DB");
 } catch (error) {
  console.log(error);
  console.log("db connection sucessfull");
 }
 console.log("running at localhost:5000");
})