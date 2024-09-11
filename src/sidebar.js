import React from "react";

export default function SideBarElement(props){

    return (

        <div className="sidebar-element" style ={{
            height : "auto",
            width : "100%",
            borderBottom :"1px solid rgb(41,41,41)",
            left : "0",
            justifyContent : "left",
            display : "flex",
            verticalAlign : "baseline"
        }}>
            <i className={`bi  fs-1 text-light m-3 ${props.icon}`}></i>

            <h3  className = "h3 text-light align-text-bottom" style ={{
                verticalAlign : "baseline",
                marginTop : "20px"
            }}>
                {props.title}
            </h3>

        </div>
    )
}
