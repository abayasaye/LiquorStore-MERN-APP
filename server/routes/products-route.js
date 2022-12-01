const productsRouter = require('express').Router()
const {
    getProducts,
    createProducts
} = require('../controllers/products-ctrl')

productsRouter.get('/',getProducts)
productsRouter.post("/addProducts" , createProducts)
module.exports =productsRouter;