const mongoose=require('mongoose');
require("dotenv").config();
const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,useUnifiedTopology
:true}).then(()=>console.log("database connection successfully estalished"))
.catch((error)=>{
    console.log("database connection failed");
    process.exit(1);})
}

module.exports=dbConnect;