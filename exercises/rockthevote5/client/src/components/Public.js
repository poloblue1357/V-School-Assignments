import React, {useContext} from "react"
import { UserContext } from "../context/UserProvider"
import AllIssuesList from "./AllIssuesList"

function Public(props) {
    const { user: {username}, allIssues} = useContext(UserContext)
    return (
        <div>
            <h1>All Issues:</h1>
            <AllIssuesList allIssues={allIssues} username={username}/>
        </div>
    )
}

export default Public