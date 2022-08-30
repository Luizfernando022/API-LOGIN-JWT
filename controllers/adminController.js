const jwt = require('jsonwebtoken')


module.exports = (req,res,next)=>{

    let token = req.header('authorization-token')
    if(!token) return res.send('Acesso Negado')

    try{
        req.user = jwt.verify(token,process.env.TOKEN_SECRET)
        next()
    }catch(erro){
       return res.send(erro)
    }

}