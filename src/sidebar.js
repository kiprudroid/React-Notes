import React from "react";

function SideBarElement(props){

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

            <h3  class = "h3 text-light align-text-bottom" style ={{
                verticalAlign : "baseline",
                marginTop : "20px"
            }}>
                {props.title}
            </h3>

        </div>
    )
}

export default function SideBar(){


    return(
        <div className="col-sm-2" style={{
            height : "100vh",
            width : "auto",
            borderRight : "1px solid rgb(41,41,41)"
        }}>
           <SideBarElement title = "Home" icon = "bi bi-house"/>
           <SideBarElement title = "Notes" icon = "bi bi-card-list" />
           <SideBarElement title = "Recents" icon = "bi bi-clock-history" />
           <SideBarElement title = "Compose" icon = "bi bi-pen" />
           <SideBarElement title = "Favourites" icon = "bi bi-star" />
           


            
        </div>
    )
}