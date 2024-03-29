const employee = require("../models/employee");
// const employee=require("../models/employee");
exports.getAllEmployees=async function(req,res,next){
    try {
        const employees=await employee.find({}).populate("company").exec();
        return res.send(employees);
    } catch (error) {
        next(error);
    }
}
exports.editEmployee=async (req,res,next)=>{    
    // const {}
    try {
        const employId=req.params.eid
    const {status,notes,company,name}=req.body;
    const updated=await employee.findOneAndUpdate({_id:employId},{status,notes,company,name},{new:true}).populate("company").exec();

    res.send(updated)
    } catch (error) {
        next(error);
        
    }
}
exports.deleteEmployee=async (req,res,next)=>{
    try {
        const employId=req.params.eid
        const updated=await employee.findByIdAndRemove(employId);

    } catch (error) {
        next(error);
    }
}
exports.createEmployees=async (req,res,next)=>{
    try {
        const {status,notes,company,name}=req.body;
        let data=await employee.create({status,notes,company,name});
     data=  await employee.findById(data._id).populate("company").exec();
    console.log(data)
        res.send(data);
    }
    catch(error){
        console.log(error)
          next(error)
    }
}
