import React from 'react'
import './index.css';

export default function  Contact() {
    return (
        <div className='col-lg-10 col-md-10 col-sm-12'>
        <form className="border border-white p-3 m-auto col-lg-8 col-md-8 col-sm-12 m-auto mt-3  border" style={{
            color: "white",
            background : "rgb(3,3,3)"}}>
                       <div className="mb-3 text-white">
                <label htmlFor="title" className="form-label custom-input">Title</label>
                <input type="text" className="form-control border-white custom-input" id="title" aria-describedby="titleHelp"/>
            </div>
            <div className="mb-3 text-white">
                <label htmlFor="body" className="form-label " style={{color: "white"}}>Body</label>
                <textarea className="form-control border-white custom-input" id="body" rows="10"></textarea>
            </div>
        </form>
        </div>
    )
}
