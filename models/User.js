const mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    name:{type:String,minlength:3,maxlength:20,required:true},
    email:{type:String,minlength:10,maxlength:100,required:true},
    password:{type:String,minlength:6,maxlength:100,required:true},
    admin:{type:Boolean,default:false},
    createdAt:{type:Date,default:Date.now}
})


module.exports = mongoose.model('User',userSchema)