const express = require("express")
const issueRouter = express.Router()
const Issue = require("../models/issue")

issueRouter.get("/", (req, res, next) => {
    Issue.find((err, issues) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(issues)
    })
  })

// issueRouter.get("/", (req, res, next) => {
//     Issue.find({ user: req.user._id}, (err, issues) => {
//         if (err) {
//             res.status(500)
//             return next(err)
//         } 
//         return res.send(issues)
//     })
// })

issueRouter.post("/", (req, res, next) => {
    const issue = new Issue(req.body)
    issue.user = req.user._id 
    issue.save(function (err, newIssue) {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newIssue)
    })
})

issueRouter.get("/:issueId", (req, res, next) => {
    Issue.findOne({ _id: req.params.issueId, user: req.user._id}, (err, issue) => {
        if (err) {
            res.status(500)
            return next(err)
        } else if (!issue) {
            res.status(404)
            return next(new Error("No issue found."))
        }
        return res.send(issue)
    })
})

issueRouter.get("/user/allIssues", (req, res, next) => {
    Issue.find({ user: req.user._id}, (err, issues) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

issueRouter.put("/:issueId", (req, res, next) => {
    Issue.findOneAndUpdate(
        {_id: req.params.issueId, user: req.user._id},
        req.body, 
        { new: true },
        (err, issue) => {
            if (err) {
                console.log("Error")
                res.status(500)
                return next(err)
            }
            return res.send(issue)
        }
    )
})

issueRouter.delete("/:issueId", (req, res, next) => {
    Issue.findOneAndRemove({ _id: req.params.issueId, user: req.user._id}, (err, issue) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.send(issue)
    })
})

module.exports = issueRouter