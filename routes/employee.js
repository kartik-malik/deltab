const express = require("express");
const router=express.Router();
const {getAllEmployees,deleteEmployee, createEmployees, editEmployee} =require("../controllers/employee");
router.route("/").get(getAllEmployees).post(createEmployees)
router.put("/:eid",editEmployee)
router.delete("/:eid",deleteEmployee);

module.exports=router;