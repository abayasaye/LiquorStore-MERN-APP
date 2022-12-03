const categoriesRouter = require('express').Router()
const {
    getCategories,
    getById,
    createCategory,
    updateCategory,
    deleteCategory
}= require("../controllers/categories-ctrl")

categoriesRouter.get('/',getCategories)
categoriesRouter.get("/getById/:id" , getById)
categoriesRouter.post("/addProducts" , createCategory)
categoriesRouter.put("/updateProducts" , updateCategory)
categoriesRouter.delete("/deleteProducts" , deleteCategory)

module.exports = categoriesRouter;