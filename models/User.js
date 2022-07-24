
const mongoose=require('mongoose')
const Schema=mongoose.Schema;

const UserSchema=new Schema({
    id:{
        type:String,
    } ,
    firstName:{
        type:String,
        require:true
    } ,
    lastName:{
        type:String,
        require:true
    } ,
    email:{
        type:String,
        require:true
    } ,
    dateOfBirth:{
        type:Date,
        require:true
    } ,
    mobile:{
        type:String,
        require:true
    } ,
    status:{
        type:String,
        require:true
    } ,
    password:{
        type:String,
        require:true
    } ,
    accountType:{
        type:String,
        require:true
    } 
});
module.exports=User=mongoose.model('users',UserSchema);