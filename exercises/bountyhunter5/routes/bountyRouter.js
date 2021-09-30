const express = require("express")
const bountyRouter = express.Router()
const Bounty = require("../models/Bounty.js")

bountyRouter.route("/")
    .get((req, res, next) => {
        Bounty.find((err, bounties) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(bounties)
        })
    })
    .post((req, res, next) => {
        const newBounty = new Bounty(req.body)
        newBounty.save((err, savedBounty) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedBounty)
        })
    })
bountyRouter.delete("/:bountyId", (req, res, next) => {
    Bounty.findOneAndDelete({_id: req.params.bountyId}, (err, deletedBounty) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully delete bounty ${deletedBounty.firstName} ${deletedBounty.lastName} from the database.`)
    })
})
bountyRouter.put("/:bountyId", (req, res, next) => {
    Bounty.findOneAndUpdate(
        {_id: req.params.bountyId}, // find this one to update
        req.body, // update this object with the data
        {new: true}, // send back the updated version please
        (err, updatedBounty) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBounty)
        }
    )
})


// ****EXAMPLE IN VIDEO FOR FILTERING RESULTS****
// bountyRouter.get("/bounties/type", (req, res, next) => {
//     Bounty.find({type: req.query.type} , (err, bounties) => {
//         if(err) {
//             res.status(500)
//             return next(err)
//         }
//         return res.status(200).send(bounties)
//     })
// })

module.exports = bountyRouter