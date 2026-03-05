const Redis=require('ioredis').default //.default for automatic suggestions
//importing redis here

const redis=new Redis({
    //initialising redis here with .env vars
    host:process.env.REDIS_HOST,
    port:process.env.REDIS_PORT,
    password:process.env.REDIS_PASSWORD
})

redis.on('connect', ()=>{
    console.log('server is connected to redis');
    
})

redis.on("error",(err)=>{
    console.log(err)
})

module.exports=redis