// npm init -y
// npm install express
// npm install uuid

// npm install morgan
// const morgan = require("morgan")
// app.use(morgan('dev')) // logs requests to the console

// npm i mongoose@5.13.9
// const mongoose = require("mongoose")

// go to mongodb website and install correct version


// -mkdir "bountyhunter5"
// -npx create-react-app client - in vs code terminal
// -***then install above dependencies***
// -copy/paste gitignore from client folder into server part
// -in the client package.json, set up the proxy part to connect everything - "proxy": "http://localhost:<PORT-GOES-HERE>"
// -change "main" to "server.js" in the server package.json

// npm install jsonwebtoken
// const expressJwt = require("express-jwt")
//npm install dotenv
// require("dotenv").config()
// create the .env file with the SECRET inside, add .env to .gitignore

// HERE'S HOW YOU SET UP YOUR SERVER.JS:

// const express = require("express")
// const app = express()
// const cors = require("cors")
// const uuid = require("uuid").v4

// Middleware (for every request) // 
// app.use(express.json()) - Looks for a request body, and turns it into "req.body"
// app.use(cors())

// mongoose.connect("mongodb://localhost:27017/bountyhunter5db", 
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true,
//         useFindAndModify: false,
//     },
// () => console.log("Connected to the DB")
// ) - ****NEEDED ON EVERY DATABASE****

// Routes // 
// app.use("/bounties", require("./routes/bountyRouter.js"))

// app.use((err, req, res, next) => {
//     console.log(err)
//     return res.send({errMsg: err.message})
// })

// Server Listen // 
// app.listen(8000, () => {
//     console.log("The server is running on Port 8000!")
// })