require('dotenv').config()
const express = require('express')
const app = express()
const userRouter = require('./routes/userRouter')

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_CONNECTION_URL,
    (erro)=>{
        if(erro) throw erro
        else console.log('Banco de dados conectado')
    })


app.use('/user',express.json(),userRouter)

app.listen(process.env.PORT,()=>{console.log('Server Running')})