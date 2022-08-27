const express = require("express")
const app = express()
const cors = require("cors")
const morgan = require("morgan")
const mongoose = require("mongoose")

app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

mongoose.connect("mongodb://localhost:27017/bountyhunter5db", 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    },
    () => console.log("Connected to the DB")
)

app.use("/bounties", require("./routes/bountyRouter.js"))

// error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(8000, () => {
    console.log("The server is running on Port 8000!")
})