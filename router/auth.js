const express=require('express');
const Student = require('../model/studentschema');
const router=express.Router();
router.get('/',(req,res)=>{
    res.send(`Hello  i am  in auth`)
})

router.post('/register',(req,res)=>{
    console.log(req.body);
    // res.json({message:req.body});
    const {ROLLNO,FNAME,LNAME,BRANCH,EMAILID,PHONENO,GENDER,YEAR,SEM,USER_NAME,PASSWORD}=req.body;

    if(!ROLLNO || !FNAME || !LNAME || !BRANCH || !EMAILID || !PHONENO || !GENDER || !YEAR || !SEM || !USER_NAME || !PASSWORD)
    {
        return res.status(422).json({error:"Plz filled the details properly"});
    }
    const student=new Student({ROLLNO,FNAME,LNAME,BRANCH,EMAILID,PHONENO,GENDER,YEAR,SEM,USER_NAME,PASSWORD});

    student.save().then(()=>{
        res.status(201).json({message:"Registered successfully"});
    }).catch((err)=>{res.status(500).json({error:"Failed"});
console.log(err)})
})

module.exports=router;