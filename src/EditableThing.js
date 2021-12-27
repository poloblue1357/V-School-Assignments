import React, { useContext } from 'react'
import { Context } from './UglyThingsContext'

export default function EditableThing (props) {

    const context = useContext(Context)


    return (
        <div>
            <div>
                    <form >
                        <input
                            name="title"
                            value={context.updatedThing.title}
                            placeholder="Title"
                        />
                        <input
                            name="description"
                            value={context.updatedThing.description}
                            placeholder="Description"
                        />
                        <input
                            name="imgUrl"
                            value={context.updatedThing.imgUrl}
                            placeholder="Image Url"
                        />
                        <br />
                        <button onClick={() => {
                            context.editedThing(props.id, context.updatedThing)
                        }}>Submit Changes</button>
                        <button>Cancel Changes</button>
                    </form>
            </div>
        </div>
    )
}











