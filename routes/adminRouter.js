const express = require('express') 
const router = express.Router()
const auth = require('../controllers/adminController.js')


router.get('/',auth,(req,res)=>{
    if(req.user.admin){
        res.send('Se você está vendo isso, você é um administrador')
    }else{
        res.send('só para administadorses')
    }
   
})

module.exports = router