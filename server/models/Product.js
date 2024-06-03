//mongoDB
const mongoose = require('mongoose')
const productSchema = mongoose.Schema({
    //สร้างฟิว
    name:String,
    detail:{
        type:String
    },
    price:{
        type:Number
    }
},{timestamps:true}) // timestamps เวลาอัพเดทเขาจะแจ้งเรา

module.exports = mongoose.model('products',productSchema)