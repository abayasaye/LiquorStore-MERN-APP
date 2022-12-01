const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const productsSchema = new Schema({
    category:{type:String},
    company:{type:String},
    quantity:{type:Number},
    price:{type:Number},
    img:{type:String}

})
module.exports = mongoose.model("cloths" , productsSchema)