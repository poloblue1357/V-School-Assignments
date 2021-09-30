import React from "react"

function CPI(props) {
    return (
        <div>
            <h1>Date: </h1>
            <h3>{props.item.date}</h3>
            <h1>Value: </h1>
            <h3>{props.item.value}</h3>
        </div>
    )
}

export default CPI