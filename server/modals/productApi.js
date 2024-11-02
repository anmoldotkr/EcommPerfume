const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({

    name:{
        type:String,
        required: true,
        unique:true
    },
    href:{
        type:String,
        required: true,
        unique:true
    },
    price:{
        type: Number,
        required: true,
        unique:true
    },
    text:{
        type: String,
        required:true,
        unique:true
    }
})

const ProductModel = mongoose.model("Products",productSchema, "products")

module.exports = ProductModel