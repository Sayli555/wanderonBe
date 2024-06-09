const express=require("express")
const cors = require('cors');
const helmet=require('helmet');
const cookieParser = require('cookie-parser');
const xss = require('xss-clean');
const connect=require("./configu/db")
const {register,login,logout}=require("./controller/auth.controller")
const productController=require("./controller/product.controller")
const { registerValidationRules, loginValidationRules, validate } = require('./middlewear/validation');
require("dotenv").config()

const app=express()
app.use(cors())
app.use(express.json())
app.use(cookieParser());
app.use(helmet());
app.use(xss());



app.post("/register",registerValidationRules(), validate,register)
app.post("/login",loginValidationRules(),validate,login)
app.post('/logout', logout);
app.use("/products",productController)
app.listen(process.env.PORT,async()=>{
    try {
        await connect()
        console.log(`server running on PORT: ${process.env.PORT}`)
    } catch (error) {
        console.log("error",error)
    }
})