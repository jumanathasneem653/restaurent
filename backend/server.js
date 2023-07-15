const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 4000;
const collection = require('./database');
const cors = require('cors');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

mongoose.connect("mongodb+srv://jumanathasneem:l5jk1K0gJzbKjO0J@sweet-corner.e7w5f3f.mongodb.net/")//!insert your username
    .then(() => { console.log("MongoDB connected successfully") })//*success message
    .catch((err) => { console.log("Error connecting to MongoDB " + err) });//*fail message
  

app.get("/",cors(),(req,res)=>{

})

app.listen(PORT, function(){
    console.log(`Server running on port ${PORT}`);
});


app.post("/login", async(req,res) =>{
    const{email,password} = req.body;

    try {
        const check = await collection.findOne({email:email});
   
        if(check && check.password === password){
            
            res.json("exist");
        }
        else{
            res.json("notexist");
        }
    } catch (error) {
        res.json("notexist");
    }
})

app.post("/signup", async(req,res) =>{
    const{email,password} = req.body;

    const data = {
        email:email,
        password:password,
    }
    try {
        const check = await collection.findOne({email:email});

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist");
            await collection.insertMany([data]);
        }
    } catch (error) {
        res.json("notexist");
    }
})