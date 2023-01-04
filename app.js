const express= require("express")
const app=express()

app.get("/",(req,res)=>{
    res.send("Hello, world!")
})

const machineCont=require("./controllers/machines.controller.js")
app.use("/machines",machineCont)


const locationCont=require("./controllers/locations.controller.js")
app.use("/locations",locationCont)

const peopleCont=require("./controllers/persons.controller.js")
app.use("/persons",peopleCont)


const plansCont=require("./controllers/plans.controller.js")
app.use("/plans",plansCont)


const specEvCont=require("./controllers/special-events.controller.js")
app.use("/special-events",specEvCont)

module.exports=app