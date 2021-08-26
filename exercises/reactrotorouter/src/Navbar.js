import React from "react"
import {Link} from "react-router-dom"

function Navbar() {
    return (
        <div>
            <h1>NAVIGATION BAR!</h1>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
        </div>
    )
}

export default Navbar