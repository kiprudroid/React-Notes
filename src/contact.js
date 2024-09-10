import React from 'react'

export default function  Contact() {
    return (
        <div className='col-lg-10 col-md-10 col-sm-12'>
        <form className="bg-dark border border-white p-3 m-auto col-lg-8 col-md-8 col-sm-12 m-auto mt-3  border" style={{
            color: "white"}}>
                       <div className="mb-3 text-white">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control bg-dark border-white" id="title" aria-describedby="titleHelp"/>
            </div>
            <div className="mb-3 text-white">
                <label htmlFor="body" className="form-label" style={{color: "white"}}>Body</label>
                <textarea className="form-control bg-dark border-white" id="body" rows="10"></textarea>
            </div>
        </form>
        </div>
    )
}
