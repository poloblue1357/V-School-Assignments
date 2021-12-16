import React from 'react'
import "./index.css"

export default function UglyThing(props) {
    return (
        <div className='card'>
            <h2>{props.item.title}</h2>
            <img src={props.item.imgUrl} alt={props.item.description} />
            <p>{props.item.description}</p>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}
