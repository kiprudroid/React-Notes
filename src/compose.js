import React from 'react'
import './index.css';
import {useState} from 'react'

export default function  Compose() {

    const [title , setTitle] = useState(null);
    const [body , setBody] = useState(null);

   

    const handleSubmit = (event) => {
        event.preventDefault()
        
        fetch('http://localhost:5000/data',{
            method : "POST",
            headers : {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                title : title,
                body : body
            })

        }).then(res => res.json())
            .then( data =>{
                console.log("Promise accepted")
            }).catch(err => {
                console.log(err);
                
            })

    }


    return (
        <div className='col-lg-10 col-md-10 col-sm-12'>
        <form className="border border-white p-3 m-auto col-lg-8 col-md-8 col-sm-12 m-auto mt-3  border" style={{
            color: "white",
            background : "rgb(3,3,3)"
            }}
            onSubmit={handleSubmit}
            action='/data'
            method='POST'>
            <div className="mb-3 text-white">
                <label htmlFor="title" className="form-label custom-input">Title</label>
                <input  className="form-control border-white custom-input" id="title" aria-describedby="titleHelp" type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name ='title'/>
            </div>
            <div className="mb-3 text-white">
                <label htmlFor="body" className="form-label " style={{color: "white"}} >Body</label>
                <textarea className="form-control border-white custom-input" 
                          id="body" 
                          rows="10"
                          value={body}
                          onChange={(e) => setBody(e.target.value)}
                          name='body'></textarea>
            </div>
            <button  type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    )
}
