require("dotenv").config()
const express = require("express")
const {connection}=require("./database")
const { postrouter } = require("./routes/postroutes")
const {userrouter}=require("./routes/userroutes")
const {tokenVerify}=require("./middle/middle")
const app=express()
app.use(express.json())

app.use("/user",userrouter)
app.use(tokenVerify)
app.use("/post",postrouter)



// {
//     "name": "shivam",
//     "email" :"shivam@gmail.com",
//     "gender" :"male",
//     "password" :"shivam",
//     "age" :23,
//     "city" :"gkp"
//     }


app.get("/",(req,res)=>{
    res.send("WELCOME TO HOME PAGE")
})

app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("server is connected to database")
    }catch(err)
    {console.log("server is not connected to database",`"msg":err.message`)}
    console.log(`server is running at port ${process.env.port}`);
})
