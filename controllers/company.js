const Company=require("../models/company")
exports.getAllComapnies=async function(req,res){
  let companies=await Company.find({});
  companies=companies.map((item)=>item.name)
  res.send(companies);
}
exports.createCompanies=async function(req,res){
    const {name}=req.body
    const newComp=await Company.create({name});
    res.send(newComp);
}