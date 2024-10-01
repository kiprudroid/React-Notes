import React from "react";
import parse from 'html-react-parser';

export default function Preview(props) {



    return (
        <>
        <div className="col-lg-10 col-md-10 col-sm-12">

            <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-10" style={{overflowY : "scroll", height : "100vh", borderRight : "1px solid rgb(41,41,41)"}}>

                    <div className="row border border-white p-3 m-auto col-lg-8 col-md-8 col-sm-12 m-auto mt-3  border rounded" style={{
                        background : "white"
                    }}>
                        <div className="col-lg-8 col-md-8 col-sm-10">
                        {parse(props.content)}
                        
                        </div>
                        </div>
                    </div>
            </div>
        </div>
        </>
    )
}