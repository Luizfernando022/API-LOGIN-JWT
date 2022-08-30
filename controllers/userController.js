const User = require('../models/User')

module.exports = {
    register: async (req,res)=>{
        let user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })

        try{
            let userSaved = await user.save()
            res.send(userSaved)
        }catch(erro){
            res.send(erro)
        }

    },

    login:(req,res)=>{
        res.send('Register')
    }
}