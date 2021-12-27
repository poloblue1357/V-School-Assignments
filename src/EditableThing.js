import React, { useContext } from 'react'
import { Context } from './UglyThingsContext'
// import Form from './Form'

export default function EditableThing (props) {
    console.log("Edit Component")
    const context = useContext(Context)

    // const [ updatedThing, setUpdatedthing ] = useState({
    //     title: props.title,
    //     imgUrl: props.imgUrl,
    //     description: props.description
    // })


    // function handleEditChange(e) {
    //     const {value, name} = e.target
    //     setUpdatedthing(prevState => ({
    //         ...prevState,[name]: value
    //     }))
    // }

    return (
        <div>

            <div>
                    <form>
                        <input
                            name="title"
                            value={context.uglyThing.title}
                            // onChange={handleEditChange}
                            placeholder="Enter a New Title"
                        />
                        <input
                            name="description"
                            value={context.uglyThing.description}
                            // onChange={handleEditChange}
                            placeholder="Enter a New Description"
                        />
                        <input
                            name="imgUrl"
                            value={context.uglyThing.imgUrl}
                            // onChange={handleEditChange}
                            placeholder="Enter a New Image Url"
                        />
                        <br />
                        <button >Submit Changes</button>
                        <button onClick={context.cancelEdit}>Cancel Changes</button>
                    </form>
            </div>
        </div>
    )
}











