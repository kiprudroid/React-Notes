import React from "react";

export default function NavBar(props) {

    return(
        <nav className="" 
        style={{
            borderBottom : "1px solid rgb(41,41,41)",
            height : "70px",
            width : "100vw",
            display : "flex"
        }}
        >
            <i className="bi bi-card-text fs-1" style={{
                height : "300px",
                color : "white",
                marginTop : "5px",
                marginRight : "10px",
                marginLeft : "10px",


                
                                
            }}></i>

            <h1
            style={{
                marginLeft : "5px",
                color : "white",
                marginTop : "10px",

            }}
            >Notes App</h1>

        </nav>
    )
}

