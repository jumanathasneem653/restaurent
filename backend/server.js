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
app.post('/api/Contact', (req, res) => {
    
    console.log(req.body);
    res.json({ message: 'Thank you for your message!' });
  });

  const reviewSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    review: { type: String, required: true },
  }, { timestamps: true });
  
  
  const Review = mongoose.model('Review', reviewSchema);
  
  
  app.post("/Review", async(req, res) => {
    const { name, email, review } = req.body;
  
    
    const newReview = new Review({
      name,
      email,
      review,
    });
  
    // Save the review to the database
    newReview.save()
      .then((review) => {
        console.log('Review saved:', review);
        res.status(201).json({ message: 'Review submitted successfully' });
      })
      .catch((error) => {
        console.error('Error saving review:', error);
        res.status(500).json({ error: 'An error occurred while saving the review' });
      });
  });