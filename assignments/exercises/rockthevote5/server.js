const express = require("express")
const app = express()
require("dotenv").config()
const morgan = require("morgan")
const mongoose = require("mongoose")
const cors = require("cors")
const expressJwt = require("express-jwt")

app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

mongoose.connect("mongodb://localhost:27017/rockthevote5",
    {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
    },
    () => console.log("Connected to the DB.")    
)

app.use("/auth", require("./routes/auth.js"))
app.use("/api", expressJwt({ secret: process.env.SECRET, algorithms: ["HS256"]})) // req.user
app.use("/api/issue", require("./routes/issue"))
app.use("/api/comment", require("./routes/comment"))
app.use("/api/vote", require("./routes/vote"))

app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError") {
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

app.listen(8000, () => {
    console.log("The server is running on Port 8000.")
})