const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
    
    register: async (req,res)=>{

        let selectedUser = await User.findOne({email:req.body.email})

        if(selectedUser) return res.status(400).send('Email ja está cadastrado')

            let user = new User({
                name: req.body.name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password,bcrypt.genSaltSync(14))
            })
    
            try{
                let userSaved = await user.save()
                res.send(userSaved)
            }catch(erro){
                res.send(erro)
            }
    
    },

    login: async (req,res)=>{
        
        let email = req.body.email
        let password = req.body.password

        let user = await User.findOne({email})
        if(!user) return res.status(400).send('Email ou senha incorreto!')
            
            let userPassword = user.password

            if(!bcrypt.compareSync(password,userPassword)){
                 res.status(400).send('Email ou senha incorreto!')
            }else {
                let token = jwt.sign({_id:user._id},process.env.TOKEN_SECRET)
                res.header('authorization-token',token)
                res.send(user)
            }


    }
}