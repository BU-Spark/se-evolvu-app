import React from "react";

import "./index.css"

const PlaceHolderPage = (props) => {
    
    return (
        <div className="placeholder-body">
            <h2>{props.page}</h2>
        </div>
    )
}

export default PlaceHolderPage;