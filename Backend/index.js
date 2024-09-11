const mongoose = require('mongoose')
const cors = require('cors')
const express = require('express');
const app = express()

mongoose.connect("mongodb://127.0.0.1:27017/notesdb");


app.use(cors())

const notesSchema = new mongoose.Schema( {
    // title : String,
    // body : String,
    // date : String ,
    data : String
} )

const userModel = mongoose.model("posts",notesSchema)

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