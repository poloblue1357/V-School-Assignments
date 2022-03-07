// npm init -y
// npm install express
// npm install -g nodemon
// npm install uuid

// mkdir "bountyhunter5"
// npx create-react-app client
//  *then install above dependencies*
// copy/paste gitignore from client folder into server part
// in the client package.json, set up the proxy part to connect everything

const express = require("express")
const app = express()

// Middleware (for every request)
app.use(express.json()) // Looks for a request body, and turns it into "req.body"

// Routes
app.use("/movies", require("./routes/movieRouter.js"))
app.use("/tvShows", require("./routes/tvshowRouter.js"))

// server listen
app.listen(9000, () => {
    console.log("The server is running on port 9000")
})

// ************** notes for module 6 *****************

// install 'npm install jsonwebtoken'
// install 'npm install dotenv' - add file to same level as server.js
// install "npm install express-jwt"
//      ADD dotenv to .gitignore file
// create .env file and add: SECRET="correct horse battery staple"
// add "require("dotenv").config();"
// add "const expressJwt = require("express-jwt");"

//# cd into your project root folder first (NOT inside the client folder)
// npm install bcrypt
// const bcrypt = require("bcrypt");
