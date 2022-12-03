const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const shoesSchema = new Schema ({
    number:{type:Number},
    name:{type:String},
    address:{type:String},
    date:{type:String},
    productsNum:{type:Number},
    quantity:{type:Number},
    sum:{type:Boolean},
    isDrift:{type:Boolean},
    total:{type:Number}
})

module.exports = mongoose.model("shoes" , shoesSchema)