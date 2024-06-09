const express=require("express")
const router=express.Router()
const Product=require("../models/product.modal")
const authenticate=require("../middlewear/authenticate")
const authorise = require("../middlewear/authrise")


router.get("",authenticate,authorise(["seller","admin"]),async(req,res)=>{
    try {
        const {user}=req.user
        const product=await Product.find().lean().exec()
        res.status(200).send({product,user})
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post("",authenticate,authorise(["seller","admin"]),async(req,res)=>{
    try {
        const {user}=req.user      
        const product=await Product.create(req.body)
        res.status(200).send({product,user})
    } catch (error) {
        res.status(400).send(error)
    }
})



module.exports=router