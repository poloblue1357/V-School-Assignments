// shows how the meme should render to the page
// each created meme includes delete/edit button
import React from "react"

function RenderMeme(props) {
    return (
        <div>
            <h1>{props.topText}</h1>
            <img src={props.meme.url} name="url" value={props.url} onChange={props.handleChange} alt=''></img>
            <h1>{props.bottomText}</h1>
        </div>
    )
}

export default RenderMeme