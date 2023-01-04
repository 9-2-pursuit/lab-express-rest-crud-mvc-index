
const plansArr=require("../models/plan.model.js")


const express=require("express")
const plans=express.Router()

plans.get("/",(req,res)=>{
    res.json(plansArr)
})

module.exports=plans