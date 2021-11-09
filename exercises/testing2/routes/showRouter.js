const express = require("express")
const showRouter = express.Router()
const uuid = require("uuid").v4

const tvShows = [
    {title: "friends", genre: "comedy", _id: uuid()},
    {title: "raymond", genre: "comedy", _id: uuid()},
    {title: "sharktank", genre: "reality", _id: uuid()},
    {title: "7th heaven", genre: "drama", _id: uuid()},
]
showRouter.get("/", (req, res) => {
    res.send(tvShows)
})
showRouter.post('/', (req, res) => {
    const newShow = req.body
    newShow._id = uuid()
    tvShows.push(newShow)
    res.send(`${newShow.title} was added to the database.`)
})
showRouter.get("/:showId" , (req, res) => {
    const showId = req.params.showId 
    const findShow = tvShows.find(show => show._id === showId)
    res.send(findShow)
})

module.exports = showRouter