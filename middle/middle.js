require("dotenv").config()
const bcrypt = require("bcrypt")
const {UserModel} = require("../model/model")
const jwt = require("jsonwebtoken")


const tokenVerify = async(req,res,next)=>{
    let token = req.headers.authorization
    try{
        jwt.verify(token,process.env.secretKEY,(err,decode)=>{
            if(decode){
                console.log(decode);
                req.body.auther=decode.userid
                next()
            }else{
                res.send({err:`jwt is not working`})
            }
        })
    }catch(err){

    }
}

module.exports={tokenVerify}