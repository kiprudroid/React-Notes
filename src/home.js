import React from "react";

export default  function Home() {

    return(
        <div className="col-lg-10 col-md-10 col-sm-12">
       <div className = "row">
        <div className="col-lg-8 col-md-8 col-sm-12 m-auto card mt-3 bg-dark border">
            <div className="card-header m-auto">
                <h1 className="text-center h2 text-white">
                    Recent Notes
                </h1>
            </div>
            <div className="card-body border-top">
                <p class="text-center p text-light">
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
                   </table>
                    </div>
                </p>
            </div>

        </div>

       </div>
        </div>
    )
        
    
}