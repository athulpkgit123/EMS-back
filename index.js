  
 

// import dotenv
require('dotenv').config()

// import databse connection

require('./DB-connection/connection')

// import express
const express=require('express')
// import router

const router =require('./Routes/router')

// import cors

const cors=require('cors')

// create server using express

const emsServer=express()

// use cors in server 
emsServer.use(cors())

// use parse
emsServer.use(express.json())

// use router

emsServer.use(router)
emsServer.use('/uploads',express.static('./uploads'))

// customise port


const PORT=4000||process.env.PORT

// run server

emsServer.listen(PORT,()=>{
    console.log(`ems server started at port ${PORT}`);

})

// request

// emsServer.post('/',(req,res)=>{
//     res.send(`<h1>ems server at port 4000</h1>`)
// })










