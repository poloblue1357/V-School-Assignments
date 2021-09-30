const mongoose = require("mongoose")
const Schema = mongoose.Schema

// stock blueprint Schema

const stockSchema = new Schema({
    ticker: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model("Stock", stockSchema)