import React, {useContext} from "react"
import Bounty from "./Bounty"

import {BountyContext} from "./bountyContext"

function List() {
    const context = useContext(BountyContext)
    const list = context.arrayOfBounties.map((bounty) => <Bounty bounty={bounty} key={bounty._id}/>)

    return (
        <div>
            {list}
        </div>
    )
}

export default List