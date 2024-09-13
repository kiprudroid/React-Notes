const mongoose = require('mongoose')
const cors = require('cors')
const express = require('express');
const app = express()

mongoose.connect("mongodb://127.0.0.1:27017/notesdb");


app.use(cors())
app.use(express.urlencoded())


const notesSchema = new mongoose.Schema( {
     title : String,
     body : String,
    // date : String ,
    // data : String
} )

const userModel = mongoose.model("posts",notesSchema)


app.post('/data',(req,res)=>{

   
    // const data = new userModel({
    //     title : req.body.title,
    //     body : req.body.body
    //     // date : req.body.date
    //     // data : req.body.data
    // })

    console.log(req.html)
    
    data.save().then(data => {
        console.log(data)
        res.json(data)
        console.log(data);
    }).catch(err => {
        console.log(err)
    })

    
    
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