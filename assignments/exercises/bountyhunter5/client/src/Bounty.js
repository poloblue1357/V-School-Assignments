import React, {useState, useContext} from "react"
import {BountyContext} from "./bountyContext"

function Bounty(props) {
    const [isEdit, setIsEdit] = useState(false)
    const context = useContext(BountyContext)
    const [bounty, setBounty] = useState({
        firstName: props.bounty.firstName,
        lastName: props.bounty.lastName,
        bountyAmount: props.bounty.bountyAmount,
        type: props.bounty.type,
        isAlive: props.bounty.isAlive
    })
    const toggleEdit = () => {
        setIsEdit(prevState => !prevState)
    }
    const handleChange = (event) => {
        const {name, value} = event.target 
        setBounty(prevBounty => ({...prevBounty, [name]: value}))
    }
    return (
        <div>
            {isEdit ? 
                <div>
                    <form onSubmit={(event) => {
                        event.preventDefault()
                        toggleEdit()
                        context.putBounty(props.bounty._id, {firstName: bounty.firstName, lastName: bounty.lastName, bountyAmount: bounty.bountyAmount, type: bounty.type, isAlive: bounty.isAlive 
                    })}}>
                        <input placeholder="First Name" name="firstName" value={bounty.firstName} onChange={handleChange}></input>
                        <input placeholder="Last Name" name="lastName" value={bounty.lastName} onChange={handleChange}></input>
                        <input placeholder="Amount in $" name="bountyAmount" value={bounty.bountyAmount} onChange={handleChange}></input>
                        <input placeholder="Sith or Jedi" name="type" value={bounty.type} onChange={handleChange}></input>
                        <input placeholder="Alive? true or false" name="isAlive" value={bounty.isAlive} onChange={handleChange}/>
                        <button type="submit">Submit</button>
                    </form>
                    <button onClick={() => toggleEdit()}>Cancel edit</button>
                </div>
            : 
                <div>
                    <h3 style={{color: 'blue'}}>Name: {props.bounty.firstName} {props.bounty.lastName}</h3>
                    <h5 style={{color: "orange"}}>Bounty Amount: ${props.bounty.bountyAmount}</h5>
                    <h5 style={{color: "gray"}}>Type: {props.bounty.type}</h5>
                    <h5 style={{color: "green"}}>Are they alive? {props.bounty.isAlive ? "true" : "false"}</h5>
                    <button onClick={() => toggleEdit()}>Edit</button>
                    <button onClick={() => context.deleteBounty(props.bounty._id)}>Delete</button>
                    <hr />
                </div>
            }
        </div>
    )
}

export default Bounty