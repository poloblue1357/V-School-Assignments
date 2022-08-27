import React, {useEffect, useState} from "react"
import axios from "axios"
import Movie from "./components/Movie.js"
import AddMovieForm from "./components/AddMovieForm.js"

function App() {
    const [movies, setMovies] = useState([])

    function getMovies() {
        axios.get("/movies")
            .then(response => {
                console.log(response.data)
                setMovies(response.data)
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        getMovies()      
    }, [])

    function addMovie(newMovie) {
        axios.post("/movies", newMovie)
            .then(res => setMovies(prevMovies => [...prevMovies, res.data]))
            .catch(err => console.log(err))
    }
    function deleteMovie(movieId) {
        axios.delete(`/movies/${movieId}`)
            .then(res => setMovies(prevMovies => prevMovies.filter(movie => movie._id !== movieId)))
            .catch(err => console.log(err))
    }
    function editMovie(updates, movieId) {
        axios.put(`'/movies/${movieId}`, updates)
            .then(res => {
                setMovies(prevMovies => prevMovies.map(movie => movie._id !== movieId ? movie : res.data))
            })
            .catch(err => console.log(err))
    }
    const handleFilter = (e) => {
        if(e.target.value === "reset") {
            getMovies()
        } else {
        axios.get(`/movies/search/genre?genre=${e.target.value}`)
            .then(res => setMovies(res.data))
            .catch(err => console.log(err))
    }}
    return (
        <div>
            <AddMovieForm submit={addMovie} btnText="Add Movie"/>
            <h4>Filter by Genre</h4>
            <select onChange={handleFilter}>
                <option value="reset">All Movies</option>
                <option value="action">Action</option>
                <option value="comedy">Comedy</option>
                <option value="drama">Drama</option>
            </select>
            {movies.map(movie => <Movie {...movie} key={movie.title} deleteMovie={deleteMovie} editMovie={editMovie}/>)}
        </div>
    )
}

export default App