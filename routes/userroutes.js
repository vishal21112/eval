require("dotenv").config()
const express = require("express")
const bcrypt=require("bcrypt")
const jwt = require("jsonwebtoken")
const {UserModel}=require("../model/model")
const userrouter= express.Router()
userrouter.use(express.json())

userrouter.post("/register", async(req,res)=>{
    const {name,email,gender,password,age,city}=req.body
    try{
       bcrypt.hash(password, 4,async(err, hash)=> {
            if(err){
                res.send({"msg":err.message})
            }else{
                const user = new UserModel({name,email,gender,password:hash,age,city})
                await user.save()
                res.send("New user added")
            }
        });
    }
    catch(err){
        res.send({"msg":err.message})
    }
})
userrouter.post("/login",async(req,res)=>{
    try{
        let user = await UserModel.findOne({email:req.body.email})
    let token= jwt.sign({ userid:user._id}, process.env.secretKey, {expiresIn:"1h"}) 
     res.send({name:user.name,token:token}) 
    } 
    catch(err){
        res.send({"msg":err.message})
    } 
      

})

module.exports={
    userrouter
}
