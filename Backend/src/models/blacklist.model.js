const mongoose=require('mongoose')

const blacklistSchema=new mongoose.Schema({
token:{
    type:String,
    required:[true,"token is required"]
}
},{timestamps:true})
// this is model and schema creation for blacklisting tokens
// will use mongo for blacklisting and later REDIS will be used because of superior throughput
const blacklistModel= mongoose.model('blacklist',blacklistSchema)
    
module.exports=blacklistModel