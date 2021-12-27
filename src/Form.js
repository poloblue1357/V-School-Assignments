import React, {useContext} from 'react'
import { Context } from './UglyThingsContext'

export default function Form(props) {
    const uglyContext = useContext(Context)
    return (
        <div>
                <form onSubmit={uglyContext.addNewUglyThing}>
                    <input
                        name="title"
                        onChange={uglyContext.handleChange}
                        placeholder="Title"
                    />

                    <input
                        name="description"
                        onChange={uglyContext.handleChange}
                        placeholder="Description"
                    />

                    <input
                        name="imgUrl"
                        onChange={uglyContext.handleChange}
                        placeholder="Image Url"
                    />

                    <br />

                    <button>Add a New Item</button>
                </form>
            </div>
        )
    }

