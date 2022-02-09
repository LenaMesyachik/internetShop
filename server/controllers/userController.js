
const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const {User, Basket} = require('../models/models')
const  jwt = require('jsonwebtoken')
const  generateJwt = (id, email, role) => {
     return jwt.sign({id, email, role}, process.env.SECRET_KEY, {expiresIn: '24h'})
}
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
        const token = generateJwt(user.id, user.email, user.role)
        return response.json({token})
    }


    async login (request, response, next) {
const {email, password} = request.body
        const user  = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.internal('пользователь не найден'))
        }
        let  comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('пользователь не найден'))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return response.json({token})
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