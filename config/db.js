const express=require("express")
const mongoose=require("mongoose")


const connection=mongoose.connect("mongodb+srv://ashwin:kavitha@cluster0.ivcxf6h.mongodb.net/mocksix?retryWrites=true&w=majority")

module.exports={
 connection
}