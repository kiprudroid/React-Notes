const mongoose = require('mongoose')
const cors = require('cors')
const express = require('express');
const app = express()
const bodyParser = require('body-parser')

mongoose.connect("mongodb://127.0.0.1:27017/notesdb");


app.use(cors())
app.use(express.urlencoded())
app.use(bodyParser.json());



const notesSchema = new mongoose.Schema( {
     htmlContent : String
} )

const userModel = mongoose.model("posts",notesSchema)


app.post('/data',(req,res)=>{

    const data = req.body;
   
    const dat = new userModel({
        htmlContent : data.data
    })

    
    
    dat.save().then(data => {
        console.log(data)
        res.json(data)
        console.log(data);
    }).catch(err => {
        console.log(err)
    })
    


  
    console.log(data.data)
    
    
})

app.get('/api',(req,res)=>{

    userModel.find().then(data => {
        res.json(data)
    }).catch(err => {
        console.log(err)
    })
    
    
})


app.listen(5000,()=>{
    console.log("Server listening in port 5000");
    
})