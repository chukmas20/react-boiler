import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose.connect("mongodb+srv://chukmas:sundayoliseh2015@cluster0.d3etk.mongodb.net/travel?retryWrites=true&w=majority",
{ useNewUrlParser: true, useUnifiedTopology: true } )
.then(()=> console.log ('Connected to Database'))
.catch(()=>console.log(error))

app.get("/", (req,res)=>{
    res.send("Hello Team");
})

const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log(`server is running on port${port}`))