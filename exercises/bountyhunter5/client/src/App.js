import React from "react"
import Inputs from "./Inputs"
import List from "./List"

function App() {

    // ****EXAMPLE OF FUNCTION TO FILTER RESULTS****
    // function handleFilter(e) {
    //     axios.get(`/bounties/type?type=${e.target.value}`)
    //         .then(res => setBounties(res.data))
    //         .catch(err => console.log(err))
    // }
    return (
        <div>
            <h1 style={{color: "gray"}}>Add New Bounty to List!</h1>
            <Inputs />
            <h1 style={{color: "red"}}>List of Bounties: </h1>
            <List />
        </div>
    )
}

export default App