import React from 'react'
import './index.css';
import {useState} from 'react'

export default function  Compose() {

    const [title , setTitle] = useState("");
    const [body , setBody] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`Your title is ${title}`)
    }


    return (
        <div className='col-lg-10 col-md-10 col-sm-12'>
        <form className="border border-white p-3 m-auto col-lg-8 col-md-8 col-sm-12 m-auto mt-3  border" style={{
            color: "white",
            background : "rgb(3,3,3)"
            }}
            onSubmit={handleSubmit}>
            <div className="mb-3 text-white">
                <label htmlFor="title" className="form-label custom-input">Title</label>
                <input  className="form-control border-white custom-input" id="title" aria-describedby="titleHelp" type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            </div>
            <div className="mb-3 text-white">
                <label htmlFor="body" className="form-label " style={{color: "white"}}>Body</label>
                <textarea className="form-control border-white custom-input" 
                          id="body" 
                          rows="10"
                          value={body}
                          onChange={(e) => setBody(e.target.value)}></textarea>
            </div>
            <button  type="clear" className="btn btn-primary">Submit</button>
        </form>
        </div>
    )
}
