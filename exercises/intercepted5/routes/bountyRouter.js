const express = require("express")
const bountyRouter = express.Router()
const uuid = require("uuid").v4

const bounties = [
    {
        firstName: "obi-wan",
        lastName: "kenobi",
        isAlive: true,
        bountyAmount: 100,
        type: "jedi",
        _id: uuid()
    },
    {
        firstName: "anakin",
        lastName: "skywalker",
        isAlive: true,
        bountyAmount: 100,
        type: "jedi",
        _id: uuid()
    }
]

bountyRouter.route("/")
    .get((req, res) => {
        res.send(bounties)
    })
bountyRouter.get("/:index", (req, res) => {
    const bountyIndex = req.params[1]
    const foundBounty = bounties.find(bounty => bounty._id === bountyIndex)
    res.send(foundBounty)
    console.log(req)
})

module.exports = bountyRouter