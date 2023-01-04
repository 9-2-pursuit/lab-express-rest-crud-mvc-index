const personsArr=require("../models/person.model.js")


const express=require("express")
const people=express.Router()

people.get("/",(req,res)=>{
    res.json(personsArr)
})

module.exports=people