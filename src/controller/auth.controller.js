const User=require("../models/user.model")
const jwt=require("jsonwebtoken")


const newTocken=(user)=>{
    return jwt.sign({user:user},process.env.JWT_SECRET_KEY)
}

const register=async(req,res)=>{
    let user;
    try {
        user= await User.findOne({email:req.body.email}).lean().exec()
        if(user){
            return res.status(400).send({status:"failed",message:"Please login with another email"})
        }
        user=await User.create(req.body)
        if(!user){
            return res.status(500).send({status:"failed",message:"Please try again letter"})
        }
        let token=newTocken(user)
        res.status(200).json({user,token})
    } catch (error) {
        return res.status(400).send({status:"failed",message:"Please login with another email"})
    }    
}

const login=async(req,res)=>{
    let user; 
    try {
        user=await User.findOne({email:req.body.email}).exec()
        if(!user) {return res.status(400).send({status:"failed",message:"Please login with another email"})}
       let match=await user.checkPassword(req.body.password)  
       if(!match)  return res.status(400).send({status:"failed",message:"Please login with another email and password"})
       user={
        ...user._doc
       }
       delete user.password
       let token=newTocken(user)
       res.cookie('token', token, { httpOnly: true, secure: true });
       res.status(200).json({token:token,user:user})
    } catch (error) {
        return res.status(400).send({status:"failed",message:"Please login with another email and password"})
    }
}


const logout = (req, res) => {
    res.clearCookie('token', { httpOnly: true, secure: true });
    res.status(200).send({ status: "success", message: "Logged out successfully" });
};

module.exports={register,login,logout}