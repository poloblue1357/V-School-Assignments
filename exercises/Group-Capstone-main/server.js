const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")


// middlware

app.use(express.json())
app.use(morgan("dev"))

// connect to database
mongoose.connect("mongodb://localhost:27017/stockviewdb",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
        () => console.log("Connected to the database")
)

app.use("/stocks", require("./routes/stockRouter.js"))


app.listen(7007, () => {
    console.log("The stockview server is running on Port 7007")
})