import React from 'react'
import { Link } from 'react-router-dom'


export default function ListItem(props) {
    return (
       

        <tr className="bg-dark border-bottom border-white text-white" style={{background : "rgb(3,3,3)"}} onClick={props.onClick}>
                            <Link to={props.link} style={{
                                textDecoration : "none",
                                display : "block",
                                color : "white",
                                width : "100%",
                                height : "100%",
                                background : "rgb(3,3,3)",

                               
                            }}>
                            <td className="border-right border-white text-white" style={{background : "rgb(3,3,3)"}}>{props.dateCreated}</td>
                            <td className="border-right text-white text-start ps-5" style={{background : "rgb(3,3,3)"}}>{props.title}</td>                            
                            </Link>
                        </tr>
                  
               
    )  
       
}
