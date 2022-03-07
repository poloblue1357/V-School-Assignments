import React, {useState, useContext} from 'react'
import { UserContext } from "../context/UserProvider"



function AllIssues(props) {
    
    const { 
        username,
        title, 
        description, 
    } = props
    const {changeUpVotes, changeDownVotes, voteCount, disable, disableDownVote, addend} = useContext(UserContext)
    
    return (
        <div style={{border: "1px solid black", padding: "5px"}}>
            <h2>@{username}'s Post:</h2>
            <h3>{title}</h3>
            <p>{description}</p>
            <button onClick={() => changeUpVotes()} disabled={disable}>Upvote</button>
            <button onClick={() => changeDownVotes()} disabled={disableDownVote}>Downvote</button>
            <p>Total Votes: {voteCount + addend}</p>
        </div>
    )
}

export default AllIssues