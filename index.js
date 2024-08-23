const express=require("express");
const app=express();

require("dotenv").config();
const PORT=process.env.PORT || 8000;

const dbConnect=require('./config/database');
dbConnect();

//middleware
app.use(express.json());

const myRoutes=require('./routes/blogRoutes')
app.use("/api/v1",myRoutes);


app.listen(PORT,()=>console.log(`active ${PORT}`));




