import React from 'react'


export default function ListItem(props) {
    return (
       
           
                    
                        <tr className="bg-dark border-bottom border-white text-white" style={{background : "rgb(3,3,3)"}}>
                            <td className="border-right border-white text-white" style={{background : "rgb(3,3,3)"}}>{props.dateCreated}</td>
                            <td className="border-right text-white" style={{background : "rgb(3,3,3)"}}>{props.title}</td>                            
                        </tr>
                  
               
    )  
       
}
