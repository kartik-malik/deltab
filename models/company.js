const mongoose=require("mongoose");
const CompanySchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
});
const Company=mongoose.model("Company",CompanySchema);
module.exports=Company;