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
                        name="description"
                        value={uglyContext.description}
                        onChange={uglyContext.handleChange}
                        placeholder="Description"
                    />
                    <input
                        name="imgUrl"
                        value={uglyContext.imgUrl}
                        onChange={uglyContext.handleChange}
                        placeholder="Image Url"
                    />
                    <br />
                    <button>Add a New Item</button>
                </form>
        </div>
    )
}
