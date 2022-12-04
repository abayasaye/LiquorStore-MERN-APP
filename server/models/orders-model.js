const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const shoesSchema = new Schema ({
    orderNumber:{type:Number},
    name:{type:String},
    address:{type:String},
    date:{type: Date,
        default: Date.now},
    productsNum:{type:Number},
    price:{type:String}
})

module.exports = mongoose.model("order" , shoesSchema)