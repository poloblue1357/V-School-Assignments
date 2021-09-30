// const express = require("express")
// const bountyRouter = express.Router()
// const uuid = require("uuid").v4

// const bounties = [
//     {
//         firstName: "Obi-Wan",
//         lastName: "Kenobi",
//         isAlive: false,
//         bountyAmount: 100,
//         type: "Jedi",
//         _id: uuid()
//     },
//     {
//         firstName: "Anakin",
//         lastName: "Skywalker",
//         isAlive: true,
//         bountyAmount: 100,
//         type: "Jedi",
//         _id: uuid()
//     }
// ]

// bountyRouter.route("/")
//     .get((req, res) => {
//         res.send(bounties)
//     })
//     .post((req, res) => {
//         const newBounty = req.body
//         newBounty._id = uuid()
//         bounties.push(newBounty)
//         res.send(newBounty)
//     })
// bountyRouter.get("/:bountyId", (req, res) => {
//     const bountyId = req.params.bountyId 
//     const foundBounty = bounties.find(bounty => bounty._id === bountyId)
//     res.send(foundBounty)
//     console.log(req)
// })
// bountyRouter.put("/:bountyId", (req, res) => {
//     const bountyId = req.params.bountyId 
//     const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
//     const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
//     res.send(updatedBounty)
// })
// bountyRouter.delete("/:movieId", (req, res) => {
//     const bountyId = req.params.bountyId 
//     const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
//     bounties.splice(bountyIndex, 1)
//     res.send("Successfully deleted bounty!")
// })

// module.exports = bountyRouter