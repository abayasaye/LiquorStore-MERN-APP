const productsModel = require('../models/products-model')

const getProducts =async (req,res)=>{
    await productsModel.find({})
    .then((result,err)=>{
        if (err) {
            return res.status(400).json({success:false,message:err})
        }
        if (result.length == 0 ) {
            return res.status(400).json
            ({success:false,message:"no data"})
        }
        if (result) {
            res.status(200).json({success:true,message:result})
        }
    })
    .catch((err)=>{
        return res.status(400).json({success:false,message:err})
    })
}

const getById = async (req , res)=>{
    await productsModel.findById(req.params.product)
    .then((product)=>{
        if(!product){
            return res.json({success:false , message:"there is no product"})
        }
        return res.status(200).json({success:true , product})
    })  
    .catch((error)=>{res.   aaaas})
}
    

const createProducts = async (req , res)=>{
    await productsModel.insertMany(req.body.team)
    .then((result)=>{
        res.status(200).json({success:true , message:"add team success"})
    })
    .catch((error)=>{res.status(400).json({success:false , error})})
}

