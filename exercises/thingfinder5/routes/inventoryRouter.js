const express = require("express")
const inventoryRouter = express.Router()
const uuid = require("uuid").v4

const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
    },{
        name: "soup",
        type: "food",
        price: 300,
    },{
        name: "flour",
        type: "food",
        price: 100,
    }
]
inventoryRouter.route("/")
    .get((req, res) => {
        return res.send(inventoryItems)
    })

inventoryRouter.get("/:type", (req, res) => {
    console.log(req)
    const itemType = req.params.type 
    const foundItems = inventoryItems.filter(item => item.type === itemType)
    res.send(foundItems)
})

module.exports = inventoryRouter