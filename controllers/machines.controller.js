const machinesArr= require("../models/machine.model.js")


const express=require("express")
const equipment=express.Router()

equipment.get("/",(req,res)=>{
    res.json(machinesArr)
})

module.exports=equipment