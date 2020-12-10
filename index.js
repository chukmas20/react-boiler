 const express = require("express");
 const mongoose = require("mongoose")
 const bodyParser = require("body-parser")
 const cookieParser = require("cookie-parser");
 const {User} = require("./models/user")
 const config = require("./config/key");


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser())

mongoose.connect(config.mongoURI,
{ useNewUrlParser: true, useUnifiedTopology: true } )
.then(()=> console.log ('Connected to Database'))
.catch(()=>console.log(error))

app.get("/", (req,res)=>{
    res.send("Hello Team");
})

app.post('api/users/register', (req, res)=>{
    const user = new User(req.body)
    user.save((err, userData)=>{
        if(err) return res.json({success:false, err})
    })
    res.status(200).json({success:true, userData: doc})
})

const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log(`server is running on port${port}`))