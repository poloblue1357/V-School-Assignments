import React, {useContext} from 'react'
import { Context } from './UglyThingsContext'

export default function Form(props) {
    const uglyContext = useContext(Context)
    return (
        <div>
                <form onSubmit={uglyContext.handleSubmit}>
                    <input
                        name="title"
                        value={uglyContext.title}
                        onChange={uglyContext.handleChange}
                        placeholder="Title"
                    />
                    <input
                        name="desc"
                        value={uglyContext.desc}
                        onChange={uglyContext.handleChange}
                        placeholder="Description"
                    />
                    <input
                        name="imgURL"
                        value={uglyContext.imgURL}
                        onChange={uglyContext.handleChange}
                        placeholder="Image URL"
                    />
                    <br />
                    <button>Add a New Item</button>
                </form>
        </div>
    )
}
