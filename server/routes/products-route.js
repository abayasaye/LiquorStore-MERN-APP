const route = require('express').Router()
const {
    getProducts,
    createProducts
} = require('../controllers/products-ctrl')

route.get('/',getProducts)
route.post("/addTeam" , createProducts)
module.exports =route;