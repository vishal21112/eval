require("dotenv").config()
const express = require("express")
const {PostModel}=require("../model/model")
const postrouter = express.Router()
postrouter.use(express.json())


postrouter.post("/post",async(req,res)=>{
    try{
        let post = new PostModel(req.body)
        await post.save()
        res.send({msg:`new post is added`})
    }catch(err){
        res.send({err:`${err.message}`})
    }
})

postrouter.get("/",async(req,res)=>{
    try{
        let post = await PostModel.find({device:req.body.device})
        
        res.send(post)
    }catch(err){
        res.send({err:`${err.message}`})
    }
})


postrouter.patch("/update/:id",async(req,res)=>{
    try{
        await PostModel.findByIdAndUpdate({_id:req.params.id},req.body)
        res.send("post is updated")
        
        res.send(post)
    }catch(err){
        res.send({err:`${err.message}`})
    }
})

postrouter.delete("/delete/:id",async(req,res)=>{
    try{
        await PostModel.findByIdAndDelete({_id:req.params.id},req.body)
        res.send("post is deleted")
        
        res.send(post)
    }catch(err){
        res.send({err:`${err.message}`})
    }
})


module.exports={
    postrouter
}