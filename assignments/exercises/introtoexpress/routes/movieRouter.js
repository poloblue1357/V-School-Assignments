const express = require("express")
const movieRouter = express.Router()
const uuid = require("uuid").v4

const movies = [
    {title: "die hard", genre: "action", _id: uuid()},
    {title: "star wars IV", genre: "fantasy", _id: uuid()},
    {title: "lion king", genre: "fantasy", _id: uuid()},
    {title: "friday the 13th", genre: "horror", _id: uuid()}
]

// movieRouter.get("/", (req, res) => {
//     res.send(movies)
// })
// movieRouter.post("/", (req, res) => {
//     const newMovie = req.body
//     newMovie._id = uuid()
//     movies.push(newMovie)
//     res.send(`Successfully added ${newMovie.title} to the database!`)
// })

movieRouter.route("/")
    .get((req, res) => {
        res.send(movies)
    })
//     .post((req, res) => {
//         const newMovie = req.body
//         newMovie._id = uuid()
//         movies.push(newMovie)
//         res.send(`Successfully added ${newMovie.title} to the database!`)
//     })

movieRouter.get("/:movieId", (req, res) => {
    console.log(req.params.movieId)
    const movieId = req.params.movieId 
    const foundMovie = movies.find(movie => movie._id === movieId)
    res.send(foundMovie)
})

movieRouter.delete("/:movieId", (req, res) => {
    const movieId = req.params.movieId 
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    movies.splice(movieIndex, 1)
    res.send("Successfully deleted movie!")
})

module.exports = movieRouter