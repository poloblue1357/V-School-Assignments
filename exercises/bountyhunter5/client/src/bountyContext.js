import React, { useState, useEffect } from "react"
const axios = require("axios")
const BountyContext = React.createContext()

function BountyContextProvider(props) {

    const [arrayOfBounties, setArrayOfBounties] = useState([])

    const postBounty = (newBounty) => {
        console.log(newBounty, "bounty object") // bounty object
        axios.post("http://localhost:8000/bounties", newBounty)
            .then(response => {
                console.log(response.data)
                setArrayOfBounties(prevList => {
                    return [response.data, ...prevList]
                })
            })
    }
    const putBounty = (_id, editedItem) => {
        axios.put(`http://localhost:8000/bounties/${_id}`, editedItem)
            .then(response => {
                console.log(response.data)
                let editedArray = arrayOfBounties.map(bounty => bounty._id === _id ? response.data : bounty)
                setArrayOfBounties(editedArray)
            })
    }
    const deleteBounty = (_id) => {
        axios.delete(`http://localhost:8000/bounties/${_id}`)
            .then(response => {
                console.log(response.data)
                let filterBounty = arrayOfBounties.filter(bounty => bounty._id !== _id)
                setArrayOfBounties(filterBounty)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        axios.get("/bounties")
            .then(response => {
                console.log(response.data)
                setArrayOfBounties(response.data)
            })
    }, [])
    return (
        <BountyContext.Provider value={{
            arrayOfBounties,
            postBounty,
            putBounty,
            deleteBounty,
        }}>
            {props.children}
        </BountyContext.Provider>
    )
}

export {BountyContextProvider, BountyContext}