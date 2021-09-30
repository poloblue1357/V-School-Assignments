import React, {useState, useEffect} from "react"
import "./EconomicIndicators.css"
import CPImap from "./CPImap"

const axios = require("axios")


function EconomicIndicators() {

    return (
        <div>
            <CPImap />
            {/* <h2>{CPI[0]?.date}</h2>
            <h2>{CPI[0]?.value}</h2>
            <h3>{CPI[1]?.date}</h3>
            <h3>{CPI[1]?.value}</h3> */}
        </div>
    )
}

export default EconomicIndicators