const express = require("express")
const app = express()

app.use(express.json())

app.use("/inventoryItems", require("./routes/inventoryRouter.js"))

app.listen(8100, () => {
    console.log("The server is running on Port 8001!")
})