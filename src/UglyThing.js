import React from 'react'
import { useContext } from 'react/cjs/react.development'
import "./index.css"
import { Context } from './UglyThingsContext'
import EditableThing from './EditableThing'



export default function UglyThing(props) {
    const context = useContext(Context)


    function handleEdit() {
        context.toggleEdit()
    }

    return (
       <div className='card'>

        <div>
            <h2>{props.title}</h2>
            <img className='imagen' src={props.img} alt={props.description} />
            <p>{props.description}</p>
            <h3>{props.id}</h3>
        </div>

        <button onClick={handleEdit}>Edit</button>
        <button onClick={() => context.deleteUglyThing(props.id)}>Delete</button>
        {context.uglyThing.isEditing ?
            <EditableThing item={props.item}/> :
            null
        }
        </div>
    )
}



