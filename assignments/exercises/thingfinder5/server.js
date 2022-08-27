const express = require("express")
const app = express()

app.use(express.json())

app.use("/inventoryItems", require("./routes/inventoryRouter.js"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(8001, () => {
    console.log("The server is running on Port 8001!")
})