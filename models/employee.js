const mongoose=require("mongoose");
const EmployeeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Company'
    },
    notes:{
        type:String,

    },
    status:{
        type:Boolean,
        default:true,
    }
},{
    timestamps:{
        createdAt:true,
        updatedAt:true,
    }
})
const employee=mongoose.model("employee",EmployeeSchema)
module.exports=employee