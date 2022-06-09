const dotenv=require("dotenv");
const mongoose=require('mongoose');
const express=require('express');
const app=express();
dotenv.config({path:'./config.env'});
require('./db/conn')
const Student=require('./model/studentschema')

app.use(express.json());

app.use(require('./router/auth'))


app.listen(3000,function(err){
    if(err) console.log("error occurs")
    console.log("app  is running on port 3000");
})
// mongodb+srv://vaibhav_8101:<password>@cluster0.kadmd.mongodb.net/?retryWrites=true&w=majority