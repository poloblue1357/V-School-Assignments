import React, {useContext} from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import Auth from "./components/Auth"
import {UserContext} from "./context/UserProvider"
import Profile from "./components/Profile"
import Navbar from "./components/Navbar"
import Public from "./components/Public"

function App() {
    const { token, logout } = useContext(UserContext)
    return (
        <div>
            <Navbar logout={logout}/>
            <Switch>
                <Route 
                exact path="/" 
                render={()=> token ? <Redirect to="/profile"/> : <Auth />}
                />
                <Route 
                    path="/profile"
                    render={() => <Profile />}
                />
                <Route 
                    path="/public"
                    render={() => <Public />}
                />
            </Switch>
        </div>
    )
}

export default App