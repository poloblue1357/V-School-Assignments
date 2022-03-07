import React from "react"
import { Link } from "react-router-dom"

function Navbar(props) {
    const { logout } = props
    return (
        <div>
            <Link to="/">Login Page</Link>
            <Link to="/profile">Profile Page</Link>
            <Link to="/public">All Issues</Link>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Navbar