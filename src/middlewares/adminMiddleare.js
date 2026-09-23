
function rolesMiddleware(role){
    return function(req, res, next){
        if(req.user.role !== role){
            let message = `acesso negado!`
            return res.status(403).json({ message })
        }
        next()

    }
}








export default rolesMiddleware