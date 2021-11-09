import React, {useState} from "react"
import AddMovieForm from "./AddMovieForm"

function Movie(props) {
    const {title, genre, _id} = props
    const [editToggle, setEditToggle] = useState(false)
    return (
        <div >
            {!editToggle ? 
            <>
            <h1>title: {title}</h1>
            <p>genre: {genre}</p>
            <button onClick={() => props.deleteMovie(_id)}>Delete</button>
            <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
            </>
            : 
            <>
            <AddMovieForm 
                title={title}
                genre={genre}
                _id={_id}
                btnText="Submit Edit"
                submit={props.editMovie}
            />
            <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
            </>
            }
        </div>
    )
}



export default Movie