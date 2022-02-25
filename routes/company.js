const express = require("express");
const router=express.Router();
const {getAllComapnies,createCompanies} =require("../controllers/company");
router.get("/",getAllComapnies)
router.post("/",createCompanies);

module.exports=router