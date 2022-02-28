require("dotenv").config();

const express =require("express");
const app=express();
const mongoose=require("mongoose");
const companyRouter=require("./routes/company")
const employRouter =require("./routes/employee");
const cors =require("cors")
const errorHandler = require("./controllers/error");
const authRoutes   =require("./routes/auth")
const port =process.env.PORT ||8080
mongoose.connect("mongodb+srv://kartik:"+process.env.MONGO_PASS+"@cluster0.e0tsg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
// mongoose.connect('mongodb://localhost/deltax');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use("/company",companyRouter);
app.use("/employ",employRouter);
app.use("/api/auth", authRoutes);


app.use(function(req, res, next) {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
  });
  
  app.use(errorHandler);
app.listen(port,()=>{
console.log('Server Started');
});