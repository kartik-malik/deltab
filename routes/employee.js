const express = require("express");
const router=express.Router();
const {getAllEmployees,deleteEmployee, createEmployees} =require("../controllers/employee");
router.route("/").get(getAllEmployees).post(createEmployees)
router.delete("/:eid",deleteEmployee);

module.exports=router;