const express = require("express")
const app = express()
const morgan = require('morgan')

app.use(morgan('dev'))

const users = [
    {name: "joe", age: 20},
    {name: "moe", age: 20},
    {name: "betty", age: 20},
    {name: "sarah", age: 20},
    {name: "mike", age: 20},
    {name: "YEP", age: 20}
]

app.get("/users", (req, res) => {
    res.send(users)
})

app.listen(9000, () => {
    console.log("The server is running on Port 9000!")
})