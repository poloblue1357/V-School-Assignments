const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/testing2db',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    },
    () => console.log("Connected to the DB")
)

app.use("/movies", require("./routes/movieRouter.js"))
app.use("/tvshows", require("./routes/showRouter.js"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
}) 

app.listen(9000, () => {
    console.log("The server is running on Port 9000.")
})