import React from "react"
import AllIssues from "./AllIssues.js"

function AllIssuesList(props) {
    const { username, allIssues, upVote } = props
    return (
        <div>
            { allIssues.map(issue => <AllIssues {...issue} key={issue._id} username={username} upVote={upVote}/> )}
        </div>
    )
}

export default AllIssuesList