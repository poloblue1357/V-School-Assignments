import React from "react"
import ReactDOM from "react-dom"

import App from "./App"
import {BountyContextProvider} from "./bountyContext"

ReactDOM.render(
    <BountyContextProvider>
        <App />
    </BountyContextProvider>, 
    document.getElementById("root")
)