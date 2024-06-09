

const authorise=(permittedRole)=>function(req,res,next){
    const {user}=req.user.user
    const roles=user.roles
    const is_permitted=permittedRole.filter(role=>roles.includes(role))
    if(is_permitted.length>0){
        console.log("is permitted")
    }
    else{
        console.log("not permmited")
    }
    next()
}

module.exports=authorise