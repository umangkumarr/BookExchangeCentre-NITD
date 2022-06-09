const mongoose = require('mongoose');
const studentSchema=new mongoose.Schema({
    ROLLNO:{
        type:Number,
        required:true
    },
    FNAME:{
        type:String,
        required:true
    },
    LNAME:{
        type:String,
        required:true
    }
    ,
    BRANCH:{
        type:String,
        required:true
    }
    ,
    EMAILID:{
        type:String,
        required:true
    }
    ,
    PHONENO:{
        type:Number,
        required:true
    }
    ,
    GENDER:{
        type:String,
        required:true
    }
    ,
    YEAR:{
        type:String,
        required:true
    }
    ,
    SEM:{
        type:String,
        required:true
    }
    ,
    USER_NAME:{
        type:String,
        required:true
    }
    ,
    PASSWORD:{
        type:String,
        required:true
    }

})

const Student=mongoose.model('STUDENT',studentSchema);

module.exports=Student