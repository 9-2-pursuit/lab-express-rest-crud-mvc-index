const specEvArr=require("../models/special-event.model.js")


const express=require("express")
const specEv=express.Router()

specEv.get("/",(req,res)=>{
    res.json(specEvArr)
})

module.exports=specEv