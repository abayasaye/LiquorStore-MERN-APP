const departmentRouter = require("express").Router()
const {
    getDepartments,
    getById,
    createDepartment,
    updateDepartment,
    deleteDepartment
} = require("../controllers/departments-ctrl")

departmentRouter.get('/',getDepartments)
departmentRouter.get("/getById/:id" , getById)
departmentRouter.post("/addProducts" , createDepartment)
departmentRouter.put("/updateProducts" , updateDepartment)
departmentRouter.delete("/deleteProducts" , deleteDepartment)

module.exports = departmentRouter;