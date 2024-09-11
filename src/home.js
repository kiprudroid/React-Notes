import React from "react";
import ListItem from "./listItem.js"

export default  function Home() {


    const [data, setData] = React.useState("");

  React.useEffect(() => {
    fetch("http://localhost:5000/api")
      .then((res) => {
        res.json().then((data) => setData(data));
        console.log(data[0])
      })
      
  }, []);

    return(
        <div className="col-lg-10 col-md-10 col-sm-12">
       <div className = "row">
        <div className="col-lg-8 col-md-8 col-sm-12 m-auto card mt-3  border" style={{
            background : "rgb(3,3,3)"
        }}> 
            <div className="card-header m-auto">
                <h1 className="text-center h2 text-white">
                    Recent Notes
                </h1>
            </div>
            <div className="card-body border-top">
                <p className="text-center p text-light">
                    <div className="row">

                   <table className="table">
                        <thead className="border-bottom">
                            <th className="border-right border-white">
                                Date
                            </th>
                            <th className="border-right">
                                Title
                            </th>
                            <th>
                                Modified
                            </th>

                        </thead>
                        <tbody className="border-bottom " style={{background : "rgb(3,3,3)"}}>
                            <ListItem dateCreated = "12/12/2022" title = "Shopping List" dateModified = "12/12/2022"/>
                            <ListItem dateCreated = "11/12/2022" title = "Workout Routine" dateModified = "12/12/2022"/>
                        </tbody>
                   </table>
                    </div>
                </p>
            </div>

        </div>

       </div>
        </div>
    )
        
    
}