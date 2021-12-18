import React, { useContext } from 'react'
import "./index.css"
import { Context } from './UglyThingsContext'

export default function UglyThing(props) {
    const uglyThingContext = useContext(Context)
    return (
        <div className='card'>
            <h2>{props.item.title}</h2>
            <img src={props.item.imgUrl} alt={props.item.description} />
            <p>{props.item.description}</p>
            <button>Edit</button>
            <button onClick={() => uglyThingContext.deleteUglyThing()}>Delete</button>
        </div>
    )
}
