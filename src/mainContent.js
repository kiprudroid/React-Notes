import React from "react";

export default function MainContent(props) {

    return (
        <div className="col-lg-10 col-md-10 col-sm-10">

            <h1 className="text-center text-white mt-2">
               {props.page}
            </h1>

        </div>
    )
}