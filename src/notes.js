import React from "react";
import {useState ,useEffect} from "react";
import parse from "html-react-parser";


function NotesElement(props) {

    return (

        <div className="row border border-white p-3 m-auto col-lg-8 col-md-8 col-sm-12 m-auto mt-3  border rounded" style={{
            background : "white"
        }}>
            <div className="col-lg-8 col-md-8 col-sm-10">
                         {parse(props.content)}
            </div>
        </div>


    )
}

export default function Notes() {
const [data , setData] = useState([])

useEffect(()=>{
    fetch('http://localhost:5000/api')
    .then((content)=>{
        content.json().then((data)=>{
            setData(data)
        })
    })
    
})

    return (
        <div className="col-lg-10 col-md-10 col-sm-10" style ={{
            overflowY : "scroll",
            height : "100vh"
        }}>
            <h1 className="text-center text-white mt-2"
            >Notes</h1>
        <div className="row border border-white p-3 m-auto col-lg-8 col-md-8 col-sm-12 m-auto mt-3  border mb-5 pb-5">
        {data.map((datum)=> 
        <NotesElement  content = {datum.htmlContent} key = {datum._id}/>
            
        ) }

            </div>

        </div>
    );
}