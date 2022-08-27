import React, {useState, useContext} from "react"

import {BountyContext} from "./bountyContext"

function Inputs() {

    const initThing = {
        firstName: '',
        lastName: '',
        bountyAmount: '',
        type: '',
        isAlive: '',
    }

    const [inputData, setInputData] = useState(initThing)

    const context = useContext(BountyContext)

    const handleChange = (event) => {
        const {name, value} = event.target
        setInputData(prevInputData => ({...prevInputData, [name]: value}))
    }

    return (
        <div>
            <form onSubmit={(event => {
                event.preventDefault()
                context.postBounty({firstName: inputData.firstName, lastName: inputData.lastName, bountyAmount: inputData.bountyAmount, type: inputData.type, isAlive: inputData.isAlive})
            })}>
                <input placeholder="First Name" name="firstName" value={inputData.firstName} onChange={handleChange}/>
                <input placeholder="Last Name" name="lastName" value={inputData.lastName} onChange={handleChange}/>
                <input placeholder="Amount in $" name="bountyAmount" value={inputData.bountyAmount} onChange={handleChange}/>
                <input placeholder="Sith or Jedi" name="type" value={inputData.type} onChange={handleChange}/>
                <input placeholder="Alive? true or false" name="isAlive" value={inputData.isAlive} onChange={handleChange}/>
                <button type="submit">Submit</button>
            </form>
            <br />
            <br />
            <hr />
        </div>
    )
}

export default Inputs