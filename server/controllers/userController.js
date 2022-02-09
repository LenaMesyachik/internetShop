
const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const {User, Basket} = require('../models/models')
const  jwt = require('jsonwebtoken')
const  generateJwt =
class UserController {
    async registration (request, response, next) {
const {email, password, role} = request.body
        if (!email || !password) {
            return next (ApiError.badRequest('некорректный email  или password'))
        }
        const candidate = await User.findOne({where: email})
        if (candidate) {
            return next (ApiError.badRequest('Пользователь с таким email  уже существует'))
        }
        const hashPassword  = await bcrypt.getRounds(password, 5)
        const user = await  User.create({email, role, password:hashPassword})
        const basket = await Basket.create({userID: user.id})
        const token = jwt.sign({id:user.id, email: user.email, role}, process.env.SECRET_KEY, {expiresIn: '24h'})
        return token
    }


    async login (request, response) {

}

    async check (request, response, next) {
const {id} = request.query
        if (!id){
           return next(ApiError.badRequest('не задан ID'))
        }
        response.json(id)
}
}
 module.exports = new UserController()