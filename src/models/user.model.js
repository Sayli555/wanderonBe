const mongoose=require("mongoose")
const bcrypt=require("bcrypt")

const userSchema=new mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true},
    roles:[{type:String,require:true}]
},{
    versionKey:false,
    timestamps:true
})

userSchema.pre("save",function (next){
if(!this.isModified("password")) return next()
  
    const hash = bcrypt.hashSync(this.password, 8);
    this.password=hash;
    return next()
    
})

userSchema.methods.checkPassword =  function(password) {
    try {
        return  bcrypt.compareSync(password, this.password);
    } catch (error) {
        throw new Error(error);
    }
};

module.exports= mongoose.model("user",userSchema)