const locationsArr =require("/Users/zaylors/mod-4-labs/lab-express-rest-crud-mvc-index/models/location.model.js")

const express=require("express")
const locations=express.Router()

locations.get("/",(req,res)=>{
    res.json(locationsArr)
})

module.exports=locations