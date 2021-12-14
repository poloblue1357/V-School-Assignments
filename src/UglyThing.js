import React from 'react'

export default function UglyThing(props) {
    return (
        <div>
            <h2>{props.item.title}</h2>
            <img src={props.item.imgURL} alt={props.item.desc} />
            <p>{props.item.desc}</p>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}
