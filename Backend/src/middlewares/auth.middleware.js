const blacklistModel = require('../models/blacklist.model')
const userModel=require('../models/user.model')
const redis=require('../config/cache')
const jwt= require('jsonwebtoken')

async function authUser(req,res,next) {

    
    const token = req.cookies.token

    if(!token){
        return res.status(401).json({
            message:'Token not Provided'
        })
    }

    const isTokenBlacklisted=await redis.get(token) //using redis not mongo to check if token blacklisted
// MIDDLEWARE TO CHECK IF THE TOKEN IS BLACKLISTED BEFORE CHECKING IF THE TOKEN EXISTS 
    if (isTokenBlacklisted){
        return res.status(401).json({
            message:'INVALID TOKEN'
        })
    }

    try{
    const decoded=jwt.verify(token,process.env.JWT_SECRET)// JWT.VERIFY : CHECKS if token is correct and not expired 
    // if token is correct then the data of that token is returned into decoded, but if wrong/expired ,then decoded throws an error 
     
    req.user=decoded
    next()// req.user will be forwarded to the controller that follows
    }
    catch(err){
        return res.status(401).json({
            message:'Invalid Token'
        })
    }


}


module.exports={authUser}