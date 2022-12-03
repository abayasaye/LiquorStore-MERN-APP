const infoRouter = require('express').Router()
const {
    getInfo,
    getById,
    createInfo,
    updateInfo,
    deleteInfo
} = require("../controllers/info-ctrl")

infoRouter.get('/',getInfo)
infoRouter.get("/getById/:id" , getById)
infoRouter.post("/addProducts" , createInfo)
infoRouter.put("/updateProducts" , updateInfo)
infoRouter.delete("/deleteProducts" , deleteInfo)

module.exports = infoRouter;