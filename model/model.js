const mongoose = require("mongoose")

const userschema = mongoose.Schema({
    name: {type:String,required:true},
email :{type:String,required:true},
gender :{type:String,required:true},
password :{type:String,required:true},
age :{type:Number,required:true},
city :{type:String,required:true}
},
{
    versionKey:false
})

const Postschema = mongoose.Schema({
    title : {type:String,required:true},
body : {type:String,required:true},
device : {type:String,required:true},
no_if_comments : {type:Number,required:true},
},
{
    versionKey:false
})


const PostModel=mongoose.model('post',Postschema)

const UserModel = mongoose.model('user',userschema)


module.exports={
    UserModel,PostModel
}