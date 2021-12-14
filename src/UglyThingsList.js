import React, {useContext} from 'react'
import { Context } from './UglyThingsContext'
import UglyThing from './UglyThing'

function UglyThingsList(props) {
    const context = useContext(Context)

    const list = context.uglyThingsList.map((item, index) =>
        <UglyThing item ={item} key={index}
    />)

    return (
        <div>
            {list}
        </div>
    )
}

export default UglyThingsList
