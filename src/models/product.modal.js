

const mongoose=require("mongoose")

const productSchema=new mongoose.Schema({
    city:{type:String,require:true},
    prize:{type:String,require:true},
    image:{type:String,require:true},

},
{
    versionKey:false,
    timestamps:true
})

module.exports=mongoose.model("product",productSchema)