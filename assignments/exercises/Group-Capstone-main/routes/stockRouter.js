const express = require("express")
const stockRouter = express.Router()
const Stock = require("../models/stock.js")

module.exports = stockRouter