const express = require("express")
const movieRouter = express.Router()
// const uuid = require("uuid").v4
const Movie = require("../models/movie.js")

// const movies = [
//     {title: 'die hard', genre: 'action', _id: uuid()},
//     {title: 'star wars iv', genre: 'fantasy', _id: uuid()},
//     {title:"lion king", genre: "fantasy", _id: uuid()},
//     {title: "friday the 13th", genre: 'horror', _id: uuid()},
// ]
// movieRouter.get("/", (req, res) => {
//     res.send(movies)
// })
// movieRouter.post('/', (req, res) => {
//     const newMovie = req.body
//     newMovie._id = uuid()
//     movies.push(newMovie)
//     res.send(`${newMovie.title} was added to the database.`)
// })
// ***both ways of writing this code work*** 
movieRouter.route('/')
    .get((req, res, next) => {
        Movie.find((err, movies) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(movies)
        })
    })
    .post((req, res, next) => {
        // const newMovie = req.body
        // newMovie._id = uuid()
        // movies.push(newMovie)
        // res.send(newMovie)
        const newMovie = new Movie(req.body)
        newMovie.save((err, savedMovie) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedMovie)
        })
    })
movieRouter.get("/:movieId", (req, res) => {
    const movieId = req.params.movieId 
    const findMovie = movies.find(movie => movie._id === movieId)
    if(!findMovie) {
        const error = new Error("The item was not found.")
        return next(error)
    }
    res.send(findMovie)
})
// http://localhost:9000/movies/search/genre?genre=horror
movieRouter.get("/search/genre", (req, res, next) => {
    // const genre = req.query.genre 
    // const filteredMovies = movies.filter(movie => movie.genre === genre)
    // res.send(filteredMovies)
    Movie.find({genre: req.query.genre}, (err, movies) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(movies)
    })
})
movieRouter.delete("/:movieId", (req, res, next) => {
    // const movieId = req.params.movieId
    // const movieIndex = movies.findIndex(movie => movie._id === movieId)
    // movies.splice(movieIndex, 1)
    // res.send("Successfully deleted the movie")
    Movie.findOneAndDelete({_id: req.params.movieId}, (err, deletedItem) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedItem.title} from the database.`)
    })
})
movieRouter.put("/:movieId", (req, res, next) => {
    // const movieId = req.params.movieId 
    // const movieIndex = movies.findIndex(movie => movie._id === movieId)
    // const updatedMovie = Object.assign(movies[movieIndex], req.body)
    // res.send(updatedMovie)
    Movie.findOneAndUpdate(
        {_id: req.params.movieId}, // find this one to update
        req.body, // update this object with this data
        {new: true},
        (err, updatedMovie) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedMovie)
        }
    )
})

module.exports = movieRouter